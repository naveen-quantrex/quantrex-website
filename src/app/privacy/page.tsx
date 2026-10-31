import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Container, PageHeader } from "@/components/section";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "Privacy policy",
  description: `How ${siteConfig.name} collects, uses and protects personal information submitted through this website.`,
  path: "/privacy",
});

// TODO(Naveen): this is a plain-language draft that matches how the site works today
// (contact form via Resend, hosting on Vercel, no analytics). Have it reviewed by a solicitor
// before you take on clients, and update it if you add analytics, a CRM or other tools.
const LAST_UPDATED = "31 October 2026";

export default function PrivacyPage() {
  const name = siteConfig.name;
  const email = siteConfig.contactEmail;

  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy policy"
        description={`How ${name} handles personal information collected through this website.`}
      />
      <section className="py-14 sm:py-16">
        <Container>
          <div className="prose-legal max-w-3xl">
            <p className="text-sm">Last updated: {LAST_UPDATED}</p>

            <h2>What we collect</h2>
            <p>
              If you use the contact form we collect the details you type in: your name, email address, optional phone
              number, the service you are interested in, and your message.
            </p>
            <p>
              Our hosting provider also records standard technical information when you visit, such as your IP address,
              browser type, and the pages requested. This is used to deliver the site and keep it secure.
            </p>
            <p>This website does not use advertising cookies, analytics or tracking pixels.</p>

            <h2>How we use it</h2>
            <p>
              We use your details to reply to your enquiry and, if you go ahead, to provide the services you ask for. We
              do not add you to a mailing list without asking.
            </p>

            <h2>Who we share it with</h2>
            <p>We do not sell your information. It is handled by the providers we use to run this site:</p>
            <ul>
              <li>
                <strong>Vercel</strong> hosts the website and keeps server logs.
              </li>
              <li>
                <strong>Resend</strong> delivers contact-form messages to our inbox as email.
              </li>
              <li>
                Our email provider stores the messages we receive.
              </li>
            </ul>
            <p>
              Some of these providers process data outside Australia, including in the United States. By submitting the
              form you understand your information may be handled there.
            </p>

            <h2>How long we keep it</h2>
            <p>
              We keep enquiries for as long as needed to respond and for a reasonable period afterwards, then delete
              them. If you become a client, records are kept as required for the work and for tax and legal purposes.
            </p>

            <h2>Your rights</h2>
            <p>
              You can ask to see the personal information we hold about you, ask us to correct it, or ask us to delete
              it. Email <a href={`mailto:${email}`}>{email}</a> and we will respond within a reasonable time. If you are
              unhappy with how we handle your information, contact us first. You can also complain to the Office of the
              Australian Information Commissioner at <a href="https://www.oaic.gov.au">oaic.gov.au</a>.
            </p>

            <h2>Contact</h2>
            <p>
              Questions about this policy: <a href={`mailto:${email}`}>{email}</a>.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
