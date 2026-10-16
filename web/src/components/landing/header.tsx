"use client";

import { useState } from "react";
import { Mark } from "@/components/landing/mark";

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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-foreground/8 bg-background/95 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center gap-3">
          <Mark className="size-10 shrink-0 text-graphite" />
          <span className="font-display hidden text-sm font-bold sm:block">
            Rafael Coelho
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-foreground/55 transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href="#vamos-conversar"
            className="glow-lime inline-flex items-center justify-center rounded-xl border border-lime/50 bg-lime px-4 py-2 text-xs font-semibold text-cta-foreground transition-colors hover:bg-lime/90"
          >
            Agendar Diagnóstico
          </a>
        </div>

        <button
          type="button"
          className="glass relative z-50 flex size-10 items-center justify-center rounded-lg md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-5 bg-foreground transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-foreground transition-opacity ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-foreground transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </nav>

      {open ? (
        <div
          id="menu-mobile"
          className="glass mx-4 rounded-2xl p-4 md:hidden"
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
                className="glow-lime mt-1 inline-flex rounded-xl border border-lime/50 bg-lime px-4 py-2 text-xs font-semibold text-cta-foreground"
                onClick={() => setOpen(false)}
              >
                Agendar Diagnóstico
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
