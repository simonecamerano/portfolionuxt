<script setup lang="ts">
import type { Project } from '~/types'

defineProps<{
  project: Project
}>()
</script>

<template>
  <article
    class="glass card-hover rounded-3xl overflow-hidden flex flex-col h-full group"
    style="border-color: rgba(255,255,255,0.08);"
  >
    <!-- Screenshot -->
    <div class="relative h-48 overflow-hidden bg-[#0d0d14]">
      <img
        :src="project.image"
        :alt="`Screenshot del progetto ${project.title}`"
        class="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
        width="480"
        height="192"
      />
      <!-- Subtle dark gradient at the bottom for contrast with the content area -->
      <div
        class="absolute inset-x-0 bottom-0 h-10 pointer-events-none"
        style="background: linear-gradient(to bottom, transparent, rgba(10,10,15,0.6));"
        aria-hidden="true"
      />

      <!-- Category badge -->
      <div class="absolute top-4 left-4">
        <span
          class="px-3 py-1 rounded-full text-xs font-semibold"
          style="background: rgba(10,10,15,0.7); backdrop-filter: blur(8px); border: 1px solid rgba(139,92,246,0.35); color: #c4b5fd;"
        >
          {{ project.category }}
        </span>
      </div>
    </div>

    <!-- Content -->
    <div class="p-6 flex flex-col flex-1 gap-4">
      <h3 class="text-xl font-bold text-[#f0f0f5]">{{ project.title }}</h3>

      <p class="text-sm text-[#6a6a7a] leading-relaxed flex-1">
        {{ project.description }}
      </p>

      <!-- Tags -->
      <div class="flex flex-wrap gap-2">
        <span
          v-for="tag in project.tags"
          :key="tag"
          class="px-2.5 py-1 rounded-lg text-xs font-medium"
          style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08); color: #8a8a9a;"
        >
          {{ tag }}
        </span>
      </div>

      <!-- Link → detail page -->
      <NuxtLink
        :to="`/progetti/${project.slug}`"
        class="inline-flex items-center gap-2 text-sm font-semibold text-gradient hover:opacity-75 transition-opacity group"
        :aria-label="`Scopri il progetto ${project.title}`"
      >
        Scopri il progetto
        <svg
          class="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </NuxtLink>
    </div>
  </article>
</template>
