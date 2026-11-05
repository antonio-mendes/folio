const INK = "#111111";
const ACID = "#ffe14a";
const WHITE = "#ffffff";
const POP = "#ff4d6a";

/**
 * Olhamisto's 16×16 pixel eye, the same pixels as the app's mascot. It is drawn inline
 * so the lid and pupil can move; the animation lives in globals.css (.olhamisto-eye).
 */
export function OlhamistoEye({ size, className = "" }: { size: number; className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      shapeRendering="crispEdges"
      aria-hidden="true"
      className={`olhamisto-eye ${className}`}
    >
      <rect x="0" y="0" width="16" height="16" fill={INK} />
      <rect x="1" y="1" width="14" height="14" fill={ACID} />
      <rect x="3" y="2" width="10" height="1" fill={WHITE} />
      <rect x="2" y="3" width="12" height="5" fill={WHITE} />
      <rect x="3" y="8" width="10" height="1" fill={WHITE} />
      <g className="eye-pupil">
        <rect x="8" y="4" width="4" height="1" fill={INK} />
        <rect x="8" y="5" width="2" height="1" fill={INK} />
        <rect x="11" y="5" width="1" height="1" fill={INK} />
        <rect x="8" y="6" width="4" height="1" fill={INK} />
      </g>
      <g className="eye-lid-half" opacity="0">
        <rect x="3" y="2" width="10" height="1" fill={ACID} />
        <rect x="2" y="3" width="12" height="1" fill={ACID} />
        <rect x="2" y="4" width="12" height="1" fill={INK} />
      </g>
      <g className="eye-lid" opacity="0">
        <rect x="3" y="2" width="10" height="1" fill={ACID} />
        <rect x="2" y="3" width="12" height="5" fill={ACID} />
        <rect x="3" y="8" width="10" height="1" fill={ACID} />
        <rect x="2" y="5" width="12" height="1" fill={INK} />
      </g>
      <rect x="6" y="10" width="4" height="1" fill={INK} />
      <rect x="2" y="11" width="2" height="1" fill={POP} />
      <rect x="12" y="11" width="2" height="1" fill={POP} />
    </svg>
  );
}
