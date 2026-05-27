# Rebranding — AI Workflow Engineer Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Update copy, data, and meta tags across the portfolio to reflect the new positioning as AI Workflow Engineer & Full Stack Developer, without touching design, layout, animations, or application logic.

**Architecture:** Pure content changes across 8 files. No new components, no logic modifications. All edits are either text replacements in Vue templates, or data array replacements in TypeScript data files. Branch: `dev`.

**Tech Stack:** Nuxt 3, Vue 3, TypeScript. All changes are in `app/` and `app/data/`. No server-side changes.

---

## File Map

| File | Change type |
|---|---|
| `app/pages/index.vue` | Replace `useSeoMeta` call |
| `app/components/HeroSection.vue` | Replace h1, subtitle, 3 mockup lines, 1 comment |
| `app/components/AboutSection.vue` | Replace 2 biography paragraphs |
| `app/data/stats.ts` | Replace all 3 stat entries |
| `app/data/projects.ts` | Add 2, remove 2, set 1 to `featured: false` |
| `app/data/technologies.ts` | Add 4 new TechItem entries |
| `app/pages/about.vue` | Replace `storyParagraphs` array |
| `app/components/ContactSection.vue` | Replace 1 availability paragraph |

---

### Task 1: Meta tags — `app/pages/index.vue`

**Files:**
- Modify: `app/pages/index.vue`

- [ ] **Step 1: Read the file**

Read `app/pages/index.vue` to confirm the current `useSeoMeta` block.

- [ ] **Step 2: Replace the useSeoMeta call**

Find this exact block:

```typescript
useSeoMeta({
  title: 'Simone Camerano — Web Developer',
  description:
    'Portfolio di Simone Camerano, web developer specializzato in Vue, Nuxt e TypeScript. Creo esperienze digitali veloci, moderne e orientate al valore.',
  ogTitle: 'Simone Camerano — Web Developer',
  ogDescription:
    'Web developer specializzato in Vue, Nuxt e TypeScript. Scopri i miei progetti e contattami per collaborare.',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Simone Camerano — Web Developer',
  twitterDescription: 'Portfolio di Simone Camerano — Vue, Nuxt, TypeScript.',
})
```

Replace with:

```typescript
useSeoMeta({
  title: 'Simone Camerano — AI Workflow Engineer',
  description:
    'AI Workflow Engineer e Full Stack Developer. Progetto pipeline AI, sistemi multi-agente e prodotti web che risolvono problemi reali di business.',
  ogTitle: 'Simone Camerano — AI Workflow Engineer',
  ogDescription:
    'AI Workflow Engineer e Full Stack Developer. Progetto pipeline AI, sistemi multi-agente e prodotti web che risolvono problemi reali di business.',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Simone Camerano — AI Workflow Engineer',
  twitterDescription: 'AI Workflow Engineer e Full Stack Developer. Pipeline AI, workflow multi-agente, prodotti full stack.',
})
```

- [ ] **Step 3: Commit**

```bash
git add app/pages/index.vue
git commit -m "feat: update homepage meta tags for AI Workflow Engineer positioning"
```

---

### Task 2: Hero section — h1 and subtitle

**Files:**
- Modify: `app/components/HeroSection.vue`

- [ ] **Step 1: Read the file**

Read `app/components/HeroSection.vue` to confirm the current h1 and subtitle text.

- [ ] **Step 2: Replace the h1 content**

Find this exact block (inside the `<h1>` element):

```html
          Creo esperienze digitali
          <span class="text-gradient"> veloci, moderne</span>
          <br class="hidden sm:block" />
          e orientate al valore.
```

Replace with:

```html
          Progetto e costruisco sistemi AI-native,
          <span class="text-gradient"> pipeline di automazione</span>
          <br class="hidden sm:block" />
          e prodotti full stack.
```

- [ ] **Step 3: Replace the subtitle paragraph**

Find this exact text (inside the subtitle `<p>`):

```
          Web developer specializzato in Vue, Nuxt e TypeScript.
          Trasformo idee in prodotti digitali eleganti e performanti.
```

Replace with:

```
          Automazione intelligente, workflow multi-agente e sviluppo full stack.
          Con un background di 26 anni nelle operations.
```

- [ ] **Step 4: Commit**

```bash
git add app/components/HeroSection.vue
git commit -m "feat: update hero h1 and subtitle for AI positioning"
```

---

### Task 3: Hero section — code mockup

**Files:**
- Modify: `app/components/HeroSection.vue`

- [ ] **Step 1: Replace the role line in the mockup**

Find:

