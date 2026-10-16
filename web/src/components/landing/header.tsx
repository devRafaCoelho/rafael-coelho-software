"use client";

import { useState } from "react";
import { Mark } from "@/components/landing/mark";
import { WhatsAppLink } from "@/components/landing/whatsapp-link";

const LINKS = [
  { href: "#servicos", label: "Serviços" },
  { href: "#como-ajudo", label: "Como ajudo" },
  { href: "#casos", label: "Casos de uso" },
  { href: "#sobre", label: "Sobre" },
  { href: "#diferenciais", label: "Diferenciais" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-foreground/8 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 md:px-8">
        <a href="/" className="flex min-w-0 items-center gap-2.5">
          <Mark className="size-9 shrink-0 text-graphite" />
          <span className="text-[15px] leading-none font-semibold tracking-tight">
            Rafael
            <br />
            Coelho
          </span>
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium text-foreground/65 xl:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <WhatsAppLink
            local="header"
            className="hidden h-10 px-3.5 sm:inline-flex"
          />
          <a
            href="#vamos-conversar"
            className="hidden h-10 items-center rounded-xl bg-graphite px-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 md:inline-flex"
          >
            Agendar diagnóstico
          </a>
          <button
            type="button"
            className="inline-flex h-10 items-center rounded-lg border border-foreground/12 px-3 text-sm font-medium xl:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((value) => !value)}
          >
            Menu
          </button>
        </div>
      </div>
      {open ? (
        <nav
          id="menu-mobile"
          className="border-t border-foreground/8 bg-background px-5 py-4 xl:hidden"
        >
          <ul className="flex flex-col gap-3 text-sm font-medium">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-1"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#vamos-conversar"
                className="block py-1"
                onClick={() => setOpen(false)}
              >
                Agendar diagnóstico
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
