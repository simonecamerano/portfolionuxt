# Design: Rebranding — AI Workflow Engineer & Full Stack Developer

**Date:** 2026-05-27  
**Branch:** dev  
**Status:** Approved

---

## Goal

Update copy, data, and meta tags across the portfolio to reflect the new professional positioning: **AI Workflow Engineer & Full Stack Developer**, replacing the previous "Web Developer" positioning. No design, layout, animation, or application logic changes.

---

## TypeScript Adaptations

The incoming spec uses fields not present in the existing TypeScript types. Resolved as follows:

### `Project` type (`app/types/index.ts`)
Required fields: `id, slug, title, category, description, image, tags, link, featured`  
Optional: `github?, year?, longDescription?`

- Spec uses `demo: null` → not in type. Map to `link: github_url` instead.
- Spec uses `demo: null` for projects with no live URL → `link` will equal the GitHub URL.
- New projects get ids 11 and 12.
- `featured: true` for new AI projects (appear on homepage).
- `longDescription`: placeholder string (existing pattern).

### `Stat` type (`app/types/index.ts`)
Required fields: `value, label, suffix`

- New stats omit suffix in spec → add `suffix: '+'` for all three.

### `TechItem` type (`app/types/index.ts`)
Required fields: `name, abbr, color, bgColor, borderColor`

- Spec provides only `name, abbr, color` → derive `bgColor` and `borderColor` using the same rgba opacity pattern as existing items.

---

## File Map

| File | Change |
|---|---|
| `app/pages/index.vue` | Update `useSeoMeta` title, description, og*, twitter* |
| `app/components/HeroSection.vue` | Replace h1, subtitle, code mockup object fields and comment |
| `app/components/AboutSection.vue` | Replace two biography paragraphs |
| `app/data/stats.ts` | Replace all three stat entries |
| `app/data/projects.ts` | Add 2 AI projects at top; set HundredPath `featured: false`; remove TicTacVue (id:5) and Sunnee (id:6) |
| `app/data/technologies.ts` | Add OpenAI, DeepSeek, Ollama, Docker (skip Docker if already present) |
| `app/pages/about.vue` | Replace `storyParagraphs` array content with AI/operations narrative |
| `app/components/ContactSection.vue` | Replace one availability paragraph |

> **Meta tag location note:** The incoming spec targets `nuxt.config.ts` for meta tags, but the site's homepage meta are defined in `app/pages/index.vue` via `useSeoMeta`. Modifications applied there instead.

---

## Exact Changes

### `app/pages/index.vue` — `useSeoMeta`

```typescript
useSeoMeta({
  title: 'Simone Camerano — AI Workflow Engineer',
  description: 'AI Workflow Engineer e Full Stack Developer. Progetto pipeline AI, sistemi multi-agente e prodotti web che risolvono problemi reali di business.',
  ogTitle: 'Simone Camerano — AI Workflow Engineer',
  ogDescription: 'AI Workflow Engineer e Full Stack Developer. Progetto pipeline AI, sistemi multi-agente e prodotti web che risolvono problemi reali di business.',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Simone Camerano — AI Workflow Engineer',
  twitterDescription: 'AI Workflow Engineer e Full Stack Developer. Pipeline AI, workflow multi-agente, prodotti full stack.',
})
```

### `app/components/HeroSection.vue`

**h1 text:**
```
BEFORE: Creo esperienze digitali
<span class="text-gradient"> veloci, moderne</span>
e orientate al valore.

AFTER: Progetto e costruisco sistemi AI-native,
<span class="text-gradient"> pipeline di automazione</span>
e prodotti full stack.
```

**subtitle paragraph:**
```
BEFORE: Web developer specializzato in Vue, Nuxt e TypeScript.
Trasformo idee in prodotti digitali eleganti e performanti.

AFTER: Automazione intelligente, workflow multi-agente e sviluppo full stack.
Con un background di 26 anni nelle operations.
```

**Code mockup object:**
```javascript
// BEFORE
const developer = {
  name: "Simone Camerano",
  role: "Web Developer",
  stack: ["Vue", "Node", "TS"],
  passion: "clean code",
  available: true,
}
// disponibile per freelance

// AFTER
const developer = {
  name: "Simone Camerano",
  role: "AI Workflow Engineer",
  stack: ["Node", "Vue", "LLMs"],
  focus: "AI systems",
  available: true,
}
// aperto a collaborazioni freelance
```

### `app/components/AboutSection.vue`

**First paragraph:**
```
BEFORE: Sono Simone, web developer con una forte passione per la qualità e l'attenzione ai dettagli. Mi piace costruire interfacce che non solo funzionano perfettamente, ma che regalano un'esperienza piacevole a chi le usa.

AFTER: Progetto e costruisco sistemi AI-native: pipeline di automazione, workflow multi-agente e prodotti full stack che risolvono problemi di business reali.
```

**Second paragraph:**
```
BEFORE: Ho appena terminato il percorso di Full-Stack Web Developer con <span>start2impact</span>, esplorando l'intero stack web moderno con focus su Vue, Node e TypeScript.

AFTER: Prima di scrivere codice, ho trascorso 26 anni nella macchina operativa e commerciale della grande distribuzione italiana. Quel background non è una nota a piè di pagina: è il motivo per cui capisco i problemi prima di iniziare a progettare le soluzioni.
```