```html
                <div><span style="color: #38bdf8;">role</span><span style="color: #94a3b8;">: </span><span style="color: #fbbf24;">"Web Developer"</span><span style="color: #94a3b8;">,</span></div>
```

Replace with:

```html
                <div><span style="color: #38bdf8;">role</span><span style="color: #94a3b8;">: </span><span style="color: #fbbf24;">"AI Workflow Engineer"</span><span style="color: #94a3b8;">,</span></div>
```

- [ ] **Step 2: Replace the stack line in the mockup**

Find:

```html
                <div><span style="color: #38bdf8;">stack</span><span style="color: #94a3b8;">: [</span><span style="color: #fbbf24;">"Vue"</span><span style="color: #94a3b8;">, </span><span style="color: #fbbf24;">"Node"</span><span style="color: #94a3b8;">, </span><span style="color: #fbbf24;">"TS"</span><span style="color: #94a3b8;">],</span></div>
```

Replace with:

```html
                <div><span style="color: #38bdf8;">stack</span><span style="color: #94a3b8;">: [</span><span style="color: #fbbf24;">"Node"</span><span style="color: #94a3b8;">, </span><span style="color: #fbbf24;">"Vue"</span><span style="color: #94a3b8;">, </span><span style="color: #fbbf24;">"LLMs"</span><span style="color: #94a3b8;">],</span></div>
```

- [ ] **Step 3: Replace the passion/focus line in the mockup**

Find:

```html
                <div><span style="color: #38bdf8;">passion</span><span style="color: #94a3b8;">: </span><span style="color: #fbbf24;">"clean code"</span><span style="color: #94a3b8;">,</span></div>
```

Replace with:

```html
                <div><span style="color: #38bdf8;">focus</span><span style="color: #94a3b8;">: </span><span style="color: #fbbf24;">"AI systems"</span><span style="color: #94a3b8;">,</span></div>
```

- [ ] **Step 4: Replace the comment in the mockup**

Find:

```html
                <span>// disponibile per freelance</span>
```

Replace with:

```html
                <span>// aperto a collaborazioni freelance</span>
```

- [ ] **Step 5: Commit**

```bash
git add app/components/HeroSection.vue
git commit -m "feat: update hero code mockup for AI Workflow Engineer positioning"
```

---

### Task 4: About section paragraphs — `app/components/AboutSection.vue`

**Files:**
- Modify: `app/components/AboutSection.vue`

- [ ] **Step 1: Read the file**

Read `app/components/AboutSection.vue` to confirm current paragraph content.

- [ ] **Step 2: Replace the first biography paragraph**

Find this exact block:

```html
          <p class="text-[#6a6a7a] leading-relaxed text-lg">
            Sono Simone, web developer con una forte passione per la qualità e l'attenzione ai dettagli. Mi piace costruire
            interfacce che non solo funzionano perfettamente, ma che regalano un'esperienza piacevole a chi le usa.
          </p>
```

Replace with:

```html
          <p class="text-[#6a6a7a] leading-relaxed text-lg">
            Progetto e costruisco sistemi AI-native: pipeline di automazione, workflow multi-agente e prodotti full stack che risolvono problemi di business reali.
          </p>
```

- [ ] **Step 3: Replace the second biography paragraph**

Find this exact block:

```html
          <p class="text-[#6a6a7a] leading-relaxed text-lg">
            Ho appena terminato il percorso di Full-Stack Web Developer con <span class="text-[#c4b5fd] font-medium">start2impact</span>, esplorando
            l'intero stack web moderno con focus su Vue, Node e TypeScript.
          </p>
```

Replace with:

```html
          <p class="text-[#6a6a7a] leading-relaxed text-lg">
            Prima di scrivere codice, ho trascorso 26 anni nella macchina operativa e commerciale della grande distribuzione italiana. Quel background non è una nota a piè di pagina: è il motivo per cui capisco i problemi prima di iniziare a progettare le soluzioni.
          </p>
```

- [ ] **Step 4: Commit**

```bash
git add app/components/AboutSection.vue
git commit -m "feat: update about section biography for AI positioning"
```

---

### Task 5: Stats data — `app/data/stats.ts`

**Files:**
- Modify: `app/data/stats.ts`

- [ ] **Step 1: Read the file**

Read `app/data/stats.ts` to confirm the current content.

- [ ] **Step 2: Replace the entire stats array**

Find:

```typescript
export const stats: Stat[] = [
  { value: '1', label: 'Anno di esperienza', suffix: '+' },
  { value: '10', label: 'Progetti completati', suffix: '+' },
  { value: '10', label: 'Tecnologie padroneggiate', suffix: '+' },
]
```

