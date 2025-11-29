import Link from "next/link";
import Container from "@/components/shared/container";
import SectionHeader from "@/components/shared/section-header";
import AppLink from "@/components/shared/app-link";
import { APPS } from "@/lib/apps";

export default function AppSuiteGrid() {
  return (
    <section className="py-20 md:py-32 bg-[var(--pc-white)]">
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
              className="group relative rounded-2xl border border-[var(--pc-stone)] bg-[var(--pc-white)] p-8 transition-all hover:shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:border-[var(--pc-olive)]/30 block"
              showExternalIcon={app.isExternal}
            >
              <div className="flex flex-col h-full">
                <h3 className="text-2xl font-semibold mb-2 text-[var(--pc-navy)] group-hover:text-[var(--pc-olive)] transition-colors">
                  {app.name}
                </h3>
                <p className="text-sm text-[var(--pc-navy)]/70 mb-4 font-medium">
                  {app.tagline}
                </p>
                <p className="text-[var(--pc-navy)]/70 flex-grow">{app.description}</p>
                <div className="mt-6 text-sm font-medium text-[var(--pc-navy)] group-hover:text-[var(--pc-olive)] transition-colors">
                  {app.isExternal ? "Launch app →" : "Learn more →"}
                </div>
              </div>
            </AppLink>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/apps"
            className="inline-flex items-center text-sm font-medium text-[var(--pc-navy)]/70 hover:text-[var(--pc-navy)] transition-colors"
          >
            View all apps →
          </Link>
        </div>
      </Container>
    </section>
  );
}

