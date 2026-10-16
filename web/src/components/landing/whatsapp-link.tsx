"use client";

import { Button } from "@/components/ui/button";
import { track, type WhatsAppLocal } from "@/lib/analytics";
import { whatsappUrl } from "@/lib/lead";

export function WhatsAppLink({
  local,
  className,
}: {
  local: WhatsAppLocal;
  className?: string;
}) {
  return (
    <Button
      asChild
      className={`rounded-xl bg-cta text-cta-foreground hover:bg-cta/90 ${className ?? ""}`}
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => track({ event: "whatsapp_click", local })}
      >
        Falar no WhatsApp
      </a>
    </Button>
  );
}
