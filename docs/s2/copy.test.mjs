import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const copy = readFileSync(new URL("./copy.md", import.meta.url), "utf8");

const sections = [
  "Header",
  "Hero",
  "Dor",
  "3 pilares",
  "Como funciona",
  "Cases",
  "Diferencial de IA",
  "Sobre",
  "Depoimentos",
  "FAQ",
  "CTA final",
  "Footer",
];

test("a copy tem as 12 seções na ordem do funil", () => {
  let cursor = 0;
  for (const section of sections) {
    const marker = `## ${section}`;
    const index = copy.indexOf(marker, cursor);
    assert.notEqual(index, -1, `seção ausente: ${section}`);
    cursor = index + marker.length;
  }
});

test("a headline provisória está escrita por extenso", () => {
  assert.match(
    copy,
    /Arquitetura de software sênior, entregue na velocidade da IA\./,
  );
});

test("Pet Sampas e Estoque Inteligente publicam o status real", () => {
  assert.match(copy, /petsampas\.com\.br/);
  assert.match(copy, /aguardam aprovação da Apple e do Google/);
  assert.match(copy, /em reimplementação/);
});

test("a copy não cita fornecedor de modelo", () => {
  assert.doesNotMatch(copy, /claude|chatgpt|openai|anthropic|cursor/i);
});
