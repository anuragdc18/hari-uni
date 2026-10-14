import type { ImageKey } from "@/assets/registry";

export const managementPage = {
  title: "Management | HARI University Leadership",
  description:
    "Meet the HARI University management and leadership team guiding academics, research, innovation and student development at Kanha Shanti Vanam.",
  hero: {
    eyebrow: "University leadership",
    title: "Management",
    intro:
      "Meet the leadership framework guiding HARI University, including the Vice Chancellor profile, academic governance, research direction, and institutional vision.",
  },
  cards: [
    {
      role: "Director",
      name: "Profile to be announced",
      text: "The Director's official portrait, leadership message, academic focus, and profile details will be published after final approval.",
      image: "managementDirectorDummy" as ImageKey,
      imageAlt: "Director placeholder portrait",
      href: null,
    },
    {
      role: "Chancellor",
      name: "Profile to be announced",
      text: "The Chancellor's official introduction, institutional vision, achievements, and portrait will be added after final confirmation.",
      image: "managementChancellorDummy" as ImageKey,
      imageAlt: "Chancellor placeholder portrait",
      href: null,
    },
    {
      role: "Vice Chancellor",
      name: "Dr. Malgireddy Narsi Reddy",
      text: "Biotechnology academician, research mentor, R&D leader, and institution builder guiding HARI University's academic and innovation vision.",
      image: "viceChancellorDrNarsiReddy" as ImageKey,
      imageAlt: "Dr. Malgireddy Narsi Reddy",
      href: "/management/vice-chancellor",
      linkLabel: "Open Vice Chancellor profile",
    },
  ],
  spotlight: {
    eyebrow: "Vice Chancellor spotlight",
    title: "Research-led academic leadership",
    text: "Dr. Malgireddy Narsi Reddy brings together biotechnology research, student mentorship, institutional administration, and innovation-driven agriculture experience.",
    stats: [
      { value: "10+", label: "Years as Head & Professor, Biotechnology" },
      { value: "4", label: "Ph.D. scholars guided" },
      { value: "40+", label: "M.Sc and M.Tech research students" },
      { value: "R&D", label: "UrbanKisaan.com leadership" },
    ],
  },
  profileBlock: {
    title: "Vice Chancellor Profile",
    text: "The dedicated Vice Chancellor profile includes his academic background, research career, industry leadership, recognitions, and present role in shaping HARI University's academic systems.",
    link: { label: "View Full Profile", href: "/management/vice-chancellor" },
  },
  updates: {
    title: "Leadership Updates",
    items: [
      "Director and Chancellor cards are ready for official names, portraits, and detailed profile links.",
      "The Vice Chancellor profile is live with verified academic, research, and R&D highlights.",
      "The management section can expand into advisory boards, governance structure, and founding messages.",
    ],
  },
  closing: {
    title: "Build the leadership page as details are approved.",
    text: "The layout is ready for photos, names, titles, profile summaries, and individual profile links.",
    link: { label: "Contact HARI", href: "/contact" },
  },
};

