import type { ImageKey } from "@/assets/registry";
import type { SchoolSlug } from "./programs";

export const academicsPage = {
  title: "Academics | HARI University Hyderabad",
  description:
    "Explore HARI academics across Agriculture, Engineering, Management and Philosophy with interdisciplinary learning on a living campus at Kanha Shanti Vanam.",
  hero: {
    eyebrow: "Where Every Degree is Earned in a Living Laboratory",
    title: "Academics at HARI",
    image: "academicBuildingBrickGlass" as ImageKey,
    stats: [
      { value: "4", label: "Schools" },
      { value: "8", label: "Programmes" },
      { value: "1", label: "Living campus" },
    ],
  },
  philosophy: {
    eyebrow: "The HARI academic philosophy",
    quote:
      "Most universities teach theory first and hope it reaches the world eventually. At HARI, we start with what the world needs and work backwards. Our curriculum is built on 75 years of proven practice — in farms, in schools, in hospitals, and in corporate boardrooms across 160 countries.",
    line: "Skills for a career matter. Skills for a life matter more. At HARI, we build both.",
  },
  framework: {
    title: "The Heartfulness Curriculum Framework",
    intro:
      "Woven through every programme at HARI is a set of consciousness-based frameworks developed over decades of work in schools, corporations, and community programmes across India and globally.",
    note: "Actively implemented across India in leading schools, colleges, and elite institutions.",
  },
  schoolsIntro:
    "Four Schools, one living campus. Each is taught in concert with the others — never in isolation — so students build the cross-disciplinary fluency that defines leadership in the 21st century.",
  advantage: {
    eyebrow: "Interdisciplinary by design",
    title: "The HARI Engineering Advantage",
    intro:
      "Every B.Tech at HARI is built to cross disciplines. The advantage is not an add-on — it is how engineering is taught here, in concert with Agriculture, Management, and Philosophy.",
    items: [
      {
        title: "AI meets Agriculture",
        text: "AI-Powered Smart Farms — Engineering and Agriculture students co-own these platforms from the ground up.",
      },
      {
        title: "Code meets Conscience",
        text: "Ethics is a credit-bearing core subject in every B.Tech programme — not an elective, not a footnote.",
      },
      {
        title: "Data meets Ecology",
        text: "Live ecological datasets from the campus give Data Science students research material that no classroom simulation can replicate.",
      },
      {
        title: "Technology meets Tradition",
        text: "Exposure to Vedic Mathematics and ancient Indian computational traditions — and their surprising relevance to modern cryptography and algorithm design.",
      },
    ],
  },
  cta: {
    eyebrow: "Begin a conversation",
    title: "Explore our programmes",
    text: "Browse every undergraduate and postgraduate programme across the four Schools — each one earned in a living laboratory.",
    primary: { label: "Explore our programmes", href: "/programs" },
    secondary: { label: "Contact Admissions", href: "/contact" },
    image: "campusAerialAvenueB" as ImageKey,
  },
};

/** The four Heartfulness curriculum frameworks (shared by Academics and Heartfulness pages). */
export const curriculumFrameworks = [
  {
    code: "01",
    name: "Brighter Minds",
    academics:
      "Cognitive Skill Improvement — harnessing neuroplasticity to develop advanced cognitive abilities, applied directly to undergraduate learning.",
    heartfulness:
      "Cognitive skill improvement — harnessing neuroplasticity to develop advanced cognitive abilities, applied to undergraduate learning.",
  },
  {
    code: "02",
    name: "HELP",
    academics:
      "Heartfulness Experience Life Potential — cultivating core life skills, emotional balance, and the realisation of human potential.",
    heartfulness:
      "Heartfulness Experience Life Potential — cultivating core life skills, emotional balance, and the realisation of human potential.",
  },
  {
    code: "03",
    name: "HELM",
    academics:
      "Heartfulness Enabled Leadership Mastery — next-generation leadership capability, executive clarity, and decision-making from the heart.",
    heartfulness:
      "Heartfulness Enabled Leadership Mastery — developing leadership capability, executive clarity, and decision-making from the heart.",
  },
  {
    code: "04",
    name: "HOPE",
    academics:
      "Heartfulness Odyssey for Personal Excellence — holistic personal growth and lifelong excellence for students and faculty at every level.",
    heartfulness:
      "Heartfulness Odyssey for Personal Excellence — driving holistic personal growth and lifelong excellence for students and faculty.",
  },
];

export interface School {
  slug: SchoolSlug;
  number: string;
  name: string;
  shortName: string;
  badge: string;
  description: string;
  /** Short description used on the home page "Our schools and faculties" section. */
  homeSummary: string;
  focusHeading: string;
  focus: string[];
  image: ImageKey;
  homeImage: ImageKey;
}

