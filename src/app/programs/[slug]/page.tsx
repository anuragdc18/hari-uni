import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/PageHero";
import { ProgramCard } from "@/components/sections/Cards";
import { SectionHeading, Prose } from "@/components/ui/Typography";
import { ButtonLink } from "@/components/ui/Button";
import { Picture } from "@/components/ui/Picture";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { MaskReveal } from "@/components/motion/Parallax";
import { getProgram, programs } from "@/content/programs";
import { getSchool } from "@/content/academics";
import { contact } from "@/content/site";
import { buildMetadata, breadcrumbJsonLd, serializeJsonLd, absoluteUrl, organizationId } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/programs/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = getProgram(slug);
  if (!p) return {};
  return buildMetadata({ title: `${p.name} | HARI`, description: p.summary, path: `/programs/${slug}` });
}

export default async function ProgramPage({ params }: PageProps<"/programs/[slug]">) {
  const { slug } = await params;
  const program = getProgram(slug);
  if (!program) notFound();
  const school = getSchool(program.schoolSlug);
  const related = programs.filter((p) => p.slug !== program.slug && p.schoolSlug === program.schoolSlug);
  const others = related.length ? related : programs.filter((p) => p.slug !== program.slug).slice(0, 3);
  const crumbs = [{ name: "Home", path: "/" }, { name: "Programmes", path: "/programs" }, { name: program.name, path: `/programs/${program.slug}` }];
  const courseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: program.name,
    description: program.summary,
    url: absoluteUrl(`/programs/${program.slug}`),
    provider: { "@type": ["CollegeOrUniversity", "EducationalOrganization"], "@id": organizationId, name: "Heartfulness Academy of Research and Innovation", sameAs: absoluteUrl("/") },
    hasCourseInstance: { "@type": "CourseInstance", courseMode: "onsite", location: { "@type": "Place", name: "Kanha Shanti Vanam, Telangana", address: { "@type": "PostalAddress", addressLocality: contact.postal.addressLocality, addressRegion: contact.postal.addressRegion, postalCode: contact.postal.postalCode, addressCountry: "IN" } } },
    educationalCredentialAwarded: program.level,
    timeRequired: program.durationIso,
  };
  const facts = [
    { label: "School", value: program.school },
    { label: "Duration", value: program.duration },
    { label: "Level", value: program.level },
    { label: "Status", value: program.status },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbJsonLd(crumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(courseJsonLd) }} />
      <PageHero eyebrow="Programme" title={program.name} intro={program.summary} image={program.image} imageAlt={`${program.name} at HARI`} crumbs={crumbs} size="md">
        <div className="flex flex-wrap gap-4">
          <ButtonLink href="/apply">Apply now</ButtonLink>
          <ButtonLink href="/contact" variant="outline-light" arrow={false}>Talk to admissions</ButtonLink>
        </div>
      </PageHero>

      <section className="container-x py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <aside className="lg:col-span-4">
            <Reveal>
              <dl className="card divide-y divide-sand-200 overflow-hidden">
                {facts.map((f) => (
                  <div key={f.label} className="grid grid-cols-[6rem_1fr] gap-4 px-6 py-4">
                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-500">{f.label}</dt>
                    <dd className="font-medium capitalize text-ink-950">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-6 rounded-2xl bg-ink-900 p-6 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-500">Admissions</p>
                <p className="mt-3 text-sm text-sand-100/85">Questions about eligibility, entrance ranks, scholarships or hostel? The admissions team replies within working hours.</p>
                <a href={`mailto:${contact.email}`} className="mt-4 block text-sm font-semibold underline-offset-4 hover:underline">{contact.email}</a>
                <a href={`tel:${contact.phones[0].tel}`} className="block text-sm font-semibold underline-offset-4 hover:underline">{contact.phones[0].display}</a>
              </div>
            </Reveal>
          </aside>
          <div className="lg:col-span-8">
            <SectionHeading title="Programme overview" size="md" />
            <Reveal delay={0.1}>
              <Prose className="mt-8 !max-w-none text-[1.125rem]">
                {program.overview.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </Prose>
            </Reveal>
            <Reveal delay={0.2}>
              <ButtonLink href="/contact" className="mt-10">Apply now</ButtonLink>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-sand-100 py-20 lg:py-28">
        <div className="container-x grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <MaskReveal className="rounded-3xl lg:col-span-5" direction="left">
            <Picture src={school.image} alt={school.name} ratio="aspect-[4/3]" sizes="(min-width: 1024px) 40vw, 100vw" />
          </MaskReveal>
          <div className="lg:col-span-7">
            <SectionHeading eyebrow={`School ${school.number}`} title={school.name} text={school.description} size="sm" />
            <Reveal delay={0.2}>
              <ButtonLink href={`/academics#${school.slug}`} variant="outline" className="mt-8">About the school</ButtonLink>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="container-x py-20 lg:py-28">
        <SectionHeading eyebrow="Explore" title={related.length ? `More from the ${school.name}` : "Other programmes"} size="sm" />
        <Stagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((p) => (
            <StaggerItem key={p.slug}>
              <ProgramCard program={p} />
            </StaggerItem>
          ))}
        </Stagger>
      </section>
    </>
  );
}
