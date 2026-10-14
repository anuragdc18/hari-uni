"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { createElement, type ElementType } from "react";

interface TextRevealProps {
  text: string;
  as?: ElementType;
  className?: string;
  delay?: number;
  /** Animate on mount instead of on scroll (for heroes). */
  immediate?: boolean;
  stagger?: number;
}

/**
 * Word-by-word heading reveal. Each word slides up from behind a clip mask.
 * Screen readers get the plain string via aria-label; visual words are aria-hidden.
 */
export function TextReveal({ text, as = "h2", className, delay = 0, immediate = false, stagger = 0.045 }: TextRevealProps) {
  const reduce = useReducedMotion();
  const Tag = as as "h2";
  if (reduce) return createElement(as, { className }, text);

  const words = text.split(" ");
  const animate = immediate ? { animate: "visible" as const } : { whileInView: "visible" as const, viewport: { once: true, amount: 0.6 } };

  return (
    <Tag className={className} aria-label={text}>
      <motion.span
        aria-hidden="true"
        className="inline"
        initial="hidden"
        {...animate}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
      >
        {words.map((word, i) => (
          <span key={`${word}-${i}`} className="inline-block overflow-hidden align-bottom pb-[0.08em] -mb-[0.08em]">
            <motion.span
              className="inline-block will-change-transform"
              variants={{
                hidden: { y: "110%", rotate: 2 },
                visible: { y: "0%", rotate: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
              }}
            >
              {word}
            </motion.span>
            {i < words.length - 1 ? " " : ""}
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
