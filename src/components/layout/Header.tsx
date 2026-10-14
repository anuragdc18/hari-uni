"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { navigation, utilityLinks, audienceLinks, contact, type NavGroup } from "@/content/site";
import { Icon, IconTile, type IconName } from "@/components/ui/Icon";
import { cn, isExternal } from "@/lib/utils";
import { Logo } from "./Logo";
import { ArrowIcon } from "@/components/ui/Button";
import { MobileNav } from "./MobileNav";

/**
 * Site header with an accessible mega menu.
 * - Transparent over dark cinematic heroes (sections marked data-header-tone="dark"), solid after scrolling.
 * - Mega menu opens on hover/focus for pointer users and on click/Enter for keyboard; Escape closes.
 */
export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [darkHero, setDarkHero] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<number | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* eslint-disable react-hooks/set-state-in-effect -- route change: close menus and read the rendered hero tone */
  useEffect(() => {
    setOpen(null);
    setMobileOpen(false);
    const tone = document.querySelector("[data-header-tone]")?.getAttribute("data-header-tone");
    setDarkHero(tone === "dark");
  }, [pathname]);
  /* eslint-enable react-hooks/set-state-in-effect */

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    const onClick = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) setOpen(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onClick);
    };
  }, []);

  const scheduleClose = useCallback(() => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpen(null), 160);
  }, []);
  const cancelClose = useCallback(() => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
  }, []);

  const transparent = darkHero && !scrolled && !open;
  const tone: "light" | "dark" = transparent ? "light" : "dark";

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink-900 focus:px-5 focus:py-3 focus:text-white">
        Skip to main content
      </a>
      <header
        ref={headerRef}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-500",
          transparent ? "bg-transparent" : "bg-white/90 shadow-[0_1px_0_rgba(8,25,42,0.06)] backdrop-blur-xl",
        )}
        onMouseLeave={scheduleClose}
        onMouseEnter={cancelClose}
      >
        <div className={cn("hidden border-b text-xs transition-colors lg:block", transparent ? "border-white/15 text-white/80" : "border-sand-200 bg-ink-950 text-sand-100/85")}>
          <div className="container-x flex h-9 items-center justify-between">
            <ul className="flex items-center gap-5">
              {audienceLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="flex items-center gap-1.5 font-medium transition-colors hover:text-gold-500">
                    <Icon name={l.icon as IconName} className="h-3.5 w-3.5" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="flex items-center gap-5">
              <li><a href={`tel:${contact.phones[0].tel}`} className="flex items-center gap-1.5 hover:text-gold-500"><Icon name="phone" className="h-3.5 w-3.5" />{contact.phones[0].display}</a></li>
              <li><a href={`mailto:${contact.email}`} className="flex items-center gap-1.5 hover:text-gold-500"><Icon name="mail" className="h-3.5 w-3.5" />{contact.email}</a></li>
              <li><a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-gold-500"><Icon name="whatsapp" className="h-3.5 w-3.5" />WhatsApp</a></li>
            </ul>
          </div>
        </div>
        <div className="container-x flex h-[var(--header-height)] items-center justify-between gap-4">
          <Logo tone={tone} />

          <nav ref={navRef} aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            <ul className="flex items-center gap-1">
              {navigation.map((group) => (
                <MegaItem
                  key={group.label}
                  group={group}
                  tone={tone}
                  isOpen={open === group.label}
                  active={pathname.startsWith(group.href) || group.links.some((l) => !l.external && pathname.startsWith(l.href))}
                  onOpen={() => {
                    cancelClose();
                    setOpen(group.label);
                  }}
                  onToggle={() => setOpen(open === group.label ? null : group.label)}
                  onClose={() => setOpen(null)}
                />
              ))}
            </ul>
            <div className="ml-4 flex items-center gap-3 border-l border-current/15 pl-5">
              <Link
                href={utilityLinks.contact.href}
                className={cn("text-sm font-semibold transition-colors", tone === "light" ? "text-white/85 hover:text-white" : "text-stone-700 hover:text-ink-900")}
              >
                {utilityLinks.contact.label}
              </Link>
              <Link href={utilityLinks.apply.href} className="btn btn-primary !min-h-11 !px-5 text-sm">
                {utilityLinks.apply.label}
                <ArrowIcon className="btn-arrow" />
              </Link>
            </div>
          </nav>

          <div className="flex items-center gap-2 lg:hidden">
            <Link href={utilityLinks.apply.href} className="btn btn-primary !min-h-10 !px-4 text-xs sm:text-sm" aria-label="Apply Now">
              Apply
            </Link>
            <button
              type="button"
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((v) => !v)}
              className={cn("flex h-11 w-11 items-center justify-center rounded-full border transition-colors", tone === "light" ? "border-white/40 text-white" : "border-sand-300 text-ink-900")}
            >
              <span className="relative block h-3.5 w-5">
                <span className={cn("absolute left-0 top-0 h-0.5 w-5 bg-current transition-transform duration-300", mobileOpen && "translate-y-1.5 rotate-45")} />
                <span className={cn("absolute left-0 top-1.5 h-0.5 w-5 bg-current transition-opacity duration-300", mobileOpen && "opacity-0")} />
                <span className={cn("absolute left-0 top-3 h-0.5 w-5 bg-current transition-transform duration-300", mobileOpen && "-translate-y-1.5 -rotate-45")} />
              </span>
            </button>
          </div>
        </div>

        {/* Mega menu panel */}
        <AnimatePresence>
          {open && (
            <motion.div
              key={open}
              initial={reduce ? false : { opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -6, transition: { duration: 0.18 } }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-x-0 top-full hidden border-t border-sand-200 bg-white/95 shadow-[0_30px_60px_-30px_rgba(8,25,42,0.35)] backdrop-blur-xl lg:block"
              onMouseEnter={cancelClose}
            >
              <MegaPanel group={navigation.find((g) => g.label === open)!} onNavigate={() => setOpen(null)} />
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}

function MegaItem({ group, tone, isOpen, active, onOpen, onToggle, onClose }: { group: NavGroup; tone: "light" | "dark"; isOpen: boolean; active: boolean; onOpen: () => void; onToggle: () => void; onClose: () => void }) {
  const id = useId();
  const color = cn(tone === "light" ? "text-white/90 hover:text-white" : "text-stone-700 hover:text-ink-900", (isOpen || active) && (tone === "light" ? "text-white" : "text-ink-900"));
  return (
    <li onMouseEnter={onOpen} className="relative flex items-center">
      {/* One click/tap on the label navigates; hovering or focusing opens the panel. */}
      <Link
        href={group.href}
        onFocus={onOpen}
        onKeyDown={(e) => {
          if (e.key === "Escape") onClose();
        }}
        className={cn("relative rounded-full py-2 pl-3.5 pr-1 text-[0.9375rem] font-medium transition-colors", color)}
      >
        {group.label}
        <span className={cn("absolute inset-x-3.5 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full transition-transform duration-300", tone === "light" ? "bg-gold-500" : "bg-terracotta-500", (isOpen || active) && "scale-x-100")} aria-hidden="true" />
      </Link>
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={`mega-${id}`}
        aria-label={`${isOpen ? "Close" : "Open"} ${group.label} menu`}
        onClick={onToggle}
        onKeyDown={(e) => {
          if (e.key === "ArrowDown") {
            e.preventDefault();
            onOpen();
            window.setTimeout(() => document.querySelector<HTMLAnchorElement>("#mega-panel-links a")?.focus(), 50);
          }
          if (e.key === "Escape") onClose();
        }}
        className={cn("flex h-8 w-6 items-center justify-center rounded-full transition-colors", color)}
      >
        <svg viewBox="0 0 12 12" className={cn("h-3 w-3 transition-transform duration-300", isOpen && "rotate-180")} fill="none" aria-hidden="true">
          <path d="M2.5 4.5 6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <span id={`mega-${id}`} className="sr-only" />
    </li>
  );
}

function MegaPanel({ group, onNavigate }: { group: NavGroup; onNavigate: () => void }) {
  return (
    <div className="container-x grid grid-cols-12 gap-10 py-10">
      <div className="col-span-3">
        <p className="eyebrow">{group.label}</p>
        <p className="mt-4 font-display text-xl leading-snug text-ink-950">{group.intro}</p>
        <Link href={group.href} onClick={onNavigate} className="link-arrow mt-5 text-sm">
          Overview <ArrowIcon />
        </Link>
      </div>
      <ul id="mega-panel-links" className="col-span-6 grid grid-cols-2 gap-x-8 gap-y-1">
        {group.links.map((link) => {
          const ext = link.external || isExternal(link.href);
          const inner = (
            <>
              <span className="flex items-center gap-2 font-medium text-ink-950 group-hover:text-terracotta-600">
                {link.label}
                {ext && (
                  <svg viewBox="0 0 12 12" className="h-3 w-3 text-stone-300" fill="none" aria-hidden="true">
                    <path d="M3 9l6-6M4 3h5v5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </span>
              {link.description && <span className="mt-0.5 block text-sm text-stone-500">{link.description}</span>}
            </>
          );
          const tile = (
            <span className="flex items-start gap-3">
              <IconTile name={(link.icon as IconName) ?? "arrow"} tone="sand" className="transition-colors group-hover:bg-terracotta-600 group-hover:text-white" />
              <span className="min-w-0">{inner}</span>
            </span>
          );
          return (
            <li key={link.href}>
              {ext ? (
                <a href={link.href} target="_blank" rel="noopener noreferrer" onClick={onNavigate} className="group block rounded-xl border border-transparent px-3 py-3 transition-colors hover:border-sand-300 hover:bg-sand-50">
                  {tile}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              ) : (
                <Link href={link.href} onClick={onNavigate} className="group block rounded-xl border border-transparent px-3 py-3 transition-colors hover:border-sand-300 hover:bg-sand-50">
                  {tile}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
      {group.feature && (
        <Link href={group.feature.href} onClick={onNavigate} className="group col-span-3 flex flex-col justify-between rounded-2xl bg-ink-900 p-6 text-white transition-colors hover:bg-ink-950">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-500">{group.feature.eyebrow}</span>
          <span className="mt-6 font-display text-lg leading-snug">{group.feature.title}</span>
          <span className="link-arrow mt-6 text-sm !text-white">
            Explore <ArrowIcon />
          </span>
        </Link>
      )}
    </div>
  );
}