Replace with:

```typescript
export const stats: Stat[] = [
  { value: '26', label: 'anni di esperienza operativa', suffix: '+' },
  { value: '5', label: 'progetti AI in produzione', suffix: '+' },
  { value: '3', label: 'modelli LLM integrati', suffix: '' },
]
```

- [ ] **Step 3: Commit**

```bash
git add app/data/stats.ts
git commit -m "feat: update stats counters for AI Workflow Engineer positioning"
```

---

### Task 6: Projects data — `app/data/projects.ts`

**Files:**
- Modify: `app/data/projects.ts`

- [ ] **Step 1: Read the file**

Read `app/data/projects.ts` to confirm current entries and their IDs/slugs.

- [ ] **Step 2: Add the two new AI projects at the very top of the array**

Insert the following two entries as the first items in the `projects` array (before the `joule-zero-point` entry):

```typescript
  {
    id: 11,
    slug: 'contextforge',
    title: 'ContextForge',
    category: 'Developer Tooling',
    description:
      'Motore di memoria locale per developer e agenti AI. Scansiona la codebase e costruisce un layer di contesto strutturato e versionato su Git — queryabile dal terminale o iniettabile come context window per qualsiasi LLM.',
    image: '/images/italy-job-hunter.png',
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
    description:
      'Protocollo di orchestrazione multi-modello per lo sviluppo software. Ogni modello ha un ruolo definito, un fallback nominato e boundaries chiari. L\'orchestratore propone, l\'umano approva.',
    image: '/images/italy-job-hunter.png',
    tags: ['Multi-Agent', 'Orchestration', 'Claude', 'Gemini', 'DeepSeek'],
    link: 'https://github.com/simonecamerano/workflow-multiagents',
    featured: true,
    github: 'https://github.com/simonecamerano/workflow-multiagents',
    year: 2026,
    longDescription: 'Testo lungo per la pagina di dettaglio...',
  },
```

- [ ] **Step 3: Set HundredPath to featured: false**

Find the HundredPath entry (id: 2) and change `featured: true` to `featured: false`:

```typescript
    featured: false,
```

- [ ] **Step 4: Remove TicTacVue (id: 5)**

Delete the entire TicTacVue object from the array. It starts with `id: 5, slug: 'tictacvue'` and ends with its closing `},`.

- [ ] **Step 5: Remove Sunnee Kids (id: 6)**

Delete the entire Sunnee Kids object from the array. It starts with `id: 6, slug: 'sunnee'` and ends with its closing `},`.

- [ ] **Step 6: Commit**

```bash
git add app/data/projects.ts
git commit -m "feat: add AI projects, remove game/UI showcases, set hundredpath non-featured"
```

---

### Task 7: Technologies data — `app/data/technologies.ts`

**Files:**
- Modify: `app/data/technologies.ts`

- [ ] **Step 1: Read the file**

Read `app/data/technologies.ts` to confirm current entries and verify Docker is not already present.

- [ ] **Step 2: Add four new technology entries at the end of the array**

Append the following entries before the closing `]` of the `technologies` array:

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

If Docker is already in the file, skip the Docker entry.

- [ ] **Step 3: Commit**

```bash
git add app/data/technologies.ts
git commit -m "feat: add AI/infra technologies to tech stack"
```

---

### Task 8: About page — story paragraphs

**Files:**
- Modify: `app/pages/about.vue`

- [ ] **Step 1: Read the file**

Read `app/pages/about.vue` to confirm the current `storyParagraphs` array.

- [ ] **Step 2: Replace the storyParagraphs array**

Find this exact block:

```typescript
const storyParagraphs = [
  'Il mio percorso non è stato lineare. Da ragazzo passavo molto tempo a cercare di capire come funzionasse GNU/Linux, ma la vita mi ha portato presto nel mondo del lavoro e per oltre vent\'anni ho fatto parte della Grande Distribuzione Organizzata.',
  'In quel contesto ho ricoperto ruoli operativi, di responsabilità e commerciali. Ho imparato a gestire persone, priorità, clienti, fornitori, problemi concreti e giornate in cui le soluzioni non possono restare teoriche.',
  'A un certo punto ho capito che volevo costruire qualcosa che mi rappresentasse di più. Lo sviluppo web è arrivato gradualmente: prima da autodidatta, poi con percorsi più strutturati, progetti personali e tante ore passate a trasformare curiosità in competenze.',
  'Quello che mi ha conquistato del codice è il potere creativo: partire da un problema o da un\'idea e arrivare a qualcosa di reale, usabile, misurabile. Ogni progetto diventa una sfida tecnica, ma anche un esercizio di attenzione verso le persone che lo useranno.',
]
```

