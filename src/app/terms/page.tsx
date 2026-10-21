import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, type LegalSection } from "../components/legal/LegalPage";
import { fullAddress, site } from "../../lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `The terms that apply when you use ${site.name}'s website and services.`,
  alternates: { canonical: "/terms" },
};

const p = site.policy;

const sections: LegalSection[] = [
  {
    id: "who",
    heading: "Who we are",
    body: (
      <p>
        {site.legalName}, a {site.entityType}, located at {fullAddress} (“{site.name}”, “we”, “us”). By using our website
        or buying our services you (“Client”, “you”) agree to these Terms.
      </p>
    ),
  },
  {
    id: "services",
    heading: "Our services",
    body: (
      <>
        <p>
          We provide digital services — web and mobile development, e-commerce, SEO, digital marketing, AI automation and
          content creation — and a Business Credit Education program. Full descriptions are on our{" "}
          <Link href="/services">Services</Link> page.
        </p>
        <p>
          The exact scope, deliverables, timeline and price of each engagement are set out in a written proposal, Statement
          of Work (SOW) or checkout page (“Order”). If an Order conflicts with these Terms, the Order wins for that
          engagement.
        </p>
      </>
    ),
  },
  {
    id: "payment",
    heading: "Pricing and payment",
    body: (
      <ul>
        <li>Prices are in U.S. dollars unless the Order states another currency (e.g. AED for GCC clients), and exclude applicable taxes.</li>
        <li>Project work requires a {p.depositPercent}% deposit; the balance is billed by milestone.</li>
        <li>Monthly services are billed in advance and renew automatically until cancelled as described in our <Link href="/refund-policy">Refund &amp; Cancellation Policy</Link>.</li>
        <li>Invoices are due within 7 days. We may pause work on overdue accounts after written notice.</li>
        <li>Card payments are handled by our payment processor. Charges appear as <strong>{site.statementDescriptor}</strong>.</li>
      </ul>
    ),
  },
  {
    id: "client",
    heading: "Your responsibilities",
    body: (
      <ul>
        <li>Provide accurate information, content, access and timely feedback. Delays on your side may move deadlines.</li>
        <li>Make sure content you give us (logos, text, images) is yours or licensed to you.</li>
        <li>Review deliverables and approve or request changes within 10 business days; after that a milestone is treated as approved.</li>
        <li>Pay third-party costs (ad spend, domains, hosting, paid plugins, app-store fees) unless the Order says otherwise.</li>
      </ul>
    ),
  },
  {
    id: "changes",
    heading: "Revisions and change requests",
    body: (
      <p>
        Each Order includes the number of revision rounds stated in it. Work outside the agreed scope is quoted separately
        and starts only after you approve the change in writing.
      </p>
    ),
  },
  {
    id: "ip",
    heading: "Intellectual property",
    body: (
      <>
        <p>
          <strong>Your deliverables:</strong> once you have paid in full, you own the final custom deliverables we create
          for you (designs, code written for your project, copy, graphics and videos).
        </p>
        <p>
          <strong>Our tools:</strong> we keep ownership of our pre-existing code, frameworks, templates, know-how and
          educational materials. You receive a perpetual, non-exclusive licence to use any of them included in your
          deliverables.
        </p>
        <p>
          <strong>Third-party items</strong> (open-source software, stock media, fonts, plugins, platforms) remain subject
          to their own licences. Details are in our <Link href="/intellectual-property">IP &amp; Licensing Policy</Link>.
        </p>
        <p>We may show non-confidential work in our portfolio unless you ask us not to in writing.</p>
      </>
    ),
  },
  {
    id: "no-guarantee",
    heading: "Results and business-credit disclaimer",
    body: (
      <>
        <p>
          Marketing and SEO results depend on many factors outside our control (search engines, platforms, competition,
          budgets). We do not guarantee specific rankings, traffic, leads or sales.
        </p>
        <p>
          <strong>Business Credit Education is educational only.</strong> {site.name} is not a lender, loan broker, credit
          repair organisation, law firm, accountant or financial adviser. We do not guarantee any credit approval, limit,
          loan or funding; we do not dispute items on any credit report; and we do not sell or broker aged or “shelf”
          corporations. You make all credit and funding decisions yourself. Consult a licensed attorney or CPA for legal or
          tax advice.
        </p>
      </>
    ),
  },
  {
    id: "confidentiality",
    heading: "Confidentiality",
    body: <p>Each party keeps the other’s non-public business information confidential and uses it only to perform the engagement. See our <Link href="/privacy">Privacy Policy</Link> for personal data.</p>,
  },
  {
    id: "termination",
    heading: "Cancellation and termination",
    body: (
      <p>
        You may cancel as described in our <Link href="/refund-policy">Refund &amp; Cancellation Policy</Link>. Either party
        may terminate an Order if the other materially breaches these Terms and does not fix the breach within 10 days of
        written notice. You pay for work performed up to termination.
      </p>
    ),
  },
  {
    id: "liability",
    heading: "Warranties and limitation of liability",
    body: (
      <>
        <p>
          We perform services with reasonable skill and care. Except as stated in these Terms, services are provided “as
          is” without other warranties, to the extent permitted by law.
        </p>
        <p>
          To the extent permitted by law, our total liability for any claim is limited to the amount you paid us for the
          service giving rise to the claim in the 12 months before it arose, and neither party is liable for indirect or
          consequential losses (such as lost profits or data). Nothing limits liability that cannot be limited by law.
        </p>
      </>
    ),
  },
  {
    id: "website",
    heading: "Website use",
    body: <p>Do not misuse the website — no hacking, scraping at scale, spam or unlawful use. Website content is owned by {site.legalName} and may not be copied without permission.</p>,
  },
  {
    id: "law",
    heading: "Governing law and disputes",
    body: (
      <p>
        These Terms are governed by the laws of the {p.governingLaw}, USA. We will first try to resolve any dispute
        informally — please contact us. Unresolved disputes will be heard in the state or federal courts located in{" "}
        {p.venue}.
      </p>
    ),
  },
  {
    id: "misc",
    heading: "General",
    body: (
      <p>
        We may update these Terms; the version in effect when you place an Order applies to it. If any part is found
        unenforceable, the rest remains in force. Contact: <a href={`mailto:${site.email.general}`}>{site.email.general}</a>{" "}
        I consent to receive marketing text messages, such as Promotional Texts, Sales, Special offers, etc., from GetMeConnect at the phone number I provided, including messages sent via auto dialer. I understand that my consent is not a condition of purchase. Message and data rates may apply. Message frequency varies. Reply HELP for assistance or STOP to opt out of receiving messages.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      path="/terms"
      title="Terms of Service"
      intro={<p>Please read these Terms carefully. They explain what we provide, how billing works, and each party’s rights.</p>}
      sections={sections}
    />
  );
}