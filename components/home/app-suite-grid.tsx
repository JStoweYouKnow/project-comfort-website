import Link from "next/link";
import Container from "@/components/shared/container";
import SectionHeader from "@/components/shared/section-header";
import AppLink from "@/components/shared/app-link";
import { APPS } from "@/lib/apps";

export default function AppSuiteGrid() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <Container size="lg">
        <SectionHeader
          title="The Comfort App Suite"
          subtitle="Tools designed to remove friction and create more freedom in your daily life"
          className="mb-12"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {APPS.map((app) => (
            <AppLink
              key={app.id}
              app={app}
              className="group relative rounded-xl border border-border bg-background p-8 transition-all hover:shadow-lg hover:border-foreground/20 block"
              showExternalIcon={app.isExternal}
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
                  {app.isExternal ? "Launch app →" : "Learn more →"}
                </div>
              </div>
            </AppLink>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/apps"
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            View all apps →
          </Link>
        </div>
      </Container>
    </section>
  );
}

