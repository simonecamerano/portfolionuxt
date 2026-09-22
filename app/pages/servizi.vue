<script setup lang="ts">
import { services } from '~/data/services'

useSeoMeta({
  title: 'Soluzioni AI e automazioni per PMI - Simone Camerano',
  description: 'Workflow AI, automazioni, assistenti su documenti e strumenti digitali su misura per PMI, professionisti e piccoli team.',
  ogTitle: 'Soluzioni AI e automazioni per PMI - Simone Camerano',
  ogDescription: 'Integro AI e automazioni nei processi reali, con controllo umano e strumenti adatti al lavoro del team.',
  ogType: 'website',
})

const whenCards = [
  {
    title: 'Il team ripete attività a basso valore',
    desc: 'Dati da copiare, report da preparare, controlli ricorrenti e informazioni da spostare tra strumenti diversi.',
  },
  {
    title: 'Gli strumenti non comunicano tra loro',
    desc: 'Email, fogli, documenti e gestionali contengono parti dello stesso processo, ma manca un flusso che li colleghi.',
  },
  {
    title: 'Le informazioni sono difficili da trovare',
    desc: 'Procedure, cataloghi, FAQ e materiali interni sono dispersi e il team perde tempo a cercare la risposta corretta.',
  },
  {
    title: 'Vuoi usare l’AI senza perdere il controllo',
    desc: 'Cerchi un sistema con compiti precisi, fonti verificabili e approvazioni umane, non una scatola nera che decide da sola.',
  },
  {
    title: 'Excel non basta più',
    desc: 'Il processo è cresciuto e ora servono un’interfaccia, dati centralizzati o uno strumento interno costruito sul lavoro reale.',
  },
  {
    title: 'Vuoi capire dove l’AI serve davvero',
    desc: 'Prima di investire vuoi distinguere le opportunità concrete dalle automazioni fragili o inutilmente complesse.',
  },
  {
    title: 'Hai un’idea da trasformare in un sistema',
    desc: 'Ti serve qualcuno che traduca il processo in architettura, priorità e un primo prodotto funzionante.',
  },
]

const steps = [
  { num: '01', label: 'Capire prima di costruire', desc: 'Prima di parlare di stack, framework o AI, cerco di capire il problema: cosa non funziona oggi, chi userà lo strumento, quali vincoli ci sono.' },
  { num: '02', label: 'Soluzioni semplici da usare', desc: "Un sito, una web app o un'automazione devono essere comprensibili anche fuori dalla fase di sviluppo. Potente ma inutilizzato non risolve niente." },
  { num: '03', label: 'Tecnologia proporzionata', desc: "Non tutto richiede AI. Scelgo la soluzione più adatta: a volte è un redesign, a volte una dashboard, a volte un workflow automatizzato." },
  { num: '04', label: 'Controllo e manutenzione', desc: "Costruisco sistemi chiari, documentati e mantenibili. Soprattutto con l'AI, servono confini, controlli e passaggi verificabili." },
]

const linkedProjects = [
  { title: 'PII Guard IT', service: 'Workflow AI sicuri', desc: 'Estensione che intercetta e protegge dati personali prima che vengano inviati agli strumenti AI.', slug: 'pii-guard-it' },
  { title: 'IncluDO Guide', service: 'Assistenti AI e knowledge base', desc: 'Web app che rende più semplice consultare una knowledge base e ricevere risposte contestuali su contenuti strutturati.', slug: 'includo-guide' },
  { title: 'Italy Job Hunter', service: 'Automazioni e workflow AI', desc: 'Automazione che cerca, filtra e organizza opportunità, trasformando un controllo manuale ripetitivo in un report già pronto da valutare.', slug: 'italy-job-hunter' },
  { title: 'ContextForge', service: 'Strumenti AI su misura', desc: 'Strumento per organizzare il contesto di una codebase e rendere più ordinato il lavoro tra documentazione, codice e assistenti AI.', slug: 'contextforge' },
  { title: 'AI Control Tower', service: 'Controllo dei workflow', desc: 'Dashboard per tenere sotto controllo strumenti, provider e workflow AI da un\'unica interfaccia.', slug: 'ai-control-tower' },
]

