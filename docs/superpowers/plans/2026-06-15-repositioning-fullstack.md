# Repositioning Full Stack Developer Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Aggiornare tutti i contenuti del sito da "AI Workflow Engineer" a "Full Stack Developer con specializzazione AI pratica", cambiando testi in 14 file senza toccare la struttura o la logica dei componenti.

**Architecture:** Creare `app/data/services.ts` come unica fonte dati dei servizi (importata sia da `ServicesSection.vue` che da `servizi.vue`). Tutti gli altri contenuti vengono aggiornati in-place nei file esistenti. Nessun nuovo componente, nessuna modifica alle classi Tailwind o alla logica Vue.

**Tech Stack:** Nuxt 4, Vue 3, TypeScript. No test framework per componenti UI — verifica visiva via `npm run dev` e type check via `npx nuxi typecheck`.

**Spec di riferimento:** `docs/superpowers/specs/2026-06-15-repositioning-fullstack-design.md`

---

## Task 1: Crea `app/data/services.ts`

**Files:**
- Create: `app/data/services.ts`

- [ ] **Step 1: Crea il file con il tipo e i 5 servizi completi**

```ts
export interface Service {
  num: string
  title: string
  desc: string
  utile_se: string[]
  output: string[]
}

export const services: Service[] = [
  {
    num: '01',
    title: 'Siti web moderni e redesign',
    desc: 'Creo siti web chiari, veloci e curati, pensati per presentare bene la tua attività e aiutare le persone a capire subito cosa fai, per chi lo fai e come contattarti.',
    utile_se: [
      'il tuo sito attuale è vecchio, lento o poco chiaro',
      'non hai ancora un sito professionale',
      'vuoi migliorare struttura, testi, velocità e percezione',
      "vuoi una presenza online più coerente con quello che fai oggi",
    ],
    output: [
      'sito vetrina',
      'redesign completo',
      'landing page',
      'pagine servizio',
      'struttura contenuti',
      'revisione UX e copy base',
      'setup tecnico e deploy',
    ],
  },
  {
    num: '02',
    title: 'Web app e strumenti digitali su misura',
    desc: "Sviluppo web app e strumenti interni per gestire attività, dati, utenti, richieste, contenuti o processi che oggi vengono seguiti a mano o con strumenti non adatti.",
    utile_se: [
      'Excel non basta più',
      'hai bisogno di un piccolo gestionale su misura',
      'vuoi centralizzare informazioni e attività',
      'ti serve uno strumento per il team, i clienti o i collaboratori',
      "vuoi trasformare un'idea in un primo prodotto funzionante",
    ],
    output: [
      'dashboard',
      'aree riservate',
      'portali interni',
      'form evoluti',
      'gestionali leggeri',
      'strumenti operativi',
      'API e integrazioni',
      'prototipi full stack',
    ],
  },
  {
    num: '03',
    title: 'Automazioni e workflow AI',
    desc: "Automatizzo attività ripetitive e costruisco workflow in cui l'AI ha un compito preciso: cercare, filtrare, classificare, riassumere, preparare report o supportare decisioni operative.",
    utile_se: [
      'ripeti spesso le stesse operazioni',
      'devi controllare fonti, email, documenti o dati in modo ricorrente',
      'vuoi ricevere report o alert automatici',
      'usi già strumenti AI, ma senza un metodo stabile',
      'vuoi ridurre lavoro manuale su attività a basso valore',
    ],
    output: [
      'automazioni tra strumenti',
      'workflow con approvazione umana',
      'bot Telegram o Slack',
      'report automatici',
      'classificazione contenuti',
      'pipeline di ricerca e filtro',
      'agenti AI con compiti specifici e controllabili',
    ],
  },
  {
    num: '04',
    title: 'Knowledge base e assistenti AI su documenti',
    desc: 'Creo sistemi per rendere più accessibili documenti, FAQ, cataloghi, procedure, materiali formativi o informazioni interne.',
    utile_se: [
      'hai documenti sparsi in cartelle, PDF, file o pagine diverse',
      'il team perde tempo a cercare informazioni',
      'vuoi rendere più semplice consultare procedure o materiali',
      'hai un catalogo, una guida o una knowledge base difficile da navigare',
      'vuoi un assistente AI che risponda dentro confini chiari',
    ],
    output: [
      'knowledge base strutturata',
      'assistente AI su documenti',
      'ricerca semantica',
      'FAQ dinamiche',
      'sistemi RAG',
      'interfacce conversazionali',
      'strumenti per aggiornare i contenuti',
    ],
  },
  {
    num: '05',
    title: 'Audit digitale e opportunità AI',
    desc: "Analizzo sito, strumenti e processi per capire dove intervenire prima. A volte serve rifare il sito. A volte basta sistemare un flusso. Meglio capirlo prima di investire tempo e budget nella direzione sbagliata.",
    utile_se: [
      'sai che qualcosa non funziona, ma non sai da dove partire',
      'vuoi capire se il tuo sito comunica bene',
      'hai processi manuali che rallentano il lavoro',
      "vuoi valutare automazioni o AI senza hype",
      'vuoi una mappa concreta delle priorità',
    ],
    output: [
      'audit del sito',
      'analisi dei processi digitali',
      'mappa problemi / opportunità',
      'proposta di intervento',
      'priorità tecniche e operative',
      "valutazione realistica dell'uso dell'AI",
    ],
  },
]
```

- [ ] **Step 2: Verifica che il file compili senza errori**

```bash
npx nuxi typecheck
```

Expected: nessun errore su `app/data/services.ts`.

- [ ] **Step 3: Commit**

```bash
git add app/data/services.ts
git commit -m "feat: add shared services data file with 5 repositioned services"
```

---

## Task 2: Aggiorna `app/data/stats.ts` e `app/data/projects.ts`

**Files:**
- Modify: `app/data/stats.ts`
- Modify: `app/data/projects.ts`

- [ ] **Step 1: Sostituisci il contenuto di `app/data/stats.ts`**

```ts
import type { Stat } from '~/types'

export const stats: Stat[] = [
  { value: '26', label: 'anni di esperienza operativa', suffix: '+' },
  { value: 'Full stack', label: 'sviluppo web, backend e interfacce moderne', suffix: '' },
  { value: 'AI pratica', label: 'automazioni, knowledge base e workflow controllabili', suffix: '' },
]
```

- [ ] **Step 2: In `app/data/projects.ts`, trova il blocco di JouleZeroPointWeb e aggiorna questi 4 campi**

Trova (circa riga 349–362):
```ts
  {
    id: 1,
    slug: 'joule-zero-point',
    title: 'Joule Zero Point',
    category: 'Full Stack',
    description:
      'Sviluppo completo di un gioco di carte originale: dal bilanciamento delle regole alla piattaforma digitale.',
    image: '/images/joulezeropoint.png',
    tags: ['Vue 3', 'Node.js', 'AI Chatbot', 'Design'],
    link: 'https://www.joulezeropoint.com',
    featured: false,
```

