import type { ImageKey } from "@/assets/registry";

export interface NewsPost {
  slug: string;
  title: string;
  category: "Launch" | "Recognition" | "Sustainability";
  dateLabel: string;
  datePublished: string;
  writer: string;
  excerpt: string;
  body: string[];
  heroImage: ImageKey;
  heroAlt: string;
  /** Thumbnail used in listing cards on the blog index and related posts. */
  cardImage: ImageKey;
  /** Thumbnail used in the "Latest news in HARI" strip on the About page. */
  aboutImage: ImageKey;
}

export const newsPage = {
  title: "News & Recognition | HARI",
  description:
    "HARI in the world — press coverage, institutional milestones, and selected research publications behind India's first UGC Distinct Category greenfield deemed university.",
  collectionName: "News & Recognition",
  collectionDescription: "HARI in the world — press coverage, institutional milestones, and selected research publications.",
  hero: {
    eyebrow: "Latest News",
    title: "HARI",
    image: "campusAerialAvenueF" as ImageKey,
    imageAlt: "HARI in the world — news & recognition",
  },
  feedNote:
    "This is the live news feed. The entries below are anchor content — the HARI team adds new press mentions, research publications, and institutional milestones as they occur.",
  milestones: {
    title: "Institutional milestones",
    items: [
      {
        date: "October 2025",
        text: "The Ministry of Education, Government of India, publishes the Gazette Notification formally declaring HARI an Institution Deemed to be University under the Distinct Category (Notification No. 9-8/2024-U.3(A)) — India's first greenfield, privately sponsored deemed-to-be university approved under UGC's Distinct Category.",
      },
      {
        date: "October 2025",
        text: "HARI is formally launched by Daaji. Academic Year 2026-27 commences with the School of Agricultural Sciences — B.Sc. (Hons) Agriculture and B.Sc. (Hons) Horticulture.",
      },
      {
        date: "July 2025",
        text: "Sahaj Marg Spirituality Foundation's compliance report is accepted by the UGC Expert Committee; the recommendation is approved by the Commission in its 592nd meeting on 23 July 2025.",
      },
      {
        date: "February 2025",
        text: "The Ministry of Education issues the Letter of Intent to Sahaj Marg Spirituality Foundation — the formal precursor to full University notification.",
      },
      {
        date: "October 2024",
        text: "The UGC Expert Committee recommends issuance of the Letter of Intent; approved at the Commission's 584th meeting on 3 October 2024.",
      },
      {
        date: "Ongoing",
        text: "Kanha Shanti Vanam holds IGBC Platinum Green Building Certification — India's highest environmental rating for a campus development.",
      },
    ],
  },
  media: {
    title: "Media coverage",
    text: "Coverage of HARI’s launch as India’s first greenfield, privately sponsored deemed-to-be university, approved under UGC’s Distinct Category.",
    featuredIn: "As featured in",
    logos: [
      { name: "The Hindu", src: "/images/press/the-hindu.svg", width: 240, height: 48 },
      { name: "The Indian Express", src: "/images/press/indian-express.svg", width: 240, height: 48 },
      { name: "The New Indian Express", src: "/images/press/new-indian-express.svg", width: 240, height: 48 },
      { name: "Deccan Chronicle", src: "/images/press/deccan-chronicle.svg", width: 240, height: 48 },
      { name: "Telangana Today", src: "/images/press/telangana-today.png", width: 646, height: 91 },
      { name: "College Mentor", src: "/images/press/college-mentor.png", width: 900, height: 194 },
      { name: "Prittle Prattle News", src: "/images/press/prittle-prattle-news.png", width: 1100, height: 291 },
    ],
    articles: [
      {
        outlet: "College Mentor",
        title: "Heartfulness Launches HARI — India's First Greenfield Deemed University",
        date: "17 October 2025",
        href: "https://www.collegementor.com/news/heartfulness-launches-hari-india-first-greenfield-deemed-university",
      },
      {
        outlet: "Telangana Today",
        title: "Heartfulness launches Heartfulness Academy of Research and Innovation",
        date: "16 October 2025",
        href: "https://telanganatoday.com/heartfulness-launches-heartfulness-academy-of-research-and-innovation",
      },
      {
        outlet: "Prittle Prattle News",
        title: "India's First Greenfield Deemed University HARI Launched by Heartfulness Under Government Approval",
        date: "Launch coverage, 2025",
        href: "https://www.prittleprattlenews.com/education/heartfulness-launches-hari-greenfield-private-university/",
      },
    ],
  },
  publications: {
    title: "Research publications",
    text: "Peer-reviewed research from the Heartfulness research community and its collaborators — 21 selected studies spanning mental health, the neuroscience of meditation, cellular aging, education, digital health, and ecological regeneration.",
    link: { label: "View all 21 publications →", href: "/research/publications" },
  },
  cta: {
    eyebrow: "Begin a conversation",
    title: "Questions? We're here to help",
    text: "Plan your visit to Kanha Shanti Vanam, explore our programmes, or reach out for admissions guidance. Our team is here to help.",
    primary: { label: "Begin your enquiry", href: "/contact" },
    secondary: { label: "Explore programmes", href: "/programs" },
    image: "campusPalmsGreenhouseAerialB" as ImageKey,
  },
};

