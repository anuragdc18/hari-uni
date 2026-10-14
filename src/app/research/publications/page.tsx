import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { PublicationBrowser } from "@/components/sections/PublicationBrowser";
import { publicationsPage } from "@/content/publications";
import { buildMetadata, breadcrumbJsonLd, serializeJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({ title: publicationsPage.title, description: publicationsPage.description, path: "/research/publications" });

export default function PublicationsPage() {
  const crumbs = [{ name: "Home", path: "/" }, { name: "Research", path: "/research" }, { name: "Research Publications", path: "/research/publications" }];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbJsonLd(crumbs)) }} />
      <PageHero eyebrow={publicationsPage.hero.eyebrow} title={publicationsPage.hero.title} intro={publicationsPage.hero.intro} image="tissueCultureJars" imageAlt="Plant tissue-culture jars in a HARI laboratory" crumbs={crumbs} size="md" />
      <section className="container-x py-20 lg:py-28"><PublicationBrowser /></section>
      <CtaBand {...publicationsPage.cta} image="academicBuildingBrickGlassD" />
    </>
  );
}
