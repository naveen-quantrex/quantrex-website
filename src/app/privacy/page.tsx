import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import { SectionIntro } from "@/components/section";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "Privacy Policy — Quantrex",
  description:
    "Quantrex privacy policy. How we collect, use, and protect personal information submitted through our website.",
  path: "/privacy",
  keywords: ["Quantrex privacy policy", "data handling", "Australian Privacy Act"],
});

export default function PrivacyPage() {
  return (
    <SiteShell>
      <section className="py-12 sm:py-16">
        <SectionIntro
          eyebrow="Privacy"
          title="How we handle your information."
          description="Quantrex is committed to handling personal information responsibly and in accordance with the Australian Privacy Act 1988."
        />
      </section>

      <section className="pb-20">
        <div className="card p-6 sm:p-10">
          <div className="space-y-10 text-sm leading-8 text-[var(--muted)] sm:text-base">
            <p className="text-xs text-[var(--muted)]">Last updated: May 2026</p>

            <div className="space-y-3">
              <h2 className="text-lg font-semibold tracking-[-0.03em] text-[var(--text)]">
                What we collect
              </h2>
              <p>
                When you submit the contact form on this website, we collect the information you
                enter: your name, email address, and phone number. We do not collect any other
                personal information automatically, and we do not use tracking cookies or
                third-party analytics tools.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-semibold tracking-[-0.03em] text-[var(--text)]">
                How we use it
              </h2>
              <p>
                The information you submit is used solely to respond to your enquiry. We will
                reply via email or phone as appropriate, and we will not contact you for any
                other purpose unless you have asked us to.
              </p>
              <p>
                We do not add contact form submissions to any mailing list, marketing sequence,
                or CRM without your explicit consent.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-semibold tracking-[-0.03em] text-[var(--text)]">
                Who we share it with
              </h2>
              <p>
                We do not sell, rent, or share your personal information with any third party
                for their own purposes. Your details stay within Quantrex and are used only to
                handle your enquiry.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-semibold tracking-[-0.03em] text-[var(--text)]">
                Third-party services
              </h2>
              <p>
                Contact form submissions are routed through{" "}
                <a
                  href="https://resend.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--accent-strong)] underline underline-offset-2 transition-opacity hover:opacity-80"
                >
                  Resend
                </a>
                , an email delivery service. Resend processes the message content and your
                contact details only to the extent required to deliver the email to us. Resend
                does not use this data for any other purpose. You can read their privacy policy
                at{" "}
                <a
                  href="https://resend.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--accent-strong)] underline underline-offset-2 transition-opacity hover:opacity-80"
                >
                  resend.com/privacy
                </a>
                .
              </p>
              <p>
                This website does not use Google Analytics, Meta Pixel, or any other
                behavioural tracking technology.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-semibold tracking-[-0.03em] text-[var(--text)]">
                Your rights
              </h2>
              <p>
                Under the Australian Privacy Act 1988, you have the right to access the
                personal information we hold about you and to request its correction or
                deletion. If you would like to exercise any of these rights, email us and we
                will respond within a reasonable time.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-semibold tracking-[-0.03em] text-[var(--text)]">
                Contact us
              </h2>
              <p>
                If you have any questions about this policy or wish to request deletion of your
                data, contact us at{" "}
                <a
                  href="mailto:hello@quantrex.com.au"
                  className="text-[var(--accent-strong)] underline underline-offset-2 transition-opacity hover:opacity-80"
                >
                  hello@quantrex.com.au
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
