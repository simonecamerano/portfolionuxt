<script setup lang="ts">
import { projects } from '~/data/projects'

const featuredProjects = projects.filter((p) => p.featured)
</script>

<template>
  <section id="progetti" class="py-28 px-6">
    <div class="max-w-6xl mx-auto">

      <!-- Header -->
      <div
        v-motion="editorialReveal()"
        class="text-center mb-16"
      >
        <span
          class="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.12em] mb-5"
          style="background: rgba(196, 181, 253, 0.1); border: 1px solid rgba(196, 181, 253, 0.25); color: #c4b5fd;"
        >
          Sistemi reali
        </span>
        <h2 class="text-4xl md:text-5xl font-extrabold text-[#f0f0f5] mb-4 tracking-tight">
          Dalla necessità al <span class="text-gradient-cyan">sistema funzionante.</span>
        </h2>
        <p class="text-[#828293] max-w-lg mx-auto leading-relaxed">
          Automazioni, basi di conoscenza, strumenti di controllo e prodotti completi. Ogni progetto racconta un problema, le scelte fatte e la soluzione realizzata.
        </p>
      </div>

      <!-- Cards grid with stagger -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(project, i) in featuredProjects"
          :key="project.id"
          v-motion="editorialStagger(i, i % 3 === 0 ? 'left' : 'up')"
        >
          <ProjectCard :project="project" />
        </div>
      </div>

      <!-- Closing note -->
      <p
        v-motion="editorialReveal(0.18)"
        class="text-center text-[#828293] text-sm leading-relaxed max-w-2xl mx-auto mt-12"
      >
        Ogni progetto nasce da una domanda pratica: come organizzo meglio queste informazioni? Come riduco attività ripetitive? Come costruisco uno strumento semplice da usare? Dove l'AI può aiutare senza prendere il controllo del processo?
      </p>

      <!-- CTA -->
      <div
        v-motion="editorialReveal(0.26)"
        class="text-center mt-14"
      >
        <NuxtLink
          to="/progetti"
          class="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-sm font-semibold text-[#c4b5fd] border transition-all duration-200 hover:bg-white/[0.05] hover:text-white"
          style="border-color: rgba(255,255,255,0.14);"
        >
          Vedi tutti i progetti
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </NuxtLink>
      </div>

    </div>
  </section>
</template>
