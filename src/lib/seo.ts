import type { Metadata } from "next";
import { contact, site, SITE_URL } from "@/content/site";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || SITE_URL;
export const absoluteUrl = (path: string) => (path.startsWith("http") ? path : `${siteUrl}${path === "/" ? "/" : path}`);

const ogImage = { url: "/og-default.jpg", width: 1200, height: 630, alt: "HARI University at Kanha Shanti Vanam, Hyderabad" };

interface PageMeta {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  image?: { url: string; width: number; height: number; alt: string };
  noIndex?: boolean;
}

/** Builds complete, canonical metadata for a route. Titles are used verbatim from the legacy site. */
export function buildMetadata({ title, description, path, type = "website", image = ogImage, noIndex }: PageMeta): Metadata {
  const url = absoluteUrl(path);
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: site.ogSiteName,
      locale: site.locale,
      type,
      images: [image],
    },
    twitter: { card: "summary_large_image", title, description, images: [image.url] },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  };
}

export const organizationId = `${siteUrl}/#organization`;

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["CollegeOrUniversity", "EducationalOrganization"],
  "@id": organizationId,
  name: site.legalName,
  legalName: site.legalName,
  alternateName: site.shortName,
  url: siteUrl,
  logo: absoluteUrl("/logo-seal.png"),
  image: absoluteUrl("/og-default.jpg"),
  description: site.organizationDescription,
  foundingDate: site.foundingDate,
  email: contact.email,
  telephone: "+91-8143241135",
  slogan: site.tagline,
  founder: { "@type": "Person", name: site.founder.name, alternateName: site.founder.alternateName, sameAs: site.founder.url },
  address: { "@type": "PostalAddress", ...contact.postal },
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: site.name,
  alternateName: [site.legalName, "HARI University Hyderabad", "HARI"],
  url: `${siteUrl}/`,
  publisher: { "@id": organizationId },
};

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function serializeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
