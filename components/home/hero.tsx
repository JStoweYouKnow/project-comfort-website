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
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center bg-gradient-to-b from-background to-muted/20">
      <Container size="lg">
        <div className="py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight text-foreground">
              {heroContent.headline}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              {heroContent.subheadline}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href={heroContent.primaryCTA.href}
                className="inline-flex items-center justify-center rounded-lg bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
              >
                {heroContent.primaryCTA.text}
              </Link>
              <Link
                href={heroContent.secondaryCTA.href}
                className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-6 py-3 text-sm font-medium transition-colors hover:bg-muted"
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

