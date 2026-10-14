const PAINS = [
  "Retrabalho quando cada mudança quebra o que já estava no ar.",
  "Dívida técnica que deixa o próximo passo mais caro do que o anterior.",
  "Prazo de software house, com fila, repasse e ninguém dono da decisão.",
];

export function Pain() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-col gap-4 px-4 py-10">
      <p>
        O sistema cresce e a pressa vira dívida. Retrabalho, prazo que estoura
        e um freelancer que entrega tela sem estrutura.
      </p>
      <ul className="list-disc pl-5">
        {PAINS.map((pain) => (
          <li key={pain}>{pain}</li>
        ))}
      </ul>
    </section>
  );
}
