import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, type LegalSection } from "../components/legal/LegalPage";
import { site } from "../../lib/site";

export const metadata: Metadata = {
  title: "Intellectual Property & Licensing",
  description: `Who owns the work ${site.name} delivers and how third-party assets are licensed.`,
  alternates: { canonical: "/intellectual-property" },
};

const sections: LegalSection[] = [
  {
    id: "what-we-sell",
    heading: "What we sell",
    body: (
      <p>
        {site.name} sells <strong>services</strong> and <strong>original educational material</strong>. We do not sell
        physical goods, and we do not resell software, courses or products owned by other companies.
      </p>
    ),
  },
  {
    id: "client-ownership",
    heading: "Client ownership of custom work",
    body: (
      <p>
        Websites, apps, designs, copy, graphics and videos we create for a client are made specifically for that client.
        Ownership of the final deliverables transfers to the client on full payment, as described in our{" "}
        <Link href="/terms#ip">Terms of Service</Link>.
      </p>
    ),
  },
  {
    id: "our-ip",
    heading: "Our own materials",
    body: (
      <p>
        Our Business Credit Playbook, templates, checklists, reports format and coaching content are original works
        copyrighted by {site.legalName}. Clients receive a personal, non-transferable licence to use them for their own
        business; resale or redistribution is not permitted.
      </p>
    ),
  },
  {
    id: "third-party",
    heading: "Third-party assets we use",
    body: (
      <ul>
        <li><strong>Open-source software</strong> — used under permissive licences such as MIT, Apache-2.0 and BSD, with licence notices preserved.</li>
        <li><strong>Stock images, video, music and fonts</strong> — purchased under commercial licences from reputable libraries, or free-for-commercial-use sources; licence records are kept per project.</li>
        <li><strong>Platforms and plugins</strong> (e.g. Shopify, WordPress, hosting, paid plugins) — licensed in the client’s own account wherever possible so the client holds the licence directly.</li>
        <li><strong>AI-assisted content</strong> — produced with commercial AI tools whose terms permit commercial use of outputs, and reviewed and edited by our team before delivery.</li>
      </ul>
    ),
  },
  {
    id: "trademarks",
    heading: "Trademarks",
    body: (
      <p>
        We never use another company’s logo, trademark or copyrighted material in client work without the owner’s
        permission. Platform names mentioned on this site (e.g. Google, Meta, Shopify) belong to their owners and are used
        only to describe services we work with.
      </p>
    ),
  },
  {
    id: "report",
    heading: "Reporting a concern",
    body: (
      <p>
        If you believe content on our site or in our work infringes your rights, email{" "}
        <a href={`mailto:${site.email.general}`}>{site.email.general}</a> with details. We review and respond within 5
        business days and remove infringing material promptly.
      </p>
    ),
  },
];

export default function IpPage() {
  return (
    <LegalPage
      path="/intellectual-property"
      title="Intellectual Property & Licensing"
      intro={<p>This page explains who owns what we deliver and how we license the third-party components we use.</p>}
      sections={sections}
    />
  );
}