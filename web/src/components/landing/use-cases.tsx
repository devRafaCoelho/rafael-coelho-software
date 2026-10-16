import {
  CardShell,
  Eyebrow,
  Section,
  SectionTitle,
} from "@/components/landing/section";

const CASES = [
  {
    area: "Operação",
    title: "Planilha e WhatsApp no lugar do sistema",
    flow: ["Pedido chega", "Processo mapeado", "Sistema no ar", "Time opera"],
    accent: {
      label: "text-[#5a9209]",
      tip: "bg-[#b6ff2e]",
      chip: "border-[#b6ff2e]/50 bg-[#b6ff2e]/20 text-[#3f6b06]",
    },
  },
  {
    area: "Produto",
    title: "Produto em produção que precisa evoluir sem parar",
    flow: ["Demanda entra", "Escopo fechado", "Entrega no ar", "Próximo ciclo"],
    accent: {
      label: "text-graphite",
      tip: "bg-graphite",
      chip: "border-graphite/15 bg-graphite/[0.06] text-graphite",
    },
  },
  {
    area: "Lançamento",
    title: "Ideia nova sem time interno",
    flow: ["Problema claro", "MVP construído", "Publicação", "Uso real"],
    accent: {
      label: "text-[#1f6f7a]",
      tip: "bg-[#2a9aa8]",
      chip: "border-[#2a9aa8]/35 bg-[#2a9aa8]/12 text-[#1a5c66]",
    },
  },
  {
    area: "Confirmação",
    title: "A IA sugere, a pessoa confirma",
    flow: ["IA propõe", "Você revisa", "Confirma", "Sistema grava"],
    accent: {
      label: "text-[#9a5b10]",
      tip: "bg-[#e09a2b]",
      chip: "border-[#e09a2b]/40 bg-[#e09a2b]/14 text-[#7a480c]",
    },
  },
] as const;

export function UseCases() {
  return (
    <Section id="casos">
      <Eyebrow>Casos de uso</Eyebrow>
      <SectionTitle>Aplicações práticas</SectionTitle>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/65 md:text-lg">
        Cenários reais em que arquitetura e inteligência artificial geram valor
        rápido para a operação.
      </p>
      <ul className="mt-12 grid gap-5 md:grid-cols-2">
        {CASES.map((item) => (
          <li key={item.title}>
            <CardShell className="h-full">
              <p
                className={`text-xs font-bold tracking-[0.16em] uppercase ${item.accent.label}`}
              >
                {item.area}
              </p>
              <h3 className="font-display mt-3 text-2xl font-bold tracking-tight text-balance">
                {item.title}
              </h3>
              <ol className="mt-6 flex flex-wrap items-center gap-2">
                {item.flow.map((step, index) => (
                  <li key={step} className="flex items-center gap-2">
                    <span
                      className={`inline-flex items-center gap-2 rounded-lg border px-2.5 py-1.5 text-xs font-medium sm:text-sm ${item.accent.chip}`}
                    >
                      <span
                        aria-hidden
                        className={`size-2 shrink-0 rounded-full ${item.accent.tip}`}
                      />
                      {step}
                    </span>
                    {index < item.flow.length - 1 ? (
                      <span
                        aria-hidden
                        className="text-sm font-medium text-foreground/45"
                      >
                        →
                      </span>
                    ) : null}
                  </li>
                ))}
              </ol>
            </CardShell>
          </li>
        ))}
      </ul>
    </Section>
  );
}
