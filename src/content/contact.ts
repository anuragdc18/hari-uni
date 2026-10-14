import type { ImageKey } from "@/assets/registry";
import { contact } from "./site";

export const contactPage = {
  title: "Contact HARI University | Admissions & Enquiries",
  description:
    "Contact HARI University admissions at Kanha Shanti Vanam, Hyderabad for programme enquiries, applications, campus visits, research and media information.",
  hero: {
    eyebrow: "We are here to help",
    title: "Contact HARI",
    intro:
      "Whether you need admissions guidance, research collaboration, or press information, our team is here to help.",
  },
  channels: [
    {
      title: "Admissions",
      phones: contact.admissionsPhones,
      email: contact.email,
      hours: contact.hours,
    },
    { title: "Research & Collaborations", email: contact.researchEmail },
    { title: "Media & Press", email: contact.pressEmail },
  ],
  form: {
    eyebrow: "Contact form",
    title: "Talk to HARI",
    text: "Send your admissions, programme, campus visit, research, or media enquiry directly to the HARI team.",
    purposeTitle: "What this form is for",
    purposes: [
      "Admissions guidance and programme questions.",
      "Campus visits and general enquiries.",
      "Research collaboration or press requests.",
    ],
    sources: ["Walk-in", "Referral", "Website", "Event", "Social media", "Other"],
    consent: "I agree to be contacted and to HARI's privacy terms.",
    submit: "Submit enquiry",
    success: "Thank you for contacting HARI. Our team will get in touch with you shortly.",
  },
  address: {
    eyebrow: "Campus address",
    lines: contact.addressLines,
    airportLabel: "Nearest airport:",
    airport: contact.nearestAirport,
  },
  faqTitle: "Frequently asked questions",
};

export const faqs = [
  {
    q: "Is HARI a recognised university?",
    a: "Yes. HARI is a Deemed-to-be University under the UGC's Distinct Category, formally notified by the Ministry of Education, Government of India, on 16 October 2025 (Notification No. 9-8/2024-U.3(A)). It is India's first greenfield, privately sponsored deemed-to-be university approved by the Government of India under this designation.",
  },
  {
    q: "Where is the campus?",
    a: "Kanha Shanti Vanam, Chegur, Nandigama Mandal, Ranga Reddy District, Telangana 509328 — approximately 35 km from Rajiv Gandhi International Airport, Hyderabad.",
  },
  {
    q: "What programmes can I apply to in AY 2026-27?",
    a: "Admissions are open across all eight programmes for AY 2026-27: B.Tech CSE; B.Tech CSE (AI & ML); B.Tech CSE (Data Science); B.Tech CSE (Cyber Security); B.Sc (Hons) Agriculture; B.Sc (Hons) Horticulture; BBA; and M.A. Philosophy. All are offered by HARI as a Deemed-to-be University under the UGC's Distinct Category.",
  },
  {
    q: "Is HARI a religious institution?",
    a: "No. HARI is a secular institution aligned with NEP 2020. Heartfulness practice is offered as a tool and a field of study, not as a belief system or institutional obligation. Students of all faiths, backgrounds, and worldviews study at HARI.",
  },
  {
    q: "Is there a cost for Heartfulness practice on campus?",
    a: "No. Heartfulness practice with certified trainers is always offered free of charge — inside HARI and across the world where Heartfulness operates.",
  },
  {
    q: "Who founded HARI?",
    a: "HARI was founded by Daaji — Kamlesh D. Patel, Global Guide of Heartfulness and the fourth spiritual Guide in the Heartfulness/Sahaj Marg lineage.",
  },
  {
    q: "Can international students apply?",
    a: "HARI explicitly invites international educators, partners, and students. Detailed admissions information for international applicants will be published on the Admissions page.",
  },
  {
    q: "Is the campus residential?",
    a: "Yes. All current programmes are fully residential. Students live on the Kanha Shanti Vanam campus for the duration of their academic year.",
  },
];

export const applyPage = {
  title: "Apply to HARI University | Admissions 2026",
  description:
    "Apply to HARI University for 2026 admissions in Agriculture, Horticulture, Computer Science, AI, Data Science, Cyber Security, Management and Philosophy.",
  hero: {
    eyebrow: "Admissions AY 2026-27",
    title: "Apply to HARI",
    intro:
      "Begin your application to study at Kanha Shanti Vanam. The form takes a few minutes — your progress is saved automatically, so you can step away and return at any time. Our admissions team will be in touch once you submit.",
    image: "aiContactApplyBanner" as ImageKey,
  },
  form: {
    eyebrow: "Admissions form",
    title: "Start Your HARI Application",
    text: "Share your programme preference, academic details, and contact information. The admissions team will follow up with the next steps for AY 2026-27.",
    tipsTitle: "Useful before you submit",
    tips: [
      "Keep your phone/WhatsApp number active.",
      "Mention entrance rank or marks if already available.",
      "Use the message box for scholarship or hostel questions.",
    ],
    submit: "Submit application",
    success: "Thank you for applying to HARI. Our admissions team will contact you shortly.",
  },
};

export const udaanFormCopy = {
  submit: "Submit Registration",
  success: "Thank you for registering for HARI Udaan 2026. Our event team will verify your details and contact you soon.",
};
