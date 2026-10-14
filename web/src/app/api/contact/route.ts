import { deliverLead, receiveLead } from "@/lib/lead";

export async function POST(request: Request) {
  const input = await request.json().catch(() => null);
  const result = await receiveLead(input, (lead) =>
    deliverLead(lead, {
      RESEND_API_KEY: process.env.RESEND_API_KEY,
      LEAD_TO_EMAIL: process.env.LEAD_TO_EMAIL,
      LEAD_FROM_EMAIL: process.env.LEAD_FROM_EMAIL,
      LEAD_WEBHOOK_URL: process.env.LEAD_WEBHOOK_URL,
    }),
  );
  return Response.json(result.body, { status: result.status });
}
