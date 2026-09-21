<script setup lang="ts">
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const navLinks = [
  { label: 'Home', href: '/#hero' },
  { label: 'Chi sono', href: '/#about' },
  { label: 'Progetti', href: '/#progetti' },
  { label: 'Servizi', href: '/servizi' },
  { label: 'Contatti', href: '/#contatti' },
]

const route = useRoute()
const activeSection = ref('')
const sectionIds = navLinks
  .filter((l) => l.href.startsWith('/#'))
  .map((l) => l.href.slice(2))

// Picks the section closest to a line at 40% of the viewport, counting only
// those that have already crossed it. Measuring instead of following DOM order
// matters: the menu lists Progetti before Chi sono, the page renders them the
// other way round.
const updateActiveSection = () => {
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
  isScrolled.value = window.scrollY > 20
  updateActiveSection()
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
onUnmounted(() => window.removeEventListener('scroll', handleScroll))

watch(() => route.fullPath, () => nextTick(updateActiveSection))

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>

<template>
  <nav
    class="fixed inset-x-0 top-0 z-[100] w-full border-b border-transparent transition-[background-color,backdrop-filter,border-color] duration-300"
    :class="isScrolled ? 'glass-nav' : 'bg-transparent'"
    aria-label="Navigazione principale"
  >
    <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <!-- Logo -->
      <NuxtLink
        to="/"
        class="text-2xl font-black text-gradient tracking-tight"
        aria-label="Simone Camerano — torna alla homepage"
      >
        SC
      </NuxtLink>

      <!-- Desktop links -->
      <div class="hidden md:flex items-center gap-8">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.href"
          :to="link.href"
          class="relative text-sm font-medium transition-colors duration-200 hover:text-white"
          :class="isActive(link.href) ? 'text-white' : 'text-[#8a8a9a]'"
          :aria-current="isActive(link.href) ? (link.href.startsWith('/#') ? 'location' : 'page') : undefined"
        >
          {{ link.label }}
          <span
            v-if="isActive(link.href)"
            class="absolute -bottom-1.5 left-0 right-0 h-px rounded-full"
            style="background: linear-gradient(90deg, #3b82f6, #8b5cf6);"
            aria-hidden="true"
          />
        </NuxtLink>
      </div>

      <!-- Desktop CTA -->
      <NuxtLink
        to="/#contatti"
        class="hidden md:inline-flex items-center px-5 py-2.5 rounded-xl text-sm font-semibold text-white border transition-all duration-200 hover:bg-purple-500/10 hover:border-purple-400/60"
        style="border-color: rgba(139, 92, 246, 0.4);"
      >
        Parliamo
      </NuxtLink>

      <!-- Mobile hamburger -->
      <button
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
          @click="closeMobileMenu"
        >
          {{ link.label }}
        </NuxtLink>
        <NuxtLink
          to="/#contatti"
          class="mt-3 py-3 rounded-xl text-sm font-semibold text-white border text-center hover:bg-purple-500/10 transition-all duration-200"
          style="border-color: rgba(139, 92, 246, 0.4);"
          @click="closeMobileMenu"
        >
          Parliamo
        </NuxtLink>
      </div>
    </Transition>
  </nav>
</template>
