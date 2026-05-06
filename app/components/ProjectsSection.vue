<script setup lang="ts">
import { projects } from '~/data/projects'

const featuredProjects = projects.filter((p) => p.featured)
</script>

<template>
  <section id="progetti" class="py-28 px-6">
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
          Portfolio
        </span>
        <h2 class="text-4xl md:text-5xl font-extrabold text-[#f0f0f5] mb-4 tracking-tight">
          Progetti in evidenza
        </h2>
        <p class="text-[#6a6a7a] max-w-lg mx-auto leading-relaxed">
          Una selezione dei lavori più recenti. Ogni progetto racconta una sfida affrontata e una soluzione costruita con cura.
        </p>
      </div>

      <!-- Cards grid with stagger -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(project, i) in featuredProjects"
          :key="project.id"
          v-motion="{ initial: { opacity: 0, y: 32 }, whileInView: { opacity: 1, y: 0 }, inViewOptions: { once: true }, transition: { duration: 0.55, delay: i * 0.1, ease: 'easeOut' as const } }"
        >
          <ProjectCard :project="project" />
        </div>
      </div>

      <!-- CTA -->
      <div
        v-motion="{ initial: { opacity: 0, y: 16 }, whileInView: { opacity: 1, y: 0 }, inViewOptions: { once: true }, transition: { duration: 0.5, delay: 0.3, ease: 'easeOut' as const } }"
        class="text-center mt-14"
      >
        <NuxtLink
          to="/progetti"
          class="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-sm font-semibold text-[#d0d0e0] border transition-all duration-200 hover:bg-white/[0.05] hover:text-white"
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
