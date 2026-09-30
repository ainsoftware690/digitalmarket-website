import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, type LegalSection } from "../components/legal/LegalPage";
import { fullAddress, site } from "../../lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses and protects your personal information.`,
  alternates: { canonical: "/privacy" },
};

const sections: LegalSection[] = [
  {
    id: "collect",
    heading: "Information we collect",
    body: (
      <>
        <p><strong>Information you give us:</strong></p>
        <ul>
          <li>Contact details — name, email, phone/WhatsApp number, company name.</li>
          <li>Project information — what you send us through forms, email, calls or messages.</li>
          <li>
            Billing details — billing name and address. Card payments are processed by our PCI-DSS compliant payment
            processor; <strong>we never see or store your full card number</strong>.
          </li>
          <li>
            Business Credit Education clients — business information you choose to share (entity details, EIN, business
            documents). We do not ask for or pull your personal credit report.
          </li>
        </ul>
        <p><strong>Information collected automatically:</strong> IP address, browser and device type, pages visited and referring site, collected through cookies and analytics tools.</p>
      </>
    ),
  },
  {
    id: "use",
    heading: "How we use it",
    body: (
      <ul>
        <li>To reply to enquiries, prepare quotes and deliver the services you buy.</li>
        <li>To send invoices, process payments and handle refunds.</li>
        <li>To provide support and keep project records.</li>
        <li>To improve our website and measure marketing performance.</li>
        <li>To send marketing emails or messages — only with your consent; you can unsubscribe at any time.</li>
        <li>To comply with legal, tax, accounting and fraud-prevention obligations.</li>
      </ul>
    ),
  },
  {
    id: "share",
    heading: "Who we share it with",
    body: (
      <>
        <p><strong>We do not sell your personal information</strong> and do not share it for cross-context behavioural advertising in exchange for money.</p>
        <p>We share information only with:</p>
        <ul>
          <li>Service providers acting for us — payment processing, hosting, email, CRM, scheduling and analytics — under contracts that require them to protect it.</li>
          <li>Platforms you ask us to work in (for example your Google Ads, Meta or Shopify account).</li>
          <li>Authorities, when required by law or to protect our rights, or in a business transfer (merger or sale).</li>
        </ul>
      </>
    ),
  },
  {
    id: "cookies",
    heading: "Cookies and analytics",
    body: (
      <p>
        We use essential cookies to run the site and optional analytics/advertising cookies to understand traffic. You can
        block or delete cookies in your browser settings; the site will still work. We honour Global Privacy Control (GPC)
        signals as an opt-out of targeted advertising where the law requires it.
      </p>
    ),
  },
  {
    id: "retention",
    heading: "How long we keep it",
    body: (
      <p>
        Enquiry data: up to 24 months after last contact. Client and billing records: up to 7 years for tax and accounting
        purposes. You can ask us to delete information earlier where the law allows.
      </p>
    ),
  },
  {
    id: "security",
    heading: "Security",
    body: (
      <p>
        We use HTTPS/TLS on every page, access controls, two-factor authentication on business accounts and reputable
        providers. No system is 100% secure; if a breach affects you we will notify you as required by law.
      </p>
    ),
  },
  {
    id: "rights",
    heading: "Your privacy rights",
    body: (
      <>
        <p>
          Depending on where you live (for example Maryland, California and other U.S. states, the UAE, Saudi Arabia, Qatar,
          the EU or UK), you may have the right to:
        </p>
        <ul>
          <li>know and access the personal information we hold about you;</li>
          <li>correct inaccurate information;</li>
          <li>delete your information;</li>
          <li>receive a portable copy;</li>
          <li>opt out of targeted advertising, sale or profiling;</li>
          <li>withdraw consent and appeal a decision we make on your request.</li>
        </ul>
        <p>
          Email <a href={`mailto:${site.email.privacy}`}>{site.email.privacy}</a> with the subject “Privacy Request”. We
          verify your identity and respond within 45 days. We will not discriminate against you for exercising your rights.
        </p>
      </>
    ),
  },
  {
    id: "international",
    heading: "International clients",
    body: (
      <p>
        We are based in the United States and serve clients in the USA and GCC. Your information may be processed in the
        United States and other countries where our providers operate, with appropriate safeguards.
      </p>
    ),
  },
  {
    id: "children",
    heading: "Children",
    body: <p>Our services are for businesses and adults. We do not knowingly collect information from anyone under 18.</p>,
  },
  {
    id: "contact",
    heading: "Contact and changes",
    body: (
      <p>
        {site.legalName}, {fullAddress} · <a href={`mailto:${site.email.privacy}`}>{site.email.privacy}</a> ·{" "}
        {site.phones.support.display}. We may update this policy and will change the effective date above. See also our{" "}
        <Link href="/terms">Terms of Service</Link>.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      path="/privacy"
      title="Privacy Policy"
      intro={
        <p>
          This Privacy Policy explains how {site.legalName} (“{site.name}”, “we”, “us”) collects, uses and protects personal
          information when you visit {site.url.replace("https://", "")} or use our services.
        </p>
      }
      sections={sections}
    />
  );
}