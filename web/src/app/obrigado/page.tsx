import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { WhatsAppLink } from "@/components/landing/whatsapp-link";

export default function ObrigadoPage() {
  return (
    <>
      <Header />
      <main className="mx-auto flex w-full max-w-6xl flex-col px-5 pt-28 pb-20 md:px-8">
        <h1 className="max-w-3xl text-4xl leading-tight font-semibold text-balance md:text-5xl">
          Pedido recebido. Vou responder em seguida.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/70">
          Se preferir, a conversa já pode começar no WhatsApp.
        </p>
        <WhatsAppLink local="obrigado" className="mt-8 h-12 w-fit px-5 text-base" />
      </main>
      <Footer />
    </>
  );
}
