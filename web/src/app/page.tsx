import { ScrollDepth } from "@/components/analytics/scroll-depth";
import { About } from "@/components/landing/about";
import { Closing } from "@/components/landing/closing";
import { Differentials } from "@/components/landing/differentials";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { Help } from "@/components/landing/help";
import { Hero } from "@/components/landing/hero";
import { Reveal } from "@/components/landing/reveal";
import { Services } from "@/components/landing/services";
import { Stack } from "@/components/landing/stack";
import { UseCases } from "@/components/landing/use-cases";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Reveal>
        <Services />
      </Reveal>
      <Reveal>
        <Help />
      </Reveal>
      <Reveal>
        <UseCases />
      </Reveal>
      <Reveal>
        <Stack />
      </Reveal>
      <Reveal>
        <About />
      </Reveal>
      <Reveal>
        <Differentials />
      </Reveal>
      <Reveal>
        <Closing />
      </Reveal>
      <Footer />
      <ScrollDepth />
    </main>
  );
}
