import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, type LegalSection } from "../components/legal/LegalPage";
import { site } from "../../lib/site";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy",
  description: `How refunds, cancellations and billing disputes work at ${site.name}.`,
  alternates: { canonical: "/refund-policy" },
};

const p = site.policy;

const sections: LegalSection[] = [
  {
    id: "summary",
    heading: "At a glance",
    body: (
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-800">
              <th className="py-2 pr-4 font-semibold">Service type</th>
              <th className="py-2 pr-4 font-semibold">Cancel / refund rule</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800 align-top">
            <tr>
              <td className="py-3 pr-4">Project services (websites, apps, e-commerce, automation builds)</td>
              <td className="py-3 pr-4">
                Full refund within {p.coolingOffBusinessDays} business days of payment if work has not started. After that,
                pro-rated refund for milestones not yet delivered.
              </td>
            </tr>
            <tr>
              <td className="py-3 pr-4">Monthly services (SEO, marketing, content, automation support)</td>
              <td className="py-3 pr-4">
                Cancel any time with {p.retainerNoticeDays} days’ written notice. No further charges after the notice
                period. The current paid month is not refunded.
              </td>
            </tr>
            <tr>
              <td className="py-3 pr-4">Business Credit Education program</td>
              <td className="py-3 pr-4">
                {p.educationGuaranteeDays}-day money-back guarantee if no more than one coaching session has been used.
                Pro-rated after that.
              </td>
            </tr>
            <tr>
              <td className="py-3 pr-4">Third-party costs (ad spend, domains, hosting, licences, app-store fees)</td>
              <td className="py-3 pr-4">Not refundable by us once purchased from the third party.</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    id: "projects",
    heading: "Project-based services",
    body: (
      <>
        <p>
          Projects start with a {p.depositPercent}% deposit. The remaining balance is billed by milestone as set out in
          your proposal or Statement of Work (SOW).
        </p>
        <ul>
          <li>
            <strong>Before work begins:</strong> if you cancel within {p.coolingOffBusinessDays} business days of paying the
            deposit and before the kickoff call, you receive a 100% refund.
          </li>
          <li>
            <strong>After work begins:</strong> we refund the portion of fees paid for milestones that have not been started,
            less the value of work already completed (discovery, design, development hours), which we will itemise.
          </li>
          <li>
            <strong>Approved milestones:</strong> milestones you have reviewed and approved in writing (including by email)
            are non-refundable.
          </li>
          <li>
            <strong>Not as described:</strong> if a deliverable does not match the agreed SOW, tell us within 14 days of
            delivery. We will fix it at no charge; if we cannot, we refund the fee for that milestone.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "monthly",
    heading: "Monthly and retainer services",
    body: (
      <>
        <p>
          Monthly services renew automatically on the same day each month until cancelled. You will be told the price and
          billing date before you are first charged.
        </p>
        <ul>
          <li>Cancel by emailing {site.email.billing} — we confirm cancellation in writing within 1 business day.</li>
          <li>
            Cancellation takes effect at the end of the {p.retainerNoticeDays}-day notice period; you will not be charged for
            any cycle that starts after that.
          </li>
          <li>Fees already paid for the current cycle are not refunded, as the team and tools are reserved for you.</li>
          <li>
            Advertising budgets paid directly to Google, Meta, TikTok, Snap or other platforms are governed by those
            platforms’ terms and are not refundable by {site.name}.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "education",
    heading: "Business Credit Education program",
    body: (
      <>
        <p>
          If you are not satisfied, request a refund within {p.educationGuaranteeDays} days of purchase. You receive a full
          refund provided you have used no more than one coaching session.
        </p>
        <p>
          After {p.educationGuaranteeDays} days, or after more than one session, we refund the value of unused coaching
          sessions on a pro-rated basis. Digital materials already delivered are not refundable.
        </p>
        <p>
          This program is educational. Refunds are <strong>not</strong> based on whether you are approved for credit or
          funding, because no outcome is promised — see our{" "}
          <Link href="/services/business-credit-education">program page</Link>.
        </p>
      </>
    ),
  },
  {
    id: "how-to-request",
    heading: "How to request a refund",
    body: (
      <ol>
        <li>
          Email <a href={`mailto:${site.email.billing}`}>{site.email.billing}</a> or call{" "}
          <a href={`tel:${site.phones.support.e164}`}>{site.phones.support.display}</a> (Client Support &amp; Billing).
        </li>
        <li>Include your name, invoice or order number, the service, and the reason for your request.</li>
        <li>We acknowledge every request within {p.refundResponseBusinessDays} business day and decide within 5 business days.</li>
        <li>
          Approved refunds go back to the original payment method within {p.refundProcessingBusinessDays} business days. Your
          bank may take a few extra days to show the credit.
        </li>
      </ol>
    ),
  },
  {
    id: "billing",
    heading: "Billing descriptor and disputes",
    body: (
      <>
        <p>
          Card charges appear on your statement as <strong>{site.statementDescriptor}</strong>. If you do not recognise a
          charge or believe you were billed in error, please contact us first — we can usually resolve billing issues the
          same day, faster than a bank dispute.
        </p>
        <p>
          We keep records of proposals, approvals, deliverables and session attendance, and will share them with your card
          issuer if a dispute is opened.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    heading: "Changes to this policy",
    body: (
      <p>
        We may update this policy. The version in effect on the date you paid applies to that purchase. See also our{" "}
        <Link href="/terms">Terms of Service</Link>.
      </p>
    ),
  },
];

export default function RefundPolicyPage() {
  return (
    <LegalPage
      path="/refund-policy"
      title="Refund & Cancellation Policy"
      intro={
        <p>
          We want every client to be confident paying {site.legalName} (“{site.name}”, “we”). This policy explains when you
          can cancel, when you are entitled to a refund and how to request one. It forms part of our{" "}
          <Link href="/terms">Terms of Service</Link>.
        </p>
      }
      sections={sections}
    />
  );
}