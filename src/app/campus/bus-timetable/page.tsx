import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { StatGrid } from "@/components/ui/Stats";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading, Numeral } from "@/components/ui/Typography";
import { DataTable } from "@/components/ui/DataTable";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { busPage, cityToKanhaBuses, kanhaToCityBuses, studentBusRoutes } from "@/content/campus";
import { buildMetadata, breadcrumbJsonLd, serializeJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({ title: busPage.title, description: busPage.description, path: "/campus/bus-timetable" });

const cols = ["S.No", "Time", "From", "To", "Route Number", "Location"];

export default function BusTimetablePage() {
  const crumbs = [{ name: "Home", path: "/" }, { name: "Campus", path: "/campus" }, { name: "Bus Transport Details", path: "/campus/bus-timetable" }];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbJsonLd(crumbs)) }} />
      <PageHero eyebrow={busPage.hero.eyebrow} title={busPage.hero.title} intro={busPage.hero.intro} image="campusAerialAvenueD" imageAlt="Aerial view of the tree-lined avenue into the Kanha Shanti Vanam campus" size="md" crumbs={crumbs}>
        <div className="flex flex-wrap gap-3">
          {busPage.hero.links.map((l, i) => <ButtonLink key={l.href} href={l.href} variant={i ? "outline-light" : "primary"}>{l.label}</ButtonLink>)}
        </div>
      </PageHero>
      <section className="container-x py-16 lg:py-20"><StatGrid stats={busPage.stats} /></section>

      <section id="student-buses" className="container-x scroll-mt-28 pb-24">
        <SectionHeading eyebrow={busPage.studentSection.eyebrow} title={busPage.studentSection.title} size="md" />
        <Stagger className="mt-10 grid gap-6 md:grid-cols-2">
          {studentBusRoutes.map((r) => (
            <StaggerItem key={r.id} as="article" className="card overflow-hidden" >
              <div id={r.id} className="scroll-mt-28 border-b border-sand-200 bg-sand-50 p-6">
                <Numeral>{r.routeNo}</Numeral>
                <h3 className="mt-2 font-display text-2xl">{r.name}</h3>
                <p className="mt-1 text-sm text-stone-500">{r.intro}</p>
              </div>
              <ol className="grid grid-cols-2 gap-x-6 p-6 sm:grid-cols-3">
                {r.stops.map((s, i) => (
                  <li key={s} className="flex gap-3 border-b border-sand-200 py-2 text-sm">
                    <span className="w-5 tabular-nums text-stone-400">{i + 1}</span>
                    <span className={i === r.stops.length - 1 ? "font-semibold text-terracotta-700" : "text-stone-700"}>{s}</span>
                  </li>
                ))}
              </ol>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section id="public-buses" className="scroll-mt-28 bg-sand-100 py-24 lg:py-28">
        <div className="container-x">
          <SectionHeading eyebrow={busPage.publicSection.eyebrow} title={busPage.publicSection.title} size="md" />
          <div className="mt-12 space-y-14">
            <article id="kanha-to-city" className="scroll-mt-28">
              <SectionHeading eyebrow={busPage.kanhaToCity.eyebrow} title={busPage.kanhaToCity.title} text={busPage.kanhaToCity.text} size="sm" as="h3" />
              <Reveal className="mt-8"><DataTable caption="From Kanha towards city" columns={cols} rows={kanhaToCityBuses.map((b, i) => [i + 1, b.time, b.from, b.to, b.route, b.location])} emphasise={[1]} /></Reveal>
            </article>
            <article id="city-to-kanha" className="scroll-mt-28">
              <SectionHeading eyebrow={busPage.cityToKanha.eyebrow} title={busPage.cityToKanha.title} text={busPage.cityToKanha.text} size="sm" as="h3" />
              <Reveal className="mt-8"><DataTable caption="From city towards Kanha" columns={cols} rows={cityToKanhaBuses.map((b, i) => [i + 1, b.time, b.from, b.to, b.route, b.location])} emphasise={[1]} /></Reveal>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
