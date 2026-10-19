import { Mark } from "@/components/landing/mark";

const NODES = [
  { label: "API", x: "14%", y: "18%" },
  { label: "Dados", x: "80%", y: "16%" },
  { label: "Cloud", x: "84%", y: "64%" },
  { label: "App", x: "16%", y: "70%" },
  { label: "IA", x: "50%", y: "86%" },
];

export function HeroVisual() {
  return (
    <div className="glass glow-green overflow-hidden rounded-3xl p-3 sm:p-4">
      <div
        className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-prompt-blue-deep"
        role="img"
        aria-label="Arquitetura de software com inteligência artificial no centro da operação"
      >
        <svg
          aria-hidden
          className="absolute inset-0 size-full"
          viewBox="0 0 100 75"
          preserveAspectRatio="none"
        >
          {NODES.map((node) => (
            <line
              key={node.label}
              x1="50"
              y1="37.5"
              x2={parseFloat(node.x)}
              y2={(parseFloat(node.y) / 100) * 75}
              stroke="#39ff88"
              strokeOpacity="0.25"
              strokeWidth="0.3"
              strokeDasharray="1.2 1.2"
            />
          ))}
        </svg>
        <div className="absolute top-1/2 left-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2">
          <div className="glow-green flex size-24 items-center justify-center rounded-full border border-ai-green/40 bg-prompt-blue sm:size-28">
            <Mark className="size-14 text-prompt-blue-light sm:size-16" />
          </div>
          <span className="rounded-full border border-ai-green/40 bg-prompt-blue px-3 py-1 text-[11px] font-semibold tracking-wide text-ai-green uppercase">
            Núcleo
          </span>
        </div>
        {NODES.map((node) => (
          <div
            key={node.label}
            className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
            style={{ left: node.x, top: node.y }}
          >
            <span className="glass inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-foreground">
              <span className="size-1.5 rounded-full bg-ai-green" />
              {node.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
