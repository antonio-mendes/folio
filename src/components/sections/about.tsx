import { profile } from "../../../content/profile";

export function About() {
  return (
    <section
      id="about"
      className="animate-fade-up scroll-mt-20 border-t border-border/60 py-20"
    >
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="font-display text-sm font-semibold tracking-[0.14em] text-accent uppercase">
          About
        </h2>
        <p className="mt-4 max-w-xl font-display text-2xl leading-snug tracking-tight text-foreground sm:text-3xl">
          {profile.tagline}
        </p>
        <div className="mt-8 max-w-2xl space-y-4 text-base leading-relaxed text-muted-foreground">
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
