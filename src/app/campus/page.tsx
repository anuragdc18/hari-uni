import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { SectionHeading, Numeral } from "@/components/ui/Typography";
import { Picture } from "@/components/ui/Picture";
import { StatGrid } from "@/components/ui/Stats";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { MaskReveal, Parallax } from "@/components/motion/Parallax";
import { Counter } from "@/components/motion/Counter";
import { campusPage } from "@/content/campus";
import { buildMetadata, breadcrumbJsonLd, serializeJsonLd } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({ title: campusPage.title, description: campusPage.description, path: "/campus" });

export default function CampusPage() {
  const { hero, glance, dayInLife, transformation, laboratory, facilities, cityLife, cta } = campusPage;
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: campusPage.title, path: "/campus" }])) }} />
      <PageHero eyebrow={hero.eyebrow} title={hero.title} intro={hero.intro} image={hero.image} imageAlt={hero.imageAlt} video />

      <section className="container-x py-24 lg:py-32">
        <SectionHeading eyebrow={glance.eyebrow} title={glance.title} size="lg" />
        <Stagger className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-sand-300 sm:grid-cols-2 lg:grid-cols-4">
          {glance.stats.map((s, i) => (
            <StaggerItem key={s.label} className={cn("bg-white p-7", i === 0 && "lg:col-span-2 lg:bg-ink-900 lg:text-white")}>
              <Counter value={s.value} className={cn("stat-value !text-[clamp(1.6rem,2.6vw,2.4rem)]", i === 0 && "lg:!text-white lg:!text-[clamp(2rem,3.5vw,3.25rem)]")} />
              <p className={cn("mt-2 text-sm text-stone-500", i === 0 && "lg:text-sand-200/80")}>{s.label}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="relative isolate overflow-hidden text-white">
        <Parallax className="absolute inset-0 -z-10 h-full" innerClassName="h-[120%] -mt-[10%]" amount={60}>
          <Picture src={dayInLife.image} alt={dayInLife.imageAlt} className="h-full w-full" sizes="100vw" quality={60} />
        </Parallax>
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-ink-950/65" />
        <div className="container-x py-32 lg:py-44">
          <div className="max-w-2xl">
            <Reveal direction="none"><p className="eyebrow !text-gold-500">{dayInLife.eyebrow}</p></Reveal>
            <Reveal delay={0.1}><p className="mt-6 font-display text-2xl leading-snug lg:text-[2.1rem]">{dayInLife.text}</p></Reveal>
          </div>
        </div>
      </section>

      <section className="container-x py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <SectionHeading eyebrow={transformation.eyebrow} title={transformation.title} size="lg" />
            <Reveal delay={0.1}>
              <div className="mt-6 space-y-5 text-[1.0625rem] leading-relaxed text-stone-700">
                {transformation.paragraphs.map((p, i) => <p key={i} className={i === 2 ? "font-display text-xl text-ink-900" : ""}>{p}</p>)}
              </div>
            </Reveal>
            <StatGrid stats={transformation.stats} columns={3} className="mt-10" compact />
          </div>
          <div className="grid gap-5 lg:col-span-6">
            <MaskReveal className="rounded-3xl"><Picture src={transformation.images[0].key} alt={transformation.images[0].alt} ratio="aspect-[16/10]" sizes="(min-width: 1024px) 50vw, 100vw" /></MaskReveal>
            <MaskReveal className="rounded-3xl lg:ml-16" direction="left"><Picture src={transformation.images[1].key} alt={transformation.images[1].alt} ratio="aspect-[16/10]" sizes="(min-width: 1024px) 45vw, 100vw" /></MaskReveal>
          </div>
        </div>
      </section>

      <section className="bg-sand-100 py-24 lg:py-32">
        <div className="container-x">
          <SectionHeading eyebrow={laboratory.eyebrow} title={laboratory.title} size="lg" />
          <Stagger className="mt-14 grid gap-8 lg:grid-cols-3">
            {laboratory.items.map((item) => (
              <StaggerItem key={item.number} as="article" className="group">
                <div className="overflow-hidden rounded-3xl"><Picture src={item.image} alt={item.alt} ratio="aspect-[4/3]" imgClassName="transition-transform duration-[1200ms] group-hover:scale-105" sizes="(min-width: 1024px) 33vw, 100vw" /></div>
                <p className="mt-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-terracotta-600"><Numeral tone="terracotta">{item.number}</Numeral>{item.label}</p>
                <h3 className="mt-3 font-display text-2xl">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-stone-600">{item.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="surface-dark py-24 lg:py-32">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading eyebrow={facilities.eyebrow} title={facilities.title} text={facilities.text} size="lg" />
              <MaskReveal className="mt-10 rounded-3xl"><Picture src={facilities.image} alt={facilities.imageAlt} ratio="aspect-[16/10]" sizes="(min-width: 1024px) 40vw, 100vw" /></MaskReveal>
            </div>
            <Stagger className="grid gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-2 lg:col-span-7" stagger={0.06}>
              {facilities.items.map((f) => (
                <StaggerItem key={f.number} as="article" className="bg-ink-900/70 p-6 lg:p-7">
                  <Numeral tone="light">{f.number}</Numeral>
                  <h3 className="mt-3 font-display text-lg !text-white lg:text-xl">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-sand-100/75">{f.text}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      <section className="container-x py-24 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7"><SectionHeading eyebrow={cityLife.eyebrow} title={cityLife.title} text={cityLife.text} size="md" /></div>
          <div className="lg:col-span-5"><StatGrid stats={cityLife.stats} columns={2} /></div>
        </div>
      </section>

      <CtaBand {...cta} />
    </>
  );
}
