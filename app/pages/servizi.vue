<script setup lang="ts">
useSeoMeta({
  title: 'Servizi AI & Automazione — Simone Camerano',
  description: 'Workflow AI, bot operativi, assistenti RAG, dashboard e prodotti full-stack AI-native. Collaborazioni freelance per freelance, founder e piccoli team.',
  ogTitle: 'Servizi AI & Automazione — Simone Camerano',
  ogDescription: 'Workflow AI, bot operativi, assistenti RAG, dashboard e prodotti full-stack AI-native.',
  ogType: 'website',
})

const whenCards = [
  {
    title: 'Monitori fonti ogni giorno',
    desc: 'News, annunci, lead, competitor, bandi, documenti o dati che devi controllare regolarmente.',
  },
  {
    title: 'Filtri troppo rumore manualmente',
    desc: 'Hai molte informazioni, ma il valore sta nel selezionare ciò che conta davvero.',
  },
  {
    title: 'Usi AI senza workflow stabile',
    desc: 'Hai Claude, ChatGPT, Codex, Gemini o Ollama, ma non un processo ripetibile e controllabile.',
  },
  {
    title: 'Vuoi un assistente operativo',
    desc: 'Ti serve un bot o dashboard che lavori con le tue fonti e ti riporti output utili.',
  },
  {
    title: 'Hai documenti da rendere interrogabili',
    desc: 'Cataloghi, FAQ, manuali, percorsi formativi o knowledge base che gli utenti faticano a navigare.',
  },
]

const services = [
  {
    num: '01',
    title: 'AI Workflow Audit',
    desc: 'Analizzo un processo manuale o ripetitivo e progetto una soluzione AI automatizzabile.',
    ideal: 'Chi sa di perdere tempo in attività ripetitive, ma non ha ancora chiaro cosa automatizzare.',
    outputs: ['Mappa processo', 'Colli di bottiglia', 'Architettura proposta', 'Quick win', 'Roadmap MVP'],
    cta: 'Analizziamo il tuo workflow',
  },
  {
    num: '02',
    title: 'Bot AI operativo Telegram/Slack',
    desc: 'Creo bot che monitorano fonti, filtrano informazioni, analizzano risultati e inviano report dove lavori già.',
    ideal: 'Freelance, consulenti o team che vogliono insight periodici senza controllare manualmente molte fonti.',
    outputs: ['Bot Telegram/Slack', 'Report automatici', 'Pipeline LLM', 'Logging e scheduling'],
    cta: 'Costruiamo un bot operativo',
  },
  {
    num: '03',
    title: 'Assistente RAG verticale',
    desc: 'Trasformo documenti, cataloghi, FAQ o knowledge base in un assistente AI specializzato e controllato.',
    ideal: 'Aziende, enti, scuole o team con contenuti utili ma difficili da esplorare.',
    outputs: ['Ingestion contenuti', 'Embeddings/retrieval', 'Prompt controllato', 'Chat + sessioni', 'Backend API'],
    cta: 'Rendiamo interrogabile la tua knowledge base',
  },
  {
    num: '04',
    title: 'AI Developer Workflow Setup',
    desc: 'Aiuto developer e piccoli team a organizzare Claude Code, Codex, Ollama, Gemini e agenti in un workflow stabile.',
    ideal: 'Chi usa già strumenti AI per sviluppare, ma vuole un sistema più ordinato e ripetibile.',
    outputs: ['Setup strumenti', 'Regole agentiche', 'Context/memory strategy', 'Documentazione operativa'],
    cta: 'Organizziamo il tuo workflow AI',
  },
  {
    num: '05',
    title: 'AI Monitoring Dashboard',
    desc: 'Creo dashboard per monitorare provider, quote, costi, automazioni e stato dei workflow AI.',
    ideal: 'Power user AI o team che usano più strumenti e vogliono visibilità operativa.',
    outputs: ['Dashboard locale/web', 'Connector API', 'Health check', 'Alert e polling provider'],
    cta: 'Costruiamo una dashboard di controllo',
  },
]

