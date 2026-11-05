import Link from "next/link";
import { profile } from "../../content/profile";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#projects", label: "Projects" },
  { href: "/#talks", label: "Talks" },
  { href: "/#education", label: "Education" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-2xl items-center justify-between gap-3 px-4 min-[360px]:px-6 sm:gap-6">
        <Link href="/" className="text-[13px] whitespace-nowrap sm:text-sm">
          {profile.name}
        </Link>
        <nav className="flex items-center gap-2 min-[360px]:gap-3 sm:gap-5" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] text-muted-foreground transition-colors hover:text-foreground sm:text-sm"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
