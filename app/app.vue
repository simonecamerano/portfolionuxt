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
  ogImage: `${siteUrl}/og-image-v2.png`,
  twitterImage: `${siteUrl}/og-image-v2.png`,
})

// www and the bare domain serve the same pages: the canonical tells search
// engines which address is the real one.
const route = useRoute()
const canonicalUrl = computed(() => `${siteUrl.replace(/\/$/, '')}${route.path === '/' ? '/' : route.path.replace(/\/$/, '')}`)

useHead({
  link: [
    { rel: 'canonical', href: canonicalUrl },
    { rel: 'preload', as: 'font', type: 'font/woff2', href: interRegularWoff2, crossorigin: 'anonymous' },
    { rel: 'preload', as: 'font', type: 'font/woff2', href: interExtraboldWoff2, crossorigin: 'anonymous' },
  ],
})
</script>

<template>
  <MotionConfig reduced-motion="user">
    <div class="min-h-screen bg-[#05080d]">
      <AppNavbar />
      <NuxtPage />
      <AppFooter />
      <BannerConsensoTracciamento />
    </div>
  </MotionConfig>
</template>
