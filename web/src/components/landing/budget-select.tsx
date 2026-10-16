"use client";

import { useEffect, useId, useRef, useState } from "react";
import { budgetBands } from "@/lib/lead";

type Budget = (typeof budgetBands)[number];

export function BudgetSelect({
  value,
  onChange,
  onBlur,
  name,
}: {
  value?: Budget;
  onChange: (value: Budget) => void;
  onBlur?: () => void;
  name?: string;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();

  useEffect(() => {
    if (!open) return;
    function onPointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
        onBlur?.();
      }
    }
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        onBlur?.();
      }
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onBlur]);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        name={name}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((current) => !current)}
        onBlur={() => {
          // delay so option click still registers
          window.setTimeout(() => {
            if (!rootRef.current?.contains(document.activeElement)) {
              setOpen(false);
              onBlur?.();
            }
          }, 0);
        }}
        className="flex h-11 w-full items-center justify-between rounded-xl border border-foreground/12 bg-background px-3 pr-5 text-left text-base outline-none transition-colors focus:border-graphite"
      >
        <span className={value ? "text-foreground" : "text-foreground/45"}>
          {value ?? "Selecione a faixa"}
        </span>
        <svg
          aria-hidden
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`size-4 shrink-0 text-foreground/55 transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.17l3.71-3.94a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {open ? (
        <ul
          id={listId}
          role="listbox"
          aria-label="Faixa de orçamento"
          className="absolute z-20 mt-2 w-full overflow-hidden rounded-2xl border border-foreground/10 bg-surface p-1.5 shadow-[0_16px_40px_rgba(35,38,47,0.14)]"
        >
          {budgetBands.map((band) => {
            const selected = value === band;
            return (
              <li key={band} role="option" aria-selected={selected}>
                <button
                  type="button"
                  className={[
                    "flex w-full items-center rounded-xl px-3 py-2.5 text-left text-sm transition-colors",
                    selected
                      ? "bg-lime/35 font-medium text-graphite"
                      : "text-foreground/80 hover:bg-muted-surface",
                  ].join(" ")}
                  onClick={() => {
                    onChange(band);
                    setOpen(false);
                    onBlur?.();
                  }}
                >
                  {band}
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
