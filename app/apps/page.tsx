import Container from "@/components/shared/container";
import SectionHeader from "@/components/shared/section-header";
import { APPS } from "@/lib/apps";
import Link from "next/link";

export default function AppsPage() {
  return (
    <main className="min-h-screen">
      <Container size="lg">
        <div className="py-20 md:py-32">
          <SectionHeader
            title="The Comfort App Suite"
            subtitle="Tools designed to remove friction and create more freedom in your daily life"
            className="mb-12"
          />

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-muted-foreground leading-relaxed">
              Each app in the Comfort Suite solves a specific friction point, using
              automation and intelligent design to give you back time and mental space.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {APPS.map((app) => (
              <Link
                key={app.id}
                href={`/apps/${app.slug}`}
                className="group relative rounded-xl border border-border bg-background p-8 transition-all hover:shadow-lg hover:border-foreground/20"
              >
                <div className="flex flex-col h-full">
                  <h3 className="text-2xl font-semibold mb-2 group-hover:text-foreground/80 transition-colors">
                    {app.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 font-medium">
                    {app.tagline}
                  </p>
                  <p className="text-muted-foreground flex-grow">{app.description}</p>
                  <div className="mt-6 text-sm font-medium text-foreground group-hover:underline">
                    Learn more →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}

