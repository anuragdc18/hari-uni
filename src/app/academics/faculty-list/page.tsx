import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { StatGrid } from "@/components/ui/Stats";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/Typography";
import { DataTable } from "@/components/ui/DataTable";
import { Reveal } from "@/components/motion/Reveal";
import { FacultyTable } from "@/components/sections/FacultyTable";
import { faculty, facultyPage, guestFaculty } from "@/content/faculty";
import { buildMetadata, breadcrumbJsonLd, serializeJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({ title: facultyPage.title, description: facultyPage.description, path: "/academics/faculty-list" });

export default function FacultyListPage() {
  const crumbs = [{ name: "Home", path: "/" }, { name: "Academics", path: "/academics" }, { name: "Faculty List", path: "/academics/faculty-list" }];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbJsonLd(crumbs)) }} />
      <PageHero eyebrow={facultyPage.hero.eyebrow} title={facultyPage.hero.title} intro={facultyPage.hero.intro} image="facultyTeachingPlantSpecimen" imageAlt="A HARI faculty member teaching students with a plant specimen" size="md" crumbs={crumbs}>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="#faculty-details" variant="primary">Faculty Details</ButtonLink>
          <ButtonLink href="#guest-faculty" variant="outline-light">Guest Faculty</ButtonLink>
        </div>
      </PageHero>

      <section className="container-x py-16 lg:py-20">
        <StatGrid stats={facultyPage.stats} />
      </section>

      <section id="faculty-details" className="container-x scroll-mt-28 pb-20 lg:pb-28">
        <SectionHeading eyebrow="Faculty list" title="Faculty Details" text={facultyPage.facultyIntro} size="md" />
        <FacultyTable members={faculty} />
      </section>

      <section id="guest-faculty" className="scroll-mt-28 bg-sand-100 py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading eyebrow="Academic contributors" title="Guest Faculty" text={facultyPage.guestIntro} size="md" />
          <Reveal className="mt-10">
            <DataTable caption="Guest faculty" columns={["S.No", "Name", "Designation", "Category"]} rows={guestFaculty.map((g) => [g.sno, g.name, g.designation, g.category])} emphasise={[1]} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
