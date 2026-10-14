import { PageHero } from "./PageHero";
import { MapSection } from "./MapSection";
import { Form } from "@/components/forms/Form";
import { udaanFields } from "@/components/forms/definitions";
import { SectionHeading, Badge } from "@/components/ui/Typography";
import { ButtonLink } from "@/components/ui/Button";
import { Picture } from "@/components/ui/Picture";
import { StatGrid } from "@/components/ui/Stats";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { MaskReveal } from "@/components/motion/Parallax";
import type { Crumb } from "@/components/ui/Breadcrumbs";
import { udaan as u } from "@/content/events";
import { udaanFormCopy } from "@/content/contact";
import { cn } from "@/lib/utils";

const tierTone = { Gold: "border-gold-500 bg-gold-200/40", Silver: "border-stone-300 bg-stone-100", Bronze: "border-terracotta-500/50 bg-terracotta-50" } as const;

/** HARI Udaan 2026 — Andhra Pradesh Merit Excellence Awards. */
export function UdaanTemplate({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <>
      <PageHero variant="editorial" eyebrow={u.hero.eyebrow} title={u.hero.title} intro={u.hero.subtitle} crumbs={crumbs}>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="max-w-xl text-stone-700">{u.hero.text}</p>
            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 font-display text-xl text-ink-950"><span>{u.hero.date} · {u.hero.day}</span><span>{u.hero.venue}</span></div>
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href={u.hero.primary.href} variant="ink">{u.hero.primary.label}</ButtonLink>
              <ButtonLink href={u.venueMapSearch} variant="outline" external>{u.hero.secondary.label}</ButtonLink>
            </div>
          </div>
          <MaskReveal className="rounded-3xl lg:col-span-5"><Picture src={u.hero.poster} alt={u.hero.posterAlt} ratio="aspect-[4/5]" sizes="(min-width: 1024px) 35vw, 100vw" priority /></MaskReveal>
        </div>
      </PageHero>

      <section aria-label="Key event information" className="container-x py-16 lg:py-20"><StatGrid stats={u.keyInfo} /></section>

      <section id="event-details" className="container-x scroll-mt-28 pb-24">
        <SectionHeading eyebrow={u.categories.eyebrow} title={u.categories.title} text={u.categories.text} size="md" />
        <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
          {u.categories.items.map((c) => (
            <StaggerItem key={c.tier} as="article" className={cn("rounded-3xl border-2 p-8", tierTone[c.tier as keyof typeof tierTone])}>
              <p className="font-display text-3xl">{c.tier}</p>
              <p className="mt-1 text-sm font-semibold uppercase tracking-[0.14em] text-stone-600">{c.range}</p>
              <ul className="mt-5 space-y-2 text-stone-700">{c.perks.map((p) => <li key={p} className="flex gap-2"><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink-900" />{p}</li>)}</ul>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="surface-dark py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading eyebrow={u.receive.eyebrow} title={u.receive.title} size="md" />
          <Stagger className="mt-10 flex flex-wrap gap-3">{u.receive.items.map((i) => <StaggerItem key={i}><Badge tone="glass" className="!px-4 !py-2 !text-sm">{i}</Badge></StaggerItem>)}</Stagger>
        </div>
      </section>

      <section className="container-x py-24">
        <SectionHeading eyebrow={u.posters.eyebrow} title={u.posters.title} size="md" />
        <Stagger className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {u.posters.items.map((p) => (
            <StaggerItem key={p.caption} as="figure"><MaskReveal className="rounded-2xl"><Picture src={p.image} alt={p.alt} ratio="aspect-[4/5]" sizes="(min-width: 1024px) 25vw, 50vw" /></MaskReveal><figcaption className="mt-3 text-sm text-stone-500">{p.caption}</figcaption></StaggerItem>
          ))}
        </Stagger>
      </section>

      <div className="bg-sand-100">
        <MapSection eyebrow={u.venue.eyebrow} title={u.venue.title} address={u.venue.address} contactLine={u.venue.contactLine} primary={{ label: u.venue.primary.label, href: u.venueMapSearch }} secondary={u.venue.secondary} embedSrc={u.venueMapEmbed} embedTitle={u.venueMapTitle} />
      </div>

      <section className="container-x py-20 text-center lg:py-24">
        <SectionHeading title={u.join.title} text={u.join.text} align="center" size="md" />
        <Reveal delay={0.2}><ButtonLink href={u.join.link.href} className="mt-8">{u.join.link.label}</ButtonLink></Reveal>
      </section>

      <section id="registration" className="scroll-mt-28 bg-ink-50/60 py-24">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow={u.registration.eyebrow} title={u.registration.title} text={u.registration.text} size="md" />
            <dl className="mt-8 space-y-4">{u.registration.facts.map((f) => <div key={f.label}><dt className="text-xs font-semibold uppercase tracking-[0.16em] text-terracotta-600">{f.label}</dt><dd className="mt-1 text-stone-700">{f.value}</dd></div>)}</dl>
          </div>
          <div className="card p-8 lg:col-span-7">
            <h3 className="font-display text-2xl">{u.registration.formTitle}</h3>
            <Form kind="udaan" fields={udaanFields} submitLabel={udaanFormCopy.submit} extra={{ event_name: "HARI Udaan 2026 Andhra Pradesh" }} className="mt-6" />
          </div>
        </div>
      </section>
    </>
  );
}
