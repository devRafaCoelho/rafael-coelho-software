"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled || open
          ? "border-white/8 bg-prompt-blue/90 shadow-lg backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Mark className="size-10 shrink-0 text-prompt-blue-light" />
          <span className="font-display text-sm font-bold text-foreground">
            Rafael Coelho
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
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

        <div className="hidden md:block">
          <a
            href="#vamos-conversar"
            className="glow-green inline-flex items-center justify-center rounded-xl border border-ai-green/50 bg-ai-green px-4 py-2 text-xs font-semibold text-prompt-blue transition-colors hover:bg-ai-green/90"
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
          className="border-t border-white/8 px-4 pt-2 pb-6 sm:px-6 md:hidden"
        >
          <ul className="flex flex-col text-base font-medium">
            {LINKS.map((link) => (
              <li key={link.href} className="border-b border-white/8">
                <a
                  href={link.href}
                  className="block py-4 text-subtle transition-colors hover:text-foreground"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-6">
              <a
                href="#vamos-conversar"
                className="glow-green flex w-full items-center justify-center rounded-xl border border-ai-green/50 bg-ai-green px-6 py-3 text-sm font-semibold text-prompt-blue"
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
