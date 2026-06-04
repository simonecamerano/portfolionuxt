<template>
  <section
    id="hero"
    class="relative min-h-screen flex items-center overflow-hidden pt-16"
    aria-label="Introduzione"
  >
    <!-- Radial background glows -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div
        class="absolute top-1/4 -left-20 w-[700px] h-[700px] rounded-full blur-3xl animate-glow-pulse"
        style="background: radial-gradient(circle, rgba(59,130,246,0.22), transparent 70%);"
      />
      <div
        class="absolute top-1/3 right-0 w-[600px] h-[600px] rounded-full blur-3xl animate-glow-pulse"
        style="background: radial-gradient(circle, rgba(139,92,246,0.18), transparent 70%); animation-delay: 2s;"
      />
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-32 sm:py-20 grid lg:grid-cols-[minmax(0,1.15fr)_minmax(340px,0.85fr)] gap-10 lg:gap-14 items-center w-full">

      <!-- ── Left: copy ─────────────────────────────────────────── -->
      <div class="flex flex-col gap-7">
        <!-- Badge -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5, ease: 'easeOut' }"
          class="motion-preload"
        >
          <span
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
            style="background: rgba(139,92,246,0.12); border: 1px solid rgba(139,92,246,0.32); color: #c4b5fd;"
          >
            AI Workflow Engineer · Full-Stack Developer · Automation Builder
          </span>
        </div>

        <!-- Headline -->
        <h1
          v-motion
          :initial="{ opacity: 0, y: 28 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.65, delay: 0.1, ease: 'easeOut' }"
          class="motion-preload text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.1] tracking-tight text-[#f0f0f5]"
        >
          Costruisco workflow AI, <span class="text-gradient">agenti operativi</span><br class="hidden sm:block" />
          e prodotti full-stack per automatizzare processi reali.
        </h1>

        <!-- Subheadline -->
        <p
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6, delay: 0.2, ease: 'easeOut' }"
          class="motion-preload text-lg text-[#6a6a7a] leading-relaxed max-w-xl"
        >
          Dalla comprensione dei processi alla costruzione del sistema: sviluppo workflow multi-modello, strumenti AI e prodotti full-stack con un approccio pragmatico, controllabile e orientato al risultato.
        </p>

        <!-- CTAs -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 16 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.55, delay: 0.3, ease: 'easeOut' }"
          class="motion-preload flex flex-wrap gap-4"
        >
          <a
            href="#contatti"
            class="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-sm font-semibold text-white transition-all duration-200 hover:opacity-85 hover:scale-[1.02] active:scale-[0.98]"
            style="background: linear-gradient(135deg, #3b82f6, #8b5cf6);"
          >
            Parliamo del tuo workflow
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#progetti"
            class="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-sm font-semibold text-[#d0d0e0] border transition-all duration-200 hover:bg-white/[0.06] hover:text-white"
            style="border-color: rgba(255,255,255,0.14);"
          >
            Vedi i progetti
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
            </svg>
          </a>
          <p class="text-xs text-[#6a6a7a] pt-1">Disponibile per collaborazioni freelance, prototipi AI e automazioni su misura.</p>
        </div>

        <!-- Tech pills -->
        <div
          v-motion
          :initial="{ opacity: 0 }"
          :animate="{ opacity: 1 }"
          :transition="{ duration: 0.6, delay: 0.45 }"
          class="motion-preload flex flex-wrap gap-3 pt-2"
        >
          <span
            v-for="tag in ['Vue', 'Nuxt', 'Node.js', 'TypeScript', 'LLMs', 'Telegram']"
            :key="tag"
            class="px-3 py-1 rounded-full text-xs font-medium"
            style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08); color: #8a8a9a;"
          >
            {{ tag }}
          </span>
        </div>
      </div>

      <!-- ── Right: code mockup ──────────────────────────────────── -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.7, delay: 0.25, ease: 'easeOut' }"
        class="motion-preload relative flex justify-center lg:justify-end"
        aria-hidden="true"
      >
        <div class="relative w-full max-w-[420px] animate-float">
          <div
            class="absolute inset-0 rounded-3xl blur-2xl"
            style="background: linear-gradient(135deg, rgba(59,130,246,0.35), rgba(139,92,246,0.35)); transform: scale(0.88) translateY(8px);"
          />
          <div
            class="relative glass rounded-3xl overflow-hidden w-full"
            style="border-color: rgba(255,255,255,0.1);"
          >
            <div
              class="flex items-center gap-2 px-4 py-3 border-b"
              style="border-color: rgba(255,255,255,0.07); background: rgba(255,255,255,0.025);"
            >
              <span class="w-3 h-3 rounded-full" style="background: #ff5f57;" />
              <span class="w-3 h-3 rounded-full" style="background: #febc2e;" />
              <span class="w-3 h-3 rounded-full" style="background: #28c840;" />
              <div
                class="flex-1 mx-3 py-1 px-3 rounded-md text-xs text-center"
                style="background: rgba(255,255,255,0.05); color: #6a6a7a;"
              >
                simone.dev
              </div>
            </div>
            <div class="p-6 font-mono text-[13px] leading-relaxed flex flex-col gap-1">
              <div>
                <span style="color: #8b5cf6;">const</span>
                <span style="color: #c4b5fd;"> simone</span>
                <span style="color: #94a3b8;"> = </span>
                <span style="color: #34d399;">{</span>
              </div>
              <div class="pl-5 flex flex-col gap-1">
                <div><span style="color: #38bdf8;">role</span><span style="color: #94a3b8;">: </span><span style="color: #fbbf24;">"AI Workflow Engineer"</span><span style="color: #94a3b8;">,</span></div>
                <div><span style="color: #38bdf8;">builds</span><span style="color: #94a3b8;">: [</span><span style="color: #fbbf24;">"AI workflows"</span><span style="color: #94a3b8;">, </span><span style="color: #fbbf24;">"automation bots"</span><span style="color: #94a3b8;">, </span><span style="color: #fbbf24;">"full-stack products"</span><span style="color: #94a3b8;">],</span></div>
                <div><span style="color: #38bdf8;">stack</span><span style="color: #94a3b8;">: [</span><span style="color: #fbbf24;">"Node"</span><span style="color: #94a3b8;">, </span><span style="color: #fbbf24;">"Vue"</span><span style="color: #94a3b8;">, </span><span style="color: #fbbf24;">"Nuxt"</span><span style="color: #94a3b8;">, </span><span style="color: #fbbf24;">"TypeScript"</span><span style="color: #94a3b8;">, </span><span style="color: #fbbf24;">"LLMs"</span><span style="color: #94a3b8;">],</span></div>
                <div><span style="color: #38bdf8;">focus</span><span style="color: #94a3b8;">: </span><span style="color: #fbbf24;">"turning real processes into intelligent systems"</span><span style="color: #94a3b8;">,</span></div>
                <div><span style="color: #38bdf8;">availableFor</span><span style="color: #94a3b8;">: [</span><span style="color: #fbbf24;">"freelance"</span><span style="color: #94a3b8;">, </span><span style="color: #fbbf24;">"AI prototypes"</span><span style="color: #94a3b8;">, </span><span style="color: #fbbf24;">"workflow automation"</span><span style="color: #94a3b8;">],</span></div>
              </div>
              <div style="color: #34d399;">}</div>
              <div class="mt-2 flex items-center gap-1.5" style="color: #4a4a6a;">
                <span>// costruisce sistemi concreti, non chatbot</span>
                <span class="inline-block w-[2px] h-4 rounded-sm" style="background: #8b5cf6; animation: blink 1.1s step-end infinite;" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-5 sm:bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 opacity-40" aria-hidden="true">
      <span class="text-xs text-[#8a8a9a] tracking-widest uppercase">Scorri</span>
      <div class="w-px h-10 bg-gradient-to-b from-[#8a8a9a] to-transparent" />
    </div>
  </section>
</template>

<style scoped>
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
</style>