Sostituisci con:
```ts
  {
    id: 1,
    slug: 'joule-zero-point',
    title: 'Joule Zero Point',
    category: 'Frontend',
    description:
      'Sito web costruito per raccontare in modo chiaro un\'identità tecnica, visiva e contenutistica.',
    image: '/images/joulezeropoint.png',
    tags: ['Vue 3', 'Frontend', 'UI', 'Design'],
    link: 'https://www.joulezeropoint.com',
    featured: true,
```

- [ ] **Step 3: Commit**

```bash
git add app/data/stats.ts app/data/projects.ts
git commit -m "feat: update stats for new positioning, set JouleZeroPoint as featured frontend showcase"
```

---

## Task 3: Aggiorna SEO meta in `app/pages/index.vue`

**Files:**
- Modify: `app/pages/index.vue`

- [ ] **Step 1: Sostituisci il blocco `useSeoMeta`**

Trova:
```ts
useSeoMeta({
  title: 'Simone Camerano — AI Workflow Engineer',
  description:
    'Costruisco workflow AI, agenti operativi e prodotti full-stack per automatizzare processi reali. AI Workflow Engineer disponibile per collaborazioni freelance.',
  ogTitle: 'Simone Camerano — AI Workflow Engineer',
  ogDescription:
    'Costruisco workflow AI, agenti operativi e prodotti full-stack per automatizzare processi reali. AI Workflow Engineer disponibile per collaborazioni freelance.',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Simone Camerano — AI Workflow Engineer',
  twitterDescription: 'AI Workflow Engineer. Workflow multi-modello, automazioni, dashboard operative e prodotti full-stack AI-native.',
})
```

Sostituisci con:
```ts
useSeoMeta({
  title: 'Simone Camerano — Full Stack Developer per siti, web app e soluzioni AI pratiche',
  description:
    'Full Stack Developer a Pesaro. Creo siti web moderni, web app, strumenti digitali su misura, automazioni e soluzioni AI pratiche per PMI, professionisti e piccoli team.',
  ogTitle: 'Simone Camerano — Full Stack Developer per siti, web app e soluzioni AI pratiche',
  ogDescription:
    'Full Stack Developer a Pesaro. Creo siti web moderni, web app, strumenti digitali su misura, automazioni e soluzioni AI pratiche per PMI, professionisti e piccoli team.',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Simone Camerano — Full Stack Developer per siti, web app e soluzioni AI pratiche',
  twitterDescription: 'Full Stack Developer a Pesaro. Siti web moderni, web app, automazioni e soluzioni AI pratiche per PMI, professionisti e piccoli team.',
})
```

- [ ] **Step 2: Commit**

```bash
git add app/pages/index.vue
git commit -m "feat: update homepage SEO meta for Full Stack Developer repositioning"
```

---

## Task 4: Aggiorna `app/components/HeroSection.vue`

**Files:**
- Modify: `app/components/HeroSection.vue`

- [ ] **Step 1: Aggiorna il badge (riga ~35)**

Trova:
```html
AI Workflow Engineer · Full-Stack Developer · Automation Builder
```
Sostituisci con:
```html
Full Stack Developer · Web App · Automazioni AI
```

- [ ] **Step 2: Aggiorna l'H1 (riga ~47–49)**

Trova:
```html
          Costruisco workflow AI, <span class="text-gradient">agenti operativi</span><br class="hidden sm:block" />
          e prodotti full-stack per automatizzare processi reali.
```
Sostituisci con:
```html
          Full Stack Developer per siti, <span class="text-gradient">web app</span><br class="hidden sm:block" />
          e soluzioni AI pratiche.
```

- [ ] **Step 3: Aggiorna il sottotitolo (riga ~58–60)**

Trova:
```html
          Dalla comprensione dei processi alla costruzione del sistema: sviluppo workflow multi-modello, strumenti AI e prodotti full-stack con un approccio pragmatico, controllabile e orientato al risultato.
```
Sostituisci con:
```html
          Creo siti moderni, web app e strumenti digitali su misura per PMI, professionisti e piccoli team.<br class="hidden sm:block" />
          Quando serve, integro AI, automazioni e workflow per semplificare il lavoro quotidiano, non per complicarlo.
```

- [ ] **Step 4: Aggiorna il testo della CTA primaria (riga ~75)**

Trova:
```html
            Parliamo del tuo workflow
```
Sostituisci con:
```html
            Parliamo del tuo progetto
```

- [ ] **Step 5: Aggiorna la microfrase di disponibilità (riga ~90)**

Trova:
```html
          <p class="text-xs text-[#6a6a7a] pt-1">Disponibile per collaborazioni freelance, prototipi AI e automazioni su misura.</p>
```
Sostituisci con:
```html
          <p class="text-xs text-[#6a6a7a] pt-1">Dalla presenza online agli strumenti interni: parto dal problema reale, poi costruisco la soluzione giusta.</p>
```

- [ ] **Step 6: Aggiorna le tech pills (riga ~102)**

Trova:
```html
          v-for="tag in ['Vue', 'Nuxt', 'Node.js', 'TypeScript', 'LLMs', 'Telegram']"
```
Sostituisci con:
```html
          v-for="tag in ['Vue', 'Nuxt', 'React', 'Node.js', 'TypeScript', 'AI']"
```

- [ ] **Step 7: Aggiorna il code mockup — campo role (riga ~152)**

Trova:
```html
                <div><span style="color: #38bdf8;">role</span><span style="color: #94a3b8;">: </span><span style="color: #fbbf24;">"AI Workflow Engineer"</span><span style="color: #94a3b8;">,</span></div>
```
Sostituisci con:
```html
                <div><span style="color: #38bdf8;">role</span><span style="color: #94a3b8;">: </span><span style="color: #fbbf24;">"Full Stack Developer"</span><span style="color: #94a3b8;">,</span></div>
```

- [ ] **Step 8: Aggiorna il code mockup — campo builds (riga ~153)**

Trova:
```html
                <div><span style="color: #38bdf8;">builds</span><span style="color: #94a3b8;">: [</span><span style="color: #fbbf24;">"AI workflows"</span><span style="color: #94a3b8;">, </span><span style="color: #fbbf24;">"automation bots"</span><span style="color: #94a3b8;">, </span><span style="color: #fbbf24;">"full-stack products"</span><span style="color: #94a3b8;">],</span></div>
```
Sostituisci con:
```html
                <div><span style="color: #38bdf8;">builds</span><span style="color: #94a3b8;">: [</span><span style="color: #fbbf24;">"siti web"</span><span style="color: #94a3b8;">, </span><span style="color: #fbbf24;">"web app"</span><span style="color: #94a3b8;">, </span><span style="color: #fbbf24;">"automazioni AI"</span><span style="color: #94a3b8;">],</span></div>
```

