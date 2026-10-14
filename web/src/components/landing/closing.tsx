import { LeadForm } from "@/components/landing/lead-form";
import { WhatsAppLink } from "@/components/landing/whatsapp-link";

export function Closing() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-col gap-4 px-4 py-10">
      <h2 className="font-heading text-3xl text-balance">
        Transforme o que trava na sua operação com inteligência artificial.
      </h2>
      <LeadForm />
      <WhatsAppLink
        local="fechamento"
        className="w-fit bg-cta text-cta-foreground hover:bg-cta/90"
      />
    </section>
  );
}
