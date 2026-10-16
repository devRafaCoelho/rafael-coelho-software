import Image from "next/image";
import { Eyebrow, Section } from "@/components/landing/section";

const SKILLS = [
  "Arquitetura de software e sistemas em produção",
  "Inteligência artificial no fluxo de entrega",
  "Integração de APIs, ERPs e dados",
  "Cloud e deploy previsível",
  "Produto próprio do zero até as lojas",
  "Comunicação direta com quem decide",
];

export function About() {
  return (
    <Section id="sobre">
      <div className="grid items-center gap-10 lg:grid-cols-[18rem_1fr] lg:gap-14">
        <div className="overflow-hidden rounded-3xl border border-foreground/8 shadow-[var(--shadow-card)]">
          <Image
            src="/sobre.png"
            alt="Rafael Coelho"
            width={288}
            height={288}
            className="aspect-square w-full object-cover"
          />
        </div>
        <div>
          <Eyebrow>Sobre</Eyebrow>
          <h2 className="font-display mt-3 text-3xl leading-tight font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
            Arquitetura de software para empresas que precisam do sistema no ar.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-foreground/70 md:text-lg">
            Eu entendo o problema e entrego a solução. Você fala comigo, sem
            repasse no meio. O foco é operação rodando — não relatório de
            arquitetura para a gaveta.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/70 md:text-lg">
            Trajetória em energia, educação e fintech, e produto próprio tirado
            do zero até produção.
          </p>
          <ul className="mt-8 grid gap-2.5 sm:grid-cols-2">
            {SKILLS.map((skill) => (
              <li
                key={skill}
                className="flex items-start gap-2.5 text-sm text-foreground/75"
              >
                <span
                  aria-hidden
                  className="mt-1.5 size-2 shrink-0 rounded-full bg-lime"
                />
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
