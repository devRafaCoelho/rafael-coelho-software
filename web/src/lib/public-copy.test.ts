import assert from "node:assert/strict";
import { readdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const src = join(dirname(fileURLToPath(import.meta.url)), "..");

const landing = readdirSync(join(src, "components/landing"))
  .filter((name) => name.endsWith(".tsx"))
  .map((name) => readFileSync(join(src, "components/landing", name), "utf8"));

const page = [
  ...landing,
  readFileSync(join(src, "app/page.tsx"), "utf8"),
  readFileSync(join(src, "app/layout.tsx"), "utf8"),
  readFileSync(join(src, "app/privacidade/page.tsx"), "utf8"),
].join("\n");

test("a headline está na página", () => {
  assert.match(
    page,
    /Transforme o que trava na sua operação com inteligência artificial\./,
  );
});

test("os produtos publicam o status real", () => {
  assert.match(page, /Os apps aguardam aprovação da Apple e do Google\./);
  assert.match(page, /em reimplementação/);
});

test("a página não usa palavra proibida nem a frase reservada", () => {
  assert.doesNotMatch(
    page,
    /júnior|junior|sênior|senioridade|\bsenior\b|claude|chatgpt|openai|anthropic|\bcursor\b/i,
  );
  assert.doesNotMatch(page, /link reservado/i);
});
