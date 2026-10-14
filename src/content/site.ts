/**
 * Institutional identity, contact details and navigation for HARI University.
 * All values are migrated verbatim from the legacy hariuniversity.com export.
 */

export const SITE_URL = "https://www.hariuniversity.com";

export const site = {
  name: "HARI University",
  shortName: "HARI",
  legalName: "Heartfulness Academy of Research and Innovation",
  fullName: "Heartfulness Academy of Research & Innovation",
  designation: "Deemed-to-be University",
  tagline: "Where Consciousness Meets Research.",
  ogSiteName: "Heartfulness Academy of Research and Innovation (HARI)",
  locale: "en_IN",
  themeColor: "#11364f",
  foundingDate: "2025-10-16",
  description:
    "HARI University at Kanha Shanti Vanam, Hyderabad offers UGC-approved programmes in agriculture, engineering, management, philosophy and consciousness research.",
  organizationDescription:
    "Heartfulness Academy of Research and Innovation (HARI) is India's first greenfield, privately sponsored Deemed-to-be University, approved by the Government of India under the UGC's Distinct Category. Located at Kanha Shanti Vanam, Telangana, it unites modern science, India's wisdom traditions, and ecological regeneration.",
  founder: {
    name: "Kamlesh D. Patel",
    alternateName: "Daaji",
    url: "https://daaji.org",
  },
} as const;

export const contact = {
  campusOfficeLabel: "Campus Office",
  addressLine:
    "13-110, Kanha Shanti Vanam, Chegur, Nandigama Mandal, Ranga Reddy District, Telangana 509328, India",
  addressLines: [
    "Heartfulness Academy of Research and Innovation (HARI)",
    "13-110, Kanha Shanti Vanam",
    "Chegur, Nandigama Mandal",
    "Ranga Reddy District",
    "Telangana — 509328, India",
  ],
  postal: {
    streetAddress: "Kanha Shanti Vanam, Chegur, Nandigama Mandal",
    addressLocality: "Ranga Reddy District",
    addressRegion: "Telangana",
    postalCode: "509328",
    addressCountry: "IN",
  },
  nearestAirport:
    "Rajiv Gandhi International Airport, Hyderabad (approx. 35 km)",
  email: "admissions@haridu.in",
  researchEmail: "research@haridu.in",
  pressEmail: "communications@haridu.in",
  phones: [
    { display: "+91 8143241135", tel: "+918143241135" },
    { display: "+91 6309997464", tel: "+916309997464" },
  ],
  admissionsPhones: [
    { display: "+91 6309997464", tel: "+916309997464" },
    { display: "+91 8143241135", tel: "+918143241135" },
  ],
  hours: "Monday to Saturday │ 9 AM to 6 PM IST",
  whatsapp: "https://wa.me/918143241135",
  mapsSearch:
    "https://www.google.com/maps/search/?api=1&query=HARI%20University%20Kanha%20Shanti%20Vanam%20Hyderabad",
  mapsEmbed:
    "https://www.google.com/maps?q=HARI%20University%20Kanha%20Shanti%20Vanam%20Hyderabad&output=embed",
  mapsEmbedTitle: "Map to HARI University, Kanha Shanti Vanam",
} as const;

export const externalLinks = {
  heartfulness: "https://heartfulness.org",
  kanha: "https://heartfulness.org/kanha",
  daaji: "https://daaji.org",
} as const;

export type NavLink = { label: string; href: string; description?: string; external?: boolean; icon?: string };
export type NavGroup = {
  label: string;
  href: string;
  intro: string;
  links: NavLink[];
  feature?: { eyebrow: string; title: string; href: string };
};

