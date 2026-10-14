import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading, Prose, Numeral } from "@/components/ui/Typography";
import { Picture } from "@/components/ui/Picture";
import { StatGrid } from "@/components/ui/Stats";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { MaskReveal } from "@/components/motion/Parallax";
import { Timeline } from "@/components/sections/Timeline";
import { viceChancellor as vc } from "@/content/leadership";
import { buildMetadata, breadcrumbJsonLd, serializeJsonLd, absoluteUrl, organizationId } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({ title: vc.title, description: vc.description, path: "/management/vice-chancellor" });

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: vc.name,
  jobTitle: vc.role,
  worksFor: { "@id": organizationId },
  url: absoluteUrl("/management/vice-chancellor"),
  description: vc.description,
};

export default function ViceChancellorPage() {
  const crumbs = [{ name: "Home", path: "/" }, { name: "Management", path: "/management" }, { name: "Vice Chancellor", path: "/management/vice-chancellor" }];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbJsonLd(crumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(personJsonLd) }} />
      <PageHero variant="editorial" eyebrow={vc.hero.eyebrow} title={vc.hero.title} intro={vc.hero.intro} crumbs={crumbs} />

      <section className="container-x py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <MaskReveal className="rounded-3xl">
              <Picture src={vc.image} alt={vc.name} ratio="aspect-[4/3]" sizes="(min-width: 1024px) 40vw, 100vw" />
            </MaskReveal>
          </div>
          <div className="lg:col-span-7">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-terracotta-600">{vc.role}</span>
            <h2 className="display-md mt-3">{vc.name}</h2>
            <Reveal delay={0.1}>
              <Prose className="mt-6 !max-w-none">
                {vc.intro.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </Prose>
            </Reveal>
          </div>
        </div>
        <StatGrid stats={vc.stats} className="mt-16" />
      </section>

      <section className="surface-dark py-24 lg:py-32">
        <div className="container-x">
          <SectionHeading eyebrow={vc.impact.eyebrow} title={vc.impact.title} text={vc.impact.text} size="lg" />
          <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {vc.impact.badges.map((b) => (
              <StaggerItem key={b.code} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <span className="font-display text-3xl text-gold-500">{b.code}</span>
                <p className="mt-3 text-sm text-sand-100/80">{b.label}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="container-x py-24 lg:py-32">
        <Stagger className="grid gap-8 md:grid-cols-2">
          {vc.sections.map((s, i) => (
            <StaggerItem key={s.title} as="article" className="card p-8 lg:p-10">
              <Numeral>{String(i + 1).padStart(2, "0")}</Numeral>
              <h2 className="mt-3 font-display text-2xl">{s.title}</h2>
              <div className="mt-4 space-y-4 text-stone-600">
                {s.paragraphs.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
                {s.bullets && (
                  <ul className="space-y-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex gap-3">
                        <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta-500" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="bg-sand-100 py-24 lg:py-32">
        <div className="container-x">
          <SectionHeading eyebrow={vc.pathway.eyebrow} title={vc.pathway.title} size="lg" />
          <Timeline items={vc.pathway.steps.map((s) => ({ label: s.title, text: s.text }))} className="mt-14" />
        </div>
      </section>

      <section className="container-x py-20 text-center lg:py-28">
        <SectionHeading title={vc.closing.title} text={vc.closing.text} align="center" size="md" />
        <Reveal delay={0.2}>
          <ButtonLink href={vc.closing.link.href} variant="ink" className="mt-8">
            {vc.closing.link.label}
          </ButtonLink>
        </Reveal>
      </section>
    </>
  );
}
