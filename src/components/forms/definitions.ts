import type { FieldDef } from "./Form";
import { programFormOptions } from "@/content/programs";
import { contactPage } from "@/content/contact";

export const contactFields: FieldDef[] = [
  { type: "text", name: "name", label: "Full name", required: true, autoComplete: "name", half: true },
  { type: "tel", name: "mobile", label: "Mobile number", required: true, autoComplete: "tel", half: true },
  { type: "email", name: "email", label: "Email", required: true, autoComplete: "email", half: true },
  { type: "select", name: "programme", label: "Programme of interest", required: true, options: programFormOptions, placeholder: "Select a programme", half: true },
  { type: "text", name: "district", label: "District / location", half: true, autoComplete: "address-level2" },
  { type: "select", name: "source", label: "How did you hear about HARI?", options: contactPage.form.sources, placeholder: "Select an option", half: true },
  { type: "textarea", name: "message", label: "Message", placeholder: "Admissions, campus visit, research or media enquiry", rows: 4 },
  { type: "checkbox", name: "consent", label: contactPage.form.consent, required: true },
];

export const applyFields: FieldDef[] = [
  { type: "text", name: "student_name", label: "Student name", required: true, autoComplete: "name", half: true },
  { type: "email", name: "email", label: "Email", required: true, autoComplete: "email", half: true },
  { type: "tel", name: "phone", label: "Phone / WhatsApp number", required: true, autoComplete: "tel", half: true },
  { type: "select", name: "programme", label: "Programme", required: true, options: programFormOptions, placeholder: "Select a programme", half: true },
  { type: "text", name: "qualification", label: "Highest qualification", required: true, placeholder: "e.g. Intermediate (MPC), 2026", half: true },
  { type: "text", name: "entrance", label: "Entrance rank / marks (if available)", placeholder: "TG-EAPCET / AP-EAPCET / JEE / CUET / AGRICET", half: true },
  { type: "text", name: "district", label: "District / location", half: true, autoComplete: "address-level2" },
  { type: "textarea", name: "message", label: "Message", placeholder: "Scholarship or hostel questions", rows: 4 },
];

export const udaanFields: FieldDef[] = [
  { type: "text", name: "student_name", label: "Student Name (As per Intermediate Marks Memo)", required: true, autoComplete: "name" },
  { type: "text", name: "father_name", label: "Father Name", required: true, half: true },
  { type: "text", name: "district", label: "District", required: true, half: true },
  { type: "tel", name: "phone_1", label: "Phone Number 1", required: true, autoComplete: "tel", half: true },
  { type: "tel", name: "phone_2", label: "Phone Number 2", required: true, half: true },
  { type: "email", name: "gmail", label: "Gmail", required: true, autoComplete: "email", half: true },
  { type: "text", name: "inter_marks", label: "Inter Marks", required: true, half: true },
  { type: "number", name: "members_attending", label: "How Many Members Will Attend?", required: true, half: true },
  { type: "radio", name: "attendance_status", label: "Will You Attend the Event?", required: true, options: ["Yes", "No", "Not Sure"] },
  { type: "textarea", name: "questions", label: "Any Questions or Queries?", rows: 3 },
];
