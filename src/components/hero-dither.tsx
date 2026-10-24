"use client";

import { useEffect, useRef } from "react";

/** Bayer 4×4 threshold matrix (0–15). */
const BAYER_4 = [
  [0, 8, 2, 10],
  [12, 4, 14, 6],
  [3, 11, 1, 9],
  [15, 7, 13, 5],
] as const;

/**
 * Subtle animated Bayer dither for the hero.
 * Canvas 2D (not WebGL) so it renders reliably in constrained browsers.
 */
export function HeroDither() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const paper = { r: 216, g: 222, b: 230 };
    const ink = { r: 15, g: 79, b: 92 };
    const cell = 3;
    let frame = 0;
    let raf = 0;
    let running = true;
    let cssW = 0;
    let cssH = 0;
    let nextPaint = 0;
    const off = document.createElement("canvas");
    const offCtx = off.getContext("2d", { alpha: false });
    if (!offCtx) return;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const { width, height } = parent.getBoundingClientRect();
      cssW = width;
      cssH = height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (now: number) => {
      if (!running) return;
      // ~24fps is enough for a slow drift
      if (now >= nextPaint) {
        nextPaint = now + 1000 / 24;

        if (cssW >= 1 && cssH >= 1) {
          const cols = Math.ceil(cssW / cell);
          const rows = Math.ceil(cssH / cell);
          if (off.width !== cols || off.height !== rows) {
            off.width = cols;
            off.height = rows;
          }

          const image = offCtx.createImageData(cols, rows);
          const data = image.data;
          const t = frame * 0.035;

          for (let y = 0; y < rows; y++) {
            for (let x = 0; x < cols; x++) {
              const nx = x / cols - 0.5;
              const ny = y / rows - 0.55;
              const driftX = Math.sin(t * 0.7) * 0.08;
              const driftY = Math.cos(t * 0.55) * 0.05;
              const dist = Math.hypot(nx - driftX, ny * 1.15 - driftY);
              const field = 1 - Math.min(1, dist * 1.55);
              const threshold = (BAYER_4[y & 3][x & 3] + 0.5) / 16;
              const c = field > threshold ? ink : paper;
              const i = (y * cols + x) * 4;
              data[i] = c.r;
              data[i + 1] = c.g;
              data[i + 2] = c.b;
              data[i + 3] = 255;
            }
          }

          offCtx.putImageData(image, 0, 0);
          ctx.imageSmoothingEnabled = false;
          ctx.drawImage(off, 0, 0, cssW, cssH);
          frame += 1;
        }
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    const ro = new ResizeObserver(resize);
    if (canvas.parentElement) ro.observe(canvas.parentElement);
    raf = requestAnimationFrame(draw);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/90" />
    </div>
  );
}
