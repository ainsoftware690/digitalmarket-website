"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { track } from "./Analytics";
import { site } from "@/lib/site";

declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, opts: { action: string }) => Promise<string>;
    };
  }
}

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";

export const SERVICE_OPTIONS = [
  "Website design & development",
  "E-commerce store",
  "Mobile app",
  "SEO & local SEO",
  "Google & Meta ads",
  "Content & short-form video",
  "AI chatbot & automation",
  "Not sure yet",
] as const;

/** Maps /contact?service=<service slug> to a dropdown option. */
export const SERVICE_OPTION_BY_SLUG: Record<string, (typeof SERVICE_OPTIONS)[number]> = {
  "web-development": "Website design & development",
  "e-commerce-development": "E-commerce store",
  "mobile-app-development": "Mobile app",
  "seo-optimizer": "SEO & local SEO",
  "digital-marketing": "Google & Meta ads",
  "ai-content-video-creation": "Content & short-form video",
  "ai-automation-systems": "AI chatbot & automation",
};

const BUDGETS = ["Under $1,000", "$1,000 – $2,500", "$2,500 – $5,000", "$5,000 – $10,000", "$10,000+", "Not sure yet"];

type Variant = "audit" | "contact";

async function getRecaptchaToken(action: string): Promise<string> {
  if (!RECAPTCHA_SITE_KEY || typeof window === "undefined" || !window.grecaptcha) return "";
  return new Promise((resolve) => {
    window.grecaptcha!.ready(() => {
      window.grecaptcha!.execute(RECAPTCHA_SITE_KEY, { action }).then(resolve, () => resolve(""));
    });
  });
}

