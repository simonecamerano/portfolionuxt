# Comments + README Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add 7 targeted WHY-only English comments across 5 files and write a professional recruiter-facing English README.md.

**Architecture:** No logic changes. Each comment explains a non-obvious architectural decision. The README follows a standard open-source portfolio structure: badges → description → features → stack → setup → deployment → structure.

**Tech Stack:** Nuxt 3, Vue 3, TypeScript, Tailwind CSS, motion-v, EmailJS, Docker.

---

## File Map

**Modified:**
- `nuxt.config.ts` — add 1 comment
- `app/assets/css/main.css` — add 1 comment
- `app/components/AppNavbar.vue` — add 1 comment
- `server/api/readme.get.ts` — add 2 comments
- `server/api/contact.post.ts` — add 2 comments

**Created:**
- `README.md` — full professional README

---

### Task 1: Comment — `nuxt.config.ts`

**Files:**
- Modify: `nuxt.config.ts`

- [ ] **Step 1: Add comment above `compatibilityVersion: 4`**

Open `nuxt.config.ts`. The `future` block currently reads:

```typescript
  future: {
    compatibilityVersion: 4,
  },
```

Replace with:

```typescript
  future: {
    // Opts into the Nuxt 4 app/ directory structure and breaking-change behaviors
    // ahead of the stable Nuxt 4 release.
    compatibilityVersion: 4,
  },
```

- [ ] **Step 2: Verify**

Read `nuxt.config.ts` and confirm the comment appears correctly above `compatibilityVersion`.

- [ ] **Step 3: Commit**

```bash
git add nuxt.config.ts
git commit -m "docs: add WHY comment for compatibilityVersion 4 opt-in"
```

---

### Task 2: Comment — `app/assets/css/main.css`

**Files:**
- Modify: `app/assets/css/main.css`

- [ ] **Step 1: Add comment above `.motion-preload`**

The current block reads:

```css
/* ─── Scroll reveal ────────────────────────────────────────────────── */
.motion-preload {
  opacity: 0;
}
```

Replace with:

```css
/* ─── Scroll reveal ────────────────────────────────────────────────── */
/* motion-preload: keeps elements invisible until motion-v applies the entry
   animation, preventing a flash of fully-visible content on load. */
.motion-preload {
  opacity: 0;
}
```

- [ ] **Step 2: Verify**

Read `app/assets/css/main.css` around line 117 and confirm the comment is in place.

- [ ] **Step 3: Commit**

```bash
git add app/assets/css/main.css
git commit -m "docs: add WHY comment for motion-preload opacity rule"
```

---

### Task 3: Comment — `app/components/AppNavbar.vue`

**Files:**
- Modify: `app/components/AppNavbar.vue`

- [ ] **Step 1: Add comment above `{ passive: true }` in the scroll listener**

The current `onMounted` block reads:

```typescript
onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
})
```

Replace with:

```typescript
onMounted(() => {
  handleScroll()
  // passive: true tells the browser the handler never calls preventDefault(),
  // letting it start scrolling immediately without waiting for this callback.
  window.addEventListener('scroll', handleScroll, { passive: true })
})
```

- [ ] **Step 2: Verify**

Read `app/components/AppNavbar.vue` lines 16–20 and confirm the comment is present.

- [ ] **Step 3: Commit**

```bash
git add app/components/AppNavbar.vue
git commit -m "docs: add WHY comment for passive scroll listener"
```

---

### Task 4: Comments — `server/api/readme.get.ts`

**Files:**
- Modify: `server/api/readme.get.ts`

- [ ] **Step 1: Add comment above `rewriteImageUrls` function**

The function currently opens with:

```typescript
function rewriteImageUrls(markdown: string, repo: string, branch: string): string {
```

Replace with:

```typescript
// GitHub blob/ URLs serve an HTML page, not the raw file.
// Rewriting relative paths and blob/ URLs to raw.githubusercontent.com
// ensures images in the rendered README actually load.
function rewriteImageUrls(markdown: string, repo: string, branch: string): string {
```

- [ ] **Step 2: Add comment above the branch iteration loop**

The loop currently reads:

```typescript
  for (const branch of ['main', 'master']) {
```

Replace with:

```typescript
  // New GitHub repos default to 'main'; legacy repos use 'master'.
  // We try both before returning a 404.
  for (const branch of ['main', 'master']) {
```

- [ ] **Step 3: Verify**

Read `server/api/readme.get.ts` and confirm both comments appear at the correct positions.

- [ ] **Step 4: Commit**

```bash
git add server/api/readme.get.ts
git commit -m "docs: add WHY comments for image URL rewriting and branch fallback"
```

---

### Task 5: Comments — `server/api/contact.post.ts`

**Files:**
- Modify: `server/api/contact.post.ts`

- [ ] **Step 1: Add comment above `commonParams`**

The `commonParams` block currently reads:

```typescript
  const commonParams = {
    name,
    email,
    user_name: name,
    user_email: email,
    from_name: name,
    from_email: email,
    reply_to: email,
    to_email: email,
    subject,
    message,
    user_ip: getRequestIP(event, { xForwardedFor: true }) ?? '',
  }
```

Replace with:

```typescript
  // EmailJS template variable naming varies between older and newer template formats.
  // Providing both aliases (name/user_name/from_name, email/user_email/from_email)
  // ensures the template receives the expected values regardless of how it was created.
  const commonParams = {
    name,
    email,
    user_name: name,
    user_email: email,
    from_name: name,
    from_email: email,
    reply_to: email,
    to_email: email,
    subject,
    message,
    user_ip: getRequestIP(event, { xForwardedFor: true }) ?? '',
  }
```

- [ ] **Step 2: Add comment above the confirmation email block**

The block currently reads:

```typescript
  if (confirmationTemplateId) {
    await sendEmailJs({
```

Replace with:

```typescript
  // Confirmation email is best-effort: failure must not block the primary notification
  // or return an error to the sender. We catch and log without re-throwing.
  if (confirmationTemplateId) {
    await sendEmailJs({
```

- [ ] **Step 3: Verify**

Read `server/api/contact.post.ts` and confirm both comments appear at the correct positions.

- [ ] **Step 4: Commit**

```bash
git add server/api/contact.post.ts
git commit -m "docs: add WHY comments for EmailJS param aliases and confirmation fire-and-forget"
```

---

### Task 6: Create `README.md`

**Files:**
- Create: `README.md`

- [ ] **Step 1: Write the README**

Create `/README.md` at the project root with the following content (replace nothing — use as-is):

````markdown
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
````

- [ ] **Step 2: Verify**

Read `README.md` and confirm the file is complete with no placeholder text.

- [ ] **Step 3: Commit**

```bash
git add README.md
git commit -m "docs: add professional English README for portfolio"
```

---

## Self-Review

**Spec coverage:**
- ✅ 7 comments in 5 files — all tasks 1–5 covered
- ✅ README with badges, description, features, stack table, getting started, env vars table, Docker deployment, Nginx note, project structure, license — task 6 covered
- ✅ No Italian code comments to translate (none existed)
- ✅ All UI/content text left in Italian (out of scope per spec)

**Placeholder scan:**
- No TBD, TODO, or "implement later" in any step
- Every step has exact file content shown
- Every commit message is specific

**Type consistency:** N/A — no new types or functions introduced.
