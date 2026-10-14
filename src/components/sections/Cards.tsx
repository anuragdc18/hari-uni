import Link from "next/link";
import type { ImageKey } from "@/assets/registry";
import { Picture } from "@/components/ui/Picture";
import { ArrowIcon } from "@/components/ui/Button";
import { Badge, Numeral } from "@/components/ui/Typography";
import type { Program } from "@/content/programs";
import type { EventItem } from "@/content/events";
import type { NewsPost } from "@/content/news";
import { formatCitation, type Publication } from "@/content/publications";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";

/* ---------- Programme ---------- */
export function ProgramCard({ program, index, image }: { program: Program; index?: number; image?: ImageKey }) {
  return (
    <Link href={`/programs/${program.slug}`} className="card card-hover group flex h-full flex-col overflow-hidden">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Picture src={image ?? program.image} alt="" className="h-full w-full" imgClassName="transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-105" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
        <div className="absolute left-4 top-4 flex gap-2">
          <Badge tone="glass">{program.level === "postgraduate" ? "Postgraduate" : "Undergraduate"}</Badge>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-terracotta-600">{program.school.replace("School of ", "")}</span>
          {index !== undefined && <Numeral>{String(index + 1).padStart(2, "0")}</Numeral>}
        </div>
        <h3 className="mt-3 font-display text-xl leading-snug text-ink-950 group-hover:text-terracotta-700 lg:text-[1.35rem]">{program.name}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-500">{program.summary}</p>
        <div className="mt-5 flex items-center justify-between border-t border-sand-200 pt-4 text-sm">
          <span className="flex items-center gap-1.5 text-stone-500">
            <Icon name="clock" className="h-4 w-4" />{program.duration} · {program.status}
          </span>
          <span className="link-arrow text-sm">
            Explore <ArrowIcon />
          </span>
        </div>
      </div>
    </Link>
  );
}

/* ---------- Event ---------- */
export function EventCard({ event, image, alt, large }: { event: EventItem; image?: ImageKey; alt?: string; large?: boolean }) {
  return (
    <Link href={`/events/${event.slug}`} className="group flex h-full flex-col">
      <div className={cn("relative overflow-hidden rounded-2xl", large ? "aspect-[16/10]" : "aspect-[4/3]")}>
        <Picture src={image ?? event.cardImage} alt={alt ?? event.cardAlt} className="h-full w-full" imgClassName="transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-105" sizes="(min-width: 1024px) 40vw, 100vw" />
        <div className="absolute left-4 top-4 rounded-xl bg-white/95 px-3 py-2 text-center shadow-card">
          <DateBlock label={event.dateLabel} />
        </div>
      </div>
      <h3 className="mt-5 font-display text-xl leading-snug text-ink-950 group-hover:text-terracotta-700 lg:text-2xl">{event.title}</h3>
      <p className="mt-2 text-sm text-stone-500">
        {event.dateLabel} / {event.cardLocation}
      </p>
    </Link>
  );
}

function DateBlock({ label }: { label: string }) {
  const m = label.match(/^([A-Za-z]{3})\s+(\d{1,2}),\s+(\d{4})/) || label.match(/^(\d{1,2})\s+([A-Za-z]+)\s+(\d{4})/);
  if (!m) return <span className="text-xs font-semibold text-ink-900">{label}</span>;
  const isMonthFirst = /^[A-Za-z]/.test(label);
  const day = isMonthFirst ? m[2] : m[1];
  const month = (isMonthFirst ? m[1] : m[2]).slice(0, 3);
  return (
    <>
      <span className="block font-display text-2xl leading-none text-ink-900">{day}</span>
      <span className="mt-1 block text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-terracotta-600">{month}</span>
    </>
  );
}

/* ---------- News ---------- */
export function NewsCard({ post, image, alt, featured }: { post: NewsPost; image?: ImageKey; alt?: string; featured?: boolean }) {
  return (
    <article className="group flex h-full flex-col">
      <Link href={`/blog/${post.slug}`} className="relative block overflow-hidden rounded-2xl">
        <Picture src={image ?? post.cardImage} alt={alt ?? post.heroAlt} className="h-full w-full" ratio={featured ? "aspect-[16/9]" : "aspect-[4/3]"} imgClassName="transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-105" sizes={featured ? "(min-width: 1024px) 60vw, 100vw" : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"} />
        <span className="absolute left-4 top-4">
          <Badge tone="glass">{post.category}</Badge>
        </span>
      </Link>
      <div className="mt-5 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.14em] text-stone-500">
        <time dateTime={post.datePublished}>{post.dateLabel}</time>
      </div>
      <h3 className={cn("mt-3 font-display leading-snug text-ink-950", featured ? "text-2xl lg:text-3xl" : "text-xl")}>
        <Link href={`/blog/${post.slug}`} className="group-hover:text-terracotta-700">
          {post.title}
        </Link>
      </h3>
      {featured && <p className="mt-3 max-w-xl text-stone-600">{post.excerpt}</p>}
    </article>
  );
}

/* ---------- Publication ---------- */
export function PublicationCard({ pub, compact }: { pub: Publication; compact?: boolean }) {
  return (
    <article className="card card-hover flex h-full flex-col p-6 lg:p-7">
      <div className="flex flex-wrap items-center gap-2">
        <Badge tone="forest">{pub.design}</Badge>
        {!compact && <Badge tone="sand">{pub.theme}</Badge>}
      </div>
      <h3 className="mt-4 font-display text-lg leading-snug text-ink-950 lg:text-xl">{pub.title}</h3>
      {!compact && <p className="mt-3 text-sm text-stone-500">{pub.authors}</p>}
      <p className="mt-3 text-sm font-medium text-ink-800">{formatCitation(pub)}</p>
      {!compact && <p className="mt-4 flex-1 text-sm leading-relaxed text-stone-600">{pub.summary}</p>}
      {!compact && (
        <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer" className="link-arrow mt-5 self-start text-sm">
          {pub.doi} <ArrowIcon />
          <span className="sr-only"> (opens the publisher page in a new tab)</span>
        </a>
      )}
    </article>
  );
}
