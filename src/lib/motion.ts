import type { Variants, Transition } from "motion/react";

/**
 * Motion tokens — the design system's motion vocabulary.
 * One easing curve (expo ease-out). Motion explains relationships; it never
 * decorates. Durations and variants below are the only sanctioned values.
 */

export const duration = {
  fast: 0.15,
  base: 0.25,
  slow: 0.4,
  deliberate: 0.6,
} as const;

export const ease = {
  outExpo: [0.16, 1, 0.3, 1] as [number, number, number, number],
  outSoft: [0.33, 1, 0.68, 1] as [number, number, number, number],
};

export const transition: Transition = {
  duration: duration.slow,
  ease: ease.outExpo,
};

/**
 * The default entrance — opacity-led, with a barely-there rise. Restraint is
 * the point: motion signals intent, it is not the decoration. Use sparingly
 * (a section's first element), never on every block.
 */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 6 },
  visible: { opacity: 1, y: 0, transition },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition },
};

/** Parent that releases its children in sequence (evidence assembling). */
export const staggerContainer = (
  stagger = 0.08,
  delayChildren = 0,
): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: stagger, delayChildren } },
});

/** Shared viewport config so every reveal triggers at the same threshold. */
export const inView = { once: true, margin: "-80px" } as const;
