import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY ?? "");


// ─── Types ────────────────────────────────────────────────────────────────────
interface ContactPayload {
  name: string;
  email: string;
  company?: string;
  service?: string;
  message: string;
}

// ─── Validation ───────────────────────────────────────────────────────────────
function validatePayload(data: unknown): {
  valid: boolean;
  errors: string[];
  payload?: ContactPayload;
} {
  const errors: string[] = [];

  if (!data || typeof data !== "object") {
    return { valid: false, errors: ["Invalid request body"] };
  }

  const d = data as Record<string, unknown>;

  if (!d.name || typeof d.name !== "string" || d.name.trim().length < 2) {
    errors.push("Name must be at least 2 characters");
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!d.email || typeof d.email !== "string" || !emailRegex.test(d.email)) {
    errors.push("Valid email is required");
  }

  if (
    !d.message ||
    typeof d.message !== "string" ||
    d.message.trim().length < 10
  ) {
    errors.push("Message must be at least 10 characters");
  }

  if (errors.length > 0) return { valid: false, errors };

  return {
    valid: true,
    errors: [],
    payload: {
      name: (d.name as string).trim(),
      email: (d.email as string).trim().toLowerCase(),
      company:
        d.company && typeof d.company === "string"
          ? d.company.trim()
          : undefined,
      service:
        d.service && typeof d.service === "string"
          ? d.service.trim()
          : undefined,
      message: (d.message as string).trim(),
    },
  };
}

// ─── Email Templates ──────────────────────────────────────────────────────────
function adminEmailHtml(p: ContactPayload): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Inquiry – Digital Market Mart</title>
</head>
<body style="margin:0;padding:0;background:#0f172a;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0f172a;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#6366f1,#14b8a6);border-radius:16px 16px 0 0;padding:32px 40px;text-align:center;">
              <h1 style="margin:0;color:#ffffff;font-size:26px;font-weight:700;letter-spacing:-0.5px;">
                📬 New Contact Inquiry
              </h1>
              <p style="margin:8px 0 0;color:rgba(255,255,255,0.8);font-size:14px;">
                Digital Market Mart — Contact Form
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background:#1e293b;padding:40px;border-left:1px solid #334155;border-right:1px solid #334155;">
              
              <!-- Info rows -->
              ${[
                { label: "👤 Name", value: p.name },
                { label: "📧 Email", value: p.email },
                ...(p.company ? [{ label: "🏢 Company", value: p.company }] : []),
                ...(p.service ? [{ label: "🛠 Service", value: p.service }] : []),
              ]
                .map(
                  (row) => `
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
                <tr>
                  <td style="background:#0f172a;border:1px solid #334155;border-radius:10px;padding:14px 18px;">
                    <p style="margin:0 0 4px;color:#94a3b8;font-size:11px;text-transform:uppercase;letter-spacing:1px;font-weight:600;">${row.label}</p>
                    <p style="margin:0;color:#f1f5f9;font-size:15px;font-weight:500;">${row.value}</p>
                  </td>
                </tr>
              </table>`
                )
                .join("")}

              <!-- Message -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:#0f172a;border:1px solid #6366f1;border-radius:10px;padding:18px;">
                    <p style="margin:0 0 8px;color:#94a3b8;font-size:11px;text-transform:uppercase;letter-spacing:1px;font-weight:600;">💬 Message</p>
                    <p style="margin:0;color:#f1f5f9;font-size:15px;line-height:1.7;white-space:pre-wrap;">${p.message}</p>
                  </td>
                </tr>
              </table>

              <!-- CTA -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:32px;">
                <tr>
                  <td align="center">
                    <a href="mailto:${p.email}" style="display:inline-block;background:linear-gradient(135deg,#6366f1,#14b8a6);color:#ffffff;text-decoration:none;padding:14px 32px;border-radius:10px;font-size:15px;font-weight:600;">
                      Reply to ${p.name}
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#0f172a;border:1px solid #334155;border-top:none;border-radius:0 0 16px 16px;padding:20px 40px;text-align:center;">
              <p style="margin:0;color:#475569;font-size:12px;">
                Digital Market Mart &nbsp;·&nbsp; 30 Summer St, Hagerstown MD 21740 &nbsp;·&nbsp; helpdesk@digitalmarketmart.com
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function userConfirmationHtml(p: ContactPayload): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>We received your message – Digital Market Mart</title>
</head>
<body style="margin:0;padding:0;background:#0f172a;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0f172a;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#6366f1,#14b8a6);border-radius:16px 16px 0 0;padding:40px;text-align:center;">
              <div style="width:64px;height:64px;background:rgba(255,255,255,0.2);border-radius:50%;margin:0 auto 20px;display:flex;align-items:center;justify-content:center;font-size:28px;line-height:64px;">✅</div>
              <h1 style="margin:0;color:#ffffff;font-size:28px;font-weight:700;">Message Received!</h1>
              <p style="margin:10px 0 0;color:rgba(255,255,255,0.85);font-size:15px;">Thank you, ${p.name}. We'll get back to you within 24 hours.</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background:#1e293b;padding:40px;border-left:1px solid #334155;border-right:1px solid #334155;">
              <p style="margin:0 0 24px;color:#cbd5e1;font-size:15px;line-height:1.7;">
                Hi <strong style="color:#f1f5f9;">${p.name}</strong>, we've received your inquiry and our team is reviewing it. Here's a summary of what you sent:
              </p>

              <table width="100%" cellpadding="0" cellspacing="0" style="background:#0f172a;border:1px solid #334155;border-radius:12px;padding:20px;margin-bottom:28px;">
                <tr><td>
                  ${p.service ? `<p style="margin:0 0 12px;color:#94a3b8;font-size:13px;"><span style="color:#6366f1;font-weight:600;">Service:</span> ${p.service}</p>` : ""}
                  <p style="margin:0;color:#94a3b8;font-size:13px;line-height:1.7;"><span style="color:#6366f1;font-weight:600;">Your message:</span><br/><span style="color:#cbd5e1;">${p.message}</span></p>
                </td></tr>
              </table>

              <p style="margin:0 0 8px;color:#cbd5e1;font-size:15px;">In the meantime, you can:</p>
              <ul style="margin:0 0 28px;padding-left:20px;color:#94a3b8;font-size:14px;line-height:2;">
                <li>Browse our <a href="https://digitalmarketmart.com" style="color:#14b8a6;text-decoration:none;">portfolio</a></li>
                <li>Call us directly at <strong style="color:#f1f5f9;">+1 (240) 217-6149</strong></li>
                <li>Reply to this email for urgent matters</li>
              </ul>

              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <a href="https://digitalmarketmart.com" style="display:inline-block;background:linear-gradient(135deg,#6366f1,#14b8a6);color:#ffffff;text-decoration:none;padding:14px 32px;border-radius:10px;font-size:15px;font-weight:600;">
                      Visit Our Website
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#0f172a;border:1px solid #334155;border-top:none;border-radius:0 0 16px 16px;padding:20px 40px;text-align:center;">
              <p style="margin:0 0 6px;color:#475569;font-size:12px;">
                Digital Market Mart &nbsp;·&nbsp; 30 Summer St, Hagerstown MD 21740
              </p>
              <p style="margin:0;color:#334155;font-size:11px;">
                You're receiving this because you submitted our contact form. Please do not reply if this was a mistake.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

