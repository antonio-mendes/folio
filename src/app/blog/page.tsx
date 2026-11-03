import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "../../../content/profile";

export const metadata: Metadata = {
  title: "Notes",
  description: "Writing, when there is some.",
};

export default function BlogPage() {
  return (
    <div className="py-20">
      <p className="text-sm text-muted-foreground">
        <Link href="/" className="link">
          Home
        </Link>
      </p>
      <h1 className="font-display mt-8 text-5xl tracking-tight sm:text-6xl">
        Notes
      </h1>
      <p className="mt-5 max-w-md text-foreground/80">
        Occasional writing on data and onchain systems.
      </p>
      <div
        className="mt-16 border-t border-border pt-10"
        role="status"
        aria-live="polite"
      >
        <p className="font-display text-2xl tracking-tight">Nothing here yet</p>
        <p className="mt-3 text-sm text-muted-foreground">
          Check back later, or{" "}
          <a href={`mailto:${profile.email}`} className="link text-foreground">
            get in touch
          </a>
          .
        </p>
      </div>
    </div>
  );
}
