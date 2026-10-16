export const siteName = "Rafael Coelho — Arquitetura de Software";

export const siteDescription =
  "Arquitetura de software orientada a IA. Você fala direto com quem entende o problema e constrói a solução.";

export function siteUrl(): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (configured) return configured;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
}

export function professionalServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteName,
    description: siteDescription,
    url: siteUrl(),
    areaServed: "BR",
  };
}