- [ ] **Step 9: Aggiorna il code mockup — campo focus (riga ~155)**

Trova:
```html
                <div><span style="color: #38bdf8;">focus</span><span style="color: #94a3b8;">: </span><span style="color: #fbbf24;">"turning real processes into intelligent systems"</span><span style="color: #94a3b8;">,</span></div>
```
Sostituisci con:
```html
                <div><span style="color: #38bdf8;">focus</span><span style="color: #94a3b8;">: </span><span style="color: #fbbf24;">"dal problema reale alla soluzione digitale"</span><span style="color: #94a3b8;">,</span></div>
```

- [ ] **Step 10: Aggiorna il code mockup — campo availableFor (riga ~156)**

Trova:
```html
                <div><span style="color: #38bdf8;">availableFor</span><span style="color: #94a3b8;">: [</span><span style="color: #fbbf24;">"freelance"</span><span style="color: #94a3b8;">, </span><span style="color: #fbbf24;">"AI prototypes"</span><span style="color: #94a3b8;">, </span><span style="color: #fbbf24;">"workflow automation"</span><span style="color: #94a3b8;">],</span></div>
```
Sostituisci con:
```html
                <div><span style="color: #38bdf8;">availableFor</span><span style="color: #94a3b8;">: [</span><span style="color: #fbbf24;">"freelance"</span><span style="color: #94a3b8;">, </span><span style="color: #fbbf24;">"siti web"</span><span style="color: #94a3b8;">, </span><span style="color: #fbbf24;">"web app"</span><span style="color: #94a3b8;">, </span><span style="color: #fbbf24;">"automazioni"</span><span style="color: #94a3b8;">],</span></div>
```

- [ ] **Step 11: Aggiorna il commento finale del mockup (riga ~160)**

Trova:
```html
                <span>// costruisce sistemi concreti, non chatbot</span>
```
Sostituisci con:
```html
                <span>// sviluppo full stack con AI pragmatica</span>
```

- [ ] **Step 12: Commit**

```bash
git add app/components/HeroSection.vue
git commit -m "feat: update hero copy, badge, tech pills and code mockup for new positioning"
```

---

## Task 5: Aggiorna `app/components/ServicesSection.vue`

**Files:**
- Modify: `app/components/ServicesSection.vue`

- [ ] **Step 1: Sostituisci l'intero blocco `<script setup>`**

Trova:
```ts
<script setup lang="ts">
const services = [
  { num: '01', title: 'AI Workflow Audit', desc: 'Analizzo un processo manuale o ripetitivo e progetto una soluzione AI automatizzabile.' },
  { num: '02', title: 'Bot AI operativo', desc: 'Creo bot Telegram o Slack che monitorano fonti, filtrano informazioni, analizzano risultati e inviano report.' },
  { num: '03', title: 'Assistente RAG verticale', desc: 'Trasformo documenti, cataloghi, FAQ o percorsi formativi in un assistente AI specializzato.' },
  { num: '04', title: 'AI Developer Workflow Setup', desc: 'Aiuto a organizzare Claude Code, Codex, Ollama, Gemini, agenti e memory layer in un workflow stabile.' },
  { num: '05', title: 'AI Monitoring Dashboard', desc: 'Creo dashboard per monitorare provider, quote, costi, stato automazioni e alert.' },
]
</script>
```

Sostituisci con:
```ts
<script setup lang="ts">
import { services } from '~/data/services'
</script>
```

- [ ] **Step 2: Aggiorna il testo intro nella sezione header (riga ~29–31)**

Trova:
```html
        <p class="text-[#6a6a7a] leading-relaxed mt-6 max-w-2xl mx-auto">
          Lavoro su sistemi piccoli ma ad alto impatto: automazioni, agenti, dashboard e applicazioni AI-native che risolvono problemi specifici e misurabili.
        </p>
```
Sostituisci con:
```html
        <p class="text-[#6a6a7a] leading-relaxed mt-6 max-w-2xl mx-auto">
          Lavoro su progetti piccoli e medi, con un obiettivo chiaro: trasformare un bisogno reale in uno strumento digitale semplice da usare, mantenere e far crescere. Non parto dall'AI per forza. Parto da quello che ti serve.
        </p>
```

- [ ] **Step 3: Verifica che il typecheck passi**

```bash
npx nuxi typecheck
```

Expected: nessun errore. Il tipo `Service` è compatibile con i campi `num`, `title`, `desc` già usati nel template.

- [ ] **Step 4: Commit**

```bash
git add app/components/ServicesSection.vue
git commit -m "feat: ServicesSection now imports from shared services data file"
```

---

## Task 6: Aggiorna `app/components/CanHelpSection.vue`

**Files:**
- Modify: `app/components/CanHelpSection.vue`

- [ ] **Step 1: Sostituisci l'array `cards` e aggiorna H2 e testo intro**

Trova tutto il blocco `<script setup>`:
```ts
<script setup lang="ts">
const cards = [
  {
    title: 'Troppi dati, pochi insight',
    body: 'Hai fonti, email, feed, annunci, documenti o dashboard da controllare ogni giorno, ma perdi tempo a separare ciò che conta dal rumore.',
  },
  {
    title: 'Processi manuali ripetitivi',
    body: 'Ripeti le stesse attività: cercare informazioni, filtrare risultati, preparare report, confrontare dati, scrivere sintesi o aggiornare strumenti.',
  },
  {
    title: 'AI usata senza metodo',
    body: 'Usi Claude, ChatGPT, Codex, Gemini o strumenti simili, ma manca un workflow stabile che decida quale modello usare, quando e per quale compito.',
  },
  {
    title: 'Serve un assistente operativo',
    body: 'Vuoi un bot collegato ai tuoi strumenti che monitori, analizzi e ti invii aggiornamenti via Telegram, Slack, email o dashboard.',
  },
  {
    title: 'Knowledge base da interrogare',
    body: 'Vuoi trasformare documenti, cataloghi, percorsi formativi o FAQ in un assistente AI verticale, controllato e utile agli utenti.',
  },
  {
    title: 'Prototipo AI da validare',
    body: "Hai un'idea, ma ti serve trasformarla in architettura, MVP e primo prototipo funzionante senza perderti nella complessità.",
  },
]
</script>
```

