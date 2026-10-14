import { Button } from "@/components/ui/button";
import { LeadForm } from "@/components/landing/lead-form";
import { whatsappUrl } from "@/lib/lead";

export function Closing() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-col gap-4 px-4 py-10">
      <h2 className="font-heading text-3xl text-balance">
        Transforme o que trava na sua operação com inteligência artificial.
      </h2>
      <LeadForm />
      <Button
        asChild
        className="w-fit bg-cta text-cta-foreground hover:bg-cta/90"
      >
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          Falar no WhatsApp
        </a>
      </Button>
    </section>
  );
}
