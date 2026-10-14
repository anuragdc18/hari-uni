import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/PageHero";
import { EventCard } from "@/components/sections/Cards";
import { OrientationTemplate } from "@/components/sections/OrientationTemplate";
import { UdaanTemplate } from "@/components/sections/UdaanTemplate";
import { SectionHeading, Prose } from "@/components/ui/Typography";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { events, getEvent, orientation, udaan } from "@/content/events";
import { contact } from "@/content/site";
import { img } from "@/assets/registry";
import { buildMetadata, breadcrumbJsonLd, serializeJsonLd, absoluteUrl } from "@/lib/seo";

export const dynamicParams = false;
export function generateStaticParams() { return events.map((e) => ({ slug: e.slug })); }

export async function generateMetadata({ params }: PageProps<"/events/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const ev = getEvent(slug);
  if (!ev) return {};
  const title = ev.template === "orientation" ? orientation.title : ev.template === "udaan" ? udaan.title : `${ev.title} | HARI`;
  const description = ev.template === "orientation" ? orientation.description : ev.template === "udaan" ? udaan.description : ev.description;
  const im = img[ev.heroImage];
  return buildMetadata({ title, description, path: `/events/${slug}`, image: { url: im.src, width: im.width, height: im.height, alt: ev.heroAlt } });
}

export default async function EventPage({ params }: PageProps<"/events/[slug]">) {
  const { slug } = await params;
  const ev = getEvent(slug);
  if (!ev) notFound();
  const crumbs = [{ name: "Home", path: "/" }, { name: "Events", path: "/events" }, { name: ev.title, path: `/events/${ev.slug}` }];
  const isUdaan = ev.template === "udaan";
  const eventJsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: ev.schemaName ?? ev.title,
    description: ev.template === "orientation" ? orientation.description : ev.template === "udaan" ? udaan.description : ev.description,
    startDate: ev.startDate,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    image: isUdaan ? udaan.posters.items.map((p) => absoluteUrl(img[p.image].src)) : [absoluteUrl(img[ev.heroImage].src)],
    url: absoluteUrl(`/events/${ev.slug}`),
    location: isUdaan
      ? { "@type": "Place", name: "Sree Srinivas Conventions", address: { "@type": "PostalAddress", streetAddress: "Opposite Aparna Amaravathi One Road, Kunchanapalli, Tadepalli, Vijayawada", addressLocality: "Vijayawada", addressRegion: "Andhra Pradesh", addressCountry: "IN" } }
      : { "@type": "Place", name: ev.location, address: { "@type": "PostalAddress", ...contact.postal } },
    organizer: { "@type": "Organization", name: "HARI University", url: absoluteUrl("/") },
  };
  const others = events.filter((e) => e.slug !== ev.slug).slice(0, 3);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbJsonLd(crumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(eventJsonLd) }} />
      {ev.template === "orientation" && <OrientationTemplate crumbs={crumbs} />}
      {ev.template === "udaan" && <UdaanTemplate crumbs={crumbs} />}
      {ev.template === "standard" && (
        <>
          <PageHero eyebrow="Event" title={ev.title} intro={`${ev.dateLabel} / ${ev.location}`} image={ev.heroImage} imageAlt={ev.heroAlt} crumbs={crumbs} size="md" />
          <section className="container-x py-20 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <aside className="lg:col-span-4">
                <Reveal>
                  <dl className="card divide-y divide-sand-200 overflow-hidden">
                    {[["Date", ev.dateLabel], ["Venue", ev.location]].map(([k, v]) => (
                      <div key={k} className="grid grid-cols-[5rem_1fr] gap-4 px-6 py-4"><dt className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-500">{k}</dt><dd className="font-medium text-ink-950">{k === "Date" ? <time dateTime={ev.startDate}>{v}</time> : v}</dd></div>
                    ))}
                  </dl>
                  {ev.dateNote && <p className="mt-4 text-sm text-stone-500">{ev.dateNote}</p>}
                  <ButtonLink href={ev.registerHref} className="mt-8">{ev.registerLabel}</ButtonLink>
                </Reveal>
              </aside>
              <div className="lg:col-span-8">
                <Reveal><p className="font-display text-2xl leading-snug text-ink-900">{ev.summary}</p></Reveal>
                <Reveal delay={0.1}><Prose className="mt-8 !max-w-none text-[1.125rem]">{ev.body.map((p, i) => <p key={i}>{p}</p>)}</Prose></Reveal>
              </div>
            </div>
          </section>
        </>
      )}
      <section className="bg-sand-100 py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading eyebrow="More" title="Other events at HARI" size="md" />
          <Stagger className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((e) => <StaggerItem key={e.slug}><EventCard event={e} /></StaggerItem>)}
          </Stagger>
        </div>
      </section>
    </>
  );
}
