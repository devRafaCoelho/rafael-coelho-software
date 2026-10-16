import type { LucideIcon } from "lucide-react";
import {
  Cloud,
  Code2,
  Database,
  LayoutPanelTop,
  Link2,
  Server,
  Smartphone,
  Workflow,
} from "lucide-react";
import {
  CardShell,
  Eyebrow,
  Section,
  SectionTitle,
} from "@/components/landing/section";

type Category =
  | "Front-end"
  | "Linguagem"
  | "Backend"
  | "Dados"
  | "Cloud"
  | "DevOps"
  | "Integração"
  | "Mobile";

const CATEGORY_ICON: Record<Category, LucideIcon> = {
  "Front-end": LayoutPanelTop,
  Linguagem: Code2,
  Backend: Server,
  Dados: Database,
  Cloud: Cloud,
  DevOps: Workflow,
  Integração: Link2,
  Mobile: Smartphone,
};

const TOOLS: { name: string; category: Category; body: string }[] = [
  {
    name: "React",
    category: "Front-end",
    body: "Interfaces e produtos web com componentes reutilizáveis.",
  },
  {
    name: "Vue",
    category: "Front-end",
    body: "Entrega rápida em bases já existentes e produtos em evolução.",
  },
  {
    name: "TypeScript",
    category: "Linguagem",
    body: "Contratos claros entre camadas e menos surpresa em produção.",
  },
  {
    name: "Node.js",
    category: "Backend",
    body: "APIs e serviços com arquitetura em camadas.",
  },
  {
    name: "PostgreSQL",
    category: "Dados",
    body: "Banco relacional para dados transacionais e operação.",
  },
  {
    name: "Supabase",
    category: "Backend",
    body: "Auth, storage e funções de servidor quando o produto pede.",
  },
  {
    name: "AWS",
    category: "Cloud",
    body: "Infraestrutura escalável para APIs, arquivos e autenticação.",
  },
  {
    name: "Docker",
    category: "DevOps",
    body: "Ambientes reproduzíveis e deploy previsível.",
  },
  {
    name: "APIs REST",
    category: "Integração",
    body: "Conexão com ERPs, CRMs e sistemas legados.",
  },
  {
    name: "CI/CD",
    category: "DevOps",
    body: "Pipeline de build e publicação sem ritual manual.",
  },
  {
    name: "Capacitor",
    category: "Mobile",
    body: "Apps iOS e Android a partir da mesma base web.",
  },
  {
    name: "PWA",
    category: "Mobile",
    body: "Produto instalável no celular sem loja, quando fizer sentido.",
  },
];

export function Stack() {
  return (
    <Section id="stack" className="bg-muted-surface">
      <Eyebrow>Stack & Ferramentas</Eyebrow>
      <SectionTitle>Tecnologia escolhida a dedo</SectionTitle>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/65 md:text-lg">
        Cada projeto usa as ferramentas certas para o contexto — sem modismo, com
        foco em resultado.
      </p>
      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {TOOLS.map((tool) => {
          const Icon = CATEGORY_ICON[tool.category];
          return (
            <li key={tool.name}>
              <CardShell className="group relative h-full overflow-hidden">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(182,255,46,0.16),transparent_55%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
                <div className="relative">
                  <div className="flex items-center gap-2.5">
                    <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-xl bg-lime/35 text-primary transition-transform duration-300 group-hover:scale-105">
                      <Icon className="size-4" aria-hidden />
                    </span>
                    <p className="text-xs font-semibold tracking-[0.14em] text-primary uppercase">
                      {tool.category}
                    </p>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">{tool.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/65">
                    {tool.body}
                  </p>
                </div>
              </CardShell>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