Sostituisci con:
```ts
<script setup lang="ts">
const cards = [
  {
    title: 'Hai un sito vecchio o che non funziona',
    body: 'Il tuo sito è lento, poco chiaro o non rappresenta più quello che fai. O non hai ancora una presenza online professionale e vuoi partire bene.',
  },
  {
    title: 'Ti serve uno strumento su misura',
    body: 'Hai bisogno di una web app, un gestionale leggero o uno strumento interno per gestire dati, richieste, utenti o processi che oggi vengono seguiti a mano.',
  },
  {
    title: 'Excel non basta più',
    body: 'Usi troppi file, email e documenti sparsi. Il flusso di lavoro è frammentato e ogni aggiornamento richiede passaggi manuali ripetitivi.',
  },
  {
    title: 'Vuoi automatizzare senza perdere il controllo',
    body: 'Hai attività che si ripetono: cercare informazioni, filtrare risultati, preparare report, aggiornare dati. Vuoi automatizzarle senza che il sistema diventi ingestibile.',
  },
  {
    title: 'Hai documenti difficili da consultare',
    body: 'Procedure, cataloghi, FAQ, materiali formativi o informazioni interne sono dispersi e difficili da trovare quando servono.',
  },
  {
    title: "Vuoi capire se l'AI può aiutarti davvero",
    body: "Senti parlare di AI e automazioni ma non sai se e come potrebbero cambiare il tuo modo di lavorare, senza partire da promesse esagerate.",
  },
  {
    title: "Hai un'idea ma non sai da dove partire",
    body: 'Vuoi costruire un prodotto digitale, ma ti serve qualcuno che traduca l\'idea in architettura, priorità e primo prototipo funzionante.',
  },
]
</script>
```

- [ ] **Step 2: Aggiorna H2 nella sezione header**

Trova:
```html
          Posso aiutarti se vuoi trasformare un processo ripetitivo in <span class="text-gradient">un sistema intelligente.</span>
```
Sostituisci con:
```html
          Posso aiutarti se hai <span class="text-gradient">un problema concreto da risolvere.</span>
```

- [ ] **Step 3: Aggiorna il testo descrittivo sotto l'H2**

Trova:
```html
        <p class="text-[#6a6a7a] leading-relaxed mt-6 max-w-2xl mx-auto">
          Molti processi non hanno bisogno di più riunioni, più file Excel o più notifiche. Hanno bisogno di essere osservati, filtrati, automatizzati e resi azionabili.
        </p>
```
Sostituisci con:
```html
        <p class="text-[#6a6a7a] leading-relaxed mt-6 max-w-2xl mx-auto">
          Non serve sempre "rivoluzionare" niente. Serve mettere ordine, scegliere le priorità e costruire uno strumento che faccia bene il suo lavoro.
        </p>
```

- [ ] **Step 4: Commit**

```bash
git add app/components/CanHelpSection.vue
git commit -m "feat: update CanHelp section with 7 problem-focused cards for broader audience"
```

---

## Task 7: Aggiorna `app/components/ProjectsSection.vue`

**Files:**
- Modify: `app/components/ProjectsSection.vue`

- [ ] **Step 1: Aggiorna H2**

Trova:
```html
          Progetti che raccontano <span class="text-gradient">come lavoro</span>
```
Sostituisci con:
```html
          Progetti selezionati — <span class="text-gradient">come lavoro</span>
```

- [ ] **Step 2: Aggiorna il testo intro sotto l'H2**

Trova:
```html
        <p class="text-[#6a6a7a] max-w-lg mx-auto leading-relaxed">
          Ogni progetto nasce da un problema concreto: troppo rumore informativo, mancanza di memoria nei workflow AI, bisogno di assistenti verticali o necessità di controllare strumenti e provider diversi.
        </p>
```
Sostituisci con:
```html
        <p class="text-[#6a6a7a] max-w-lg mx-auto leading-relaxed">
          Alcuni progetti nascono come strumenti personali, altri come prototipi o prodotti verticali. Non sono esperimenti messi lì per fare scena. Sono esempi di metodo, architettura e sviluppo full stack applicato.
        </p>
```

- [ ] **Step 3: Aggiungi frase di chiusura dopo la griglia card, prima del CTA**

Trova il blocco CTA (quello con `to="/progetti"`):
```html
      <!-- CTA -->
      <div
        v-motion="{ initial: { opacity: 0, y: 16 }, whileInView: { opacity: 1, y: 0 }, inViewOptions: { once: true }, transition: { duration: 0.5, delay: 0.3, ease: 'easeOut' as const } }"
        class="text-center mt-14"
      >
```

Inserisci prima di quel blocco:
```html
      <!-- Closing note -->
      <p
        v-motion="{ initial: { opacity: 0, y: 16 }, whileInView: { opacity: 1, y: 0 }, inViewOptions: { once: true }, transition: { duration: 0.5, delay: 0.25, ease: 'easeOut' as const } }"
        class="text-center text-[#6a6a7a] text-sm leading-relaxed max-w-2xl mx-auto mt-12"
      >
        Ogni progetto nasce da una domanda pratica: come organizzo meglio queste informazioni? Come riduco attività ripetitive? Come costruisco uno strumento semplice da usare? Dove l'AI può aiutare senza prendere il controllo del processo?
      </p>
```

- [ ] **Step 4: Commit**

```bash
git add app/components/ProjectsSection.vue
git commit -m "feat: update projects section intro and add practical closing note"
```

---

## Task 8: Aggiorna `app/components/AboutSection.vue`

**Files:**
- Modify: `app/components/AboutSection.vue`

- [ ] **Step 1: Aggiorna l'H2**

Trova:
```html
            Dalle operations<br />
            ai sistemi <span class="text-gradient">AI-native.</span>
```
Sostituisci con:
```html
            Prima i processi,<br />
            poi il <span class="text-gradient">codice.</span>
```

- [ ] **Step 2: Aggiorna i 3 paragrafi di testo**

Trova:
```html
          <p class="text-[#6a6a7a] leading-relaxed text-lg">
            Porto 26 anni di esperienza operativa nel software: progetto sistemi AI che semplificano lavoro, decisioni e processi.
          </p>
          <p class="text-[#6a6a7a] leading-relaxed text-lg">
            Dopo oltre 20 anni nelle operations della grande distribuzione italiana: gestione team, processi, responsabilità operative su larga scala. Quel background non è una nota a piè di pagina. È il motivo per cui capisco i problemi di business prima di iniziare a progettare le soluzioni.
          </p>
          <p class="text-[#6a6a7a] leading-relaxed text-lg">
            Prima capisco il processo, poi costruisco il sistema. Non mi interessa usare l'AI come semplice chatbot: mi interessa creare pipeline controllabili, agenti specializzati e strumenti che aiutano persone e team a lavorare meglio.
          </p>
```
Sostituisci con:
```html
          <p class="text-[#6a6a7a] leading-relaxed text-lg">
            Sono un Full Stack Developer con una specializzazione pratica in AI e automazione. Costruisco siti web, web app, strumenti interni, automazioni e workflow AI per PMI, professionisti e piccoli team.
          </p>
          <p class="text-[#6a6a7a] leading-relaxed text-lg">
            Prima di dedicarmi allo sviluppo web, ho lavorato per 26 anni nella GDO, dentro processi reali: team, fornitori, clienti, urgenze operative, strumenti non sempre adatti e problemi da risolvere senza troppa teoria. Quel background non è una nota a piè di pagina. È il motivo per cui capisco i problemi di business prima di iniziare a progettare soluzioni.
          </p>
          <p class="text-[#6a6a7a] leading-relaxed text-lg">
            La tecnologia è importante. Ma deve servire il lavoro, non diventare un altro problema da gestire.
          </p>
```

