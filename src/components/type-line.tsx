"use client";

import { useEffect, useState } from "react";

export function TypeLine({ text }: { text: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setCount(text.length);
      return;
    }

    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setCount(i);
      if (i >= text.length) window.clearInterval(id);
    }, 28);

    return () => window.clearInterval(id);
  }, [text]);

  const done = count >= text.length;

  return (
    <p className="mt-6 max-w-xl font-mono text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
      <span className="text-accent">› </span>
      {text.slice(0, count)}
      <span
        className={`ml-0.5 inline-block h-[1em] w-[0.55ch] translate-y-[2px] bg-accent align-middle ${done ? "animate-caret" : ""}`}
        aria-hidden
      />
    </p>
  );
}
