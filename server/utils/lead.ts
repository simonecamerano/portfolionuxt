import { getDb } from './db'

// Passa solo da 'nuovo': evita che una chiamata duplicata riporti a 'gestito'
// un lead che nel frattempo si e' disiscritto.
export async function cambiaStatoLead(
  filtro: { id: number } | { tokenOptout: string },
  nuovoStato: 'gestito' | 'escluso',
): Promise<boolean> {
  const db = getDb()
  const res = 'id' in filtro
    ? await db.query(
        `UPDATE lead SET stato = $2, aggiornato_il = now()
         WHERE id = $1 AND stato = 'nuovo'`,
        [filtro.id, nuovoStato],
      )
    : await db.query(
        `UPDATE lead SET stato = $2, aggiornato_il = now()
         WHERE token_optout = $1 AND stato = 'nuovo'`,
        [filtro.tokenOptout, nuovoStato],
      )
  return (res.rowCount ?? 0) > 0
}

export function verificaTokenAzione(ricevuto: string | undefined): boolean {
  const atteso = process.env.NUXT_LEAD_ACTION_TOKEN || process.env.LEAD_ACTION_TOKEN
  return Boolean(atteso) && ricevuto === atteso
}
