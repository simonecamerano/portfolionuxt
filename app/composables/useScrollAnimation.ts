export function useScrollAnimation() {
  let observer: IntersectionObserver | null = null

  const initObserver = () => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer?.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -48px 0px' },
    )

    document.querySelectorAll('.reveal').forEach((el) => observer?.observe(el))
  }

  onMounted(initObserver)
  onUnmounted(() => observer?.disconnect())
}
