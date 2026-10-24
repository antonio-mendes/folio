import { profile } from "../../../content/profile";

export function Experience() {
  return (
    <section
      id="experience"
      className="animate-fade-up scroll-mt-20 border-t border-border/60 py-20"
    >
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="font-display text-sm font-semibold tracking-[0.14em] text-accent uppercase">
          Experience
        </h2>
        <ol className="mt-10 space-y-14">
          {profile.experience.map((job) => (
            <li key={`${job.company}-${job.period}`}>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <div>
                  <h3 className="font-display text-xl font-semibold tracking-tight text-foreground">
                    {job.company}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {job.role} · {job.location}
                  </p>
                </div>
                <time className="shrink-0 text-sm text-muted-foreground tabular-nums">
                  {job.period}
                </time>
              </div>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {job.summary}
              </p>
              <ul className="mt-4 max-w-2xl space-y-2 text-sm leading-relaxed text-foreground/85">
                {job.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                      aria-hidden
                    />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
