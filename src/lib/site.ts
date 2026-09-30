/**
 * Single source of truth for business identity.
 * Underwriters compare these values against your merchant application, bank
 * account and utility bill — they MUST match exactly.
 * Search for "TODO(confirm)" and replace every placeholder before deploying.
 */

export type Phone = {
  /** E.164 format, used for tel: links */
  e164: string;
  /** Human-readable */
  display: string;
  label: string;
  purpose: string;
  whatsapp?: boolean;
};

export const site = {
  name: "Digital Market Mart",
  shortName: "DMM",
  legalName: "Digital Market Mart LLC", // TODO(confirm): exact name as registered with Maryland SDAT
  entityType: "Maryland limited liability company", // TODO(confirm)
  url: "https://www.digitalmarketmart.com",
  description:
    "Web development, mobile apps, SEO, digital marketing, AI automation and business-credit education for businesses in the USA and GCC.",

  address: {
    street: "30 Summer St",
    city: "Hagerstown",
    region: "MD",
    postalCode: "21740",
    country: "US",
  },

  email: {
    general: "helpdesk@digitalmarketmart.com",
    billing: "helpdesk@digitalmarketmart.com", // TODO(confirm): billing@digitalmarketmart.com if you create it
    privacy: "helpdesk@digitalmarketmart.com", // TODO(confirm): privacy@digitalmarketmart.com if you create it
  },

  phones: {
    sales: {
      e164: "+13014786786",
      display: "+1 (301) 478-6786",
      label: "Sales & New Projects",
      purpose: "New enquiries, quotes and project consultations. Also our WhatsApp Business line.",
      whatsapp: true,
    },
    support: {
      e164: "+12402176149",
      display: "+1 (240) 217-6149",
      label: "Client Support & Billing",
      purpose: "Existing clients: project support, invoices, payments and refund requests.",
    },
  } satisfies Record<string, Phone>,

  hours: [
    { days: "Mon – Fri", time: "9:00 AM – 6:00 PM ET" },
    { days: "Sat – Sun", time: "By appointment" },
  ],

  /** Keep stats consistent across every page (home, /vista, service pages). */
  stats: {
    projects: "150+", // TODO(confirm): use ONE number everywhere
    years: "8+",
    satisfaction: "98%",
  },

  /** Shown on the refund policy & checkout so customers recognise the charge. */
  statementDescriptor: "DIGITALMARKETMART", // TODO(confirm) with your processor

  policy: {
    effectiveDate: "2026-10-01",
    governingLaw: "State of Maryland",
    venue: "Washington County, Maryland",
    refundResponseBusinessDays: 1,
    refundProcessingBusinessDays: "5–10",
    coolingOffBusinessDays: 3,
    retainerNoticeDays: 30,
    educationGuaranteeDays: 14,
    depositPercent: 50,
  },

  social: {
    linkedin: "https://www.linkedin.com/in/digital-market-mart-14b462408", // TODO: switch to a /company/ page
    x: "https://twitter.com/digitalmarketmart",
    instagram: "https://www.instagram.com/digitalmarketmart",
    facebook: "https://facebook.com/digitalmarketmart",
    youtube: "https://youtube.com/@digitalmarketmart",
  },
} as const;

export const fullAddress = `${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.postalCode}`;

export const legalLinks = [
  { href: "/terms-and-conditions", label: "Terms of Service" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/refund-policy", label: "Refund & Cancellation" },
  { href: "/intellectual-property", label: "IP & Licensing" },
] as const;

export function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}