// ─── Route Handler ────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    // Parse body
    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { success: false, message: "Invalid JSON body" },
        { status: 400 }
      );
    }

    // Validate
    const { valid, errors, payload } = validatePayload(body);
    if (!valid || !payload) {
      return NextResponse.json(
        { success: false, message: "Validation failed", errors },
        { status: 422 }
      );
    }

    // Send both emails in parallel
    const [adminResult, userResult] = await Promise.allSettled([
      // 1. Notify helpdesk
      resend.emails.send({
        from: "Digital Market Mart <contact@digitalmarketmart.com>",
        to: ["helpdesk@digitalmarketmart.com"],
        replyTo: payload.email,
       subject: `New Inquiry – ${payload.service} from ${payload.name}`,
        html: adminEmailHtml(payload),
      }),

      // 2. Confirm to user
      resend.emails.send({
        from: "Digital Market Mart <contact@digitalmarketmart.com>",
        to: [payload.email],
        subject: "We received your message – Digital Market Mart",
        html: userConfirmationHtml(payload),
      }),
    ]);

    // Log errors but don't fail the user if confirmation email failed
    if (adminResult.status === "rejected") {
      console.error("[contact/route] Admin email failed:", adminResult.reason);
      return NextResponse.json(
        {
          success: false,
          message: "Failed to send message. Please try again later.",
        },
        { status: 500 }
      );
    }

    if (userResult.status === "rejected") {
      console.warn(
        "[contact/route] User confirmation email failed:",
        userResult.reason
      );
      // Still success — admin got it
    }

    return NextResponse.json(
      { success: true, message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("[contact/route] Unexpected error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}

// Block other HTTP methods
export async function GET() {
  return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
}