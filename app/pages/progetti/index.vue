<script setup lang="ts">
import { projects } from '~/data/projects'

useSeoMeta({
  title: 'Progetti — Simone Camerano',
  description:
    'Tutti i progetti di Simone Camerano: app full stack, frontend, giochi e landing page. Vue, Nuxt, Node.js, TypeScript.',
  ogTitle: 'Progetti — Simone Camerano',
  ogDescription: 'Esplora tutti i progetti di Simone Camerano, web developer.',
})

const selectedCategory = ref('Tutti')

// Unique categories in insertion order
const categories = computed(() => {
  const seen = new Set<string>()
  projects.forEach((p) => seen.add(p.category))
  return ['Tutti', ...seen]
})

const countFor = (cat: string) =>
  cat === 'Tutti' ? projects.length : projects.filter((p) => p.category === cat).length

const filtered = computed(() =>
  selectedCategory.value === 'Tutti'
    ? projects
    : projects.filter((p) => p.category === selectedCategory.value),
)

</script>

<template>
  <div class="min-h-screen pt-24 pb-28 px-6">
    <div class="max-w-6xl mx-auto">
      <NuxtLink
        to="/"
        class="inline-flex items-center gap-2 text-sm text-[#8a8a9a] hover:text-white transition-colors group mb-12"
      >
        <svg class="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
        </svg>
        Torna alla home
      </NuxtLink>

      <!-- ── Header ────────────────────────────────────────────── -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 28 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.6, ease: 'easeOut' }"
        class="mb-14"
      >
      
        <span
          class="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.12em] mb-5"
          style="background: rgba(59,130,246,0.1); border: 1px solid rgba(59,130,246,0.25); color: #93c5fd;"
        >
          Portfolio
        </span>
        <h1 class="text-5xl md:text-6xl font-extrabold text-[#f0f0f5] tracking-tight mt-2">
          Tutti i progetti
        </h1>
        <p class="text-[#6a6a7a] mt-4 text-lg max-w-xl">
          {{ projects.length }} lavori tra app full stack, frontend, giochi e landing page.
        </p>
      </div>

      <!-- ── Category filters ──────────────────────────────────── -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 16 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.5, delay: 0.1, ease: 'easeOut' }"
        class="flex flex-wrap gap-3 mb-12"
        role="group"
        aria-label="Filtra per categoria"
      >
        <button
          v-for="cat in categories"
          :key="cat"
          class="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200"
          :class="
            selectedCategory === cat
              ? 'text-white'
              : 'text-[#8a8a9a] hover:text-white hover:bg-white/[0.06]'
          "
          :style="
            selectedCategory === cat
              ? 'background: linear-gradient(135deg, #3b82f6, #8b5cf6); box-shadow: 0 4px 20px rgba(139,92,246,0.3);'
              : 'background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);'
          "
          :aria-pressed="selectedCategory === cat"
          @click="selectedCategory = cat"
        >
          {{ cat }}
          <span
            class="text-xs px-1.5 py-0.5 rounded-md font-semibold"
            :style="
              selectedCategory === cat
                ? 'background: rgba(255,255,255,0.2); color: white;'
                : 'background: rgba(255,255,255,0.07); color: #8a8a9a;'
            "
          >
            {{ countFor(cat) }}
          </span>
        </button>
      </div>

      <!-- ── Projects grid ─────────────────────────────────────── -->
      <TransitionGroup
        tag="div"
        class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        move-class="transition-all duration-300"
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 scale-95 translate-y-4"
        enter-to-class="opacity-100 scale-100 translate-y-0"
        leave-active-class="transition duration-200 ease-in absolute"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0 scale-95"
      >
        <div v-for="project in filtered" :key="project.id">
          <ProjectCard :project="project" />
        </div>
      </TransitionGroup>

      <!-- Empty state (in case all filtered out) -->
      <div
        v-if="filtered.length === 0"
        class="py-24 text-center text-[#8a8a9a] text-sm"
      >
        Nessun progetto in questa categoria.
      </div>

    </div>
  </div>
</template>
