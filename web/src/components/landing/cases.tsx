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

function CaseBlock({
  name,
  problem,
  decision,
  result,
}: {
  name: string;
  problem: string;
  decision: string;
  result: string;
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
    </section>
  );
}
