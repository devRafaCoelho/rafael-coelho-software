import { readFileSync } from "node:fs";
import path from "node:path";

const HEADLINE =
  "Arquitetura de software sênior, entregue na velocidade da IA.";
const CTA = "Falar no WhatsApp";
const CLIENTS = ["Neoenergia", "Brivia", "Auren"];

type Section = {
  title: string;
  body: string;
};

function readCopy(): Section[] {
  const file = path.join(process.cwd(), "..", "docs", "s2", "copy.md");
  const markdown = readFileSync(file, "utf8");
  return markdown
    .split(/^## /m)
    .slice(1)
    .map((part) => {
      const [titleLine, ...rest] = part.split("\n");
      return { title: titleLine.trim(), body: rest.join("\n").trim() };
    });
}

function CtaButton() {
  return (
    <button
      type="button"
      className="w-fit rounded-lg bg-cta px-4 py-2 text-sm font-medium text-cta-foreground"
    >
      {CTA}
    </button>
  );
}

function Blocks({ body }: { body: string }) {
  const chunks = body.split(/\r?\n\r?\n+/);
  return chunks.map((chunk) => {
    const key = chunk.slice(0, 48);
    if (chunk.startsWith("CTA:")) {
      return <CtaButton key={key} />;
    }
    if (chunk.startsWith("Faixa de clientes:")) {
      return (
        <ul key={key} className="grid grid-cols-3 gap-2">
          {CLIENTS.map((name) => (
            <li
              key={name}
              className="flex h-14 items-center justify-center border border-foreground/20 text-center text-xs"
            >
              {name}
            </li>
          ))}
        </ul>
      );
    }
    if (chunk.startsWith("Formulário")) {
      const fields = chunk
        .split("\n")
        .filter((line) => line.startsWith("- "))
        .map((line) => line.slice(2));
      return (
        <div key={key} className="flex flex-col gap-3">
          {fields.map((field) => (
            <label key={field} className="flex flex-col gap-1 text-sm">
              {field}
              <input
                readOnly
                className="h-10 border border-foreground/20 bg-background px-2"
              />
            </label>
          ))}
        </div>
      );
    }
    const lines = chunk.split(/\r?\n/).map((line) => line.trim());
    if (
      lines.every((line) => line.startsWith("- ")) &&
      lines.some((line) => line.includes("Faixa de orçamento"))
    ) {
      return (
        <div key={key} className="flex flex-col gap-3">
          {lines.map((line) => {
            const field = line.slice(2);
            return (
              <label key={field} className="flex flex-col gap-1 text-sm">
                {field}
                <input
                  readOnly
                  className="h-10 border border-foreground/20 bg-background px-2"
                />
              </label>
            );
          })}
        </div>
      );
    }
    if (lines.every((line) => line.startsWith("- "))) {
      return (
        <ul key={key} className="list-disc pl-5">
          {chunk.split("\n").map((line) => (
            <li key={line}>{line.slice(2)}</li>
          ))}
        </ul>
      );
    }
    return chunk.split("\n").map((line) => {
      if (line.startsWith("#### ")) {
        return (
          <h4 key={line} className="text-base font-medium">
            {line.slice(5)}
          </h4>
        );
      }
      if (line.startsWith("### ")) {
        return (
          <h3 key={line} className="text-lg font-medium">
            {line.slice(4)}
          </h3>
        );
      }
      if (line.startsWith("Headline:")) {
        return (
          <h1 key={line} className="font-heading text-3xl">
            {HEADLINE}
          </h1>
        );
      }
      if (/^\d+\. /.test(line)) {
        return <p key={line}>{line}</p>;
      }
      if (line.startsWith("http")) {
        return (
          <p key={line} className="break-all text-sm">
            {line}
          </p>
        );
      }
      return <p key={line}>{line}</p>;
    });
  });
}

export default function WireframePage() {
  const sections = readCopy();

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col gap-10 px-4 py-8">
      {sections.map((section) => (
        <section key={section.title} className="flex flex-col gap-3">
          <p className="text-xs tracking-wide text-foreground/60 uppercase">
            {section.title}
          </p>
          <div className="flex flex-col gap-3">
            {Blocks({ body: section.body })}
          </div>
        </section>
      ))}
    </main>
  );
}
