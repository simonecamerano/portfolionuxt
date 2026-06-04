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
          Posso aiutarti se vuoi trasformare un processo ripetitivo in <span class="text-gradient">un sistema intelligente.</span>
        </h2>
        <p class="text-[#6a6a7a] leading-relaxed mt-6 max-w-2xl mx-auto">
          Molti processi non hanno bisogno di più riunioni, più file Excel o più notifiche. Hanno bisogno di essere osservati, filtrati, automatizzati e resi azionabili.
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
