import { z } from "zod";

export const budgetBands = [
  "Ainda não sei",
  "Até R$ 15 mil",
  "De R$ 15 mil a R$ 40 mil",
  "Acima de R$ 40 mil",
] as const;

export const leadSchema = z.object({
  name: z.string().trim().min(1),
  company: z.string().trim().min(1),
  email: z.string().trim().email(),
  whatsapp: z.string().trim().min(8),
  message: z.string().trim().min(1),
  budget: z.enum(budgetBands),
  consent: z.literal(true),
});

export type Lead = z.infer<typeof leadSchema>;

const whatsappMessage =
  "Olá, Rafael. Quero conversar sobre o que está travando na minha operação.";

export const whatsappUrl = `https://wa.me/5571984570082?text=${encodeURIComponent(whatsappMessage)}`;
