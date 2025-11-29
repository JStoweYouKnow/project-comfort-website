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
    <main className="min-h-screen bg-[var(--pc-cream)]">
      <Container size="lg">
        <div className="py-20 md:py-32">
          <Link
            href="/apps"
            className="text-sm text-[var(--pc-navy)]/70 hover:text-[var(--pc-navy)] mb-8 inline-block transition-colors"
          >
            ← Back to App Suite
          </Link>

          <div className="max-w-3xl">
            <h1 className="text-[44px] md:text-[56px] font-bold tracking-tight mb-4 text-[var(--pc-navy)]">
              {app.name}
            </h1>
            <p className="text-xl text-[var(--pc-navy)]/80 mb-8">{app.tagline}</p>

            <div className="prose prose-lg max-w-none">
              <p className="text-[var(--pc-navy)]/80 leading-relaxed text-lg mb-8">
                {app.description}
              </p>

              {app.externalUrl ? (
                <div className="rounded-2xl border border-[var(--pc-stone)] bg-[var(--pc-white)] p-8 mt-12 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
                  <h2 className="text-[32px] font-semibold mb-4 text-[var(--pc-navy)]">Launch {app.name}</h2>
                  <p className="text-[var(--pc-navy)]/80 mb-6">
                    {app.name} is live and ready to use. Click below to launch the app.
                  </p>
                  <a
                    href={app.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl bg-[var(--pc-olive)] text-[var(--pc-white)] px-6 py-3 text-sm font-medium transition-colors hover:bg-[var(--pc-navy)] shadow-[0_4px_20px_rgba(0,0,0,0.05)]"
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
                <div className="rounded-2xl border border-[var(--pc-stone)] bg-[var(--pc-white)] p-8 mt-12 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
                  <h2 className="text-[32px] font-semibold mb-4 text-[var(--pc-navy)]">Coming Soon</h2>
                  <p className="text-[var(--pc-navy)]/80">
                    This app is currently in development. Check back soon for updates,
                    or{" "}
                    <Link href="/work-with-me" className="text-[var(--pc-olive)] underline hover:text-[var(--pc-navy)]">
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

