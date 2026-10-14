import { img, type ImageKey } from "@/assets/registry";

export type ProgramLevel = "undergraduate" | "postgraduate";

export interface Program {
  slug: string;
  name: string;
  /** Short form used in forms (legacy contact form option labels). */
  formLabel: string;
  school: string;
  schoolSlug: SchoolSlug;
  duration: string;
  durationIso: string;
  level: ProgramLevel;
  status: string;
  summary: string;
  overview: string[];
  image: ImageKey;
  /** Listed on the home page programme carousel in the legacy site. */
  featuredOnHome: boolean;
}

export type SchoolSlug = "agricultural-sciences" | "engineering-technology" | "management-entrepreneurship" | "philosophy-arts";

export const programs: Program[] = [
  {
    slug: "bsc-agriculture",
    name: "B.Sc. (Hons) Agriculture",
    formLabel: "B.Sc. (Hons.) Agriculture",
    school: "School of Agricultural Sciences",
    schoolSlug: "agricultural-sciences",
    duration: "4 Years",
    durationIso: "P4Y",
    level: "undergraduate",
    status: "Fully Residential",
    summary:
      "Learn the Evergreen Revolution — regenerative methods that restore soil health, cut water dependency, and produce nutritious, ecologically sustainable food.",
    overview: [
      "India's agriculture education remains largely built around the Green Revolution model — chemical inputs, yield maximisation, institutional monoculture. HARI teaches the Evergreen Revolution: regenerative methods that restore soil health, dramatically reduce water dependency, and produce food that is both nutritious and ecologically sustainable.",
      "This is not an ideological position. It is what Kanha Shanti Vanam has demonstrated on its campus over fifteen years — and it is what the world's food system urgently needs.",
      "Research focus areas include drought-resistant and high-productivity genomics; biochar utilisation and carbon sequestration in agricultural soils; IoT and AI applications in precision and smart farming; natural and regenerative farming methodologies; tissue culture and controlled environment agriculture; water conservation and rainwater harvesting systems; and Mega Nursery and Exotic Nursery cultivation.",
    ],
    image: "facultyTeachingPlantSpecimen",
    featuredOnHome: true,
  },
  {
    slug: "bsc-horticulture",
    name: "B.Sc. (Hons) Horticulture",
    formLabel: "B.Sc. (Hons.) Horticulture",
    school: "School of Agricultural Sciences",
    schoolSlug: "agricultural-sciences",
    duration: "4 Years",
    durationIso: "P4Y",
    level: "undergraduate",
    status: "Fully Residential",
    summary:
      "The science of fruit, vegetable, flower, and ornamental crop cultivation, combined with HARI's capabilities in essential oils, grafting, and tissue culture.",
    overview: [
      "Specialising in the science of fruit, vegetable, flower, and ornamental crop cultivation, this programme combines classical horticultural science with HARI's unique capabilities in essential oil extraction, grafting, tissue culture, Mega Nursery management, Exotic Nursery cultivation, and regenerative soil management.",
      "Students graduate with a deep understanding of both the biology and the economics of horticulture, alongside practical experience in the systems that are transforming Indian agriculture.",
    ],
    image: "tissueCultureSeedlingCloseup",
    featuredOnHome: true,
  },
  {
    slug: "btech-computer-science",
    name: "B.Tech Computer Science",
    formLabel: "B.Tech CSE",
    school: "School of Engineering & Technology",
    schoolSlug: "engineering-technology",
    duration: "4 Years",
    durationIso: "P4Y",
    level: "undergraduate",
    status: "Fully Residential",
    summary:
      "A rigorous foundation in software engineering, systems design, and computational thinking — with a Heartfulness-informed emphasis on purposeful, responsible technology.",
    overview: [
      "A rigorous foundation in software engineering, systems design, and computational thinking — with a Heartfulness-informed emphasis on building technology that is purposeful, inclusive, and responsible.",
    ],
    image: "studentsMicroscopesLab",
    featuredOnHome: true,
  },
  {
    slug: "btech-cs-artificial-intelligence",
    name: "B.Tech Computer Science (Artificial Intelligence)",
    formLabel: "B.Tech CSE (AI & ML)",
    school: "School of Engineering & Technology",
    schoolSlug: "engineering-technology",
    duration: "4 Years",
    durationIso: "P4Y",
    level: "undergraduate",
    status: "Fully Residential",
    summary:
      "Ethical AI design, machine learning, and deep learning — informed by HARI's own AI research in agriculture, ecological monitoring, and consciousness science.",
    overview: [
      "Ethical AI design, machine learning, and deep learning — informed by HARI's own AI research in agriculture, ecological monitoring, and consciousness science. Students work on live interdisciplinary projects from Day 1.",
    ],
    image: "studentsDroneSmartFarm",
    featuredOnHome: true,
  },
  {
    slug: "btech-cs-data-science",
    name: "B.Tech Computer Science (Data Science)",
    formLabel: "B.Tech CSE (Data Science)",
    school: "School of Engineering & Technology",
    schoolSlug: "engineering-technology",
    duration: "4 Years",
    durationIso: "P4Y",
    level: "undergraduate",
    status: "Fully Residential",
    summary:
      "Statistical modelling, data engineering, and applied analytics — with hands-on datasets drawn from HARI's living campus.",
    overview: [
      "Statistical modelling, data engineering, and applied analytics — with hands-on datasets drawn from HARI's living campus: soil health, crop yields, biodiversity indices, and human performance metrics.",
    ],
    image: "studentTabletTreeSensor",
    featuredOnHome: true,
  },
  {
    slug: "btech-cs-cyber-security",
    name: "B.Tech Computer Science (Cyber Security)",
    formLabel: "B.Tech CSE (Cyber Security)",
    school: "School of Engineering & Technology",
    schoolSlug: "engineering-technology",
    duration: "4 Years",
    durationIso: "P4Y",
    level: "undergraduate",
    status: "Fully Residential",
    summary:
      "Network security, ethical hacking, cryptography, and digital governance — grounded in the social and ethical responsibility of protecting the world's information systems.",
    overview: [
      "Network security, ethical hacking, cryptography, and digital governance — grounded in a curriculum that takes seriously the social and ethical responsibility of those who protect the world's information systems.",
    ],
    image: "studentsMicroscopesLabC",
    featuredOnHome: false,
  },
  {
    slug: "bba-management",
    name: "BBA in Management",
    formLabel: "BBA",
    school: "School of Management & Entrepreneurship",
    schoolSlug: "management-entrepreneurship",
    duration: "3 Years",
    durationIso: "P3Y",
    level: "undergraduate",
    status: "Fully Residential",
    summary:
      "Business fundamentals taught alongside the Heartfulness leadership model: conscious capitalism, stakeholder value, ESG leadership, and decision-making from clarity.",
    overview: [
      "A contemporary undergraduate management programme where business fundamentals — finance, marketing, operations, strategy — are taught alongside the Heartfulness leadership model: conscious capitalism, stakeholder value, ESG leadership, and decision-making from a place of clarity and integrity.",
    ],
    image: "auditoriumGatheringD",
    featuredOnHome: false,
  },
  {
    slug: "ma-philosophy",
    name: "MA Philosophy",
    formLabel: "M.A. Philosophy",
    school: "School of Philosophy & Arts",
    schoolSlug: "philosophy-arts",
    duration: "2 Years",
    durationIso: "P2Y",
    level: "postgraduate",
    status: "Fully Residential",
    summary:
      "An interdisciplinary postgraduate programme drawing from Indian philosophical traditions, Western analytical philosophy, consciousness studies, and the science of the inner world.",
    overview: [
      "An interdisciplinary postgraduate programme that draws from Indian philosophical traditions, Western analytical philosophy, consciousness studies, ethics, and the science of the inner world. Students engage with living philosophical questions — not merely historical ones — and are encouraged to bring their insights into dialogue with the scientific and technological research happening across the HARI campus.",
    ],
    image: "philosophyReadingStudent",
    featuredOnHome: false,
  },
];

export const getProgram = (slug: string) => programs.find((p) => p.slug === slug);
export const programImage = (p: Program) => img[p.image];

/** Programme labels used by the legacy contact form's "Programme of interest" select. */
export const programFormOptions = [
  "B.Tech CSE",
  "B.Tech CSE (AI & ML)",
  "B.Tech CSE (Data Science)",
  "B.Tech CSE (Cyber Security)",
  "B.Sc. (Hons.) Agriculture",
  "B.Sc. (Hons.) Horticulture",
  "BBA",
  "M.A. Philosophy",
] as const;
