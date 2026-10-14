"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { Picture } from "@/components/ui/Picture";
import { ArrowIcon } from "@/components/ui/Button";
import { homePage } from "@/content/home";

const KEY = "hari-orientation-2026-dismissed";

/**
 * Orientation Day 2026 invitation (migrated from the legacy home-page popup) rendered as a
 * non-blocking, dismissible panel. Dismissal is remembered for the session.
 */
export function OrientationPopup() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const data = homePage.orientationPopup;

  useEffect(() => {
    let dismissed = false;
    try {
      dismissed = sessionStorage.getItem(KEY) === "1";
    } catch {
      dismissed = false;
    }
    if (dismissed) return;
    const t = window.setTimeout(() => setOpen(true), 2600);
    return () => window.clearTimeout(t);
  }, []);

  const dismiss = () => {
    setOpen(false);
    try {
      sessionStorage.setItem(KEY, "1");
    } catch {
      /* storage unavailable */
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.aside
          role="dialog"
          aria-labelledby="orientation-popup-title"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? undefined : { opacity: 0, y: 24 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-20 left-3 right-16 z-40 overflow-hidden rounded-2xl border border-sand-300 bg-white shadow-lift sm:left-auto sm:right-6 sm:w-[26rem] lg:bottom-24 lg:right-8"
        >
          <div className="flex gap-4 p-4">
            <Picture src={data.image} alt={data.imageAlt} className="hidden w-24 shrink-0 rounded-lg sm:block" ratio="aspect-[2/3]" sizes="96px" />
            <div className="min-w-0 flex-1">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-terracotta-600">{data.eyebrow}</p>
              <h2 id="orientation-popup-title" className="mt-1 font-display text-xl leading-tight">
                {data.title}
              </h2>
              <p className="mt-1.5 text-sm text-stone-600">{data.text}</p>
              <ul className="mt-2 space-y-0.5 text-xs text-stone-500">
                {data.facts.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <div className="mt-3 flex items-center gap-4">
                <Link href={data.link.href} onClick={dismiss} className="link-arrow text-sm">
                  {data.link.label} <ArrowIcon />
                </Link>
              </div>
            </div>
          </div>
          <button type="button" onClick={dismiss} aria-label="Close" className="absolute right-2 top-2 flex h-9 w-9 items-center justify-center rounded-full text-stone-500 hover:bg-sand-100 hover:text-ink-900">
            <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" aria-hidden="true">
              <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
