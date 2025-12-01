import Container from "@/components/shared/container";
import Link from "next/link";

export default function KitchenPage() {
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
              Kitchen
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              500+ recipes and cooking systems that fuel your days
            </p>

            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                Food should comfort and fuel. The Kitchen pillar is about building a
                recipe library and cooking systems that make it easy to eat well without
                spending hours every day in the kitchen.
              </p>

              <div className="rounded-lg border border-border bg-muted/30 p-8 mb-8">
                <h2 className="text-2xl font-semibold mb-4">Sous: Your Cooking Assistant</h2>
                <p className="text-muted-foreground mb-4">
                  <Link href="/apps/sous" className="underline font-medium">
                    Sous
                  </Link>{" "}
                  is an AI cooking assistant built on a 500+ recipe library. It helps
                  you:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Find recipes based on what you have on hand</li>
                  <li>• Plan meals that balance comfort and nutrition</li>
                  <li>• Scale recipes and adjust for dietary needs</li>
                  <li>• Build a personal recipe collection over time</li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-lg border border-border bg-background p-6">
                  <h3 className="text-xl font-semibold mb-3">Recipe Categories</h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Quick weekday meals</li>
                    <li>• Weekend comfort cooking</li>
                    <li>• Meal prep friendly</li>
                    <li>• Entertaining essentials</li>
                  </ul>
                </div>
                <div className="rounded-lg border border-border bg-background p-6">
                  <h3 className="text-xl font-semibold mb-3">Cooking Systems</h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Batch cooking strategies</li>
                    <li>• Pantry organization</li>
                    <li>• Shopping list automation</li>
                    <li>• Recipe testing workflow</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}


