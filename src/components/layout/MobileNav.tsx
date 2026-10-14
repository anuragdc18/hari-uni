"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { navigation, utilityLinks, contact } from "@/content/site";
import { cn, isExternal } from "@/lib/utils";
import { Logo } from "./Logo";
import { ArrowIcon } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";

/** Full-screen mobile navigation drawer with accordion groups, focus trap and scroll lock. */
export function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  const reduce = useReducedMotion();
  const panel = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState<string | null>(navigation[0].label);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const first = panel.current?.querySelector<HTMLElement>("a, button");
    first?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab" && panel.current) {
        const focusables = panel.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])');
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-navigation"
          ref={panel}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduce ? undefined : { opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[60] flex flex-col bg-ink-950 text-white xl:hidden"
        >
          <div className="container-x flex h-[var(--header-height)] items-center justify-between">
            <Logo tone="light" compact />
            <button type="button" onClick={onClose} aria-label="Close menu" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30">
              <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" aria-hidden="true">
                <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <motion.nav
            aria-label="Mobile primary"
            className="container-x flex-1 overflow-y-auto pb-10 pt-2"
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: reduce ? 0 : 0.05, delayChildren: 0.1 } } }}
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
              <Link href="/" onClick={onClose} className="block border-b border-white/10 py-4 font-display text-2xl">
                Home
              </Link>
            </motion.div>
            {navigation.map((group) => {
              const isOpen = expanded === group.label;
              return (
                <motion.div key={group.label} variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="border-b border-white/10">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setExpanded(isOpen ? null : group.label)}
                    className="flex w-full items-center justify-between py-4 text-left font-display text-2xl"
                  >
                    {group.label}
                    <svg viewBox="0 0 16 16" className={cn("h-4 w-4 transition-transform duration-300", isOpen && "rotate-45")} fill="none" aria-hidden="true">
                      <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.ul
                        initial={reduce ? false : { height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={reduce ? undefined : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        {group.links.map((link) => {
                          const ext = link.external || isExternal(link.href);
                          const cls = "flex items-center justify-between py-3 pl-4 text-base text-sand-100/90 hover:text-white";
                          return (
                            <li key={link.href} className="border-t border-white/5">
                              {ext ? (
                                <a href={link.href} target="_blank" rel="noopener noreferrer" className={cls}>
                                  <span className="flex items-center gap-3"><Icon name={(link.icon as IconName) ?? "arrow"} className="h-4 w-4 text-gold-500" />{link.label}</span>
                                  <span className="text-xs text-white/40">↗</span>
                                </a>
                              ) : (
                                <Link href={link.href} onClick={onClose} className={cls}>
                                  <span className="flex items-center gap-3"><Icon name={(link.icon as IconName) ?? "arrow"} className="h-4 w-4 text-gold-500" />{link.label}</span>
                                  <ArrowIcon className="text-white/40" />
                                </Link>
                              )}
                            </li>
                          );
                        })}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
            <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="mt-8 flex flex-col gap-3">
              <Link href={utilityLinks.apply.href} onClick={onClose} className="btn btn-primary">
                {utilityLinks.apply.label} <ArrowIcon className="btn-arrow" />
              </Link>
              <Link href={utilityLinks.contact.href} onClick={onClose} className="btn btn-outline-light">
                {utilityLinks.contact.label}
              </Link>
              <a href={`mailto:${contact.email}`} className="mt-4 text-sm text-sand-200/70">
                {contact.email}
              </a>
            </motion.div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
