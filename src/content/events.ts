import type { ImageKey } from "@/assets/registry";
import { contact } from "./site";

export interface EventItem {
  slug: string;
  title: string;
  dateLabel: string;
  /** ISO date for schema.org */
  startDate: string;
  location: string;
  /** Short location shown on event cards (legacy card label). */
  cardLocation: string;
  summary: string;
  body: string[];
  dateNote?: string;
  heroImage: ImageKey;
  heroAlt: string;
  cardImage: ImageKey;
  cardAlt: string;
  /** Rich pages (orientation, udaan) have their own templates. */
  template: "standard" | "orientation" | "udaan";
  registerHref: string;
  registerLabel: string;
  /** Legacy JSON-LD event name when it differs from the page title. */
  schemaName?: string;
  description: string;
}

export const eventsPage = {
  title: "Events | HARI University Hyderabad",
  description:
    "View upcoming HARI University events, seminars, student activities and campus programmes at Kanha Shanti Vanam, Hyderabad.",
  hero: {
    eyebrow: "Next events",
    title: "HARI",
    image: "aiEventsHero" as ImageKey,
    imageAlt: "An evening gathering on the HARI campus",
  },
  featuredOrientation: {
    eyebrow: "Featured event",
    title: "Orientation Day 2026",
    text: "Welcoming I B.Tech and BBA students and families to HARI University for student orientation, campus experience, academic guidance and parent interaction.",
    facts: ["17 August 2026, 9:00 AM", "Kanha Shanti Vanam, Hyderabad", "Food and accommodation available"],
    link: { label: "View orientation details", href: "/events/orientation-program" },
    image: "hariOrientationDay2026" as ImageKey,
    imageAlt: "HARI University Orientation Day 2026 invitation poster",
  },
  featuredUdaan: {
    eyebrow: "Featured event",
    title: "HARI Udaan 2026",
    text: "Andhra Pradesh Merit Excellence Awards recognizing the brightest Intermediate achievers with Gold, Silver and Bronze medal categories, certificates, HARI Merit Recognition, media coverage, and special scholarship consideration.",
    facts: ["06 August 2026", "Sree Srinivas Conventions, Vijayawada", "For 85% and above achievers"],
    link: { label: "View event details", href: "/events/hari-udaan-2026" },
    note: "Terms and conditions apply",
    image: "hariUdaanVijayawadaDetails" as ImageKey,
    imageAlt: "HARI Udaan 2026 Andhra Pradesh Merit Excellence Awards poster",
  },
  map: {
    eyebrow: "Find us",
    title: "HARI University, Kanha Shanti Vanam.",
    text: "Use the map below to reach HARI University for events, campus visits, and programmes at Kanha Shanti Vanam, Hyderabad.",
    primary: { label: "Open in Google Maps", href: contact.mapsSearch, external: true },
    secondary: { label: "Contact HARI", href: "/contact" },
  },
};

