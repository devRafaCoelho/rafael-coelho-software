const gtmIdPattern = /^GTM-[A-Z0-9]+$/;

export function readGtmId(value: string | undefined): string | null {
  if (!value || !gtmIdPattern.test(value)) return null;
  return value;
}

export type WhatsAppLocal = "header" | "hero" | "fechamento" | "obrigado";

export type AnalyticsEvent =
  | { event: "whatsapp_click"; local: WhatsAppLocal }
  | { event: "generate_lead" }
  | { event: "scroll_depth"; percent: 50 | 75 | 100 };

const scrollMarks = [50, 75, 100] as const;

export function scrollMarksToFire(
  ratio: number,
  already: readonly number[],
): Array<(typeof scrollMarks)[number]> {
  if (!Number.isFinite(ratio) || ratio < 0) return [];
  const clamped = Math.min(1, ratio);
  return scrollMarks.filter(
    (mark) => clamped >= mark / 100 && !already.includes(mark),
  );
}

export function track(event: AnalyticsEvent) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(event);
}

declare global {
  interface Window {
    dataLayer?: AnalyticsEvent[];
  }
}