export default function LeadForm({ variant, defaultService = "" }: { variant: Variant; defaultService?: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState<string>("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;

    if (variant === "audit") {
      const phone = data.phone?.trim() ?? "";
      const smsConsent = data.sms_consent === "yes";
      if (smsConsent && phone.replace(/\D/g, "").length < 10) {
        setStatus("error");
        setError("Add your mobile number to receive text messages, or untick the text message box.");
        return;
      }
      data.service = "Free audit";
      const goal = data.goal?.trim();
      data.message = [
        "Free audit request.",
        `Website: ${data.website || "(none yet)"}`,
        `Main goal: ${goal || "(not given)"}`,
        `Phone: ${phone || "(not given)"}`,
        `SMS consent: ${smsConsent ? `YES, given ${new Date().toISOString()} on ${window.location.href}` : "No"}`,
      ].join("\n");
    }

    setStatus("sending");
    setError("");
    try {
      const token = await getRecaptchaToken(variant === "audit" ? "free_audit" : "contact");
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, token }),
      });
      const json = (await res.json().catch(() => ({}))) as { message?: string; errors?: string[] };
      if (!res.ok) {
        setStatus("error");
        setError(json.errors?.join(". ") || json.message || "The message didn't send. Check the fields and try again.");
        return;
      }
      setStatus("sent");
      form.reset();
      track("generate_lead", { form_name: variant === "audit" ? "free_audit" : "contact", service: data.service || "" });
    } catch {
      setStatus("error");
      setError(`The message didn't send. Check your connection, or email ${site.email.general}.`);
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="rounded-[var(--radius-panel)] border border-line bg-white p-8">
        <CheckCircle2 className="h-10 w-10 text-go" aria-hidden />
        <h2 className="title mt-4 text-2xl text-ink">{variant === "audit" ? "Audit requested" : "Message sent"}</h2>
        <p className="mt-3 text-[17px] leading-relaxed text-muted">
          {variant === "audit"
            ? "We'll review your site and send your audit video by email within two business days. A confirmation is on its way to your inbox now."
            : "We reply within one business day. A confirmation is on its way to your inbox now."}
        </p>
        <p className="mt-6 text-[15px] text-muted">
          Need us sooner? Call{" "}
          <a href={`tel:${site.phones.sales.e164}`} className="link">
            {site.phones.sales.display}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-[var(--radius-panel)] border border-line bg-white p-6 sm:p-8" noValidate={false}>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your name" name="name" autoComplete="name" required minLength={2} maxLength={120} />
        <Field label="Work email" name="email" type="email" autoComplete="email" required />
        {variant === "audit" ? (
          <>
            <Field
              label="Website address"
              name="website"
              type="url"
              placeholder="https://"
              autoComplete="url"
              hint="Leave blank if you don't have one yet."
              className="sm:col-span-2"
            />
            <Field label="Business name" name="company" autoComplete="organization" maxLength={160} />
            <Select label="Monthly marketing budget" name="budget" options={BUDGETS} />
            <Field
              label="Mobile number"
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="(301) 555-0123"
              maxLength={25}
              hint="Optional. Needed only if you want text messages."
              className="sm:col-span-2"
            />
            <div className="sm:col-span-2">
              <label htmlFor="goal" className="block text-[15px] font-semibold text-ink">
                What would you most like to improve?
              </label>
              <textarea id="goal" name="goal" rows={3} maxLength={1000} className="field mt-2" placeholder="For example: more calls from Google, more online bookings" />
            </div>
            <div className="sm:col-span-2 flex gap-3 rounded-[var(--radius-card)] border border-line bg-paper p-4">
              <input
                id="sms_consent"
                name="sms_consent"
                type="checkbox"
                value="yes"
                className="mt-1 h-5 w-5 shrink-0 cursor-pointer rounded border-line-strong accent-[#d2420e]"
              />
              <label htmlFor="sms_consent" className="cursor-pointer text-[14px] leading-relaxed text-muted">
                I consent to receive text messages about appointment reminders, audit updates and project notifications from{" "}
                {site.name} at the phone number I provided. I acknowledge that my consent is not a condition of purchase.
                Msg &amp; data rates may apply. Msg frequency varies. Reply HELP for assistance or STOP to opt out of receiving
                messages. For more information, please review our{" "}
                <Link href="/privacy" className="font-semibold text-ink underline">
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link href="/terms" className="font-semibold text-ink underline">
                  Terms and Conditions
                </Link>
                .
              </label>
            </div>
          </>
        ) : (
          <>
            <Field label="Business name" name="company" autoComplete="organization" maxLength={160} />
            <Select label="What do you need?" name="service" options={[...SERVICE_OPTIONS]} defaultValue={defaultService} />
            <Field label="Website address" name="website" type="url" placeholder="https://" autoComplete="url" className="sm:col-span-2" />
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-[15px] font-semibold text-ink">
                How can we help? <span className="font-normal text-muted">(required)</span>
              </label>
              <textarea id="message" name="message" rows={5} required minLength={10} maxLength={5000} className="field mt-2" />
            </div>
          </>
        )}
      </div>

      {status === "error" && (
        <p role="alert" className="mt-5 rounded-lg bg-signal-wash px-4 py-3 text-[15px] font-medium text-ink">
          {error}
        </p>
      )}

      <button type="submit" disabled={status === "sending"} className="btn btn-primary mt-6 h-14 w-full text-[1.05rem] disabled:opacity-70 sm:w-auto sm:px-10">
        {status === "sending" ? "Sending…" : variant === "audit" ? "Request my free audit" : "Send message"}
      </button>

      <p className="mt-4 text-[13px] leading-relaxed text-subtle">
        We use your details only to reply. See our{" "}
        <Link href="/privacy" className="underline">
          privacy policy
        </Link>
        .{RECAPTCHA_SITE_KEY && (
          <>
            {" "}This form is protected by reCAPTCHA and the Google{" "}
            <a href="https://policies.google.com/privacy" className="underline" target="_blank" rel="noopener noreferrer">Privacy Policy</a> and{" "}
            <a href="https://policies.google.com/terms" className="underline" target="_blank" rel="noopener noreferrer">Terms of Service</a> apply.
          </>
        )}
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  hint,
  className = "",
  ...rest
}: { label: string; name: string; hint?: string; className?: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className={className}>
      <label htmlFor={name} className="block text-[15px] font-semibold text-ink">
        {label} {rest.required && <span className="font-normal text-muted">(required)</span>}
      </label>
      <input id={name} name={name} className="field mt-2" aria-describedby={hint ? `${name}-hint` : undefined} {...rest} />
      {hint && (
        <p id={`${name}-hint`} className="mt-1.5 text-[13px] text-subtle">
          {hint}
        </p>
      )}
    </div>
  );
}

function Select({ label, name, options, defaultValue = "" }: { label: string; name: string; options: string[]; defaultValue?: string }) {
  const value = options.includes(defaultValue) ? defaultValue : "";
  return (
    <div>
      <label htmlFor={name} className="block text-[15px] font-semibold text-ink">
        {label}
      </label>
      <select id={name} name={name} defaultValue={value} className="field mt-2">
        <option value="">Choose one</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}