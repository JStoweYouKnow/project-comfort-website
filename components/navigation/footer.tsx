import Link from "next/link";
import Container from "@/components/shared/container";

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-lg font-semibold mb-4">Project Comfort</h3>
              <p className="text-sm text-muted-foreground max-w-md">
                Design a life that feels lighter. Building comfort, energy, and freedom
                across home, systems, food, style, and movement.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4">Explore</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/os" className="text-muted-foreground hover:text-foreground">
                    Operating System
                  </Link>
                </li>
                <li>
                  <Link href="/apps" className="text-muted-foreground hover:text-foreground">
                    App Suite
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-foreground">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/work-with-me"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Work With Me
                  </Link>
                </li>
                <li>
                  <Link
                    href="/collective"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Comfort Collective
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border/40">
            <p className="text-xs text-muted-foreground text-center">
              © {new Date().getFullYear()} Project Comfort. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

