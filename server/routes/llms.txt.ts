import { identity } from '~/data/identity'
import { services } from '~/data/services'
import { projects } from '~/data/projects'

// llms.txt (llmstxt.org): a plain summary of the site for AI crawlers, built
// from the same data as the pages so it never drifts from them.
export default defineEventHandler((event) => {
  const rawSiteUrl = useRuntimeConfig().public.siteUrl as string
  const base = (rawSiteUrl.startsWith('http') ? rawSiteUrl : `https://${rawSiteUrl}`).replace(/\/$/, '')

  const lines = [
    `# ${identity.name}`,
    '',
    `> ${identity.tagline}. ${identity.summary}`,
    '',
    `${identity.background} Disponibile per progetti freelance con PMI e piccoli team, con sede a ${identity.address.addressLocality} (${identity.address.addressRegion}).`,
    '',
    '## Servizi',
    '',
    ...services.map((s) => `- [${s.title}](${base}/servizi): ${s.desc}`),
    '',
    '## Pagine principali',
    '',
    `- [Home](${base}/): chi sono, problemi che risolvo, metodo e contatti`,
    `- [Soluzioni](${base}/servizi): servizi nel dettaglio e casi in cui sono utili`,
    `- [Chi sono](${base}/about): percorso, esperienza operativa e competenze`,
    `- [Progetti](${base}/progetti): tutti i lavori, con casi studio`,
    '',
    '## Progetti',
    '',
    ...projects.map((p) => `- [${p.title}](${base}/progetti/${p.slug}): ${p.description}`),
    '',
    '## Contatti',
    '',
    `- Email: ${identity.email}`,
    ...identity.sameAs.map((url) => `- ${url}`),
    '',
  ]

  setHeader(event, 'Content-Type', 'text/plain; charset=utf-8')
  return lines.join('\n')
})
