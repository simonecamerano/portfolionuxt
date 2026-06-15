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
            Servizi
          </span>
          <h1 class="text-5xl md:text-6xl font-extrabold text-[#f0f0f5] leading-[1.05] tracking-tight max-w-4xl">
            Cosa posso costruire<br>
            <span class="text-gradient">per te.</span>
          </h1>
          <p class="text-[#6a6a7a] text-lg leading-relaxed mt-6 max-w-2xl">
            Lavoro su progetti piccoli e medi con un obiettivo chiaro: trasformare un bisogno reale in uno strumento digitale semplice da usare, mantenere e far crescere. Non parto dall'AI per forza. Parto da quello che ti serve.
          </p>
          <div class="flex flex-wrap gap-4 mt-8">
            <a
              href="/#contatti"
              class="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-semibold text-white transition-all duration-200 hover:opacity-85"
              style="background: linear-gradient(135deg, #3b82f6, #8b5cf6);"
            >
              Parliamo del tuo progetto
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
            Per PMI, professionisti e piccoli team che vogliono strumenti digitali concreti, non promesse esagerate.
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
            Posso aiutarti <span class="text-gradient">se…</span>
          </h2>
          <p class="text-[#6a6a7a] leading-relaxed mt-6 max-w-2xl">
            In molti casi non serve "rivoluzionare" niente. Serve mettere ordine, scegliere le priorità e costruire uno strumento che faccia bene il suo lavoro.
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
            I cinque <span class="text-gradient">servizi</span>
          </h2>
          <p class="text-[#6a6a7a] leading-relaxed mt-6 max-w-2xl">
            Ogni servizio può partire come audit, consulenza o MVP. L'obiettivo è sempre costruire qualcosa che funziona davvero, non una demo.
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
            Hai un sito da rifare, una web app da costruire o un processo da <span class="text-gradient">semplificare?</span>
          </h2>
          <p class="text-[#6a6a7a] leading-relaxed mb-8 max-w-xl mx-auto">
            Raccontami da dove parti. Ti aiuto a capire cosa ha senso costruire, con quale priorità e con quale livello di complessità.
          </p>
          <a
            href="/#contatti"
            class="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-sm font-semibold text-white transition-all duration-200 hover:opacity-85"
            style="background: linear-gradient(135deg, #3b82f6, #8b5cf6);"
          >
            Scrivimi per parlare del progetto
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <p class="text-[#4a4a5a] text-sm mt-5">
            Niente promesse esagerate. Prima capiamo il problema, poi decidiamo la soluzione.
          </p>
        </div>
      </div>
    </section>

  </main>
</template>
