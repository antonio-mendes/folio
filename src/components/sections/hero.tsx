import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { HeroDither } from "@/components/hero-dither";
import { cn } from "@/lib/utils";
import { profile } from "../../../content/profile";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[min(100svh,44rem)] flex-col justify-end overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-32">
      <HeroDither />
      <div className="animate-fade-up mx-auto w-full max-w-3xl px-6">
        <h1 className="font-display text-[clamp(2.75rem,10vw,5rem)] leading-[0.95] font-semibold tracking-tight text-foreground">
          {profile.name}
        </h1>
        <p className="mt-5 max-w-md text-base text-muted-foreground sm:text-lg">
          {profile.title} · {profile.location}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className={cn(buttonVariants({ size: "lg" }))}
          >
            Contact
          </a>
          <Link
            href="/#experience"
            className={cn(buttonVariants({ variant: "ghost", size: "lg" }))}
          >
            View experience
          </Link>
        </div>
      </div>
    </section>
  );
}
