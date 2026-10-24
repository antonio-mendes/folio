import { profile } from "../../content/profile";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border/60">
      <div className="mx-auto flex max-w-3xl flex-col gap-1 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          © 2026 {profile.name}
        </p>
        <p>{profile.location}</p>
      </div>
    </footer>
  );
}
