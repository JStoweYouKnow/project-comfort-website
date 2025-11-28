import Container from "@/components/shared/container";
import { APPS } from "@/lib/apps";
import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen">
      <Container size="lg">
        <div className="py-20 md:py-32">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
                  About Project Comfort
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
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
                <h2 className="text-2xl md:text-3xl font-semibold mt-12 mb-4">
                  The Operating System
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We believe comfort is an asset — not a luxury. That means designing
                  spaces that let you rest and earn, building tools that do the
                  repetitive work for you, creating food that fuels your days, and
                  movement that sustains your energy. The result: more time, more
                  clarity, and more reliable creative output.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-semibold mt-12 mb-4">
                  Our Apps
                </h2>
                <ul className="space-y-4 text-muted-foreground">
                  {APPS.map((app) => (
                    <li key={app.id}>
                      <strong className="text-foreground font-semibold">
                        {app.name}
                      </strong>{" "}
                      — {app.description}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-semibold mt-12 mb-4">
                  Work With Me
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I work with clients across real estate, STRs, and founder systems —
                  helping people implement the Comfort Stack: homes, automations, food,
                  and movement that scale with you.
                </p>
                <Link
                  href="/work-with-me"
                  className="inline-flex items-center justify-center rounded-lg bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
                >
                  Work with James
                </Link>
              </div>
            </div>

            <aside className="lg:sticky lg:top-24">
              <div className="rounded-lg border border-border bg-muted/30 p-6">
                <div className="text-sm font-semibold text-muted-foreground mb-4">
                  Quick facts
                </div>
                <ul className="space-y-3 text-sm">
                  <li>
                    <strong className="text-foreground">Licensing:</strong>{" "}
                    <span className="text-muted-foreground">
                      Real estate license with Epique Realty
                    </span>
                  </li>
                  <li>
                    <strong className="text-foreground">Recipes:</strong>{" "}
                    <span className="text-muted-foreground">500+ curated</span>
                  </li>
                  <li>
                    <strong className="text-foreground">Apps built:</strong>{" "}
                    <span className="text-muted-foreground">
                      Comfort Finder, Post Planner, Sous, Stylr
                    </span>
                  </li>
                  <li>
                    <strong className="text-foreground">Meetup:</strong>{" "}
                    <span className="text-muted-foreground">
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

