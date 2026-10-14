import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { NewsCard } from "@/components/sections/Cards";
import { SectionHeading } from "@/components/ui/Typography";
import { ButtonLink, ArrowLink } from "@/components/ui/Button";
import { Picture } from "@/components/ui/Picture";
import { StatGrid } from "@/components/ui/Stats";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { MaskReveal, Parallax } from "@/components/motion/Parallax";
import { Counter } from "@/components/motion/Counter";
import { aboutPage } from "@/content/about";
import { newsPosts } from "@/content/news";
import { buildMetadata, breadcrumbJsonLd, serializeJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({ title: aboutPage.title, description: aboutPage.description, path: "/about" });

export default function AboutPage() {
  const { hero, intro, stats, proof, news, cta } = aboutPage;
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: aboutPage.title, path: "/about" }])) }} />
      <PageHero eyebrow={hero.eyebrow} title={hero.title} image={hero.image} imageAlt={hero.imageAlt} video />

      <section className="container-x py-24 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading title={intro.title} text={intro.text} size="lg" />
            <Reveal delay={0.2}>
              <ButtonLink href={intro.link.href} variant="ink" className="mt-8">
                {intro.link.label}
              </ButtonLink>
            </Reveal>
          </div>
          <div className="grid grid-cols-3 gap-3 lg:col-span-7 lg:gap-5">
            {intro.images.map((im, i) => (
              <MaskReveal key={im.key} className={i === 1 ? "mt-10 rounded-2xl" : "rounded-2xl"}>
                <Picture src={im.key} alt={im.alt} ratio="aspect-[3/4]" sizes="(min-width: 1024px) 20vw, 33vw" />
              </MaskReveal>
            ))}
          </div>
        </div>
        <StatGrid stats={stats} columns={3} className="mt-20" />
      </section>

      <section className="surface-dark relative overflow-hidden">
        <div className="container-x grid gap-12 py-24 lg:grid-cols-12 lg:gap-16 lg:py-32">
          <div className="lg:col-span-6">
            <Parallax className="overflow-hidden rounded-3xl" amount={40}>
              <Picture src={proof.image} alt={proof.imageAlt} ratio="aspect-[5/4]" sizes="(min-width: 1024px) 50vw, 100vw" />
            </Parallax>
            <Stagger className="mt-6 grid grid-cols-2 gap-4">
              {proof.badges.map((b) => (
                <StaggerItem key={b.value} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <Counter value={b.value} className="font-display text-2xl text-white" />
                  <p className="mt-1 text-sm text-sand-200/70">{b.label}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
          <div className="flex flex-col justify-center lg:col-span-6">
            <SectionHeading eyebrow={proof.eyebrow} title={proof.title} as="h3" size="lg" />
            <Reveal delay={0.2}>
              <p className="lead mt-6 !text-sand-100/85">{proof.text}</p>
            </Reveal>
            <div className="mt-10 grid grid-cols-[1fr_auto] items-end gap-6">
              <MaskReveal className="rounded-2xl" direction="left">
                <Picture src={proof.secondImage} alt={proof.secondImageAlt} ratio="aspect-[4/3]" sizes="(min-width: 1024px) 30vw, 70vw" />
              </MaskReveal>
              <Reveal delay={0.3}>
                <div className="rounded-2xl bg-gold-500 p-5 text-ink-950">
                  <span className="font-display text-2xl">{proof.secondBadge.value}</span>
                  <p className="text-sm font-medium">{proof.secondBadge.label}</p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="container-x py-24 lg:py-32">
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading title={news.title} size="md" />
          <Reveal delay={0.2}>
            <ArrowLink href={news.link.href}>{news.link.label}</ArrowLink>
          </Reveal>
        </div>
        <Stagger className="grid gap-8 md:grid-cols-3">
          {newsPosts.map((post) => (
            <StaggerItem key={post.slug}>
              <NewsCard post={post} image={post.aboutImage} alt={post.title} />
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <CtaBand {...cta} />
    </>
  );
}
