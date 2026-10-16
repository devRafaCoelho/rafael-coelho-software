import { Eyebrow } from "@/components/landing/section";
import { WhatsAppLink } from "@/components/landing/whatsapp-link";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(182,255,46,0.28),transparent_52%),radial-gradient(ellipse_at_bottom_left,rgba(35,38,47,0.06),transparent_48%)]"
      />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col px-5 pt-14 pb-16 md:px-8 md:pt-24 md:pb-20">
        <Eyebrow>Arquitetura de software orientada a IA</Eyebrow>
        <h1 className="font-display mt-5 max-w-4xl text-4xl leading-tight font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
          Transforme o que trava na sua operação com{" "}
          <span className="text-gradient-lime">inteligência artificial</span>.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-foreground/70 md:text-xl">
          Arquitetura de software, sistemas em produção e integração para
          empresas que precisam escalar com estrutura. Você fala direto com quem
          entende o problema e entrega a solução.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#vamos-conversar"
            className="inline-flex h-12 items-center rounded-xl bg-graphite px-5 text-base font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Agendar diagnóstico
          </a>
          <WhatsAppLink local="hero" className="h-12 rounded-xl px-5 text-base" />
        </div>
      </div>
    </section>
  );
}
