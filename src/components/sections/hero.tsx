import Link from "next/link";
import { GlyphPlot } from "@/components/glyph-plot";
import { profile } from "../../../content/profile";

export function Hero() {
  return (
    <section className="animate-fade-up mx-auto grid min-h-[min(100svh,52rem)] max-w-6xl items-center gap-12 px-6 py-16 sm:px-12 lg:grid-cols-2 lg:gap-16 lg:py-24">
      <GlyphPlot />
      <div>
        <p className="font-mono text-xs tracking-wide text-muted-foreground">
          {profile.location}
        </p>
        <h1 className="font-display mt-4 text-[clamp(3.2rem,7vw,5.25rem)] leading-[0.95] font-normal tracking-tight text-foreground">
          {profile.name}
        </h1>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-foreground/80">
          {profile.tagline}
        </p>
        <div className="mt-8 flex gap-6 text-sm">
          <a
            href={`mailto:${profile.email}`}
            className="border-b border-foreground pb-0.5"
          >
            Contact
          </a>
          <Link href="/#experience" className="border-b border-foreground pb-0.5">
            Work
          </Link>
        </div>
      </div>
    </section>
  );
}
