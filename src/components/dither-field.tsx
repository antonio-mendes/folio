"use client";

import { useEffect, useRef } from "react";
import { CELL, INK, clamp01, easeInOut, hash, threshold } from "@/lib/dither";

const FPS = 30;
// Seconds the field takes to settle from static into waves.
const SETTLE = 1.8;
// Radius of the pointer lens, in cells.
const LENS = 26;

type Placement = "top" | "bottom";

const placementClass: Record<Placement, string> = {
  top: "top-0 h-[30rem] sm:h-[34rem] [mask-image:linear-gradient(to_bottom,black_30%,transparent_90%)]",
  bottom:
    "bottom-0 h-[11rem] sm:h-[13rem] [mask-image:linear-gradient(to_top,black_20%,transparent_95%)]",
};

/**
 * A slow, ordered-dither interference field. It starts as static and settles into waves
 * the first time it is seen (noise into signal). An inverting lens follows the pointer.
 * It pauses offscreen and draws its settled state once for reduced motion.
 */
export function DitherField({ placement = "top" }: { placement?: Placement }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const top = placement === "top";
    let cols = 0;
    let rows = 0;
    let image: ImageData | null = null;
    let pixels: Uint32Array | null = null;
    let target = { x: -1e4, y: -1e4 };
    const lens = { x: -1e4, y: -1e4, r: 0 };
    let visible = false;
    let started: number | null = still ? -1e6 : null;
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
      // 0 = pure static, 1 = settled waves.
      const settle = started === null ? 0 : easeInOut(clamp01((time - started) / 1000 / SETTLE));
      // Overall ink builds up during the first part of the settle.
      const density = started === null ? 0 : clamp01((time - started) / 1000 / 0.5);
      const seed = Math.floor(t * 12);
      const cx = cols * (top ? 0.7 : 0.3) + Math.sin(t * 0.13) * cols * 0.15;
      const cy = rows * (top ? 0.3 : 0.75);
      const lr = lens.r;
      const lr2 = lr * lr;

      for (let y = 0; y < rows; y++) {
        const fade = (top ? 1 - y / rows : y / rows) ** 2;
        for (let x = 0; x < cols; x++) {
          const wave =
            Math.sin(x * 0.045 + t * 0.5) +
            Math.sin(y * 0.08 - t * 0.35) +
            Math.sin((x + y) * 0.028 + t * 0.25) +
            Math.sin(Math.hypot(x - cx, y - cy) * 0.09 - t * 0.8);
          // Push the waves towards solid and empty so they read as shapes, not grey.
          let s = clamp01(wave / 2.4 + 0.5);
          s = s * s * (3 - 2 * s);
          if (settle < 1) s = s * settle + hash(x, y, seed) * 0.8 * (1 - settle);

          let value = s * fade * density;
          if (lr > 0.5) {
            const dx = x - lens.x;
            const dy = y - lens.y;
            const d2 = dx * dx + dy * dy;
            if (d2 < lr2) {
              // Inside the lens the field is inverted: paper becomes ink and ink becomes paper.
              value = (1 - s) * Math.max(fade, 0.35) * density;
              // A thin solid rim.
              if (d2 > (lr - 1.2) * (lr - 1.2)) value = 1;
            }
          }
          pixels[y * cols + x] = value > threshold(x, y) ? INK : 0;
        }
      }
      ctx!.putImageData(image, 0, 0);
    }

    function loop(time: number) {
      frame = requestAnimationFrame(loop);
      if (!visible || time - last < 1000 / FPS) return;
      if (started === null) started = time;
      last = time;
      // Ease the lens towards the pointer and grow it in or out.
      const inside = target.x > -LENS && target.x < cols + LENS && target.y > -LENS && target.y < rows + LENS;
      lens.x += (target.x - lens.x) * (lens.r < 1 ? 1 : 0.25);
      lens.y += (target.y - lens.y) * (lens.r < 1 ? 1 : 0.25);
      lens.r += ((inside ? LENS : 0) - lens.r) * 0.18;
      draw(time);
    }

    function onPointerMove(event: PointerEvent) {
      if (event.pointerType === "touch") return;
      const rect = canvas!.getBoundingClientRect();
      target = {
        x: (event.clientX - rect.left) / CELL,
        y: (event.clientY - rect.top) / CELL,
      };
    }

    function onPointerLeave() {
      target = { x: -1e4, y: -1e4 };
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
    document.documentElement.addEventListener("pointerleave", onPointerLeave);
    frame = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener("pointerleave", onPointerLeave);
    };
  }, [placement]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={`pointer-events-none absolute inset-x-0 -z-10 w-full [image-rendering:pixelated] ${placementClass[placement]}`}
    />
  );
}
