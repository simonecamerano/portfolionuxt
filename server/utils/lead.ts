import { getDb } from './db'

// Il ramo 'id' (marcatura "gestito") passa solo da 'nuovo': evita che una
// chiamata duplicata riporti a 'gestito' un lead che nel frattempo si e'
// disiscritto. Il ramo 'tokenOptout' (opt-out) non ha questa restrizione:
// la disiscrizione deve valere qualunque sia lo stato corrente del lead
// (nuovo, gestito...), altrimenti chi si disiscrive dopo essere gia' stato
// marcato "gestito" non risulta escluso da nessuna parte pur ricevendo
// risposta di successo.
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
         WHERE token_optout = $1 AND stato != 'escluso'`,
        [filtro.tokenOptout, nuovoStato],
      )
  return (res.rowCount ?? 0) > 0
}

export function verificaTokenAzione(ricevuto: string | undefined): boolean {
  const atteso = process.env.NUXT_LEAD_ACTION_TOKEN || process.env.LEAD_ACTION_TOKEN
  return Boolean(atteso) && ricevuto === atteso
}
