import {
  AppWindow,
  Boxes,
  CircuitBoard,
  Layers3,
  RefreshCw,
  SearchCheck,
} from "lucide-react";
import { CardShell, Section, SectionHeader } from "@/components/landing/section";

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
      <SectionHeader
        eyebrow="Serviços"
        title="Soluções que geram impacto"
        description="Do diagnóstico pontual à evolução contínua — cada entrega é desenhada para o seu contexto."
      />
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service) => (
          <li key={service.title}>
            <CardShell className="h-full">
              <a href="#vamos-conversar" className="block">
                <span className="mb-4 inline-flex rounded-xl bg-ai-green/10 p-3 text-ai-green transition-colors group-hover:bg-ai-green/20">
                  <service.icon className="size-6" aria-hidden />
                </span>
                <h3 className="font-display mb-2 text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-subtle">
                  {service.body}
                </p>
                <p className="mt-4 text-sm font-semibold text-ai-green transition-colors group-hover:text-ai-green/80">
                  Saiba mais →
                </p>
              </a>
            </CardShell>
          </li>
        ))}
      </ul>
    </Section>
  );
}