- [ ] **Step 3: Aggiorna il testo del link CTA**

Trova:
```html
            Scopri il mio approccio
```
Sostituisci con:
```html
            Scopri di più su di me
```

- [ ] **Step 4: Aggiorna il testo nella caption della foto (riga ~104)**

Trova:
```html
                <p class="text-xs text-gradient font-semibold mt-0.5">AI Workflow Engineer</p>
```
Sostituisci con:
```html
                <p class="text-xs text-gradient font-semibold mt-0.5">Full Stack Developer</p>
```

- [ ] **Step 5: Aggiorna l'attributo `alt` dell'immagine**

Trova:
```html
              alt="Simone Camerano — AI Workflow Engineer"
```
Sostituisci con:
```html
              alt="Simone Camerano — Full Stack Developer"
```

- [ ] **Step 6: Commit**

```bash
git add app/components/AboutSection.vue
git commit -m "feat: update about section bio, heading and photo caption for new positioning"
```

---

## Task 9: Aggiorna `app/components/MethodSection.vue`

**Files:**
- Modify: `app/components/MethodSection.vue`

- [ ] **Step 1: Sostituisci l'array `steps` e aggiorna H2 e closing quote**

Trova:
```ts
const steps = [
  {
    num: '01',
    label: 'Mappare',
    desc: 'Parto dal processo reale: cosa fai oggi, dove perdi tempo, quali decisioni si ripetono, quali dati contano davvero.',
  },
  {
    num: '02',
    label: 'Disegnare',
    desc: 'Progetto una pipeline semplice: fonti, filtri, modelli, regole, output e punti di controllo umano.',
  },
  {
    num: '03',
    label: 'Prototipare',
    desc: 'Costruisco un MVP funzionante, integrato con strumenti concreti come Telegram, dashboard, API o interfacce web.',
  },
  {
    num: '04',
    label: 'Rendere operativo',
    desc: 'Aggiungo logging, configurazione, test essenziali, gestione errori e documentazione per rendere il sistema usabile nel tempo.',
  },
]
```
Sostituisci con:
```ts
const steps = [
  {
    num: '01',
    label: 'Capire prima di costruire',
    desc: 'Prima di parlare di stack, framework o AI, cerco di capire il problema: cosa non funziona oggi, chi userà lo strumento, quali vincoli ci sono e quale risultato ti serve davvero.',
  },
  {
    num: '02',
    label: 'Soluzioni semplici da usare',
    desc: "Un sito, una web app o un'automazione devono essere comprensibili anche fuori dalla fase di sviluppo. Se uno strumento è potente ma nessuno lo usa volentieri, non ha risolto il problema.",
  },
  {
    num: '03',
    label: 'Tecnologia proporzionata',
    desc: "Non tutto richiede AI. Non tutto richiede un'app complessa. Scelgo la soluzione più adatta al contesto: a volte è un redesign, a volte una dashboard, a volte un workflow automatizzato.",
  },
  {
    num: '04',
    label: 'Controllo e manutenzione',
    desc: "Preferisco costruire sistemi chiari, documentati e mantenibili. Soprattutto quando entra in gioco l'AI, servono confini, controlli e passaggi verificabili.",
  },
]
```

- [ ] **Step 2: Aggiorna l'H2**

Trova:
```html
          Il mio metodo: capire il processo, poi <span class="text-gradient">costruire il sistema.</span>
```
Sostituisci con:
```html
          Come <span class="text-gradient">lavoro</span>
```

- [ ] **Step 3: Aggiorna la closing quote**

Trova:
```html
          "L'obiettivo non è mettere AI ovunque, ma costruire sistemi piccoli, chiari e controllabili che producano valore misurabile."
```
Sostituisci con:
```html
          "Il punto di partenza non è la tecnologia. È capire cosa oggi ti fa perdere tempo, cosa non è chiaro per i tuoi clienti o dove il tuo processo si blocca."
```

- [ ] **Step 4: Commit**

```bash
git add app/components/MethodSection.vue
git commit -m "feat: update method section steps and heading for new positioning"
```

---

## Task 10: Aggiorna `app/components/TechSection.vue` e `app/components/ContactSection.vue`

**Files:**
- Modify: `app/components/TechSection.vue`
- Modify: `app/components/ContactSection.vue`

- [ ] **Step 1: In `TechSection.vue`, aggiorna H2 e testo intro**

Trova:
```html
        <h2 class="text-4xl md:text-5xl font-extrabold text-[#f0f0f5] tracking-tight">
          Tecnologie con cui <span class="text-gradient">costruisco</span>
        </h2>
        <p class="text-[#6a6a7a] mt-4 max-w-md mx-auto">
          Scelgo gli strumenti in base al problema: modelli veloci per il triage, modelli più profondi per l'analisi, interfacce semplici per il controllo umano e stack full-stack moderno per trasformare il prototipo in prodotto.
        </p>
```
Sostituisci con:
```html
        <h2 class="text-4xl md:text-5xl font-extrabold text-[#f0f0f5] tracking-tight">
          Tecnologie che <span class="text-gradient">uso</span>
        </h2>
        <p class="text-[#6a6a7a] mt-4 max-w-md mx-auto">
          Uso strumenti moderni per costruire siti, web app, backend, automazioni e integrazioni AI. La scelta dello stack dipende dal progetto: prima viene il problema, poi la tecnologia.
        </p>
```

- [ ] **Step 2: In `ContactSection.vue`, aggiorna H2**

Trova:
```html
            Hai un processo<br />
            che vorresti<br />
            <span class="text-gradient">automatizzare?</span>
```
Sostituisci con:
```html
            Hai un sito da rifare,<br />
            una web app da costruire<br />
            o un processo da <span class="text-gradient">semplificare?</span>
```

- [ ] **Step 3: In `ContactSection.vue`, aggiorna i 2 paragrafi di testo**

