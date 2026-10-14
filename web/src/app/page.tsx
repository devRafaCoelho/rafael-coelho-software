import { About } from "@/components/landing/about";
import { AiDifference } from "@/components/landing/ai";
import { Cases } from "@/components/landing/cases";
import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Pain } from "@/components/landing/pain";
import { Pillars } from "@/components/landing/pillars";
import { Process } from "@/components/landing/process";
import { Testimonials } from "@/components/landing/testimonials";
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
      <Reveal>
        <Cases />
      </Reveal>
      <Reveal>
        <AiDifference />
      </Reveal>
      <Reveal>
        <About />
      </Reveal>
      <Reveal>
        <Testimonials />
      </Reveal>
    </main>
  );
}
