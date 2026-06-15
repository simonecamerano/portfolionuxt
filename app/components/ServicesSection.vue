<script setup lang="ts">
import { services } from '~/data/services'
</script>

<template>
  <section id="servizi" class="py-28 px-6" aria-label="Servizi">
    <div class="max-w-6xl mx-auto">

      <!-- Header -->
      <div
        v-motion="{ initial: { opacity: 0, y: 28 }, whileInView: { opacity: 1, y: 0 }, inViewOptions: { once: true }, transition: { duration: 0.6, ease: 'easeOut' as const } }"
        class="text-center mb-16"
      >
        <span
          class="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.12em] mb-5"
          style="background: rgba(59,130,246,0.1); border: 1px solid rgba(59,130,246,0.25); color: #93c5fd;"
        >
          Servizi
        </span>
        <h2 class="text-4xl md:text-5xl font-extrabold text-[#f0f0f5] tracking-tight max-w-3xl mx-auto leading-[1.1]">
          Cosa posso costruire <span class="text-gradient">per te</span>
        </h2>
        <p class="text-[#6a6a7a] leading-relaxed mt-6 max-w-2xl mx-auto">
          Lavoro su progetti piccoli e medi, con un obiettivo chiaro: trasformare un bisogno reale in uno strumento digitale semplice da usare, mantenere e far crescere. Non parto dall'AI per forza. Parto da quello che ti serve.
        </p>
      </div>

      <!-- Cards grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(service, i) in services"
          :key="service.num"
          v-motion="{ initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, inViewOptions: { once: true }, transition: { duration: 0.45, delay: i * 0.09, ease: 'easeOut' as const } }"
          class="glass card-hover rounded-2xl p-6"
          style="border-color: rgba(255,255,255,0.08);"
        >
          <div
            class="text-xs font-mono font-bold mb-4"
            style="background: linear-gradient(135deg, #3b82f6, #8b5cf6); -webkit-background-clip: text; -webkit-text-fill-color: transparent;"
            aria-hidden="true"
          >
            {{ service.num }}
          </div>
          <h3 class="text-[#d0d0e0] font-semibold text-base mb-2">{{ service.title }}</h3>
          <p class="text-[#6a6a7a] text-sm leading-relaxed">{{ service.desc }}</p>
        </div>
      </div>

    </div>
  </section>
</template>
