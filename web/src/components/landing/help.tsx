import { Section, SectionHeader } from "@/components/landing/section";

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
    <Section id="como-ajudo">
      <SectionHeader
        eyebrow="Como posso ajudar"
        title="Do problema ao sistema no ar"
        description="Um processo claro, com entregas incrementais e foco em valor desde o primeiro passo."
      />

      <ul className="mb-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PAINS.map((pain) => (
          <li key={pain} className="glass flex items-start gap-3 rounded-xl p-4">
            <span
              aria-hidden
              className="mt-1 size-2 shrink-0 rounded-full bg-ai-green"
            />
            <p className="text-sm text-subtle">{pain}</p>
          </li>
        ))}
      </ul>

      <div className="relative">
        <div
          aria-hidden
          className="absolute top-0 left-1/2 hidden h-full w-px -translate-x-px bg-ai-green/30 lg:block"
        />
        <ol className="flex flex-col gap-8 md:gap-12">
          {STEPS.map((step, index) => {
            const left = index % 2 === 0;
            const n = String(index + 1).padStart(2, "0");
            return (
              <li
                key={step.title}
                className={`relative flex flex-col gap-4 md:flex-row md:items-center ${left ? "lg:flex-row" : "lg:flex-row-reverse"}`}
              >
                <div className="hidden lg:absolute lg:left-1/2 lg:z-10 lg:flex lg:-translate-x-1/2 lg:items-center lg:justify-center">
                  <div className="flex size-10 items-center justify-center rounded-full bg-prompt-blue ring-2 ring-ai-green/50">
                    <span className="text-xs font-bold text-ai-green">{n}</span>
                  </div>
                </div>
                <div
                  className={`flex-1 ${left ? "lg:pr-16 lg:text-right" : "lg:pl-16"}`}
                >
                  <div className="glass rounded-2xl p-6 transition-colors hover:border-ai-green/30">
                    <span className="mb-2 inline-block text-xs font-bold text-ai-green lg:hidden">
                      {n}
                    </span>
                    <h3 className="font-display mb-2 text-xl font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-subtle">
                      {step.body}
                    </p>
                  </div>
                </div>
                <div aria-hidden className="hidden flex-1 lg:block" />
              </li>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}
