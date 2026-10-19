import type { LucideIcon } from "lucide-react";
import {
  Atom,
  Bot,
  BookOpen,
  Boxes,
  Braces,
  CircleCheck,
  Cloud,
  CodeXml,
  Component,
  Container,
  CreditCard,
  Database,
  DatabaseZap,
  FingerprintPattern,
  GitBranch,
  Handshake,
  Hexagon,
  Kanban,
  KeyRound,
  Layers,
  LayoutPanelTop,
  ListChecks,
  MessagesSquare,
  MonitorSmartphone,
  Network,
  Palette,
  Plug,
  Rocket,
  ScanText,
  Server,
  ShieldCheck,
  Smartphone,
  TestTubeDiagonal,
  UserCheck,
  Users,
  Workflow,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/landing/section";

type Skill = {
  icon: LucideIcon;
  name: string;
  tools: string;
  body: string;
};

type Group = {
  icon: LucideIcon;
  title: string;
  body: string;
  skills: Skill[];
};

const GROUPS: Group[] = [
  {
    icon: LayoutPanelTop,
    title: "Front-end",
    body: "Interfaces que o time consegue evoluir sem reescrever.",
    skills: [
      {
        icon: Atom,
        name: "React",
        tools: "Hooks · Context API · React Router",
        body: "SPAs com domínios independentes, que crescem sem virar um bloco só.",
      },
      {
        icon: Hexagon,
        name: "Vue.js",
        tools: "Material UI · Vitest",
        body: "Jornadas críticas reconstruídas com foco em conversão.",
      },
      {
        icon: Component,
        name: "Angular",
        tools: "RxJS · Lazy loading · Angular Material",
        body: "Módulos corporativos carregados sob demanda.",
      },
      {
        icon: CodeXml,
        name: "TypeScript",
        tools: "Tipagem ponta a ponta",
        body: "Contratos claros entre camadas e menos surpresa em produção.",
      },
      {
        icon: Palette,
        name: "Design Systems",
        tools: "Material UI · Temas por marca",
        body: "Componentes e identidade visual padronizados entre vários times.",
      },
      {
        icon: TestTubeDiagonal,
        name: "Testes automatizados",
        tools: "Vitest · Jest · Testing Library",
        body: "Cobertura nos fluxos que não podem quebrar.",
      },
    ],
  },
  {
    icon: Server,
    title: "Backend",
    body: "APIs com a regra de negócio no lugar certo.",
    skills: [
      {
        icon: Braces,
        name: "C# / .NET",
        tools: "ASP.NET Core · Entity Framework Core",
        body: "Serviços corporativos com Clean Architecture e regra de domínio isolada.",
      },
      {
        icon: Workflow,
        name: "Node.js",
        tools: "Express · DTOs · Joi",
        body: "APIs REST em camadas, com validação na entrada.",
      },
      {
        icon: Network,
        name: "APIs REST",
        tools: "Swagger · Integrações corporativas",
        body: "Integração documentada para quem consome do outro lado.",
      },
      {
        icon: Layers,
        name: "Arquitetura em camadas",
        tools: "Routes · Services · Repositories",
        body: "Cada responsabilidade no seu lugar, fácil de testar e manter.",
      },
    ],
  },
  {
    icon: Database,
    title: "Banco de dados",
    body: "Dado consistente, do transacional ao analítico.",
    skills: [
      {
        icon: Database,
        name: "PostgreSQL",
        tools: "TypeORM · Modelagem relacional",
        body: "Base transacional para operação, PDV e pagamentos.",
      },
      {
        icon: DatabaseZap,
        name: "SQL Server",
        tools: "Entity Framework Core",
        body: "Bases corporativas com regras de conflito e auditoria.",
      },
      {
        icon: Boxes,
        name: "Supabase",
        tools: "Auth · Storage · Edge Functions · RLS",
        body: "Backend gerenciado com acesso protegido linha a linha.",
      },
      {
        icon: Plug,
        name: "Dados corporativos",
        tools: "SAP HANA · Databricks",
        body: "Integração com as fontes de dados que a empresa já usa.",
      },
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    body: "Deploy previsível, sem ritual manual.",
    skills: [
      {
        icon: Cloud,
        name: "AWS",
        tools: "Lambda · API Gateway · Cognito",
        body: "Infraestrutura escalável para APIs e autenticação.",
      },
      {
        icon: Container,
        name: "Docker & nginx",
        tools: "Build multi-estágio",
        body: "Ambientes reproduzíveis do desenvolvimento à produção.",
      },
      {
        icon: Rocket,
        name: "Google Cloud Run",
        tools: "Containers gerenciados",
        body: "Publicação com URL de API sensível a cada ambiente.",
      },
      {
        icon: GitBranch,
        name: "CI/CD",
        tools: "GitHub Actions · Bitbucket · Azure Pipelines",
        body: "Build, teste e publicação automáticos a cada entrega.",
      },
    ],
  },
  {
    icon: ShieldCheck,
    title: "Segurança",
    body: "Acesso controlado desde o primeiro login.",
    skills: [
      {
        icon: UserCheck,
        name: "SSO corporativo",
        tools: "Azure AD · MSAL",
        body: "Login integrado à conta que a empresa já usa.",
      },
      {
        icon: KeyRound,
        name: "JWT & refresh tokens",
        tools: "Sessão com renovação",
        body: "Sessão expirada tratada em um lugar só, não em cada tela.",
      },
      {
        icon: ListChecks,
        name: "Permissões por perfil",
        tools: "CRUD por rota · Log de auditoria",
        body: "Cada pessoa vê e altera só o que precisa.",
      },
      {
        icon: FingerprintPattern,
        name: "Hashing no navegador",
        tools: "Argon2id · WebAssembly",
        body: "A senha já sai protegida antes de chegar à API.",
      },
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile",
    body: "A mesma base web chegando ao celular.",
    skills: [
      {
        icon: Smartphone,
        name: "Capacitor",
        tools: "iOS · Android",
        body: "Apps nas lojas reaproveitando o código React.",
      },
      {
        icon: MonitorSmartphone,
        name: "PWA",
        tools: "Instalável na tela inicial",
        body: "Produto no celular sem depender de loja, quando fizer sentido.",
      },
    ],
  },
  {
    icon: Bot,
    title: "IA & integrações",
    body: "Automação com o controle na mão de quem opera.",
    skills: [
      {
        icon: Bot,
        name: "IA no fluxo de entrega",
        tools: "Agentes · Automação de revisão",
        body: "Código, revisão e documentação padronizados em menos tempo.",
      },
      {
        icon: ScanText,
        name: "OCR e leitura de documentos",
        tools: "NF-e · Foto · Voz",
        body: "Documentos e notas fiscais lidos e validados automaticamente.",
      },
      {
        icon: CircleCheck,
        name: "IA com confirmação",
        tools: "Rascunho · Prévia · Confirmação",
        body: "Nada entra no sistema sem a pessoa revisar antes.",
      },
      {
        icon: CreditCard,
        name: "Pagamentos",
        tools: "Stripe · Pix · Cartão",
        body: "Assinatura e checkout com webhook verificado.",
      },
    ],
  },
  {
    icon: Handshake,
    title: "Forma de trabalho",
    body: "Processo que o negócio acompanha de perto.",
    skills: [
      {
        icon: Kanban,
        name: "Scrum & entregas incrementais",
        tools: "Sprints · Prioridade clara",
        body: "Entregas visíveis a cada ciclo, sem esperar o projeto inteiro.",
      },
      {
        icon: Users,
        name: "Liderança técnica",
        tools: "Padrões entre squads",
        body: "Decisões de arquitetura definidas e adotadas por vários times.",
      },
      {
        icon: MessagesSquare,
        name: "Comunicação com o negócio",
        tools: "Sem jargão",
        body: "Tecnologia traduzida para quem decide.",
      },
      {
        icon: BookOpen,
        name: "Documentação",
        tools: "Swagger · Decisões registradas",
        body: "Código que outro time consegue assumir depois.",
      },
    ],
  },
];

export function Stack() {
  return (
    <Section id="stack">
      <SectionHeader
        eyebrow="Stack & Ferramentas"
        title="Tecnologia escolhida a dedo"
        description="Cada projeto usa as ferramentas certas para o contexto — sem modismo, com foco em resultado."
      />
      <div className="flex flex-col">
        {GROUPS.map((group) => (
          <section
            key={group.title}
            aria-labelledby={`stack-${group.title}`}
            className="grid gap-6 border-t border-white/8 py-10 first:border-t-0 first:pt-0 last:pb-0 lg:grid-cols-[240px_1fr] lg:gap-10"
          >
            <div>
              <span className="mb-4 inline-flex rounded-xl bg-ai-green/10 p-3 text-ai-green">
                <group.icon className="size-6" aria-hidden />
              </span>
              <h3
                id={`stack-${group.title}`}
                className="font-display mb-2 text-xl font-semibold text-foreground"
              >
                {group.title}
              </h3>
              <p className="text-sm leading-relaxed text-subtle">{group.body}</p>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {group.skills.map((skill) => (
                <li key={skill.name}>
                  <div className="glass group h-full rounded-2xl p-5 transition-colors duration-300 hover:border-ai-green/30">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="inline-flex rounded-lg bg-ai-green/10 p-2 text-ai-green transition-colors group-hover:bg-ai-green/20">
                        <skill.icon className="size-5" aria-hidden />
                      </span>
                      <div>
                        <p className="font-display text-sm font-semibold text-foreground">
                          {skill.name}
                        </p>
                        <p className="text-xs text-ai-green">{skill.tools}</p>
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed text-subtle">
                      {skill.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </Section>
  );
}
