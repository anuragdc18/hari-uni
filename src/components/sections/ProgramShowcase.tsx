"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { Picture } from "@/components/ui/Picture";
import { ArrowIcon } from "@/components/ui/Button";
import { Numeral } from "@/components/ui/Typography";
import type { Program } from "@/content/programs";
import { cn } from "@/lib/utils";

/**
 * Editorial programme index: an interactive list on the left, the active programme's photograph
 * on the right. Keyboard users can focus each row; pointer users hover.
 */
export function ProgramShowcase({ programs }: { programs: Program[] }) {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const current = programs[active];

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
      <ul className="lg:col-span-7" role="list">
        {programs.map((p, i) => (
          <li key={p.slug} className="border-t border-sand-300 last:border-b">
            <Link
              href={`/programs/${p.slug}`}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              className={cn("group grid gap-2 py-6 transition-colors sm:grid-cols-[3rem_1fr_auto] sm:items-start sm:gap-6", active === i && "bg-transparent")}
            >
              <Numeral className="pt-2">{String(i + 1).padStart(2, "0")}</Numeral>
              <div>
                <h3 className={cn("font-display text-2xl leading-snug transition-colors lg:text-[1.75rem]", active === i ? "text-terracotta-700" : "text-ink-950")}>{p.name}</h3>
                <p className="mt-2 max-w-xl text-stone-600">{p.summary}</p>
                <p className="mt-2 text-sm text-stone-500">
                  {p.school} · {p.duration} · {p.status}
                </p>
              </div>
              <span className={cn("mt-2 hidden h-11 w-11 items-center justify-center rounded-full border transition-all sm:flex", active === i ? "border-terracotta-600 bg-terracotta-600 text-white" : "border-sand-300 text-stone-500")}>
                <ArrowIcon />
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="relative hidden lg:col-span-5 lg:block">
        <div className="sticky top-32 aspect-[4/5] overflow-hidden rounded-3xl bg-sand-200">
          <AnimatePresence mode="sync" initial={false}>
            <motion.div
              key={current.slug}
              initial={reduce ? false : { opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduce ? undefined : { opacity: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              <Picture src={current.image} alt={`${current.name} at HARI`} className="h-full w-full" sizes="40vw" />
            </motion.div>
          </AnimatePresence>
          <div aria-hidden="true" className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950/85 to-transparent p-8 pt-20 text-white">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-500">{current.school}</span>
            <p className="mt-2 font-display text-2xl">{current.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
