import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Form } from "@/components/forms/Form";
import { applyFields } from "@/components/forms/definitions";
import { SectionHeading } from "@/components/ui/Typography";
import { ProgramCard } from "@/components/sections/Cards";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { applyPage } from "@/content/contact";
import { programs } from "@/content/programs";
import { contact } from "@/content/site";
import { buildMetadata, breadcrumbJsonLd, serializeJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({ title: applyPage.title, description: applyPage.description, path: "/apply" });

export default function ApplyPage() {
  const { hero, form } = applyPage;
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: applyPage.title, path: "/apply" }])) }} />
      <PageHero eyebrow={hero.eyebrow} title={hero.title} intro={hero.intro} image={hero.image} imageAlt="Aerial view of the Kanha Shanti Vanam campus avenue" size="md" />
      <section className="container-x py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow={form.eyebrow} title={form.title} text={form.text} size="sm" />
            <Reveal delay={0.15}>
              <div className="mt-8 rounded-2xl bg-sand-100 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-terracotta-600">{form.tipsTitle}</p>
                <ul className="mt-3 space-y-2 text-sm text-stone-700">{form.tips.map((t) => <li key={t} className="flex gap-2"><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />{t}</li>)}</ul>
              </div>
              <p className="mt-6 text-sm text-stone-500">Prefer to talk? <a href={`tel:${contact.phones[0].tel}`} className="font-semibold text-ink-900">{contact.phones[0].display}</a> · <a href={`mailto:${contact.email}`} className="font-semibold text-ink-900">{contact.email}</a></p>
            </Reveal>
          </div>
          <div className="card p-8 lg:col-span-8 lg:p-10"><Form kind="apply" fields={applyFields} submitLabel={form.submit} /></div>
        </div>
      </section>
      <section className="bg-sand-100 py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading eyebrow="AY 2026-27" title="Programmes open for admission" size="md" />
          <Stagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{programs.map((p) => <StaggerItem key={p.slug}><ProgramCard program={p} /></StaggerItem>)}</Stagger>
        </div>
      </section>
    </>
  );
}
