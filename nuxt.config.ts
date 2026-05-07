export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  future: {
    compatibilityVersion: 4,
  },

  devtools: { enabled: true },

  modules: [['motion-v/nuxt', { directives: true }], '@nuxtjs/tailwindcss'],

  css: ['~/assets/css/main.css'],

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
