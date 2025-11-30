import Container from "@/components/shared/container";
import { APPS } from "@/lib/apps";
import Link from "next/link";

interface SupportPageProps {
  searchParams: Promise<{ app?: string }>;
}

export default async function SupportPage({
  searchParams,
}: SupportPageProps) {
  const { app } = await searchParams;
  const appData = app ? APPS.find((a) => a.slug === app) : null;

  return (
    <main className="min-h-screen bg-[var(--pc-cream)]">
      <Container size="lg">
        <div className="py-20 md:py-32">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-[44px] md:text-[56px] font-bold tracking-tight mb-4 text-[var(--pc-navy)]">
              Support
            </h1>
            {appData && (
              <p className="text-lg text-[var(--pc-navy)]/80 mb-8">
                For {appData.name}
              </p>
            )}
            <p className="text-lg text-[var(--pc-navy)]/80 mb-12">
              We're here to help. Get the support you need to make the most of{" "}
              {appData ? appData.name : "Project Comfort"}.
            </p>

            <div className="space-y-8">
              {/* Contact Options */}
              <section className="rounded-2xl border border-[var(--pc-stone)] bg-[var(--pc-white)] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
                <h2 className="text-[32px] font-semibold mb-6 text-[var(--pc-navy)]">
                  Get in Touch
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-[var(--pc-navy)]">
                      Email Support
                    </h3>
                    <p className="text-[var(--pc-navy)]/70 mb-4 text-sm">
                      For general inquiries, technical issues, or questions about
                      your account.
                    </p>
                    <Link
                      href="mailto:support@projectcomfort.com"
                      className="inline-flex items-center text-[var(--pc-olive)] hover:text-[var(--pc-navy)] underline font-medium"
                    >
                      support@projectcomfort.com →
                    </Link>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-[var(--pc-navy)]">
                      Business Inquiries
                    </h3>
                    <p className="text-[var(--pc-navy)]/70 mb-4 text-sm">
                      For partnerships, collaborations, or work opportunities.
                    </p>
                    <Link
                      href="/work-with-me"
                      className="inline-flex items-center text-[var(--pc-olive)] hover:text-[var(--pc-navy)] underline font-medium"
                    >
                      Work With Me →
                    </Link>
                  </div>
                </div>
              </section>

              {/* FAQ Section */}
              <section>
                <h2 className="text-[32px] font-semibold mb-6 text-[var(--pc-navy)]">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  <div className="rounded-xl border border-[var(--pc-stone)] bg-[var(--pc-white)] p-6">
                    <h3 className="text-lg font-semibold mb-2 text-[var(--pc-navy)]">
                      How do I get started?
                    </h3>
                    <p className="text-[var(--pc-navy)]/70 text-sm">
                      {appData
                        ? `Visit ${appData.name} to create an account and start using the app. If you need guidance, check out our documentation or reach out via email.`
                        : "Browse our App Suite to find the tool that fits your needs, or explore the Project Comfort OS to understand our approach."}
                    </p>
                  </div>

                  <div className="rounded-xl border border-[var(--pc-stone)] bg-[var(--pc-white)] p-6">
                    <h3 className="text-lg font-semibold mb-2 text-[var(--pc-navy)]">
                      Is my data secure?
                    </h3>
                    <p className="text-[var(--pc-navy)]/70 text-sm">
                      Yes. We take data security seriously and implement industry-standard
                      security measures. Read our{" "}
                      <Link
                        href={`/privacy${app ? `?app=${app}` : ""}`}
                        className="text-[var(--pc-olive)] hover:text-[var(--pc-navy)] underline"
                      >
                        Privacy Policy
                      </Link>{" "}
                      for more details.
                    </p>
                  </div>

                  <div className="rounded-xl border border-[var(--pc-stone)] bg-[var(--pc-white)] p-6">
                    <h3 className="text-lg font-semibold mb-2 text-[var(--pc-navy)]">
                      How do I cancel or manage my subscription?
                    </h3>
                    <p className="text-[var(--pc-navy)]/70 text-sm">
                      Subscription management is available in your account settings
                      within the app. If you need assistance, email us at{" "}
                      <Link
                        href="mailto:support@projectcomfort.com"
                        className="text-[var(--pc-olive)] hover:text-[var(--pc-navy)] underline"
                      >
                        support@projectcomfort.com
                      </Link>
                      .
                    </p>
                  </div>

                  <div className="rounded-xl border border-[var(--pc-stone)] bg-[var(--pc-white)] p-6">
                    <h3 className="text-lg font-semibold mb-2 text-[var(--pc-navy)]">
                      Can I request a feature?
                    </h3>
                    <p className="text-[var(--pc-navy)]/70 text-sm">
                      Absolutely! We love hearing from our users. Send feature requests
                      to{" "}
                      <Link
                        href="mailto:support@projectcomfort.com"
                        className="text-[var(--pc-olive)] hover:text-[var(--pc-navy)] underline"
                      >
                        support@projectcomfort.com
                      </Link>{" "}
                      with "Feature Request" in the subject line.
                    </p>
                  </div>
                </div>
              </section>

              {/* Resources */}
              <section>
                <h2 className="text-[32px] font-semibold mb-6 text-[var(--pc-navy)]">
                  Resources
                </h2>
                <div className="grid md:grid-cols-3 gap-4">
                  <Link
                    href={`/privacy${app ? `?app=${app}` : ""}`}
                    className="rounded-xl border border-[var(--pc-stone)] bg-[var(--pc-white)] p-6 hover:shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all group"
                  >
                    <h3 className="font-semibold mb-2 text-[var(--pc-navy)] group-hover:text-[var(--pc-olive)]">
                      Privacy Policy
                    </h3>
                    <p className="text-sm text-[var(--pc-navy)]/70">
                      How we collect and protect your data
                    </p>
                  </Link>
                  <Link
                    href="/about"
                    className="rounded-xl border border-[var(--pc-stone)] bg-[var(--pc-white)] p-6 hover:shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all group"
                  >
                    <h3 className="font-semibold mb-2 text-[var(--pc-navy)] group-hover:text-[var(--pc-olive)]">
                      About Us
                    </h3>
                    <p className="text-sm text-[var(--pc-navy)]/70">
                      Learn about Project Comfort
                    </p>
                  </Link>
                  <Link
                    href="/apps"
                    className="rounded-xl border border-[var(--pc-stone)] bg-[var(--pc-white)] p-6 hover:shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all group"
                  >
                    <h3 className="font-semibold mb-2 text-[var(--pc-navy)] group-hover:text-[var(--pc-olive)]">
                      All Apps
                    </h3>
                    <p className="text-sm text-[var(--pc-navy)]/70">
                      Explore our full app suite
                    </p>
                  </Link>
                </div>
              </section>

              {/* Response Time */}
              <section className="rounded-2xl border border-[var(--pc-stone)] bg-[var(--pc-white)] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
                <h2 className="text-[32px] font-semibold mb-4 text-[var(--pc-navy)]">
                  Response Times
                </h2>
                <p className="text-[var(--pc-navy)]/70 mb-4">
                  We aim to respond to all inquiries within 24-48 hours during business
                  days. For urgent issues, please include "URGENT" in your email
                  subject line.
                </p>
                <p className="text-sm text-[var(--pc-navy)]/70">
                  Business hours: Monday - Friday, 9:00 AM - 5:00 PM EST
                </p>
              </section>
            </div>

            {appData && (
              <div className="mt-12 pt-8 border-t border-[var(--pc-stone)]">
                <Link
                  href={appData.externalUrl || `/apps/${appData.slug}`}
                  className="text-sm text-[var(--pc-olive)] hover:text-[var(--pc-navy)] underline"
                >
                  ← Back to {appData.name}
                </Link>
              </div>
            )}
          </div>
        </div>
      </Container>
    </main>
  );
}

