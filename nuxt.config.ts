export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  future: {
    // Opts into the Nuxt 4 app/ directory structure and breaking-change behaviors
    // ahead of the stable Nuxt 4 release.
    compatibilityVersion: 4,
  },

  devtools: { enabled: true },

  modules: [['motion-v/nuxt', { directives: true }], '@nuxtjs/tailwindcss'],

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/images/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
    '/favicon.svg': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
    '/og-image.png': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
    '/cv.pdf': { headers: { 'cache-control': 'public, max-age=86400' } },
  },

  runtimeConfig: {
    emailjsServiceId: process.env.EMAILJS_SERVICE_ID,
    emailjsTemplateId: process.env.EMAILJS_TEMPLATE_ID,
    emailjsConfirmationTemplateId: process.env.EMAILJS_CONFIRMATION_TEMPLATE_ID,
    emailjsPublicKey: process.env.EMAILJS_PUBLIC_KEY,
    emailjsPrivateKey: process.env.EMAILJS_PRIVATE_KEY,
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://simonecamerano.dev',
    },
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: { lang: 'it' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg?v=1' },
      ],
      script: [
        {
          defer: true,
          src: 'https://analytics.simonecamerano.dev/script.js',
          'data-website-id': '9cfee0ec-69ed-48d2-98bc-93514009862f',
        },
      ],
    },
  },
})
