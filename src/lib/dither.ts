// Shared pieces of the site's ordered-dither look.

/** Size of one dither cell in CSS pixels. */
export const CELL = 3;

/** 4×4 Bayer matrix, normalised to (0, 1). */
export const BAYER = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5].map(
  (n) => (n + 0.5) / 16,
);

/** Olive ink at partial opacity, packed as little-endian ABGR for a Uint32Array. */
export const INK = (150 << 24) | (98 << 16) | (134 << 8) | 109;

export function threshold(x: number, y: number) {
  return BAYER[(y & 3) * 4 + (x & 3)];
}

/** Cheap integer hash to (0, 1), used for static-like noise. */
export function hash(x: number, y: number, seed: number) {
  let h = (x * 374761393 + y * 668265263 + seed * 2246822519) | 0;
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
}

export const easeInOut = (p: number) =>
  p < 0.5 ? 4 * p * p * p : 1 - (-2 * p + 2) ** 3 / 2;

export const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
