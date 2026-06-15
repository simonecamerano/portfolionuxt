<script setup lang="ts">
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
          Come <span class="text-gradient">lavoro</span>
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
          "Il punto di partenza non è la tecnologia. È capire cosa oggi ti fa perdere tempo, cosa non è chiaro per i tuoi clienti o dove il tuo processo si blocca."
        </p>
      </div>

    </div>
  </section>
</template>
