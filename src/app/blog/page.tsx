import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { NewsCard, PublicationCard } from "@/components/sections/Cards";
import { Timeline } from "@/components/sections/Timeline";
import { SectionHeading } from "@/components/ui/Typography";
import { ArrowLink, ArrowIcon } from "@/components/ui/Button";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { newsPage, newsPosts } from "@/content/news";
import { getPublication, newsPublicationIds } from "@/content/publications";
import { buildMetadata, breadcrumbJsonLd, serializeJsonLd, absoluteUrl, organizationId } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({ title: newsPage.title, description: newsPage.description, path: "/blog" });

export default function NewsPage() {
  const { hero, feedNote, milestones, media, publications, cta } = newsPage;
  const collectionJsonLd = { "@context": "https://schema.org", "@type": "CollectionPage", "@id": `${absoluteUrl("/blog")}#webpage`, url: absoluteUrl("/blog"), name: newsPage.collectionName, description: newsPage.collectionDescription, isPartOf: { "@id": organizationId }, about: { "@id": organizationId }, publisher: { "@id": organizationId }, inLanguage: "en-IN" };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: newsPage.title, path: "/blog" }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(collectionJsonLd) }} />
      <PageHero eyebrow={hero.eyebrow} title={hero.title} intro="HARI in the world — press coverage, institutional milestones, and selected research publications." image={hero.image} imageAlt={hero.imageAlt} size="md" />

      <section className="container-x py-20 lg:py-28">
        <Reveal><p className="max-w-3xl text-sm text-stone-500">{feedNote}</p></Reveal>
        <Stagger className="mt-10 grid gap-10 lg:grid-cols-12">
          <StaggerItem className="lg:col-span-7"><NewsCard post={newsPosts[0]} featured /></StaggerItem>
          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            {newsPosts.slice(1).map((p) => <StaggerItem key={p.slug}><NewsCard post={p} /></StaggerItem>)}
          </div>
        </Stagger>
      </section>

      <section className="surface-dark py-24 lg:py-32">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4"><SectionHeading eyebrow="Recognition" title={milestones.title} size="md" /></div>
          <div className="lg:col-span-8"><Timeline tone="dark" items={milestones.items.map((m) => ({ label: m.date, text: m.text }))} /></div>
        </div>
      </section>

      <section className="container-x py-24 lg:py-32">
        <SectionHeading eyebrow="Press" title={media.title} text={media.text} size="md" />
        <Reveal delay={0.1}>
          <p className="mt-12 text-xs font-semibold uppercase tracking-[0.16em] text-stone-500">{media.featuredIn}</p>
          <ul className="mt-6 grid grid-cols-2 items-center gap-x-10 gap-y-8 sm:grid-cols-4 lg:grid-cols-7">
            {media.logos.map((l) => (
              <li key={l.name} className="flex items-center justify-center">
                <Image src={l.src} alt={l.name} width={l.width} height={l.height} className="h-8 w-auto max-w-[9rem] object-contain opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0" />
              </li>
            ))}
          </ul>
        </Reveal>
        <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
          {media.articles.map((a) => (
            <StaggerItem key={a.href}>
              <a href={a.href} target="_blank" rel="noopener noreferrer" className="card card-hover group flex h-full flex-col p-7">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-terracotta-600">{a.outlet}</span>
                <span className="mt-3 flex-1 font-display text-xl leading-snug text-ink-950 group-hover:text-terracotta-700">{a.title}</span>
                <span className="mt-5 flex items-center justify-between text-sm text-stone-500">{a.date}<span className="link-arrow">Read <ArrowIcon /></span></span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="bg-sand-100 py-24 lg:py-32">
        <div className="container-x">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading eyebrow="Research" title={publications.title} text={publications.text} size="md" />
            <Reveal delay={0.2}><ArrowLink href={publications.link.href}>{publications.link.label.replace(" →", "")}</ArrowLink></Reveal>
          </div>
          <Stagger className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {newsPublicationIds.map((id) => <StaggerItem key={id}><PublicationCard pub={getPublication(id)!} /></StaggerItem>)}
          </Stagger>
        </div>
      </section>

      <CtaBand {...cta} />
    </>
  );
}
