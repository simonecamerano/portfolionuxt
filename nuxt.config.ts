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
    '/og-image-v2.png': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
    '/cv.pdf': { headers: { 'cache-control': 'public, max-age=86400' } },
    // URL del vecchio sito statico ancora noti a Google (Search Console li
    // segnala come 404): 301 verso la pagina nuova equivalente. Il vecchio PDF
    // del CV puo' essere ancora linkato da CV e profili gia' inviati.
    '/index.html': { redirect: { to: '/', statusCode: 301 } },
    '/en/**': { redirect: { to: '/', statusCode: 301 } },
    '/about_page/**': { redirect: { to: '/about', statusCode: 301 } },
    '/projects_page/**': { redirect: { to: '/progetti', statusCode: 301 } },
    '/contact_page/**': { redirect: { to: '/#contatti', statusCode: 301 } },
    '/cv_page/**': { redirect: { to: '/cv.pdf', statusCode: 301 } },
    '/assets/files/**': { redirect: { to: '/cv.pdf', statusCode: 301 } },
    '/progetti/tictacvue': { redirect: { to: '/progetti', statusCode: 301 } },
    '/progetti/LICENSE': { redirect: { to: '/progetti', statusCode: 301 } },
    '/riservato/**': {
      headers: {
        // Vale anche se la pagina viene servita senza eseguire JS. Niente
        // Disallow in robots.txt: bloccherebbe il crawl e quindi la lettura del
        // noindex, oltre a pubblicare il percorso.
        'X-Robots-Tag': 'noindex, nofollow',
        'Content-Security-Policy': [
          "default-src 'self'",
          "script-src 'self' 'unsafe-inline' https://analytics.simonecamerano.dev https://connect.facebook.net",
          "style-src 'self' 'unsafe-inline'",
          "img-src 'self' data: https://www.facebook.com",
          "font-src 'self'",
          "connect-src 'self' https://analytics.simonecamerano.dev https://www.facebook.com",
          "frame-ancestors 'none'",
          "base-uri 'self'",
          "form-action 'self'",
          "object-src 'none'",
        ].join('; '),
      },
    },
    '/**': {
      headers: {
        'Content-Security-Policy': [
          "default-src 'self'",
          "script-src 'self' 'unsafe-inline' https://analytics.simonecamerano.dev",
          "style-src 'self' 'unsafe-inline'",
          "img-src 'self' data:",
          "font-src 'self'",
          "connect-src 'self' https://analytics.simonecamerano.dev",
          "frame-ancestors 'none'",
          "base-uri 'self'",
          "form-action 'self'",
          "object-src 'none'",
        ].join('; '),
        'X-Frame-Options': 'DENY',
        'X-Content-Type-Options': 'nosniff',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
        'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
        'Strict-Transport-Security': 'max-age=63072000; includeSubDomains',
      },
    },
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
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg?v=2' },
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
