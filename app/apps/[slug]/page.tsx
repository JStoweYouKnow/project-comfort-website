import Container from "@/components/shared/container";
import { APPS } from "@/lib/apps";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function AppPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const app = APPS.find((a) => a.slug === slug);

  if (!app) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <Container size="lg">
        <div className="py-20 md:py-32">
          <Link
            href="/apps"
            className="text-sm text-muted-foreground hover:text-foreground mb-8 inline-block"
          >
            ← Back to App Suite
          </Link>

          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
              {app.name}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">{app.tagline}</p>

            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                {app.description}
              </p>

              <div className="rounded-lg border border-border bg-muted/30 p-8 mt-12">
                <h2 className="text-2xl font-semibold mb-4">Coming Soon</h2>
                <p className="text-muted-foreground">
                  This app is currently in development. Check back soon for updates,
                  or{" "}
                  <Link href="/work-with-me" className="underline">
                    get in touch
                  </Link>{" "}
                  to be notified when it launches.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}