const steps = [
  { num: '01', label: 'Mappiamo', desc: 'Partiamo da cosa fai oggi, quali passaggi si ripetono, quali fonti usi e dove perdi tempo.' },
  { num: '02', label: 'Disegniamo', desc: 'Definiamo input, automazioni, modelli AI, regole, output e punti di controllo umano.' },
  { num: '03', label: 'Prototipiamo', desc: 'Realizziamo un MVP funzionante, collegato a strumenti concreti come Telegram, dashboard, API o web app.' },
  { num: '04', label: 'Operativizziamo', desc: 'Aggiungiamo logging, configurazione, error handling e documentazione.' },
  { num: '05', label: 'Iteriamo', desc: 'Miglioriamo solo ciò che serve davvero dopo aver visto il sistema lavorare su casi concreti.' },
]

const linkedProjects = [
  { title: 'ContextForge', service: 'AI Developer Workflow Setup', desc: 'Memory engine locale per developer e agenti AI. Scansiona la codebase e genera contesto strutturato e queryabile.', slug: 'contextforge' },
  { title: 'Italy Job Hunter', service: 'Bot AI operativo / AI Workflow Audit', desc: 'Pipeline multi-modello che automatizza la ricerca lavoro con triage Groq e analisi DeepSeek, report su Telegram.', slug: 'italy-job-hunter' },
  { title: 'LinkedIn Assistant', service: 'Bot AI operativo', desc: 'Workflow AI human-in-the-loop per engagement professionale: scoring, bozze commento e digest Telegram.', slug: 'linkedin-assistant' },
  { title: 'IncluDO Guide', service: 'Assistente RAG verticale', desc: 'Assistente conversazionale RAG con knowledge base custom, sessioni persistenti e prompt factory controllata.', slug: 'includo-guide' },
  { title: 'AI Control Tower', service: 'AI Monitoring Dashboard', desc: 'Dashboard locale per monitorare quote, stato e salute di provider AI come Claude, Codex, DeepSeek e Tavily.', slug: 'ai-control-tower' },
]

const faqs = [
  {
    q: 'Devo avere già un\'idea tecnica precisa?',
    a: 'No. Puoi arrivare anche con un processo confuso o un problema operativo. La prima fase serve proprio a capire cosa ha senso automatizzare e cosa no.',
  },
  {
    q: 'Lavori solo su AI?',
    a: 'Il focus è AI + automazione, ma spesso serve anche sviluppo full-stack tradizionale: API, dashboard, database, interfacce, deploy e integrazioni.',
  },
  {
    q: 'Puoi lavorare su un prototipo piccolo?',
    a: 'Sì. Preferisco partire da un MVP o da una proof of concept concreta, misurare il valore e poi decidere se renderla più solida.',
  },
  {
    q: 'Usi un solo modello AI?',
    a: 'No. Scelgo il modello in base al compito: modelli veloci per triage, modelli più profondi per analisi, modelli locali quando servono controllo o privacy.',
  },
  {
    q: 'Puoi integrare Telegram, Slack o email?',
    a: 'Sì. Molti workflow diventano davvero utili quando arrivano nei canali in cui lavori già.',
  },
]
</script>

