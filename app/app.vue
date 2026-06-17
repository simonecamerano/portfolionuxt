<script setup lang="ts">
import interRegularWoff2 from '@fontsource/inter/files/inter-latin-400-normal.woff2?url'
import interExtraboldWoff2 from '@fontsource/inter/files/inter-latin-800-normal.woff2?url'

const rawSiteUrl = useRuntimeConfig().public.siteUrl as string
const siteUrl = rawSiteUrl.startsWith('http') ? rawSiteUrl : `https://${rawSiteUrl}`

useSeoMeta({
  ogSiteName: 'Simone Camerano',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterSite: '@simonecamerano',
  ogImage: `${siteUrl}/og-image.png`,
  twitterImage: `${siteUrl}/og-image.png`,
})

useHead({
  link: [
    { rel: 'preload', as: 'font', type: 'font/woff2', href: interRegularWoff2, crossorigin: 'anonymous' },
    { rel: 'preload', as: 'font', type: 'font/woff2', href: interExtraboldWoff2, crossorigin: 'anonymous' },
  ],
})
</script>

<template>
  <div class="min-h-screen bg-[#0a0a0f]">
    <AppNavbar />
    <NuxtPage />
    <AppFooter />
  </div>
</template>
