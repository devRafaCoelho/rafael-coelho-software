import type { ReactNode } from "react";

export function Section({
  id,
  className = "",
  children,
  ambient = true,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
  ambient?: boolean;
}) {
  return (
    <section id={id} className={`relative ${className}`}>
      {ambient ? (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute -top-0 -left-1/4 h-[420px] w-[420px] rounded-full bg-lime/15 blur-[110px]" />
          <div className="absolute top-1/3 -right-1/4 h-[360px] w-[360px] rounded-full bg-graphite/5 blur-[100px]" />
          <div className="grid-bg absolute inset-0 opacity-60" />
        </div>
      ) : null}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        {children}
      </div>
    </section>
  );
}

export function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`mb-3 inline-block text-sm font-semibold tracking-widest text-[#5a9209] uppercase ${className}`}
    >
      {children}
    </span>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
}) {
  return (
    <div
      className={`mb-12 max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-foreground/65 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function SectionTitle({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`font-display mt-3 max-w-3xl text-3xl leading-tight font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl ${className}`}
    >
      {children}
    </h2>
  );
}

export function CardShell({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`glass rounded-2xl p-6 transition-colors duration-300 hover:border-lime/40 ${className}`}
    >
      {children}
    </div>
  );
}
