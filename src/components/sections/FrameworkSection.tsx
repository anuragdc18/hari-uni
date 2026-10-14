import { SectionHeading, Numeral } from "@/components/ui/Typography";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { curriculumFrameworks } from "@/content/academics";

/** Shared "Heartfulness curriculum framework" block (Academics + Heartfulness pages). */
export function FrameworkSection({ eyebrow, title, intro, note, variant }: { eyebrow?: string; title: string; intro: string; note: string; variant: "academics" | "heartfulness" }) {
  return (
    <section className="bg-sand-100 py-24 lg:py-32">
      <div className="container-x">
        <SectionHeading eyebrow={eyebrow} title={title} text={intro} size="lg" />
        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {curriculumFrameworks.map((f) => (
            <StaggerItem key={f.code} as="article" className="card card-hover p-7">
              <Numeral>{f.code}</Numeral>
              <h3 className="mt-4 font-display text-2xl">{f.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">{f[variant]}</p>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal delay={0.2}>
          <p className="mt-8 text-sm text-stone-500">{note}</p>
        </Reveal>
      </div>
    </section>
  );
}
