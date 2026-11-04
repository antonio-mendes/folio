import { DitherRule } from "@/components/dither-rule";
import { profile } from "../../../content/profile";

export function EducationSkills() {
  return (
    <section id="education" className="scroll-mt-16 pb-16">
      <DitherRule className="mb-16" />
      <h2 className="font-mono text-xs text-muted-foreground">Education</h2>
      <ul className="mt-8 space-y-6">
        {profile.education.map((item) => (
          <li key={item.school}>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <h3 className="font-display text-xl tracking-tight">{item.school}</h3>
              <p className="shrink-0 text-sm text-muted-foreground">{item.period}</p>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              {item.detail} · {item.location}
            </p>
          </li>
        ))}
      </ul>
      <h2 className="mt-14 font-mono text-xs text-muted-foreground">Skills</h2>
      <p className="mt-4 text-sm leading-7 text-foreground/85">
        {profile.skills.join(", ")}.
      </p>
      <p className="mt-2 text-sm text-muted-foreground">
        {profile.certifications.join(" · ")}
      </p>
    </section>
  );
}
