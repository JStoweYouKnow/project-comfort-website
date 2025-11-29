import Link from "next/link";
import Container from "@/components/shared/container";

// Version B - Calm + Supportive
const heroContent = {
  headline: "Design a Life That Feels Lighter.",
  subheadline:
    "Project Comfort helps you create calm, energy, and freedom across the core domains of your life — your home, systems, food, style, and movement.",
  primaryCTA: {
    text: "Begin Your Comfort Journey",
    href: "/os",
  },
  secondaryCTA: {
    text: "Browse the App Suite",
    href: "/apps",
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center bg-[var(--pc-cream)]">
      <Container size="lg">
        <div className="py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-[44px] md:text-[56px] font-bold tracking-tight leading-tight text-[var(--pc-navy)] mb-6">
              {heroContent.headline}
            </h1>
            <p className="mt-6 text-lg text-[var(--pc-navy)]/80 leading-relaxed max-w-2xl">
              {heroContent.subheadline}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href={heroContent.primaryCTA.href}
                className="inline-flex items-center justify-center rounded-xl bg-[var(--pc-olive)] text-[var(--pc-white)] px-6 py-3 text-sm font-medium transition-colors hover:bg-[var(--pc-navy)] shadow-[0_4px_20px_rgba(0,0,0,0.05)]"
              >
                {heroContent.primaryCTA.text}
              </Link>
              <Link
                href={heroContent.secondaryCTA.href}
                className="inline-flex items-center justify-center rounded-xl border border-[var(--pc-stone)] bg-[var(--pc-white)] text-[var(--pc-navy)] px-6 py-3 text-sm font-medium transition-colors hover:bg-[var(--pc-stone)]/50"
              >
                {heroContent.secondaryCTA.text}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

