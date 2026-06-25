"use client";

import type { ComponentProps } from "react";
import { motion } from "motion/react";
import { fadeUp, inView, staggerContainer } from "@/lib/motion";

/**
 * Stagger — a parent that releases its children in sequence as it enters view
 * ("evidence assembling"). Pair with <StaggerItem> children.
 */
export function Stagger({
  stagger = 0.08,
  delayChildren = 0,
  ...props
}: ComponentProps<typeof motion.div> & {
  stagger?: number;
  delayChildren?: number;
}) {
  return (
    <motion.div
      variants={staggerContainer(stagger, delayChildren)}
      initial="hidden"
      whileInView="visible"
      viewport={inView}
      {...props}
    />
  );
}

export function StaggerItem(props: ComponentProps<typeof motion.div>) {
  return <motion.div variants={fadeUp} {...props} />;
}
