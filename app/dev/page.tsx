import Container from "@/components/shared/container";
import Link from "next/link";

export default function DevPage() {
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
              Dev
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Tools and automations that remove friction
            </p>

            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                The Dev pillar is about building tools and automations that do the
                repetitive work for you. From content planning to style guides, we
                create systems that save time and mental energy.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Link
                  href="/apps/post-planner"
                  className="rounded-lg border border-border bg-muted/30 p-6 hover:shadow-md transition-all group"
                >
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-foreground/80">
                    Post Planner
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    AI content planner that helps creators publish consistently without
                    burnout.
                  </p>
                </Link>
                <Link
                  href="/apps/stylr"
                  className="rounded-lg border border-border bg-muted/30 p-6 hover:shadow-md transition-all group"
                >
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-foreground/80">
                    Stylr
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    AI style guide and outfit builder to simplify dressing for work and
                    life.
                  </p>
                </Link>
              </div>

              <div className="rounded-lg border border-border bg-background p-8">
                <h2 className="text-2xl font-semibold mb-4">Automation & Systems</h2>
                <p className="text-muted-foreground mb-4">
                  Beyond apps, we explore workflow automations, integrations, and system
                  designs that remove friction from daily operations.
                </p>
                <p className="text-sm text-muted-foreground">
                  Content on specific automations and tool builds coming soon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}


