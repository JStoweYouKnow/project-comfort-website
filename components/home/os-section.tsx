import Link from "next/link";
import Container from "@/components/shared/container";
import SectionHeader from "@/components/shared/section-header";
import { PILLARS } from "@/lib/constants";

export default function OSSection() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <Container size="lg">
        <SectionHeader
          title="The Project Comfort OS"
          subtitle="A unified approach to building comfort across five core domains"
          className="mb-16"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PILLARS.map((pillar) => (
            <Link
              key={pillar.slug}
              href={`/${pillar.slug}`}
              className="group rounded-lg border border-border bg-background p-6 transition-all hover:shadow-md hover:border-foreground/20"
            >
              <h3 className="text-xl font-semibold mb-2 group-hover:text-foreground/80 transition-colors">
                {pillar.name}
              </h3>
              <p className="text-sm text-muted-foreground">{pillar.description}</p>
            </Link>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/os"
            className="inline-flex items-center justify-center rounded-lg bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
          >
            Explore the Operating System
          </Link>
        </div>
      </Container>
    </section>
  );
}

