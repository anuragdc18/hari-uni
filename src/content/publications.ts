export type PublicationTheme =
  | "Mind & Mental Health"
  | "Neuroscience of Meditation"
  | "Cellular Aging & Biomarkers"
  | "Education & Wellbeing"
  | "Technology & Digital Health"
  | "Ecology & Regeneration";

export interface Publication {
  id: string;
  theme: PublicationTheme;
  design: string;
  title: string;
  authors: string;
  journal: string;
  year: number;
  citation?: string;
  summary: string;
  doi: string;
}

export const publicationThemes: PublicationTheme[] = [
  "Mind & Mental Health",
  "Neuroscience of Meditation",
  "Cellular Aging & Biomarkers",
  "Education & Wellbeing",
  "Technology & Digital Health",
  "Ecology & Regeneration",
];

export const publicationsPage = {
  title: "Research Publications | HARI University",
  description:
    "Read selected peer-reviewed research publications from HARI University, Heartfulness researchers and collaborating academic communities.",
  hero: {
    eyebrow: "Research · Publications",
    title: "Research Publications",
    intro:
      "Peer-reviewed research from the Heartfulness research community and its collaborators — 21 selected studies, grouped by theme and transcribed from PubMed, the publishing journals, and DOI resolvers. From practice to proof.",
  },
  cta: {
    eyebrow: "Begin a conversation",
    title: "Partner with us on the science of well-being",
    text: "Collaborate with our research centres, propose a study, or explore evidence-led programmes shaped at HARI.",
    primary: { label: "Begin your enquiry", href: "/contact" },
    secondary: { label: "Research overview", href: "/research" },
  },
};

