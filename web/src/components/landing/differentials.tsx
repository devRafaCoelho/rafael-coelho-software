import {
  CardShell,
  Eyebrow,
  Section,
  SectionTitle,
} from "@/components/landing/section";

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
    <Section id="diferenciais" className="bg-muted-surface">
      <Eyebrow>Diferenciais</Eyebrow>
      <SectionTitle>Por que trabalhar comigo</SectionTitle>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/65 md:text-lg">
        Experiência técnica aliada à visão de negócio — o parceiro certo para
        projetos que precisam entregar de verdade.
      </p>
      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {ITEMS.map((item, index) => (
          <li key={item.title}>
            <CardShell className="h-full">
              <p className="text-sm font-semibold tracking-[0.14em] text-graphite/35">
                {String(index + 1).padStart(2, "0")}
              </p>
              <div className="mt-3 h-1.5 w-10 rounded-full bg-lime" />
              <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/65">
                {item.body}
              </p>
            </CardShell>
          </li>
        ))}
      </ul>
    </Section>
  );
}
