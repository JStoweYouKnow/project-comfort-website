import Container from "@/components/shared/container";
import SectionHeader from "@/components/shared/section-header";
import { PILLARS } from "@/lib/constants";
import Link from "next/link";

export default function OSPage() {
  return (
    <main className="min-h-screen bg-[var(--pc-cream)]">
      <Container size="lg">
        <div className="py-20 md:py-32">
          <SectionHeader
            title="The Project Comfort OS"
            subtitle="A unified approach to building comfort across five core domains of your life"
            className="mb-16"
          />

          <div className="prose prose-lg max-w-none mb-16">
            <p className="text-[var(--pc-navy)]/80 leading-relaxed text-lg">
              We believe comfort is an asset — not a luxury. The Project Comfort OS
              is a framework for designing spaces, systems, food, style, and movement
              that create more freedom, clarity, and reliable creative output.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
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

          <div className="rounded-2xl border border-[var(--pc-stone)] bg-[var(--pc-white)] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
            <h2 className="text-[32px] font-semibold mb-4 text-[var(--pc-navy)]">How It Works</h2>
            <p className="text-[var(--pc-navy)]/80 mb-6">
              Each pillar represents a core domain where we remove friction and build
              systems that scale. Together, they create the foundation for a life that
              feels lighter and performs better.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div>
                <h3 className="font-semibold mb-2 text-[var(--pc-navy)]">Systems Over Hustle</h3>
                <p className="text-sm text-[var(--pc-navy)]/70">
                  Build once, optimize continuously. Automation and smart design replace
                  repetitive work.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-[var(--pc-navy)]">Comfort as Performance</h3>
                <p className="text-sm text-[var(--pc-navy)]/70">
                  When your environment supports you, you create better work with less
                  stress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}

