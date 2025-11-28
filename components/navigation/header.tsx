import Link from "next/link";
import Container from "@/components/shared/container";

const navLinks = [
  { href: "/os", label: "OS" },
  { href: "/apps", label: "Apps" },
  { href: "/about", label: "About" },
  { href: "/work-with-me", label: "Work With Me" },
  { href: "/collective", label: "Collective" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-semibold tracking-tight">
            Project Comfort
          </Link>
          <nav className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}

