import type { Metadata } from "next";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { whatsappUrl } from "@/lib/lead";

export const metadata: Metadata = {
  title: "Política de privacidade",
};

export default function PrivacidadePage() {
  return (
    <>
      <Header />
      <main className="mx-auto flex w-full max-w-3xl flex-col gap-4 px-4 pt-24 pb-10">
        <h1 className="font-heading text-3xl text-balance">
          Política de privacidade
        </h1>
        <p>
          O formulário deste site coleta nome, empresa, e-mail, WhatsApp,
          mensagem e faixa de orçamento, além do registro de que você concordou
          em ser contatado.
        </p>
        <p>
          Eu uso esses dados para responder o seu pedido. Não vendo esses
          dados.
        </p>
        <p>
          O botão Falar no WhatsApp abre uma conversa fora deste site, no
          WhatsApp, com uma mensagem pronta.
        </p>
        <p>
          Se a medição do site estiver ligada, ela registra o clique no
          WhatsApp, o envio do formulário e a profundidade da leitura. Esses
          eventos não levam nome, e-mail nem telefone.
        </p>
        <p>
          Para pedir a exclusão desses dados, fale no{" "}
          <a
            href={whatsappUrl}
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
          .
        </p>
      </main>
      <Footer />
    </>
  );
}
