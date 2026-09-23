const spring = { type: 'spring' as const, stiffness: 380, damping: 26 }

/** Editorial entrances keep the page moving in a single, quiet rhythm. */
export const editorialReveal = (delay = 0, direction: 'up' | 'left' | 'right' = 'up') => {
  const offset = direction === 'up' ? { x: 0, y: 28 } : { x: direction === 'left' ? -28 : 28, y: 0 }

  return {
    initial: { opacity: 0, ...offset },
    whileInView: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.62, delay, ease: 'easeOut' as const },
    },
    inViewOptions: { once: true, amount: 0.2 },
  }
}

export const editorialStagger = (index: number, direction: 'up' | 'left' | 'right' = 'up') =>
  editorialReveal(Math.min(index * 0.075, 0.45), direction)

/** Hover lift shared by every card, for cards that animate in elsewhere. */
export const cardHover = {
  whileHover: {
    y: -6,
    scale: 1.015,
    borderColor: 'rgba(34,211,238,0.38)',
    boxShadow: '0 24px 64px rgba(14,165,233,0.13)',
    transition: spring,
  },
  whilePress: { scale: 0.99, transition: spring },
}

/**
 * Card grids: scroll-in entry plus the hover lift in one binding. Each variant
 * carries its own transition, so the spring feel never leaks into the entry.
 */
export const cardMotion = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay, ease: 'easeOut' as const },
  },
  inViewOptions: { once: true },
  ...cardHover,
})

/** Buttons and links: same spring feel, without the lift. */
export const buttonMotion = {
  whileHover: { y: -3, scale: 1.03 },
  whilePress: { scale: 0.97 },
  transition: spring,
}
