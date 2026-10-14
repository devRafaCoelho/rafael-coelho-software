import type { Metadata } from "next";
import { Newsreader, Source_Sans_3 } from "next/font/google";
import { GoogleTagManager } from "@/components/analytics/google-tag-manager";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rafael Coelho — Arquitetura de Software",
  description:
    "Você fala direto com quem entende o problema e constrói a solução. Sem repasse no meio e sem gerente de conta traduzindo o pedido.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${newsreader.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <GoogleTagManager />
        {children}
      </body>
    </html>
  );
}
