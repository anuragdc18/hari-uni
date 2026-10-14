import type { ReactNode } from "react";
import type { ImageKey } from "@/assets/registry";
import { Picture } from "@/components/ui/Picture";
import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";
import { Eyebrow } from "@/components/ui/Typography";
import { TextReveal } from "@/components/motion/TextReveal";
import { Reveal } from "@/components/motion/Reveal";
import { StatRow } from "@/components/ui/Stats";
import { cn } from "@/lib/utils";
import type { Stat } from "@/components/ui/Stats";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  intro?: string;
  image?: ImageKey;
  imageAlt?: string;
  crumbs?: Crumb[];
  stats?: readonly Stat[];
  children?: ReactNode;
  /** "cinematic" = full-bleed photo with dark overlay; "editorial" = light sandstone band. */
  variant?: "cinematic" | "editorial";
  size?: "lg" | "md";
  position?: string;
}

/** Shared page hero. Cinematic variant marks itself so the header turns transparent over it. */
export function PageHero({ eyebrow, title, intro, image, imageAlt = "", crumbs, stats, children, variant = "cinematic", size = "lg", position }: PageHeroProps) {
  if (variant === "editorial" || !image) {
    return (
      <section className="relative overflow-hidden bg-sand-100 pt-[calc(var(--header-height)+3rem)] pb-16 lg:pt-[calc(var(--header-height)+5rem)] lg:pb-24">
        <div aria-hidden="true" className="pointer-events-none absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-gold-200/40 blur-3xl" />
        <div className="container-x relative">
          {crumbs && <Breadcrumbs items={crumbs} className="mb-8" />}
          {eyebrow && (
            <Reveal direction="none">
              <Eyebrow className="mb-5">{eyebrow}</Eyebrow>
            </Reveal>
          )}
          <TextReveal as="h1" text={title} className={cn(size === "lg" ? "display-lg" : "display-md", "max-w-4xl")} immediate />
          {intro && (
            <Reveal delay={0.25}>
              <p className="lead mt-6 max-w-2xl">{intro}</p>
            </Reveal>
          )}
          {stats && <StatRow stats={stats} tone="light" className="mt-10" />}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </section>
    );
  }

  return (
    <section data-header-tone="dark" className={cn("relative isolate flex items-end overflow-hidden text-white", size === "lg" ? "min-h-[82svh] lg:min-h-[88svh]" : "min-h-[62svh]")}>
      <Picture src={image} alt={imageAlt} className="absolute inset-0 -z-20" sizes="100vw" priority quality={75} position={position} />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-ink-950/95 via-ink-950/45 to-ink-950/25" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-ink-950/80 to-transparent" />
      <div className="container-x relative pb-14 pt-[calc(var(--header-height)+5rem)] lg:pb-20">
        {crumbs && <Breadcrumbs items={crumbs} tone="dark" className="mb-8" />}
        {eyebrow && (
          <Reveal direction="none">
            <Eyebrow className="mb-5 !text-gold-500">{eyebrow}</Eyebrow>
          </Reveal>
        )}
        <TextReveal as="h1" text={title} className={cn(size === "lg" ? "display-xl" : "display-lg", "max-w-5xl !text-white")} immediate />
        {intro && (
          <Reveal delay={0.3}>
            <p className="lead mt-6 max-w-2xl !text-sand-100/90">{intro}</p>
          </Reveal>
        )}
        {stats && <StatRow stats={stats} className="mt-10" />}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
