import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/lead";

const CLIENTS = ["Neoenergia", "Brivia", "Auren"];

export function Hero() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-4 py-10">
      <h1 className="font-heading text-4xl text-balance">
        Transforme o que trava na sua operação com inteligência artificial.
      </h1>
      <p>
        Você fala direto com quem entende o problema e constrói a solução. Sem
        repasse no meio e sem gerente de conta traduzindo o pedido.
      </p>
      <Button
        asChild
        className="w-fit bg-cta text-cta-foreground hover:bg-cta/90"
      >
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          Falar no WhatsApp
        </a>
      </Button>
      <ul className="grid grid-cols-3 gap-3">
        {CLIENTS.map((name) => (
          <li
            key={name}
            className="border border-foreground/20 px-3 py-4 text-center text-sm"
          >
            {name}
          </li>
        ))}
      </ul>
    </section>
  );
}
