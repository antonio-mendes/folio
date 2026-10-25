import { profile } from "../../../content/profile";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 border-t border-border py-20">
      <div className="mx-auto max-w-6xl px-6 sm:px-12">
        <h2 className="font-display text-3xl tracking-tight">Contact</h2>
        <p className="mt-6 max-w-md text-foreground/80">
          Based in {profile.location}. Open to interesting conversations.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-6 inline-block border-b border-foreground pb-0.5 text-sm"
        >
          {profile.email}
        </a>
      </div>
    </section>
  );
}
