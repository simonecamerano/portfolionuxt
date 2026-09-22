<script setup lang="ts">
const cards = [
  {
    title: 'Il team perde tempo in attività ripetitive',
    body: 'Dati da copiare, controlli ricorrenti, report da preparare e informazioni da spostare manualmente tra strumenti diversi.',
  },
  {
    title: 'Gli strumenti non comunicano tra loro',
    body: 'Email, fogli, documenti e gestionali contengono parti dello stesso processo, ma manca un flusso che li colleghi.',
  },
  {
    title: 'Le informazioni sono difficili da trovare',
    body: 'Procedure, cataloghi, FAQ e materiali interni sono dispersi e il team perde tempo a cercare la risposta corretta.',
  },
  {
    title: 'Vuoi usare l’AI senza perdere il controllo',
    body: 'Cerchi un sistema con compiti precisi, fonti verificabili e approvazioni umane, non una scatola nera che decide da sola.',
  },
  {
    title: 'Excel non basta più',
    body: 'Il processo è cresciuto e ora servono un’interfaccia, dati centralizzati o uno strumento interno costruito sul lavoro reale.',
  },
  {
    title: 'Vuoi capire dove l’AI serve davvero',
    body: 'Prima di investire vuoi distinguere le opportunità concrete dalle automazioni fragili o inutilmente complesse.',
  },
  {
    title: 'Hai un’idea da trasformare in un sistema',
    body: 'Ti serve qualcuno che traduca il processo in architettura, priorità e un primo prodotto funzionante.',
  },
]
</script>

<template>
  <section id="can-help" class="py-28 px-6" aria-label="Posso aiutarti se">

    <div
      class="max-w-6xl mx-auto mb-20 h-px"
      style="background: linear-gradient(90deg, transparent, rgba(196, 181, 253, 0.3), transparent);"
      aria-hidden="true"
    />

    <div class="max-w-6xl mx-auto">

      <!-- Header -->
      <div
        v-motion="{ initial: { opacity: 0, y: 28 }, whileInView: { opacity: 1, y: 0 }, inViewOptions: { once: true }, transition: { duration: 0.6, ease: 'easeOut' as const } }"
        class="text-center mb-16"
      >
        <span
          class="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.12em] mb-5"
          style="background: rgba(139, 92, 246, 0.1); border: 1px solid rgba(139, 92, 246, 0.25); color: #c4b5fd;"
        >
          Problemi operativi
        </span>
        <h2 class="text-4xl md:text-5xl font-extrabold text-[#f0f0f5] tracking-tight max-w-3xl mx-auto leading-[1.1]">
          L’AI crea valore quando risolve <span class="text-gradient-cyan">un problema concreto.</span>
        </h2>
        <p class="text-[#6a6a7a] leading-relaxed mt-6 max-w-2xl mx-auto">
          Prima della tecnologia vengono il tempo perso, i passaggi fragili e le informazioni che non arrivano quando servono.
        </p>
      </div>

      <!-- Cards grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(card, i) in cards"
          :key="card.title"
          v-motion="cardMotion(i * 0.08)"
          class="glass rounded-2xl p-6"
          style="border-color: rgba(255,255,255,0.08);"
        >
          <h3 class="text-[#c4b5fd] font-semibold text-base mb-2">{{ card.title }}</h3>
          <p class="text-[#6a6a7a] text-sm leading-relaxed">{{ card.body }}</p>
        </div>
      </div>

    </div>
  </section>
</template>
