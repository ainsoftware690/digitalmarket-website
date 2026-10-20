"use client";

import Script from "next/script";
import { useEffect } from "react";

/**
 * Google Tag Manager + lead events.
 *
 * Set NEXT_PUBLIC_GTM_ID (e.g. GTM-XXXXXXX) in Vercel to switch tracking on.
 * In GTM, add a GA4 Configuration tag and create GA4 Event tags for:
 *   generate_lead   (form submitted; params: form_name)
 *   click_call      (tel: link)
 *   click_whatsapp  (wa.me link)
 *   click_email     (mailto: link)
 *   click_booking   (booking link; data-track="booking")
 * Mark generate_lead and click_call as conversions in GA4 and Google Ads.
 */
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? "";

type DataLayerEvent = Record<string, unknown> & { event: string };

declare global {
  interface Window {
    dataLayer?: DataLayerEvent[];
  }
}

export function track(event: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event, ...params });
}

function eventForLink(a: HTMLAnchorElement): string | null {
  const explicit = a.dataset.track;
  if (explicit) return `click_${explicit}`;
  const href = a.getAttribute("href") ?? "";
  if (href.startsWith("tel:")) return "click_call";
  if (href.startsWith("mailto:")) return "click_email";
  if (href.includes("wa.me/")) return "click_whatsapp";
  return null;
}

export default function Analytics() {
  // One delegated listener covers every call, WhatsApp and email link on the site.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.("a");
      if (!a) return;
      const name = eventForLink(a as HTMLAnchorElement);
      if (name) {
        track(name, {
          link_url: a.getAttribute("href"),
          link_text: a.textContent?.trim().slice(0, 80),
          page_path: window.location.pathname,
        });
      }
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  if (!GTM_ID) return null;

  return (
    <>
      <Script id="gtm" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
      </Script>
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
          title="Google Tag Manager"
        />
      </noscript>
    </>
  );
}
