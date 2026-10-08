"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const reducedMotion = useReducedMotion();

  return (
    <div className="relative min-h-[calc(100vh-56px)] overflow-x-hidden bg-[#eceae2] [perspective:2200px]">
      <motion.article
        key={pathname}
        className="paper paper-edge relative min-h-[calc(100vh-56px)] origin-left [backface-visibility:hidden] [transform-style:preserve-3d]"
        initial={
          reducedMotion
            ? { opacity: 0 }
            : {
                opacity: 0.1,
                rotateY: -55,
                scale: 0.985,
                boxShadow: "-25px 0 45px rgba(0, 0, 0, 0.28)",
              }
        }
        animate={
          reducedMotion
            ? { opacity: 1 }
            : {
                opacity: 1,
                rotateY: 0,
                scale: 1,
                boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
              }
        }
        transition={
          reducedMotion
            ? { duration: 0.15 }
            : {
                duration: 0.58,
                ease: [0.22, 1, 0.36, 1],
              }
        }
      >
        {/* Tactile page crease shadow that fades out as the paper turns open */}
        {!reducedMotion && (
          <motion.div
            key={`spine-shadow-${pathname}`}
            className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-r from-black/25 via-black/5 to-transparent"
            initial={{ opacity: 0.7 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          />
        )}
        {children}
      </motion.article>
    </div>
  );
}
