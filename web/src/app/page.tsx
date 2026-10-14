import { MotionSample } from "@/components/motion-sample";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-full flex-col items-start gap-6 p-8">
      <Button>Botão</Button>
      <MotionSample />
    </main>
  );
}
