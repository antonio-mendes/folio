import { profile } from "../../../content/profile";

export function EducationSkills() {
  return (
    <section
      id="education"
      className="scroll-mt-16 border-t border-border py-20"
    >
      <div className="mx-auto grid max-w-6xl gap-16 px-6 sm:grid-cols-2 sm:px-12">
        <div>
          <h2 className="font-display text-3xl tracking-tight">Education</h2>
          <ul className="mt-8 space-y-8">
            {profile.education.map((item) => (
              <li key={item.school}>
                <h3 className="font-display text-2xl tracking-tight">
                  {item.school}
                </h3>
                <p className="mt-1 text-sm text-foreground/80">{item.detail}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.period} · {item.location}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-3xl tracking-tight">Skills</h2>
          <p className="mt-8 max-w-sm text-sm leading-7 text-foreground/85">
            {profile.skills.join(", ")}
          </p>
          <h3 className="mt-12 font-display text-2xl tracking-tight">
            Certifications
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
