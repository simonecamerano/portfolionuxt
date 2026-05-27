<script setup lang="ts">
import { stats } from '~/data/stats'

const scrollIn = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  inViewOptions: { once: true },
  transition: { duration: 0.6, delay, ease: 'easeOut' as const },
})
</script>

<template>
  <section id="about" class="py-28 px-6">
    <div
      class="max-w-6xl mx-auto mb-20 h-px"
      style="background: linear-gradient(90deg, transparent, rgba(139,92,246,0.3), transparent);"
      aria-hidden="true"
    />

    <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 lg:gap-24 items-center">

      <!-- ── Left ─────────────────────────────────────────────── -->
      <div class="flex flex-col gap-8">
        <div v-motion="scrollIn(0)">
          <span
            class="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.12em] mb-5"
            style="background: rgba(139,92,246,0.1); border: 1px solid rgba(139,92,246,0.25); color: #c4b5fd;"
          >
            Chi sono
          </span>
          <h2 class="text-4xl md:text-5xl font-extrabold text-[#f0f0f5] leading-[1.1] tracking-tight">
            Codice pulito.<br />
            Design curato.<br />
            <span class="text-gradient">Risultati concreti.</span>
          </h2>
        </div>

        <div v-motion="scrollIn(0.1)" class="flex flex-col gap-4">
          <p class="text-[#6a6a7a] leading-relaxed text-lg">
            Progetto e costruisco sistemi AI-native: pipeline di automazione, workflow multi-agente e prodotti full stack che risolvono problemi di business reali.
          </p>
          <p class="text-[#6a6a7a] leading-relaxed text-lg">
            Prima di scrivere codice, ho trascorso 26 anni nella macchina operativa e commerciale della grande distribuzione italiana. Quel background non è una nota a piè di pagina: è il motivo per cui capisco i problemi prima di iniziare a progettare le soluzioni.
          </p>
          <NuxtLink
            to="/about"
            class="inline-flex items-center gap-2 w-fit mt-2 text-sm font-semibold text-gradient hover:opacity-75 transition-opacity"
          >
            Leggi la storia completa
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </NuxtLink>
        </div>

        <!-- Stats with stagger -->
        <div class="grid grid-cols-3 gap-4">
          <div
            v-for="(stat, i) in stats"
            :key="stat.label"
            v-motion="{ initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, inViewOptions: { once: true }, transition: { duration: 0.5, delay: 0.15 + i * 0.08, ease: 'easeOut' as const } }"
            class="glass rounded-2xl p-5 text-center"
            style="border-color: rgba(255,255,255,0.08);"
          >
            <div class="text-3xl font-extrabold text-gradient leading-none mb-2">
              {{ stat.value }}{{ stat.suffix }}
            </div>
            <div class="text-xs text-[#6a6a7a] leading-tight">{{ stat.label }}</div>
          </div>
        </div>
      </div>

      <!-- ── Right: profile photo ──────────────────────────────── -->
      <div
        v-motion="{ initial: { opacity: 0, x: 24 }, whileInView: { opacity: 1, x: 0 }, inViewOptions: { once: true }, transition: { duration: 0.65, delay: 0.1, ease: 'easeOut' as const } }"
        class="relative flex justify-center md:justify-end"
      >
        <div class="relative">
          <div
            class="absolute -inset-6 rounded-[2.5rem] blur-3xl opacity-30"
            style="background: linear-gradient(135deg, #3b82f6, #8b5cf6);"
            aria-hidden="true"
          />
          <div
            class="relative rounded-3xl overflow-hidden w-full max-w-[400px]"
            style="border: 1px solid rgba(255,255,255,0.12);"
          >
            <img
              src="/images/simone_camerano.png"
              alt="Simone Camerano — Web Developer"
              class="w-full block"
              style="aspect-ratio: 3/4; object-fit: cover; object-position: center top;"
              width="400"
              height="533"
            />
            <div
              class="absolute bottom-0 left-0 right-0 px-5 py-4 flex items-center justify-between"
              style="background: rgba(10,10,15,0.75); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border-top: 1px solid rgba(255,255,255,0.08);"
            >
              <div>
                <p class="font-bold text-[#f0f0f5] text-sm leading-tight">Simone Camerano</p>
                <p class="text-xs text-gradient font-semibold mt-0.5">Web Developer</p>
              </div>
              <div
                class="flex items-center gap-1.5 px-3 py-1.5 rounded-full"
                style="background: rgba(74,222,128,0.1); border: 1px solid rgba(74,222,128,0.25);"
              >
                <span class="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" style="box-shadow: 0 0 5px rgba(74,222,128,0.9);" aria-hidden="true" />
                <span class="text-[11px] font-semibold text-green-400/90 whitespace-nowrap">Open to work</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