### `app/data/stats.ts`

```typescript
export const stats: Stat[] = [
  { value: '26', label: 'anni di esperienza operativa', suffix: '+' },
  { value: '5', label: 'progetti AI in produzione', suffix: '+' },
  { value: '3', label: 'modelli LLM integrati', suffix: '' },
]
```

### `app/data/projects.ts`

**Remove:** TicTacVue (id: 5), Sunnee (id: 6)

**HundredPath (id: 2):** set `featured: false`

**Add at top (before existing entries):**

```typescript
{
  id: 11,
  slug: 'contextforge',
  title: 'ContextForge',
  category: 'Developer Tooling',
  description: 'Motore di memoria locale per developer e agenti AI. Scansiona la codebase e costruisce un layer di contesto strutturato e versionato su Git — queryabile dal terminale o iniettabile come context window per qualsiasi LLM.',
  image: '/images/italy-job-hunter.png', // temp placeholder — replace when asset is ready
  tags: ['TypeScript', 'CLI', 'LLM', 'Developer Tools'],
  link: 'https://github.com/simonecamerano/contextforge',
  featured: true,
  github: 'https://github.com/simonecamerano/contextforge',
  year: 2026,
  longDescription: 'Testo lungo per la pagina di dettaglio...',
},
{
  id: 12,
  slug: 'workflow-multiagents',
  title: 'Workflow Multi-Agents',
  category: 'AI Orchestration',
  description: 'Protocollo di orchestrazione multi-modello per lo sviluppo software. Ogni modello ha un ruolo definito, un fallback nominato e boundaries chiari. L\'orchestratore propone, l\'umano approva.',
  image: '/images/italy-job-hunter.png', // temp placeholder — replace when asset is ready
  tags: ['Multi-Agent', 'Orchestration', 'Claude', 'Gemini', 'DeepSeek'],
  link: 'https://github.com/simonecamerano/workflow-multiagents',
  featured: true,
  github: 'https://github.com/simonecamerano/workflow-multiagents',
  year: 2026,
  longDescription: 'Testo lungo per la pagina di dettaglio...',
},
```

### `app/data/technologies.ts`

**Add (after existing entries):**

```typescript
{
  name: 'OpenAI',
  abbr: 'OAI',
  color: '#412991',
  bgColor: 'rgba(65,41,145,0.08)',
  borderColor: 'rgba(65,41,145,0.22)',
},
{
  name: 'DeepSeek',
  abbr: 'DS',
  color: '#4D6BFE',
  bgColor: 'rgba(77,107,254,0.08)',
  borderColor: 'rgba(77,107,254,0.22)',
},
{
  name: 'Ollama',
  abbr: 'OL',
  color: '#e0e0e0',
  bgColor: 'rgba(224,224,224,0.06)',
  borderColor: 'rgba(224,224,224,0.16)',
},
{
  name: 'Docker',
  abbr: 'DO',
  color: '#2496ED',
  bgColor: 'rgba(36,150,237,0.08)',
  borderColor: 'rgba(36,150,237,0.22)',
},
```

(Skip Docker if already present — check before adding.)

### `app/pages/about.vue`

Replace `storyParagraphs` array:

```typescript
const storyParagraphs = [
  'Progetto e costruisco sistemi AI-native — pipeline di automazione, workflow multi-agente e prodotti full stack che risolvono problemi di business reali.',
  'Prima di scrivere codice, ho trascorso 26 anni nella macchina operativa e commerciale della grande distribuzione italiana: gestione team, processi, responsabilità operative su larga scala. Quel background non è una nota a piè di pagina. È il motivo per cui capisco i problemi di business prima di iniziare a progettare le soluzioni.',
  'Cosa costruisco: pipeline AI multi-modello (ricerca web, triage, analisi, delivery), sistemi RAG con vector store custom e session persistence, orchestrazione multi-agente con human approval gates, prodotti web full stack — Vue/Nuxt, Node.js, TypeScript, MongoDB.',
  'Uso l\'AI come infrastruttura, non come feature. L\'obiettivo è sempre sistemi che funzionano in modo affidabile, non demo che impressionano una volta sola. Aperto a collaborazioni freelance con founder, startup e team tecnici che hanno bisogno di sistemi AI costruiti bene.',
]
```

### `app/components/ContactSection.vue`

```
BEFORE: Sono disponibile per collaborazioni freelance, progetti interessanti e opportunità di lavoro. Non esitare a scrivermi.

AFTER: Disponibile per collaborazioni freelance con founder, startup e team tecnici. Se il problema riguarda AI, automazione o sistemi complessi, parliamone.
```

---

## Out of Scope

- Design, colors, animations, layout — untouched
- Application logic (form, routing, README fetch) — untouched
- `app/pages/privacy.vue` — not mentioned, untouched
- `nuxt.config.ts` — meta tags are not defined here, no changes needed
- Images for new projects — using `italy-job-hunter.png` as temp; report will flag for replacement

---

## Image Placeholders

Both new projects use `/images/italy-job-hunter.png` as a temporary placeholder. These must be replaced with real assets before going to production:
- `public/images/contextforge.png`
- `public/images/workflow-multiagents.png`
