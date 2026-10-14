import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ProgramCard } from "@/components/sections/Cards";
import { CtaBand } from "@/components/sections/CtaBand";
import { SectionHeading } from "@/components/ui/Typography";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { programs } from "@/content/programs";
import { schools } from "@/content/academics";
import { buildMetadata, breadcrumbJsonLd, serializeJsonLd, absoluteUrl } from "@/lib/seo";

const title = "Programmes | HARI University Hyderabad";
const description =
  "Browse undergraduate and postgraduate programmes at HARI University, including Agriculture, Horticulture, Computer Science, AI, Data Science, Cyber Security, Management and Philosophy.";

export const metadata: Metadata = buildMetadata({ title, description, path: "/programs" });

export default function ProgramsPage() {
  const listJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "HARI University Programmes",
    itemListElement: programs.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p.name, item: absoluteUrl(`/programs/${p.slug}`) })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: title, path: "/programs" }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(listJsonLd) }} />
      <PageHero eyebrow="Our programmes" title="HARI" intro="Eight fully residential programmes across four Schools — each one earned in a living laboratory at Kanha Shanti Vanam." image="academicBuildingBrickGlassD" imageAlt="An academic building in terracotta brick and glass at Kanha Shanti Vanam" stats={[{ value: "8", label: "Programmes" }, { value: "4", label: "Schools" }, { value: "AY 2026-27", label: "Admissions open" }]} video />

      {schools.map((school) => {
        const list = programs.filter((p) => p.schoolSlug === school.slug);
        return (
          <section key={school.slug} className="container-x py-16 first:pt-24 last:pb-24 lg:py-20">
            <SectionHeading eyebrow={`School ${school.number}`} title={school.name} text={school.homeSummary} size="sm" />
            <Stagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {list.map((p) => (
                <StaggerItem key={p.slug}>
                  <ProgramCard program={p} index={programs.indexOf(p)} />
                </StaggerItem>
              ))}
            </Stagger>
          </section>
        );
      })}

      <CtaBand eyebrow="Admissions AY 2026-27" title="Ready to apply?" text="Share your programme preference and contact details — the admissions team will follow up with the next steps." primary={{ label: "Apply Now", href: "/apply" }} secondary={{ label: "Contact Admissions", href: "/contact" }} image="studentsBlazersWalking" />
    </>
  );
}