<template>
  <main class="min-h-screen">

    <!-- ── Section 1: Hero ─────────────────────────────────────── -->
    <section class="pt-28 pb-24 px-6">
      <div class="max-w-6xl mx-auto">
        <div
          v-motion="{
            initial: { opacity: 0, y: 28 },
            whileInView: { opacity: 1, y: 0 },
            inViewOptions: { once: true },
            transition: { duration: 0.6, ease: 'easeOut' as const },
          }"
        >
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
          <div class="flex flex-wrap gap-4 mt-8">
            <a
              href="/#contatti"
              class="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-semibold text-white transition-all duration-200 hover:opacity-85"
              style="background: linear-gradient(135deg, #3b82f6, #8b5cf6);"
            >
              Raccontami il tuo processo
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <NuxtLink
              to="/progetti"
              class="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-semibold transition-all duration-200 hover:bg-white/[0.06] hover:text-white"
              style="border: 1px solid rgba(255,255,255,0.14); color: #d0d0e0;"
            >
              Vedi i progetti
            </NuxtLink>
          </div>
          <p class="text-[#4a4a5a] text-sm mt-5">
            Ideale per freelance, founder, piccoli team e realtà che vogliono usare l'AI in modo pratico, non solo sperimentale.
          </p>
        </div>
      </div>
    </section>

    <!-- ── Section 2: Quando posso aiutarti ──────────────────────── -->
    <section class="py-24 px-6">
      <div
        class="max-w-6xl mx-auto mb-20 h-px"
        style="background: linear-gradient(90deg, transparent, rgba(59,130,246,0.3), transparent);"
        aria-hidden="true"
      />
      <div class="max-w-6xl mx-auto">
        <div
          v-motion="{
            initial: { opacity: 0, y: 28 },
            whileInView: { opacity: 1, y: 0 },
            inViewOptions: { once: true },
            transition: { duration: 0.6, ease: 'easeOut' as const },
          }"
          class="mb-12"
        >
          <span
            class="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.12em] mb-5"
            style="background: rgba(59,130,246,0.1); border: 1px solid rgba(59,130,246,0.25); color: #93c5fd;"
          >
            Quando
          </span>
          <h2 class="text-4xl md:text-5xl font-extrabold text-[#f0f0f5] tracking-tight leading-[1.1] max-w-3xl">
            Quando ha senso <span class="text-gradient">lavorare insieme</span>
          </h2>
          <p class="text-[#6a6a7a] leading-relaxed mt-6 max-w-2xl">
            Il mio lavoro è utile quando esiste un processo ripetitivo, informativo o decisionale che oggi richiede troppo tempo manuale e può essere reso più intelligente con AI, automazione e una buona interfaccia operativa.
          </p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div
            v-for="(card, i) in whenCards"
            :key="card.title"
            v-motion="{
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              inViewOptions: { once: true },
              transition: { duration: 0.45, delay: i * 0.09, ease: 'easeOut' as const },
            }"
            class="glass card-hover rounded-2xl p-6"
            style="border-color: rgba(255,255,255,0.08);"
          >
            <h3 class="text-[#d0d0e0] font-semibold mb-2">{{ card.title }}</h3>
            <p class="text-[#6a6a7a] text-sm leading-relaxed">{{ card.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Section 3: Servizi principali ──────────────────────────── -->
    <section class="py-24 px-6">
      <div
        class="max-w-6xl mx-auto mb-20 h-px"
        style="background: linear-gradient(90deg, transparent, rgba(139,92,246,0.3), transparent);"
        aria-hidden="true"
      />
      <div class="max-w-6xl mx-auto">
        <div
          v-motion="{
            initial: { opacity: 0, y: 28 },
            whileInView: { opacity: 1, y: 0 },
            inViewOptions: { once: true },
            transition: { duration: 0.6, ease: 'easeOut' as const },
          }"
          class="mb-12"
        >
          <span
            class="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.12em] mb-5"
            style="background: rgba(139,92,246,0.1); border: 1px solid rgba(139,92,246,0.25); color: #c4b5fd;"
          >
            Servizi
          </span>
          <h2 class="text-4xl md:text-5xl font-extrabold text-[#f0f0f5] tracking-tight leading-[1.1]">
            Servizi <span class="text-gradient">principali</span>
          </h2>
          <p class="text-[#6a6a7a] leading-relaxed mt-6 max-w-2xl">
            Ogni servizio può partire come audit, prototipo o MVP. L'obiettivo è validare velocemente il valore e poi rendere il sistema più solido solo quando serve.
          </p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(service, i) in services"
            :key="service.num"
            v-motion="{
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              inViewOptions: { once: true },
              transition: { duration: 0.45, delay: i * 0.09, ease: 'easeOut' as const },
            }"
            class="glass card-hover rounded-2xl p-7 flex flex-col"
            style="border-color: rgba(255,255,255,0.08);"
          >
            <div
              class="text-xs font-mono font-bold mb-4"
              style="background: linear-gradient(135deg, #3b82f6, #8b5cf6); -webkit-background-clip: text; -webkit-text-fill-color: transparent;"
              aria-hidden="true"
            >
              {{ service.num }}
            </div>
            <h3 class="text-[#f0f0f5] font-bold text-lg mb-2">{{ service.title }}</h3>
            <p class="text-[#6a6a7a] text-sm leading-relaxed mb-4">{{ service.desc }}</p>
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
          </div>
        </div>
      </div>
    </section>

    <!-- ── Section 4: Metodo ───────────────────────────────────────── -->
    <section class="py-24 px-6">
      <div
        class="max-w-6xl mx-auto mb-20 h-px"
        style="background: linear-gradient(90deg, transparent, rgba(74,222,128,0.25), transparent);"
        aria-hidden="true"
      />
      <div class="max-w-6xl mx-auto">
        <div
          v-motion="{
            initial: { opacity: 0, y: 28 },
            whileInView: { opacity: 1, y: 0 },
            inViewOptions: { once: true },
            transition: { duration: 0.6, ease: 'easeOut' as const },
          }"
          class="mb-12"
        >
          <span
            class="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.12em] mb-5"
            style="background: rgba(74,222,128,0.07); border: 1px solid rgba(74,222,128,0.2); color: #86efac;"
          >
            Metodo
          </span>
          <h2 class="text-4xl md:text-5xl font-extrabold text-[#f0f0f5] tracking-tight leading-[1.1]">
            Come <span class="text-gradient">lavoro</span>
          </h2>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div
            v-for="(step, i) in steps"
            :key="step.num"
            v-motion="{
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              inViewOptions: { once: true },
              transition: { duration: 0.45, delay: i * 0.09, ease: 'easeOut' as const },
            }"
            class="glass rounded-2xl p-6"
            style="border-color: rgba(255,255,255,0.08);"
          >
            <div class="text-gradient text-5xl font-black leading-none mb-4">
              {{ step.num }}
            </div>
            <div class="text-[#d0d0e0] font-bold text-base mb-2">
              {{ step.label }}
            </div>
            <p class="text-[#6a6a7a] text-sm leading-relaxed">{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Section 5: Progetti collegati ──────────────────────────── -->
    <section class="py-24 px-6">
      <div
        class="max-w-6xl mx-auto mb-20 h-px"
        style="background: linear-gradient(90deg, transparent, rgba(59,130,246,0.3), transparent);"
        aria-hidden="true"
      />
      <div class="max-w-6xl mx-auto">
        <div
          v-motion="{
            initial: { opacity: 0, y: 28 },
            whileInView: { opacity: 1, y: 0 },
            inViewOptions: { once: true },
            transition: { duration: 0.6, ease: 'easeOut' as const },
          }"
          class="mb-12"
        >
          <span
            class="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.12em] mb-5"
            style="background: rgba(59,130,246,0.1); border: 1px solid rgba(59,130,246,0.25); color: #93c5fd;"
          >
            Portfolio
          </span>
          <h2 class="text-4xl md:text-5xl font-extrabold text-[#f0f0f5] tracking-tight leading-[1.1] max-w-3xl">
            Progetti che <span class="text-gradient">dimostrano questi servizi</span>
          </h2>
          <p class="text-[#6a6a7a] leading-relaxed mt-6 max-w-2xl">
            Ogni servizio ha almeno un progetto portfolio che lo dimostra concretamente.
          </p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(project, i) in linkedProjects"
            :key="project.slug"
            v-motion="{
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              inViewOptions: { once: true },
              transition: { duration: 0.45, delay: i * 0.09, ease: 'easeOut' as const },
            }"
            class="glass card-hover rounded-2xl p-6 flex flex-col"
            style="border-color: rgba(255,255,255,0.08);"
          >
            <span
              class="inline-block px-2.5 py-1 rounded-lg text-xs font-semibold mb-4 self-start"
              style="background: rgba(59,130,246,0.1); border: 1px solid rgba(59,130,246,0.25); color: #93c5fd;"
            >
              {{ project.service }}
            </span>
            <h3 class="text-[#f0f0f5] font-bold text-lg mb-2">{{ project.title }}</h3>
            <p class="text-[#6a6a7a] text-sm leading-relaxed mb-4 flex-grow">{{ project.desc }}</p>
            <NuxtLink
              :to="`/progetti/${project.slug}`"
              class="inline-flex items-center gap-1 text-sm font-semibold mt-auto transition-opacity duration-200 hover:opacity-75"
              style="background: linear-gradient(135deg, #3b82f6, #8b5cf6); -webkit-background-clip: text; -webkit-text-fill-color: transparent;"
            >
              Vedi case study
              <svg class="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="#8b5cf6" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Section 6: FAQ ──────────────────────────────────────────── -->
    <section class="py-24 px-6">
      <div
        class="max-w-6xl mx-auto mb-20 h-px"
        style="background: linear-gradient(90deg, transparent, rgba(139,92,246,0.3), transparent);"
        aria-hidden="true"
      />
      <div class="max-w-6xl mx-auto">
        <div
          v-motion="{
            initial: { opacity: 0, y: 28 },
            whileInView: { opacity: 1, y: 0 },
            inViewOptions: { once: true },
            transition: { duration: 0.6, ease: 'easeOut' as const },
          }"
          class="mb-12"
        >
          <span
            class="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.12em] mb-5"
            style="background: rgba(139,92,246,0.1); border: 1px solid rgba(139,92,246,0.25); color: #c4b5fd;"
          >
            FAQ
          </span>
          <h2 class="text-4xl md:text-5xl font-extrabold text-[#f0f0f5] tracking-tight leading-[1.1]">
            Domande <span class="text-gradient">frequenti</span>
          </h2>
        </div>
        <div class="grid md:grid-cols-2 gap-4">
          <div
            v-for="(faq, i) in faqs"
            :key="faq.q"
            v-motion="{
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              inViewOptions: { once: true },
              transition: { duration: 0.45, delay: i * 0.09, ease: 'easeOut' as const },
            }"
            class="glass rounded-2xl p-6"
            style="border-color: rgba(255,255,255,0.08);"
          >
            <h3 class="text-[#d0d0e0] font-bold mb-3">{{ faq.q }}</h3>
            <p class="text-[#6a6a7a] text-sm leading-relaxed">{{ faq.a }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Section 7: CTA finale ───────────────────────────────────── -->
    <section class="py-24 px-6">
      <div
        class="max-w-6xl mx-auto mb-20 h-px"
        style="background: linear-gradient(90deg, transparent, rgba(139,92,246,0.3), transparent);"
        aria-hidden="true"
      />
      <div class="max-w-6xl mx-auto">
        <div
          v-motion="{
            initial: { opacity: 0, y: 28 },
            whileInView: { opacity: 1, y: 0 },
            inViewOptions: { once: true },
            transition: { duration: 0.6, ease: 'easeOut' as const },
          }"
          class="glass rounded-3xl p-10 md:p-14 text-center max-w-3xl mx-auto"
          style="border-color: rgba(139,92,246,0.2); background: rgba(139,92,246,0.04);"
        >
          <span
            class="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.12em] mb-6"
            style="background: rgba(139,92,246,0.1); border: 1px solid rgba(139,92,246,0.25); color: #c4b5fd;"
          >
            Parliamo
          </span>
          <h2 class="text-3xl md:text-4xl font-extrabold text-[#f0f0f5] tracking-tight leading-[1.1] mb-6">
            Hai un processo che vorresti <span class="text-gradient">rendere più intelligente?</span>
          </h2>
          <p class="text-[#6a6a7a] leading-relaxed mb-8 max-w-xl mx-auto">
            Raccontami cosa fai oggi, dove perdi tempo e quale risultato vorresti ottenere. Ti aiuto a capire se può diventare un workflow AI concreto, un bot operativo, una dashboard o un prodotto full-stack.
          </p>
          <a
            href="/#contatti"
            class="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-sm font-semibold text-white transition-all duration-200 hover:opacity-85"
            style="background: linear-gradient(135deg, #3b82f6, #8b5cf6);"
          >
            Parliamo del tuo workflow
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <p class="text-[#4a4a5a] text-sm mt-5">
            Disponibile per collaborazioni freelance, prototipi AI, automazioni operative e prodotti full-stack.
          </p>
        </div>
      </div>
    </section>

  </main>
</template>
