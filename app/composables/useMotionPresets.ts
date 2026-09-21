const spring = { type: 'spring' as const, stiffness: 380, damping: 26 }

/** Hover lift shared by every card, for cards that animate in elsewhere. */
export const cardHover = {
  whileHover: {
    y: -6,
    scale: 1.015,
    borderColor: 'rgba(139,92,246,0.45)',
    boxShadow: '0 24px 64px rgba(139,92,246,0.18)',
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
