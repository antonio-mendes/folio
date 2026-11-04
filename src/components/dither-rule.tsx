"use client";

import { useEffect, useRef } from "react";
import { CELL, INK, clamp01, threshold } from "@/lib/dither";

const ROWS = 2;
const DURATION = 900;

/**
 * A section divider drawn in the same ordered dither as the header field. It is dense on
 * the left and thins out to nothing, and draws itself left to right the first time it is seen.
 */
export function DitherRule({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let progress = still ? 1 : 0;
    let frame = 0;

    function draw() {
      const cols = Math.max(1, Math.ceil(canvas!.getBoundingClientRect().width / CELL));
      if (canvas!.width !== cols) canvas!.width = cols;
      canvas!.height = ROWS;
      const image = ctx!.createImageData(cols, ROWS);
      const pixels = new Uint32Array(image.data.buffer);
      for (let y = 0; y < ROWS; y++) {
        for (let x = 0; x < cols; x++) {
          const u = x / cols;
          const density = 0.72 * (1 - u) ** 1.4 + 0.04;
          // The reveal edge is itself dithered, so it reads as ink soaking in.
          const front = clamp01((progress * 1.25 - u) * 6);
          pixels[y * cols + x] = density * front > threshold(x, y + 1) ? INK : 0;
        }
      }
      ctx!.putImageData(image, 0, 0);
    }

    const resizeObserver = new ResizeObserver(draw);
    resizeObserver.observe(canvas);
    draw();
    if (still) return () => resizeObserver.disconnect();

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        intersectionObserver.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          progress = clamp01((now - start) / DURATION);
          draw();
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    intersectionObserver.observe(canvas);

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      style={{ height: ROWS * CELL }}
      className={`block w-full [image-rendering:pixelated] ${className}`}
    />
  );
}
