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
import { CardShell, Section, SectionHeader } from "@/components/landing/section";

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
    <Section id="stack" className="bg-muted-surface/70">
      <SectionHeader
        eyebrow="Stack & Ferramentas"
        title="Tecnologia escolhida a dedo"
        description="Cada projeto usa as ferramentas certas para o contexto — sem modismo, com foco em resultado."
      />
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {TOOLS.map((tool) => {
          const Icon = CATEGORY_ICON[tool.category];
          return (
            <li key={tool.name}>
              <CardShell className="group h-full p-5 hover:border-lime/40">
                <div className="mb-3 flex items-center gap-3">
                  <span className="inline-flex rounded-lg bg-lime/25 p-2 text-graphite transition-colors group-hover:bg-lime/40">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <div>
                    <p className="font-display text-sm font-semibold">
                      {tool.name}
                    </p>
                    <p className="text-xs text-[#5a9209]">{tool.category}</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-foreground/65">
                  {tool.body}
                </p>
              </CardShell>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
