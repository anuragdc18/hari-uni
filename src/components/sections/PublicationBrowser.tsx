"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { PublicationCard } from "./Cards";
import { publications, publicationThemes, type PublicationTheme } from "@/content/publications";
import { cn } from "@/lib/utils";

/** Theme filter + grouped bibliography of the 21 selected studies. */
export function PublicationBrowser() {
  const [theme, setTheme] = useState<PublicationTheme | "All">("All");
  const reduce = useReducedMotion();
  const visible = theme === "All" ? publications : publications.filter((p) => p.theme === theme);
  const groups = (theme === "All" ? publicationThemes : [theme]).map((t) => ({ theme: t, items: publications.filter((p) => p.theme === t) }));

  return (
    <div>
      <div role="group" aria-label="Filter publications by theme" className="flex flex-wrap gap-2">
        {(["All", ...publicationThemes] as const).map((t) => {
          const count = t === "All" ? publications.length : publications.filter((p) => p.theme === t).length;
          return (
            <button key={t} type="button" aria-pressed={theme === t} onClick={() => setTheme(t)} className={cn("rounded-full border px-4 py-2 text-sm font-semibold transition-colors", theme === t ? "border-ink-900 bg-ink-900 text-white" : "border-sand-300 bg-white text-stone-700 hover:border-ink-900 hover:text-ink-900")}>
              {t} <span className={cn("ml-1 text-xs", theme === t ? "text-gold-500" : "text-stone-500")}>{count}</span>
            </button>
          );
        })}
      </div>
      <p className="mt-4 text-sm text-stone-500" aria-live="polite">Showing {visible.length} of {publications.length}</p>
      <div className="mt-10 space-y-16">
        <AnimatePresence mode="popLayout" initial={false}>
          {groups.map((g) => (
            <motion.section key={g.theme} layout initial={reduce ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={reduce ? undefined : { opacity: 0 }} transition={{ duration: 0.4 }}>
              <header className="flex items-baseline justify-between border-b border-sand-300 pb-4">
                <h2 className="font-display text-2xl lg:text-3xl">{g.theme}</h2>
                <span className="text-sm text-stone-500">{g.items.length} {g.items.length === 1 ? "study" : "studies"}</span>
              </header>
              <ul className="mt-8 grid gap-6 md:grid-cols-2">
                {g.items.map((p) => (
                  <li key={p.id}><PublicationCard pub={p} /></li>
                ))}
              </ul>
            </motion.section>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
