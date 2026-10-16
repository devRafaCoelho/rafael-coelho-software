import {
  AppWindow,
  Boxes,
  CircuitBoard,
  Layers3,
  RefreshCw,
  SearchCheck,
} from "lucide-react";
import {
  CardShell,
  Eyebrow,
  Section,
  SectionTitle,
} from "@/components/landing/section";

const SERVICES = [
  {
    icon: SearchCheck,
    title: "Diagnóstico de arquitetura",
    body: "Uma leitura objetiva do que trava o sistema ou a operação, antes de qualquer prazo.",
  },
  {
    icon: CircuitBoard,
    title: "Sistema pronto",
    body: "O produto ou a parte que falta, construído e no ar, com você falando com quem faz.",
  },
  {
    icon: RefreshCw,
    title: "Continuidade mensal",
    body: "O que já está em produção segue evoluindo, sem remontar o time a cada demanda.",
  },
  {
    icon: Boxes,
    title: "Integração de sistemas",
    body: "ERPs, APIs, planilhas e fluxos conectados em um caminho só, sem silo de dado.",
  },
  {
    icon: AppWindow,
    title: "Apps web e mobile",
    body: "Do MVP à publicação: web, iOS e Android com a mesma base quando fizer sentido.",
  },
  {
    icon: Layers3,
    title: "IA no fluxo de entrega",
    body: "A inteligência artificial encurta o prazo. O que entra no sistema, você confirma.",
  },
];

export function Services() {
  return (
    <Section id="servicos">
      <Eyebrow>Serviços</Eyebrow>
      <SectionTitle className="max-w-2xl">Soluções que geram impacto</SectionTitle>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/65 md:text-lg">
        Do diagnóstico pontual à evolução contínua — cada entrega é desenhada
        para o seu contexto.
      </p>
      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service) => (
          <li key={service.title}>
            <CardShell className="flex h-full flex-col">
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-lime/35 text-graphite">
                <service.icon className="size-5" aria-hidden />
              </span>
              <h3 className="mt-5 text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/65 md:text-base">
                {service.body}
              </p>
              <a
                href="#vamos-conversar"
                className="mt-5 text-sm font-semibold text-graphite underline-offset-4 hover:underline"
              >
                Saiba mais →
              </a>
            </CardShell>
          </li>
        ))}
      </ul>
    </Section>
  );
}
