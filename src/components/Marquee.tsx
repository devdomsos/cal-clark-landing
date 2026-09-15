"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * CSS marquee that only runs while it is on screen. The edge fade is two
 * overlay gradients, not a CSS mask, so the moving row stays on the GPU.
 */
export function Marquee({ children, reverse = false, duration = 70 }: { children: ReactNode; reverse?: boolean; duration?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setRunning(entry!.isIntersecting), { rootMargin: "100px 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative flex overflow-hidden">
      <div
        className={`flex w-max gap-4 pr-4 will-change-transform ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
        style={{ ["--marquee-duration" as string]: `${duration}s`, animationPlayState: running ? "running" : "paused" }}
      >
        {children}
        {children}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-background to-transparent sm:w-24" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-background to-transparent sm:w-24" aria-hidden="true" />
    </div>
  );
}
