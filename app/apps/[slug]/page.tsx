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

              {app.externalUrl ? (
                <div className="rounded-lg border border-border bg-muted/30 p-8 mt-12">
                  <h2 className="text-2xl font-semibold mb-4">Launch {app.name}</h2>
                  <p className="text-muted-foreground mb-6">
                    {app.name} is live and ready to use. Click below to launch the app.
                  </p>
                  <a
                    href={app.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-lg bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
                  >
                    Launch {app.name}
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              ) : (
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
              )}
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}

