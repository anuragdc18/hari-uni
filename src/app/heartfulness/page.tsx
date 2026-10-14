import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { FrameworkSection } from "@/components/sections/FrameworkSection";
import { SectionHeading, Numeral } from "@/components/ui/Typography";
import { Picture } from "@/components/ui/Picture";
import { StatGrid } from "@/components/ui/Stats";
import { ButtonLink, ArrowLink } from "@/components/ui/Button";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { MaskReveal } from "@/components/motion/Parallax";
import { heartfulnessPage } from "@/content/heartfulness";
import { buildMetadata, breadcrumbJsonLd, serializeJsonLd } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({ title: heartfulnessPage.title, description: heartfulnessPage.description, path: "/heartfulness" });

export default function HeartfulnessPage() {
  const { hero, what, reach, daily, framework, science, secular, integration, cta } = heartfulnessPage;
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: heartfulnessPage.title, path: "/heartfulness" }])) }} />
      <PageHero eyebrow={hero.eyebrow} title={hero.title} intro={hero.intro} image={hero.image} imageAlt="Sunset over the Kanha Shanti Vanam campus">
        <div className="flex flex-wrap gap-4">
          <ButtonLink href={hero.primary.href}>{hero.primary.label}</ButtonLink>
          <ButtonLink href={hero.secondary.href} variant="outline-light" external>{hero.secondary.label}</ButtonLink>
        </div>
      </PageHero>

      <section className="container-x py-24 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <SectionHeading eyebrow={what.eyebrow} title={what.title} size="lg" />
            <Reveal delay={0.1}>
              <div className="mt-6 space-y-5 text-[1.0625rem] leading-relaxed text-stone-700">{what.paragraphs.map((p, i) => <p key={i}>{p}</p>)}</div>
            </Reveal>
          </div>
          <div className="grid grid-cols-3 gap-3 lg:col-span-6 lg:gap-5">
            {what.images.map((im, i) => (
              <MaskReveal key={im.key} className={cn("rounded-2xl", i === 1 && "mt-10")}><Picture src={im.key} alt={im.alt} ratio="aspect-[3/4]" sizes="(min-width: 1024px) 18vw, 33vw" /></MaskReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="surface-dark py-24 lg:py-32">
        <div className="container-x">
          <SectionHeading eyebrow={reach.eyebrow} title={reach.title} text={reach.text} size="lg" />
          <StatGrid stats={reach.stats} tone="dark" className="mt-14" />
        </div>
      </section>

      <section className="container-x py-24 lg:py-32">
        <SectionHeading eyebrow={daily.eyebrow} title={daily.title} text={daily.text} size="lg" />
        <Stagger className="mt-14 grid gap-8 lg:grid-cols-3">
          {daily.items.map((item) => (
            <StaggerItem key={item.title} as="article" className="group">
              <div className="overflow-hidden rounded-3xl"><Picture src={item.image} alt={item.alt} ratio="aspect-[4/3]" imgClassName="transition-transform duration-[1200ms] group-hover:scale-105" sizes="(min-width: 1024px) 33vw, 100vw" /></div>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-terracotta-600">{item.label}</p>
              <h3 className="mt-3 font-display text-2xl">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-stone-600">{item.text}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <FrameworkSection eyebrow={framework.eyebrow} title={framework.title} intro={framework.text} note={framework.note} variant="heartfulness" />

      <section className="container-x py-24 lg:py-32">
        <SectionHeading eyebrow={science.eyebrow} title={science.title} text={science.text} size="lg" />
        <Stagger className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-sand-300 sm:grid-cols-2 lg:grid-cols-4">
          {science.items.map((s) => (
            <StaggerItem key={s.number} as="article" className="bg-white p-7">
              <Numeral>{s.number}</Numeral>
              <h3 className="mt-4 font-display text-xl lg:text-2xl">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">{s.text}</p>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal delay={0.2}><p className="mt-10 font-display text-xl text-terracotta-700">{science.line}</p></Reveal>
      </section>

      <section className="bg-sand-100 py-24 lg:py-32">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <SectionHeading eyebrow={secular.eyebrow} title={secular.title} size="md" />
            <Reveal delay={0.1}><div className="mt-6 space-y-5 leading-relaxed text-stone-700">{secular.paragraphs.map((p, i) => <p key={i}>{p}</p>)}</div></Reveal>
          </div>
          <div className="lg:col-span-6">
            <SectionHeading eyebrow={integration.eyebrow} title={integration.title} text={integration.text} size="md" />
            <Reveal delay={0.15}><ButtonLink href={integration.link.href} variant="ink" className="mt-8">{integration.link.label}</ButtonLink></Reveal>
            <Reveal delay={0.2}>
              <p className="eyebrow mt-12">{integration.elsewhereEyebrow}</p>
              <h3 className="mt-3 font-display text-2xl">{integration.elsewhereTitle}</h3>
              <ul className="mt-4 space-y-3">
                {integration.elsewhere.map((l) => (
                  <li key={l.href}><ArrowLink href={"internalHref" in l && l.internalHref ? l.internalHref : l.href} external={l.external}>{l.label}</ArrowLink></li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand {...cta} />
    </>
  );
}
