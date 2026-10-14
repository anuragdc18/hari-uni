"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Subtle vertical parallax for media. Moves the inner element by `amount` px across the
 * element's scroll journey. No-op under prefers-reduced-motion.
 */
export function Parallax({ children, amount = 60, className, innerClassName }: { children: ReactNode; amount?: number; className?: string; innerClassName?: string }) {
  const outer = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion() || !outer.current || !inner.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        inner.current,
        { yPercent: -amount / 10 },
        {
          yPercent: amount / 10,
          ease: "none",
          scrollTrigger: { trigger: outer.current, start: "top bottom", end: "bottom top", scrub: 0.6 },
        },
      );
    }, outer);
    return () => ctx.revert();
  }, [amount]);

  return (
    <div ref={outer} className={className}>
      <div ref={inner} className={innerClassName} style={{ willChange: "transform" }}>
        {children}
      </div>
    </div>
  );
}

/**
 * Clip-path mask reveal for images: the media is revealed from a thin slit as it scrolls into view,
 * with a gentle scale settle. Falls back to a static image for reduced motion.
 */
export function MaskReveal({ children, className, direction = "up" }: { children: ReactNode; className?: string; direction?: "up" | "left" }) {
  const ref = useRef<HTMLDivElement>(null);
  const media = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion() || !ref.current || !media.current) return;
    const from = direction === "up" ? "inset(100% 0% 0% 0%)" : "inset(0% 100% 0% 0%)";
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ scrollTrigger: { trigger: ref.current, start: "top 85%", once: true } });
      tl.fromTo(ref.current, { clipPath: from }, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.2, ease: "power4.out" })
        .fromTo(media.current, { scale: 1.18 }, { scale: 1, duration: 1.6, ease: "power3.out" }, 0);
    }, ref);
    return () => ctx.revert();
  }, [direction]);

  return (
    <div ref={ref} className={className} style={{ clipPath: "inset(0 0 0 0)" }}>
      <div ref={media} className="h-full w-full" style={{ willChange: "transform" }}>
        {children}
      </div>
    </div>
  );
}

/**
 * Pins a section while its children (horizontal track) scroll sideways.
 * Used for the "schools" storytelling panel on the home page. Reduced-motion and small
 * screens get a normal horizontally scrollable/stacked layout.
 */
export function PinnedHorizontal({ children, className, trackClassName }: { children: ReactNode; className?: string; trackClassName?: string }) {
  const section = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion() || !section.current || !track.current) return;
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      const el = track.current!;
      const getDistance = () => el.scrollWidth - el.clientWidth;
      const tween = gsap.to(el, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: section.current,
          start: "top top",
          end: () => `+=${getDistance()}`,
          pin: true,
          scrub: 0.8,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
      return () => tween.scrollTrigger?.kill();
    });
    return () => mm.revert();
  }, []);

  return (
    <div ref={section} className={className}>
      <div ref={track} className={trackClassName}>
        {children}
      </div>
    </div>
  );
}
