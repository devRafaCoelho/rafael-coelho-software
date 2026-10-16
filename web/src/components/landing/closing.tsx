import { LeadForm } from "@/components/landing/lead-form";
import { WhatsAppLink } from "@/components/landing/whatsapp-link";

export function Closing() {
  return (
    <section id="vamos-conversar" className="bg-graphite text-primary-foreground">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[1fr_1.05fr] lg:items-start">
        <div className="lg:sticky lg:top-24">
          <p className="text-xs font-semibold tracking-[0.18em] text-primary-foreground/45 uppercase">
            Vamos conversar
          </p>
          <h2 className="font-display mt-4 text-4xl leading-tight font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Pronto para transformar sua{" "}
            <span className="text-gradient-lime">operação</span>?
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-primary-foreground/70">
            Agende um diagnóstico ou fale no WhatsApp. Eu entendo o cenário e
            digo o próximo passo.
          </p>
          <WhatsAppLink
            local="fechamento"
            className="mt-8 h-12 w-fit px-5 text-base"
          />
        </div>
        <div className="rounded-3xl bg-surface p-6 text-foreground shadow-[0_24px_60px_rgba(0,0,0,0.28)] md:p-8">
          <LeadForm />
        </div>
      </div>
    </section>
  );
}
