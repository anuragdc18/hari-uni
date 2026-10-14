import type { MetadataRoute } from "next";
import { programs } from "@/content/programs";
import { events } from "@/content/events";
import { newsPosts } from "@/content/news";
import { absoluteUrl } from "@/lib/seo";

const LASTMOD = "2026-10-14";

export default function sitemap(): MetadataRoute.Sitemap {
  const entry = (path: string, priority: number, changeFrequency: "weekly" | "monthly" = "weekly"): MetadataRoute.Sitemap[number] => ({ url: absoluteUrl(path), lastModified: LASTMOD, changeFrequency, priority });
  return [
    entry("/", 1),
    entry("/about", 0.7), entry("/daajis-vision", 0.7), entry("/management", 0.7), entry("/management/vice-chancellor", 0.7),
    entry("/academics", 0.7), entry("/academics/faculty-list", 0.7),
    entry("/programs", 0.9), ...programs.map((p) => entry(`/programs/${p.slug}`, 0.8)),
    entry("/research", 0.7), entry("/research/publications", 0.7),
    entry("/campus", 0.7), entry("/campus/bus-timetable", 0.7),
    entry("/heartfulness", 0.7),
    entry("/blog", 0.7), ...newsPosts.map((p) => entry(`/blog/${p.slug}`, 0.7)),
    entry("/events", 0.7), ...events.map((e) => entry(`/events/${e.slug}`, 0.8)),
    entry("/apply", 0.9), entry("/contact", 0.9),
  ];
}
