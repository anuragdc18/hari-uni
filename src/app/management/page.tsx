import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/Typography";
import { Picture } from "@/components/ui/Picture";
import { StatGrid } from "@/components/ui/Stats";
import { ButtonLink, ArrowIcon } from "@/components/ui/Button";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { managementPage } from "@/content/leadership";
import { buildMetadata, breadcrumbJsonLd, serializeJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({ title: managementPage.title, description: managementPage.description, path: "/management" });

export default function ManagementPage() {
  const { hero, cards, spotlight, profileBlock, updates, closing } = managementPage;
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Management", path: "/management" }])) }} />
      <PageHero eyebrow={hero.eyebrow} title={hero.title} intro={hero.intro} image="auditoriumGatheringC" imageAlt="A gathering in the campus auditorium at Kanha Shanti Vanam" size="md" video crumbs={[{ name: "Home", path: "/" }, { name: "Management", path: "/management" }]} />

      <section className="container-x py-20 lg:py-28">
        <Stagger className="grid gap-8 md:grid-cols-3">
          {cards.map((c) => (
            <StaggerItem key={c.role} as="article" className="card card-hover flex h-full flex-col overflow-hidden">
              <Picture src={c.image} alt={c.imageAlt} ratio="aspect-[7/5]" sizes="(min-width: 768px) 33vw, 100vw" position="top" />
              <div className="flex flex-1 flex-col p-7">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-terracotta-600">{c.role}</span>
                <h2 className="mt-3 font-display text-2xl">{c.name}</h2>
                <p className="mt-3 flex-1 text-stone-600">{c.text}</p>
                {c.href && (
                  <Link href={c.href} className="link-arrow mt-6 text-sm">
                    {c.linkLabel} <ArrowIcon />
                  </Link>
                )}
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="surface-dark py-24 lg:py-32">
        <div className="container-x">
          <SectionHeading eyebrow={spotlight.eyebrow} title={spotlight.title} text={spotlight.text} size="lg" />
          <StatGrid stats={spotlight.stats} tone="dark" className="mt-14" />
        </div>
      </section>

      <section className="container-x grid gap-8 py-20 lg:grid-cols-2 lg:py-28">
        <Reveal className="card p-8 lg:p-10">
          <h2 className="font-display text-2xl">{profileBlock.title}</h2>
          <p className="mt-4 text-stone-600">{profileBlock.text}</p>
          <ButtonLink href={profileBlock.link.href} variant="ink" className="mt-8">
            {profileBlock.link.label}
          </ButtonLink>
        </Reveal>
        <Reveal delay={0.15} className="card p-8 lg:p-10">
          <h2 className="font-display text-2xl">{updates.title}</h2>
          <ul className="mt-5 space-y-3">
            {updates.items.map((u) => (
              <li key={u} className="flex gap-3 text-stone-600">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta-500" />
                {u}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="bg-sand-100 py-20 lg:py-28">
        <div className="container-x text-center">
          <SectionHeading title={closing.title} text={closing.text} align="center" size="md" />
          <Reveal delay={0.2}>
            <ButtonLink href={closing.link.href} className="mt-8">
              {closing.link.label}
            </ButtonLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}
