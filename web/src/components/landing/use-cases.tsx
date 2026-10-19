import { CardShell, Section, SectionHeader } from "@/components/landing/section";

const ACCENTS = {
  green: { text: "text-ai-green", dot: "bg-ai-green", line: "bg-ai-green/40" },
  light: { text: "text-foreground", dot: "bg-foreground", line: "bg-foreground/30" },
} as const;

const CASES = [
  {
    area: "Operação",
    title: "Planilha e WhatsApp no lugar do sistema",
    flow: ["Pedido chega", "Processo mapeado", "Sistema no ar", "Time opera"],
    accent: ACCENTS.green,
  },
  {
    area: "Produto",
    title: "Produto em produção que precisa evoluir sem parar",
    flow: ["Demanda entra", "Escopo fechado", "Entrega no ar", "Próximo ciclo"],
    accent: ACCENTS.light,
  },
  {
    area: "Lançamento",
    title: "Ideia nova sem time interno",
    flow: ["Problema claro", "MVP construído", "Publicação", "Uso real"],
    accent: ACCENTS.light,
  },
  {
    area: "Confirmação",
    title: "A IA sugere, a pessoa confirma",
    flow: ["IA propõe", "Você revisa", "Confirma", "Sistema grava"],
    accent: ACCENTS.green,
  },
];

export function UseCases() {
  return (
    <Section id="casos">
      <SectionHeader
        eyebrow="Casos de uso"
        title="Aplicações práticas"
        description="Cenários reais em que arquitetura e inteligência artificial geram valor rápido para a operação."
      />
      <ul className="grid gap-6 sm:grid-cols-2">
        {CASES.map((item) => (
          <li key={item.title}>
            <CardShell className="h-full">
              <span
                className={`mb-2 inline-block text-xs font-bold tracking-wider uppercase ${item.accent.text}`}
              >
                {item.area}
              </span>
              <h3 className="font-display mb-4 text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <ol className="flex flex-wrap items-center justify-start gap-2">
                {item.flow.map((step, index) => (
                  <li key={step} className="flex items-center gap-2">
                    <span
                      className={`glass flex items-center gap-2 rounded-lg border-white/10 px-3 py-1.5 text-xs font-medium sm:text-sm ${item.accent.text}`}
                    >
                      <span
                        aria-hidden
                        className={`size-2 rounded-full ${item.accent.dot}`}
                      />
                      {step}
                    </span>
                    {index < item.flow.length - 1 ? (
                      <span
                        aria-hidden
                        className={`hidden h-px w-6 sm:block ${item.accent.line}`}
                      />
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
