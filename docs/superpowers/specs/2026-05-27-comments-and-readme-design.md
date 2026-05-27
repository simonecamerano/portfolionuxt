# Design: Code Comments + Professional README

**Date:** 2026-05-27  
**Status:** Approved

---

## Overview

Add targeted WHY-only English comments to non-obvious code in 5 files, and write a professional recruiter-facing English README.

The codebase is already clean. No Italian code comments were found — all Italian text is UI content or user-facing error messages that must remain in Italian. The value added here is explanatory comments on subtle architectural choices, plus a polished README that functions as a professional portfolio entry point.

---

## Part 1: Code Comments

### Approach
Add comments only where the WHY is non-obvious from reading the code. No descriptive comments on self-explanatory code. No file headers. No JSDoc.

### Files and comment locations

**`server/api/contact.post.ts`**
- Above `commonParams`: explain the dual-alias fields (`name`/`user_name`/`from_name`) — EmailJS templates have inconsistent variable naming across versions; the aliases ensure the template works regardless of how it was created.
- Above `if (confirmationTemplateId)` block: explain the silent `.catch()` — the confirmation email is best-effort; failure must not block the primary response to the sender.

**`server/api/readme.get.ts`**
- Above `rewriteImageUrls` function: explain why blob URLs must become raw URLs — GitHub `blob/` URLs serve HTML pages, not raw files; only `raw.githubusercontent.com` serves the binary directly.
- Above the `for (const branch of ['main', 'master'])` loop: explain the branch iteration — GitHub repos default to `main` for new repos and `master` for legacy ones; we try both before 404ing.

**`nuxt.config.ts`**
- Above `compatibilityVersion: 4`: explain the opt-in — enables the Nuxt 4 `app/` directory structure and breaking-change behaviors ahead of the stable Nuxt 4 release.

**`app/components/AppNavbar.vue`**
- Above `{ passive: true }` in `addEventListener`: explain — passive event listeners cannot call `preventDefault()`, which allows the browser to start scrolling immediately without waiting for the JS handler to return.

**`app/assets/css/main.css`**
- Above `.motion-preload` rule: explain the `opacity: 0` — prevents a flash of fully-visible content before motion-v mounts and applies the entry animation's initial state.

**Total: 7 comments across 5 files.**

---

## Part 2: README.md

### Audience
Recruiter or hiring manager who lands on the GitHub repo. Goal: understand the project in under 60 seconds, then find setup instructions if needed.

### Language
English throughout.

### Structure

1. **Title + badges** — stack badges (Nuxt, Vue, TypeScript, Tailwind), live site link
2. **One-liner description** — what the site is and does
3. **Live preview** — link + OG screenshot
4. **Features** — bulleted, outcome-oriented
5. **Tech stack** — table with name, version, role
6. **Getting started** — prerequisites, install, `.env` setup, dev server command
7. **Environment variables** — table of all vars from `.env.example` with descriptions
8. **Deployment** — Docker build + run commands, Nginx reverse proxy note
9. **Project structure** — annotated file tree of `app/` and `server/`
10. **License** — MIT

### Tone
Professional, concise. No filler sentences. Each section earns its place.

---

## Out of scope

- Translating UI text (nav labels, section headings, form labels) — these are content, not code, and must remain in Italian
- Translating user-facing error messages in `contact.post.ts` — they display to Italian-speaking users
- Commenting trivially self-explanatory code (data files, page components, type definitions)
- Adding file headers or JSDoc
