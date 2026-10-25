import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Notes",
  description: "Writing, when there is some.",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20 sm:px-12">
      <p className="text-sm text-muted-foreground">
        <Link href="/" className="border-b border-border pb-0.5 hover:border-foreground">
          Home
        </Link>
      </p>
      <h1 className="font-display mt-8 text-5xl tracking-tight sm:text-6xl">
        Notes
      </h1>
      <p className="mt-5 max-w-md text-foreground/80">
        Occasional writing on data, onchain systems, and building things.
      </p>
      <div
        className="mt-16 border-t border-border pt-10"
        role="status"
        aria-live="polite"
      >
        <p className="font-display text-2xl tracking-tight">No posts yet</p>
        <p className="mt-3 text-sm text-muted-foreground">
          Check back later, or{" "}
          <Link href="/#contact" className="border-b border-foreground pb-0.5 text-foreground">
            get in touch
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
