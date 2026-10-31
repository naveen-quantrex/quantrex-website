import { z } from "zod";

export const serviceOptions = [
  "Custom software",
  "AI and automation",
  "Product or MVP build",
  "IT support",
  "Something else",
] as const;

/** Shared by the browser form (for instant feedback) and the API route (the real check). */
export const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name.").max(100, "Name is too long."),
  email: z.email("Please enter a valid email address.").max(200, "Email is too long."),
  phone: z
    .string()
    .trim()
    .max(40, "Phone number is too long.")
    .regex(/^[0-9+()\-.\s]*$/, "Phone number can only contain digits, spaces and + ( ) - .")
    .optional()
    .or(z.literal("")),
  service: z.enum(serviceOptions).optional().or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(10, "Please write at least a sentence or two.")
    .max(5000, "Message is too long (5000 characters max)."),
  /** Honeypot: real people never see or fill this field. */
  website: z.string().max(0).optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;
export type ContactFieldErrors = Partial<Record<keyof ContactInput, string>>;

export function flattenErrors(error: z.ZodError): ContactFieldErrors {
  const out: ContactFieldErrors = {};
  for (const issue of error.issues) {
    const key = issue.path[0] as keyof ContactInput | undefined;
    if (key && !out[key]) out[key] = issue.message;
  }
  return out;
}
