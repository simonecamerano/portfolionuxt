<script setup lang="ts">
const navOpacity = ref(0)
const navBlur = ref(0)
const isMobileMenuOpen = ref(false)

const navLinks = [
  { label: 'Home', href: '/#hero' },
  { label: 'Progetti', href: '/#progetti' },
  { label: 'Chi sono', href: '/#about' },
  { label: 'Metodo', href: '/#metodo' },
  { label: 'Soluzioni', href: '/servizi' },
]

const route = useRoute()
// Ads landings keep only the logo, without a link: every exit from the page
// is a visitor lost before reaching the form.
const isLanding = computed(() => route.path.startsWith('/riservato'))
const activeSection = ref('')
const sectionIds = navLinks
  .filter((l) => l.href.startsWith('/#'))
  .map((l) => l.href.slice(2))

// While a menu click is scrolling to its target, the highlight stays on that
// target instead of tracking the sections it flies past during smooth scroll.
const isNavigating = ref(false)
const pendingTarget = ref('')
let releaseTimer: ReturnType<typeof setTimeout> | undefined

const releaseNavigation = () => {
  clearTimeout(releaseTimer)
  isNavigating.value = false
  pendingTarget.value = ''
  updateActiveSection()
}

// Picks the section closest to a line at 40% of the viewport, counting only
// those that have already crossed it. Measuring beats following DOM order,
// which does not match the menu order.
const updateActiveSection = () => {
  if (isNavigating.value) return
  if (route.path !== '/') {
    activeSection.value = ''
    return
  }
  const line = window.innerHeight * 0.4
  let current = ''
  let closest = -Infinity
  for (const id of sectionIds) {
    const top = document.getElementById(id)?.getBoundingClientRect().top
    if (top === undefined || top > line || top <= closest) continue
    closest = top
    current = id
  }
  activeSection.value = current
}

const handleScroll = () => {
  const progress = Math.min(Math.max(window.scrollY / 320, 0), 1)
  navOpacity.value = Number((progress * 0.92).toFixed(3))
  navBlur.value = Math.round(progress * 24)
  if (isNavigating.value) {
    const top = document.getElementById(pendingTarget.value)?.getBoundingClientRect().top
    if (top !== undefined && top <= window.innerHeight * 0.4) releaseNavigation()
    return
  }
  updateActiveSection()
}

const onNavClick = (href: string) => {
  closeMobileMenu()
  if (!href.startsWith('/#')) return
  // Same hash as the current URL: the router sees no navigation and does not
  // scroll, so the second click on Home (or the logo) would do nothing.
  if (route.path === '/' && route.hash === href.slice(1)) {
    const target = document.getElementById(href.slice(2))
    // No explicit behavior: it inherits the CSS scroll-behavior, which is
    // already disabled under prefers-reduced-motion.
    if (href === '/#hero') window.scrollTo({ top: 0 })
    else target?.scrollIntoView()
  }
  activeSection.value = href.slice(2)
  pendingTarget.value = href.slice(2)
  isNavigating.value = true
  clearTimeout(releaseTimer)
  // Safety net: an interrupted scroll, or clicking the section already on
  // screen, may never reach the target and would freeze the highlight.
  releaseTimer = setTimeout(releaseNavigation, 1500)
}

const isActive = (href: string) =>
  href.startsWith('/#')
    ? route.path === '/' && activeSection.value === href.slice(2)
    : route.path === href

onMounted(() => {
  handleScroll()
  // passive: true tells the browser the handler never calls preventDefault(),
  // letting it start scrolling immediately without waiting for this callback.
  window.addEventListener('scroll', handleScroll, { passive: true })
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  clearTimeout(releaseTimer)
})

watch(() => route.fullPath, () => nextTick(updateActiveSection))

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>

<template>
  <nav
    class="site-navbar fixed inset-x-0 top-0 z-[100] w-full border-b"
    :style="{ '--nav-opacity': navOpacity, '--nav-blur': `${navBlur}px`, '--nav-border-opacity': navOpacity * 0.065 }"
    aria-label="Navigazione principale"
  >
    <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <!-- Logo -->
      <span
        v-if="isLanding"
        class="text-2xl font-black text-gradient tracking-tight"
      >
        SC
      </span>
      <NuxtLink
        v-else
        to="/#hero"
        class="text-2xl font-black text-gradient tracking-tight"
        aria-label="Simone Camerano, torna in cima alla homepage"
        @click="onNavClick('/#hero')"
      >
        SC
      </NuxtLink>

      <!-- Desktop links -->
      <div v-if="!isLanding" class="hidden md:flex items-center gap-8">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.href"
          :to="link.href"
          class="relative text-sm font-medium transition-colors duration-200 hover:text-white"
          :class="isActive(link.href) ? 'text-white' : 'text-[#8a8a9a]'"
          :aria-current="isActive(link.href) ? (link.href.startsWith('/#') ? 'location' : 'page') : undefined"
          @click="onNavClick(link.href)"
        >
          {{ link.label }}
          <span
            v-if="isActive(link.href)"
            class="absolute -bottom-1.5 left-0 right-0 h-px rounded-full"
            style="background: linear-gradient(90deg, #c4b5fd, #c4b5fd, #93c5fd);"
            aria-hidden="true"
          />
        </NuxtLink>
      </div>

      <!-- Desktop CTA -->
      <NuxtLink
        v-if="!isLanding"
        to="/#contatti"
        class="hidden md:inline-flex items-center px-5 py-2.5 rounded-xl text-sm font-semibold text-white border transition-all duration-200 hover:bg-violet-400/10 hover:border-violet-300/60"
        style="border-color: rgba(196, 181, 253, 0.36);"
        @click="onNavClick('/#contatti')"
      >
        Analizziamo un processo
      </NuxtLink>

      <!-- Mobile hamburger -->
      <button
        v-if="!isLanding"
        class="md:hidden p-2 text-[#8a8a9a] hover:text-white transition-colors rounded-lg"
        :aria-expanded="isMobileMenuOpen"
        aria-label="Apri menu di navigazione"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
      >
        <svg v-if="!isMobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile dropdown -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-3"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-3"
    >
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden glass-nav border-t px-6 py-5 flex flex-col gap-2"
        style="border-color: rgba(255,255,255,0.05);"
      >
        <NuxtLink
          v-for="link in navLinks"
          :key="link.href"
          :to="link.href"
          class="py-2.5 text-sm font-medium transition-colors hover:text-white"
          :class="isActive(link.href) ? 'text-white' : 'text-[#8a8a9a]'"
          :aria-current="isActive(link.href) ? (link.href.startsWith('/#') ? 'location' : 'page') : undefined"
          @click="onNavClick(link.href)"
        >
          {{ link.label }}
        </NuxtLink>
        <NuxtLink
          to="/#contatti"
          class="mt-3 py-3 rounded-xl text-sm font-semibold text-white border text-center hover:bg-cyan-500/10 transition-all duration-200"
          style="border-color: rgba(196, 181, 253, 0.36);"
          @click="onNavClick('/#contatti')"
        >
          Analizziamo un processo
        </NuxtLink>
      </div>
    </Transition>
  </nav>
</template>
