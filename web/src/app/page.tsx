import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Pain } from "@/components/landing/pain";
import { Pillars } from "@/components/landing/pillars";
import { Process } from "@/components/landing/process";
import { Reveal } from "@/components/landing/reveal";

export default function Home() {
  return (
    <main className="pt-20">
      <Header />
      <Hero />
      <Reveal>
        <Pain />
      </Reveal>
      <Reveal>
        <Pillars />
      </Reveal>
      <Reveal>
        <Process />
      </Reveal>
    </main>
  );
}