Trova:
```html
        <p class="text-[#6a6a7a] text-lg leading-relaxed max-w-sm">
          Se stai cercando di usare meglio l'AI nel tuo lavoro, costruire un workflow su misura o trasformare un'idea in un prototipo funzionante, possiamo parlarne.
        </p>
        <p class="text-[#6a6a7a] text-lg leading-relaxed max-w-sm">
          Raccontami il processo, il problema o l'obiettivo: ti aiuto a capire se può diventare un sistema AI concreto.
        </p>
```
Sostituisci con:
```html
        <p class="text-[#6a6a7a] text-lg leading-relaxed max-w-sm">
          Raccontami da dove parti: un sito vecchio, un'idea di prodotto, un processo manuale, una knowledge base disordinata o il dubbio che l'AI possa aiutarti in modo concreto.
        </p>
        <p class="text-[#6a6a7a] text-lg leading-relaxed max-w-sm">
          Ti aiuto a capire cosa ha senso costruire, con quale priorità e con quale livello di complessità. Niente promesse esagerate. Prima capiamo il problema, poi decidiamo la soluzione.
        </p>
```

- [ ] **Step 4: In `ContactSection.vue`, aggiorna il badge disponibilità**

Trova:
```html
          <span class="text-sm font-medium text-green-400/90">Disponibile per collaborazioni freelance, prototipi AI, automazioni operative e prodotti full-stack.</span>
```
Sostituisci con:
```html
          <span class="text-sm font-medium text-green-400/90">Disponibile per freelance: siti, web app, automazioni e integrazioni AI.</span>
```

- [ ] **Step 5: Commit**

```bash
git add app/components/TechSection.vue app/components/ContactSection.vue
git commit -m "feat: update tech section intro and contact section heading and copy"
```

---

## Task 11: Aggiorna `app/pages/servizi.vue`

**Files:**
- Modify: `app/pages/servizi.vue`

- [ ] **Step 1: Sostituisci il blocco `<script setup>` completo**

Sostituisci tutto il blocco `<script setup lang="ts">` (righe 1–114) con:

```ts
<script setup lang="ts">
import { services } from '~/data/services'

useSeoMeta({
  title: 'Servizi — Simone Camerano Full Stack Developer',
  description: 'Siti web moderni, web app su misura, automazioni, knowledge base AI e audit digitale. Collaborazioni freelance per PMI, professionisti e piccoli team.',
  ogTitle: 'Servizi — Simone Camerano Full Stack Developer',
  ogDescription: 'Siti web moderni, web app su misura, automazioni, knowledge base AI e audit digitale.',
  ogType: 'website',
})

const whenCards = [
  {
    title: 'Hai un sito vecchio o che non funziona',
    desc: 'Il tuo sito è lento, poco chiaro o non rappresenta più quello che fai. O non hai ancora una presenza online professionale.',
  },
  {
    title: 'Ti serve uno strumento su misura',
    desc: 'Hai bisogno di una web app, un gestionale leggero o uno strumento interno per gestire dati, richieste o processi.',
  },
  {
    title: 'Excel non basta più',
    desc: 'Usi troppi file, email e documenti sparsi. Il flusso di lavoro è frammentato e ogni aggiornamento richiede passaggi manuali.',
  },
  {
    title: 'Vuoi automatizzare senza perdere il controllo',
    desc: 'Hai attività che si ripetono e vuoi automatizzarle senza che il sistema diventi ingestibile o opaco.',
  },
  {
    title: 'Hai documenti difficili da consultare',
    desc: 'Procedure, cataloghi, FAQ o informazioni interne sono dispersi e difficili da trovare quando servono.',
  },
  {
    title: "Vuoi capire se l'AI può aiutarti davvero",
    desc: "Senti parlare di AI e automazioni ma non sai se e come potrebbero cambiare il tuo modo di lavorare, senza hype.",
  },
  {
    title: "Hai un'idea ma non sai da dove partire",
    desc: "Vuoi costruire un prodotto digitale, ma ti serve qualcuno che traduca l'idea in architettura, priorità e primo prototipo.",
  },
]

const steps = [
  { num: '01', label: 'Capire prima di costruire', desc: 'Prima di parlare di stack, framework o AI, cerco di capire il problema: cosa non funziona oggi, chi userà lo strumento, quali vincoli ci sono.' },
  { num: '02', label: 'Soluzioni semplici da usare', desc: "Un sito, una web app o un'automazione devono essere comprensibili anche fuori dalla fase di sviluppo. Potente ma inutilizzato non risolve niente." },
  { num: '03', label: 'Tecnologia proporzionata', desc: "Non tutto richiede AI. Scelgo la soluzione più adatta: a volte è un redesign, a volte una dashboard, a volte un workflow automatizzato." },
  { num: '04', label: 'Controllo e manutenzione', desc: "Costruisco sistemi chiari, documentati e mantenibili. Soprattutto con l'AI, servono confini, controlli e passaggi verificabili." },
]

const linkedProjects = [
  { title: 'Joule Zero Point', service: 'Siti web moderni e redesign', desc: 'Sito web costruito per raccontare in modo chiaro un\'identità tecnica, visiva e contenutistica.', slug: 'joule-zero-point' },
  { title: 'IncluDO Guide', service: 'Knowledge base e assistenti AI su documenti', desc: 'Assistente conversazionale RAG con knowledge base custom, sessioni persistenti e prompt factory controllata.', slug: 'includo-guide' },
  { title: 'Italy Job Hunter', service: 'Automazioni e workflow AI', desc: 'Pipeline multi-modello che automatizza la ricerca lavoro con triage Groq e analisi DeepSeek, report su Telegram.', slug: 'italy-job-hunter' },
  { title: 'ContextForge', service: 'Web app e strumenti digitali su misura', desc: 'Memory engine locale per developer e agenti AI. Scansiona la codebase e genera contesto strutturato e queryabile.', slug: 'contextforge' },
  { title: 'AI Control Tower', service: 'Audit digitale e opportunità AI', desc: 'Dashboard locale per monitorare quote, stato e salute di provider AI come Claude, Codex, DeepSeek e Tavily.', slug: 'ai-control-tower' },
]

const faqs = [
  {
    q: 'Da dove si parte se non ho un progetto definito?',
    a: "Puoi arrivare con un problema operativo, un sito da aggiornare o l'idea che qualcosa non funziona. La prima conversazione serve proprio a capire cosa ha senso fare e in quale ordine.",
  },
  {
    q: 'Lavori solo su AI e automazioni?',
    a: 'No. Costruisco siti web, web app e strumenti digitali completi. Integro AI e automazioni quando servono davvero, non per forza.',
  },
  {
    q: 'Puoi lavorare su un progetto piccolo?',
    a: 'Sì. Preferisco partire da un MVP o da una soluzione concreta, misurare il valore e poi decidere se renderla più solida o espanderla.',
  },
  {
    q: 'Quanto tempo richiede un progetto tipico?',
    a: "Dipende dal tipo di lavoro. Un sito vetrina può essere pronto in pochi giorni. Una web app o un workflow AI richiede più iterazioni. Lo definiamo insieme prima di iniziare.",
  },
  {
    q: 'Posso contattarti solo per una consulenza?',
    a: 'Sì. Se vuoi capire cosa ha senso costruire, valutare le opzioni o avere un secondo parere su un progetto già in corso, possiamo parlarne senza impegno.',
  },
]
</script>
```

