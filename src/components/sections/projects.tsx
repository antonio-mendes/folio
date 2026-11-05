import { DitherRule } from "@/components/dither-rule";
import { profile } from "../../../content/profile";

type Project = {
  name: string;
  url: string;
  summary?: string;
  period?: string;
};

const projects: readonly Project[] = profile.projects;

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 pb-16">
      <DitherRule className="mb-16" />
      <h2 className="font-mono text-xs text-muted-foreground">Projects</h2>
      <ul className="mt-8 space-y-8">
        {projects.map((project) => (
          <li key={project.url}>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <h3 className="font-display text-xl tracking-tight">
                <a href={project.url} className="link" target="_blank" rel="noreferrer">
                  {project.name}
                </a>
              </h3>
              {project.period && (
                <p className="shrink-0 text-sm text-muted-foreground">{project.period}</p>
              )}
            </div>
            {project.summary && (
              <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-foreground/80">
                {project.summary}
              </p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
