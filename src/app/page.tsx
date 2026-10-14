import type { Metadata } from "next";
import { HomeHero } from "@/components/sections/HomeHero";
import { SchoolsPanels, LifeTabs } from "@/components/sections/SchoolsStory";
import { ProgramShowcase } from "@/components/sections/ProgramShowcase";
import { OrientationPopup } from "@/components/sections/OrientationPopup";
import { QuickActions, ProofBand, HomeNews } from "@/components/sections/HomeExtras";
import { CtaBand } from "@/components/sections/CtaBand";
import { MapSection } from "@/components/sections/MapSection";
import { EventCard } from "@/components/sections/Cards";
import { SectionHeading, Eyebrow } from "@/components/ui/Typography";
import { ButtonLink, ArrowLink } from "@/components/ui/Button";
import { Picture } from "@/components/ui/Picture";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { MaskReveal } from "@/components/motion/Parallax";
import { homePage } from "@/content/home";
import { programs } from "@/content/programs";
import { getEvent } from "@/content/events";
import { contact } from "@/content/site";
import { buildMetadata, serializeJsonLd, absoluteUrl, siteUrl, organizationId } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({ title: homePage.title, description: homePage.description, path: "/" });

const programListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "HARI University Programmes",
  itemListElement: programs.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p.name, item: absoluteUrl(`/programs/${p.slug}`) })),
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${siteUrl}/#webpage`,
  url: `${siteUrl}/`,
  name: "HARI University Hyderabad",
  description: homePage.description,
  isPartOf: { "@id": `${siteUrl}/#website` },
  about: { "@id": organizationId },
  primaryImageOfPage: { "@type": "ImageObject", url: absoluteUrl("/og-default.jpg") },
};

export default function HomePage() {
  const { about, schools, programmes, pillars, events, cta, map } = homePage;
  const featured = programs.filter((p) => p.featuredOnHome);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(programListJsonLd) }} />

      <HomeHero />
      <QuickActions />

      {/* About */}
      <section className="container-x py-24 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow={about.eyebrow} title={about.title} text={about.text} size="lg" />
            <Reveal delay={0.25}>
              <ButtonLink href={about.link.href} variant="ink" className="mt-8">
                {about.link.label}
              </ButtonLink>
            </Reveal>
            <Reveal delay={0.35}>
              <blockquote className="mt-14 border-l-2 border-gold-500 pl-6">
                <p className="font-display text-2xl leading-snug text-ink-900 lg:text-[1.75rem]">{about.quote}</p>
                <footer className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">{about.quoteCaption}</footer>
              </blockquote>
            </Reveal>
          </div>
          <div className="grid grid-cols-2 gap-4 lg:col-span-7 lg:gap-6">
            <MaskReveal className="col-span-2 rounded-3xl">
              <Picture src={about.images[0].key} alt={about.images[0].alt} ratio="aspect-[16/9]" sizes="(min-width: 1024px) 58vw, 100vw" />
            </MaskReveal>
            <MaskReveal className="rounded-3xl">
              <Picture src={about.images[1].key} alt={about.images[1].alt} ratio="aspect-[4/3]" sizes="(min-width: 1024px) 28vw, 50vw" />
            </MaskReveal>
            <MaskReveal className="rounded-3xl lg:mt-10">
              <Picture src={about.images[2].key} alt={about.images[2].alt} ratio="aspect-[4/3]" sizes="(min-width: 1024px) 28vw, 50vw" />
            </MaskReveal>
          </div>
        </div>
      </section>

      <ProofBand />

      {/* Schools */}
      <section className="surface-dark relative overflow-hidden">
        <div className="container-x pt-24 lg:pt-32">
          <SectionHeading eyebrow={schools.eyebrow} title={schools.title} size="lg" />
        </div>
        <div className="container-x pb-10 pt-12 lg:container-none lg:px-0 lg:pb-0 lg:pt-0">
          <SchoolsPanels />
        </div>
      </section>

      {/* Life at HARI tabs */}
      <section className="bg-sand-100">
        <div className="container-x py-20 lg:py-28">
          <Reveal>
            <Eyebrow className="mb-8">Science · Innovation · Community</Eyebrow>
          </Reveal>
          <LifeTabs />
        </div>
      </section>

      {/* Programmes */}
      <section className="container-x py-24 lg:py-32">
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading eyebrow={programmes.eyebrow} title={programmes.title} size="lg" />
          <Reveal delay={0.2}>
            <ArrowLink href={programmes.link.href}>{programmes.link.label}</ArrowLink>
          </Reveal>
        </div>
        <ProgramShowcase programs={featured} />
        <Reveal className="mt-10 lg:hidden">
          <ButtonLink href={programmes.link.href} variant="ink">
            {programmes.link.label}
          </ButtonLink>
        </Reveal>
      </section>

      {/* Pillars */}
      <section className="bg-ink-50/60 py-24 lg:py-32">
        <div className="container-x">
          <SectionHeading eyebrow={pillars.eyebrow} title={pillars.title} size="lg" />
          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.items.map((item, i) => (
              <StaggerItem key={item.title} as="article" className={i % 2 === 1 ? "lg:mt-12" : ""}>
                <div className="group relative overflow-hidden rounded-3xl">
                  <Picture src={item.image} alt={item.alt} ratio="aspect-[3/4]" imgClassName="transition-transform duration-[1200ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-105" sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" />
                  <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <h3 className="font-display text-xl !text-white lg:text-2xl">{item.title}</h3>
                    <p className="mt-2 text-sm text-sand-100/80">{item.text}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Events */}
      <section className="container-x py-24 lg:py-32">
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading eyebrow={events.eyebrow} title={events.title} size="lg" />
          <Reveal delay={0.2}>
            <ArrowLink href="/events">All events</ArrowLink>
          </Reveal>
        </div>
        <Stagger className="grid gap-8 md:grid-cols-2">
          {events.cards.map((card) => {
            const ev = getEvent(card.slug)!;
            return (
              <StaggerItem key={card.slug}>
                <EventCard event={ev} image={card.image} alt={card.alt} large />
              </StaggerItem>
            );
          })}
        </Stagger>
      </section>

      <HomeNews />

      <CtaBand eyebrow={cta.eyebrow} title={cta.title} text={cta.text} primary={cta.primary} secondary={cta.secondary} image={cta.image} />

      <MapSection
        id="hari-events-map"
        eyebrow={map.eyebrow}
        title={map.title}
        text={map.text}
        primary={{ label: "Open in Google Maps", href: contact.mapsSearch }}
        secondary={{ label: "Contact HARI", href: "/contact" }}
        embedSrc={contact.mapsEmbed}
        embedTitle={contact.mapsEmbedTitle}
      />

      <OrientationPopup />
    </>
  );
}
