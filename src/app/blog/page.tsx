import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Notes",
  description: "A log with nothing in it yet.",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-20">
      <p className="font-mono text-[11px] tracking-wide text-muted-foreground uppercase">
        <Link href="/" className="link-underline hover:text-accent">
          ← index
        </Link>
      </p>
      <h1 className="font-display mt-8 text-6xl tracking-tight text-foreground italic sm:text-7xl">
        Notes
      </h1>
      <p className="mt-5 max-w-md text-muted-foreground">
        Occasional writing on data, onchain systems, and building things. The
        channel is open. Nothing has been posted.
      </p>
      <div
        className="mt-16 border-t border-border/80 pt-10"
        role="status"
        aria-live="polite"
      >
        <p className="font-mono text-xs tracking-[0.16em] text-accent uppercase">
          log empty · 0 entries
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Check back, or{" "}
          <Link href="/#contact" className="link-underline text-accent">
            open a channel
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
