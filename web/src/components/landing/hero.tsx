import { HeroVisual } from "@/components/landing/hero-visual";
import { WhatsAppLink } from "@/components/landing/whatsapp-link";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-start overflow-hidden pt-24 lg:items-center lg:pt-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -top-0 -left-1/4 h-[500px] w-[500px] rounded-full bg-lime/20 blur-[120px]" />
        <div className="absolute top-1/3 -right-1/4 h-[400px] w-[400px] rounded-full bg-graphite/5 blur-[100px]" />
        <div className="grid-bg absolute inset-0 opacity-50" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-6">
            <span className="glass inline-flex w-fit items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-[#5a9209]">
              <span className="size-1.5 animate-pulse rounded-full bg-lime" />
              Arquitetura de software orientada a IA
            </span>

            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Transforme o que trava na sua operação com{" "}
              <span className="text-gradient-lime">inteligência artificial</span>.
            </h1>

            <p className="max-w-lg text-base leading-relaxed text-foreground/65 sm:text-lg">
              Arquitetura de software, sistemas em produção e integração para
              empresas que precisam escalar com estrutura. Você fala direto com
              quem entende o problema e entrega a solução.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <a
                href="#vamos-conversar"
                className="glow-lime inline-flex items-center justify-center rounded-xl border border-lime/50 bg-lime px-6 py-3 text-sm font-semibold text-cta-foreground transition-colors hover:bg-lime/90"
              >
                Agendar Diagnóstico
              </a>
              <WhatsAppLink
                local="hero"
                className="glass h-auto border border-foreground/10 bg-transparent px-6 py-3 text-sm font-semibold text-foreground hover:border-lime/40 hover:bg-transparent hover:text-[#5a9209]"
              />
            </div>
          </div>

          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
