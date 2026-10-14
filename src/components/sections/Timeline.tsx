"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export interface TimelineItem {
  label: string;
  text: string;
  date?: string;
}

/**
 * Animated vertical timeline: the spine draws itself as the user scrolls and each
 * milestone fades in. Static (fully visible) under prefers-reduced-motion.
 */
export function Timeline({ items, className, tone = "light" }: { items: TimelineItem[]; className?: string; tone?: "light" | "dark" }) {
  const root = useRef<HTMLOListElement>(null);
  const line = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!root.current || !line.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(line.current, { scaleY: 0 }, { scaleY: 1, ease: "none", scrollTrigger: { trigger: root.current, start: "top 75%", end: "bottom 65%", scrub: 0.5 } });
      gsap.utils.toArray<HTMLElement>("[data-milestone]").forEach((el) => {
        gsap.fromTo(el, { opacity: 0, x: -16 }, { opacity: 1, x: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 80%", once: true } });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <ol ref={root} className={cn("relative ml-3 border-l border-transparent pl-10 lg:ml-6 lg:pl-14", className)}>
      <span aria-hidden="true" className={cn("absolute -left-px top-0 h-full w-px", tone === "light" ? "bg-sand-300" : "bg-white/15")} />
      <span ref={line} aria-hidden="true" className={cn("absolute -left-px top-0 h-full w-px origin-top", tone === "light" ? "bg-terracotta-500" : "bg-gold-500")} />
      {items.map((item, i) => (
        <li key={item.label + i} data-milestone className="relative pb-12 last:pb-0">
          <span aria-hidden="true" className={cn("absolute -left-10 top-1.5 flex h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full border-2 lg:-left-14", tone === "light" ? "border-terracotta-500 bg-sand-50" : "border-gold-500 bg-ink-950")}>
            <span className={cn("h-1.5 w-1.5 rounded-full", tone === "light" ? "bg-terracotta-500" : "bg-gold-500")} />
          </span>
          {item.date && <span className={cn("text-xs font-semibold uppercase tracking-[0.16em]", tone === "light" ? "text-terracotta-600" : "text-gold-500")}>{item.date}</span>}
          <h3 className={cn("font-display text-xl lg:text-2xl", item.date && "mt-2", tone === "dark" && "!text-white")}>{item.label}</h3>
          <p className={cn("mt-3 max-w-2xl leading-relaxed", tone === "light" ? "text-stone-600" : "text-sand-100/80")}>{item.text}</p>
        </li>
      ))}
    </ol>
  );
}
