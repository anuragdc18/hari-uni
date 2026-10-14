export interface FacultyMember {
  sno: number;
  name: string;
  designation: string;
  category: "Faculty" | "Guest Faculty";
}

export const facultyPage = {
  title: "Faculty List | HARI University",
  description:
    "Official HARI University faculty list with staff names, designations, and guest faculty details.",
  hero: {
    eyebrow: "Academics",
    title: "Faculty List",
    intro:
      "Official HARI University faculty and guest faculty details presented in a clean academic table format.",
  },
  stats: [
    { value: "40", label: "Faculty members" },
    { value: "6", label: "Guest faculty" },
    { value: "46", label: "Teaching Staff" },
    { value: "39", label: "Professor roles" },
  ],
  facultyIntro: "Faculty details sourced from the HARI faculty spreadsheet.",
  guestIntro: "Guest faculty details listed separately for quick reference.",
};

/** Serial numbers are preserved exactly as published (24 and 39 are absent in the source list). */
export const faculty: FacultyMember[] = [
  { sno: 1, name: "Dr. YANALA NARSIMHA REDDY", designation: "REGISTRAR I/C", category: "Faculty" },
  { sno: 2, name: "Dr. MARURI RAMALINGA REDDY", designation: "Dean Administration", category: "Faculty" },
  { sno: 3, name: "Mr. PRODDUTURI MURALI MANOHAR REDDY", designation: "Admin Officer", category: "Faculty" },
  { sno: 4, name: "Dr. VENKAT REDDY POLICE", designation: "Professor", category: "Faculty" },
  { sno: 5, name: "Dr. SUREKHA KUCHI", designation: "Professor", category: "Faculty" },
  { sno: 6, name: "Dr. GUNTUPALLI PADMAVATHI", designation: "Professor", category: "Faculty" },
  { sno: 7, name: "Dr. JHANSI LAKSHMI VATTIKOTI", designation: "Professor", category: "Faculty" },
  { sno: 8, name: "Dr. MUSINI VENKATESHWARLU", designation: "Associate Professor", category: "Faculty" },
  { sno: 9, name: "Dr. NEELI PRIYANKA", designation: "Asstt. Professor / CoE Agri", category: "Faculty" },
  { sno: 10, name: "Dr . KARINGULA NAVYA", designation: "Asstt. Professor", category: "Faculty" },
  { sno: 11, name: "Dr. RAYAVARAPU TEJASWI", designation: "Asstt. Professor", category: "Faculty" },
  { sno: 12, name: "Dr. YALAMAREDDY KIRANMAI", designation: "Asstt. Professor", category: "Faculty" },
  { sno: 13, name: "Dr. PULI TANUJA", designation: "Asstt. Professor", category: "Faculty" },
  { sno: 14, name: "Dr. KOSGI MOUNIKA", designation: "Asstt. Professor", category: "Faculty" },
  { sno: 15, name: "DR. K JAISIMHA REDDY", designation: "Asstt. Professor", category: "Faculty" },
  { sno: 16, name: "DR. PALUCHANI MEGHANA REDDY", designation: "Asstt. Professor", category: "Faculty" },
  { sno: 17, name: "Dr. BOBBALA RAJYA LAKSHMI", designation: "Asstt. Professor", category: "Faculty" },
  { sno: 18, name: "Dr. S Sri Manasa", designation: "Asstt. Professor", category: "Faculty" },
  { sno: 19, name: "Dr. Ramakanth Reddy", designation: "Associate Professor", category: "Faculty" },
  { sno: 20, name: "Dr. M. V. Narayana", designation: "Associate Professor", category: "Faculty" },
  { sno: 21, name: "Dr. M. Venkata Reddy", designation: "Professor", category: "Faculty" },
  { sno: 22, name: "Dr. Amaranath Reddy", designation: "Professor", category: "Faculty" },
  { sno: 23, name: "Dr. Vijayashanthi", designation: "Assistant Professor", category: "Faculty" },
  { sno: 25, name: "Ms. T. Divya", designation: "Teaching Associate", category: "Faculty" },
  { sno: 26, name: "Dr. G. Murali", designation: "Associate Professor", category: "Faculty" },
  { sno: 27, name: "Dr. K. Satyanarayana", designation: "Assistant Professor", category: "Faculty" },
  { sno: 28, name: "Dr. D. Srinivasa Reddy", designation: "Associate Professor", category: "Faculty" },
  { sno: 29, name: "Dr. K. Phaneendra", designation: "Assistant Professor", category: "Faculty" },
  { sno: 30, name: "Dr. T. Nageswara Rao", designation: "Assistant Professor", category: "Faculty" },
  { sno: 31, name: "Dr. Mohammed M. Azam", designation: "Professor of Practice", category: "Faculty" },
  { sno: 32, name: "Dr. E. Ranjith Kumar", designation: "Assistant Professor", category: "Faculty" },
  { sno: 33, name: "Dr. Kavya Rayala", designation: "Assistant Professor", category: "Faculty" },
  { sno: 34, name: "Dr. A. Kotishwar", designation: "Associate Professor", category: "Faculty" },
  { sno: 35, name: "Dr. P. Alekhya", designation: "Assistant Professor", category: "Faculty" },
  { sno: 36, name: "Dr. K. Visali", designation: "Assistant Professor", category: "Faculty" },
  { sno: 37, name: "Dr. G Vijayadithya Reddy", designation: "Asstt. Physical Director", category: "Faculty" },
  { sno: 38, name: "Dr. Naveen Kumar Mamidala", designation: "Assistant Professor", category: "Faculty" },
  { sno: 40, name: "Dr. Munagala Mattareddy", designation: "Teaching Associate", category: "Faculty" },
  { sno: 41, name: "Dr. Giri Tharikoppula", designation: "Assistant Professor", category: "Faculty" },
  { sno: 42, name: "Dr. Neerati Laxmi", designation: "Asstt. Physical Director", category: "Faculty" },
];

export const guestFaculty: FacultyMember[] = [
  { sno: 1, name: "Sailesh Kumar", designation: "Professor", category: "Guest Faculty" },
  { sno: 2, name: "Meenu Thiwari", designation: "Professor", category: "Guest Faculty" },
  { sno: 3, name: "S. Ramnarayan Reddy", designation: "Professor", category: "Guest Faculty" },
  { sno: 4, name: "Praveen (Stanford University)", designation: "Professor", category: "Guest Faculty" },
  { sno: 5, name: "Veeranjaneyulu", designation: "Professor", category: "Guest Faculty" },
  { sno: 6, name: "Suresh Purine (IIIT)", designation: "Professor", category: "Guest Faculty" },
];
