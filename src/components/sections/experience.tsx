import { DitherRule } from "@/components/dither-rule";
import { profile } from "../../../content/profile";

export function Experience() {
  return (
    <section id="work" className="scroll-mt-16 pb-16">
      <DitherRule className="mb-16" />
      <h2 className="font-mono text-xs text-muted-foreground">Work</h2>
      <ol className="mt-8 space-y-8">
        {profile.experience.map((job) => (
          <li key={job.company}>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <h3 className="font-display text-xl tracking-tight">
                {"url" in job ? (
                  <a href={job.url} className="link" target="_blank" rel="noreferrer">
                    {job.company}
                  </a>
                ) : (
                  job.company
                )}
                <span className="font-sans text-sm tracking-normal text-muted-foreground">
                  {" "}· {job.role}
                </span>
              </h3>
              <p className="shrink-0 text-sm text-muted-foreground">{job.period}</p>
            </div>
            <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-foreground/80">
              {job.summary}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
