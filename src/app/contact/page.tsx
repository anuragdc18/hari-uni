import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { MapSection } from "@/components/sections/MapSection";
import { Form } from "@/components/forms/Form";
import { contactFields } from "@/components/forms/definitions";
import { SectionHeading } from "@/components/ui/Typography";
import { Accordion } from "@/components/ui/Accordion";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { contactPage, faqs } from "@/content/contact";
import { contact } from "@/content/site";
import { IconTile } from "@/components/ui/Icon";
import { buildMetadata, breadcrumbJsonLd, serializeJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({ title: contactPage.title, description: contactPage.description, path: "/contact" });

export default function ContactPage() {
  const { hero, channels, form, address, faqTitle } = contactPage;
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: contactPage.title, path: "/contact" }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqJsonLd) }} />
      <PageHero eyebrow={hero.eyebrow} title={hero.title} intro={hero.intro} image="aiContactApplyBanner" imageAlt="The HARI admissions office" size="md" />

      <section className="container-x py-20 lg:py-28">
        <Stagger className="grid gap-5 md:grid-cols-3">
          {channels.map((c) => (
            <StaggerItem key={c.title} className="card p-7">
              <IconTile name={c.title === "Admissions" ? "send" : c.title.startsWith("Research") ? "flask" : "news"} tone="terracotta" className="mb-4" />
              <h2 className="font-display text-xl">{c.title}</h2>
              {"phones" in c && c.phones && <p className="mt-3 flex flex-col text-sm">{c.phones.map((p) => <a key={p.tel} href={`tel:${p.tel}`} className="font-semibold text-ink-900 hover:underline">{p.display}</a>)}</p>}
              <a href={`mailto:${c.email}`} className="mt-3 block text-sm font-semibold text-terracotta-700 hover:underline">{c.email}</a>
              {"hours" in c && c.hours && <p className="mt-2 text-xs text-stone-500">{c.hours}</p>}
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-20 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow={form.eyebrow} title={form.title} text={form.text} size="sm" />
            <Reveal delay={0.15}>
              <div className="mt-8 rounded-2xl bg-sand-100 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-terracotta-600">{form.purposeTitle}</p>
                <ul className="mt-3 space-y-2 text-sm text-stone-700">{form.purposes.map((t) => <li key={t} className="flex gap-2"><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />{t}</li>)}</ul>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <address className="mt-8 not-italic">
                <p className="eyebrow">{address.eyebrow}</p>
                <p className="mt-4 text-stone-700">{address.lines.map((l) => <span key={l} className="block">{l}</span>)}</p>
                <p className="mt-4 text-sm text-stone-500"><span className="font-semibold text-stone-700">{address.airportLabel}</span> {address.airport}</p>
              </address>
            </Reveal>
          </div>
          <div className="card p-8 lg:col-span-8 lg:p-10"><Form kind="contact" fields={contactFields} submitLabel={form.submit} /></div>
        </div>
      </section>

      <section className="bg-sand-100 py-20 lg:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4"><SectionHeading title={faqTitle} size="md" /></div>
          <div className="lg:col-span-8"><Reveal><Accordion items={faqs} /></Reveal></div>
        </div>
      </section>

      <MapSection eyebrow="Find us" title="HARI University, Kanha Shanti Vanam." text="Use the map to reach HARI University for campus visits, admissions and events at Kanha Shanti Vanam, Hyderabad." primary={{ label: "Open in Google Maps", href: contact.mapsSearch }} secondary={{ label: "WhatsApp HARI", href: contact.whatsapp }} embedSrc={contact.mapsEmbed} embedTitle={contact.mapsEmbedTitle} />
    </>
  );
}
