import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { GoogleTagManager } from "@/components/analytics/google-tag-manager";
import {
  professionalServiceJsonLd,
  siteDescription,
  siteName,
  siteUrl,
} from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: siteName,
  description: siteDescription,
  openGraph: {
    title: siteName,
    description: siteDescription,
    siteName: "Rafael Coelho",
    locale: "pt_BR",
    type: "website",
    url: siteUrl(),
    images: [
      {
        url: "/og-image.png",
        type: "image/png",
        width: 600,
        height: 600,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: siteName,
    description: siteDescription,
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <GoogleTagManager />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(professionalServiceJsonLd()),
          }}
        />
        {children}
      </body>
    </html>
  );
}
