import Link from "next/link";
import Container from "@/components/shared/container";
import Logo from "@/components/shared/logo";

const navLinks = [
  { href: "/os", label: "OS" },
  { href: "/apps", label: "Apps" },
  { href: "/about", label: "About" },
  { href: "/work-with-me", label: "Work With Me" },
  { href: "/collective", label: "Collective" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--pc-stone)] bg-[var(--pc-cream)]/95 backdrop-blur supports-[backdrop-filter]:bg-[var(--pc-cream)]/60">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Logo showText={true} />
          <nav className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[var(--pc-navy)]/70 transition-colors hover:text-[var(--pc-navy)]"
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

