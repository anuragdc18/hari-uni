import type { ImageKey } from "@/assets/registry";

export const homePage = {
  title: "HARI University Hyderabad | Heartfulness Academy of Research & Innovation",
  description:
    "HARI University at Kanha Shanti Vanam, Hyderabad offers UGC-approved programmes in agriculture, engineering, management, philosophy and consciousness research.",
  hero: {
    title: "HARI University Hyderabad",
    text: "Where consciousness meets research. HARI University is India's first greenfield, privately sponsored deemed-to-be university approved by the Government of India under UGC's Distinct Category at Shri Ram Chandra Mission, Ganesh Nagar, Near C-Camp, Kurnool.",
    primary: { label: "Apply Now", href: "/apply" },
    secondary: { label: "Explore programmes", href: "/programs" },
    poster: "meditationHallAerialHero" as ImageKey,
    posterAlt: "Aerial view of the lotus-petal meditation halls at Kurnool",
    video: { mp4: "/videos/hero-720.mp4", poster: "/videos/hero-poster.jpg" },
  },
  about: {
    eyebrow: "Where consciousness meets research",
    title: "About HARI",
    text: "HARI integrates modern scientific excellence with ethical awareness and holistic human development.",
    link: { label: "Discover more", href: "/about" },
    images: [
      { key: "forestPathCanopyWide" as ImageKey, alt: "Cathedral-like tree canopy over a terracotta path at Kurnool" },
      { key: "studentsMicroscopesLabB" as ImageKey, alt: "HARI students at microscopes during a laboratory session at Kurnool" },
      { key: "tissueCultureLabResearcherD" as ImageKey, alt: "Researcher with plant tissue-culture jars" },
    ],
    quote: "“Where compassion guides science and leadership serves humanity.”",
    quoteCaption: "Kanha . Shanti . Vanam",
  },
  schools: {
    eyebrow: "Four schools, one campus",
    title: "Our schools and faculties",
    tabs: [
      {
        label: "Science",
        items: [
          {
            image: "meditationHallAerialB" as ImageKey,
            alt: "Science",
            text: "At HARI, research is not an isolated academic exercise — it is the natural extension of practice that has already changed lives. Every HARI student steps into an ongoing investigation from their very first semester. They are not preparing to do research. They are already doing it.",
          },
          {
            image: "forestAerialCanopy" as ImageKey,
            alt: "Plants growing under controlled conditions in a HARI vertical-farm growth chamber",
            text: "The campus of Kurnool is a remarkable example of science-led ecological restoration. What was once barren land has been transformed into a lush rainforest-like ecosystem through advanced methods in soil health, water management, afforestation, and biodiversity conservation.",
          },
        ],
      },
      {
        label: "Innovation",
        items: [
          {
            image: "studentsDroneSmartFarm" as ImageKey,
            alt: "Two HARI students studying together at a table in the campus library",
            text: "AI-Powered Smart Farms are built and operated jointly by Agriculture and Engineering students — interdisciplinary research platforms where learning and discovery happen side by side.",
          },
          {
            image: "studentTabletTreeSensorB" as ImageKey,
            alt: "Innovation",
            text: "The Heartfulness Innovation Lab works at the edge of AI, plant sciences, and nature-human interaction — including the Tree Rhythms Project, measuring electrical signals in plants.",
          },
        ],
      },
      {
        label: "Community",
        items: [
          {
            image: "studentsGroupSeatedB" as ImageKey,
            alt: "Two HARI students walking and talking together through the campus gardens",
            text: "Heartfulness is practised by millions across 160 countries — and at HARI it is woven into daily life, offered freely, with certified trainers and no charge.",
          },
          {
            image: "studentsWalkingAvenue" as ImageKey,
            alt: "A group of HARI students walking together along a tree-lined campus avenue",
            text: "Students step into active community and ecological projects from their first year — bringing positive change through education, research, and a deep sense of social responsibility.",
          },
        ],
      },
    ],
  },
  programmes: {
    eyebrow: "Study at HARI",
    title: "Our university programmes",
    link: { label: "Explore programmes", href: "/programs" },
  },
  pillars: {
    eyebrow: "What we stand for",
    title: "Our four pillars",
    items: [
      { title: "Ecological Stewardship", text: "Commitment to sustainability, regeneration, and green innovation.", image: "aiPillarEcology" as ImageKey, alt: "Hands planting a sapling in red soil" },
      { title: "Consciousness & Inner Sciences", text: "Fostering holistic human development through proven inner practices.", image: "aiPillarConsciousness" as ImageKey, alt: "A person meditating under a banyan tree" },
      { title: "Rigorous Innovation", text: "Advancing data-driven, peer-reviewed scientific research.", image: "aiPillarInnovation" as ImageKey, alt: "A scientist pipetting in a plant-genetics laboratory" },
      { title: "Global Responsibility", text: "Cultivating community-centric, scalable impact across 160+ countries.", image: "aiPillarCommunity" as ImageKey, alt: "Students seated in a circle on a campus lawn" },
    ],
  },
  events: {
    eyebrow: "On campus",
    title: "Upcoming events and activities",
    cards: [
      { slug: "heartfulness-education-conclave", image: "auditoriumGatheringE" as ImageKey, alt: "Heartfulness Education Conclave" },
      { slug: "open-day-at-kanha", image: "forestPathCanopyM" as ImageKey, alt: "Open Day at Kanha" },
    ],
  },
  cta: {
    eyebrow: "Visit Kanha Shanti Vanam",
    title: "Questions? We're here to help",
    text: "Plan your visit to Kanha Shanti Vanam, explore our programmes, or reach out for admissions guidance. Our team is here to help.",
    primary: { label: "Begin your enquiry", href: "/contact" },
    secondary: { label: "Explore programmes", href: "/programs" },
    image: "campusPalmsGreenhouseAerialC" as ImageKey,
  },
  map: {
    eyebrow: "Find us",
    title: "HARI University, Kanha Shanti Vanam.",
    text: "Use the map below to reach HARI University for events, campus visits, and programmes at Kanha Shanti Vanam, Hyderabad.",
  },
  orientationPopup: {
    eyebrow: "You are invited",
    title: "Orientation Day 2026",
    text: "A new beginning for I B.Tech and BBA students at HARI University, Kanha Shanti Vanam, Hyderabad.",
    facts: ["17 August 2026, 9:00 AM", "Parents and students invited", "Food and accommodation available"],
    link: { label: "View orientation details", href: "/events/orientation-program" },
    image: "hariOrientationDay2026" as ImageKey,
    imageAlt: "HARI University Orientation Day 2026 invitation poster",
  },
};
