import { CardShell, Section, SectionHeader } from "@/components/landing/section";

const CASES = [
  {
    area: "Operação",
    title: "Planilha e WhatsApp no lugar do sistema",
    flow: ["Pedido chega", "Processo mapeado", "Sistema no ar", "Time opera"],
    accent: {
      label: "text-[#5a9209]",
      tip: "bg-[#b6ff2e]",
      chip: "border-[#b6ff2e]/50 bg-[#b6ff2e]/20 text-[#3f6b06]",
      line: "from-[#b6ff2e]/70",
      wash: "bg-[radial-gradient(ellipse_at_top_left,rgba(182,255,46,0.22),transparent_55%)]",
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
      line: "from-graphite/40",
      wash: "bg-[radial-gradient(ellipse_at_top_left,rgba(35,38,47,0.08),transparent_55%)]",
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
      line: "from-[#2a9aa8]/60",
      wash: "bg-[radial-gradient(ellipse_at_top_left,rgba(42,154,168,0.16),transparent_55%)]",
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
      line: "from-[#e09a2b]/65",
      wash: "bg-[radial-gradient(ellipse_at_top_left,rgba(224,154,43,0.18),transparent_55%)]",
    },
  },
] as const;

export function UseCases() {
  return (
    <Section id="casos">
      <SectionHeader
        eyebrow="Casos de uso"
        title="Aplicações práticas"
        description="Cenários reais em que arquitetura e inteligência artificial geram valor rápido para a operação."
      />
      <ul className="grid gap-5 md:grid-cols-2">
        {CASES.map((item) => (
          <li key={item.title}>
            <CardShell className="relative h-full overflow-hidden">
              <div
                aria-hidden
                className={`pointer-events-none absolute inset-0 ${item.accent.wash}`}
              />
              <div className="relative">
                <p
                  className={`text-xs font-bold tracking-wider uppercase ${item.accent.label}`}
                >
                  {item.area}
                </p>
                <h3 className="font-display mt-2 mb-4 text-lg font-semibold text-balance">
                  {item.title}
                </h3>
                <ol className="flex flex-wrap items-center gap-2">
                  {item.flow.map((step, index) => (
                    <li key={step} className="flex items-center gap-2">
                      <span
                        className={`inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-xs font-medium sm:text-sm ${item.accent.chip}`}
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
                          className={`hidden h-px w-6 bg-gradient-to-r to-transparent sm:block ${item.accent.line}`}
                        />
                      ) : null}
                    </li>
                  ))}
                </ol>
              </div>
            </CardShell>
          </li>
        ))}
      </ul>
    </Section>
  );
}
