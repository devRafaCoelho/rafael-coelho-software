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

function Portrait({ alt, className = "" }: { alt: string; className?: string }) {
  return (
    <div
      className={`absolute -top-[18%] -left-[9%] h-[118%] w-[118%] ${className}`}
    >
      <Image
        src="/retrato.png"
        alt={alt}
        fill
        sizes="(min-width: 1024px) 520px, 90vw"
        className="object-contain"
      />
    </div>
  );
}

export function About() {
  return (
    <Section id="sobre">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative mx-auto w-full max-w-md px-6 pt-16 pb-6">
          <div className="relative aspect-square w-full">
            <div
              aria-hidden
              className="absolute -inset-4 rounded-full border border-white/8"
            />
            <div className="absolute inset-0 overflow-hidden rounded-full border border-white/8 bg-prompt-blue-light">
              <Portrait alt="Rafael Coelho" />
            </div>
            {/* Same image over the circle, cut at the shoulders, so the head breaks out of the top edge. */}
            <Portrait alt="" className="[clip-path:inset(0_0_50%_0)]" />

            <div className="glass absolute top-[66%] -right-6 rounded-2xl px-4 py-3 sm:-right-16">
              <p className="font-display text-2xl font-bold text-ai-green">
                5+ anos
              </p>
              <p className="text-xs text-subtle">em plataformas de missão crítica</p>
            </div>
            <div className="glass absolute bottom-[6%] -left-4 flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-foreground sm:-left-8">
              <span aria-hidden className="size-2 rounded-full bg-ai-green" />
              Energia · Educação · Fintech
            </div>
          </div>
        </div>

        <div>
          <Eyebrow>Sobre</Eyebrow>
          <h2 className="font-display mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Arquitetura de software para empresas que precisam do sistema no ar.
          </h2>
          <p className="mb-6 text-base leading-relaxed text-subtle">
            Eu entendo o problema e entrego a solução. Você fala comigo, sem
            repasse no meio. O foco é operação rodando — não relatório de
            arquitetura para a gaveta.
          </p>
          <p className="mb-8 text-base leading-relaxed text-subtle">
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
                  className="size-4 shrink-0 text-ai-green"
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
