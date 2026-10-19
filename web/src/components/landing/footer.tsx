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
    <footer className="relative border-t border-white/10 bg-prompt-blue">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex items-center gap-3">
            <Mark className="size-12 text-prompt-blue-light" />
            <div>
              <p className="font-display font-bold text-foreground">
                Rafael Coelho
              </p>
              <p className="text-sm text-subtle">
                Arquitetura de software orientada a IA
              </p>
            </div>
          </div>

          <nav aria-label="Links do rodapé">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-subtle transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-2 text-sm">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ai-green transition-colors hover:text-ai-green/80"
            >
              Falar no WhatsApp
            </a>
            <a
              href="https://www.linkedin.com/in/rafael-coelho-63b75010b/"
              className="text-subtle transition-colors hover:text-foreground"
            >
              LinkedIn
            </a>
            <a
              href="/privacidade"
              className="text-subtle transition-colors hover:text-foreground"
            >
              Política de privacidade
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-subtle">
          © 2026 Rafael Coelho. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
