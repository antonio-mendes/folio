import { DitherRule } from "@/components/dither-rule";
import { profile } from "../../../content/profile";

export function Talks() {
  return (
    <section id="talks" className="scroll-mt-16 pb-16">
      <DitherRule className="mb-16" />
      <h2 className="font-mono text-xs text-muted-foreground">Talks</h2>
      <ul className="mt-8 space-y-6">
        {profile.talks.map((talk) => (
          <li key={talk.title}>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <h3 className="font-display text-xl tracking-tight">{talk.title}</h3>
              <p className="shrink-0 text-sm text-muted-foreground">{talk.when}</p>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              {talk.context} · {talk.place}
            </p>
          </li>
        ))}
      </ul>
      <p className="mt-10 text-sm text-muted-foreground">
        Also:{" "}
        {profile.events
          .map((event) => `${event.role.toLowerCase()} at ${event.title} (${event.when})`)
          .join(", ")}
        .
      </p>
    </section>
  );
}