- [ ] **Step 2: Aggiorna la Section 1 (Hero) nel template**

Trova:
```html
          <span
            class="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.12em] mb-6"
            style="background: rgba(139,92,246,0.1); border: 1px solid rgba(139,92,246,0.25); color: #c4b5fd;"
          >
            Servizi AI &amp; Automazione
          </span>
          <h1 class="text-5xl md:text-6xl font-extrabold text-[#f0f0f5] leading-[1.05] tracking-tight max-w-4xl">
            Trasformo processi manuali in<br>
            <span class="text-gradient">workflow AI operativi.</span>
          </h1>
          <p class="text-[#6a6a7a] text-lg leading-relaxed mt-6 max-w-2xl">
            Progetto e costruisco automazioni, agenti, dashboard e prodotti full-stack AI-native per ridurre rumore, risparmiare tempo e rendere i processi più controllabili.
          </p>
```
Sostituisci con:
```html
          <span
            class="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.12em] mb-6"
            style="background: rgba(139,92,246,0.1); border: 1px solid rgba(139,92,246,0.25); color: #c4b5fd;"
          >
            Servizi
          </span>
          <h1 class="text-5xl md:text-6xl font-extrabold text-[#f0f0f5] leading-[1.05] tracking-tight max-w-4xl">
            Cosa posso costruire<br>
            <span class="text-gradient">per te.</span>
          </h1>
          <p class="text-[#6a6a7a] text-lg leading-relaxed mt-6 max-w-2xl">
            Lavoro su progetti piccoli e medi con un obiettivo chiaro: trasformare un bisogno reale in uno strumento digitale semplice da usare, mantenere e far crescere. Non parto dall'AI per forza. Parto da quello che ti serve.
          </p>
```

- [ ] **Step 3: Aggiorna il CTA button della Section 1**

Trova:
```html
            Raccontami il tuo processo
```
Sostituisci con:
```html
            Parliamo del tuo progetto
```

- [ ] **Step 4: Aggiorna la microfrase sotto il CTA della Section 1**

Trova:
```html
          <p class="text-[#4a4a5a] text-sm mt-5">
            Ideale per freelance, founder, piccoli team e realtà che vogliono usare l'AI in modo pratico, non solo sperimentale.
          </p>
```
Sostituisci con:
```html
          <p class="text-[#4a4a5a] text-sm mt-5">
            Per PMI, professionisti e piccoli team che vogliono strumenti digitali concreti, non promesse esagerate.
          </p>
```

- [ ] **Step 5: Aggiorna Section 2 (Quando) — H2 e testo**

Trova:
```html
          <h2 class="text-4xl md:text-5xl font-extrabold text-[#f0f0f5] tracking-tight leading-[1.1] max-w-3xl">
            Quando ha senso <span class="text-gradient">lavorare insieme</span>
          </h2>
          <p class="text-[#6a6a7a] leading-relaxed mt-6 max-w-2xl">
            Il mio lavoro è utile quando esiste un processo ripetitivo, informativo o decisionale che oggi richiede troppo tempo manuale e può essere reso più intelligente con AI, automazione e una buona interfaccia operativa.
          </p>
```
Sostituisci con:
```html
          <h2 class="text-4xl md:text-5xl font-extrabold text-[#f0f0f5] tracking-tight leading-[1.1] max-w-3xl">
            Posso aiutarti <span class="text-gradient">se…</span>
          </h2>
          <p class="text-[#6a6a7a] leading-relaxed mt-6 max-w-2xl">
            In molti casi non serve "rivoluzionare" niente. Serve mettere ordine, scegliere le priorità e costruire uno strumento che faccia bene il suo lavoro.
          </p>
```

- [ ] **Step 6: Aggiorna Section 3 (Servizi) — H2, testo intro e template card**

Aggiorna H2 e intro:
Trova:
```html
          <h2 class="text-4xl md:text-5xl font-extrabold text-[#f0f0f5] tracking-tight leading-[1.1]">
            Servizi <span class="text-gradient">principali</span>
          </h2>
          <p class="text-[#6a6a7a] leading-relaxed mt-6 max-w-2xl">
            Ogni servizio può partire come audit, prototipo o MVP. L'obiettivo è validare velocemente il valore e poi rendere il sistema più solido solo quando serve.
          </p>
```
Sostituisci con:
```html
          <h2 class="text-4xl md:text-5xl font-extrabold text-[#f0f0f5] tracking-tight leading-[1.1]">
            I cinque <span class="text-gradient">servizi</span>
          </h2>
          <p class="text-[#6a6a7a] leading-relaxed mt-6 max-w-2xl">
            Ogni servizio può partire come audit, consulenza o MVP. L'obiettivo è sempre costruire qualcosa che funziona davvero, non una demo.
          </p>
```

Aggiorna il template interno della card per usare `utile_se` e `output` invece di `ideal` e `outputs`. Trova il blocco card che inizia con:
```html
            <p class="text-xs text-[#4a4a5a] uppercase tracking-widest mb-1">Ideale per:</p>
            <p class="text-[#6a6a7a] text-sm mb-4">{{ service.ideal }}</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="output in service.outputs"
                :key="output"
                class="px-2.5 py-1 rounded-lg text-xs"
                style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); color: #8a8a9a;"
              >
                {{ output }}
              </span>
            </div>
            <div class="mt-auto pt-2">
              <a
                href="/#contatti"
                class="inline-flex items-center gap-1.5 text-sm font-semibold transition-opacity duration-200 hover:opacity-75"
                style="background: linear-gradient(135deg, #3b82f6, #8b5cf6); -webkit-background-clip: text; -webkit-text-fill-color: transparent;"
              >
                {{ service.cta }}
                <svg class="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="#8b5cf6" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
```
Sostituisci con:
```html
            <p class="text-xs text-[#4a4a5a] uppercase tracking-widest mb-2">Utile se</p>
            <ul class="text-[#6a6a7a] text-sm mb-4 flex flex-col gap-1">
              <li v-for="item in service.utile_se" :key="item" class="flex gap-2">
                <span class="text-blue-400 flex-shrink-0">—</span>
                <span>{{ item }}</span>
              </li>
            </ul>
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="out in service.output"
                :key="out"
                class="px-2.5 py-1 rounded-lg text-xs"
                style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); color: #8a8a9a;"
              >
                {{ out }}
              </span>
            </div>
            <div class="mt-auto pt-2">
              <a
                href="/#contatti"
                class="inline-flex items-center gap-1.5 text-sm font-semibold transition-opacity duration-200 hover:opacity-75"
                style="background: linear-gradient(135deg, #3b82f6, #8b5cf6); -webkit-background-clip: text; -webkit-text-fill-color: transparent;"
              >
                Parliamo di questo
                <svg class="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="#8b5cf6" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
```

