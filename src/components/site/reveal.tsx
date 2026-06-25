"use client";

import type { ComponentProps } from "react";
import { motion } from "motion/react";
import { fadeUp, inView } from "@/lib/motion";

/**
 * Reveal — fade + rise the first time an element scrolls into view.
 * The default entrance. Respects the system's one easing curve and threshold.
 */
export function Reveal({
  delay = 0,
  ...props
}: ComponentProps<typeof motion.div> & { delay?: number }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={inView}
      transition={{ delay }}
      {...props}
    />
  );
}
