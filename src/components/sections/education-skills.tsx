import { profile } from "../../../content/profile";

export function EducationSkills() {
  return (
    <section
      id="education"
      className="animate-fade-up scroll-mt-20 border-t border-border/60 py-20"
    >
      <div className="mx-auto grid max-w-3xl gap-16 px-6 sm:grid-cols-2">
        <div>
          <h2 className="font-display text-sm font-semibold tracking-[0.14em] text-accent uppercase">
            Education
          </h2>
          <ul className="mt-8 space-y-8">
            {profile.education.map((item) => (
              <li key={item.school}>
                <h3 className="font-display text-base font-semibold tracking-tight text-foreground">
                  {item.school}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.detail}</p>
                <p className="mt-1 text-xs text-muted-foreground tabular-nums">
                  {item.period} · {item.location}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-sm font-semibold tracking-[0.14em] text-accent uppercase">
            Skills
          </h2>
          <ul className="mt-8 flex flex-wrap gap-x-3 gap-y-2">
            {profile.skills.map((skill) => (
              <li
                key={skill}
                className="text-sm text-foreground/90 after:ml-3 after:text-border after:content-['·'] last:after:content-none"
              >
                {skill}
              </li>
            ))}
          </ul>
          <h3 className="mt-10 font-display text-sm font-semibold tracking-[0.14em] text-accent uppercase">
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