- [ ] **Step 7: Aggiorna Section 7 (CTA finale)**

Trova:
```html
          <h2 class="text-3xl md:text-4xl font-extrabold text-[#f0f0f5] tracking-tight leading-[1.1] mb-6">
            Hai un processo che vorresti <span class="text-gradient">rendere più intelligente?</span>
          </h2>
          <p class="text-[#6a6a7a] leading-relaxed mb-8 max-w-xl mx-auto">
            Raccontami cosa fai oggi, dove perdi tempo e quale risultato vorresti ottenere. Ti aiuto a capire se può diventare un workflow AI concreto, un bot operativo, una dashboard o un prodotto full-stack.
          </p>
```
Sostituisci con:
```html
          <h2 class="text-3xl md:text-4xl font-extrabold text-[#f0f0f5] tracking-tight leading-[1.1] mb-6">
            Hai un sito da rifare, una web app da costruire o un processo da <span class="text-gradient">semplificare?</span>
          </h2>
          <p class="text-[#6a6a7a] leading-relaxed mb-8 max-w-xl mx-auto">
            Raccontami da dove parti. Ti aiuto a capire cosa ha senso costruire, con quale priorità e con quale livello di complessità.
          </p>
```

- [ ] **Step 8: Aggiorna il testo del CTA button e la microfrase finale**

Trova:
```html
            Parliamo del tuo workflow
```
Sostituisci con:
```html
            Scrivimi per parlare del progetto
```

Trova:
```html
          <p class="text-[#4a4a5a] text-sm mt-5">
            Disponibile per collaborazioni freelance, prototipi AI, automazioni operative e prodotti full-stack.
          </p>
```
Sostituisci con:
```html
          <p class="text-[#4a4a5a] text-sm mt-5">
            Niente promesse esagerate. Prima capiamo il problema, poi decidiamo la soluzione.
          </p>
```

- [ ] **Step 9: Verifica typecheck**

```bash
npx nuxi typecheck
```

Expected: nessun errore. Il tipo `Service` da `~/data/services` è compatibile con l'uso nel template.

- [ ] **Step 10: Commit**

```bash
git add app/pages/servizi.vue
git commit -m "feat: rewrite servizi.vue content for new positioning, import services from shared data file"
```

---

## Task 12: Aggiorna `app/pages/about.vue`

**Files:**
- Modify: `app/pages/about.vue`

- [ ] **Step 1: Aggiorna il meta SEO**

Trova:
```ts
useSeoMeta({
  title: 'Chi sono — Simone Camerano',
  description:
    'Scopri il percorso, il metodo di lavoro e lo stack tecnico di Simone Camerano, web developer specializzato in Vue, Nuxt e TypeScript.',
  ogTitle: 'Chi sono — Simone Camerano',
  ogDescription:
    'Percorso, competenze e approccio al lavoro di Simone Camerano, web developer.',
})
```
Sostituisci con:
```ts
useSeoMeta({
  title: 'Chi sono — Simone Camerano Full Stack Developer',
  description:
    'Full Stack Developer con 26 anni di esperienza operativa nella GDO. Costruisco siti web, web app, automazioni e workflow AI pragmatici per PMI e professionisti.',
  ogTitle: 'Chi sono — Simone Camerano Full Stack Developer',
  ogDescription:
    'Full Stack Developer con specializzazione pratica in AI e automazione. Prima i processi, poi il codice.',
})
```

- [ ] **Step 2: Sostituisci l'array `storyParagraphs`**

Trova:
```ts
const storyParagraphs = [
  'Progetto e costruisco sistemi AI-nativo, pipeline di automazione, workflow multi-agente e prodotti full stack che risolvono problemi di business reali.',
  'Prima di scrivere codice, ho trascorso 26 anni nella macchina operativa e commerciale della grande distribuzione italiana: gestione team, processi, responsabilità operative su larga scala. Quel background non è una nota a piè di pagina. È il motivo per cui capisco i problemi di business prima di iniziare a progettare le soluzioni.',
  'Cosa costruisco: pipeline AI multi-modello (ricerca web, triage, analisi, delivery), sistemi RAG con vector store custom e session persistence, orchestrazione multi-agente con human approval gates, prodotti web full stack: Vue/Nuxt, Node.js, TypeScript, MongoDB.',
  'Uso l\'AI come infrastruttura, non come feature. L\'obiettivo è sempre sistemi che funzionano in modo affidabile, non demo che impressionano una volta sola. Aperto a collaborazioni freelance con founder, startup e team tecnici che hanno bisogno di sistemi AI costruiti bene.',
]
```
Sostituisci con:
```ts
const storyParagraphs = [
  'Sono un Full Stack Developer con una specializzazione pratica in AI e automazione. Costruisco siti web, web app, strumenti interni, automazioni e workflow AI per PMI, professionisti e piccoli team che vogliono strumenti digitali concreti, non sperimentali.',
  'Prima di dedicarmi allo sviluppo web, ho lavorato per 26 anni nella GDO: gestione team, processi, responsabilità operative su larga scala, fornitori, clienti e urgenze da risolvere senza troppa teoria. Quel background non è una nota a piè di pagina. È il motivo per cui capisco i problemi di business prima di iniziare a progettare soluzioni.',
  "Il mio approccio: prima capisco come funziona davvero la tua attività — cosa rallenta il lavoro, cosa crea confusione, cosa può essere semplificato. Poi progetto e costruisco la soluzione: un sito, una web app, uno strumento interno, un'automazione o un workflow AI.",
  'La tecnologia è importante. Ma deve servire il lavoro, non diventare un altro problema da gestire.',
]
```

- [ ] **Step 3: Commit**

```bash
git add app/pages/about.vue
git commit -m "feat: update about page bio paragraphs and SEO meta for new positioning"
```

---

## Task 13: Verifica finale

**Files:** nessuno — solo verifica

- [ ] **Step 1: Esegui il typecheck completo**

```bash
npx nuxi typecheck
```

Expected: 0 errori.

- [ ] **Step 2: Avvia il dev server e verifica le pagine chiave**

```bash
npm run dev
```

Verifica visivamente:
- `/` — hero mostra "Full Stack Developer per siti, web app e soluzioni AI pratiche", code mockup aggiornato, 6 card progetti in sezione progetti
- `/servizi` — titolo "Cosa posso costruire per te", 5 nuove card con lista "Utile se" e badge output, CTA "Parliamo di questo"
- `/about` — bio aggiornata senza riferimenti a "AI-native" come posizionamento principale

- [ ] **Step 3: Commit finale di pulizia (se necessario)**

Se durante la verifica trovi testi residui con il vecchio posizionamento ("AI Workflow Engineer", "agenti operativi" come titolo principale, "AI-native systems"), correggili e committa:

```bash
git add -p
git commit -m "fix: remove residual old positioning references"
```
