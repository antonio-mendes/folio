import { profile } from "../../../content/profile";

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-16 border-t border-border/80 py-20"
    >
      <div className="mx-auto max-w-3xl px-5">
        <h2 className="font-mono text-[11px] tracking-[0.18em] text-accent uppercase">
          05 — contact
        </h2>
        <p className="font-display mt-6 text-5xl tracking-tight text-foreground italic sm:text-6xl">
          Write.
        </p>
        <p className="mt-4 max-w-md text-muted-foreground">
          Based in {profile.location}. Open to interesting conversations.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="link-underline mt-8 inline-block font-mono text-sm tracking-wide text-accent"
        >
          {profile.email}
        </a>
      </div>
    </section>
  );
}
