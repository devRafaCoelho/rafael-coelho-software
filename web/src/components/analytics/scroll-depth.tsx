"use client";

import { useEffect, useRef } from "react";
import { scrollMarksToFire, track } from "@/lib/analytics";

export function ScrollDepth() {
  const fired = useRef<number[]>([]);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max <= 0 ? 1 : window.scrollY / max;
      for (const percent of scrollMarksToFire(ratio, fired.current)) {
        fired.current.push(percent);
        track({ event: "scroll_depth", percent });
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