const faqs = [
  {
    q: 'Da dove si parte se non ho un progetto definito?',
    a: "Puoi arrivare con un problema operativo, un sito da aggiornare o l'idea che qualcosa non funziona. La prima conversazione serve proprio a capire cosa ha senso fare e in quale ordine.",
  },
  {
    q: 'Lavori anche su web app e siti?',
    a: 'Sì. Le competenze full stack servono spesso a costruire l’interfaccia e il backend del workflow. Siti e redesign restano disponibili come servizio secondario.',
  },
  {
    q: 'Puoi lavorare su un progetto piccolo?',
    a: 'Sì. Preferisco partire da un MVP o da una soluzione concreta, misurare il valore e poi decidere se renderla più solida o espanderla.',
  },
  {
    q: 'Quanto tempo richiede un progetto tipico?',
    a: "Dipende dal tipo di lavoro. Un sito vetrina può essere pronto in pochi giorni. Una web app o un workflow AI richiedono più iterazioni. Lo definiamo insieme prima di iniziare.",
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
            style="background: rgba(196,181,253,0.1); border: 1px solid rgba(196,181,253,0.25); color: #e4c9ff;"
          >
            Servizi
          </span>
          <h1 class="text-5xl md:text-6xl font-extrabold text-[#f0f0f5] leading-[1.05] tracking-tight max-w-4xl">
            AI e automazioni nei<br>
            <span class="text-gradient-cyan">processi reali.</span>
          </h1>
          <p class="text-[#6a6a7a] text-lg leading-relaxed mt-6 max-w-2xl">
            Analizzo il lavoro quotidiano, individuo dove l’AI può creare valore e costruisco il sistema necessario per usarla in modo semplice, verificabile e controllabile.
          </p>
          <div class="flex flex-wrap gap-4 mt-8">
            <a
              href="/#contatti"
              class="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-semibold text-white transition-all duration-200 hover:opacity-85"
              style="background: linear-gradient(135deg, #d8b4fe, #b69cff);"
            >
              Analizziamo il tuo processo
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
          <p class="text-[#8a8a9a] text-sm mt-5">
            Per PMI, professionisti e piccoli team che vogliono risultati concreti e persone sempre al controllo.
          </p>
        </div>
      </div>
    </section>

    <!-- ── Section 2: Quando posso aiutarti ──────────────────────── -->
    <section class="py-24 px-6">
      <div
        class="max-w-6xl mx-auto mb-20 h-px"
        style="background: linear-gradient(90deg, transparent, rgba(196,181,253,0.3), transparent);"
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
            style="background: rgba(196,181,253,0.1); border: 1px solid rgba(196,181,253,0.25); color: #d8b4fe;"
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
            v-motion="cardMotion(i * 0.09)"
            class="glass rounded-2xl p-6"
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
        style="background: linear-gradient(90deg, transparent, rgba(196,181,253,0.3), transparent);"
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
            style="background: rgba(196,181,253,0.1); border: 1px solid rgba(196,181,253,0.25); color: #e4c9ff;"
          >
            Servizi
          </span>
          <h2 class="text-4xl md:text-5xl font-extrabold text-[#f0f0f5] tracking-tight leading-[1.1]">
            Soluzioni principali e <span class="text-gradient-cyan">capacità abilitanti.</span>
          </h2>
          <p class="text-[#6a6a7a] leading-relaxed mt-6 max-w-2xl">
            Si può partire da un audit, un prototipo o un singolo flusso. L’obiettivo è validare il valore e poi costruire ciò che serve davvero.
          </p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(service, i) in services"
            :key="service.num"
            v-motion="cardMotion(i * 0.09)"
            class="rounded-2xl p-7 flex flex-col"
            :class="service.level === 'secondary' ? 'border border-dashed border-white/10 bg-white/[0.015] opacity-80' : 'border border-violet-300/20 bg-[#0a1521]/70'"
          >
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs font-mono font-bold text-violet-300" aria-hidden="true">{{ service.num }}</span>
              <span class="px-2 py-1 rounded text-[8px] font-mono tracking-widest text-[#64748b] border border-white/[0.07]">
                {{ service.level === 'primary' ? 'AI CORE' : service.level === 'enabling' ? 'FULL STACK' : 'SECONDARIO' }}
              </span>
            </div>
            <h3 class="text-[#f0f0f5] font-bold text-lg mb-2">{{ service.title }}</h3>
            <p class="text-[#6a6a7a] text-sm leading-relaxed mb-4">{{ service.desc }}</p>
            <p class="text-xs text-[#8a8a9a] uppercase tracking-widest mb-2">Utile se</p>
            <ul class="text-[#6a6a7a] text-sm mb-4 flex flex-col gap-1">
              <li v-for="item in service.utile_se" :key="item" class="flex gap-2">
                <span class="text-violet-300 flex-shrink-0" aria-hidden="true">•</span>
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
                style="background: linear-gradient(135deg, #d8b4fe, #b69cff); -webkit-background-clip: text; -webkit-text-fill-color: transparent;"
              >
                Parliamo di questo
                <svg class="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="#b69cff" viewBox="0 0 24 24" aria-hidden="true">
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
        style="background: linear-gradient(90deg, transparent, rgba(139,233,255,0.25), transparent);"
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
            style="background: rgba(139,233,255,0.07); border: 1px solid rgba(139,233,255,0.2); color: #b9f3ff;"
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
        style="background: linear-gradient(90deg, transparent, rgba(196,181,253,0.3), transparent);"
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
            style="background: rgba(196,181,253,0.1); border: 1px solid rgba(196,181,253,0.25); color: #d8b4fe;"
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
            v-motion="cardMotion(i * 0.09)"
            class="glass rounded-2xl p-6 flex flex-col"
            style="border-color: rgba(255,255,255,0.08);"
          >
            <span
              class="inline-block px-2.5 py-1 rounded-lg text-xs font-semibold mb-4 self-start"
              style="background: rgba(196,181,253,0.1); border: 1px solid rgba(196,181,253,0.25); color: #d8b4fe;"
            >
              {{ project.service }}
            </span>
            <h3 class="text-[#f0f0f5] font-bold text-lg mb-2">{{ project.title }}</h3>
            <p class="text-[#6a6a7a] text-sm leading-relaxed mb-4 flex-grow">{{ project.desc }}</p>
            <NuxtLink
              :to="`/progetti/${project.slug}`"
              class="inline-flex items-center gap-1 text-sm font-semibold mt-auto transition-opacity duration-200 hover:opacity-75"
              style="background: linear-gradient(135deg, #d8b4fe, #b69cff); -webkit-background-clip: text; -webkit-text-fill-color: transparent;"
            >
              Vedi case study
              <svg class="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="#b69cff" viewBox="0 0 24 24" aria-hidden="true">
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
        style="background: linear-gradient(90deg, transparent, rgba(196,181,253,0.3), transparent);"
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
            style="background: rgba(196,181,253,0.1); border: 1px solid rgba(196,181,253,0.25); color: #e4c9ff;"
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
        style="background: linear-gradient(90deg, transparent, rgba(196,181,253,0.3), transparent);"
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
          style="border-color: rgba(196,181,253,0.2); background: rgba(196,181,253,0.04);"
        >
          <span
            class="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.12em] mb-6"
            style="background: rgba(196,181,253,0.1); border: 1px solid rgba(196,181,253,0.25); color: #e4c9ff;"
          >
            Parliamo
          </span>
          <h2 class="text-3xl md:text-4xl font-extrabold text-[#f0f0f5] tracking-tight leading-[1.1] mb-6">
            Quale processo oggi fa perdere tempo al tuo <span class="text-gradient-cyan">team?</span>
          </h2>
          <p class="text-[#6a6a7a] leading-relaxed mb-8 max-w-xl mx-auto">
            Raccontami il punto in cui il lavoro si blocca o si ripete. Ti aiuto a capire se un workflow AI, un’automazione o uno strumento su misura può risolverlo.
          </p>
          <a
            href="/#contatti"
            class="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-sm font-semibold text-white transition-all duration-200 hover:opacity-85"
            style="background: linear-gradient(135deg, #d8b4fe, #b69cff);"
          >
            Raccontami il processo
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <p class="text-[#8a8a9a] text-sm mt-5">
            Niente promesse esagerate. Prima capiamo il problema, poi decidiamo la soluzione.
          </p>
        </div>
      </div>
    </section>

  </main>
</template>
