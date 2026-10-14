import { PageHero } from "./PageHero";
import { MapSection } from "./MapSection";
import { SectionHeading, Numeral } from "@/components/ui/Typography";
import { ButtonLink } from "@/components/ui/Button";
import { Picture } from "@/components/ui/Picture";
import { StatGrid } from "@/components/ui/Stats";
import { DataTable } from "@/components/ui/DataTable";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { MaskReveal } from "@/components/motion/Parallax";
import type { Crumb } from "@/components/ui/Breadcrumbs";
import { orientation as o } from "@/content/events";
import { contact } from "@/content/site";

const busCols = ["Time", "From", "To", "Route", "Boarding Location"];

/** Orientation Day 2026 — full operational desk for parents and students. */
export function OrientationTemplate({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <>
      <PageHero eyebrow={o.hero.eyebrow} title={o.hero.title} intro={o.hero.intro} crumbs={crumbs} image="studentsBlazersWalking" imageAlt="HARI students in blazers walking together along a campus path" size="md">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="flex flex-wrap gap-4">
              <ButtonLink href={o.hero.primary.href}>{o.hero.primary.label}</ButtonLink>
              <ButtonLink href={o.hero.secondary.href} variant="outline-light" arrow={false}>{o.hero.secondary.label}</ButtonLink>
              <ButtonLink href={o.hero.invitationPdf} variant="outline-light" download arrow={false}>{o.hero.invitationLabel}</ButtonLink>
            </div>
            <StatGrid stats={o.facts} tone="dark" className="mt-10" compact />
          </div>
          <MaskReveal className="rounded-3xl lg:col-span-5">
            <Picture src={o.hero.poster} alt={o.hero.posterAlt} ratio="aspect-[2/3]" sizes="(min-width: 1024px) 35vw, 100vw" priority />
          </MaskReveal>
        </div>
      </PageHero>

      <nav aria-label="Orientation sections" className="sticky top-[var(--header-height)] z-30 border-y border-sand-300 bg-white/90 backdrop-blur">
        <ul className="container-x scrollbar-none flex gap-6 overflow-x-auto py-3 text-sm font-medium">
          {o.sectionNav.map((s) => <li key={s.href} className="shrink-0"><a href={s.href} className="text-stone-600 hover:text-terracotta-700">{s.label}</a></li>)}
        </ul>
      </nav>

      <section id="orientation-desk" className="container-x scroll-mt-40 py-20 lg:py-28">
        <SectionHeading eyebrow={o.desk.eyebrow} title={o.desk.title} size="md" />
        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          <Reveal className="card p-8 lg:col-span-7">
            <div className="flex items-center gap-3"><h3 className="font-display text-2xl">{o.desk.briefTitle}</h3><span className="rounded-full bg-terracotta-50 px-2.5 py-1 text-xs font-semibold text-terracotta-700">{o.desk.briefTag}</span></div>
            <div className="mt-4 space-y-4 text-stone-700">{o.desk.brief.map((p, i) => <p key={i}>{p}</p>)}</div>
          </Reveal>
          <Stagger className="grid gap-4 lg:col-span-5">
            {o.desk.keyDates.map((k) => (
              <StaggerItem key={k.label} className="rounded-2xl bg-ink-900 p-6 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-500">{k.label}</p>
                <p className="mt-2 font-display text-xl">{k.value}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section id="programme" className="scroll-mt-40 bg-sand-100 py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading eyebrow={o.programme.eyebrow} title={o.programme.title} size="md" />
          <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {o.programme.steps.map((s) => (
              <StaggerItem key={s.number} className="card p-6"><Numeral>{s.number}</Numeral><h3 className="mt-3 font-display text-xl">{s.title}</h3><p className="mt-2 text-sm text-stone-600">{s.text}</p></StaggerItem>
            ))}
          </Stagger>
          <Reveal className="mt-10">
            <dl className="grid gap-6 rounded-3xl border border-gold-200 bg-white p-8 md:grid-cols-3">
              {o.programme.guests.map((g) => <div key={g.label}><dt className="text-xs font-semibold uppercase tracking-[0.16em] text-terracotta-600">{g.label}</dt><dd className="mt-2 text-stone-800">{g.value}</dd></div>)}
            </dl>
          </Reveal>
        </div>
      </section>

      <section id="accommodation" className="container-x scroll-mt-40 py-20 lg:py-28">
        <SectionHeading eyebrow={o.accommodation.eyebrow} title={o.accommodation.title} size="md" />
        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          <Stagger className="grid gap-4 lg:col-span-5">
            {o.accommodation.facts.map((f) => <StaggerItem key={f.label} className="card p-6"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-500">{f.label}</p><p className="mt-2 font-medium text-ink-950">{f.value}</p></StaggerItem>)}
          </Stagger>
          <Reveal className="lg:col-span-7">
            <h3 className="font-display text-xl">{o.accommodation.tableTitle}</h3>
            <DataTable className="mt-4" caption={o.accommodation.tableTitle} columns={["S. No.", "Particulars"]} rows={o.accommodation.particulars.map((p, i) => [i + 1, p])} />
            <p className="mt-5 text-sm leading-relaxed text-stone-600">{o.accommodation.note}</p>
          </Reveal>
        </div>
      </section>

      <section id="hostel" className="scroll-mt-40 surface-dark py-20 lg:py-28">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5"><SectionHeading eyebrow={o.hostel.eyebrow} title={o.hostel.title} text={o.hostel.text} size="md" /></div>
          <Stagger className="grid gap-3 sm:grid-cols-2 lg:col-span-7" stagger={0.05}>
            {o.hostel.items.map((it) => <StaggerItem key={it} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-sand-100/90"><span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />{it}</StaggerItem>)}
            <StaggerItem className="sm:col-span-2 text-sm text-sand-200/70">{o.hostel.note}</StaggerItem>
          </Stagger>
        </div>
      </section>

      <section id="transport" className="container-x scroll-mt-40 py-20 lg:py-28">
        <SectionHeading eyebrow={o.transport.eyebrow} title={o.transport.title} text={o.transport.text} size="md" />
        <Reveal className="mt-12">
          <h3 className="font-display text-xl">{o.transport.routesTitle}</h3>
          <DataTable className="mt-4" caption={o.transport.routesTitle} columns={["S. No.", "Route No.", "Starting Point", "Via", "Contact Number of In-charge / Driver"]} rows={o.transport.routes.map((r) => [r.sno, r.routeNo, r.start, r.via, r.contact])} emphasise={[2]} />
        </Reveal>
        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <Reveal><h3 className="font-display text-xl">{o.transport.cityToKanhaTitle}</h3><DataTable className="mt-4" caption={o.transport.cityToKanhaTitle} columns={busCols} rows={o.transport.cityToKanha.map((b) => [b.time, b.from, b.to, b.route, b.location])} emphasise={[0]} /></Reveal>
          <Reveal delay={0.1}><h3 className="font-display text-xl">{o.transport.kanhaToCityTitle}</h3><DataTable className="mt-4" caption={o.transport.kanhaToCityTitle} columns={busCols} rows={o.transport.kanhaToCity.map((b) => [b.time, b.from, b.to, b.route, b.location])} emphasise={[0]} /></Reveal>
        </div>
      </section>

      <section id="documents" className="scroll-mt-40 bg-sand-100 py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading eyebrow={o.documents.eyebrow} title={o.documents.title} size="md" />
          <Stagger className="mt-12 grid gap-5 md:grid-cols-3">
            {o.documents.cards.map((c) => (
              <StaggerItem key={c.title} className="card p-7">
                <h3 className="font-display text-xl">{c.title}</h3>
                {"text" in c && c.text && <p className="mt-3 text-sm text-stone-600">{c.text}</p>}
                {"items" in c && c.items && <ul className="mt-3 space-y-2 text-sm text-stone-600">{c.items.map((i) => <li key={i} className="flex gap-2"><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta-500" />{i}</li>)}</ul>}
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal className="mt-10 card p-8">
            <h3 className="font-display text-xl">{o.documents.documentsTitle}</h3>
            <ol className="mt-5 grid gap-x-8 gap-y-2 sm:grid-cols-2">
              {o.documents.documents.map((d, i) => <li key={d} className="flex gap-3 border-b border-sand-200 py-2 text-sm text-stone-700"><span className="w-5 tabular-nums text-stone-400">{i + 1}</span>{d}</li>)}
            </ol>
            <p className="mt-5 text-sm text-stone-600">{o.documents.note}</p>
          </Reveal>
        </div>
      </section>

      <div id="venue" className="scroll-mt-40">
        <MapSection eyebrow={o.venue.eyebrow} title={o.venue.title} text={o.venue.text} primary={o.venue.primary} secondary={o.venue.secondary} embedSrc={contact.mapsEmbed} embedTitle={contact.mapsEmbedTitle} />
      </div>
    </>
  );
}