Replace with:

```typescript
const storyParagraphs = [
  'Progetto e costruisco sistemi AI-native — pipeline di automazione, workflow multi-agente e prodotti full stack che risolvono problemi di business reali.',
  'Prima di scrivere codice, ho trascorso 26 anni nella macchina operativa e commerciale della grande distribuzione italiana: gestione team, processi, responsabilità operative su larga scala. Quel background non è una nota a piè di pagina. È il motivo per cui capisco i problemi di business prima di iniziare a progettare le soluzioni.',
  'Cosa costruisco: pipeline AI multi-modello (ricerca web, triage, analisi, delivery), sistemi RAG con vector store custom e session persistence, orchestrazione multi-agente con human approval gates, prodotti web full stack — Vue/Nuxt, Node.js, TypeScript, MongoDB.',
  'Uso l\'AI come infrastruttura, non come feature. L\'obiettivo è sempre sistemi che funzionano in modo affidabile, non demo che impressionano una volta sola. Aperto a collaborazioni freelance con founder, startup e team tecnici che hanno bisogno di sistemi AI costruiti bene.',
]
```

- [ ] **Step 3: Commit**

```bash
git add app/pages/about.vue
git commit -m "feat: update about page story paragraphs for AI positioning"
```

---

### Task 9: Contact section paragraph — `app/components/ContactSection.vue`

**Files:**
- Modify: `app/components/ContactSection.vue`

- [ ] **Step 1: Read the file**

Read `app/components/ContactSection.vue` to confirm the current availability paragraph.

- [ ] **Step 2: Replace the availability paragraph**

Find this exact block:

```html
        <p class="text-[#6a6a7a] text-lg leading-relaxed max-w-sm">
          Sono disponibile per collaborazioni freelance, progetti interessanti e opportunità di lavoro.
          Non esitare a scrivermi.
        </p>
```

Replace with:

```html
        <p class="text-[#6a6a7a] text-lg leading-relaxed max-w-sm">
          Disponibile per collaborazioni freelance con founder, startup e team tecnici.
          Se il problema riguarda AI, automazione o sistemi complessi, parliamone.
        </p>
```

- [ ] **Step 3: Commit**

```bash
git add app/components/ContactSection.vue
git commit -m "feat: update contact section copy for AI positioning"
```

---

### Task 10: Smoke test

**Files:** none (read-only verification)

- [ ] **Step 1: Start the dev server**

```bash
npm run dev
```

Expected: server starts on `http://localhost:3000` with no TypeScript errors or build failures.

- [ ] **Step 2: Verify key pages load**

Open `http://localhost:3000` in a browser or via curl and confirm:
- No 500 errors
- The hero h1 shows "Progetto e costruisco sistemi AI-native"
- The two new projects (ContextForge, Workflow Multi-Agents) appear in the featured grid
- TicTacVue and Sunnee Kids do not appear in the featured grid
- HundredPath does not appear in the featured grid

- [ ] **Step 3: Stop the dev server and final commit (if smoke test passes)**

No additional commit needed — all changes were committed per task. If errors are found, fix the specific file and commit:

```bash
git add <file>
git commit -m "fix: <description of fix>"
```

---

## Self-Review

**Spec coverage:**
- ✅ MODIFICA 1: meta tags → Task 1 (`app/pages/index.vue`)
- ✅ MODIFICA 2: Hero section → Tasks 2 + 3 (`HeroSection.vue`)
- ✅ MODIFICA 3: About section paragraphs + stats → Tasks 4 + 5
- ✅ MODIFICA 4: Projects (add 2, remove 2, HundredPath non-featured) → Task 6
- ✅ MODIFICA 5: Technologies → Task 7
- ✅ MODIFICA 6: About page storyParagraphs → Task 8
- ✅ MODIFICA 7: Contact section → Task 9
- ✅ Smoke test → Task 10

**Placeholder scan:** No TBD, TODO, or vague steps. All code shown in full.

**Type consistency:**
- `Project` objects in Task 6 include all required fields: `id, slug, title, category, description, image, tags, link, featured` ✅
- `Stat` objects in Task 5 include all required fields: `value, label, suffix` ✅
- `TechItem` objects in Task 7 include all required fields: `name, abbr, color, bgColor, borderColor` ✅

**Image placeholder note:** Both new projects use `/images/italy-job-hunter.png` as a temporary image. This must be flagged in the final report and replaced with real assets before merging to `main`.
