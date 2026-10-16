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
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative flex justify-center">
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-lime/30 to-graphite/10 blur-2xl"
            />
            <div className="glass relative rounded-3xl p-8">
              <Image
                src="/logo.png"
                alt="Rafael Coelho"
                width={1024}
                height={1024}
                className="mx-auto h-auto w-full max-w-sm object-contain"
                priority={false}
              />
            </div>
          </div>
        </div>

        <div>
          <Eyebrow>Sobre</Eyebrow>
          <h2 className="font-display mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
            Arquitetura de software para empresas que precisam do sistema no ar.
          </h2>
          <p className="mb-6 text-base leading-relaxed text-foreground/65">
            Eu entendo o problema e entrego a solução. Você fala comigo, sem
            repasse no meio. O foco é operação rodando — não relatório de
            arquitetura para a gaveta.
          </p>
          <p className="mb-8 text-base leading-relaxed text-foreground/65">
            Trajetória em energia, educação e fintech, e produto próprio tirado
            do zero até produção.
          </p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {SKILLS.map((skill) => (
              <li
                key={skill}
                className="flex items-center gap-2 text-sm text-foreground"
              >
                <svg
                  className="size-4 shrink-0 text-[#5a9209]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
