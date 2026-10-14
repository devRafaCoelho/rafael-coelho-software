import assert from "node:assert/strict";
import test from "node:test";
import { deliverLead, leadSchema, receiveLead, whatsappUrl } from "./lead.ts";

const valid = {
  name: "Rafael",
  company: "Empresa",
  email: "rafael@example.com",
  whatsapp: "71999999999",
  message: "Preciso de ajuda",
  budget: "Ainda não sei",
  consent: true,
};

test("aceita um lead completo", () => {
  assert.equal(leadSchema.safeParse(valid).success, true);
});

test("rejeita e-mail, faixa e consentimento", () => {
  assert.equal(
    leadSchema.safeParse({ ...valid, email: "nao-e-email" }).success,
    false,
  );
  assert.equal(
    leadSchema.safeParse({ ...valid, budget: "R$ 1" }).success,
    false,
  );
  assert.equal(
    leadSchema.safeParse({ ...valid, consent: false }).success,
    false,
  );
});

test("receiveLead rejeita sem consentimento e nao entrega", async () => {
  let called = false;
  const result = await receiveLead({ ...valid, consent: false }, async () => {
    called = true;
  });
  assert.equal(result.status, 400);
  assert.equal(result.body.ok, false);
  assert.equal(called, false);
});

test("entrega valida nao chama a rede sem provedor", async () => {
  const calls: string[] = [];
  const result = await receiveLead(valid, (lead) =>
    deliverLead(lead, {}, async (url) => {
      calls.push(String(url));
      return new Response("{}");
    }),
  );
  assert.equal(result.status, 200);
  assert.equal(result.body.ok, true);
  assert.deepEqual(calls, []);
});

test("entrega chama o Resend e o webhook quando configurados", async () => {
  const calls: string[] = [];
  const lead = leadSchema.parse(valid);
  await deliverLead(
    lead,
    {
      RESEND_API_KEY: "re_test",
      LEAD_TO_EMAIL: "contato@example.com",
      LEAD_WEBHOOK_URL: "https://hooks.example.com/lead",
    },
    async (url) => {
      calls.push(String(url));
      return new Response("{}");
    },
  );
  assert.ok(calls.includes("https://api.resend.com/emails"));
  assert.ok(calls.includes("https://hooks.example.com/lead"));
});

test("a url do whatsapp leva ao numero e a mensagem", () => {
  assert.match(whatsappUrl, /5571984570082/);
  assert.match(
    decodeURIComponent(whatsappUrl),
    /Olá, Rafael\. Quero conversar sobre o que está travando na minha operação\./,
  );
});
