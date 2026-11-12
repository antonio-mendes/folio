const INK = "#111111";
const TILE = "#8aa07e";
const BODY = "#f3efe3";
const SHADE = "#c9c3b2";
const KEYS = "#2b2924";
const PRESS = "#ff7a45";

// The handheld's 10×8 screen. Both Landform themes share one dithered hill and
// both Keep themes share one block terrain; only the palette changes.
const LANDFORM = [
  "ccc.....cc",
  "..........",
  "....a.....",
  "...a.a...a",
  "..a.a.a.a.",
  ".a.ababa.a",
  "a.abbbbbab",
  ".abbcccbba",
];

const KEEP = [
  "ccc.....tt",
  "....tt....",
  "....ss....",
  "...1ss1...",
  ".11122111.",
  "1112222111",
  "3311221144",
  "w33311444w",
];

const SCREENS = [
  // Landform Paper
  { map: LANDFORM, colors: { ".": "#f3efe3", a: "#8aa07e", b: "#56704c", c: "#33442d" } },
  // Landform Night
  { map: LANDFORM, colors: { ".": "#161a14", a: "#4f6446", b: "#8aa07e", c: "#efe9d8" } },
  // Keep Sandstone
  {
    map: KEEP,
    colors: {
      ".": "#17130f",
      c: "#f2dcb0",
      t: "#3fa68f",
      s: "#256b5e",
      "1": "#a67c4f",
      "2": "#c98f5a",
      "3": "#7a5b3c",
      "4": "#57432f",
      w: "#24404a",
    },
  },
  // Keep Ember
  {
    map: KEEP,
    colors: {
      ".": "#0b0812",
      c: "#ffe9a8",
      t: "#ffc46b",
      s: "#ff7a45",
      "1": "#e0456a",
      "2": "#ff7a45",
      "3": "#a3308a",
      "4": "#5a2c7e",
      w: "#141a3a",
    },
  },
] as const;

const SCREEN_X = 7;
const SCREEN_Y = 4;

/** One rect per horizontal run of same-coloured pixels. */
function Pixels({ map, colors }: { map: readonly string[]; colors: Record<string, string> }) {
  return map.flatMap((row, y) => {
    const runs = [];
    for (let x = 0; x < row.length; ) {
      let end = x + 1;
      while (end < row.length && row[end] === row[x]) end++;
      runs.push(
        <rect
          key={`${x}-${y}`}
          x={SCREEN_X + x}
          y={SCREEN_Y + y}
          width={end - x}
          height={1}
          fill={colors[row[x]]}
        />,
      );
      x = end;
    }
    return runs;
  });
}

/**
 * A 24×24 pixel Miyoo Mini for the Onion OS themes. Its screen steps through the four
 * themes, and the A button lights up on each switch; the animation lives in globals.css
 * (.onion-handheld).
 */
export function OnionHandheld({ size, className = "" }: { size: number; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      shapeRendering="crispEdges"
      aria-hidden="true"
      className={`onion-handheld ${className}`}
    >
      <rect x="0" y="0" width="24" height="24" fill={INK} />
      <rect x="1" y="1" width="22" height="22" fill={TILE} />

      {/* Body, with a 1px outline and a shaded bottom edge. */}
      <rect x="5" y="2" width="14" height="20" fill={INK} />
      <rect x="4" y="3" width="16" height="18" fill={INK} />
      <rect x="5" y="3" width="14" height="18" fill={BODY} />
      <rect x="5" y="20" width="14" height="1" fill={SHADE} />

      {/* Screen bezel; the first theme sits underneath and the others cover it in turn. */}
      <rect x="6" y="3" width="12" height="10" fill={INK} />
      <Pixels {...SCREENS[0]} />
      {SCREENS.slice(1).map((screen, i) => (
        <g key={i} className={`onion-screen onion-screen-${i + 1}`} opacity="0">
          <Pixels {...screen} />
        </g>
      ))}

      {/* D-pad, A/B/X/Y, Select and Start. */}
      <rect x="7" y="16" width="3" height="1" fill={KEYS} />
      <rect x="8" y="15" width="1" height="3" fill={KEYS} />
      <rect x="15" y="15" width="1" height="1" fill={KEYS} />
      <rect x="14" y="16" width="1" height="1" fill={KEYS} />
      <rect x="16" y="16" width="1" height="1" fill={KEYS} />
      <rect x="15" y="17" width="1" height="1" fill={KEYS} />
      <rect x="11" y="18" width="1" height="1" fill={SHADE} />
      <rect x="13" y="18" width="1" height="1" fill={SHADE} />
      <rect className="onion-press" x="16" y="16" width="1" height="1" fill={PRESS} opacity="0" />
    </svg>
  );
}
