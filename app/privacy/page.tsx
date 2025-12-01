import Container from "@/components/shared/container";
import { APPS } from "@/lib/apps";
import Link from "next/link";

interface PrivacyPageProps {
  searchParams: Promise<{ app?: string }>;
}

export default async function PrivacyPage({
  searchParams,
}: PrivacyPageProps) {
  const { app } = await searchParams;
  const appData = app ? APPS.find((a) => a.slug === app) : null;

  return (
    <main className="min-h-screen bg-[var(--pc-cream)]">
      <Container size="lg">
        <div className="py-20 md:py-32">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-[44px] md:text-[56px] font-bold tracking-tight mb-4 text-[var(--pc-navy)]">
              Privacy Policy
            </h1>
            {appData && (
              <p className="text-lg text-[var(--pc-navy)]/80 mb-8">
                For {appData.name}
              </p>
            )}
            <p className="text-sm text-[var(--pc-navy)]/70 mb-12">
              Last updated: {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>

            <div className="prose prose-lg max-w-none space-y-8 text-[var(--pc-navy)]/80">
              <section>
                <h2 className="text-[32px] font-semibold mb-4 text-[var(--pc-navy)]">
                  Introduction
                </h2>
                <p className="leading-relaxed">
                  Project Comfort ("we," "our," or "us") is committed to protecting
                  your privacy. This Privacy Policy explains how we collect, use,
                  disclose, and safeguard your information when you use our website
                  and applications, including {appData ? appData.name : "our suite of apps"}
                  (collectively, the "Services").
                </p>
              </section>

              <section>
                <h2 className="text-[32px] font-semibold mb-4 text-[var(--pc-navy)]">
                  Information We Collect
                </h2>
                <h3 className="text-xl font-semibold mb-3 text-[var(--pc-navy)]">
                  Information You Provide
                </h3>
                <p className="leading-relaxed mb-4">
                  We collect information that you voluntarily provide when you:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                  <li>Register for an account or use our Services</li>
                  <li>Contact us for support or inquiries</li>
                  <li>Subscribe to newsletters or updates</li>
                  <li>Participate in surveys or feedback</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 text-[var(--pc-navy)] mt-6">
                  Automatically Collected Information
                </h3>
                <p className="leading-relaxed mb-4">
                  When you use our Services, we may automatically collect:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                  <li>Device information and identifiers</li>
                  <li>Usage data and analytics</li>
                  <li>IP address and location data</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </section>

              <section>
                <h2 className="text-[32px] font-semibold mb-4 text-[var(--pc-navy)]">
                  How We Use Your Information
                </h2>
                <p className="leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                  <li>Provide, maintain, and improve our Services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Monitor and analyze usage patterns</li>
                  <li>Detect, prevent, and address technical issues</li>
                </ul>
              </section>

              <section>
                <h2 className="text-[32px] font-semibold mb-4 text-[var(--pc-navy)]">
                  Information Sharing and Disclosure
                </h2>
                <p className="leading-relaxed mb-4">
                  We do not sell, trade, or rent your personal information. We may
                  share your information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                  <li>With service providers who assist in operating our Services</li>
                  <li>To comply with legal obligations or protect our rights</li>
                  <li>In connection with a business transfer or merger</li>
                  <li>With your consent or at your direction</li>
                </ul>
              </section>

              <section>
                <h2 className="text-[32px] font-semibold mb-4 text-[var(--pc-navy)]">
                  Data Security
                </h2>
                <p className="leading-relaxed">
                  We implement appropriate technical and organizational measures to
                  protect your personal information. However, no method of
                  transmission over the Internet or electronic storage is 100% secure,
                  and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-[32px] font-semibold mb-4 text-[var(--pc-navy)]">
                  Your Rights and Choices
                </h2>
                <p className="leading-relaxed mb-4">
                  Depending on your location, you may have certain rights regarding
                  your personal information, including:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                  <li>Access to your personal information</li>
                  <li>Correction of inaccurate data</li>
                  <li>Deletion of your information</li>
                  <li>Objection to processing of your information</li>
                  <li>Data portability</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
                <p className="leading-relaxed">
                  To exercise these rights, please contact us using the information
                  provided in the Contact section below.
                </p>
              </section>

              <section>
                <h2 className="text-[32px] font-semibold mb-4 text-[var(--pc-navy)]">
                  Cookies and Tracking Technologies
                </h2>
                <p className="leading-relaxed">
                  We use cookies and similar technologies to collect and store
                  information. You can control cookie preferences through your browser
                  settings. Note that disabling cookies may affect the functionality
                  of our Services.
                </p>
              </section>

              <section>
                <h2 className="text-[32px] font-semibold mb-4 text-[var(--pc-navy)]">
                  Third-Party Links
                </h2>
                <p className="leading-relaxed">
                  Our Services may contain links to third-party websites or services.
                  We are not responsible for the privacy practices of these third
                  parties. We encourage you to read their privacy policies.
                </p>
              </section>

              <section>
                <h2 className="text-[32px] font-semibold mb-4 text-[var(--pc-navy)]">
                  Children's Privacy
                </h2>
                <p className="leading-relaxed">
                  Our Services are not intended for children under 13 years of age.
                  We do not knowingly collect personal information from children under
                  13. If you become aware that a child has provided us with personal
                  information, please contact us.
                </p>
              </section>

              <section>
                <h2 className="text-[32px] font-semibold mb-4 text-[var(--pc-navy)]">
                  Changes to This Privacy Policy
                </h2>
                <p className="leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify
                  you of any changes by posting the new Privacy Policy on this page
                  and updating the "Last updated" date. You are advised to review
                  this Privacy Policy periodically.
                </p>
              </section>

              <section>
                <h2 className="text-[32px] font-semibold mb-4 text-[var(--pc-navy)]">
                  Contact Us
                </h2>
                <p className="leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy, please contact
                  us:
                </p>
                <div className="rounded-2xl border border-[var(--pc-stone)] bg-[var(--pc-white)] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
                  <p className="text-[var(--pc-navy)] font-medium mb-2">
                    Project Comfort
                  </p>
                  <p className="text-[var(--pc-navy)]/70">
                    Email:{" "}
                    <Link
                      href="mailto:privacy@projectcomfort.com"
                      className="text-[var(--pc-olive)] hover:text-[var(--pc-navy)] underline"
                    >
                      privacy@projectcomfort.com
                    </Link>
                  </p>
                  <p className="text-[var(--pc-navy)]/70 mt-2">
                    Support:{" "}
                    <Link
                      href="/support"
                      className="text-[var(--pc-olive)] hover:text-[var(--pc-navy)] underline"
                    >
                      Visit Support Page
                    </Link>
                  </p>
                </div>
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


