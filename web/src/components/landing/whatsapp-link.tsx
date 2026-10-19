"use client";

import { track, type WhatsAppLocal } from "@/lib/analytics";
import { whatsappUrl } from "@/lib/lead";

const VARIANTS = {
  primary:
    "glow-green border border-ai-green/50 bg-ai-green text-prompt-blue hover:bg-ai-green/90",
  secondary:
    "glass border border-white/10 text-foreground hover:border-ai-green/40 hover:text-ai-green",
} as const;

export function WhatsAppLink({
  local,
  className,
  variant = "primary",
}: {
  local: WhatsAppLocal;
  className?: string;
  variant?: keyof typeof VARIANTS;
}) {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track({ event: "whatsapp_click", local })}
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-colors duration-200 ${VARIANTS[variant]} ${className ?? ""}`}
    >
      Falar no WhatsApp
    </a>
  );
}
