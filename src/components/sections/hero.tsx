import Link from "next/link";
import { HeroDither } from "@/components/hero-dither";
import { TypeLine } from "@/components/type-line";
import { profile } from "../../../content/profile";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[min(100svh,46rem)] flex-col justify-end overflow-hidden pb-16 pt-24 sm:pb-24">
      <HeroDither />
      <div className="animate-fade-up relative z-10 mx-auto w-full max-w-3xl px-5">
        <p className="font-mono text-[11px] tracking-[0.18em] text-accent uppercase">
          38.72°n · 9.14°w · {profile.title.toLowerCase()}
        </p>
        <h1 className="font-display mt-4 text-[clamp(3.4rem,12vw,6.4rem)] leading-[0.88] font-normal tracking-tight text-foreground italic">
          {profile.name}
        </h1>
        <TypeLine text={profile.tagline} />
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-xs tracking-wide uppercase">
          <a
            href={`mailto:${profile.email}`}
            className="link-underline text-foreground transition-colors hover:text-accent"
          >
            [ contact ]
          </a>
          <Link
            href="/#experience"
            className="link-underline text-muted-foreground transition-colors hover:text-accent"
          >
            [ work ]
          </Link>
        </div>
      </div>
    </section>
  );
}
