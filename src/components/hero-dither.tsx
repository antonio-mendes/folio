/**
 * Dark Bayer stipple. CSS only — WebGL and canvas both failed to paint
 * reliably in this environment.
 */
export function HeroDither() {
  return (
    <div
      className="hero-dither pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <div className="hero-dither__paper absolute inset-0" />
      <div className="hero-dither__ink absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
    </div>
  );
}
