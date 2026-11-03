"use client";

import { useEffect, useRef } from "react";

// Size of one dither cell in CSS pixels.
const CELL = 3;
const FPS = 30;

// 4×4 Bayer matrix, normalised to (0, 1).
const BAYER = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5].map(
  (n) => (n + 0.5) / 16,
);

// Olive ink at partial opacity, packed as little-endian ABGR for a Uint32Array.
const INK = (150 << 24) | (98 << 16) | (134 << 8) | 109;

/**
 * A slow, ordered-dither interference field that sits behind the top of the page.
 * It brightens around the pointer, pauses offscreen, and holds still for reduced motion.
 */
export function DitherField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let cols = 0;
    let rows = 0;
    let image: ImageData | null = null;
    let pixels: Uint32Array | null = null;
    let pointer = { x: -1e4, y: -1e4 };
    let visible = true;
    let frame = 0;
    let last = 0;

    function resize() {
      const rect = canvas!.getBoundingClientRect();
      cols = Math.max(1, Math.ceil(rect.width / CELL));
      rows = Math.max(1, Math.ceil(rect.height / CELL));
      canvas!.width = cols;
      canvas!.height = rows;
      image = ctx!.createImageData(cols, rows);
      pixels = new Uint32Array(image.data.buffer);
      draw(last);
    }

    function draw(time: number) {
      if (!image || !pixels) return;
      const t = time / 1000;
      const cx = cols * 0.7 + Math.sin(t * 0.13) * cols * 0.15;
      const cy = rows * 0.3;
      const r2 = 34 * 34;

      for (let y = 0; y < rows; y++) {
        const fade = (1 - y / rows) ** 2;
        for (let x = 0; x < cols; x++) {
          const wave =
            Math.sin(x * 0.045 + t * 0.5) +
            Math.sin(y * 0.08 - t * 0.35) +
            Math.sin((x + y) * 0.028 + t * 0.25) +
            Math.sin(Math.hypot(x - cx, y - cy) * 0.09 - t * 0.8);
          const dx = x - pointer.x;
          const dy = y - pointer.y;
          const glow = 0.55 * Math.exp(-(dx * dx + dy * dy) / r2);
          // Push the waves towards solid and empty so they read as shapes, not grey.
          const s = Math.min(1, Math.max(0, wave / 2.4 + 0.5));
          const value = s * s * (3 - 2 * s) * fade + glow;
          pixels[y * cols + x] = value > BAYER[(y & 3) * 4 + (x & 3)] ? INK : 0;
        }
      }
      ctx!.putImageData(image, 0, 0);
    }

    function loop(time: number) {
      frame = requestAnimationFrame(loop);
      if (!visible || time - last < 1000 / FPS) return;
      last = time;
      draw(time);
    }

    function onPointerMove(event: PointerEvent) {
      const rect = canvas!.getBoundingClientRect();
      pointer = {
        x: (event.clientX - rect.left) / CELL,
        y: (event.clientY - rect.top) / CELL,
      };
    }

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    resize();

    if (still) return () => resizeObserver.disconnect();

    const intersectionObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    intersectionObserver.observe(canvas);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    frame = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[30rem] w-full [image-rendering:pixelated] [mask-image:linear-gradient(to_bottom,black_30%,transparent_90%)] sm:h-[34rem]"
    />
  );
}
