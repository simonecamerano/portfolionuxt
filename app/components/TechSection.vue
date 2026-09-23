<script setup lang="ts">
import { technologies } from '~/data/technologies'
</script>

<template>
  <section id="tecnologie" class="py-28 px-6">
    <div class="max-w-6xl mx-auto">

      <div
        v-motion="{ initial: { opacity: 0, y: 28 }, whileInView: { opacity: 1, y: 0 }, inViewOptions: { once: true }, transition: { duration: 0.6, ease: 'easeOut' as const } }"
        class="text-center mb-16"
      >
        <span
          class="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.12em] mb-5"
          style="background: rgba(196, 181, 253, 0.1); border: 1px solid rgba(196, 181, 253, 0.25); color: #c4b5fd;"
        >
          Capacità tecnica
        </span>
        <h2 class="text-4xl md:text-5xl font-extrabold text-[#f0f0f5] tracking-tight">
          Costruisco l’intero <span class="text-gradient-cyan">sistema.</span>
        </h2>
        <p class="text-[#828293] mt-4 max-w-md mx-auto">
          Interfacce, backend, dati, integrazioni e modelli AI. Le tecnologie sono il mezzo per portare un flusso di lavoro dal prototipo all’uso quotidiano.
        </p>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div
          v-for="(tech, i) in technologies"
          :key="tech.name"
          v-motion="cardMotion(i * 0.07)"
          class="rounded-2xl p-6 flex flex-col items-center gap-3 text-center cursor-default"
          :style="{ background: tech.bgColor, border: `1px solid ${tech.borderColor}` }"
        >
          <div class="text-lg font-black tracking-tight font-mono" :style="{ color: tech.color }">
            {{ tech.abbr }}
          </div>
          <span class="text-sm font-semibold text-[#c4b5fd]">{{ tech.name }}</span>
        </div>
      </div>

    </div>
  </section>
</template>
