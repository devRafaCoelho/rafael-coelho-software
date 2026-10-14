import { WhatsAppLink } from "@/components/landing/whatsapp-link";

export default function ObrigadoPage() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col gap-4 px-4 py-16">
      <h1 className="font-heading text-3xl text-balance">
        Pedido recebido. Vou responder em seguida.
      </h1>
      <p>Se preferir, a conversa já pode começar no WhatsApp.</p>
      <WhatsAppLink
        local="obrigado"
        className="w-fit bg-cta text-cta-foreground hover:bg-cta/90"
      />
    </main>
  );
}
