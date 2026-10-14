"use client";

import { motion, type Variants } from "framer-motion";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { createElement, type ComponentPropsWithoutRef, type ElementType, type ReactNode } from "react";

const MOTION = {
  div: motion.div, section: motion.section, article: motion.article, li: motion.li, ul: motion.ul, p: motion.p, figure: motion.figure, span: motion.span, header: motion.header, aside: motion.aside,
} as const;
type MotionTag = keyof typeof MOTION;
const pick = (as: ElementType) => (typeof as === "string" && as in MOTION ? MOTION[as as MotionTag] : motion.div) as typeof motion.div;

type Direction = "up" | "down" | "left" | "right" | "none";

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: Direction;
  distance?: number;
  once?: boolean;
  amount?: number;
  blur?: boolean;
}

const offset = (direction: Direction, distance: number) => {
  switch (direction) {
    case "up": return { y: distance };
    case "down": return { y: -distance };
    case "left": return { x: distance };
    case "right": return { x: -distance };
    default: return {};
  }
};

/**
 * Fade/slide-in on scroll. Renders static content when the user prefers reduced motion,
 * so every page is fully readable with animation disabled.
 */
export function Reveal({
  children,
  as = "div",
  className,
  delay = 0,
  duration = 0.8,
  direction = "up",
  distance = 28,
  once = true,
  amount = 0.25,
  blur = false,
}: RevealProps) {
  const reduce = useReducedMotion();
  if (reduce) return createElement(as, { className }, children);
  const variants: Variants = {
    hidden: { opacity: 0, filter: blur ? "blur(8px)" : "blur(0px)", ...offset(direction, distance) },
    visible: { opacity: 1, x: 0, y: 0, filter: "blur(0px)", transition: { duration, delay, ease: [0.16, 1, 0.3, 1] } },
  };
  return createElement(pick(as), { className, initial: "hidden", whileInView: "visible", viewport: { once, amount }, variants }, children);
}

interface StaggerProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  stagger?: number;
  delay?: number;
  amount?: number;
}

/** Container that staggers its <StaggerItem> children into view. */
export function Stagger({ children, className, stagger = 0.09, delay = 0, amount = 0.15 }: StaggerProps) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className, as = "div" }: { children: ReactNode; className?: string; as?: ElementType }) {
  const reduce = useReducedMotion();
  if (reduce) return createElement(as, { className }, children);
  return createElement(
    pick(as),
    { className, variants: { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } } } },
    children,
  );
}
