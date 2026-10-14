import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { SectionHeading, Numeral, Badge } from "@/components/ui/Typography";
import { Picture } from "@/components/ui/Picture";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { MaskReveal } from "@/components/motion/Parallax";
import { ArrowLink } from "@/components/ui/Button";
import { academicsPage, schools } from "@/content/academics";
import { FrameworkSection } from "@/components/sections/FrameworkSection";
import { programs } from "@/content/programs";
import { buildMetadata, breadcrumbJsonLd, serializeJsonLd } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({ title: academicsPage.title, description: academicsPage.description, path: "/academics" });

export default function AcademicsPage() {
  const { hero, philosophy, framework, schoolsIntro, advantage, cta } = academicsPage;
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: academicsPage.title, path: "/academics" }])) }} />
      <PageHero eyebrow={hero.eyebrow} title={hero.title} image={hero.image} imageAlt="An academic building in terracotta brick and glass at Kanha Shanti Vanam" stats={hero.stats} video />

      <section className="container-x py-24 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal direction="none">
            <p className="eyebrow justify-center">{philosophy.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <blockquote className="mt-8 font-display text-2xl leading-snug text-ink-900 lg:text-[2rem]">“{philosophy.quote}”</blockquote>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 text-lg font-medium text-terracotta-700">{philosophy.line}</p>
          </Reveal>
        </div>
      </section>

      <FrameworkSection title={framework.title} intro={framework.intro} note={framework.note} variant="academics" />

      {/* Schools */}
      <section className="container-x py-24 lg:py-32">
        <SectionHeading title="Our four schools" text={schoolsIntro} size="lg" />
        <div className="mt-16 space-y-20">
          {schools.map((s, i) => (
            <article key={s.slug} id={s.slug} className={cn("grid items-center gap-10 lg:grid-cols-12 lg:gap-16", i % 2 === 1 && "lg:[&>*:first-child]:order-2")}>
              <MaskReveal className="rounded-3xl lg:col-span-6" direction={i % 2 === 1 ? "left" : "up"}>
                <Picture src={s.image} alt={s.name} ratio="aspect-[4/3]" sizes="(min-width: 1024px) 50vw, 100vw" />
              </MaskReveal>
              <div className="lg:col-span-6">
                <div className="flex flex-wrap items-center gap-3">
                  <Numeral>{s.number}</Numeral>
                  <Badge tone="terracotta">{s.badge}</Badge>
                </div>
                <h3 className="display-sm mt-4">{s.name}</h3>
                <Reveal delay={0.1}>
                  <p className="mt-5 leading-relaxed text-stone-700">{s.description}</p>
                </Reveal>
                <Reveal delay={0.15}>
                  <h4 className="mt-7 !font-sans text-xs font-semibold uppercase tracking-[0.16em] !text-stone-500">{s.focusHeading}</h4>
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {s.focus.map((f) => (
                      <li key={f} className="flex gap-3 text-sm text-stone-700">
                        <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-forest-600" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </Reveal>
                <Reveal delay={0.2}>
                  <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                    {programs
                      .filter((p) => p.schoolSlug === s.slug)
                      .map((p) => (
                        <ArrowLink key={p.slug} href={`/programs/${p.slug}`} className="text-sm">
                          {p.name}
                        </ArrowLink>
                      ))}
                  </div>
                </Reveal>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Advantage */}
      <section className="surface-dark py-24 lg:py-32">
        <div className="container-x">
          <SectionHeading eyebrow={advantage.eyebrow} title={advantage.title} text={advantage.intro} size="lg" />
          <Stagger className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {advantage.items.map((item, i) => (
              <StaggerItem key={item.title} as="article" className="bg-ink-900/70 p-8">
                <Numeral tone="light">{String(i + 1).padStart(2, "0")}</Numeral>
                <h3 className="mt-4 font-display text-xl !text-white lg:text-2xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-sand-100/80">{item.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CtaBand {...cta} />
    </>
  );
}
