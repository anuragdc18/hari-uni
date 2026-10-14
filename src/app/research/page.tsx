import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { PublicationCard } from "@/components/sections/Cards";
import { SectionHeading, Numeral, Badge } from "@/components/ui/Typography";
import { Picture } from "@/components/ui/Picture";
import { ArrowLink } from "@/components/ui/Button";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { MaskReveal } from "@/components/motion/Parallax";
import { researchCentres, researchPage } from "@/content/research";
import { getPublication } from "@/content/publications";
import { buildMetadata, breadcrumbJsonLd, serializeJsonLd } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({ title: researchPage.title, description: researchPage.description, path: "/research" });

export default function ResearchPage() {
  const { hero, philosophy, centresIntro, platforms, selected, cta } = researchPage;
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: researchPage.title, path: "/research" }])) }} />
      <PageHero eyebrow={hero.eyebrow} title={hero.title} image={hero.image} imageAlt="Aerial view of the tree-lined Kanha Shanti Vanam campus" stats={hero.stats} video />

      <section className="container-x py-24 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal direction="none"><p className="eyebrow justify-center">{philosophy.eyebrow}</p></Reveal>
          <Reveal delay={0.1}><blockquote className="mt-8 font-display text-xl leading-relaxed text-ink-900 lg:text-[1.65rem] lg:leading-snug">“{philosophy.quote}”</blockquote></Reveal>
          <Reveal delay={0.2}><p className="mt-8 text-lg font-medium text-terracotta-700">{philosophy.line}</p></Reveal>
        </div>
      </section>

      <section className="bg-sand-100 py-24 lg:py-32">
        <div className="container-x">
          <SectionHeading title={centresIntro.title} text={centresIntro.text} size="lg" />
          <div className="mt-16 space-y-16">
            {researchCentres.map((c, i) => (
              <article key={c.number} className={cn("grid gap-10 lg:grid-cols-12 lg:gap-14", i % 2 === 1 && "lg:[&>*:first-child]:order-2")}>
                <MaskReveal className="rounded-3xl lg:col-span-5" direction={i % 2 ? "left" : "up"}>
                  <Picture src={c.image} alt={c.name} ratio="aspect-[4/3]" sizes="(min-width: 1024px) 40vw, 100vw" />
                </MaskReveal>
                <div className="lg:col-span-7">
                  <div className="flex flex-wrap items-center gap-3"><Numeral>{c.number}</Numeral><Badge tone="forest">{c.badge}</Badge></div>
                  <h3 className="display-sm mt-4">{c.name}</h3>
                  <Reveal delay={0.1}><p className="mt-5 leading-relaxed text-stone-700">{c.description}</p></Reveal>
                  <Reveal delay={0.15}>
                    <h4 className="mt-7 !font-sans text-xs font-semibold uppercase tracking-[0.16em] !text-stone-500">{c.programmesHeading}</h4>
                    <ul className="mt-4 space-y-2">
                      {c.programmes.map((p) => (
                        <li key={p} className="flex gap-3 text-sm text-stone-700"><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-forest-600" />{p}</li>
                      ))}
                    </ul>
                    {c.infrastructure && (
                      <>
                        <h4 className="mt-7 !font-sans text-xs font-semibold uppercase tracking-[0.16em] !text-stone-500">{c.infrastructureHeading}</h4>
                        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                          {c.infrastructure.map((p) => (
                            <li key={p} className="flex gap-3 text-sm text-stone-700"><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta-500" />{p}</li>
                          ))}
                        </ul>
                      </>
                    )}
                  </Reveal>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="surface-dark py-24 lg:py-32">
        <div className="container-x">
          <SectionHeading eyebrow={platforms.eyebrow} title={platforms.title} text={platforms.text} size="lg" />
          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {platforms.items.map((p) => (
              <StaggerItem key={p.number} as="article" className="group">
                <div className="overflow-hidden rounded-2xl"><Picture src={p.image} alt={p.alt} ratio="aspect-[4/3]" imgClassName="transition-transform duration-[1200ms] group-hover:scale-105" sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" /></div>
                <Numeral tone="light" className="mt-5 block">{p.number}</Numeral>
                <h3 className="mt-2 font-display text-xl !text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-sand-100/75">{p.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="container-x py-24 lg:py-32">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading eyebrow={selected.eyebrow} title={selected.title} text={selected.text} size="md" />
          <Reveal delay={0.2}><ArrowLink href={selected.link.href}>{selected.link.label.replace(" →", "")}</ArrowLink></Reveal>
        </div>
        <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
          {selected.ids.map((id) => { const pub = getPublication(id)!; return <StaggerItem key={id}><PublicationCard pub={pub} compact /></StaggerItem>; })}
        </Stagger>
      </section>

      <CtaBand {...cta} />
    </>
  );
}
