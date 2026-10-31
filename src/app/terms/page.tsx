import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Container, PageHeader } from "@/components/section";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: "Website terms",
  description: `Terms of use for the ${siteConfig.name} website.`,
  path: "/terms",
});

// TODO(Naveen): short draft for the website only. Client work should be covered by a separate written
// agreement. Have a solicitor review both before you take on clients.
const LAST_UPDATED = "31 October 2026";

export default function TermsPage() {
  const name = siteConfig.name;
  const email = siteConfig.contactEmail;

  return (
    <>
      <PageHeader eyebrow="Legal" title="Website terms" description={`Simple terms for using the ${name} website.`} />
      <section className="py-14 sm:py-16">
        <Container>
          <div className="prose-legal max-w-3xl">
            <p className="text-sm">Last updated: {LAST_UPDATED}</p>

            <h2>Using this website</h2>
            <p>
              This website is provided for general information about {name} and its services. By using it you agree to
              these terms. Please do not misuse it, attempt to disrupt it, or send unlawful or abusive content through the
              contact form.
            </p>

            <h2>No advice or guarantee</h2>
            <p>
              Content here is general and is not professional, legal or financial advice. We take care to keep it
              accurate but do not promise it is complete or up to date.
            </p>

            <h2>Services are agreed separately</h2>
            <p>
              Nothing on this website is an offer that you can accept by clicking a button. Any work is agreed in writing
              with scope, price and terms before it starts.
            </p>

            <h2>Intellectual property</h2>
            <p>
              The content and design of this website belong to {name} or its licensors. Names of other products and
              companies belong to their owners and are used only to identify them.
            </p>

            <h2>Links to other sites</h2>
            <p>We link to third-party websites for convenience and are not responsible for their content.</p>

            <h2>Limits on liability</h2>
            <p>
              To the extent the law allows, we are not liable for loss arising from your use of this website. Nothing
              here limits any rights you have under the Australian Consumer Law that cannot be excluded.
            </p>

            <h2>Governing law</h2>
            <p>These terms are governed by the laws of Victoria, Australia.</p>

            <h2>Contact</h2>
            <p>
              Questions: <a href={`mailto:${email}`}>{email}</a>.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
