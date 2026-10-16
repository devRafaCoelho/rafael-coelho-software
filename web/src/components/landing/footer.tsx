import { Mark } from "@/components/landing/mark";
import { whatsappUrl } from "@/lib/lead";

const LINKS = [
  { href: "#servicos", label: "Serviços" },
  { href: "#como-ajudo", label: "Como ajudo" },
  { href: "#casos", label: "Casos de uso" },
  { href: "#sobre", label: "Sobre" },
  { href: "#diferenciais", label: "Diferenciais" },
];

export function Footer() {
  return (
    <footer className="border-t border-foreground/8 bg-background">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-12 md:grid-cols-[1.2fr_1fr_1fr] md:px-8">
        <div>
          <div className="flex items-center gap-2.5">
            <Mark className="size-9 text-graphite" />
            <p className="text-sm font-semibold">Rafael Coelho</p>
          </div>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-foreground/60">
            Arquitetura de software orientada a IA.
          </p>
        </div>
        <nav className="flex flex-col gap-2 text-sm">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-foreground/65 transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <nav className="flex flex-col gap-2 text-sm">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/65 transition-colors hover:text-foreground"
          >
            Falar no WhatsApp
          </a>
          <a
            href="https://www.linkedin.com/in/rafael-coelho-63b75010b/"
            className="text-foreground/65 transition-colors hover:text-foreground"
          >
            LinkedIn
          </a>
          <a
            href="/privacidade"
            className="text-foreground/65 transition-colors hover:text-foreground"
          >
            Política de privacidade
          </a>
        </nav>
      </div>
    </footer>
  );
}
