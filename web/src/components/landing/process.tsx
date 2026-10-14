const STEPS = [
  "Diagnóstico. Uma análise pontual do sistema ou da decisão técnica que trava o produto.",
  "Proposta. O caminho de arquitetura, o escopo e o que fica de fora.",
  "Build. Construção do produto, do MVP ou da feature, com você falando com quem implementa.",
  "Entrega. Sistema no ar, código sob o seu controle e o próximo passo combinado.",
];

export function Process() {
  return (
    <section className="mx-auto w-full max-w-3xl px-4 py-10">
      <ol className="list-decimal space-y-3 pl-5">
        {STEPS.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
    </section>
  );
}
