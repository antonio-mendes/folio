import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes and writing — coming soon.",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <p className="text-sm text-muted-foreground">
        <Link href="/" className="link-underline hover:text-foreground">
          ← Home
        </Link>
      </p>
      <h1 className="mt-8 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
        Blog
      </h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        Occasional notes on data, crypto analytics, and building things. Nothing
        here yet — this space is ready when the first post is.
      </p>
      <div
        className="mt-16 border-t border-border/60 pt-12"
        role="status"
        aria-live="polite"
      >
        <p className="font-display text-lg tracking-tight text-foreground/80">
          No posts yet
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          Check back later, or{" "}
          <Link
            href="/#contact"
            className="link-underline text-accent hover:text-foreground"
          >
            get in touch
          </Link>{" "}
          if you want to be notified.
        </p>
      </div>
    </div>
  );
}
