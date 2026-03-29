import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Privacy Policy | Quantrex",
  description: "Privacy policy for Quantrex Pty Ltd - how we collect, use, and protect your personal information.",
};

const sections = [
  {
    title: "1. Who we are",
    body: 'Quantrex Pty Ltd ("Quantrex", "we", "us", or "our") is an Australian technology company based in Melbourne, Victoria. We provide IT support, field engineering, custom software development, and SaaS products. Our website is quantrex.com.au.',
  },
  {
    title: "2. Information we collect",
    body: "We collect personal information you provide directly, such as your name, email address, phone number, and message when you contact us through our website form. We do not collect sensitive information unless you choose to provide it.",
  },
  {
    title: "3. How we use your information",
    body: "We use the information you provide solely to respond to your enquiry, communicate with you about our services, and fulfil any service agreements we enter into. We do not use your information for unsolicited marketing without your consent.",
  },
  {
    title: "4. Disclosure of information",
    body: "We do not sell, rent, or trade your personal information to third parties. We may share information with trusted service providers who assist us in operating our website and business, under strict confidentiality obligations.",
  },
  {
    title: "5. Data storage and security",
    body: "Your information is stored securely and we take reasonable steps to protect it from misuse, loss, unauthorised access, modification, or disclosure. Our website is hosted on Vercel, Inc. servers.",
  },
  {
    title: "6. Your rights",
    body: "Under the Australian Privacy Act 1988, you have the right to access and correct personal information we hold about you. To make a request, contact us at naveen@quantrex.com.au.",
  },
  {
    title: "7. Cookies",
    body: "Our website may use basic cookies for functionality and analytics purposes. We do not use cookies to identify you personally.",
  },
  {
    title: "8. Third-party links",
    body: "Our website contains links to third-party sites such as VisaDocket and LinkedIn. We are not responsible for the privacy practices of those sites and encourage you to review their policies.",
  },
  {
    title: "9. Contact us",
    body: "If you have questions or complaints about our privacy practices, please contact us at naveen@quantrex.com.au or by calling 0466 300 421.",
  },
  {
    title: "10. Changes to this policy",
    body: "We may update this policy from time to time. The current version will always be available at quantrex.com.au/privacy.",
  },
];

export default function PrivacyPage() {
  return (
    <SiteShell>
      <section className="py-12 sm:py-16">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <p className="section-eyebrow">Legal</p>
            <h1 className="section-title">Privacy Policy</h1>
          </div>
          <p className="section-description lg:ml-auto">Last updated: March 2026 · Quantrex Pty Ltd</p>
        </div>
      </section>

      <section className="pb-24 pt-8">
        <div className="card max-w-4xl p-8 sm:p-10">
          <div className="space-y-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-lg font-semibold tracking-[-0.03em]">{section.title}</h2>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{section.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