export const events: EventItem[] = [
  {
    slug: "orientation-program",
    title: "Orientation Day 2026",
    dateLabel: "17 August 2026, 9:00 AM",
    startDate: "2026-08-17T09:00:00+05:30",
    location: "Kanha Shanti Vanam, Hyderabad",
    cardLocation: "Kanha Shanti Vanam, Hyderabad",
    summary:
      "Welcoming I B.Tech and BBA students and families to HARI University for student orientation, campus experience, academic guidance and parent interaction.",
    body: [],
    heroImage: "hariOrientationDay2026",
    heroAlt: "HARI University Orientation Day 2026 invitation poster",
    cardImage: "hariOrientationDay2026",
    cardAlt: "HARI University Orientation Day 2026 invitation poster",
    template: "orientation",
    registerHref: "/contact",
    registerLabel: "Contact HARI",
    schemaName: "HARI University Orientation Day 2026",
    description:
      "HARI University Orientation Day 2026 for I B.Tech and BBA students and parents on 17 August 2026 at Kanha Shanti Vanam, Hyderabad.",
  },
  {
    slug: "hari-udaan-2026",
    title: "HARI Udaan 2026",
    dateLabel: "06 August 2026",
    startDate: "2026-08-06",
    location: "Sree Srinivas Conventions, Vijayawada",
    cardLocation: "Sree Srinivas Conventions, Vijayawada",
    summary: "Recognizing Andhra Pradesh's brightest Intermediate achievers.",
    body: [],
    heroImage: "hariUdaanVijayawadaMain",
    heroAlt: "HARI Udaan 2026 Andhra Pradesh Merit Excellence Awards Vijayawada poster",
    cardImage: "hariUdaanVijayawadaDetails",
    cardAlt: "HARI Udaan 2026 Andhra Pradesh Merit Excellence Awards poster",
    template: "udaan",
    registerHref: "#registration",
    registerLabel: "Register your details",
    schemaName: "HARI Udaan 2026 Andhra Pradesh - Merit Excellence Awards",
    description:
      "HARI Udaan 2026 Andhra Pradesh Merit Excellence Awards recognises Intermediate achievers on 06 August 2026 at Sree Srinivas Conventions, Kunchanapalli, Tadepalli, Vijayawada.",
  },
  {
    slug: "inaugural-convocation",
    title: "Inaugural Convocation",
    dateLabel: "Mar 14, 2026",
    startDate: "2026-03-14",
    location: "Kanha Shanti Vanam",
    cardLocation: "Kurnool",
    summary: "HARI's first convocation, celebrating the foundational cohort at Kanha Shanti Vanam.",
    body: [
      "HARI's inaugural convocation marks a milestone for India's first greenfield, privately sponsored deemed-to-be university under UGC's Distinct Category.",
    ],
    dateNote: "Date is indicative and will be confirmed by the HARI team.",
    heroImage: "inauguralConvocationGroupWide",
    heroAlt: "HARI faculty and staff gathered at the Inaugural Convocation outside the Heartfulness Academy of Research and Innovation",
    cardImage: "inauguralConvocationGroup",
    cardAlt: "HARI faculty and staff gathered at the Inaugural Convocation outside the Heartfulness Academy of Research and Innovation",
    template: "standard",
    registerHref: "/contact",
    registerLabel: "Register now",
    description: "HARI's first convocation, celebrating the foundational cohort at Kanha Shanti Vanam.",
  },
  {
    slug: "world-environment-day",
    title: "World Environment day 2026",
    dateLabel: "Jun 5, 2026",
    startDate: "2026-06-05",
    location: "HARI",
    cardLocation: "HARI",
    summary: "Details, schedule, and registration for this HARI event.",
    body: [
      "HARI celebrated World Environment Day on June 5th with great enthusiasm and a deep sense of responsibility towards nature. The event brought together participants to reflect on our collective commitment to environmental stewardship, featuring tree plantation drives, awareness sessions, and heartfelt discussions on sustainable living. Rooted in the Heartfulness way of life, HARI reaffirmed its dedication to nurturing the planet, recognising that a clean, green, and thriving environment begins with a calm and conscious heart.",
    ],
    heroImage: "treePlantationEnvironmentDayWide",
    heroAlt: "World Environment day at HARI",
    cardImage: "treePlantationEnvironmentDay",
    cardAlt: "World Environment day at HARI",
    template: "standard",
    registerHref: "/contact",
    registerLabel: "Register now",
    description: "Details, schedule, and registration for this HARI event.",
  },
  {
    slug: "heartfulness-education-conclave",
    title: "Heartfulness Education Conclave",
    dateLabel: "Jul 18, 2026",
    startDate: "2026-07-18",
    location: "Global Knowledge Exchange Centre, Kanha Shanti Vanam",
    cardLocation: "Global Knowledge Exchange Centre, Kanha Shanti Vanam",
    summary: "Educators, researchers, and partners gather to explore consciousness-based education and interdisciplinary research.",
    body: [
      "A gathering of educators, researchers, and partners exploring consciousness-based education, regenerative agriculture, and interdisciplinary research at HARI.",
    ],
    dateNote: "Date is indicative and will be confirmed by the HARI team.",
    heroImage: "auditoriumGatheringC",
    heroAlt: "Kanha Shanti Vanam campus",
    cardImage: "auditoriumGatheringF",
    cardAlt: "Kurnool campus",
    template: "standard",
    registerHref: "/contact",
    registerLabel: "Register now",
    description: "Educators, researchers, and partners gather to explore consciousness-based education and interdisciplinary research.",
  },
  {
    slug: "open-day-at-kanha",
    title: "Open Day at Kanha",
    dateLabel: "Sep 12, 2026",
    startDate: "2026-09-12",
    location: "Kanha Shanti Vanam",
    cardLocation: "Kurnool",
    summary: "Prospective students and families experience the living campus — forest, smart farms, sports centre, and meditation hall.",
    body: [
      "Prospective students and families are invited to experience the living campus first-hand — the forest, the AI-powered smart farms, the Heartfulness International Sports Centre, and the world's largest meditation hall.",
    ],
    dateNote: "Date is indicative and will be confirmed by the HARI team.",
    heroImage: "forestPathCanopyN",
    heroAlt: "Kanha Shanti Vanam campus",
    cardImage: "forestPathCanopyF",
    cardAlt: "Kurnool campus",
    template: "standard",
    registerHref: "/contact",
    registerLabel: "Register now",
    description: "Prospective students and families experience the living campus — forest, smart farms, sports centre, and meditation hall.",
  },
];

