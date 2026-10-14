import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-10 bg-background">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-4 py-3">
        <Image
          src="/logo.png"
          alt="Rafael Coelho"
          width={64}
          height={64}
          className="size-16 shrink-0 object-contain"
        />
        <Button
          type="button"
          className="bg-cta text-cta-foreground hover:bg-cta/90"
        >
          Falar no WhatsApp
        </Button>
      </div>
    </header>
  );
}
