const SIZE = 16;

function cell(x: number, y: number) {
  const d = Math.hypot(x - 7.5, y - 7.2);
  if (d < 2.2) return { ch: "▓", tone: "text-[#8a6a45]" };
  if (d < 4.3) return { ch: "▒", tone: "text-[#c4b08a]" };
  if (d < 6.1) return { ch: "░", tone: "text-[#6d8f62]" };
  return { ch: "·", tone: "text-[#d7cbb6]" };
}

export function GlyphPlot() {
  const cells = [];
  for (let y = 0; y < SIZE; y++) {
    for (let x = 0; x < SIZE; x++) {
      const { ch, tone } = cell(x, y);
      cells.push(
        <span key={`${x}-${y}`} className={tone}>
          {ch}
        </span>,
      );
    }
  }

  return (
    <div
      className="grid aspect-square w-full max-w-[28rem] grid-cols-[repeat(16,minmax(0,1fr))] place-items-center font-mono text-[clamp(0.7rem,1.6vw,0.95rem)] leading-none"
      aria-hidden
    >
      {cells}
    </div>
  );
}
