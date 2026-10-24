import { profile } from "../../../content/profile";

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-16 border-t border-border/80 py-20"
    >
      <div className="mx-auto max-w-3xl px-5">
        <h2 className="font-mono text-[11px] tracking-[0.18em] text-accent uppercase">
          01 — about
        </h2>
        <div className="mt-8 max-w-2xl space-y-5 text-[17px] leading-relaxed text-foreground/90">
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
