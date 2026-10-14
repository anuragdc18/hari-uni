import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { SectionHeading, Eyebrow, Prose, Numeral } from "@/components/ui/Typography";
import { Picture } from "@/components/ui/Picture";
import { StatGrid } from "@/components/ui/Stats";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { MaskReveal } from "@/components/motion/Parallax";
import { visionPage } from "@/content/about";
import { buildMetadata, breadcrumbJsonLd, serializeJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({ title: visionPage.title, description: visionPage.description, path: "/daajis-vision" });

export default function VisionPage() {
  const { hero, pullQuote, message, who, dream, chair, bibliography, cta } = visionPage;
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: visionPage.title, path: "/daajis-vision" }])) }} />
      <PageHero eyebrow={hero.eyebrow} title={hero.title} intro={hero.subtitle} image={hero.image} imageAlt={hero.imageAlt} size="md" />

      {/* Portrait + pull quote */}
      <section className="container-x py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <figure className="lg:col-span-4">
            <MaskReveal className="rounded-3xl">
              <Picture src={hero.portrait} alt={hero.portraitAlt} ratio="aspect-[4/5]" sizes="(min-width: 1024px) 30vw, 100vw" />
            </MaskReveal>
            <figcaption className="mt-4 text-sm text-stone-500">{hero.portraitCaption}</figcaption>
          </figure>
          <blockquote className="lg:col-span-8 lg:pl-10">
            <span aria-hidden="true" className="font-display text-[6rem] leading-none text-gold-500">“</span>
            <TextReveal as="p" text={pullQuote.text} className="display-md -mt-8 !font-normal text-ink-900" />
            <footer className="mt-8 text-sm font-medium uppercase tracking-[0.16em] text-stone-500">{pullQuote.attribution}</footer>
          </blockquote>
        </div>
      </section>

      {/* Message */}
      <section className="bg-sand-100 py-24 lg:py-32">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow={message.eyebrow} title={message.title} size="md" />
          </div>
          <Reveal className="lg:col-span-7 lg:col-start-6">
            <Prose className="!max-w-none text-[1.125rem]">
              <p className="font-display text-2xl text-ink-900">{message.salutation}</p>
              {message.paragraphs.map((p, i) => (
                <p key={i} className={i === 0 ? "first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-6xl first-letter:leading-[0.8] first-letter:text-terracotta-600" : ""}>
                  {p}
                </p>
              ))}
              <p className="pt-4 font-display text-3xl text-ink-900">{message.signature}</p>
              <p className="!mt-1 text-sm uppercase tracking-[0.14em] text-stone-500">{message.signatureLine}</p>
            </Prose>
          </Reveal>
        </div>
      </section>

      {/* Who is Daaji */}
      <section className="container-x py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow={who.eyebrow} title={who.title} size="md" />
            <Reveal delay={0.15}>
              <Prose className="mt-8">
                {who.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </Prose>
            </Reveal>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <StatGrid stats={who.stats} columns={2} />
          </div>
        </div>
      </section>

      {/* Dream */}
      <section className="surface-dark py-24 lg:py-32">
        <div className="container-x">
          <SectionHeading eyebrow={dream.eyebrow} title={dream.title} size="lg" />
          <Stagger className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-white/10 lg:grid-cols-3">
            {dream.items.map((item) => (
              <StaggerItem key={item.number} as="article" className="bg-ink-900/70 p-8 lg:p-10">
                <Numeral tone="light">{item.number}</Numeral>
                <h3 className="mt-4 font-display text-2xl !text-white">{item.title}</h3>
                <p className="mt-4 leading-relaxed text-sand-100/80">{item.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Chair */}
      <section className="container-x py-24 lg:py-32">
        <div className="grid gap-10 rounded-3xl border border-gold-200 bg-gradient-to-br from-sand-50 to-gold-200/30 p-8 lg:grid-cols-12 lg:p-14">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow={chair.eyebrow} title={chair.title} size="md" />
          </div>
          <Reveal className="lg:col-span-7">
            <p className="lead">{chair.text}</p>
          </Reveal>
        </div>
      </section>

      {/* Bibliography */}
      <section className="bg-sand-100 py-24 lg:py-32">
        <div className="container-x">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading eyebrow={bibliography.eyebrow} title={bibliography.title} size="md" />
            <Reveal>
              <Eyebrow plain>{bibliography.count}</Eyebrow>
            </Reveal>
          </div>
          <Stagger className="mt-12 grid gap-x-10 md:grid-cols-2" stagger={0.05}>
            {bibliography.works.map((w, i) => (
              <StaggerItem key={w} className="flex gap-5 border-b border-sand-300 py-5">
                <Numeral className="pt-1">{String(i + 1).padStart(2, "0")}</Numeral>
                <p className="font-display text-lg leading-snug text-ink-950">{w}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CtaBand {...cta} />
    </>
  );
}
