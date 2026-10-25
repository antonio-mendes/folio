import Link from "next/link";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Work" },
  { href: "/#talks", label: "Talks" },
  { href: "/blog", label: "Notes" },
  { href: "/#contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="animate-fade-in sticky top-0 z-50 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6 sm:px-12">
        <Link href="/" className="text-sm text-foreground">
          António Mendes
        </Link>
        <nav className="flex items-center gap-3 sm:gap-6" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
