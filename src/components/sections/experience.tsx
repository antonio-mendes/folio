import { profile } from "../../../content/profile";

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-16 border-t border-border py-20"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-12">
        <h2 className="font-display text-3xl tracking-tight">Work</h2>
        <ol className="mt-10 max-w-2xl">
          {profile.experience.map((job) => (
            <li
              key={`${job.company}-${job.period}`}
              className="border-t border-border py-10 first:border-t-0 first:pt-2"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-display text-3xl tracking-tight">
                  {job.company}
                </h3>
                <time className="text-sm text-muted-foreground">{job.period}</time>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                {job.role} · {job.location}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-foreground/80">
                {job.summary}
              </p>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-foreground/80">
                {job.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="text-muted-foreground" aria-hidden>
                      –
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