export const viceChancellor = {
  title: "Vice Chancellor | Dr. Malgireddy Narsi Reddy | HARI University",
  description:
    "Profile of Dr. Malgireddy Narsi Reddy, Vice Chancellor of HARI University, with research, academic leadership and biotechnology experience.",
  name: "Dr. Malgireddy Narsi Reddy",
  shortName: "Dr. M. Narsi Reddy",
  role: "Vice Chancellor",
  image: "viceChancellorDrNarsiReddy" as ImageKey,
  hero: {
    eyebrow: "Leadership profile",
    title: "Vice Chancellor",
    intro:
      "Dr. Malgireddy Narsi Reddy brings together biotechnology research, academic governance, R&D leadership, and institution-building for HARI University.",
  },
  intro: [
    "Dr. Malgireddy Narsi Reddy is a distinguished academician, researcher, administrator, and institution builder with extensive experience across higher education, biotechnology, academic governance, sustainable agriculture, and innovation-led institutional growth.",
    "He has served for more than 10 years as Head and Professor, Department of Biotechnology, CMR College of Engineering and Technology, and has also led research and development work as Head of Research and Development at UrbanKisaan.com.",
    "His leadership connects rigorous scientific research, student mentorship, sustainable agriculture, technology-enabled learning, and the long-term academic vision of HARI University.",
  ],
  stats: [
    { value: "10+", label: "Years as Head & Professor" },
    { value: "4", label: "Ph.D. scholars guided" },
    { value: "40+", label: "M.Sc and M.Tech students guided" },
    { value: "R&D", label: "UrbanKisaan R&D" },
  ],
  impact: {
    eyebrow: "Academic impact",
    title: "Research mentor, biotechnology leader, institution builder",
    text: "A profile shaped by teaching, laboratory research, student guidance, academic administration, agricultural innovation, and university development.",
    badges: [
      { code: "IICT", label: "Indian Institute of Chemical Technology, Hyderabad" },
      { code: "CMR", label: "Head & Professor, Biotechnology" },
      { code: "SVR07", label: "Bacillus Subtilis-SVR07 research work" },
      { code: "DST", label: "Noble Laureates Meet, New Delhi" },
    ],
  },
  sections: [
    {
      title: "Vice Chancellor Leadership",
      paragraphs: [
        "As the Vice Chancellor, Dr. M. Narsi Reddy is currently leading the development of a new-age university from the ground up. He is actively involved in establishing HARI University's academic framework, governance systems, regulatory compliance, research ecosystem, industry partnerships, student engagement strategies, and long-term institutional vision.",
        "His focus is to create a globally relevant institution that combines academic excellence, innovation, research, entrepreneurship, and holistic development.",
      ],
    },
    {
      title: "Educational Background",
      paragraphs: [
        "With a strong academic foundation in Biotechnology and Life Sciences from the Indian Institute of Chemical Technology, Hyderabad, he has successfully bridged academia, research, and industry.",
        "His expertise spans academic administration, curriculum development, quality assurance, examination management, institutional accreditation, research promotion, and strategic planning.",
      ],
    },
    {
      title: "Academic and Research Career",
      paragraphs: [
        "He worked for more than 10 years as Head and Professor, Department of Biotechnology, CMR College of Engineering and Technology.",
        "He has guided four Ph.D. scholars, two M.Phil scholars, and more than 40 M.Sc and M.Tech students for their research work, shaping a strong culture of inquiry, experimentation, and applied scientific learning.",
        "During his research work, he isolated Bacillus Subtilis-SVR07, strengthening his contributions to biotechnology, agricultural sciences, and applied research.",
      ],
    },
    {
      title: "Industry and Innovation Leadership",
      paragraphs: [
        "Over the years, Dr. M. Narsi Reddy has held several key leadership positions, including Professor, Head of Department, Principal, Director, Controller of Examinations, Academic Advisor, and Head of Research and Development at UrbanKisaan.com.",
        "His association with innovative agricultural enterprises has contributed to technology-enabled farming solutions and sustainable agricultural practices, strengthening the bridge between academic research and practical applications.",
      ],
    },
    {
      title: "Awards and Recognitions",
      paragraphs: ["His journey includes recognitions for education, research, and academic leadership."],
      bullets: [
        "Selected for the Noble Laureates Meet with Indian research scholars and scientists, held in New Delhi and organised by DST in January 2006.",
        "APJ Abdul Kalam Excellency Award.",
        "Certificate of Appreciation from Auburn University College of Agriculture for academic and cultural interchange through educational training and collaborative research for improvement in agricultural science.",
        "Distinguished Scientist Recognition for contributions to agricultural and biotechnology research.",
      ],
    },
    {
      title: "Academic Vision and Leadership",
      paragraphs: [
        "As a Principal and Director, Dr. M. Narsi Reddy spearheaded institutional development initiatives, faculty empowerment programs, industry collaborations, and student-centric academic practices.",
        "His tenure as Controller of Examinations was marked by robust examination systems, transparent evaluation processes, and technology-driven academic administration. Beyond institutional leadership, he has served as an Advisor to educational groups and organizations, guiding academic planning, accreditation, curriculum design, research initiatives, and institutional growth.",
      ],
    },
  ],
  pathway: {
    eyebrow: "Leadership pathway",
    title: "A career built across research, mentorship, and transformation",
    steps: [
      {
        title: "Biotechnology and Life Sciences Foundation",
        text: "Built a strong academic base through Biotechnology and Life Sciences, with association to the Indian Institute of Chemical Technology, Hyderabad.",
      },
      {
        title: "CMR Biotechnology Leadership",
        text: "Served for more than 10 years as Head and Professor, Department of Biotechnology, mentoring doctoral, M.Phil, M.Sc, and M.Tech researchers.",
      },
      {
        title: "Research and Innovation Recognition",
        text: "Advanced applied research through Bacillus Subtilis-SVR07 work, DST Noble Laureates Meet selection, and recognition from Auburn University College of Agriculture.",
      },
      {
        title: "Vice Chancellor at HARI University",
        text: "Now contributes to HARI University's academic architecture, research ecosystem, governance foundation, and future-ready learning vision.",
      },
    ],
  },
  closing: {
    title: "Vice Chancellor shaping research-led higher education.",
    text: "Dr. M. Narsi Reddy continues to contribute to the evolution of higher education through leadership, scholarship, innovation, and commitment to nurturing future-ready learners and leaders.",
    link: { label: "Back to Management", href: "/management" },
  },
};
