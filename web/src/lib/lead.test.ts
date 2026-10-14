import assert from "node:assert/strict";
import test from "node:test";
import { leadSchema, whatsappUrl } from "./lead.ts";

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

test("a url do whatsapp leva ao numero e a mensagem", () => {
  assert.match(whatsappUrl, /5571984570082/);
  assert.match(
    decodeURIComponent(whatsappUrl),
    /Olá, Rafael\. Quero conversar sobre o que está travando na minha operação\./,
  );
});
