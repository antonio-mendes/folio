import { profile } from "../../../content/profile";

export function EducationSkills() {
  return (
    <section
      id="education"
      className="scroll-mt-16 border-t border-border/80 py-20"
    >
      <div className="mx-auto grid max-w-3xl gap-16 px-5 sm:grid-cols-2">
        <div>
          <h2 className="font-mono text-[11px] tracking-[0.18em] text-accent uppercase">
            03 — study
          </h2>
          <ul className="mt-8 space-y-8">
            {profile.education.map((item) => (
              <li key={item.school}>
                <h3 className="font-display text-2xl tracking-tight text-foreground italic">
                  {item.school}
                </h3>
                <p className="mt-1 text-sm text-foreground/75">{item.detail}</p>
                <p className="mt-1 font-mono text-[11px] tracking-wide text-muted-foreground">
                  {item.period} · {item.location}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-mono text-[11px] tracking-[0.18em] text-accent uppercase">
            04 — tools
          </h2>
          <p className="mt-8 font-mono text-sm leading-7 text-foreground/85">
            {profile.skills.join(" / ")}
          </p>
          <h3 className="mt-12 font-mono text-[11px] tracking-[0.18em] text-accent uppercase">
            note
          </h3>
          <ul className="mt-4 space-y-2">
            {profile.certifications.map((cert) => (
              <li key={cert} className="text-sm text-muted-foreground">
                {cert}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
