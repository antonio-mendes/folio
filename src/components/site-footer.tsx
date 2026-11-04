import { profile } from "../../content/profile";

export function SiteFooter() {
  return (
    <footer className="mx-auto w-full max-w-2xl px-6 pt-16 pb-44 text-sm sm:pb-52 text-muted-foreground">
      <p>
        © {new Date().getFullYear()} {profile.name} ·{" "}
        <a href={`mailto:${profile.email}`} className="link">
          {profile.email}
        </a>
      </p>
    </footer>
  );
}
