"use client";

import { Dithering } from "@paper-design/shaders-react";

export function HeroDither() {
  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      <Dithering
        className="h-full w-full"
        colorBack="#e6eaef"
        colorFront="#1a4d5c"
        shape="simplex"
        type="4x4"
        size={3.2}
        speed={0.35}
        scale={1.1}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
    </div>
  );
}
