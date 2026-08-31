import { defineEventHandler, readBody, createError, getRequestIP } from 'h3'
import { getDb } from '../utils/db'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const TELEFONO_RE = /^[+\d][\d\s]{6,}$/

// Stesso schema di rate limiting di contact.post.ts: in-memory, va bene per un
// singolo processo node-server, servirebbe uno store condiviso su piu' istanze.
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000
const RATE_LIMIT_MAX_REQUESTS = 5
const requestLog = new Map<string, number[]>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const recent = (requestLog.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS)
  if (recent.length >= RATE_LIMIT_MAX_REQUESTS) {
    requestLog.set(ip, recent)
    return true
  }
  recent.push(now)
  requestLog.set(ip, recent)
  return false
}

// Normalizza e limita: l'endpoint e' pubblico e scrive su colonne TEXT senza
// limite. Gestisce anche il caso array, che route.query produce quando un
// parametro UTM e' ripetuto nella URL.
function testo(valore: unknown, max: number): string | null {
  const v = Array.isArray(valore) ? valore[0] : valore
  if (typeof v !== 'string') return null
  const pulito = v.trim().slice(0, max)
  return pulito.length > 0 ? pulito : null
}

async function avvisaN8n(payload: Record<string, unknown>) {
  const url = process.env.NUXT_N8N_WEBHOOK_URL || process.env.N8N_WEBHOOK_URL
  const token = process.env.NUXT_N8N_WEBHOOK_TOKEN || process.env.N8N_WEBHOOK_TOKEN
  if (!url) return
  // Fire-and-forget: il form risponde subito, il lead e' gia' su Postgres.
  $fetch(url, {
    method: 'POST',
    headers: token ? { 'x-webhook-token': token } : {},
    body: payload,
  }).catch((error) => {
    console.error('[lead] notifica n8n fallita', error)
  })
}

// Notifica push diretta a ntfy, non tramite n8n: il nodo HTTP Request di n8n
// resta bloccato indefinitamente su questa chiamata specifica (bug interno al
// Task Runner/client HTTP di n8n, verificato e non risolvibile lato config il
// 2026-08-31). n8n resta comunque nel flusso per l'email di conferma Brevo e
// l'update di notifica_inviata_il su Postgres.
async function avvisaNtfy(payload: { leadId: number; nome: string; telefono: string; azienda: string | null }) {
  const url = process.env.NTFY_URL || 'https://ntfy.simonecamerano.dev/speed-to-lead-simone'
  const user = process.env.NTFY_USER
  const password = process.env.NTFY_PASSWORD
  const leadActionToken = process.env.LEAD_ACTION_TOKEN
  if (!user || !password) return
  const auth = Buffer.from(`${user}:${password}`).toString('base64')
  const corpo = `Nuovo lead: ${payload.nome}\ntel: ${payload.telefono}\n${payload.azienda ?? ''}`
  $fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain',
      Authorization: `Basic ${auth}`,
      Title: 'Nuovo lead speed-to-lead',
      Priority: 'high',
      Actions: `http, Gestito, https://simonecamerano.dev/api/lead/${payload.leadId}/gestito, method=POST, headers.x-lead-token=${leadActionToken}, clear=true`,
    },
    body: corpo,
  }).catch((error) => {
    console.error('[lead] notifica ntfy fallita', error)
  })
}

export default defineEventHandler(async (event) => {
  const ip = getRequestIP(event, { xForwardedFor: true }) ?? 'unknown'
  if (isRateLimited(ip)) {
    throw createError({ statusCode: 429, message: 'Troppe richieste. Riprova più tardi.' })
  }

  const body = await readBody<Record<string, unknown>>(event)

  // Honeypot: campo nascosto nel form, invisibile agli umani, compilato dai bot.
  // Risposta 200 finta per non rivelare la difesa a chi la sta testando.
  if (testo(body.honeypot, 200)) {
    return { success: true }
  }

  const nome = testo(body.nome, 120)
  const telefono = testo(body.telefono, 32)
  const emailRaw = testo(body.email, 254)

  if (!nome) {
    throw createError({ statusCode: 400, message: 'Il nome è obbligatorio.' })
  }
  if (!telefono || !TELEFONO_RE.test(telefono)) {
    throw createError({ statusCode: 400, message: 'Inserisci un numero di telefono valido.' })
  }
  if (!emailRaw || !EMAIL_RE.test(emailRaw)) {
    throw createError({ statusCode: 400, message: 'Inserisci un indirizzo email valido.' })
  }
  if (body.consenso !== true) {
    throw createError({ statusCode: 400, message: 'Il consenso al trattamento dati è obbligatorio.' })
  }

  const email = emailRaw.toLowerCase()
  const db = getDb()

  // Anti-duplicati: solo sull'email normalizzata, non sul telefono. Due persone
  // della stessa azienda mettono lo stesso numero di centralino, e con l'OR sul
  // telefono la seconda richiesta sparirebbe senza notifica. Finestra corta: il
  // caso da coprire e' il doppio invio, non il cliente di ieri.
  const azienda = testo(body.azienda, 120)

  const esistente = await db.query(
    `SELECT id, token_optout, notifica_inviata_il, azienda FROM lead
     WHERE lower(email) = $1 AND creato_il > now() - interval '6 hours'
     LIMIT 1`,
    [email],
  )

  if (esistente.rows.length > 0) {
    const riga = esistente.rows[0]
    // Se la notifica non era mai partita, il lead non ha ricevuto niente:
    // riprova, altrimenti chi non ha visto l'email non la vede nemmeno adesso.
    if (!riga.notifica_inviata_il) {
      await avvisaN8n({ leadId: riga.id, nome, telefono, email, tokenOptout: riga.token_optout })
      await avvisaNtfy({ leadId: riga.id, nome, telefono, azienda: riga.azienda })
    }
    return { success: true, id: riga.id }
  }

  const inserito = await db.query(
    `INSERT INTO lead (nome, telefono, email, azienda, messaggio,
                       utm_source, utm_medium, utm_campaign, consenso_dato_a)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, now())
     RETURNING id, token_optout`,
    [nome, telefono, email,
     azienda, testo(body.messaggio, 2000),
     testo(body.utm_source, 200), testo(body.utm_medium, 200), testo(body.utm_campaign, 200)],
  )
  const { id: leadId, token_optout: tokenOptout } = inserito.rows[0]

  await avvisaN8n({ leadId, nome, telefono, email, tokenOptout })
  await avvisaNtfy({ leadId, nome, telefono, azienda })

  return { success: true, id: leadId }
})
