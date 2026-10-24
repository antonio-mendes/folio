import Link from "next/link";

const links = [
  { href: "/#about", label: "about" },
  { href: "/#experience", label: "work" },
  { href: "/blog", label: "notes" },
  { href: "/#contact", label: "contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="animate-fade-in sticky top-0 z-50 border-b border-border/80 bg-background/75 backdrop-blur-md">
      <div className="mx-auto flex h-12 max-w-3xl items-center justify-between px-5">
        <Link
          href="/"
          className="font-mono text-[11px] tracking-[0.16em] text-foreground uppercase transition-colors hover:text-accent"
        >
          am<span className="text-accent">/</span>lis
        </Link>
        <nav className="flex items-center gap-0.5 sm:gap-3" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="link-underline px-1.5 py-1 font-mono text-[11px] tracking-wide text-muted-foreground uppercase transition-colors hover:text-accent sm:px-0"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
