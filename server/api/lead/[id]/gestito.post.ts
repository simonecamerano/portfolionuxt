import { defineEventHandler, createError, getHeader } from 'h3'
import { cambiaStatoLead, verificaTokenAzione } from '../../../utils/lead'

export default defineEventHandler(async (event) => {
  if (!verificaTokenAzione(getHeader(event, 'x-lead-token'))) {
    throw createError({ statusCode: 401, message: 'Non autorizzato.' })
  }

  const id = Number(event.context.params?.id)
  if (!Number.isInteger(id) || id <= 0) {
    throw createError({ statusCode: 400, message: 'Id lead non valido.' })
  }

  await cambiaStatoLead({ id }, 'gestito')
  // Risposta uguale anche se l'id non esiste o era gia' chiuso: chi chiama e'
  // un bottone su un telefono, non deve ritentare ne' vedere errori.
  return { success: true }
})
