import { HeroVisual } from "@/components/landing/hero-visual";
import { WhatsAppLink } from "@/components/landing/whatsapp-link";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-start overflow-hidden pt-24 lg:items-center lg:pt-20">
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-6">
            <span className="glass inline-flex w-fit items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-ai-green">
              <span className="size-1.5 animate-pulse rounded-full bg-ai-green" />
              Arquitetura de software orientada a IA
            </span>

            <h1 className="font-display text-4xl leading-tight font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Transforme o que trava na sua operação com{" "}
              <span className="text-ai-green">inteligência artificial</span>.
            </h1>

            <p className="max-w-lg text-base leading-relaxed text-subtle sm:text-lg">
              Arquitetura de software, sistemas em produção e integração para
              empresas que precisam escalar com estrutura. Você fala direto com
              quem entende o problema e entrega a solução.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <a
                href="#vamos-conversar"
                className="glow-green inline-flex items-center justify-center gap-2 rounded-xl border border-ai-green/50 bg-ai-green px-6 py-3 text-sm font-semibold text-prompt-blue transition-colors duration-200 hover:bg-ai-green/90"
              >
                Agendar Diagnóstico
              </a>
              <WhatsAppLink local="hero" variant="secondary" />
            </div>
          </div>

          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
