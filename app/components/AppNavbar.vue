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

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  handleScroll()
  // passive: true tells the browser the handler never calls preventDefault(),
  // letting it start scrolling immediately without waiting for this callback.
  window.addEventListener('scroll', handleScroll, { passive: true })
})
onUnmounted(() => window.removeEventListener('scroll', handleScroll))

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
      <a
        href="/"
        class="text-2xl font-black text-gradient tracking-tight"
        aria-label="Simone Camerano — torna alla homepage"
      >
        SC
      </a>

      <!-- Desktop links -->
      <div class="hidden md:flex items-center gap-8">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="text-sm font-medium text-[#8a8a9a] hover:text-white transition-colors duration-200"
        >
          {{ link.label }}
        </a>
      </div>

      <!-- Desktop CTA -->
      <a
        href="/#contatti"
        class="hidden md:inline-flex items-center px-5 py-2.5 rounded-xl text-sm font-semibold text-white border transition-all duration-200 hover:bg-purple-500/10 hover:border-purple-400/60"
        style="border-color: rgba(139, 92, 246, 0.4);"
      >
        Parliamo
      </a>

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
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="py-2.5 text-sm font-medium text-[#8a8a9a] hover:text-white transition-colors"
          @click="closeMobileMenu"
        >
          {{ link.label }}
        </a>
        <a
          href="/#contatti"
          class="mt-3 py-3 rounded-xl text-sm font-semibold text-white border text-center hover:bg-purple-500/10 transition-all duration-200"
          style="border-color: rgba(139, 92, 246, 0.4);"
          @click="closeMobileMenu"
        >
          Parliamo
        </a>
      </div>
    </Transition>
  </nav>
</template>
