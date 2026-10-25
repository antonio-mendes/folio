import { profile } from "../../content/profile";

export function SiteFooter() {
  return (
    <footer className="mt-auto">
      <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-12">
        <p>© 2026 {profile.name}</p>
        <p>{profile.location}</p>
      </div>
    </footer>
  );
}
