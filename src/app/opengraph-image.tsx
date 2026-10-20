import { ImageResponse } from "next/og";

export const alt = "Digital Market Mart: websites that sell, marketing that fills them";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Default social share image for every page (LinkedIn, WhatsApp, X, Facebook). */
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#032a4c",
          padding: "72px 80px",
          color: "#ffffff",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 30, fontWeight: 700 }}>
          <div style={{ width: 18, height: 18, borderRadius: 9, background: "#f6541e" }} />
          Digital Market Mart
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 84, fontWeight: 800, lineHeight: 1.02, letterSpacing: -2 }}>
          <span>Websites that sell.</span>
          <span>Marketing that fills them.</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 28, color: "rgba(255,255,255,0.75)" }}>
          <span>Web design, SEO, Google Ads and automation</span>
          <span style={{ color: "#f6541e", fontWeight: 700 }}>digitalmarketmart.com</span>
        </div>
      </div>
    ),
    size
  );
}
