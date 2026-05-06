<script setup lang="ts">
const { public: { siteUrl } } = useRuntimeConfig()

useSeoMeta({
  ogSiteName: 'Simone Camerano',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterSite: '@simonecamerano',
  ogImage: `${siteUrl}/og-image.png`,
  twitterImage: `${siteUrl}/og-image.png`,
})
</script>

<template>
  <div class="min-h-screen bg-[#0a0a0f]">
    <AppNavbar />
    <NuxtPage />
    <AppFooter />
  </div>
</template>
