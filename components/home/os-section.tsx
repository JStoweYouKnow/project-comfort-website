import Link from "next/link";
import Container from "@/components/shared/container";
import SectionHeader from "@/components/shared/section-header";
import { PILLARS } from "@/lib/constants";

export default function OSSection() {
  return (
    <section className="py-20 md:py-32 bg-[var(--pc-cream)]">
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
              className="group rounded-2xl border border-[var(--pc-stone)] bg-[var(--pc-white)] p-6 transition-all hover:shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:border-[var(--pc-olive)]/30"
            >
              <h3 className="text-xl font-semibold mb-2 text-[var(--pc-navy)] group-hover:text-[var(--pc-olive)] transition-colors">
                {pillar.name}
              </h3>
              <p className="text-sm text-[var(--pc-navy)]/70">{pillar.description}</p>
            </Link>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/os"
            className="inline-flex items-center justify-center rounded-xl bg-[var(--pc-olive)] text-[var(--pc-white)] px-6 py-3 text-sm font-medium transition-colors hover:bg-[var(--pc-navy)] shadow-[0_4px_20px_rgba(0,0,0,0.05)]"
          >
            Explore the Operating System
          </Link>
        </div>
      </Container>
    </section>
  );
}

