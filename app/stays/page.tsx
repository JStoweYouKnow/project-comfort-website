import Container from "@/components/shared/container";
import Link from "next/link";

export default function StaysPage() {
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
              Stays
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Short-term rental strategies and hospitality systems
            </p>

            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                Building successful short-term rentals requires more than just a good
                property. It's about creating hospitality systems that deliver
                consistent experiences while maximizing returns and minimizing
                day-to-day work.
              </p>

              <div className="rounded-lg border border-border bg-muted/30 p-8 mb-8">
                <h2 className="text-2xl font-semibold mb-4">What We Cover</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Property setup and design for STR success</li>
                  <li>• Listing optimization and pricing strategies</li>
                  <li>• Automation and management systems</li>
                  <li>• Guest communication and hospitality workflows</li>
                  <li>• Scaling from one property to a portfolio</li>
                </ul>
              </div>

              <div className="rounded-lg border border-border bg-background p-8">
                <h2 className="text-2xl font-semibold mb-4">Get Started</h2>
                <p className="text-muted-foreground mb-6">
                  Whether you're starting your first STR or optimizing an existing
                  portfolio, let's build systems that work.
                </p>
                <Link
                  href="/work-with-me"
                  className="inline-flex items-center justify-center rounded-lg bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
                >
                  Work With Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}

