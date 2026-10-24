import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { profile } from "../../../content/profile";

export function Contact() {
  return (
    <section
      id="contact"
      className="animate-fade-up scroll-mt-20 border-t border-border/60 py-20"
    >
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="font-display text-sm font-semibold tracking-[0.14em] text-accent uppercase">
          Contact
        </h2>
        <p className="mt-4 max-w-md font-display text-2xl leading-snug tracking-tight text-foreground sm:text-3xl">
          Say hello.
        </p>
        <p className="mt-4 text-muted-foreground">
          Based in {profile.location}. Open to interesting conversations.
        </p>
        <div className="mt-8">
          <a
            href={`mailto:${profile.email}`}
            className={cn(buttonVariants({ size: "lg" }))}
          >
            {profile.email}
          </a>
        </div>
      </div>
    </section>
  );
}
