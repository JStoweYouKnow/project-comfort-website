import Container from "@/components/shared/container";
import Link from "next/link";

export default function MovementPage() {
  return (
    <main className="min-h-screen">
      <Container size="lg">
        <div className="py-20 md:py-32">
          <Link
            href="/os"
            className="text-sm text-muted-foreground hover:text-foreground mb-8 inline-block"
          >
            ← Back to OS
          </Link>

          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
              Movement
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Movement practices that sustain your energy
            </p>

            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                Movement in the Comfort Stack isn't about pushing to exhaustion. It's
                about building sustainable practices that support your energy, focus, and
                creative output over the long term.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="rounded-lg border border-border bg-muted/30 p-6">
                  <h3 className="text-xl font-semibold mb-3">Sustainable Routines</h3>
                  <p className="text-sm text-muted-foreground">
                    Movement practices designed to integrate into your daily life without
                    becoming another source of stress or obligation.
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-muted/30 p-6">
                  <h3 className="text-xl font-semibold mb-3">Energy Management</h3>
                  <p className="text-sm text-muted-foreground">
                    Understanding how different types of movement affect your energy and
                    focus, and using that knowledge to optimize your schedule.
                  </p>
                </div>
              </div>

              <div className="rounded-lg border border-border bg-background p-8">
                <h2 className="text-2xl font-semibold mb-4">Coming Soon</h2>
                <p className="text-muted-foreground">
                  More content on movement practices, routines, and systems coming
                  soon. Check back or subscribe to stay updated.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}

