import { Eyebrow, Section, SectionTitle } from "@/components/landing/section";

const PAINS = [
  "Cada mudança quebra o que já estava no ar",
  "O próximo passo sai mais caro que o anterior",
  "Fila, repasse e ninguém dono da decisão",
  "Sistema e planilha convivendo sem regra",
  "Prazo curto sem estrutura que aguente crescer",
];

const STEPS = [
  {
    title: "Diagnóstico",
    body: "Eu entendo o que trava na operação antes de falar em prazo.",
  },
  {
    title: "Proposta",
    body: "Escopo fechado, o caminho e o que fica de fora — sem surpresa.",
  },
  {
    title: "Construção",
    body: "Você fala com quem faz o sistema. Entregas visíveis no caminho.",
  },
  {
    title: "Resultado",
    body: "Sistema no ar, código sob o seu controle e o próximo passo combinado.",
  },
];

export function Help() {
  return (
    <Section id="como-ajudo" className="bg-muted-surface">
      <Eyebrow>Como posso ajudar</Eyebrow>
      <SectionTitle>Do problema ao sistema no ar</SectionTitle>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/65 md:text-lg">
        Um processo claro, com entregas incrementais e foco em valor desde o
        primeiro passo.
      </p>

      <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
        {PAINS.map((pain, index) => (
          <li
            key={pain}
            className={[
              "flex items-start gap-3 rounded-xl border border-foreground/8 bg-surface px-4 py-3.5 lg:col-span-2",
              index === 3 ? "lg:col-start-2" : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <span
              aria-hidden
              className="mt-1.5 size-2 shrink-0 rounded-full bg-lime"
            />
            <span className="text-sm leading-snug text-foreground/75">
              {pain}
            </span>
          </li>
        ))}
      </ul>

      <ol className="relative mt-16 max-w-4xl mx-auto">
        <div
          aria-hidden
          className="absolute top-3 bottom-3 left-[1.125rem] w-px bg-foreground/12 lg:left-1/2 lg:-translate-x-px"
        />
        {STEPS.map((step, index) => {
          const left = index % 2 === 0;
          const n = String(index + 1).padStart(2, "0");
          return (
            <li
              key={step.title}
              className="relative grid grid-cols-[2.25rem_1fr] gap-x-5 pb-12 last:pb-0 lg:grid-cols-2 lg:gap-x-0"
            >
              <div
                aria-hidden
                className="relative z-10 flex size-9 items-center justify-center rounded-full border-2 border-lime bg-muted-surface text-[11px] font-bold tracking-wide text-graphite lg:absolute lg:left-1/2 lg:-translate-x-1/2"
              >
                {n}
              </div>
              <div
                className={[
                  "min-w-0 pt-1 lg:pt-0",
                  left
                    ? "lg:col-start-1 lg:row-start-1 lg:pr-14 lg:text-right"
                    : "lg:col-start-2 lg:row-start-1 lg:pl-14",
                ].join(" ")}
              >
                <div
                  className={[
                    "rounded-2xl border border-foreground/8 bg-surface p-5 shadow-[var(--shadow-card)] md:p-6",
                    left ? "lg:ml-auto" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <h3 className="font-display text-xl font-bold tracking-tight">
                    {step.title}
                  </h3>
                  <div
                    aria-hidden
                    className={[
                      "mt-3 h-1 w-10 rounded-full bg-lime",
                      left ? "lg:ml-auto" : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  />
                  <p className="mt-4 text-sm leading-relaxed text-foreground/65 md:text-base">
                    {step.body}
                  </p>
                </div>
              </div>
              {/* spacer column on desktop so the empty side keeps rhythm */}
              <div
                aria-hidden
                className={[
                  "hidden lg:block",
                  left ? "lg:col-start-2" : "lg:col-start-1 lg:row-start-1",
                ].join(" ")}
              />
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
