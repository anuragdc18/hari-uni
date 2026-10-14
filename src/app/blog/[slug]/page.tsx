import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/PageHero";
import { NewsCard } from "@/components/sections/Cards";
import { SectionHeading, Prose } from "@/components/ui/Typography";
import { ButtonLink, ArrowLink } from "@/components/ui/Button";
import { Picture } from "@/components/ui/Picture";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { MaskReveal } from "@/components/motion/Parallax";
import { getPost, newsPosts, relatedPosts } from "@/content/news";
import { img } from "@/assets/registry";
import { buildMetadata, breadcrumbJsonLd, serializeJsonLd, absoluteUrl, organizationId } from "@/lib/seo";

export const dynamicParams = false;
export function generateStaticParams() { return newsPosts.map((p) => ({ slug: p.slug })); }

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const im = img[post.heroImage];
  return buildMetadata({ title: `${post.title} | HARI`, description: post.excerpt, path: `/blog/${slug}`, type: "article", image: { url: im.src, width: im.width, height: im.height, alt: post.heroAlt } });
}

export default async function NewsArticle({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const crumbs = [{ name: "Home", path: "/" }, { name: "News", path: "/blog" }, { name: post.title, path: `/blog/${post.slug}` }];
  const articleJsonLd = { "@context": "https://schema.org", "@type": "BlogPosting", "@id": `${absoluteUrl(`/blog/${post.slug}`)}#article`, headline: post.title, url: absoluteUrl(`/blog/${post.slug}`), mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`), image: [absoluteUrl(img[post.heroImage].src)], inLanguage: "en-IN", author: { "@type": "Person", name: post.writer }, publisher: { "@id": organizationId }, description: post.excerpt, datePublished: post.datePublished, dateModified: post.datePublished, articleSection: post.category };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbJsonLd(crumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(articleJsonLd) }} />
      <PageHero variant="editorial" eyebrow={post.category} title={post.title} crumbs={crumbs.slice(0, 2)} />
      <article className="container-x pb-24 lg:pb-32">
        <MaskReveal className="rounded-3xl"><Picture src={post.heroImage} alt={post.heroAlt} ratio="aspect-[21/9]" sizes="100vw" priority /></MaskReveal>
        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <aside className="lg:col-span-3">
            <Reveal>
              <dl className="divide-y divide-sand-300 border-y border-sand-300 text-sm">
                {[["Published", post.dateLabel], ["Writer", post.writer], ["Category", post.category]].map(([k, v]) => (
                  <div key={k} className="grid grid-cols-[6rem_1fr] gap-3 py-3"><dt className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-500">{k}</dt><dd className="font-medium text-ink-950">{k === "Published" ? <time dateTime={post.datePublished}>{v}</time> : v}</dd></div>
                ))}
              </dl>
              <ButtonLink href="/contact" variant="ink" className="mt-8">Get started</ButtonLink>
            </Reveal>
          </aside>
          <div className="lg:col-span-8 lg:col-start-5">
            <Reveal><p className="font-display text-2xl leading-snug text-ink-900">{post.excerpt}</p></Reveal>
            <Reveal delay={0.1}><Prose className="mt-8 !max-w-none text-[1.125rem]">{post.body.map((p, i) => <p key={i}>{p}</p>)}</Prose></Reveal>
          </div>
        </div>
      </article>
      <section className="bg-sand-100 py-20 lg:py-28">
        <div className="container-x">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading title="Latest news in HARI" size="md" />
            <Reveal delay={0.2}><ArrowLink href="/blog">Read all news</ArrowLink></Reveal>
          </div>
          <Stagger className="mt-10 grid gap-8 md:grid-cols-2">
            {relatedPosts(post.slug).map((p) => <StaggerItem key={p.slug}><NewsCard post={p} /></StaggerItem>)}
          </Stagger>
        </div>
      </section>
    </>
  );
}
