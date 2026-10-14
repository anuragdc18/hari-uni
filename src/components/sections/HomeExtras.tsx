import Link from "next/link";
import { Icon, IconTile, type IconName } from "@/components/ui/Icon";
import { Stagger, StaggerItem, Reveal } from "@/components/motion/Reveal";
import { Counter } from "@/components/motion/Counter";
import { SectionHeading } from "@/components/ui/Typography";
import { ArrowLink } from "@/components/ui/Button";
import { NewsCard } from "./Cards";
import { newsPosts } from "@/content/news";
import { cn } from "@/lib/utils";

const actions: { label: string; sub: string; href: string; icon: IconName; download?: boolean }[] = [
  { label: "Apply Now", sub: "Admissions AY 2026-27", href: "/apply", icon: "send" },
  { label: "Explore Programmes", sub: "8 programmes · 4 schools", href: "/programs", icon: "book" },
  { label: "Orientation Day 2026", sub: "17 August · invitation PDF", href: "/events/orientation-program", icon: "calendar" },
  { label: "Plan a campus visit", sub: "Kanha Shanti Vanam, Hyderabad", href: "/contact", icon: "map" },
  { label: "Bus Timetable", sub: "Student & city routes", href: "/campus/bus-timetable", icon: "bus" },
];

/** Amity-style admissions quick-action strip directly under the hero. */
export function QuickActions() {
  return (
    <section aria-label="Quick actions" className="relative z-10 -mt-10 lg:-mt-14">
      <div className="container-x">
        <Stagger className="grid overflow-hidden rounded-2xl bg-white shadow-lift sm:grid-cols-2 lg:grid-cols-5" stagger={0.06} delay={0.6}>
          {actions.map((a, i) => (
            <StaggerItem key={a.href} className={cn("border-sand-200", i < actions.length - 1 && "sm:border-r", i >= 2 && "border-t sm:border-t-0 lg:border-t-0", i >= 2 && i < 4 && "sm:border-t")}>
              <Link href={a.href} className="group flex h-full items-center gap-4 p-5 transition-colors hover:bg-sand-50">
                <IconTile name={a.icon} tone={i === 0 ? "terracotta" : "sand"} className="transition-colors group-hover:bg-ink-900 group-hover:text-white" />
                <span className="min-w-0">
                  <span className="block font-semibold text-ink-950 group-hover:text-terracotta-700">{a.label}</span>
                  <span className="block truncate text-xs text-stone-500">{a.sub}</span>
                </span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

const proofs: { value: string; label: string; icon: IconName }[] = [
  { value: "UGC Distinct Category", label: "India's first greenfield, privately sponsored deemed-to-be university", icon: "award" },
  { value: "IGBC Platinum", label: "India's highest green-campus rating", icon: "leaf" },
  { value: "160", label: "Countries with a Heartfulness presence", icon: "globe" },
  { value: "75 years", label: "Of practice behind our curriculum", icon: "clock" },
  { value: "150,000", label: "Trees planted on campus", icon: "sun" },
  { value: "8", label: "Fully residential programmes", icon: "book" },
];

/** Credibility band (rankings/recognition pattern from SFU & Stanford) with animated counters. */
export function ProofBand() {
  return (
    <section className="bg-ink-900 text-white">
      <div className="container-x">
        <Stagger className="grid grid-cols-2 divide-white/10 md:grid-cols-3 lg:grid-cols-6 lg:divide-x" stagger={0.07}>
          {proofs.map((p) => (
            <StaggerItem key={p.label} className="flex flex-col gap-3 px-2 py-8 lg:px-6 lg:py-10">
              <Icon name={p.icon} className="h-6 w-6 text-gold-500" />
              <Counter value={p.value} className="font-display text-2xl leading-tight lg:text-[1.65rem]" />
              <span className="text-xs leading-snug text-sand-200/70">{p.label}</span>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/** Latest news on the home page (Stanford/SFU pattern). */
export function HomeNews() {
  return (
    <section className="container-x py-24 lg:py-32">
      <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading eyebrow="News & recognition" title="HARI in the world" size="lg" />
        <Reveal delay={0.2}><ArrowLink href="/blog">All news</ArrowLink></Reveal>
      </div>
      <Stagger className="grid gap-8 md:grid-cols-3">
        {newsPosts.map((post) => (
          <StaggerItem key={post.slug}><NewsCard post={post} image={post.aboutImage} alt={post.title} /></StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
