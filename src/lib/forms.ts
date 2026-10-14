import { z } from "zod";
import { programFormOptions } from "@/content/programs";

const phone = z.string().trim().min(7, "Enter a valid phone number").max(20);
const email = z.string().trim().email("Enter a valid email address").max(254);
const text = (max = 200) => z.string().trim().min(1, "This field is required").max(max);
const optional = (max = 2000) => z.string().trim().max(max).optional().or(z.literal(""));

export const formSchemas = {
  contact: z.object({
    name: text(120),
    mobile: phone,
    email,
    programme: z.enum(programFormOptions, { message: "Select a programme" }),
    district: optional(120),
    source: optional(60),
    message: optional(2000),
    consent: z.literal(true, { message: "Please agree to be contacted" }),
  }),
  apply: z.object({
    student_name: text(120),
    email,
    phone,
    programme: z.enum(programFormOptions, { message: "Select a programme" }),
    qualification: text(200),
    entrance: optional(200),
    district: optional(120),
    message: optional(2000),
  }),
  udaan: z.object({
    student_name: text(120),
    father_name: text(120),
    district: text(120),
    phone_1: phone,
    phone_2: phone,
    gmail: email,
    inter_marks: text(40),
    members_attending: z.coerce.number().int().min(1, "Enter how many members will attend").max(50),
    attendance_status: z.enum(["Yes", "No", "Not Sure"], { message: "Select an option" }),
    questions: optional(2000),
  }),
} as const;

export type FormKind = keyof typeof formSchemas;

export const formMeta: Record<FormKind, { name: string; subject: string; success: string }> = {
  contact: {
    name: "Contact Enquiry",
    subject: "[HARI Contact] New website enquiry",
    success: "Thank you for contacting HARI. Our team will get in touch with you shortly.",
  },
  apply: {
    name: "Admissions Application",
    subject: "[HARI Admissions] New application enquiry",
    success: "Thank you for applying to HARI. Our admissions team will contact you shortly.",
  },
  udaan: {
    name: "HARI Udaan 2026 Student Registration",
    subject: "[HARI Udaan 2026] New student registration",
    success: "Thank you for registering for HARI Udaan 2026. Our event team will verify your details and contact you soon.",
  },
};

export const isFormKind = (v: string): v is FormKind => v in formSchemas;

export const labelize = (key: string) => key.replace(/[_-]+/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
