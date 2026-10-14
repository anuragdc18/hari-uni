"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { img } from "@/assets/registry";
import { Picture } from "@/components/ui/Picture";
import { Numeral } from "@/components/ui/Typography";
import { ArrowIcon } from "@/components/ui/Button";
import { PinnedHorizontal } from "@/components/motion/Parallax";
import { schools } from "@/content/academics";
import { homePage } from "@/content/home";
import { cn } from "@/lib/utils";

/** Pinned horizontal story of the four schools (desktop), stacked cards on smaller screens. */
export function SchoolsPanels() {
  return (
    <PinnedHorizontal className="lg:h-screen lg:overflow-hidden" trackClassName="grid gap-6 lg:flex lg:h-full lg:w-max lg:items-stretch lg:gap-8 lg:px-[max(3rem,calc((100vw-90rem)/2+3rem))] lg:py-24">
      {schools.map((school, i) => (
        <article key={school.slug} className="group relative flex flex-col overflow-hidden rounded-3xl bg-ink-900 text-white lg:w-[min(36rem,70vw)] lg:shrink-0">
          <div className="relative aspect-[4/3] overflow-hidden lg:aspect-auto lg:flex-1">
            <Picture src={img[school.homeImage]} alt={`${school.name} at HARI`} className="h-full w-full" imgClassName="transition-transform duration-[1200ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-105" sizes="(min-width: 1024px) 36rem, 100vw" />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/20 to-transparent" />
            <span className="absolute left-6 top-6 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] backdrop-blur">School</span>
          </div>
          <div className="relative p-7 lg:p-9">
            <Numeral tone="light">{school.number}</Numeral>
            <h3 className="mt-3 font-display text-2xl !text-white lg:text-3xl">{school.shortName}</h3>
            <p className="mt-3 text-sand-100/80">{school.homeSummary}</p>
            <Link href="/academics" className="link-arrow mt-6 text-sm !text-gold-500">
              Explore the school <ArrowIcon />
            </Link>
          </div>
          <span className="sr-only">{i + 1} of {schools.length}</span>
        </article>
      ))}
    </PinnedHorizontal>
  );
}

/** Accessible tab set: Science / Innovation / Community. */
export function LifeTabs() {
  const tabs = homePage.schools.tabs;
  const [active, setActive] = useState(0);
  const id = useId();
  const reduce = useReducedMotion();

  const onKey = (e: React.KeyboardEvent, i: number) => {
    const n = tabs.length;
    let next = i;
    if (e.key === "ArrowRight") next = (i + 1) % n;
    else if (e.key === "ArrowLeft") next = (i - 1 + n) % n;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = n - 1;
    else return;
    e.preventDefault();
    setActive(next);
    document.getElementById(`${id}-tab-${next}`)?.focus();
  };

  return (
    <div>
      <div role="tablist" aria-label="Life at HARI" className="flex flex-wrap gap-2">
        {tabs.map((t, i) => (
          <button
            key={t.label}
            id={`${id}-tab-${i}`}
            role="tab"
            type="button"
            aria-selected={active === i}
            aria-controls={`${id}-panel-${i}`}
            tabIndex={active === i ? 0 : -1}
            onClick={() => setActive(i)}
            onKeyDown={(e) => onKey(e, i)}
            className={cn(
              "rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors",
              active === i ? "border-ink-900 bg-ink-900 text-white" : "border-sand-300 bg-white text-stone-700 hover:border-ink-900 hover:text-ink-900",
            )}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="relative mt-8">
        <AnimatePresence mode="wait" initial={false}>
          {tabs.map(
            (t, i) =>
              active === i && (
                <motion.div
                  key={t.label}
                  id={`${id}-panel-${i}`}
                  role="tabpanel"
                  aria-labelledby={`${id}-tab-${i}`}
                  initial={reduce ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? undefined : { opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="grid gap-8 md:grid-cols-2"
                >
                  {t.items.map((item) => (
                    <figure key={item.alt} className="card overflow-hidden">
                      <Picture src={item.image} alt={item.alt} ratio="aspect-[4/3]" sizes="(min-width: 768px) 50vw, 100vw" />
                      <figcaption className="p-6 leading-relaxed text-stone-700">{item.text}</figcaption>
                    </figure>
                  ))}
                </motion.div>
              ),
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