/** Legacy event card order on the Events page (below the two featured events). */
export const eventCardOrder = ["inaugural-convocation", "world-environment-day", "heartfulness-education-conclave", "open-day-at-kanha"];
/** Legacy "Upcoming events and activities" on the home page. */
export const homeEventSlugs = ["heartfulness-education-conclave", "open-day-at-kanha"];

export const getEvent = (slug: string) => events.find((e) => e.slug === slug);

/* ---------------- Orientation Day 2026 ---------------- */

export const orientation = {
  title: "Orientation Program 2026 | HARI University Hyderabad",
  description:
    "HARI University Orientation Day 2026 for I B.Tech and BBA students and parents on 17 August 2026 at Kanha Shanti Vanam, Hyderabad.",
  hero: {
    eyebrow: "A new beginning. A brighter future.",
    title: "Orientation Day 2026",
    intro:
      "Official orientation information for parents and newly admitted I B.Tech and BBA students joining HARI University at Kanha Shanti Vanam, Hyderabad.",
    primary: { label: "Open orientation desk", href: "#orientation-desk" },
    secondary: { label: "Contact HARI", href: "/contact" },
    poster: "hariOrientationDay2026" as ImageKey,
    posterAlt: "HARI University Orientation Day 2026 invitation poster",
    invitationPdf: "/docs/hari-orientation-2026-invitation.pdf",
    invitationLabel: "Download the official invitation (PDF)",
  },
  facts: [
    { value: "17 August 2026", label: "Monday, 9:00 AM" },
    { value: "I B.Tech & BBA", label: "New students" },
    { value: "Kanha Shanti Vanam", label: "Hyderabad" },
    { value: "Parents Invited", label: "Family welcome" },
  ],
  sectionNav: [
    { label: "Overview", href: "#orientation-desk" },
    { label: "Programme", href: "#programme" },
    { label: "Accommodation", href: "#accommodation" },
    { label: "Hostel", href: "#hostel" },
    { label: "Transport", href: "#transport" },
    { label: "Documents", href: "#documents" },
    { label: "Venue", href: "#venue" },
  ],
  desk: {
    eyebrow: "Orientation desk",
    title: "Everything parents and students need before reporting.",
    briefTitle: "Official quick brief",
    briefTag: "Read first",
    brief: [
      "HARI is pleased to welcome newly admitted I B.Tech and BBA students and their families to Orientation Day 2026. This page brings the invitation and every operational detail into one clear place.",
      "Use the section links above to move directly to accommodation, hostel requirements, transport timings, dress code, document submission and venue details.",
    ],
    keyDates: [
      { label: "Parent accommodation deadline", value: "15 August 2026, 2:00 PM" },
      { label: "Hostel opens", value: "16 August 2026, 2:00 PM onwards" },
      { label: "Dress code", value: "Strictly formal for all students" },
    ],
  },
  programme: {
    eyebrow: "Programme flow",
    title: "A guided start to campus life.",
    steps: [
      { number: "01", title: "Student Orientation", text: "Introduction to academic expectations, university culture and first-year life." },
      { number: "02", title: "Campus Experience", text: "Familiarity with Kanha Shanti Vanam, campus facilities and support spaces." },
      { number: "03", title: "Academic Guidance", text: "Course readiness and academic guidance for I B.Tech and BBA students." },
      { number: "04", title: "Parent Interaction", text: "Parent-facing interaction to clarify processes, reporting and support." },
      { number: "05", title: "Food & Accommodation", text: "Support available as per the stated timelines and instructions." },
    ],
    guests: [
      { label: "Chief Guest", value: "Shri Kamlesh D. Patel (Daaji), Global Guide of Heartfulness and Chancellor - HARI." },
      { label: "Guests of Honor", value: "Dr. Narsireddy Malgireddy, Vamsi Chalagulla and Dr. Sairam Reddy Palicherla." },
      { label: "For more details", value: "+91 94910 26262, +91 94920 92926" },
    ],
  },
  accommodation: {
    eyebrow: "Parent accommodation",
    title: "Accommodation for outstation parents.",
    facts: [
      { label: "Availability", value: "From 16 August 2026 at 2:00 PM to 17 August 2026 at 6:00 PM." },
      { label: "Submit details by", value: "15 August 2026, 2:00 PM through WhatsApp." },
      { label: "Staff in-charge", value: "Mr. Rakshan, Ms. Monika Sharma, Ms. Suma and Ms. Arti Iyengar. Contact: 63099 90657." },
    ],
    tableTitle: "Details required for parent accommodation",
    particulars: ["Parent's Name", "Student's Name", "Contact Number", "Branch", "Date and approximate time of arrival at the University"],
    note: "Separate accommodation arrangements will be made for male and female parents. Parents requiring accommodation should bring Aadhaar Cards along with photocopies. A maximum of three accompanying persons per student will be permitted.",
  },
  hostel: {
    eyebrow: "Hostel students",
    title: "Pre-requisites for hostel students.",
    text: "Hostel accommodation will be available from 16 August 2026 at 2:00 PM onwards. For hostel-related queries, contact Ms. Arti Iyengar and Dr. P. Venkat Reddy at 63099 90653.",
    items: [
      "Formal clothing",
      "Toiletries including bucket, mug and personal-care items",
      "Required medicines, if any",
      "Bed sheets, pillow covers and blankets as applicable",
      "Two sets of lock and key - one small and one big",
      "Necessary study materials and stationery",
      "Personal ID proof such as Aadhaar Card with photocopy",
      "Any other essential items required for comfortable hostel living",
    ],
    note: "Students are advised to label their personal belongings appropriately.",
  },
  transport: {
    eyebrow: "Bus routes and transportation",
    title: "Day scholar and parent transport details.",
    text: "Day scholars should reach the designated pick-up points well in advance and remain in contact with the driver or in-charge. Parents using TGSRTC services should also arrive early at the listed boarding points.",
    routesTitle: "University bus routes for day scholars",
    routes: [
      { sno: 1, routeNo: 1, start: "LB Nagar", via: "LB Nagar, Dilsukhnagar, Ashta Lakshmi Temple, Kothapet, Saidabad Colony, Shamshabad", contact: "Dr. P. Tanuja - 7097923342" },
      { sno: 2, routeNo: 2, start: "Secunderabad", via: "Secunderabad, Tarnaka, Habsiguda, Uppal, Nagole, Kameneni Hospital, Hayathnagar, Shamshabad", contact: "Dr. M. Venkateswarlu - 9989295635" },
      { sno: 3, routeNo: 3, start: "Kukatpally", via: "Kukatpally, Virinchi Hospital, Masab Tank, Mehdipatnam, PV Expressway Flyover, Shamshabad", contact: "Ms. K. Visali - 9177752463" },
      { sno: 4, routeNo: 4, start: "Alwal", via: "Alwal, Suchitra X Road, Bowenpally, Tadband, Kharkhana, JBS, Sangeeth, Chilakalguda X Road, Gandhi Hospital, Musheerabad, Chikkadapally, Narayanguda, Abids GPO, Karachi Bakery, Afzalgunj", contact: "Dr. Vijaya Shanti - 7702159946" },
      { sno: 5, routeNo: 5, start: "Shadnagar", via: "Shadnagar, Balaji Convention, Sai Baba Temple, Maharaj Dhaba, More Super Market, Pargi Road, Pochamma Temple", contact: "Dr. Mounika - 950544519" },
    ],
    cityToKanhaTitle: "TGSRTC - City towards Kanha",
    cityToKanha: [
      { time: "5:45 AM", from: "Afzalgunj", to: "Kanha", route: "455", location: "Afzalgunj" },
      { time: "6:40 AM", from: "Secunderabad", to: "Kanha", route: "72/539", location: "40 Number Bus Stop" },
      { time: "8:10 AM", from: "Secunderabad", to: "LB Nagar via Kanha", route: "300/539", location: "Rathifile, Secunderabad" },
      { time: "11:00 AM", from: "Afzalgunj / CBS", to: "Kanha", route: "539", location: "Afzalgunj" },
      { time: "1:20 PM", from: "Afzalgunj / CBS", to: "Kanha", route: "539", location: "Afzalgunj" },
      { time: "2:00 PM", from: "Shamshabad", to: "Kanha", route: "455", location: "NH44, Savera Hotel Bus Stop" },
      { time: "2:15 PM", from: "Secunderabad", to: "LB Nagar via Kanha", route: "300/539", location: "Rathifile, Secunderabad" },
      { time: "3:00 PM", from: "Afzalgunj / CBS", to: "Kanha", route: "539", location: "Afzalgunj" },
      { time: "6:00 PM", from: "Secunderabad", to: "Kanha", route: "8A/539", location: "40 Number Bus Stop" },
      { time: "6:30 PM", from: "Afzalgunj", to: "Kanha", route: "455", location: "Fruit Market Bus Stop" },
    ],
    kanhaToCityTitle: "TGSRTC - Kanha towards city",
    kanhaToCity: [
      { time: "4:00 AM", from: "Kanha", to: "Afzalgunj", route: "455", location: "North Bus Stand" },
      { time: "4:20 AM", from: "Kanha", to: "Secunderabad", route: "72/539", location: "North Bus Stand" },
      { time: "7:45 AM", from: "Kanha", to: "Shamshabad", route: "455", location: "Main Dining Hall" },
      { time: "9:00 AM", from: "Kanha", to: "Afzalgunj / CBS", route: "539", location: "Main Dining Hall" },
      { time: "11:15 AM", from: "Kanha", to: "Secunderabad / LB Nagar", route: "300/539", location: "Main Dining Hall" },
      { time: "1:00 PM", from: "Kanha", to: "Afzalgunj / CBS", route: "539", location: "Main Dining Hall" },
      { time: "3:20 PM", from: "Kanha", to: "Secunderabad", route: "1/539", location: "Main Dining Hall" },
      { time: "5:00 PM", from: "Kanha", to: "Afzalgunj", route: "455", location: "Main Dining Hall" },
      { time: "5:00 PM", from: "Kanha", to: "Maheshwaram", route: "539", location: "Main Dining Hall" },
      { time: "5:30 PM", from: "Kanha", to: "Secunderabad", route: "72/539", location: "Main Dining Hall" },
    ],
  },
  documents: {
    eyebrow: "Dress code, reporting and documents",
    title: "Formal, prepared and ready for submission.",
    cards: [
      { title: "Dress Code", text: "The dress code for Orientation Day is strictly formal. Students should wear professional attire suitable for a formal academic occasion." },
      {
        title: "Important Reminder",
        items: [
          "Submit accommodation requirements by 15 August 2026, 2:00 PM.",
          "Plan travel according to the bus schedules.",
          "Hostel students should carry all essential personal and academic items.",
        ],
      },
      { title: "Fee Payments", text: "Complete pending tuition fee and hostel fee payments, as applicable, during arrival and reporting." },
    ],
    documentsTitle: "Documents to carry",
    documents: [
      "SSC and Intermediate certificates",
      "Degree / Diploma certificates and marks memos, if applicable",
      "TG-EAPCET / ECET / AP-EAPCET / NEET / JEE / CUET / AGRICET / HORTICET documents, as applicable",
      "Transfer Certificate",
      "Caste Certificate",
      "Aadhaar Card with 2 photocopies",
      "Migration / Equivalence Certificate, if applicable",
      "Bonafide and Local / Non-Local Certificate",
      "3 stamp-size and 8 passport-size photographs",
      "10 self-addressed envelopes with required stamps",
      "Undertaking, if applicable",
      "Four sets of photocopies of all certificates",
    ],
    note: "Students are advised to keep four scanned copies of all original documents and certificates for future academic or administrative requirements. Any pending original documents must be submitted during reporting.",
  },
  venue: {
    eyebrow: "Venue",
    title: "HARI University, Kanha Shanti Vanam, Hyderabad.",
    text: "Parents and students are requested to plan travel in accordance with the shared bus schedules and arrive at the boarding points sufficiently early.",
    primary: { label: "Open Google Maps", href: contact.mapsSearch, external: true },
    secondary: { label: "Call +91 94910 26262", href: "tel:+919491026262" },
  },
};

