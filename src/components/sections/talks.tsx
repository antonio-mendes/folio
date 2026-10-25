import { profile } from "../../../content/profile";

export function Talks() {
  return (
    <section id="talks" className="scroll-mt-16 border-t border-border py-20">
      <div className="mx-auto max-w-6xl px-6 sm:px-12">
        <h2 className="font-display text-3xl tracking-tight">Talks</h2>
        <ul className="mt-8 max-w-2xl">
          {profile.talks.map((talk) => (
            <li key={talk.title} className="py-4">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-display text-2xl tracking-tight">
                  {talk.title}
                </h3>
                <p className="shrink-0 text-sm text-muted-foreground">
                  {talk.when}
                </p>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                {talk.role} · {talk.place} · {talk.context}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
