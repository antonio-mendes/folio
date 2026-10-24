import { profile } from "../../content/profile";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border/80">
      <div className="mx-auto flex max-w-3xl flex-col gap-1 px-5 py-6 font-mono text-[11px] tracking-wide text-muted-foreground uppercase sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 {profile.name}</p>
        <p>
          <span className="text-accent">●</span> live · {profile.location}
        </p>
      </div>
    </footer>
  );
}
