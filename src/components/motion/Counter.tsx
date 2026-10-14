"use client";

import { useInView } from "framer-motion";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { useEffect, useRef, useState } from "react";

/**
 * Animated statistic. Parses the leading number in strings like "150,000", "54,680 sq ft",
 * "50%+", "75 yrs" and counts up to it; non-numeric values ("IGBC Platinum") render as-is.
 */
export function Counter({ value, className, duration = 1.6 }: { value: string; className?: string; duration?: number }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const match = value.match(/^([^\d]*)([\d,]+(?:\.\d+)?)(.*)$/);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!match || reduce || !inView) return;
    const [, prefix, numeric, suffix] = match;
    const hasComma = numeric.includes(",");
    const decimals = (numeric.split(".")[1] || "").length;
    const target = parseFloat(numeric.replace(/,/g, ""));
    if (!Number.isFinite(target)) return;
    let frame = 0;
    const start = performance.now();
    const fmt = (n: number) => {
      const fixed = n.toFixed(decimals);
      return hasComma ? Number(fixed).toLocaleString("en-IN", { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) : fixed;
    };
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - t, 4);
      setDisplay(`${prefix}${fmt(target * eased)}${suffix}`);
      if (t < 1) frame = requestAnimationFrame(tick);
      else setDisplay(value);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduce, value]);

  return (
    <span ref={ref} className={className} aria-label={value}>
      <span aria-hidden="true">{match && !reduce ? display : value}</span>
    </span>
  );
}
