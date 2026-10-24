import { profile } from "../../../content/profile";

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-16 border-t border-border/80 py-20"
    >
      <div className="mx-auto max-w-3xl px-5">
        <h2 className="font-mono text-[11px] tracking-[0.18em] text-accent uppercase">
          02 — work
        </h2>
        <ol className="mt-10">
          {profile.experience.map((job, index) => (
            <li
              key={`${job.company}-${job.period}`}
              className="border-t border-border/70 py-10 first:border-t-0 first:pt-0"
            >
              <div className="flex items-baseline justify-between gap-4">
                <p className="font-mono text-[11px] tracking-widest text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <time className="font-mono text-[11px] tracking-wide text-muted-foreground">
                  {job.period}
                </time>
              </div>
              <h3 className="font-display mt-3 text-3xl tracking-tight text-foreground italic sm:text-4xl">
                {job.company}
              </h3>
              <p className="mt-2 font-mono text-xs tracking-wide text-muted-foreground">
                {job.role} · {job.location}
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-foreground/80">
                {job.summary}
              </p>
              <ul className="mt-4 max-w-2xl space-y-2 text-sm leading-relaxed text-foreground/75">
                {job.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-[0.45rem] text-accent" aria-hidden>
                      ▸
                    </span>
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
