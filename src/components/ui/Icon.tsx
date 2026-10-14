import { cn } from "@/lib/utils";

const paths: Record<string, string> = {
  university: "M3 10l9-5 9 5-9 5-9-5zm2 3v4c0 1.5 3 3 7 3s7-1.5 7-3v-4M21 10v6",
  eye: "M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12zm10 3a3 3 0 100-6 3 3 0 000 6z",
  users: "M16 11a4 4 0 10-8 0 4 4 0 008 0zM3 21a9 9 0 0118 0M19 8a3 3 0 11-2 5",
  news: "M4 5h13a2 2 0 012 2v12H6a2 2 0 01-2-2V5zm15 7h2v7a2 2 0 01-2 2M8 9h5M8 13h8M8 17h8",
  school: "M4 21V8l8-5 8 5v13M9 21v-6h6v6M12 11h.01",
  faculty: "M12 3a4 4 0 110 8 4 4 0 010-8zm-7 18a7 7 0 0114 0M18 7h3M19.5 5.5v3",
  calendar: "M4 6h16v15H4zM4 10h16M8 3v4M16 3v4M8 14h3M13 14h3M8 18h3",
  book: "M4 4h6a3 3 0 013 3v13a2 2 0 00-2-2H4zm16 0h-6a3 3 0 00-3 3v13a2 2 0 012-2h7z",
  flask: "M9 3h6M10 3v6l-5.5 9A2 2 0 006.2 21h11.6a2 2 0 001.7-3L14 9V3M8 15h8",
  doc: "M7 3h7l5 5v13H7zM14 3v5h5M9 13h6M9 17h6",
  leaf: "M5 20c0-8 5-13 14-14 0 9-5 14-13 14H5zm0 0l7-7",
  bus: "M5 6a2 2 0 012-2h10a2 2 0 012 2v10H5zM5 16v3M19 16v3M8 19h2M14 19h2M5 10h14M9 13h.01M15 13h.01",
  heart: "M12 20s-7-4.5-7-10a4 4 0 017-2.5A4 4 0 0119 10c0 5.5-7 10-7 10z",
  globe: "M12 3a9 9 0 100 18 9 9 0 000-18zm0 0c-3 3-3 15 0 18m0-18c3 3 3 15 0 18M3 12h18",
  map: "M12 21s-6-5.5-6-11a6 6 0 0112 0c0 5.5-6 11-6 11zm0-9a2 2 0 100-4 2 2 0 000 4z",
  phone: "M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z",
  mail: "M4 6h16v12H4zM4 7l8 6 8-6",
  send: "M4 12l16-8-6 16-2-7-8-1z",
  arrow: "M4 12h16m-6-6l6 6-6 6",
  spark: "M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2zM19 15l1 2 2 1-2 1-1 2-1-2-2-1 2-1z",
  award: "M12 15a6 6 0 100-12 6 6 0 000 12zm-4 0l-1 7 5-3 5 3-1-7",
  check: "M5 13l4 4L19 7",
  lab: "M7 3h10M9 3v7l-5 8a2 2 0 002 3h12a2 2 0 002-3l-5-8V3",
  download: "M12 4v12m0 0l-4-4m4 4l4-4M5 20h14",
  clock: "M12 21a9 9 0 100-18 9 9 0 000 18zm0-13v5l3 2",
  home: "M4 11l8-7 8 7v9a1 1 0 01-1 1h-5v-6h-4v6H5a1 1 0 01-1-1z",
  sun: "M12 17a5 5 0 100-10 5 5 0 000 10zM12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M5 19l1.5-1.5M17.5 6.5L19 5",
  whatsapp: "M12 3a9 9 0 00-7.8 13.5L3 21l4.6-1.2A9 9 0 1012 3zm-3 6c.3-.6 1 .2 1.4 1 .2.3 0 .7-.3 1 .5 1.3 1.8 2.4 3 2.9.4-.3.8-.8 1.1-.6.8.4 1.6.9 1 1.6-1.1 1.1-2.4.8-4.4-.5-1.7-1.1-3-3-2.9-4.5 0-.3.1-.6.1-.9z",
};

export type IconName = keyof typeof paths;

export function Icon({ name, className, strokeWidth = 1.6 }: { name: IconName; className?: string; strokeWidth?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={cn("h-5 w-5 shrink-0", className)}>
      <path d={paths[name]} />
    </svg>
  );
}

/** Rounded icon tile used in menus, quick actions and cards. */
export function IconTile({ name, className, tone = "sand" }: { name: IconName; className?: string; tone?: "sand" | "ink" | "terracotta" | "gold" | "forest" | "glass" }) {
  const tones = {
    sand: "bg-sand-100 text-ink-900",
    ink: "bg-ink-900 text-white",
    terracotta: "bg-terracotta-50 text-terracotta-700",
    gold: "bg-gold-200/60 text-gold-600",
    forest: "bg-forest-50 text-forest-700",
    glass: "bg-white/10 text-white border border-white/20",
  };
  return (
    <span className={cn("flex h-11 w-11 shrink-0 items-center justify-center rounded-xl", tones[tone], className)}>
      <Icon name={name} />
    </span>
  );
}
