import { profile } from "../../../content/profile";

export function About() {
  return (
    <section id="about" className="scroll-mt-16 border-t border-border py-20">
      <div className="mx-auto max-w-6xl px-6 sm:px-12">
        <h2 className="font-display text-3xl tracking-tight">About</h2>
        <div className="mt-8 max-w-2xl space-y-5 text-[17px] leading-relaxed text-foreground/85">
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
