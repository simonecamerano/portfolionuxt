<script setup lang="ts">
import interVariableWoff2 from '@fontsource-variable/inter/files/inter-latin-wght-normal.woff2?url'
import { identity } from '~/data/identity'
import { services } from '~/data/services'

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

// Structured data: tells search engines and AI answer engines who the person
// and the business behind the site are, and what they offer.
const base = siteUrl.replace(/\/$/, '')
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${base}/#person`,
      name: identity.name,
      jobTitle: identity.jobTitle,
      description: `${identity.summary} ${identity.background}`,
      url: `${base}/`,
      image: `${base}${identity.image}`,
      email: identity.email,
      sameAs: identity.sameAs,
      worksFor: { '@id': `${base}/#business` },
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${base}/#business`,
      name: identity.name,
      description: identity.summary,
      url: `${base}/`,
      image: `${base}/og-image-v2.png`,
      email: identity.email,
      vatID: identity.vatID,
      founder: { '@id': `${base}/#person` },
      address: { '@type': 'PostalAddress', ...identity.address },
      sameAs: identity.sameAs,
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Servizi',
        itemListElement: services.map((s) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: s.title, description: s.desc, url: `${base}/servizi` },
        })),
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${base}/#website`,
      url: `${base}/`,
      name: identity.name,
      inLanguage: 'it-IT',
      publisher: { '@id': `${base}/#business` },
    },
  ],
}

useHead({
  link: [
    { rel: 'canonical', href: canonicalUrl },
    { rel: 'preload', as: 'font', type: 'font/woff2', href: interVariableWoff2, crossorigin: 'anonymous' },
  ],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(jsonLd) }],
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
