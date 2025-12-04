import Container from "@/components/shared/container";
import SectionHeader from "@/components/shared/section-header";
import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/constants";

export default function WorkWithMePage() {
  return (
    <main className="min-h-screen">
      <Container size="lg">
        <div className="py-20 md:py-32">
          <SectionHeader
            title="Work With Me"
            subtitle="Implement the Comfort Stack: homes, automations, food, and movement that scale with you"
            className="mb-12"
          />

          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                I work with clients across real estate, short-term rentals, and founder
                systems — helping ambitious creatives implement the tools and frameworks
                that create more freedom and less friction.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="rounded-lg border border-border bg-background p-6">
                <h3 className="text-xl font-semibold mb-3">Real Estate & STRs</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Finding properties that fit your lifestyle and generate returns.
                  Short-term rental strategy, setup, and systems.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Deal sourcing and analysis</li>
                  <li>• STR setup and optimization</li>
                  <li>• Property management systems</li>
                </ul>
              </div>

              <div className="rounded-lg border border-border bg-background p-6">
                <h3 className="text-xl font-semibold mb-3">Founder Systems</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Building automations, tools, and routines that remove friction from
                  your daily operations.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Workflow automation</li>
                  <li>• Content systems and tools</li>
                  <li>• Lifestyle design consulting</li>
                </ul>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-muted/30 p-8 text-center">
              <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
              <p className="text-muted-foreground mb-6">
                Let's discuss how the Comfort Stack can work for you.
              </p>
              <Link
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center justify-center rounded-lg bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
              >
                Get in Touch
              </Link>
            </div>

            <div className="mt-12 text-center">
              <p className="text-sm text-muted-foreground">
                Licensed real estate agent with{" "}
                <span className="font-medium">Epique Realty</span>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}