export const newsPosts: NewsPost[] = [
  {
    slug: "hari-launch-ay-2025-26",
    title: "HARI Launches with the School of Agricultural Sciences for AY 2026-27",
    category: "Launch",
    dateLabel: "October 16, 2025",
    datePublished: "2025-10-16T11:00:00.000Z",
    writer: "HARI Communications",
    excerpt:
      "HARI was formally launched by Daaji, with the School of Agricultural Sciences opening admissions for B.Sc. (Hons) Agriculture and B.Sc. (Hons) Horticulture.",
    body: [
      "HARI was formally launched by Daaji — Kamlesh D. Patel, Global Guide of Heartfulness and Founder of HARI.",
      "Academic Year 2026-27 commences with the School of Agricultural Sciences, offering B.Sc. (Hons) Agriculture and B.Sc. (Hons) Horticulture — both four-year, fully residential programmes with ICAR In-Principle Consent received.",
      "Engineering, Management, and Philosophy programmes will be progressively introduced.",
    ],
    heroImage: "campusAerialAvenueG",
    heroAlt: "Kanha Shanti Vanam campus",
    cardImage: "campusAerialAvenueD",
    aboutImage: "campusAerialAvenueC",
  },
  {
    slug: "ugc-gazette-notification",
    title: "HARI Notified as a Deemed University under UGC's Distinct Category",
    category: "Recognition",
    dateLabel: "October 16, 2025",
    datePublished: "2025-10-16T11:00:00.000Z",
    writer: "HARI Communications",
    excerpt:
      "The Ministry of Education, Government of India, has notified HARI as an Institution Deemed to be University under the Distinct Category (Notification No. 9-8/2024-U.3(A)).",
    body: [
      "On 16 October 2025, the Ministry of Education, Government of India, published the Gazette Notification formally declaring HARI an Institution Deemed to be University under the Distinct Category — Notification No. 9-8/2024-U.3(A).",
      "HARI is India's first greenfield, privately sponsored deemed-to-be university approved by the Government of India under UGC's Distinct Category, a designation reserved for institutions offering a genuinely unprecedented academic model.",
      "The notification formalised what the campus at Kanha Shanti Vanam had already demonstrated over fifteen years of ecological regeneration and proven practice.",
    ],
    heroImage: "verticalFarmRackC",
    heroAlt: "Kanha Shanti Vanam campus",
    cardImage: "verticalFarmRack",
    aboutImage: "verticalFarmRackE",
  },
  {
    slug: "igbc-platinum-certification",
    title: "Kanha Shanti Vanam Earns IGBC Platinum Green Building Certification",
    category: "Sustainability",
    dateLabel: "September 1, 2025",
    datePublished: "2025-09-01T11:00:00.000Z",
    writer: "HARI Communications",
    excerpt:
      "The HARI campus holds India's highest green-building rating — awarded for measurable outcomes in water use, solar operations, and carbon sequestration.",
    body: [
      "Kanha Shanti Vanam holds IGBC Platinum Green Building Certification — India's highest environmental rating for a campus development.",
      "The certification was awarded for measurable outcomes: water usage reduced by over 50% compared to comparable campuses, 100% solar-powered operations, and verified carbon sequestration across the forest cover.",
      "Once barren, rocky scrubland, the campus is now home to 150,000 trees, functioning wetlands, and active rainwater harvesting infrastructure.",
    ],
    heroImage: "forestPathCanopyB",
    heroAlt: "Kanha Shanti Vanam campus",
    cardImage: "forestPathCanopyH",
    aboutImage: "forestPathCanopyE",
  },
];

export const getPost = (slug: string) => newsPosts.find((p) => p.slug === slug);
export const relatedPosts = (slug: string) => newsPosts.filter((p) => p.slug !== slug);
