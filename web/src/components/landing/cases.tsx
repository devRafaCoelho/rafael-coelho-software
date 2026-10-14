import type { ReactNode } from "react";

const CLIENTS = [
  {
    name: "Neoenergia",
    problem:
      "plataformas financeiras e operacionais (SAI e PAM) precisavam evoluir no mesmo front-end sem virar um monorepo.",
    decision:
      "domínios independentes dentro de uma única SPA, com cliente HTTP centralizado, tema por marca e permissão granular por módulo.",
    result:
      "SAI (CAPEX/OPEX, provisões, contratos e pedidos) e PAM (alarmes de medição, triagem e dashboards) evoluem separados, e o erro de sessão expirada deixou de ser tratado em cada serviço.",
  },
  {
    name: "Brivia",
    problem:
      "produto em produção que precisa continuar evoluindo sem remontar o time a cada demanda.",
    decision:
      "retainer mensal de evolução contínua, no mesmo modelo já usado com a Neoenergia via RI Tecnologia.",
    result:
      "a evolução fica com quem arquiteta e constrói, sem camada de gerente de conta no meio.",
  },
  {
    name: "Auren",
    problem:
      "planejar indisponibilidade de ativos de geração sem deixar manutenções se sobreporem no mesmo equipamento.",
    decision:
      "módulo SPIA na plataforma iOperations, com visão Gantt plurianual e regra de conflito de período no backend.",
    result:
      "cadastro, pesquisa, importação em massa e auditoria das alterações, com a sobreposição barrada na regra de negócio.",
  },
];

const PRODUCTS: {
  name: string;
  problem: string;
  decision: string;
  result: ReactNode;
}[] = [
  {
    name: "Pet Sampas",
    problem:
      "a vida do pet fica espalhada entre gaveta, WhatsApp e memória, e o histórico se perde na hora da consulta.",
    decision:
      "SaaS de prontuário e carteira digital, com o acesso do cliente ao banco sob regras de segurança e pagamento e e-mail só no servidor. A mesma base web segue para iOS e Android.",
    result: (
      <>
        produto no ar em{" "}
        <a href="https://petsampas.com.br" className="underline">
          petsampas.com.br
        </a>
        . Os apps aguardam aprovação da Apple e do Google.
      </>
    ),
  },
  {
    name: "Estoque Inteligente",
    problem:
      "o estoque de casa depende da memória, e uma resposta errada da IA não pode gravar um item que não existe.",
    decision:
      "PWA com API em camadas. Texto, voz, foto ou nota fiscal passam por rascunho, revisão e confirmação antes de escrever no estoque.",
    result:
      "produto hospedado e em reimplementação. É um case de arquitetura em evolução, não um lançamento encerrado.",
  },
];

function CaseBlock({
  name,
  problem,
  decision,
  result,
}: {
  name: string;
  problem: string;
  decision: string;
  result: ReactNode;
}) {
  return (
    <article className="flex flex-col gap-3">
      <h3 className="border border-foreground/20 px-3 py-4 text-center text-sm">
        {name}
      </h3>
      <p>Problema: {problem}</p>
      <p>Decisão de arquitetura: {decision}</p>
      <p>Resultado: {result}</p>
    </article>
  );
}

export function Cases() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-4 py-10">
      <div className="flex flex-col gap-6">
        <h2 className="font-heading text-2xl">Clientes</h2>
        {CLIENTS.map((item) => (
          <CaseBlock key={item.name} {...item} />
        ))}
      </div>
      <div className="flex flex-col gap-6">
        <h2 className="font-heading text-2xl">Produtos próprios</h2>
        {PRODUCTS.map((item) => (
          <CaseBlock key={item.name} {...item} />
        ))}
      </div>
    </section>
  );
}
