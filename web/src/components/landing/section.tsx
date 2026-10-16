import type { ReactNode } from "react";

export function Section({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={className}>
      <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-24">
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
    <p
      className={`text-xs font-medium tracking-[0.18em] text-foreground/45 uppercase ${className}`}
    >
      {children}
    </p>
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
      className={`rounded-2xl border border-foreground/8 bg-surface p-6 shadow-[var(--shadow-card)] transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card-hover)] md:p-7 ${className}`}
    >
      {children}
    </div>
  );
}
