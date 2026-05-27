<script setup lang="ts">
import { stats } from '~/data/stats'
import { technologies } from '~/data/technologies'

useSeoMeta({
  title: 'Chi sono — Simone Camerano',
  description:
    'Scopri il percorso, il metodo di lavoro e lo stack tecnico di Simone Camerano, web developer specializzato in Vue, Nuxt e TypeScript.',
  ogTitle: 'Chi sono — Simone Camerano',
  ogDescription:
    'Percorso, competenze e approccio al lavoro di Simone Camerano, web developer.',
})

const storyParagraphs = [
  'Progetto e costruisco sistemi AI-nativo, pipeline di automazione, workflow multi-agente e prodotti full stack che risolvono problemi di business reali.',
  'Prima di scrivere codice, ho trascorso 26 anni nella macchina operativa e commerciale della grande distribuzione italiana: gestione team, processi, responsabilità operative su larga scala. Quel background non è una nota a piè di pagina. È il motivo per cui capisco i problemi di business prima di iniziare a progettare le soluzioni.',
  'Cosa costruisco: pipeline AI multi-modello (ricerca web, triage, analisi, delivery), sistemi RAG con vector store custom e session persistence, orchestrazione multi-agente con human approval gates, prodotti web full stack: Vue/Nuxt, Node.js, TypeScript, MongoDB.',
  'Uso l\'AI come infrastruttura, non come feature. L\'obiettivo è sempre sistemi che funzionano in modo affidabile, non demo che impressionano una volta sola. Aperto a collaborazioni freelance con founder, startup e team tecnici che hanno bisogno di sistemi AI costruiti bene.',
]

const timeline = [
  {
    title: 'Oltre vent\'anni nella GDO',
    period: '1999 - oggi',
    text: 'Ruoli operativi, responsabilità di reparto, gestione fornitori, formazione e attenzione quotidiana al cliente.',
  },
  {
    title: 'Primi passi nello sviluppo',
    period: 'Studio autonomo',
    text: 'Python, Django, Linux, tutorial, prove pratiche e piccoli deploy: il punto in cui la curiosità è diventata metodo.',
  },
  {
    title: 'Percorso Full-Stack',
    period: 'start2impact',
    text: 'Un percorso strutturato per consolidare frontend, backend, workflow moderno e sviluppo di progetti completi.',
  },
]

const principles = [
  {
    title: 'Qualità non negoziabile',
    text: 'Preferisco dedicare il giusto tempo a fare bene una cosa invece di consegnare soluzioni fragili da sistemare dopo.',
  },
  {
    title: 'Utenti reali, non condizioni ideali',
    text: 'Ogni bottone, form e interazione deve funzionare per persone vere, su dispositivi reali, in contesti non sempre perfetti.',
  },
  {
    title: 'Il team conta',
    text: 'Il lavoro migliore nasce quando sviluppatori, designer e stakeholder comunicano presto, chiaramente e senza egoismi.',
  },
  {
    title: 'Apprendimento continuo',
    text: 'La tecnologia cambia velocemente: restare curioso, leggere documentazione e ammettere ciò che non si sa fa parte del mestiere.',
  },
]

const skillGroups = [
  {
    title: 'Frontend',
    text: 'Interfacce responsive, accessibili e curate, con attenzione a struttura, micro-interazioni e performance.',
    items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Vue', 'Nuxt', 'Vite', 'React', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    text: 'Basi server solide per alimentare applicazioni dinamiche e gestire dati, autenticazione e logica applicativa.',
    items: ['Node.js', 'Python', 'Django', 'API', 'Authentication'],
  },
  {
    title: 'Workflow',
    text: 'Strumenti e abitudini per lavorare in modo ordinato, versionare il codice e mantenere il progetto leggibile.',
    items: ['Git', 'GitHub', 'VS Code', 'GNU/Linux', 'Deploy'],
  },
  {
    title: 'Soft skills',
    text: 'Competenze maturate anche fuori dal codice: problem solving, comunicazione, gestione del tempo e attenzione al cliente.',
    items: ['Problem solving', 'Collaborazione', 'Comunicazione', 'Customer care'],
  },
]

