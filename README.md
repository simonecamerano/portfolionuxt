# Simone Camerano — Portfolio

![Nuxt](https://img.shields.io/badge/Nuxt-3.x-00DC82?style=flat-square&logo=nuxt.js&logoColor=white)
![Vue](https://img.shields.io/badge/Vue-3.x-42B883?style=flat-square&logo=vue.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3B82F6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-ready-2496ED?style=flat-square&logo=docker&logoColor=white)

Personal portfolio and project showcase for **Simone Camerano**, web developer specialising in Vue, Nuxt, and TypeScript.

**Live site → [simonecamerano.dev](https://simonecamerano.dev)**

---

## Features

- **SSR** — Server-side rendering via Nuxt for fast initial load and full SEO indexability
- **Contact form** — Server-side validation, EmailJS delivery, optional auto-confirmation reply
- **Project detail pages** — Auto-fetches and renders the GitHub README of each project, with image URL rewriting for correct display
- **Dynamic sitemap + robots.txt** — Generated at request time from the project data
- **Privacy-first analytics** — Umami (self-hosted, cookieless)
- **Glassmorphism design system** — Custom Tailwind utilities: `glass`, `glass-nav`, `text-gradient`, `card-hover`
- **Scroll animations** — Entry animations via [motion-v](https://motion.dev/vue), with `motion-preload` flash prevention
- **Accessible** — Semantic HTML, ARIA labels, visible focus states throughout
- **Mobile-first** — Fully responsive from 320 px

---

## Tech Stack

| Technology | Version | Role |
|---|---|---|
| [Nuxt 3](https://nuxt.com) | ^3.16 (compat v4) | Framework, SSR, file-based routing |
| [Vue 3](https://vuejs.org) | ^3.5 | Reactive UI components |
| [TypeScript](https://typescriptlang.org) | ^5.7 | Type safety across the full stack |
| [Tailwind CSS](https://tailwindcss.com) | via @nuxtjs/tailwindcss | Utility-first styling + custom design tokens |
| [motion-v](https://motion.dev/vue) | ^2.2 | Declarative scroll and entry animations |
| [marked](https://marked.js.org) | ^18 | Markdown → HTML for project READMEs |
| [EmailJS](https://emailjs.com) | REST API | Transactional email without a dedicated mail server |
| [Docker](https://docker.com) | — | Multi-stage build for self-hosted deployment |

---

## Getting Started

### Prerequisites

- Node.js ≥ 20
- npm ≥ 10

### Install

```bash
git clone https://github.com/simonecamerano/portfolio-nuxt.git
cd portfolio-nuxt
npm install
```

### Environment variables

Copy `.env.example` to `.env` and fill in the values:

```bash
cp .env.example .env
```

| Variable | Required | Description |
|---|---|---|
| `EMAILJS_SERVICE_ID` | Yes | EmailJS service ID (from your EmailJS dashboard) |
| `EMAILJS_TEMPLATE_ID` | Yes | Template ID for the notification sent to you |
| `EMAILJS_CONFIRMATION_TEMPLATE_ID` | No | Template ID for the auto-reply sent to the visitor |
| `EMAILJS_PUBLIC_KEY` | Yes | EmailJS public key |
| `EMAILJS_PRIVATE_KEY` | No | EmailJS private key (enables server-side authentication) |
| `NUXT_PUBLIC_SITE_URL` | No | Full origin URL — used in sitemaps and OG tags (default: `https://simonecamerano.dev`) |

### Run locally

```bash
npm run dev
```

The dev server starts at `http://localhost:3000`.

---

## Deployment

### Docker

Build and run the production image:

```bash
docker build -t portfolio .
docker run -p 3000:3000 --env-file .env portfolio
```

The container exposes port `3000`. Pass environment variables via `--env-file` or individual `-e` flags.

### Nginx reverse proxy

A minimal Nginx configuration is provided in `nginx.conf.example`. It proxies `http://localhost:3000` and adds standard security headers. Copy it to your Nginx `sites-available/` directory and update the `server_name` directive.

---

## Project Structure

```
portfolio-simone/
├── app/
│   ├── app.vue                 # Root layout — global SEO meta, navbar + footer
│   ├── assets/
│   │   └── css/main.css        # Design system: glass, gradients, animations
│   ├── components/
│   │   ├── AppNavbar.vue       # Sticky navbar with scroll-aware glass effect
│   │   ├── AppFooter.vue       # Footer with social links
│   │   ├── HeroSection.vue     # Hero with animated code mockup
│   │   ├── AboutSection.vue    # Bio, stats, profile photo
│   │   ├── ProjectsSection.vue # Featured projects grid
│   │   ├── ProjectCard.vue     # Single project card (image, tags, link)
│   │   ├── TechSection.vue     # Tech stack icon grid
│   │   └── ContactSection.vue  # Contact form with status management
│   ├── data/
│   │   ├── projects.ts         # Project entries (source of truth)
│   │   ├── stats.ts            # Stats counters shown in About
│   │   └── technologies.ts     # Tech stack items with brand colours
│   ├── pages/
│   │   ├── index.vue           # Home — composes all sections
│   │   ├── about.vue           # Full about page
│   │   ├── privacy.vue         # Privacy policy
│   │   └── progetti/
│   │       ├── index.vue       # Full project listing
│   │       └── [slug].vue      # Project detail — fetches GitHub README
│   └── types/
│       └── index.ts            # Shared TypeScript interfaces
├── server/
│   ├── api/
│   │   ├── contact.post.ts     # Contact form handler — validates + sends via EmailJS
│   │   └── readme.get.ts       # Fetches GitHub README, rewrites image URLs
│   └── routes/
│       ├── robots.txt.ts       # Dynamic robots.txt
│       └── sitemap.xml.ts      # Dynamic XML sitemap from project data
├── public/                     # Static assets: images, favicon, cv.pdf
├── Dockerfile                  # Multi-stage build (builder → runner)
├── nginx.conf.example          # Nginx reverse proxy template
├── nuxt.config.ts
├── tailwind.config.ts
└── .env.example
```

---

## License

MIT © [Simone Camerano](https://simonecamerano.dev)