export const publications: Publication[] = [
  // Mind & Mental Health
  {
    id: "stress-biomarkers-burnout-rct",
    theme: "Mind & Mental Health",
    design: "RCT",
    title: "Effect of Heartfulness Meditation on Stress Biomarkers, Burnout and Well-Being: A Randomized Controlled Study",
    authors: "Mansee Thakur, Sanjana T. Philip, Kunal R. Desai, Kapil Thakur",
    journal: "Stress and Health",
    year: 2025,
    citation: "41(2): e70034",
    summary:
      "A randomized controlled trial comparing a Heartfulness meditation group with a control group using the Maslach Burnout Inventory and WHO Well-Being Index alongside biochemical markers of psychological stress (serum cortisol) and oxidative stress (serum nitrate/nitrite and malondialdehyde). The meditation group showed significant reductions in exhaustion, cynicism and cortisol and significant gains in professional efficacy and well-being versus controls. The authors note larger samples are needed to strengthen the findings (registered as CTRI/2023/10/058423).",
    doi: "10.1002/smi.70034",
  },
  {
    id: "corporate-wellness-interventional",
    theme: "Mind & Mental Health",
    design: "quasi-experimental",
    title: "Effectiveness of meditation on wellness management among corporate employees in India: An interventional study",
    authors: "Avani Radheshyam, Vinod K. Ramani, Subramanyam Thupalle, Tejaswini Bangalore Darukaradhya, Radheshyam Naik",
    journal: "Health Science Reports",
    year: 2024,
    citation: "7: e1950",
    summary:
      "A quasi-experimental controlled study of a meditation-based workplace wellness program among Indian insurance-company employees (146 intervention, 74 control), assessing stress, quality of life and wellness indices using the DASS, WHOQOL, Satisfaction With Life and WHO-5 scales. The intervention group showed improved quality of life, satisfaction with life and well-being and reduced stress relative to controls. The study is featured in the Heartfulness research collection.",
    doi: "10.1002/hsr2.1950",
  },
  {
    id: "hrqol-yoga-heartfulness-multinational",
    theme: "Mind & Mental Health",
    design: "cross-sectional",
    title: "Health-Related Quality of Life Outcomes With Regular Yoga and Heartfulness Meditation Practice: Results From a Multinational, Cross-Sectional Study",
    authors: "Jayaram Thimmapuram, Kamlesh Patel, Divya K. Madhusudhan, Snehal Deshpande, E. Bouderlique, V. Nicolai, et al.",
    journal: "JMIR Formative Research",
    year: 2022,
    citation: "6(5): e37876",
    summary:
      "A multinational, cross-sectional survey comparing self-reported health-related quality of life across people with differing durations of regular yoga and Heartfulness meditation practice. Respondents with longer practice — notably more than two years — reported the most substantial quality-of-life benefits. Because the design is observational, it shows association rather than causation.",
    doi: "10.2196/37876",
  },
  {
    id: "loneliness-sleep-physicians-covid",
    theme: "Mind & Mental Health",
    design: "RCT",
    title: "Heartfulness meditation improves loneliness and sleep in physicians and advance practice providers during COVID-19 pandemic",
    authors: "Jayaram Thimmapuram, Robert Pargament, Theodore Bell, Holly Schurk, Divya K. Madhusudhan",
    journal: "Hospital Practice",
    year: 2021,
    citation: "49(3): 194-202",
    summary:
      "A four-week prospective randomized controlled study of remote Heartfulness meditation versus no intervention among 155 physicians and advanced practice providers during the COVID-19 pandemic. Among completers, the meditation group's UCLA Loneliness and Pittsburgh Sleep Quality Index scores dropped significantly while the control group's did not. Half of participants were lonely and almost all reported sleep problems at baseline, with younger clinicians most affected.",
    doi: "10.1080/21548331.2021.1896858",
  },
  {
    id: "sleep-resident-physicians",
    theme: "Mind & Mental Health",
    design: "interventional (pre-post)",
    title: "Sleep Patterns of Resident Physicians and the Effect of Heartfulness Meditation",
    authors: "Jayaram Thimmapuram, Robert Pargament, Theodore Bell, Deborah Yommer, et al.",
    journal: "Annals of Neurosciences",
    year: 2021,
    citation: "28(1-2): 47-54",
    summary:
      "A study of internal-medicine residents' sleep and the effect of a structured Heartfulness meditation program, combining subjective sleep measures with objective actigraphy. Practising Heartfulness was associated with improved subjective sleep-onset time, sleep quality and restfulness, and actigraphy showed reduced sleep-onset time and fewer awakenings. The authors conclude it is a feasible program to improve sleep in residents.",
    doi: "10.1177/09727531211039070",
  },
  {
    id: "chronic-insomnia",
    theme: "Mind & Mental Health",
    design: "prospective pre-post cohort",
    title: "Heartfulness meditation improves sleep in chronic insomnia",
    authors: "Jayaram Thimmapuram, Deborah Yommer, Luminita Tudor, Theodore Bell, Cristian Dumitrescu, Robert Davis",
    journal: "Journal of Community Hospital Internal Medicine Perspectives",
    year: 2020,
    citation: "10(1): 10-15",
    summary:
      "A prospective pre-post cohort study in which 32 adults with chronic primary insomnia practised Heartfulness meditation with sleep hygiene for eight weeks. Mean Insomnia Severity Index scores fell significantly from 20.9 to 10.4, and 21 of 24 patients initially on sedative/hypnotic medication reduced or discontinued them. The authors recommend a larger randomized trial to confirm the effect.",
    doi: "10.1080/20009666.2019.1710948",
  },
  // Neuroscience of Meditation
  {
    id: "neural-dynamics-eeg-alpha",
    theme: "Neuroscience of Meditation",
    design: "cross-sectional EEG",
    title: "Neural Dynamics of Heartfulness Meditation: EEG Alpha Modulation Across Experience Levels",
    authors: "Gyaneshwar Singh, Saleema J. S., Krishna Dwivedi, Deepeshwar Singh",
    journal: "Annals of Neurosciences",
    year: 2026,
    summary:
      "An EEG study comparing alpha-band activity in long-term meditators, short-term meditators and controls across the phases of Heartfulness practice (including yogic transmission). Both meditator groups showed higher alpha power than controls in frontal, parietal and occipital regions during and after meditation, and short-term meditators showed enhancements comparable to long-term meditators during early meditation. Published as an advance-online article.",
    doi: "10.1177/09727531251400095",
  },
  {
    id: "neuroendocrine-profiles-rct",
    theme: "Neuroscience of Meditation",
    design: "RCT (crossover)",
    title: "Heartfulness meditation alters neuroendocrine profiles: A randomized controlled trial on hormones of stress and well-being",
    authors: "Sanjana T. Philip, Jayaram Thimmapuram, Kapil Thakur, Nidhi Dayal, Yogesh Patil, Kishore Sabbu, Snehal Surve, Pradnya Patil, Mansee Thakur",
    journal: "Medicine (Baltimore)",
    year: 2025,
    citation: "104(47): e45559",
    summary:
      "A randomized controlled crossover trial in meditation-naive adults measuring serum oxytocin, beta-endorphins and cortisol along with meditation depth (MEDEQ) and affect (PANAS) before and after a 30-day Heartfulness program. Oxytocin and beta-endorphin levels rose significantly and cortisol fell, accompanied by greater meditation depth and positive affect; the control group showed similar improvements after crossing over to the intervention. Cortisol correlated negatively with both oxytocin and beta-endorphins.",
    doi: "10.1097/MD.0000000000045559",
  },
  {
    id: "frontal-alpha-asymmetry",
    theme: "Neuroscience of Meditation",
    design: "cross-sectional EEG",
    title: "Determining the depth of meditation through frontal alpha asymmetry",
    authors: "Dwivedi Krishna, Deepeshwar Singh, N. K. Manjunath",
    journal: "Frontiers in Human Neuroscience",
    year: 2025,
    citation: "19: 1576642",
    summary:
      "A cross-sectional EEG study of 26 long-term Heartfulness meditators and 33 non-meditators (aged 30-45) examining frontal alpha asymmetry (FAA) against self-reported meditation depth measured by the Meditation Depth Questionnaire and a Visual Analogue Scale. Long-term meditators reported significantly greater meditation depth, and FAA correlated positively with depth, suggesting FAA may serve as a neurophysiological marker of meditative states. A published correction accompanies the article.",
    doi: "10.3389/fnhum.2025.1576642",
  },
  {
    id: "prefrontal-machine-learning",
    theme: "Neuroscience of Meditation",
    design: "cross-sectional (EEG + machine learning)",
    title: "Effect of Heartfulness Meditation Among Long-Term, Short-Term and Non-meditators on Prefrontal Cortex Activity of Brain Using Machine Learning Classification: A Cross-Sectional Study",
    authors: "Anurag Shrivastava, Bikesh K. Singh, Dwivedi Krishna, Prasanna Krishna, Deepeshwar Singh",
    journal: "Cureus",
    year: 2023,
    citation: "15(2): e34977",
    summary:
      "A feasibility study that recorded EEG from 34 long-term meditators, short-term meditators and non-meditators and used EEG functional-connectivity features (correlation, clustering coefficient, shortest path, phase-locking value) with machine-learning classifiers to distinguish the groups. Classifiers reached 84-100% accuracy separating long-term meditators from non-meditators and 80-93% for short-term versus non-meditators. The authors describe it as the first study using machine learning to classify Heartfulness meditators by EEG connectivity.",
    doi: "10.7759/cureus.34977",
  },
  {
    id: "yogic-neuroscientific-perspective",
    theme: "Neuroscience of Meditation",
    design: "review / perspective",
    title: "Heartfulness Meditation: A Yogic and Neuroscientific Perspective",
    authors: "A. van't Westeinde, Kamlesh D. Patel",
    journal: "Frontiers in Psychology",
    year: 2022,
    citation: "13: 806131",
    summary:
      "A conceptual review introducing the Heartfulness method — its yogic philosophy and its distinctive practices of Pranahuti (yogic Transmission) and Cleaning — and relating them to the neuroscience of other meditation systems. It proposes putative mechanisms by which Heartfulness might affect the brain and body and outlines directions for future research. The paper presents no new empirical data.",
    doi: "10.3389/fpsyg.2022.806131",
  },
  {
    id: "wellbeing-cognition-pilot",
    theme: "Neuroscience of Meditation",
    design: "cross-sectional pilot (EEG)",
    title: "Meditation, well-being and cognition in heartfulness meditators - A pilot study",
    authors: "Bhuvnesh Sankar Sylapan, Ajay Kumar Nair, Krishnamurthy Jayanna, Saketh Mallipeddi, Sunil Sathyanarayana, Bindu M. Kutty",
    journal: "Consciousness and Cognition",
    year: 2020,
    citation: "86: 103032",
    summary:
      "A pilot study comparing proficient Heartfulness meditators (6-28 years' experience), novices and matched controls using well-being measures and high-density EEG. Well-being scores were significantly higher in proficient meditators, and proficient meditators showed enhanced occipital gamma activity during meditation; however, no group differences in cognitive processing were found. The authors frame the results as preliminary and suggest avenues for larger studies.",
    doi: "10.1016/j.concog.2020.103032",
  },
  // Cellular Aging & Biomarkers
  {
    id: "oxidative-stress-mindfulness",
    theme: "Cellular Aging & Biomarkers",
    design: "interventional (controlled)",
    title: "Effect of Heartfulness Meditation on Oxidative Stress and Mindfulness in Healthy Participants",
    authors: "Yogesh Patil, Kishore Sabbu, Ranjani B. Iyer, Sanjana T. Philip, Alphonso Armila Nadhar, Kapil S. Thakur, Poonam Kadu, Mansee Thakur",
    journal: "Cureus",
    year: 2024,
    citation: "16(6): e62943",
    summary:
      "A 12-week controlled study of 60 healthy adults (aged 18-24) split into Heartfulness and control groups, measuring serum malondialdehyde (MDA) and nitrate alongside mindfulness and self-compassion scales. MDA rose significantly in the control group but not in meditators, serum nitrate increased in meditators, and mindfulness measures improved — indicating reduced oxidative stress with regular practice. The authors call for larger, more diverse samples.",
    doi: "10.7759/cureus.62943",
  },
  {
    id: "telomere-length-anxiety-rct",
    theme: "Cellular Aging & Biomarkers",
    design: "RCT",
    title: "Impact of Heartfulness meditation practice on anxiety, perceived stress, well-being, and telomere length",
    authors: "Mansee Thakur, Yogesh Patil, Sanjana T. Philip, Tahreem Hamdule, Jayaram Thimmapuram, Nishant Vyas, Kapil Thakur",
    journal: "Frontiers in Psychology",
    year: 2023,
    citation: "14: 1158760",
    summary:
      "A randomized controlled trial in which 100 healthy adults (aged 18-24) were assigned to a three-month Heartfulness intervention or a control group, with cortisol, telomere length and psychometric measures of anxiety, perceived stress, well-being and mindfulness assessed before and after. Cortisol fell significantly and average telomere length increased significantly in the meditators, while anxiety decreased and well-being and mindfulness rose. Telomere length correlated negatively with cortisol and positively with well-being.",
    doi: "10.3389/fpsyg.2023.1158760",
  },
  {
    id: "burnout-telomere-healthcare",
    theme: "Cellular Aging & Biomarkers",
    design: "interventional (pre-post with controls)",
    title: "Effect of heartfulness meditation on burnout, emotional wellness, and telomere length in health care professionals",
    authors: "Jayaram Thimmapuram, Robert Pargament, Kedesha Sibliss, Rodney Grim, Rosana Risques, Erik Toorens",
    journal: "Journal of Community Hospital Internal Medicine Perspectives",
    year: 2017,
    citation: "7(1): 21-27",
    summary:
      "A 12-week study of a Heartfulness meditation program among residents, faculty physicians and nurses (35 meditators, 12 controls) measuring burnout, emotional wellness and salivary telomere length. Meditators improved significantly on all burnout measures and most wellness attributes, with a statistically significant increase in telomere length in a younger subset (ages 24-33); controls showed no significant change. The authors caution that the telomere finding needs confirmation in larger studies.",
    doi: "10.1080/20009666.2016.1270806",
  },
  // Education & Wellbeing
  {
    id: "self-care-high-school-rct",
    theme: "Education & Wellbeing",
    design: "randomized waitlist-controlled survey",
    title: "Self-Care Program as a Tool for Alleviating Anxiety and Loneliness and Promoting Satisfaction With Life in High School Students and Staff: Randomized Survey Study",
    authors: "Priya Iyer, Lina Iyer, Nicole Carter, Ranjani Iyer, Amy Stirling, Lakshmi Priya, Ushma Sriraman",
    journal: "JMIR Formative Research",
    year: 2024,
    citation: "8: e56355",
    summary:
      "A randomized, waitlist-controlled study of a 4-week web-based Heartfulness self-care program with 203 high-school students and staff across three schools, measuring anxiety (GAD-7), loneliness (UCLA Loneliness Scale) and life satisfaction (SWLS). The Heartfulness group showed significant decreases in anxiety and loneliness and increases in life satisfaction between weeks 0 and 4 across all schools. The program emphasised reflection, observation, positivity, time management and goal-setting.",
    doi: "10.2196/56355",
  },
  {
    id: "loneliness-high-schoolers",
    theme: "Education & Wellbeing",
    design: "randomized waitlist-controlled survey",
    title: "Impact of the Heartfulness program on loneliness in high schoolers: randomized survey study",
    authors: "Ranjani B. Iyer, Sumedha Vadlapudi, Lina Iyer, Vetriliaa Kumar, Laya Iyer, Priya Sriram, et al.",
    journal: "Applied Psychology: Health and Well-Being",
    year: 2023,
    citation: "15(1): 66-79",
    summary:
      "A randomized, waitlist-controlled study evaluating a 4-week online Heartfulness Self-Care program's effect on loneliness in high-schoolers aged 14-19, measured with the UCLA Loneliness Scale. The program produced significantly greater reductions in loneliness than the waitlist comparison, with low dropout. A later meta-analysis of youth loneliness interventions cited this study among those with the larger reported effect sizes.",
    doi: "10.1111/aphw.12360",
  },
  // Technology & Digital Health
  {
    id: "web-based-gene-expression-rct",
    theme: "Technology & Digital Health",
    design: "RCT",
    title: "Effect of a Web-Based Heartfulness Program on the Mental Well-Being, Biomarkers, and Gene Expression Profile of Health Care Students: Randomized Controlled Trial",
    authors: "Jayaram Thimmapuram, Kamlesh D. Patel, Deepti Bhatt, Ajay Chauhan, Divya Madhusudhan, Kashyap K. Bhatt, Snehal Deshpande, Urvi Budhbhatti, Chaitanya Joshi",
    journal: "JMIR Bioinformatics and Biotechnology",
    year: 2024,
    citation: "5: e65506",
    summary:
      "A randomized controlled trial in which 78 healthcare students were assigned to a 12-week web-based Heartfulness program or a control group, with perceived stress (PSS), depression/anxiety/stress (DASS-21), serum DHEA-S and IL-6, and mRNA-sequencing gene expression measured at baseline and week 12. The Heartfulness group showed significant reductions in stress, anxiety and depression and a significant rise in DHEA-S. Gene-expression changes pointed toward anti-inflammatory and stress-protective mechanisms.",
    doi: "10.2196/65506",
  },
  {
    id: "heartbot-relaxation-app",
    theme: "Technology & Digital Health",
    design: "randomized survey",
    title: "A Relaxation App (HeartBot) for Stress and Emotional Well-Being Over a 21-Day Challenge: Randomized Survey Study",
    authors: "Laya Iyer, Ranjani B. Iyer, Vetriliaa Kumar",
    journal: "JMIR Formative Research",
    year: 2021,
    citation: "5(1): e22041",
    summary:
      "A randomized study of HeartBot, an app delivering Heartfulness relaxation tools, in which 88 participants were assigned to an app group (n=46) or a waitlist control (n=42) and used the app 30 minutes daily for 21 days. The app group showed a significant decrease in perceived stress (PSS) and improved social-emotional well-being (EPOCH measure) compared with controls. The authors present it as preliminary evidence supporting wider study.",
    doi: "10.2196/22041",
  },
  {
    id: "virtual-program-covid-mixed-method",
    theme: "Technology & Digital Health",
    design: "mixed-method pre-post (single-arm)",
    title: "Impact of Virtual Heartfulness Meditation Program on Stress, Quality of Sleep, and Psychological Wellbeing during the COVID-19 Pandemic: A Mixed-Method Study",
    authors: "Kunal Desai, Pratibha Gupta, Priti Parikh, Alpa Desai",
    journal: "International Journal of Environmental Research and Public Health",
    year: 2021,
    citation: "18(21): 11114",
    summary:
      "A single-arm, mixed-method study of an 8-week virtual Heartfulness meditation program with 63 general-population participants (36 completed), measuring perceived stress (PSS) and sleep quality (PSQI) at baseline, week 4 and week 8. Both perceived stress and sleep quality improved significantly by week 8, regardless of healthcare-professional status, and qualitative themes of calm, empathy and acceptance supported the quantitative results.",
    doi: "10.3390/ijerph182111114",
  },
  // Ecology & Regeneration
  {
    id: "ficus-keystone-species",
    theme: "Ecology & Regeneration",
    design: "field documentation / observational",
    title: "The keystone species: emphasizing the conservation of Ficus (Fig) species at Kanha Shanti Vanam, Hyderabad, Telangana, India",
    authors: "Ananthaneni Sreenath, Bhuvaragasamy Rathinasabapathy",
    journal: "Phytology",
    year: 2026,
    citation: "6(1): 5-9",
    summary:
      "A field-documentation paper by Forests by Heartfulness conservation scientists cataloguing 26 Ficus (fig) species planted and conserved at Kanha Shanti Vanam, a biodiversity sanctuary on the Deccan Plateau that has been restored from largely barren land. It describes the figs' role as keystone species — providing year-round fruit and habitat that sustain birds, bats and other fauna — within the site's ecological-restoration model. The paper is descriptive rather than experimental and appears in a niche journal.",
    doi: "10.64171/IJPR.2026.6.1.5-9",
  },
];

export const getPublication = (id: string) => publications.find((p) => p.id === id);
export const publicationsByTheme = (theme: PublicationTheme) => publications.filter((p) => p.theme === theme);
export const formatCitation = (p: Publication) => [p.journal, String(p.year), p.citation].filter(Boolean).join(" · ");

/** The six most recent studies highlighted on the News & Recognition page, in the legacy order. */
export const newsPublicationIds = [
  "neural-dynamics-eeg-alpha",
  "ficus-keystone-species",
  "stress-biomarkers-burnout-rct",
  "neuroendocrine-profiles-rct",
  "frontal-alpha-asymmetry",
  "corporate-wellness-interventional",
];