/** Primary navigation. Items and destinations are the legacy site's; grouping is unchanged. */
export const navigation: NavGroup[] = [
  {
    label: "About",
    href: "/about",
    intro: "India's first greenfield, privately sponsored deemed-to-be university under UGC's Distinct Category.",
    links: [
      { label: "About HARI", icon: "university", href: "/about", description: "Our story, campus and recognition" },
      { label: "Daaji's Vision", icon: "eye", href: "/daajis-vision", description: "A message from the founder" },
      { label: "Management", icon: "users", href: "/management", description: "University leadership" },
      { label: "Press", icon: "news", href: "/blog", description: "News, milestones and media coverage" },
    ],
    feature: { eyebrow: "Founder", title: "The heart is the laboratory. The human being is the experiment.", href: "/daajis-vision" },
  },
  {
    label: "Academics",
    href: "/academics",
    intro: "Four schools, eight programmes, one living campus.",
    links: [
      { label: "Schools", icon: "school", href: "/academics", description: "Agriculture, Engineering, Management, Philosophy" },
      { label: "Faculties", icon: "faculty", href: "/academics/faculty-list", description: "Faculty and guest faculty" },
      { label: "Orientation Program", icon: "calendar", href: "/events/orientation-program", description: "Orientation Day 2026" },
      { label: "Programmes", icon: "book", href: "/programs", description: "Undergraduate and postgraduate degrees" },
    ],
    feature: { eyebrow: "Admissions AY 2026-27", title: "Explore all eight programmes", href: "/programs" },
  },
  {
    label: "Research",
    href: "/research",
    intro: "From practice to proof — 75 years of evidence, now in a university.",
    links: [
      { label: "Research Overview", icon: "flask", href: "/research", description: "Four research centres" },
      { label: "Research Publications", icon: "doc", href: "/research/publications", description: "21 selected peer-reviewed studies" },
    ],
    feature: { eyebrow: "Research", title: "Partner with us on the science of well-being", href: "/research" },
  },
  {
    label: "Campus",
    href: "/campus",
    intro: "Life at Kanha Shanti Vanam — a regenerated, IGBC Platinum campus near Hyderabad.",
    links: [
      { label: "Campus Life", icon: "leaf", href: "/campus", description: "Facilities and the living laboratory" },
      { label: "Events", icon: "calendar", href: "/events", description: "Upcoming events and activities" },
      { label: "Bus Timetable", icon: "bus", href: "/campus/bus-timetable", description: "Student and city bus routes" },
    ],
    feature: { eyebrow: "Visit", title: "Come and see for yourself", href: "/campus" },
  },
  {
    label: "Heartfulness",
    href: "/heartfulness",
    intro: "Ancient wisdom. Scientific evidence. No dogma. No charge.",
    links: [
      { label: "Heartfulness at HARI", icon: "heart", href: "/heartfulness", description: "The practice woven into campus life" },
      { label: "About Heartfulness", icon: "globe", href: externalLinks.heartfulness, external: true, description: "heartfulness.org" },
      { label: "About Kanha", icon: "map", href: externalLinks.kanha, external: true, description: "heartfulness.org/kanha" },
      { label: "About Daaji", icon: "eye", href: externalLinks.daaji, external: true, description: "daaji.org" },
    ],
    feature: { eyebrow: "Practice", title: "Come and experience it for yourself", href: "/heartfulness" },
  },
];

/** Audience quick-links shown in the top utility bar (SFU-style audience navigation). */
export const audienceLinks: NavLink[] = [
  { label: "Prospective students", href: "/programs", icon: "book" },
  { label: "Parents", href: "/events/orientation-program", icon: "users" },
  { label: "Researchers", href: "/research", icon: "flask" },
  { label: "Media", href: "/blog", icon: "news" },
];

export const utilityLinks = {
  contact: { label: "Contact us", href: "/contact" },
  apply: { label: "Apply Now", href: "/apply" },
} as const;

export const footerColumns: { heading: string; links: NavLink[] }[] = [
  {
    heading: "Explore",
    links: [
      { label: "About HARI", href: "/about" },
      { label: "Daaji's Vision", href: "/daajis-vision" },
      { label: "Management", href: "/management" },
      { label: "Academics", href: "/programs" },
      { label: "Research", href: "/research" },
    ],
  },
  {
    heading: "Campus & Practice",
    links: [
      { label: "Campus Life", href: "/campus" },
      { label: "Heartfulness", href: "/heartfulness" },
      { label: "News & Recognition", href: "/blog" },
      { label: "Events", href: "/events" },
      { label: "Bus Timetable", href: "/campus/bus-timetable" },
    ],
  },
  {
    heading: "Connect",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "Apply Now", href: "/apply" },
      { label: "heartfulness.org", href: externalLinks.heartfulness, external: true },
      { label: "daaji.org", href: externalLinks.daaji, external: true },
    ],
  },
];

export const copyright = "© 2026 HARI . All rights reserved.";
