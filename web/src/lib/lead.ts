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

/** Máscara BR: (11) 99999-9999 ou (11) 9999-9999 */
export function formatWhatsapp(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length === 0) return "";
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 6) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  }
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

const whatsappMessage =
  "Olá, Rafael. Quero conversar sobre o que está travando na minha operação.";

export const whatsappUrl = `https://wa.me/5571996772118?text=${encodeURIComponent(whatsappMessage)}`;

export type LeadEnv = {
  RESEND_API_KEY?: string;
  LEAD_TO_EMAIL?: string;
  LEAD_FROM_EMAIL?: string;
  LEAD_WEBHOOK_URL?: string;
};

export async function receiveLead(
  input: unknown,
  deliver: (lead: Lead) => Promise<void>,
): Promise<{ status: number; body: { ok: boolean } }> {
  const parsed = leadSchema.safeParse(input);
  if (!parsed.success) return { status: 400, body: { ok: false } };
  try {
    await deliver(parsed.data);
  } catch (error) {
    console.error("Falha ao entregar lead", error);
    return { status: 502, body: { ok: false } };
  }
  return { status: 200, body: { ok: true } };
}

export async function deliverLead(
  lead: Lead,
  env: LeadEnv,
  fetchImpl: typeof fetch = fetch,
): Promise<void> {
  const jobs: Promise<Response>[] = [];
  if (env.RESEND_API_KEY && env.LEAD_TO_EMAIL) {
    jobs.push(
      fetchImpl("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: env.LEAD_FROM_EMAIL ?? "Rafael Coelho <onboarding@resend.dev>",
          to: env.LEAD_TO_EMAIL,
          subject: "Novo pedido de conversa",
          text: [
            lead.name,
            lead.company,
            lead.email,
            lead.whatsapp,
            lead.budget,
            lead.message,
          ].join("\n"),
        }),
      }),
    );
  }
  if (env.LEAD_WEBHOOK_URL) {
    jobs.push(
      fetchImpl(env.LEAD_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      }),
    );
  }
  const responses = await Promise.all(jobs);
  const failed = responses.filter((response) => !response.ok);
  if (failed.length > 0) {
    const details = await Promise.all(
      failed.map(
        async (response) =>
          `${response.url || "provedor"} ${response.status}: ${await response.text()}`,
      ),
    );
    throw new Error(`Entrega do lead recusada: ${details.join(" | ")}`);
  }
}
