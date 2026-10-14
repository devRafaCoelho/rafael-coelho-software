import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const QUESTIONS = [
  {
    id: "preco",
    title: "Preço",
    answer:
      "Não há tabela pública. O diagnóstico abre a conversa, e o formulário pergunta a faixa de orçamento para qualificar sem espantar.",
  },
  {
    id: "prazo",
    title: "Prazo",
    answer:
      "O prazo sai do diagnóstico, com escopo fechado. Não prometo data antes de entender o sistema.",
  },
  {
    id: "contrato",
    title: "Contrato PJ",
    answer:
      "A contratação é PJ. Nota e contrato formalizam o trabalho quando o CNPJ estiver ativo.",
  },
  {
    id: "codigo",
    title: "Propriedade do código",
    answer:
      "O código do que foi contratado é do cliente. Repositório, acesso e entrega ficam no nome de quem pagou.",
  },
  {
    id: "suporte",
    title: "Suporte pós-entrega",
    answer:
      "Depois da entrega, a evolução contínua pode virar retainer mensal. Sem retainer, o suporte é o que estiver escrito no contrato.",
  },
];

export function Faq() {
  return (
    <section className="mx-auto w-full max-w-3xl px-4 py-10">
      <Accordion type="single" collapsible>
        {QUESTIONS.map((question) => (
          <AccordionItem key={question.id} value={question.id}>
            <AccordionTrigger>{question.title}</AccordionTrigger>
            <AccordionContent>{question.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
