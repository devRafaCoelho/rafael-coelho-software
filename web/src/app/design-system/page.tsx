import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Design system",
};

const swatches = [
  {
    name: "Papel",
    className: "border border-foreground/20 bg-background",
  },
  { name: "Tinta", className: "bg-foreground" },
  { name: "Primária", className: "bg-primary" },
  { name: "CTA", className: "bg-cta" },
];

export default function DesignSystemPage() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-4 py-10">
      <div className="flex flex-col gap-2">
        <h1 className="font-heading text-4xl text-foreground">Título</h1>
        <p className="text-base text-foreground">Texto</p>
      </div>
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {swatches.map((swatch) => (
          <li key={swatch.name} className="flex flex-col gap-2">
            <span
              className={`block h-16 rounded-lg ${swatch.className}`}
              aria-hidden
            />
            <span className="text-sm">{swatch.name}</span>
          </li>
        ))}
      </ul>
      <Button className="w-fit bg-cta text-cta-foreground hover:bg-cta/90">
        CTA
      </Button>
      <Card>
        <CardHeader>
          <CardTitle>Card</CardTitle>
        </CardHeader>
        <CardContent>Neutro</CardContent>
      </Card>
    </main>
  );
}
