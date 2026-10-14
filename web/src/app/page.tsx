import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Pain } from "@/components/landing/pain";
import { Pillars } from "@/components/landing/pillars";
import { Process } from "@/components/landing/process";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Pain />
      <Pillars />
      <Process />
    </main>
  );
}
