import { LeadForm } from "@/components/landing/lead-form";
import { Eyebrow } from "@/components/landing/section";
import { WhatsAppLink } from "@/components/landing/whatsapp-link";

export function Closing() {
  return (
    <section id="vamos-conversar" className="relative">
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="glass glow-green relative overflow-hidden rounded-3xl px-5 py-10 sm:px-12 sm:py-16">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-start">
            <div className="lg:sticky lg:top-24">
              <Eyebrow className="mb-4">Vamos conversar</Eyebrow>
              <h2 className="font-display mb-4 max-w-2xl text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl lg:text-5xl">
                Pronto para transformar sua{" "}
                <span className="text-ai-green">operação</span>?
              </h2>
              <p className="mb-8 max-w-md text-base leading-relaxed text-subtle sm:text-lg">
                Agende um diagnóstico ou fale no WhatsApp. Eu entendo o cenário
                e digo o próximo passo.
              </p>
              <WhatsAppLink
                local="fechamento"
                variant="secondary"
                className="w-full sm:w-fit"
              />
            </div>
            <div className="sm:rounded-2xl sm:border sm:border-white/8 sm:bg-prompt-blue sm:p-6 md:p-8">
              <LeadForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
