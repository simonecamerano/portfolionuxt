<script setup lang="ts">
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
</script>

<template>
  <section id="metodo" aria-label="Metodo di lavoro" class="py-28 px-6">
    <div
      class="max-w-6xl mx-auto mb-20 h-px"
      style="background: linear-gradient(90deg, transparent, rgba(139,92,246,0.3), transparent);"
      aria-hidden="true"
    />

    <div class="max-w-6xl mx-auto">

      <!-- ── Header ──────────────────────────────────────────────── -->
      <div
        v-motion="{
          initial: { opacity: 0, y: 28 },
          whileInView: { opacity: 1, y: 0 },
          inViewOptions: { once: true },
          transition: { duration: 0.6, delay: 0, ease: 'easeOut' as const },
        }"
        class="text-center"
      >
        <span
          class="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.12em]"
          style="background: rgba(139,92,246,0.1); border: 1px solid rgba(139,92,246,0.25); color: #c4b5fd;"
        >
          Metodo
        </span>
        <h2 class="text-4xl md:text-5xl font-extrabold text-[#f0f0f5] tracking-tight text-center mt-5 mb-16">
          Il mio metodo: capire il processo, poi costruire il sistema.
        </h2>
      </div>

      <!-- ── Steps grid ──────────────────────────────────────────── -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(step, i) in steps"
          :key="step.num"
          v-motion="{
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            inViewOptions: { once: true },
            transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' as const },
          }"
          class="glass rounded-2xl p-6"
          style="border-color: rgba(255,255,255,0.08);"
        >
          <div class="text-gradient text-5xl font-black leading-none mb-4">
            {{ step.num }}
          </div>
          <div class="text-[#d0d0e0] font-semibold text-base mb-2">
            {{ step.label }}
          </div>
          <p class="text-[#6a6a7a] text-sm leading-relaxed">
            {{ step.desc }}
          </p>
        </div>
      </div>

      <!-- ── Closing quote ───────────────────────────────────────── -->
      <div
        v-motion="{
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          inViewOptions: { once: true },
          transition: { duration: 0.5, delay: 0.5, ease: 'easeOut' as const },
        }"
        class="text-center mt-14 max-w-2xl mx-auto"
      >
        <p class="text-[#6a6a7a] text-lg leading-relaxed italic">
          "L'obiettivo non è mettere AI ovunque, ma costruire sistemi piccoli, chiari e controllabili che producano valore misurabile."
        </p>
      </div>

    </div>
  </section>
</template>
