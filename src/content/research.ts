import type { ImageKey } from "@/assets/registry";

export const researchPage = {
  title: "Research | HARI University",
  description:
    "Explore HARI University research in consciousness, agriculture, ecology, technology, wellness and interdisciplinary innovation at Kanha Shanti Vanam.",
  hero: {
    eyebrow: "From Practice to Proof — 75 Years of Evidence, Now in a University",
    title: "Research at HARI",
    image: "campusAerialAvenueC" as ImageKey,
    stats: [
      { value: "4", label: "Research centres" },
      { value: "75 yrs", label: "Of proven practice" },
      { value: "160+", label: "Countries reached" },
    ],
  },
  philosophy: {
    eyebrow: "Our research philosophy",
    quote:
      "At HARI, research is not an isolated academic exercise — it is the natural extension of practice that has already changed lives. Seventy-five years of Heartfulness work has produced measurable outcomes in human health, ecological regeneration, and cognitive development. Our researchers ask the deeper question: why does it work, how do we scale it, and what does it reveal about human potential that science is only beginning to explore?",
    line: "Every HARI student steps into an ongoing investigation from their very first semester. They are not preparing to do research. They are already doing it.",
  },
  centresIntro: {
    title: "Our research centres",
    text: "Four centres, one living campus. Each turns a domain of Heartfulness practice into rigorous, evidence-led inquiry — and invites students into real investigation from their first semester.",
  },
  platforms: {
    eyebrow: "Interdisciplinary platforms",
    title: "Where the research happens",
    text: "Beyond the centres, HARI's interdisciplinary platforms turn the whole campus into a laboratory — shared infrastructure where students and researchers work across every discipline.",
    items: [
      {
        number: "01",
        title: "AI-Powered Smart Farms",
        text: "Interdisciplinary agriculture–engineering platforms where students build, instrument, and study working farms — learning and discovery happening side by side.",
        image: "forestPathCanopyL" as ImageKey,
        alt: "AI-powered smart farm on the HARI campus",
      },
      {
        number: "02",
        title: "Heartfulness Innovation Lab",
        text: "Working at the edge of AI, plant sciences, and nature–human interaction — home to the Tree Rhythms Project, measuring electrical signals in living plants.",
        image: "studentsMicroscopesLabC" as ImageKey,
        alt: "HARI students in lab coats using microscopes at the benches of a science laboratory",
      },
      {
        number: "03",
        title: "Biochar Centre & Grafting Institute",
        text: "Dedicated facilities for carbon-sequestration science, soil-fertility restoration, and propagation — paired with tissue-culture laboratories for disease-free genetics.",
        image: "tissueCultureLabResearcherC" as ImageKey,
        alt: "Biochar research and grafting facilities",
      },
      {
        number: "04",
        title: "The Living Campus",
        text: "A several-hundred-acre regenerated ecosystem wired with IoT sensor networks — a continuous, longitudinal ecological dataset no classroom simulation can replicate.",
        image: "meditationHallAerialC" as ImageKey,
        alt: "The regenerated Kanha Shanti Vanam campus",
      },
    ],
  },
  selected: {
    eyebrow: "Research · Publications",
    title: "Research Publications — Selected",
    text: "Peer-reviewed studies from the Heartfulness research community and its collaborators. A few of the most recent are below — the full, theme-grouped bibliography lives on the publications page.",
    link: { label: "View all publications →", href: "/research/publications" },
    /** Publication ids shown on the research overview page, in order. */
    ids: ["neural-dynamics-eeg-alpha", "ficus-keystone-species", "stress-biomarkers-burnout-rct"],
  },
  cta: {
    eyebrow: "Begin a conversation",
    title: "Partner with us on the science of well-being",
    text: "Collaborate with our research centres, propose a study, or explore evidence-led programmes shaped at HARI.",
    primary: { label: "Begin your enquiry", href: "/contact" },
    secondary: { label: "Explore Programmes", href: "/programs" },
    image: "academicBuildingBrickGlassC" as ImageKey,
  },
};

