import { Mark } from "@/components/landing/mark";

const NODES = [
  { label: "API", x: "8%", y: "18%" },
  { label: "Dados", x: "72%", y: "14%" },
  { label: "Cloud", x: "78%", y: "62%" },
  { label: "App", x: "12%", y: "68%" },
  { label: "IA", x: "42%", y: "78%" },
];

export function HeroVisual() {
  return (
    <div className="glass glow-lime overflow-hidden rounded-3xl p-3 sm:p-4">
      <div
        className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-graphite"
        role="img"
        aria-label="Arquitetura de software com inteligência artificial no centro da operação"
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(rgba(182,255,46,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(182,255,46,0.12) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div
          aria-hidden
          className="absolute top-1/2 left-1/2 size-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime/25 blur-3xl"
        />
        <div className="absolute top-1/2 left-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2">
          <Mark className="size-16 text-lime sm:size-20" />
          <span className="rounded-full border border-lime/40 bg-graphite/80 px-3 py-1 text-[11px] font-semibold tracking-wide text-lime uppercase">
            Núcleo
          </span>
        </div>
        {NODES.map((node) => (
          <div
            key={node.label}
            className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
            style={{ left: node.x, top: node.y }}
          >
            <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/10 px-2.5 py-1.5 text-xs font-medium text-primary-foreground backdrop-blur-sm">
              <span className="size-1.5 rounded-full bg-lime" />
              {node.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
