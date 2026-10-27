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
      <main className="mx-auto flex w-full max-w-3xl flex-col gap-5 px-5 pt-28 pb-20 md:px-8">
        <h1 className="text-4xl leading-tight font-semibold text-balance">
          Política de privacidade
        </h1>
        <p className="text-lg leading-relaxed text-foreground/75">
          O formulário deste site coleta nome, empresa, e-mail, WhatsApp,
          mensagem e faixa de orçamento, além do registro de que você concordou
          em ser contatado.
        </p>
        <p className="text-lg leading-relaxed text-foreground/75">
          Eu uso esses dados para responder o seu pedido. Não vendo esses
          dados.
        </p>
        <p className="text-lg leading-relaxed text-foreground/75">
          O botão Falar no WhatsApp abre uma conversa fora deste site, no
          WhatsApp, com uma mensagem pronta.
        </p>
        <p className="text-lg leading-relaxed text-foreground/75">
          Para entender como o site é usado, ele usa o Google Analytics e o
          Microsoft Clarity, carregados pelo Google Tag Manager. O Google
          Analytics registra visitas, a origem do acesso, o clique no WhatsApp,
          o envio do formulário e a profundidade da leitura. Esses eventos não
          levam nome, e-mail nem telefone.
        </p>
        <p className="text-lg leading-relaxed text-foreground/75">
          O Microsoft Clarity grava de forma anônima como a página é navegada:
          cliques, rolagem e movimento do cursor, para gerar mapas de calor.
          O que você digita no formulário fica mascarado e não aparece nas
          gravações.
        </p>
        <p className="text-lg leading-relaxed text-foreground/75">
          Essas ferramentas usam cookies e identificadores do navegador. Você
          pode bloqueá-los nas configurações do seu navegador sem perder o
          acesso ao site.
        </p>
        <p className="text-lg leading-relaxed text-foreground/75">
          Para pedir a exclusão desses dados, fale no{" "}
          <a
            href={whatsappUrl}
            className="underline underline-offset-4"
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
