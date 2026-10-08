"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  /** Delay in seconds before the animation starts */
  delay?: number;
  /** Direction from which the element enters */
  direction?: "up" | "down" | "left" | "right" | "none";
  /** Distance in pixels the element moves during animation */
  distance?: number;
};

const directionOffsets = {
  up: { y: 1, x: 0 },
  down: { y: -1, x: 0 },
  left: { x: 1, y: 0 },
  right: { x: -1, y: 0 },
  none: { x: 0, y: 0 },
};

export function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 40,
}: AnimatedSectionProps) {
  const reducedMotion = useReducedMotion();

  const offset = directionOffsets[direction];

  const variants = reducedMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }
    : {
        hidden: {
          opacity: 0,
          x: offset.x * distance,
          y: offset.y * distance,
          filter: "blur(6px)",
        },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          filter: "blur(0px)",
        },
      };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={
        reducedMotion
          ? { duration: 0.15 }
          : {
              duration: 0.7,
              delay,
              ease: [0.25, 0.46, 0.45, 0.94],
            }
      }
    >
      {children}
    </motion.div>
  );
}

/**
 * Staggered container for child animations
 */
export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.1,
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      transition={
        reducedMotion
          ? { duration: 0.15 }
          : { staggerChildren: staggerDelay }
      }
    >
      {children}
    </motion.div>
  );
}

/**
 * Child item for use inside StaggerContainer
 */
export function StaggerItem({
  children,
  className = "",
  direction = "up",
  distance = 30,
}: {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
}) {
  const reducedMotion = useReducedMotion();
  const offset = directionOffsets[direction];

  const variants = reducedMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }
    : {
        hidden: {
          opacity: 0,
          x: offset.x * distance,
          y: offset.y * distance,
        },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
        },
      };

  return (
    <motion.div
      className={className}
      variants={variants}
      transition={
        reducedMotion
          ? { duration: 0.15 }
          : { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }
      }
    >
      {children}
    </motion.div>
  );
}
