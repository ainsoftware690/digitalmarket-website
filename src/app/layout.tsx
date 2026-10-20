import type { Metadata, Viewport } from "next";
import { Archivo, Public_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";
import Chatbot from "./components/Chatbot";
import Analytics from "./components/Analytics";
import RevealObserver from "./components/motion/RevealObserver";
import { site } from "@/lib/site";
import { jsonLdString, organizationJsonLd } from "@/lib/seo";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
});

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Digital Marketing & Web Design Agency in Maryland",
    template: `%s | ${site.name}`,
  },
  description:
    "Digital Market Mart designs high-converting websites, then brings in customers with SEO, Google Ads and AI automation. Based in Hagerstown, Maryland.",
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    url: site.url,
    locale: "en_US",
    title: `${site.name}: websites that sell, marketing that fills them`,
    description:
      "Web design, SEO, Google Ads and AI automation from one accountable team in Maryland.",
  },
  twitter: { card: "summary_large_image" },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#032a4c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";

  return (
    <html lang="en-US" className={`${archivo.variable} ${publicSans.variable}`} suppressHydrationWarning>
      <head>
        {/* Marks JS as available before first paint, so scroll reveals never flash. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-ink"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdString(organizationJsonLd()) }}
        />
        <Analytics />
        <RevealObserver />
        <Navbar />
        <div id="main">{children}</div>
        <Chatbot />
        <Footer />

        {recaptchaSiteKey && (
          <Script
            id="recaptcha-script"
            src={`https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`}
            strategy="lazyOnload"
          />
        )}
      </body>
    </html>
  );
}
