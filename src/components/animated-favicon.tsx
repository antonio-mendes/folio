"use client";

import { useEffect } from "react";
import { BAYER } from "@/lib/dither";

const GRID = 8;
const CELL_PX = 4;
const SIZE = GRID * CELL_PX;
const FRAME_MS = 140;
const PAPER = "#f3eee0";
const INK = "#586e4e";

/** Draws one frame: a diagonal wave resolved through the Bayer matrix. */
function drawFrame(ctx: CanvasRenderingContext2D, t: number) {
  ctx.clearRect(0, 0, SIZE, SIZE);
  ctx.fillStyle = PAPER;
  ctx.fillRect(0, 0, SIZE, SIZE);
  ctx.fillStyle = INK;
  for (let y = 0; y < GRID; y++) {
    for (let x = 0; x < GRID; x++) {
      const v = 0.5 + 0.5 * Math.sin((x + y) * 0.75 - t);
      if (v > BAYER[(y & 3) * 4 + (x & 3)]) {
        ctx.fillRect(x * CELL_PX, y * CELL_PX, CELL_PX, CELL_PX);
      }
    }
  }
}

export function AnimatedFavicon() {
  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.width = canvas.height = SIZE;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const links = Array.from(
      document.head.querySelectorAll<HTMLLinkElement>('link[rel~="icon"]'),
    );
    if (links.length === 0) {
      const link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
      links.push(link);
    }
    const original = links.map((l) => [l.href, l.type, l.sizes.value] as const);

    const apply = (t: number) => {
      drawFrame(ctx, t);
      const url = canvas.toDataURL("image/png");
      document.head
        .querySelectorAll<HTMLLinkElement>('link[rel~="icon"]')
        .forEach((l) => {
          l.type = "image/png";
          l.setAttribute("sizes", `${SIZE}x${SIZE}`);
          l.href = url;
        });
    };

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer: number | undefined;
    const start = performance.now();
    const stop = () => window.clearInterval(timer);
    const run = () => {
      stop();
      apply(0);
      if (reduced.matches || document.hidden) return;
      timer = window.setInterval(
        () => apply(((performance.now() - start) / 1000) * 3),
        FRAME_MS,
      );
    };

    run();
    document.addEventListener("visibilitychange", run);
    reduced.addEventListener("change", run);
    return () => {
      stop();
      document.removeEventListener("visibilitychange", run);
      reduced.removeEventListener("change", run);
      links.forEach((l, i) => {
        l.href = original[i][0];
        l.type = original[i][1];
        l.setAttribute("sizes", original[i][2]);
      });
    };
  }, []);

  return null;
}