/* ---------------- HARI Udaan 2026 ---------------- */

export const udaan = {
  title: "HARI Udaan 2026 Andhra Pradesh | Merit Excellence Awards Vijayawada",
  description:
    "HARI Udaan 2026 Andhra Pradesh Merit Excellence Awards recognises Intermediate achievers on 06 August 2026 at Sree Srinivas Conventions, Kunchanapalli, Tadepalli, Vijayawada.",
  venueMapSearch:
    "https://www.google.com/maps/search/?api=1&query=Sree%20Srinivas%20Conventions%20Opposite%20Aparna%20Amaravathi%20One%20Road%20Kunchanapalli%20Tadepalli%20Vijayawada",
  venueMapEmbed:
    "https://www.google.com/maps?q=Sree%20Srinivas%20Conventions%20Opposite%20Aparna%20Amaravathi%20One%20Road%20Kunchanapalli%20Tadepalli%20Vijayawada&output=embed",
  venueMapTitle: "Map to Sree Srinivas Conventions, Vijayawada",
  hero: {
    eyebrow: "Andhra Pradesh Merit Excellence Awards",
    title: "HARI Udaan 2026",
    subtitle: "Recognizing Andhra Pradesh's brightest Intermediate achievers.",
    text: "HARI University celebrates today's excellence and shapes tomorrow's leaders through medals, certificates, HARI Merit Recognition, professional stage felicitation, media coverage, and special scholarship consideration.",
    date: "06 August 2026",
    day: "Thursday",
    venue: "Sree Srinivas Conventions",
    primary: { label: "Event details", href: "#event-details" },
    secondary: { label: "Open venue map" },
    poster: "hariUdaanVijayawadaMain" as ImageKey,
    posterAlt: "HARI Udaan 2026 Andhra Pradesh Merit Excellence Awards Vijayawada poster",
  },
  keyInfo: [
    { value: "06 August 2026", label: "Thursday" },
    { value: "95%+", label: "Eligibility" },
    { value: "Gold, Silver, Bronze", label: "Award categories" },
    { value: "Vijayawada", label: "Sree Srinivas Conventions" },
  ],
  categories: {
    eyebrow: "Award categories",
    title: "Three recognition categories for Intermediate achievers.",
    text: "Students are recognized based on their Intermediate percentage with medal and certificate honours.",
    items: [
      { tier: "Gold", range: "95% - 100%", perks: ["Gold Medal", "Certificate of Excellence", "HARI Merit Recognition"] },
      { tier: "Silver", range: "90% - 94.99%", perks: ["Silver Medal", "Certificate of Excellence", "Professional stage felicitation"] },
      { tier: "Bronze", range: "85% - 89.99%", perks: ["Bronze Medal", "Certificate of Excellence", "Special scholarship consideration"] },
    ],
  },
  receive: {
    eyebrow: "Students will receive",
    title: "Recognition designed to celebrate talent publicly.",
    items: ["Gold Medal", "Certificate of Excellence", "HARI Merit Recognition", "Professional Stage Felicitation", "Media Coverage", "Special Scholarship Consideration"],
  },
  posters: {
    eyebrow: "Event posters",
    title: "HARI Udaan 2026 Andhra Pradesh campaign posters.",
    items: [
      { image: "hariUdaanVijayawadaMain" as ImageKey, alt: "HARI Udaan 2026 main blue and gold poster", caption: "Main announcement" },
      { image: "hariUdaanVijayawadaDetails" as ImageKey, alt: "HARI Udaan 2026 white details poster", caption: "Eligibility and awards" },
      { image: "hariUdaanVijayawadaCampus" as ImageKey, alt: "HARI Udaan 2026 campus themed poster", caption: "Campus theme" },
      { image: "hariUdaanVijayawadaAwards" as ImageKey, alt: "HARI Udaan 2026 achievement poster", caption: "Achievement poster" },
    ],
  },
  venue: {
    eyebrow: "Venue",
    title: "Sree Srinivas Conventions",
    address: "Opposite Aparna Amaravathi One Road, Kunchanapalli, Tadepalli, Vijayawada",
    contactLine: "Contact: 94910 26262, 94920 92926",
    primary: { label: "Open in Google Maps" },
    secondary: { label: "Contact HARI", href: "/contact" },
  },
  join: {
    title: "Join HARI Udaan 2026 Andhra Pradesh at Vijayawada.",
    text: "Venue: Sree Srinivas Conventions, Opposite Aparna Amaravathi One Road, Kunchanapalli, Tadepalli, Vijayawada. Date: 06 August 2026, Thursday. Recognizing today's excellence and shaping tomorrow's leaders.",
    link: { label: "Apply Now", href: "/apply" },
  },
  registration: {
    eyebrow: "HARI Udaan 2026 registration",
    title: "Student Registration Form",
    text: "Recognizing Andhra Pradesh's brightest Intermediate achievers. Fill the details below to register for HARI Udaan 2026.",
    facts: [
      { label: "Date", value: "06 August 2026" },
      { label: "Venue", value: "Sree Srinivas Conventions, Opposite Aparna Amaravathi One Road, Kunchanapalli, Tadepalli, Vijayawada" },
      { label: "Eligibility", value: "Intermediate achievers recognised across Gold, Silver, and Bronze categories." },
      { label: "Awards", value: "Gold: 95%-100%. Silver: 90%-94.99%. Bronze: 85%-89.99%." },
    ],
    formTitle: "Register your details",
  },
};
