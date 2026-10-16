import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const copy = readFileSync(new URL("./copy.md", import.meta.url), "utf8");

const sections = [
  "Header",
  "Hero",
  "Serviços",
  "Como posso ajudar",
  "Casos de uso",
  "Stack & Ferramentas",
  "Sobre",
  "Diferenciais",
  "Vamos conversar",
  "Footer",
];

test("a copy tem as seções na ordem da LP", () => {
  let cursor = 0;
  for (const section of sections) {
    const marker = `## ${section}`;
    const index = copy.indexOf(marker, cursor);
    assert.notEqual(index, -1, `seção ausente: ${section}`);
    cursor = index + marker.length;
  }
});

test("a headline está escrita por extenso", () => {
  assert.match(
    copy,
    /Transforme o que trava na sua operação com inteligência artificial\./,
  );
});

test("a copy não usa júnior, sênior nem senioridade", () => {
  assert.doesNotMatch(copy, /júnior|junior|sênior|senioridade|\bsenior\b/i);
});

test("a copy não cita fornecedor de modelo", () => {
  assert.doesNotMatch(copy, /claude|chatgpt|openai|anthropic|cursor/i);
});

test("a copy não tem faixa de clientes", () => {
  assert.doesNotMatch(copy, /empresas que já confiaram|Neoenergia|Brivia|Auren/i);
});
