import Container from "@/components/shared/container";
import { APPS } from "@/lib/apps";
import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen bg-[var(--pc-cream)]">
      <Container size="lg">
        <div className="py-20 md:py-32">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h1 className="text-[44px] md:text-[56px] font-bold tracking-tight mb-6 text-[var(--pc-navy)]">
                  About Project Comfort
                </h1>
                <p className="text-lg text-[var(--pc-navy)]/80 leading-relaxed max-w-3xl">
                  Project Comfort grew out of one clear realization: high-performing
                  creatives do better when the chaos around them is thoughtfully removed.
                  I'm James Stowe — a film/partnerships professional turned builder of
                  homes, tools, recipes, and routines that create more freedom and less
                  friction. Over the past decade I shifted from burnout to building
                  systems, and that personal journey became the blueprint for Project
                  Comfort.
                </p>
              </div>

              <div>
                <h2 className="text-[32px] font-semibold mt-12 mb-4 text-[var(--pc-navy)]">
                  The Operating System
                </h2>
                <p className="text-[var(--pc-navy)]/80 leading-relaxed">
                  We believe comfort is an asset — not a luxury. That means designing
                  spaces that let you rest and earn, building tools that do the
                  repetitive work for you, creating food that fuels your days, and
                  movement that sustains your energy. The result: more time, more
                  clarity, and more reliable creative output.
                </p>
              </div>

              <div>
                <h2 className="text-[32px] font-semibold mt-12 mb-4 text-[var(--pc-navy)]">
                  Our Apps
                </h2>
                <ul className="space-y-4 text-[var(--pc-navy)]/80">
                  {APPS.map((app) => (
                    <li key={app.id}>
                      <strong className="text-[var(--pc-navy)] font-semibold">
                        {app.name}
                      </strong>{" "}
                      — {app.description}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-[32px] font-semibold mt-12 mb-4 text-[var(--pc-navy)]">
                  Work With Me
                </h2>
                <p className="text-[var(--pc-navy)]/80 leading-relaxed mb-6">
                  I work with clients across real estate, STRs, and founder systems —
                  helping people implement the Comfort Stack: homes, automations, food,
                  and movement that scale with you.
                </p>
                <Link
                  href="/work-with-me"
                  className="inline-flex items-center justify-center rounded-xl bg-[var(--pc-olive)] text-[var(--pc-white)] px-6 py-3 text-sm font-medium transition-colors hover:bg-[var(--pc-navy)] shadow-[0_4px_20px_rgba(0,0,0,0.05)]"
                >
                  Work with James
                </Link>
              </div>
            </div>

            <aside className="lg:sticky lg:top-24">
              <div className="rounded-2xl border border-[var(--pc-stone)] bg-[var(--pc-white)] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
                <div className="text-sm font-semibold text-[var(--pc-navy)]/70 mb-4">
                  Quick facts
                </div>
                <ul className="space-y-3 text-sm">
                  <li>
                    <strong className="text-[var(--pc-navy)]">Licensing:</strong>{" "}
                    <span className="text-[var(--pc-navy)]/70">
                      Real estate license with Epique Realty
                    </span>
                  </li>
                  <li>
                    <strong className="text-[var(--pc-navy)]">Recipes:</strong>{" "}
                    <span className="text-[var(--pc-navy)]/70">500+ curated</span>
                  </li>
                  <li>
                    <strong className="text-[var(--pc-navy)]">Apps built:</strong>{" "}
                    <span className="text-[var(--pc-navy)]/70">
                      Comfort Finder, Post Planner, Sous, Stylr
                    </span>
                  </li>
                  <li>
                    <strong className="text-[var(--pc-navy)]">Meetup:</strong>{" "}
                    <span className="text-[var(--pc-navy)]/70">
                      Comfort Collective (monthly)
                    </span>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </Container>
    </main>
  );
}

