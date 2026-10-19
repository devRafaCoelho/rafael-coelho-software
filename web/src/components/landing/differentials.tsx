import { Section, SectionHeader } from "@/components/landing/section";

const ITEMS = [
  {
    title: "Você fala com quem faz",
    body: "Sem gerente de conta no meio. A conversa e a entrega ficam com a mesma pessoa.",
  },
  {
    title: "Arquitetura antes do código",
    body: "O sistema nasce com estrutura. O prazo curto não vira dívida técnica.",
  },
  {
    title: "IA no prazo, você no controle",
    body: "A inteligência artificial encurta a entrega. O que entra no sistema, você confirma.",
  },
  {
    title: "Visão de ponta a ponta",
    body: "Do diagnóstico à publicação — um único parceiro responsável pelo resultado.",
  },
  {
    title: "Código e acesso ficam com você",
    body: "O que foi contratado é seu. Repositório e entrega no seu nome.",
  },
  {
    title: "Continuidade depois da entrega",
    body: "O sistema no ar pode seguir evoluindo, mês a mês, com quem já conhece o contexto.",
  },
];

export function Differentials() {
  return (
    <Section id="diferenciais">
      <SectionHeader
        eyebrow="Diferenciais"
        title="Por que trabalhar comigo"
        description="Experiência técnica aliada à visão de negócio — o parceiro certo para projetos que precisam entregar de verdade."
      />
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {ITEMS.map((item, index) => (
          <li key={item.title}>
            <div className="glass group relative h-full overflow-hidden rounded-2xl p-6 transition-colors hover:border-ai-green/30">
              <div
                aria-hidden
                className="absolute -top-4 -right-4 size-24 rounded-full bg-ai-green/5 transition-transform group-hover:scale-150"
              />
              <div className="relative">
                <span className="font-display mb-3 inline-block text-2xl font-bold text-ai-green/40">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display mb-2 text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-subtle">
                  {item.body}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
