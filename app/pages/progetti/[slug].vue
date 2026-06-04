<script setup lang="ts">
import { marked } from 'marked'
import { projects } from '~/data/projects'

const route = useRoute()
const project = projects.find((p) => p.slug === route.params.slug)

if (!project) {
  throw createError({ statusCode: 404, statusMessage: 'Progetto non trovato' })
}

const currentIndex = projects.findIndex((p) => p.slug === route.params.slug)
const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null
const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null

const readmeHtml = ref('')
if (project.github) {
  const repo = project.github.replace('https://github.com/', '').replace(/\/$/, '')
  const { data } = await useFetch<{ content: string }>(`/api/readme?repo=${repo}`)
  if (data.value?.content) {
    readmeHtml.value = await marked(data.value.content)
  }
}

const { public: { siteUrl } } = useRuntimeConfig()

useSeoMeta({
  title: `${project.title} — Simone Camerano`,
  description: project.description,
  ogTitle: `${project.title} — Simone Camerano`,
  ogDescription: project.description,
  ogType: 'article',
  ogImage: `${siteUrl}${project.image}`,
  twitterImage: `${siteUrl}${project.image}`,
})
</script>

<template>
  <div class="min-h-screen pt-28 pb-28 px-6">
    <div class="max-w-6xl mx-auto">

      <!-- ── Back links ────────────────────────────────────────── -->
      <div class="flex flex-wrap items-center gap-5 mb-12">
        <NuxtLink
          to="/"
          class="inline-flex items-center gap-2 text-sm text-[#8a8a9a] hover:text-white transition-colors group"
        >
          <svg class="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          Torna alla home
        </NuxtLink>
        <NuxtLink
          to="/progetti"
          class="inline-flex items-center gap-2 text-sm text-[#8a8a9a] hover:text-white transition-colors group"
        >
          Tutti i progetti
        </NuxtLink>
      </div>

      <!-- ── Two-column header ──────────────────────────────────── -->
      <div class="grid lg:grid-cols-[420px_1fr] gap-10 lg:gap-16 items-center">

        <!-- Left: info + CTA -->
        <div class="flex flex-col gap-6">
          <!-- Badges -->
          <div class="flex items-center gap-2 flex-wrap">
            <span
              class="px-3 py-1 rounded-full text-xs font-semibold"
              style="background: rgba(139,92,246,0.12); border: 1px solid rgba(139,92,246,0.3); color: #c4b5fd;"
            >
              {{ project.category }}
            </span>
            <span v-if="project.year" class="text-xs text-[#4a4a5a]">{{ project.year }}</span>
          </div>

          <!-- Title -->
          <h1 class="text-4xl md:text-5xl font-extrabold text-[#f0f0f5] tracking-tight leading-[1.1]">
            {{ project.title }}
          </h1>

          <!-- Description -->
          <p class="text-[#6a6a7a] leading-relaxed">
            {{ project.description }}
          </p>

          <!-- Tech stack -->
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="px-3 py-1.5 rounded-xl text-xs font-medium"
              style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); color: #d0d0e0;"
            >
              {{ tag }}
            </span>
          </div>

          <!-- CTAs -->
          <div class="flex flex-wrap gap-3 pt-2">
            <a
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-semibold text-white transition-all duration-200 hover:opacity-85 hover:scale-[1.02]"
              style="background: linear-gradient(135deg, #3b82f6, #8b5cf6);"
            >
              Vedi il progetto
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <a
              v-if="project.github"
              :href="project.github"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-semibold text-[#d0d0e0] border transition-all duration-200 hover:bg-white/[0.06] hover:text-white"
              style="border-color: rgba(255,255,255,0.14);"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
          </div>
        </div>

        <!-- Right: screenshot -->
        <div class="relative">
          <div
            class="absolute -inset-4 rounded-[2rem] blur-2xl opacity-20 pointer-events-none"
            style="background: linear-gradient(135deg, #3b82f6, #8b5cf6);"
            aria-hidden="true"
          />
          <div
            class="relative rounded-3xl overflow-hidden"
            style="border: 1px solid rgba(255,255,255,0.1);"
          >
            <img
              :src="project.image"
              :alt="`Screenshot di ${project.title}`"
              class="w-full block object-cover object-top"
              style="aspect-ratio: 16/10;"
              width="800"
              height="500"
            />
          </div>
        </div>
      </div>

      <!-- ── Case Study sections ──────────────────────────── -->
      <template v-if="project.caseStudy">

        <!-- Divider -->
        <div class="mt-20 mb-16 h-px" style="background: linear-gradient(90deg, transparent, rgba(139,92,246,0.3), transparent);" aria-hidden="true" />

        <!-- Problem + Solution (two columns on lg) -->
        <div class="grid lg:grid-cols-2 gap-8 mb-12">

          <!-- Problem -->
          <div class="glass rounded-2xl p-8" style="border-color: rgba(255,255,255,0.08);">
            <span class="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-[0.1em] mb-5"
              style="background: rgba(239,68,68,0.1); border: 1px solid rgba(239,68,68,0.25); color: #fca5a5;">
              Problema
            </span>
            <h2 class="text-2xl font-extrabold text-[#f0f0f5] tracking-tight leading-tight mb-4">
              {{ project.caseStudy.problem.headline }}
            </h2>
            <p class="text-[#6a6a7a] leading-relaxed mb-5">{{ project.caseStudy.problem.text }}</p>
            <ul class="flex flex-col gap-2">
              <li
                v-for="point in project.caseStudy.problem.points"
                :key="point"
                class="flex items-start gap-2.5 text-sm text-[#6a6a7a]"
              >
                <span class="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style="background: rgba(239,68,68,0.6);" aria-hidden="true" />
                {{ point }}
              </li>
            </ul>
          </div>

          <!-- Solution -->
          <div class="glass rounded-2xl p-8" style="border-color: rgba(255,255,255,0.08);">
            <span class="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-[0.1em] mb-5"
              style="background: rgba(59,130,246,0.1); border: 1px solid rgba(59,130,246,0.25); color: #93c5fd;">
              Soluzione
            </span>
            <h2 class="text-2xl font-extrabold text-[#f0f0f5] tracking-tight leading-tight mb-4">
              {{ project.caseStudy.solution.headline }}
            </h2>
            <p class="text-[#6a6a7a] leading-relaxed mb-5">{{ project.caseStudy.solution.text }}</p>
            <ul class="flex flex-col gap-2">
              <li
                v-for="point in project.caseStudy.solution.points"
                :key="point"
                class="flex items-start gap-2.5 text-sm text-[#6a6a7a]"
              >
                <span class="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style="background: rgba(59,130,246,0.5);" aria-hidden="true" />
                {{ point }}
              </li>
            </ul>
          </div>
        </div>

        <!-- Architecture flow -->
        <div class="glass rounded-2xl p-8 mb-8" style="border-color: rgba(255,255,255,0.08);">
          <span class="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-[0.1em] mb-5"
            style="background: rgba(139,92,246,0.1); border: 1px solid rgba(139,92,246,0.25); color: #c4b5fd;">
            Architettura
          </span>
          <h2 class="text-2xl font-extrabold text-[#f0f0f5] tracking-tight mb-6">Flusso ad alto livello</h2>
          <div class="flex flex-wrap items-center gap-2">
            <template v-for="(step, i) in project.caseStudy.archFlow" :key="i">
              <span class="px-4 py-2 rounded-xl text-sm font-medium text-[#d0d0e0]"
                style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);">
                {{ step }}
              </span>
              <span v-if="i < project.caseStudy.archFlow.length - 1" class="text-[#4a4a6a] font-mono text-lg" aria-hidden="true">→</span>
            </template>
          </div>
        </div>

        <!-- Demonstrates + Replicability (two columns on lg) -->
        <div class="grid lg:grid-cols-2 gap-8 mb-8">

          <!-- Demonstrates -->
          <div class="glass rounded-2xl p-8" style="border-color: rgba(255,255,255,0.08);">
            <span class="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-[0.1em] mb-5"
              style="background: rgba(74,222,128,0.08); border: 1px solid rgba(74,222,128,0.2); color: #86efac;">
              Cosa dimostra
            </span>
            <h2 class="text-xl font-extrabold text-[#f0f0f5] tracking-tight mb-5">Competenze dimostrate</h2>
            <ul class="flex flex-col gap-2.5">
              <li
                v-for="item in project.caseStudy.demonstrates"
                :key="item"
                class="flex items-start gap-2.5 text-sm text-[#6a6a7a]"
              >
                <span class="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style="background: rgba(74,222,128,0.6);" aria-hidden="true" />
                {{ item }}
              </li>
            </ul>
          </div>

          <!-- Replicability -->
          <div class="glass rounded-2xl p-8" style="border-color: rgba(255,255,255,0.08);">
            <span class="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-[0.1em] mb-5"
              style="background: rgba(251,191,36,0.08); border: 1px solid rgba(251,191,36,0.2); color: #fde68a;">
              Replicabilità
            </span>
            <h2 class="text-xl font-extrabold text-[#f0f0f5] tracking-tight mb-4">Come questo approccio può aiutare un team</h2>
            <p class="text-[#6a6a7a] text-sm leading-relaxed mb-5">{{ project.caseStudy.replicability.text }}</p>
            <ul class="flex flex-col gap-2">
              <li
                v-for="uc in project.caseStudy.replicability.useCases"
                :key="uc"
                class="flex items-start gap-2.5 text-sm text-[#6a6a7a]"
              >
                <span class="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style="background: rgba(251,191,36,0.5);" aria-hidden="true" />
                {{ uc }}
              </li>
            </ul>
          </div>
        </div>

        <!-- Responsible note (optional, e.g. human-in-the-loop ethics) -->
        <div v-if="project.caseStudy.responsibleNote" class="glass rounded-2xl p-8 mb-8" style="border-color: rgba(255,255,255,0.08);">
          <span class="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-[0.1em] mb-5"
            style="background: rgba(251,191,36,0.08); border: 1px solid rgba(251,191,36,0.2); color: #fde68a;">
            Approccio responsabile
          </span>
          <h2 class="text-xl font-extrabold text-[#f0f0f5] tracking-tight mb-4">
            {{ project.caseStudy.responsibleNote.headline }}
          </h2>
          <p class="text-[#6a6a7a] text-sm leading-relaxed mb-5">{{ project.caseStudy.responsibleNote.text }}</p>
          <ul class="flex flex-col gap-2">
            <li
              v-for="point in project.caseStudy.responsibleNote.points"
              :key="point"
              class="flex items-start gap-2.5 text-sm text-[#6a6a7a]"
            >
              <span class="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style="background: rgba(251,191,36,0.5);" aria-hidden="true" />
              {{ point }}
            </li>
          </ul>
        </div>

        <!-- CTA block -->
        <div class="glass rounded-2xl p-8 text-center" style="border-color: rgba(255,255,255,0.08); background: rgba(139,92,246,0.04);">
          <p class="text-[#d0d0e0] font-medium mb-5 max-w-xl mx-auto">{{ project.caseStudy.ctaText }}</p>
          <a
            href="/#contatti"
            class="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-sm font-semibold text-white transition-all duration-200 hover:opacity-85 hover:scale-[1.02]"
            style="background: linear-gradient(135deg, #3b82f6, #8b5cf6);"
          >
            Parliamo del tuo workflow
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

      </template>
      <!-- ── End Case Study ────────────────────────────────── -->

      <!-- ── README or longDescription fallback ───────────────────── -->
      <template v-if="readmeHtml || project.longDescription">
        <div
          class="mt-20 mb-14 h-px"
          style="background: linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent);"
          aria-hidden="true"
        />
        <!-- README (from GitHub) takes priority -->
        <div v-if="readmeHtml" class="prose-project max-w-3xl" v-html="readmeHtml" />
        <!-- Manual fallback for projects without a public repo -->
        <p v-else class="prose-project max-w-3xl">{{ project.longDescription }}</p>
      </template>

      <!-- ── Divider ────────────────────────────────────────────── -->
      <div
        class="mt-20 mb-14 h-px"
        style="background: linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent);"
        aria-hidden="true"
      />

      <!-- ── Prev / Next ────────────────────────────────────────── -->
      <nav class="grid sm:grid-cols-2 gap-4" aria-label="Navigazione tra progetti">
        <NuxtLink
          v-if="prevProject"
          :to="`/progetti/${prevProject.slug}`"
          class="group glass rounded-2xl p-5 flex items-center gap-4 transition-all duration-200 hover:border-purple-500/40"
          style="border-color: rgba(255,255,255,0.08);"
        >
          <svg class="w-5 h-5 text-[#8a8a9a] flex-shrink-0 transition-transform duration-200 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          <div class="min-w-0">
            <p class="text-xs text-[#4a4a5a] uppercase tracking-widest mb-1">Precedente</p>
            <p class="text-sm font-semibold text-[#f0f0f5] truncate">{{ prevProject.title }}</p>
          </div>
        </NuxtLink>
        <div v-else />

        <NuxtLink
          v-if="nextProject"
          :to="`/progetti/${nextProject.slug}`"
          class="group glass rounded-2xl p-5 flex items-center justify-end gap-4 text-right transition-all duration-200 hover:border-purple-500/40 sm:col-start-2"
          style="border-color: rgba(255,255,255,0.08);"
        >
          <div class="min-w-0">
            <p class="text-xs text-[#4a4a5a] uppercase tracking-widest mb-1">Successivo</p>
            <p class="text-sm font-semibold text-[#f0f0f5] truncate">{{ nextProject.title }}</p>
          </div>
          <svg class="w-5 h-5 text-[#8a8a9a] flex-shrink-0 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </NuxtLink>
      </nav>

    </div>
  </div>
</template>
