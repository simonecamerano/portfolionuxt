import { defineEventHandler, readBody } from 'h3'
import { cambiaStatoLead } from '../../utils/lead'

export default defineEventHandler(async (event) => {
  const body = await readBody<{ token?: string }>(event)
  const token = body?.token?.trim()

  // POST e non GET di proposito: i client email fanno prefetch dei link, e un
  // GET che cambia stato disiscriverebbe chi non ha cliccato niente.
  if (token && /^[0-9a-f-]{36}$/i.test(token)) {
    await cambiaStatoLead({ tokenOptout: token }, 'escluso')
  }
  // Risposta identica sempre: un token valido e uno inventato non si
  // distinguono, altrimenti l'endpoint diventa un oracolo per enumerare token.
  return { success: true }
})
