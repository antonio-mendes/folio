import { profile } from "../../content/profile";

export function SiteFooter() {
  return (
    <footer className="mx-auto w-full max-w-2xl px-6 py-10 text-sm text-muted-foreground">
      <p>
        © {new Date().getFullYear()} {profile.name} ·{" "}
        <a href={`mailto:${profile.email}`} className="link">
          {profile.email}
        </a>
      </p>
    </footer>
  );
}
