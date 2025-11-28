import Container from "@/components/shared/container";
import Link from "next/link";

export default function RealEstatePage() {
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
              Real Estate
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Find and design homes that support your lifestyle and wealth
            </p>

            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                Real estate is the foundation of the Comfort Stack. We focus on
                properties that serve both lifestyle and financial goals — spaces where
                you can rest, work, and build wealth simultaneously.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="rounded-lg border border-border bg-muted/30 p-6">
                  <h3 className="text-xl font-semibold mb-3">Deal Finding</h3>
                  <p className="text-sm text-muted-foreground">
                    Using{" "}
                    <Link href="/apps/comfort-finder" className="underline">
                      Comfort Finder
                    </Link>{" "}
                    and other tools to identify properties that match your criteria for
                    lifestyle fit and return potential.
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-muted/30 p-6">
                  <h3 className="text-xl font-semibold mb-3">STR Strategy</h3>
                  <p className="text-sm text-muted-foreground">
                    Short-term rental setup, optimization, and management systems that
                    create passive income while maintaining quality.
                  </p>
                </div>
              </div>

              <div className="rounded-lg border border-border bg-background p-8 mt-8">
                <h2 className="text-2xl font-semibold mb-4">Work With Me</h2>
                <p className="text-muted-foreground mb-6">
                  Licensed with Epique Realty. Let's find your next property or
                  optimize your existing portfolio.
                </p>
                <Link
                  href="/work-with-me"
                  className="inline-flex items-center justify-center rounded-lg bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}

