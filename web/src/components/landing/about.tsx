import Image from "next/image";

export function About() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-col gap-4 px-4 py-10">
      <Image
        src="/sobre.png"
        alt="Rafael Coelho"
        width={192}
        height={192}
        className="size-48 max-w-full object-cover"
      />
      <p>
        Eu entendo o problema e construo a solução. Você fala comigo, sem
        repasse e sem gerente de conta.
      </p>
      <p>
        Energia, educação e fintech, e produto próprio do zero até produção.
        Arquitetura, IA e experiência no mesmo trabalho.
      </p>
    </section>
  );
}
