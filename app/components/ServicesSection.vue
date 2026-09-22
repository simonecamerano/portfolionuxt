<script setup lang="ts">
import { services } from '~/data/services'
</script>

<template>
  <section id="servizi" class="py-28 px-6" aria-label="Servizi">
    <div class="max-w-6xl mx-auto">

      <div
        v-motion="{ initial: { opacity: 0, y: 28 }, whileInView: { opacity: 1, y: 0 }, inViewOptions: { once: true }, transition: { duration: 0.6, ease: 'easeOut' as const } }"
        class="text-center mb-16"
      >
        <span class="lab-kicker mb-5"><span class="status-dot" /> Soluzioni</span>
        <h2 class="text-4xl md:text-5xl font-extrabold text-[#f0f0f5] tracking-tight max-w-3xl mx-auto leading-[1.1]">
          Dall’opportunità a un <span class="text-gradient-cyan">sistema che funziona.</span>
        </h2>
        <p class="text-[#6a6a7a] leading-relaxed mt-6 max-w-2xl mx-auto">
          Parto dal processo, scelgo dove l’AI può creare valore e costruisco solo ciò che serve per integrarla nel lavoro quotidiano.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(service, i) in services"
          :key="service.num"
          v-motion="cardMotion(i * 0.09)"
          class="service-module rounded-2xl p-6"
          :class="`service-${service.level}`"
        >
          <div class="flex items-center justify-between mb-5">
            <span class="text-xs font-mono font-bold text-violet-300">{{ service.num }}</span>
            <span class="service-level">
              {{ service.level === 'primary' ? 'AI CORE' : service.level === 'enabling' ? 'FULL STACK' : 'SECONDARIO' }}
            </span>
          </div>
          <h3 class="text-[#dce7f4] font-semibold text-base mb-2">{{ service.title }}</h3>
          <p class="text-[#768398] text-sm leading-relaxed mb-5">{{ service.desc }}</p>
          <div class="flex flex-wrap gap-1.5">
            <span
              v-for="out in service.output.slice(0, 3)"
              :key="out"
              class="px-2 py-0.5 rounded-lg text-[11px] font-medium"
              style="background: rgba(196,181,253,0.05); border: 1px solid rgba(216,180,254,0.13); color: #a49bb8;"
            >{{ out }}</span>
          </div>
        </div>
      </div>

      <div class="text-center mt-12">
        <NuxtLink to="/servizi" class="lab-button lab-button-secondary">
          Esplora tutte le soluzioni
        </NuxtLink>
      </div>

    </div>
  </section>
</template>

<style scoped>
.service-module { position:relative; overflow:hidden; border:1px solid rgba(216,180,254,.16); background:linear-gradient(145deg,rgba(35,27,57,.76),rgba(12,10,23,.92)); transition:border-color .25s ease,transform .25s ease,box-shadow .25s ease; }
.service-module:before { content:'';position:absolute;left:0;top:0;width:42%;height:1px;background:linear-gradient(90deg,#e6b4ff,transparent);opacity:.45; }
.service-module:hover { transform:translateY(-5px);border-color:rgba(216,180,254,.42);box-shadow:0 24px 55px rgba(0,0,0,.25); }
.service-secondary { opacity:.74;border-style:dashed; }.service-enabling{border-color:rgba(176,161,255,.24)}
.service-level { padding:4px 6px;border:1px solid rgba(255,255,255,.07);border-radius:5px;color:#526074;font:600 7px monospace;letter-spacing:.14em; }
</style>
