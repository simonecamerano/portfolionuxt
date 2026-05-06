import { defineEventHandler, readBody, createError, getRequestIP } from 'h3'

interface ContactPayload {
  name: string
  email: string
  subject: string
  message: string
}

interface EmailJsPayload {
  service_id: string
  template_id: string
  user_id: string
  accessToken?: string
  template_params: Record<string, string>
}

// Basic email regex — intentionally simple, backend is not the last line of defense
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const EMAILJS_ENDPOINT = 'https://api.emailjs.com/api/v1.0/email/send'

async function sendEmailJs(payload: EmailJsPayload) {
  const response = await $fetch.raw(EMAILJS_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: payload,
  }).catch((error: { response?: { status?: number, _data?: unknown }, data?: unknown }) => {
    console.error('[contact] EmailJS error', {
      templateId: payload.template_id,
      status: error.response?.status,
      data: error.response?._data ?? error.data,
    })

    throw createError({
      statusCode: 502,
      message: 'Non sono riuscito a inviare il messaggio. Riprova tra poco.',
    })
  })

  if (response.status < 200 || response.status >= 300) {
    throw createError({
      statusCode: 502,
      message: 'Non sono riuscito a inviare il messaggio. Riprova tra poco.',
    })
  }
}

export default defineEventHandler(async (event) => {
  const body = await readBody<ContactPayload>(event)
  const config = useRuntimeConfig(event)

  if (!body.name?.trim()) {
    throw createError({ statusCode: 400, message: 'Il nome è obbligatorio.' })
  }
  if (!body.email?.trim() || !EMAIL_RE.test(body.email)) {
    throw createError({ statusCode: 400, message: 'Inserisci un indirizzo email valido.' })
  }
  if (!body.subject?.trim()) {
    throw createError({ statusCode: 400, message: "L'oggetto è obbligatorio." })
  }
  if (!body.message?.trim() || body.message.trim().length < 10) {
    throw createError({ statusCode: 400, message: 'Il messaggio deve contenere almeno 10 caratteri.' })
  }

  const serviceId = config.emailjsServiceId
  const templateId = config.emailjsTemplateId
  const confirmationTemplateId = config.emailjsConfirmationTemplateId
  const publicKey = config.emailjsPublicKey

  if (!serviceId || !templateId || !publicKey) {
    throw createError({
      statusCode: 500,
      message: 'Il servizio email non è configurato. Riprova più tardi.',
    })
  }

  const name = body.name.trim()
  const email = body.email.trim()
  const subject = body.subject.trim()
  const message = body.message.trim()
  const accessToken = config.emailjsPrivateKey || undefined
  const commonParams = {
    name,
    email,
    user_name: name,
    user_email: email,
    from_name: name,
    from_email: email,
    reply_to: email,
    to_email: email,
    subject,
    message,
    user_ip: getRequestIP(event, { xForwardedFor: true }) ?? '',
  }

  await sendEmailJs({
    service_id: serviceId,
    template_id: templateId,
    user_id: publicKey,
    accessToken,
    template_params: commonParams,
  })

  if (confirmationTemplateId) {
    await sendEmailJs({
      service_id: serviceId,
      template_id: confirmationTemplateId,
      user_id: publicKey,
      accessToken,
      template_params: {
        ...commonParams,
        to_name: name,
        to_email: email,
      },
    }).catch((error) => {
      console.error('[contact] confirmation email failed', error)
    })
  }

  return { success: true }
})
