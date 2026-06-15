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
    body: "Vuoi costruire un prodotto digitale, ma ti serve qualcuno che traduca l'idea in architettura, priorità e primo prototipo funzionante.",
  },
]
</script>

<template>
  <section id="can-help" class="py-28 px-6" aria-label="Posso aiutarti se">

    <div
      class="max-w-6xl mx-auto mb-20 h-px"
      style="background: linear-gradient(90deg, transparent, rgba(59,130,246,0.3), transparent);"
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
          style="background: rgba(139,92,246,0.1); border: 1px solid rgba(139,92,246,0.25); color: #c4b5fd;"
        >
          Posso aiutarti se
        </span>
        <h2 class="text-4xl md:text-5xl font-extrabold text-[#f0f0f5] tracking-tight max-w-3xl mx-auto leading-[1.1]">
          Posso aiutarti se hai <span class="text-gradient">un problema concreto da risolvere.</span>
        </h2>
        <p class="text-[#6a6a7a] leading-relaxed mt-6 max-w-2xl mx-auto">
          Non serve sempre "rivoluzionare" niente. Serve mettere ordine, scegliere le priorità e costruire uno strumento che faccia bene il suo lavoro.
        </p>
      </div>

      <!-- Cards grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(card, i) in cards"
          :key="card.title"
          v-motion="{ initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, inViewOptions: { once: true }, transition: { duration: 0.45, delay: i * 0.08, ease: 'easeOut' as const } }"
          class="glass card-hover rounded-2xl p-6"
          style="border-color: rgba(255,255,255,0.08);"
        >
          <h3 class="text-[#d0d0e0] font-semibold text-base mb-2">{{ card.title }}</h3>
          <p class="text-[#6a6a7a] text-sm leading-relaxed">{{ card.body }}</p>
        </div>
      </div>

    </div>
  </section>
</template>