export interface ResearchCentre {
  number: string;
  name: string;
  badge: string;
  description: string;
  image: ImageKey;
  programmesHeading: string;
  programmes: string[];
  infrastructureHeading?: string;
  infrastructure?: string[];
}

export const researchCentres: ResearchCentre[] = [
  {
    number: "01",
    name: "Centre for Consciousness & Inner Sciences",
    badge: "6 active programmes",
    description:
      "Investigating the neuroscience, physiology, and psychology of meditation and inner development through rigorous empirical methods — and translating findings directly into educational practice.",
    image: "forestPathCanopyJ",
    programmesHeading: "Active research programmes",
    programmes: [
      "Effects of Heartfulness meditation on telomere length and biological longevity markers",
      "Neuroplasticity differences between long-term meditators, short-term practitioners, and non-meditators",
      "Stress and anxiety reduction in healthcare professionals — pre-experimental and interventional studies",
      "Heartfulness self-care as a tool for alleviating anxiety and promoting life satisfaction in school communities",
      "Cognitive performance and emotional resilience in children through the Brighter Minds methodology",
      "Machine learning classification of meditation-induced brain states using EEG and fMRI data",
    ],
  },
  {
    number: "02",
    name: "Centre for Regenerative Agriculture",
    badge: "7 active programmes · 6 facilities",
    description:
      "Pioneering the science of ecological restoration — from soil microbiome recovery to precision water management at scale — on a campus that is itself one of India's most significant active regeneration projects.",
    image: "campusGardensAerialB",
    programmesHeading: "Active research programmes",
    programmes: [
      "Biochar application in agricultural soils: carbon sequestration, fertility restoration, and water retention",
      "Drought-resistant crop genomics and high-productivity varietal development",
      "AI and IoT integration in precision farming — real-time soil, moisture, and crop monitoring",
      "Natural and regenerative farming methodologies: outcomes at scale on the living campus",
      "Water usage reduction through advanced rainwater harvesting and conservation modelling",
      "Essential oil extraction science and commercial horticulture applications",
      "Mega Nursery and Exotic Nursery research — propagation science and rare species cultivation",
    ],
    infrastructureHeading: "Infrastructure",
    infrastructure: [
      "AI-Powered Smart Farms — interdisciplinary agriculture-engineering research platforms",
      "Biochar Research Centre and dedicated Grafting Institute",
      "Tissue Culture Laboratories for disease-free propagation and genetic research",
      "Mega Nursery and Exotic Nursery facilities",
      "IoT sensor networks across active agricultural plots",
      "A sprawling, several-hundred-acre campus as a continuous, longitudinal ecological dataset",
    ],
  },
  {
    number: "03",
    name: "Heartfulness Innovation Lab",
    badge: "4 active programmes",
    description:
      "At the cutting edge of artificial intelligence, plant sciences, and nature-human interaction — applying technological tools to questions that matter for the future of life on earth.",
    image: "verticalFarmRackB",
    programmesHeading: "Active research programmes",
    programmes: [
      "Tree Rhythms Project: measuring and interpreting electrical signals in plants as evidence of plant consciousness",
      "AI and machine learning tools for ecological data analysis, pattern recognition, and biodiversity monitoring",
      "Nature-human interaction research: how immersion in living ecosystems affects cognitive and emotional health",
      "AI-driven curriculum personalisation tools for higher education environments",
    ],
  },
  {
    number: "04",
    name: "Centre for Human Performance",
    badge: "4 active programmes",
    description:
      "Combining elite sports science with holistic wellness research in a 54,680 sq ft facility purpose-built for both competitive athletics and rigorous academic enquiry.",
    image: "badmintonCourtsSportsCentre",
    programmesHeading: "Active research programmes",
    programmes: [
      "Heartfulness-enhanced athletic training: measuring impact on performance, recovery, and mental resilience",
      "Biometric monitoring of elite athlete well-being across competitive seasons",
      "Sports science protocols integrating breathwork, meditation, and physiological conditioning",
      "Youth sports development and cognitive performance correlation studies",
    ],
  },
];
