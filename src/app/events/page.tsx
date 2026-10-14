import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { MapSection } from "@/components/sections/MapSection";
import { EventCard } from "@/components/sections/Cards";
import { SectionHeading, Badge } from "@/components/ui/Typography";
import { ButtonLink } from "@/components/ui/Button";
import { Picture } from "@/components/ui/Picture";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { MaskReveal } from "@/components/motion/Parallax";
import { eventCardOrder, eventsPage, getEvent } from "@/content/events";
import { contact } from "@/content/site";
import { buildMetadata, breadcrumbJsonLd, serializeJsonLd } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({ title: eventsPage.title, description: eventsPage.description, path: "/events" });

function Featured({ data, reverse }: { data: typeof eventsPage.featuredOrientation & { note?: string }; reverse?: boolean }) {
  return (
    <section className={cn("container-x py-16 lg:py-20")}>
      <div className={cn("grid items-center gap-10 overflow-hidden rounded-3xl bg-white shadow-card lg:grid-cols-12", reverse && "lg:[&>*:first-child]:order-2")}>
        <MaskReveal className="lg:col-span-5" direction={reverse ? "left" : "up"}>
          <Picture src={data.image} alt={data.imageAlt} ratio="aspect-[3/4] lg:aspect-auto lg:h-full lg:min-h-[32rem]" sizes="(min-width: 1024px) 40vw, 100vw" position="top" />
        </MaskReveal>
        <div className="p-8 lg:col-span-7 lg:p-14">
          <Badge tone="terracotta">{data.eyebrow}</Badge>
          <h2 className="display-md mt-5">{data.title}</h2>
          <Reveal delay={0.1}><p className="lead mt-5">{data.text}</p></Reveal>
          <Reveal delay={0.15}>
            <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm font-medium text-ink-900">
              {data.facts.map((f) => <li key={f} className="flex items-center gap-2"><span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gold-500" />{f}</li>)}
            </ul>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <ButtonLink href={data.link.href} variant="ink">{data.link.label}</ButtonLink>
              {data.note && <span className="text-xs text-stone-500">{data.note}</span>}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default function EventsPage() {
  const { hero, featuredOrientation, featuredUdaan, map } = eventsPage;
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: eventsPage.title, path: "/events" }])) }} />
      <PageHero eyebrow={hero.eyebrow} title={hero.title} intro="Upcoming HARI University events, seminars, student activities and campus programmes at Kanha Shanti Vanam, Hyderabad." image={hero.image} imageAlt={hero.imageAlt} size="md" video />
      <div className="bg-sand-100 pt-8">
        <Featured data={featuredOrientation} />
        <Featured data={featuredUdaan} reverse />
      </div>
      <section className="container-x py-24 lg:py-32">
        <SectionHeading eyebrow="Calendar" title="All events" size="md" />
        <Stagger className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {eventCardOrder.map((slug) => { const ev = getEvent(slug)!; return <StaggerItem key={slug}><EventCard event={ev} /></StaggerItem>; })}
        </Stagger>
      </section>
      <MapSection id="hari-events-map" eyebrow={map.eyebrow} title={map.title} text={map.text} primary={map.primary} secondary={map.secondary} embedSrc={contact.mapsEmbed} embedTitle={contact.mapsEmbedTitle} />
    </>
  );
}
