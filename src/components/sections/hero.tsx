import { Fragment } from "react";
import { profile } from "../../../content/profile";

const companyUrls = new Map<string, string>(
  profile.experience.flatMap((job) => ("url" in job ? [[job.company, job.url]] : [])),
);
const companyPattern = new RegExp(`\\b(${[...companyUrls.keys()].join("|")})\\b`);

// Turns company names from the work list into links wherever they appear in a line.
function withCompanyLinks(line: string) {
  return line.split(companyPattern).map((part, index) => {
    const url = companyUrls.get(part);
    return url ? (
      <a key={index} href={url} className="link" target="_blank" rel="noreferrer">
        {part}
      </a>
    ) : (
      part
    );
  });
}

export function Hero() {
  const links = [
    { label: "Email", href: `mailto:${profile.email}` },
    ...profile.links,
  ];

  return (
    <section className="animate-fade-up pt-48 pb-20 sm:pt-64">
      <h1 className="font-display text-[clamp(2.75rem,8vw,4rem)] leading-none tracking-tight">
        {profile.name}
      </h1>
      <p className="mt-3 font-mono text-xs text-muted-foreground">
        {profile.title} · {profile.location}
      </p>
      <div className="mt-8 space-y-4 text-[17px] leading-relaxed text-foreground/85">
        {profile.intro.map((line) => (
          <p key={line}>{withCompanyLinks(line)}</p>
        ))}
      </div>
      <p className="mt-8 font-mono text-sm lowercase">
        {links.map((link, index) => (
          <Fragment key={link.href}>
            {index > 0 && <span className="text-muted-foreground"> / </span>}
            <a
              href={link.href}
              className="link"
              {...(link.href.startsWith("http") && { target: "_blank", rel: "noreferrer" })}
            >
              {link.label}
            </a>
          </Fragment>
        ))}
      </p>
    </section>
  );
}