export const schools: School[] = [
  {
    slug: "agricultural-sciences",
    number: "01",
    name: "School of Agricultural Sciences",
    shortName: "Agricultural Sciences",
    badge: "Flagship school · Admissions open AY 2026-27",
    description:
      "India's agriculture education remains built around the Green Revolution — chemical inputs, yield maximisation, monoculture. HARI teaches the Evergreen Revolution: regenerative methods that restore soil health, dramatically cut water dependency, and produce food that is both nutritious and ecologically sustainable. This is not ideology — it is what Kanha Shanti Vanam has demonstrated on its own campus over fifteen years.",
    homeSummary:
      "Regenerative agriculture, climate-resilient systems, agri-biotechnology, and data-driven farming. Proven on the campus over fifteen years.",
    focusHeading: "Programmes & focus areas",
    focus: [
      "B.Sc. (Hons) Agriculture — 4 years · fully residential",
      "B.Sc. (Hons) Horticulture — 4 years · fully residential",
      "Drought-resistant, high-productivity crop genomics",
      "Biochar utilisation and carbon sequestration in soils",
      "IoT and AI applications in precision and smart farming",
      "Tissue culture, Mega Nursery, and Exotic Nursery systems",
    ],
    image: "tissueCultureLabResearcherB",
    homeImage: "facultyTeachingPlantSpecimen",
  },
  {
    slug: "engineering-technology",
    number: "02",
    name: "School of Engineering & Technology",
    shortName: "Engineering & Technology",
    badge: "Four CSE specialisations · Admissions open AY 2026-27",
    description:
      "At HARI, engineering is never taught in isolation. Every programme is designed around the principle that technology serves people and the planet — and that the most capable technologists understand the human, ecological, and ethical dimensions of what they build. Students work alongside peers from Agriculture, Management, and Philosophy from Day 1.",
    homeSummary:
      "Technology that serves people and the planet — AI, Data Science, Cyber Security and CS — taught alongside Agriculture, Management, and Philosophy, never in isolation.",
    focusHeading: "Programmes & focus areas",
    focus: [
      "B.Tech Computer Science — software engineering, systems design, computational thinking",
      "B.Tech CS (Artificial Intelligence) — ethical AI, machine learning, deep learning",
      "B.Tech CS (Data Science) — statistical modelling and applied analytics on live campus data",
      "B.Tech CS (Cyber Security) — network security, cryptography, and digital governance",
      "Each specialisation: 4 years · fully residential",
    ],
    image: "engineeringLabStudentsChemistry",
    homeImage: "studentsMicroscopesLab",
  },
  {
    slug: "management-entrepreneurship",
    number: "03",
    name: "School of Management & Entrepreneurship",
    shortName: "Management & Entrepreneurship",
    badge: "Conscious capitalism · Heartful leadership",
    description:
      "Management at HARI rests on a single conviction: the most effective leaders of the coming decades will balance performance with purpose, profit with planet, and strategy with empathy. The BBA draws from Agriculture, Technology, Philosophy, and the Heartfulness leadership frameworks — producing graduates as comfortable with a balance sheet as with a boardroom conversation about ethics.",
    homeSummary:
      "Conscious leadership and Sustainable enterprise development — balancing performance with purpose, profit with planet, and strategy with empathy.",
    focusHeading: "Programmes & focus areas",
    focus: [
      "BBA in Management — 3 years · fully residential",
      "Heartful Leadership — leading with empathy, intuition, and inner clarity",
      "Conscious Capitalism — maximising stakeholder value across people, planet, and profit",
      "Live case studies drawn from Kanha Shanti Vanam's own regeneration model",
      "Cross-disciplinary immersion with Engineering and Agriculture students",
      "ESG and sustainability strategy for a resource-constrained world",
    ],
    image: "auditoriumGatheringD",
    homeImage: "auditoriumGatheringD",
  },
  {
    slug: "philosophy-arts",
    number: "04",
    name: "School of Philosophy & Arts",
    shortName: "Philosophy & Arts",
    badge: "Anchored by the Chair for Tirthankar Bhagwan Rishabhdev",
    description:
      "HARI is one of the very few institutions in India where Philosophy is not a peripheral subject but a cornerstone. The School approaches India's ancient wisdom traditions with the same intellectual rigour and academic seriousness as any modern discipline — and brings them into living dialogue with the science and technology research across the campus.",
    homeSummary:
      "India's ancient wisdom traditions studied with full academic rigour — anchored by the Chair for Tirthankar Bhagwan Rishabhdev.",
    focusHeading: "Programmes & focus areas",
    focus: [
      "MA Philosophy — 2 years · fully residential",
      "Indian Philosophical Traditions — Vedanta, Jain philosophy, Samkhya",
      "Philosophy of Consciousness — the inner sciences as a rigorous field",
      "Ethics in Technology & Leadership — in dialogue with Engineering and Management",
      "The Chair for Tirthankar Bhagwan Rishabhdev — seminars, research, visiting scholars",
      "Philosophy of Ecology — studied on a campus that embodies it",
    ],
    image: "philosophyReadingStudent",
    homeImage: "selfMadeManSculpture",
  },
];

export const getSchool = (slug: SchoolSlug) => schools.find((s) => s.slug === slug)!;
