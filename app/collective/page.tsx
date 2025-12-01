import Container from "@/components/shared/container";
import SectionHeader from "@/components/shared/section-header";
import Link from "next/link";

export default function CollectivePage() {
  return (
    <main className="min-h-screen">
      <Container size="lg">
        <div className="py-20 md:py-32">
          <SectionHeader
            title="Comfort Collective"
            subtitle="A monthly meetup for ambitious creatives building systems and spaces that work"
            className="mb-12"
          />

          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                The Comfort Collective is a monthly gathering where we share ideas,
                systems, and strategies for building lives that feel lighter and perform
                better. Whether you're working on real estate deals, building tools, or
                optimizing your daily routines, this is a space to connect with others
                doing similar work.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-muted/30 p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">What to Expect</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Case studies and lessons learned from real estate, STR operations,
                    and system builds
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Tool demos and workflow walkthroughs</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Q&A and discussion on specific challenges</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Networking with like-minded builders and creators</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-background p-8 text-center">
              <h2 className="text-2xl font-semibold mb-4">Join Us</h2>
              <p className="text-muted-foreground mb-6">
                Next meetup details and registration coming soon. Stay updated by
                subscribing to the newsletter or{" "}
                <Link href="/work-with-me" className="underline">
                  getting in touch
                </Link>
                .
              </p>
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-6 py-3 text-sm font-medium transition-colors hover:bg-muted"
              >
                Get Notified
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}


