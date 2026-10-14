import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const PILLARS = [
  {
    title: "Arquitetura",
    body: "A entrega não é só a interface. É a estrutura que escala e não vira dívida técnica.",
  },
  {
    title: "IA",
    body: "A IA entra no desenho do sistema e no jeito de construir. Ela acelera a entrega com controle, revisão e qualidade.",
  },
  {
    title: "Experiência",
    body: "Problemas reais em energia, educação e fintech, e produto próprio tirado do zero até produção.",
  },
];

export function Pillars() {
  return (
    <section className="mx-auto w-full max-w-3xl px-4 py-10">
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {PILLARS.map((pillar) => (
          <li key={pillar.title}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>{pillar.title}</CardTitle>
              </CardHeader>
              <CardContent>{pillar.body}</CardContent>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
}
