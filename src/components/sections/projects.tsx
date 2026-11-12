import Image from "next/image";
import type { ReactNode } from "react";
import { DitherRule } from "@/components/dither-rule";
import { OlhamistoEye } from "@/components/olhamisto-eye";
import { OnionHandheld } from "@/components/onion-handheld";
import { profile } from "../../../content/profile";

const logos = {
  olhamisto: <OlhamistoEye size={48} />,
  // A 32×32 pixel version of the Men10 illustration. It nods along at 90 BPM.
  men10: (
    <Image
      src="/projects/men10.svg"
      alt=""
      width={48}
      height={48}
      unoptimized
      className="men10-nod"
    />
  ),
  onionThemes: <OnionHandheld size={48} />,
} satisfies Record<string, ReactNode>;

type Project = {
  name: string;
  url: string;
  summary?: string;
  period?: string;
  logo?: keyof typeof logos;
};

const projects: readonly Project[] = profile.projects;

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 pb-16">
      <DitherRule className="mb-16" />
      <h2 className="font-mono text-xs text-muted-foreground">Projects</h2>
      <ul className="mt-8 space-y-8">
        {projects.map((project) => (
          <li key={project.url} className="flex gap-5">
            {project.logo && <div className="shrink-0 pt-1">{logos[project.logo]}</div>}
            <div className="min-w-0 flex-1">
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
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
