import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-10 bg-background">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 px-4 py-3">
        <div className="flex min-w-0 items-center gap-2.5">
          <svg
            aria-hidden
            viewBox="0 0 40 40"
            className="size-9 shrink-0 text-primary"
          >
            <path
              fill="currentColor"
              d="M20 1.8 36.2 11.1v17.8L20 38.2 3.8 28.9V11.1Z"
            />
            <text
              x="20"
              y="26"
              textAnchor="middle"
              fill="#f4f1ea"
              fontSize="16"
              fontFamily="var(--font-newsreader), serif"
            >
              R
            </text>
          </svg>
          <span className="truncate font-heading text-lg text-foreground">
            Rafael Coelho
          </span>
        </div>
        <Button
          type="button"
          className="shrink-0 bg-cta text-cta-foreground hover:bg-cta/90"
        >
          Falar no WhatsApp
        </Button>
      </div>
    </header>
  );
}