const hobbies = [
  {
    title: 'Side project',
    text: 'Esperimenti, idee da provare e piccoli strumenti personali: il modo migliore per imparare resta costruire.',
  },
  {
    title: 'Gaming e simulazione',
    text: 'RPG, strategici, indie e soprattutto simulazione di volo. Anche qui finisco spesso ad analizzare UI, flussi e dettagli tecnici.',
  },
  {
    title: 'Musica',
    text: 'Jazz in cuffia mentre programmo, basso, chitarra e strumenti suonati con più entusiasmo che perfezione.',
  },
  {
    title: 'Aria aperta',
    text: 'Camminare aiuta a rimettere ordine nelle idee. Spesso le soluzioni migliori arrivano lontano dallo schermo.',
  },
]
</script>

<template>
  <main class="min-h-screen pt-28 pb-28 px-6">
    <div class="max-w-6xl mx-auto">
      <NuxtLink
        to="/"
        class="inline-flex items-center gap-2 text-sm text-[#8a8a9a] hover:text-white transition-colors group mb-12"
      >
        <svg class="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
        </svg>
        Torna alla home
      </NuxtLink>

      <section class="grid lg:grid-cols-[1fr_380px] gap-12 lg:gap-18 items-center">
        <div
          v-motion
          :initial="{ opacity: 0, y: 28 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6, ease: 'easeOut' }"
          class="motion-preload"
        >
          <span
            class="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.12em] mb-5"
            style="background: rgba(139,92,246,0.1); border: 1px solid rgba(139,92,246,0.25); color: #c4b5fd;"
          >
            Chi sono
          </span>
          <h1 class="text-5xl md:text-6xl font-extrabold text-[#f0f0f5] leading-[1.05] tracking-tight max-w-3xl">
            Reinventarsi. Non è tardi se sai
            <span class="text-gradient"> dove vuoi arrivare.</span>
          </h1>
          <p class="text-[#8a8a9a] text-lg leading-relaxed mt-6 max-w-2xl">
            Credo nel valore della curiosità, della perseveranza e nella forza di costruire
            nuove competenze. Il mio percorso unisce esperienza sul campo, attenzione alle
            persone e passione per lo sviluppo web.
          </p>
        </div>

        <div
          v-motion
          :initial="{ opacity: 0, x: 24 }"
          :animate="{ opacity: 1, x: 0 }"
          :transition="{ duration: 0.65, delay: 0.1, ease: 'easeOut' }"
          class="motion-preload relative"
          aria-hidden="true"
        >
          <div
            class="absolute -inset-5 rounded-[2rem] blur-3xl opacity-25"
            style="background: linear-gradient(135deg, #3b82f6, #8b5cf6);"
          />
          <div class="relative rounded-3xl overflow-hidden" style="border: 1px solid rgba(255,255,255,0.12);">
            <img
              src="/images/simone_camerano.png"
              alt=""
              class="w-full block"
              style="aspect-ratio: 3/4; object-fit: cover; object-position: center top;"
              width="380"
              height="507"
            />
          </div>
        </div>
      </section>

      <section class="grid sm:grid-cols-3 gap-4 mt-16">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="glass rounded-2xl p-6"
          style="border-color: rgba(255,255,255,0.08);"
        >
          <div class="text-4xl font-extrabold text-gradient leading-none mb-3">
            {{ stat.value }}{{ stat.suffix }}
          </div>
          <p class="text-sm text-[#8a8a9a]">{{ stat.label }}</p>
        </div>
      </section>

      <div
        class="my-20 h-px"
        style="background: linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent);"
        aria-hidden="true"
      />

      <section class="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-20 items-start">
        <div>
          <span class="text-sm font-semibold text-gradient">La mia storia</span>
          <h2 class="text-3xl md:text-4xl font-extrabold text-[#f0f0f5] leading-tight tracking-tight mt-3">
            Come sono arrivato allo sviluppo web.
          </h2>
        </div>
        <div class="flex flex-col gap-5 text-[#8a8a9a] leading-relaxed">
          <p v-for="paragraph in storyParagraphs" :key="paragraph">
            {{ paragraph }}
          </p>
        </div>
      </section>

      <section class="grid lg:grid-cols-2 gap-12 lg:gap-20 mt-24">
        <div>
          <span class="text-sm font-semibold text-gradient">Percorso</span>
          <h2 class="text-3xl md:text-4xl font-extrabold text-[#f0f0f5] tracking-tight mt-3 mb-8">
            Il mio percorso
          </h2>
          <div class="flex flex-col gap-5">
            <div
              v-for="item in timeline"
              :key="item.title"
              class="glass rounded-2xl p-5"
              style="border-color: rgba(255,255,255,0.08);"
            >
              <p class="text-xs font-semibold uppercase tracking-[0.12em] text-[#6a6a7a] mb-2">{{ item.period }}</p>
              <h3 class="font-bold text-[#f0f0f5] mb-2">{{ item.title }}</h3>
              <p class="text-sm text-[#8a8a9a] leading-relaxed">{{ item.text }}</p>
            </div>
          </div>
        </div>

        <div>
          <span class="text-sm font-semibold text-gradient">Filosofia</span>
          <h2 class="text-3xl md:text-4xl font-extrabold text-[#f0f0f5] tracking-tight mt-3 mb-8">
            Come lavoro
          </h2>
          <div class="grid gap-4">
            <div
              v-for="(principle, index) in principles"
              :key="principle.title"
              class="flex gap-4 rounded-2xl p-5"
              style="background: rgba(255,255,255,0.035); border: 1px solid rgba(255,255,255,0.08);"
            >
              <span class="text-sm font-black text-gradient">0{{ index + 1 }}</span>
              <div>
                <h3 class="font-bold text-[#f0f0f5] mb-2">{{ principle.title }}</h3>
                <p class="text-[#8a8a9a] leading-relaxed">{{ principle.text }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="mt-24">
        <div class="mb-8">
          <span class="text-sm font-semibold text-gradient">Stack</span>
          <h2 class="text-3xl md:text-4xl font-extrabold text-[#f0f0f5] tracking-tight mt-3">
            Tecnologie che uso
          </h2>
        </div>
        <div class="grid sm:grid-cols-2 gap-5 mb-10">
          <div
            v-for="group in skillGroups"
            :key="group.title"
            class="glass rounded-2xl p-6"
            style="border-color: rgba(255,255,255,0.08);"
          >
            <h3 class="font-bold text-[#f0f0f5] mb-3">{{ group.title }}</h3>
            <p class="text-sm text-[#8a8a9a] leading-relaxed mb-5">{{ group.text }}</p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="item in group.items"
                :key="item"
                class="px-3 py-1.5 rounded-xl text-xs font-medium"
                style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08); color: #d0d0e0;"
              >
                {{ item }}
              </span>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div
            v-for="tech in technologies"
            :key="tech.name"
            class="rounded-2xl p-5 flex flex-col gap-3"
            :style="{ background: tech.bgColor, border: `1px solid ${tech.borderColor}` }"
          >
            <div class="text-lg font-black tracking-tight font-mono" :style="{ color: tech.color }">
              {{ tech.abbr }}
            </div>
            <span class="text-sm font-semibold text-[#d0d0e0]">{{ tech.name }}</span>
          </div>
        </div>
      </section>

      <section class="mt-24">
        <div class="mb-8">
          <span class="text-sm font-semibold text-gradient">Oltre il codice</span>
          <h2 class="text-3xl md:text-4xl font-extrabold text-[#f0f0f5] tracking-tight mt-3">
            Interessi e vita fuori da VS Code
          </h2>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div
            v-for="hobby in hobbies"
            :key="hobby.title"
            class="rounded-2xl p-5"
            style="background: rgba(255,255,255,0.035); border: 1px solid rgba(255,255,255,0.08);"
          >
            <h3 class="font-bold text-[#f0f0f5] mb-3">{{ hobby.title }}</h3>
            <p class="text-sm text-[#8a8a9a] leading-relaxed">{{ hobby.text }}</p>
          </div>
        </div>
      </section>

      <section
        class="mt-24 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
        style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);"
      >
        <div>
          <h2 class="text-2xl md:text-3xl font-extrabold text-[#f0f0f5] tracking-tight">
            Vuoi vedere cosa ho costruito?
          </h2>
          <p class="text-[#8a8a9a] mt-2">
            Dai un'occhiata ai progetti oppure scrivimi per parlare di una collaborazione.
          </p>
        </div>
        <div class="flex flex-wrap gap-3">
          <NuxtLink
            to="/progetti"
            class="inline-flex items-center px-6 py-3 rounded-2xl text-sm font-semibold text-white transition-all duration-200 hover:opacity-85"
            style="background: linear-gradient(135deg, #3b82f6, #8b5cf6);"
          >
            Progetti
          </NuxtLink>
          <NuxtLink
            to="/#contatti"
            class="inline-flex items-center px-6 py-3 rounded-2xl text-sm font-semibold text-[#d0d0e0] border transition-all duration-200 hover:bg-white/[0.06] hover:text-white"
            style="border-color: rgba(255,255,255,0.14);"
          >
            Contatti
          </NuxtLink>
        </div>
      </section>
    </div>
  </main>
</template>
