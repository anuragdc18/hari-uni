import type { ImageKey } from "@/assets/registry";
import { externalLinks, SITE_URL } from "./site";

export const heartfulnessPage = {
  title: "Heartfulness at HARI University",
  description:
    "Discover Heartfulness at HARI University, a secular practice of relaxation and meditation integrated with student development and research.",
  hero: {
    eyebrow: "Ancient Wisdom. Scientific Evidence. No Dogma. No Charge.",
    title: "Heartfulness at HARI",
    intro:
      "A simple, practical approach to inner development — rooted in ancient practice, backed by peer-reviewed science, and offered freely to every sincere seeker.",
    primary: { label: "Explore our research", href: "/research" },
    secondary: { label: "Learn the practice", href: externalLinks.heartfulness, external: true },
    image: "campusSunsetAerial" as ImageKey,
  },
  what: {
    eyebrow: "The practice",
    title: "What is Heartfulness?",
    paragraphs: [
      "Heartfulness is a simple, practical approach to inner development rooted in the ancient Indian tradition of Raja Yoga — adapted for the contemporary world by Daaji and practised today by millions of people across 160 countries.",
      "At its core, Heartfulness is a meditation practice. But it is not generic mindfulness or stress management. It works with a specific dimension of human experience — the heart as the seat of consciousness — and its effects have been documented in peer-reviewed research measuring everything from stress hormone levels to telomere length to prefrontal cortex activity in long-term practitioners.",
      "At HARI, Heartfulness is not a religion, not a requirement, and not a cost. It is a tool — the most refined tool HARI offers — for the development of the whole human being.",
    ],
    images: [
      { key: "meditationGroveForestPath" as ImageKey, alt: "A meditation grove at Kanha Shanti Vanam" },
      { key: "forestPathCanopyI" as ImageKey, alt: "A tree-canopied path on the HARI campus" },
      { key: "campusGardensAerial" as ImageKey, alt: "Kanha Shanti Vanam gardens from the air" },
    ],
  },
  reach: {
    eyebrow: "Reach & access",
    title: "A practice without borders",
    text: "Heartfulness is practised by millions across 160 countries and offered freely everywhere it operates — always with certified trainers, never as an obligation.",
    stats: [
      { value: "160", label: "Countries practising" },
      { value: "75 +", label: "Years of practice" },
      { value: "Millions", label: "Practitioners worldwide" },
      { value: "Free", label: "Always, with certified trainers" },
    ],
  },
  daily: {
    eyebrow: "In daily life",
    title: "Heartfulness, woven into HARI life",
    text: "More than a subject, Heartfulness shapes how HARI lives, researches, and teaches — from daily practice to the laboratory.",
    items: [
      {
        label: "A practice for daily life",
        title: "Woven into the rhythm of campus",
        text: "Heartfulness is not an elective at HARI — it is part of the daily life of the campus, practised in the same place that is home to the world's largest meditation hall. Students step into a living community of practitioners rather than a course.",
        image: "forestPathCanopyK" as ImageKey,
        alt: "A meditation grove in the gardens of Kanha Shanti Vanam",
      },
      {
        label: "The Heartfulness Innovation Lab",
        title: "At the edge of consciousness and AI",
        text: "The Innovation Lab works where artificial intelligence, plant sciences, and nature-human interaction meet — including the Tree Rhythms Project, which measures electrical signals in plants as evidence of plant consciousness. Heartfulness is both a practice and a question to investigate.",
        image: "studentTabletTreeSensor" as ImageKey,
        alt: "A plant growth chamber in the research labs at HARI",
      },
      {
        label: "Research from year one",
        title: "Evidence you help build",
        text: "Through the Centre for Consciousness & Inner Sciences, students join active, peer-reviewed research into meditation, cognition, and well-being from their first year — contributing to the growing body of evidence that underpins the practice.",
        image: "studentsGroupSeated" as ImageKey,
        alt: "Laboratory research at the Centre for Consciousness & Inner Sciences",
      },
    ],
  },
  framework: {
    eyebrow: "Curriculum framework",
    title: "The Heartfulness curriculum framework",
    text: "HARI's academic programmes are designed using four frameworks developed over decades of Heartfulness work in schools, corporations, and community programmes across India and the world.",
    note: "These frameworks are not separate courses or add-on modules. They are the architecture through which all learning at HARI is approached.",
  },
  science: {
    eyebrow: "The evidence",
    title: "The science behind the practice",
    text: "Documented in peer-reviewed studies — not asserted, but measured.",
    items: [
      {
        number: "01",
        title: "Minimises stress",
        text: "Documented in children and adults across multiple peer-reviewed studies — including randomised survey designs and pre-experimental studies with healthcare workers.",
      },
      {
        number: "02",
        title: "Enhances resilience",
        text: "Builds capacity in children and adults to handle complex and challenging situations — measured through validated psychological instruments.",
      },
      {
        number: "03",
        title: "Optimises performance",
        text: "Significant improvements in workplace efficiency and cognitive task performance in corporate and academic settings.",
      },
      {
        number: "04",
        title: "Biological transformation",
        text: "Positive impact at the DNA level — telomere length improvements in practitioners compared to control groups, published in international journals.",
      },
    ],
    line: "Skills for a career matter. But skills for a life matter more. At HARI, we build both.",
  },
  secular: {
    eyebrow: "Open to everyone",
    title: "A secular, universal practice",
    paragraphs: [
      "HARI is a secular institution. Heartfulness practice is offered as a tool and a field of study, not as a belief system or institutional obligation. Students of all faiths, backgrounds, and worldviews study at HARI — the practice is open to everyone and belongs to no religion.",
      "Heartfulness practice with certified trainers is always offered free of charge — inside HARI and across the world where Heartfulness operates.",
    ],
  },
  integration: {
    eyebrow: "Go deeper",
    title: "Research integration",
    text: "The Centre for Consciousness & Inner Sciences conducts ongoing, peer-reviewed research into the effects of Heartfulness practice on human health, cognition, and well-being. Students can join active research projects from their first year and contribute to the evidence that underpins the practice.",
    link: { label: "Explore research centres", href: "/research" },
    elsewhereEyebrow: "Elsewhere",
    elsewhereTitle: "Learn more",
    elsewhere: [
      { label: "Explore our published research", href: `${SITE_URL}/research`, external: false, internalHref: "/research" },
      { label: "Learn more about Heartfulness at heartfulness.org", href: externalLinks.heartfulness, external: true },
      { label: "Read Daaji's teachings at daaji.org", href: externalLinks.daaji, external: true },
    ],
  },
  cta: {
    eyebrow: "Begin a conversation",
    title: "Come and experience it for yourself",
    text: "Visit Kanha Shanti Vanam, sit with a certified trainer, or explore the research behind the practice. There is no cost, and no obligation.",
    primary: { label: "Begin your enquiry", href: "/contact" },
    secondary: { label: "Explore research", href: "/research" },
    image: "campusAerialAvenueF" as ImageKey,
  },
};
