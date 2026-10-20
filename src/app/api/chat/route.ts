// src/app/api/chat/route.ts
//
// ✅ Groq Free Tier — No credit card, no subscription
// 📦 Free limits: 14,400 requests/day | 6,000 req/min tokens
// 🔑 Get free key: https://console.groq.com → API Keys → Create
//
// .env.local mein daalo:
//   GROQ_API_KEY=gsk_xxxxxxxxxxxxxxxxxxxx

import { NextRequest, NextResponse } from "next/server";

// ─── Environment ──────────────────────────────────────────────────────────────
// Missing key → the route answers 503 instead of crashing the build or server.
const GROQ_API_KEY = process.env.GROQ_API_KEY ?? "";

// ─── Constants ────────────────────────────────────────────────────────────────
// Groq is OpenAI-compatible — same request format
const API_URL     = "https://api.groq.com/openai/v1/chat/completions" as const;
const MODEL       = "llama-3.3-70b-versatile" as const; // Best free model on Groq
const MAX_TOKENS  = 1024;
const MAX_HISTORY = 20;
const MAX_MSG_LEN = 1000;

// ─── Types ────────────────────────────────────────────────────────────────────
type Role = "user" | "assistant";

interface ChatMessage {
  role:    Role;
  content: string;
}

interface GroqMessage {
  role:    "system" | "user" | "assistant";
  content: string;
}

interface GroqResponse {
  choices?: Array<{
    message?: { content?: string };
  }>;
  error?: { message: string; type: string };
}

// ─── System prompt ────────────────────────────────────────────────────────────
const SYSTEM_PROMPT: GroqMessage = {
  role:    "system",
  content: `
You are the website assistant for Digital Market Mart LLC (DMM), a digital agency
headquartered at 30 Summer St, Hagerstown, MD 21740, USA. DMM serves businesses in the
United States, UAE, Saudi Arabia and Qatar.

WHAT DMM DOES
- Build: website design and development (from $999), e-commerce stores (from $2,499),
  mobile apps (custom quote).
- Grow: SEO and local SEO, Google and Meta ads management, content and short-form video.
  These are monthly, month-to-month retainers quoted after a free audit.
- Automate: AI chatbots, CRM and workflow automation (custom quote).
- Separately, DMM offers a Business Credit Education coaching program (from $1,497). It is
  education only: DMM is not a lender or broker, does not repair personal credit, does not
  sell aged or shelf corporations, and never guarantees approvals or funding.

HOW DMM WORKS
- Every project gets a written scope and fixed price before work starts.
- Projects: 50% deposit, balance billed by milestone.
- Marketing retainers run month to month; cancel with 30 days' written notice.
- Clients own their custom website, code, copy and media once paid in full.
- Free audit: a 12-point review of the website and Google presence, sent as a short
  video within two business days. Request it at /free-audit.

CONTACT
- New projects: +1 (301) 478-6786 (also WhatsApp)
- Existing clients, support and billing: +1 (240) 217-6149
- Email: helpdesk@digitalmarketmart.com
- Hours: Mon–Fri 9 AM – 6 PM ET; weekends by appointment

RULES
- Be warm, professional and brief: 2–4 sentences, bullets for lists.
- Only use the facts above. Never invent prices, timelines, statistics, client names,
  results, team size or staff names. If you don't know, say so and offer the team.
- Never promise rankings, leads, revenue, credit approval or funding.
- When someone wants to start, point them to the free audit at /free-audit or the
  contact details above.
`.trim(),
};

// ─── Input validation ─────────────────────────────────────────────────────────
function isValidMessages(value: unknown): value is ChatMessage[] {
  if (!Array.isArray(value) || value.length === 0 || value.length > MAX_HISTORY) {
    return false;
  }
  return value.every(
    (msg): msg is ChatMessage =>
      msg !== null &&
      typeof msg === "object" &&
      (msg.role === "user" || msg.role === "assistant") &&
      typeof msg.content === "string" &&
      msg.content.trim().length > 0 &&
      msg.content.length <= MAX_MSG_LEN,
  );
}

// ─── Route handler ────────────────────────────────────────────────────────────
export const runtime = "nodejs";

export async function POST(req: NextRequest): Promise<NextResponse> {
  // 1. Parse body
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Request body must be valid JSON." },
      { status: 400 },
    );
  }

  // 2. Validate messages
  const messages = (body as Record<string, unknown>)?.messages;
  if (!isValidMessages(messages)) {
    return NextResponse.json(
      {
        error:
          "Invalid payload. Provide a non-empty 'messages' array " +
          "(max 20 items, role: 'user'|'assistant', content ≤ 1000 chars).",
      },
      { status: 422 },
    );
  }

  if (!GROQ_API_KEY) {
    return NextResponse.json(
      { error: "The assistant is offline right now. Please call +1 (301) 478-6786 or email helpdesk@digitalmarketmart.com." },
      { status: 503 },
    );
  }

  // 3. Build Groq messages: system prompt first, then conversation history
  const groqMessages: GroqMessage[] = [
    SYSTEM_PROMPT,
    ...messages.map(({ role, content }) => ({ role, content })),
  ];

  // 4. Call Groq API
  let groqResponse: Response;
  try {
    groqResponse = await fetch(API_URL, {
      method:  "POST",
      headers: {
        "Content-Type":  "application/json",
        "Authorization": `Bearer ${GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model:      MODEL,
        messages:   groqMessages,
        max_tokens: MAX_TOKENS,
        temperature: 0.3,
      }),
    });
  } catch (networkErr) {
    console.error("[chat/route] Network error reaching Groq:", networkErr);
    return NextResponse.json(
      { error: "Could not reach AI service. Please try again." },
      { status: 503 },
    );
  }

  // 5. Handle Groq errors
  if (!groqResponse.ok) {
    const errBody = await groqResponse.json().catch(() => ({})) as GroqResponse;
    console.error("[chat/route] Groq error:", groqResponse.status, errBody);

    if (groqResponse.status === 429) {
      return NextResponse.json(
        { error: "Rate limit reached. Please wait a moment and try again." },
        { status: 429 },
      );
    }

    return NextResponse.json(
      { error: "AI service returned an unexpected error. Please try again." },
      { status: 502 },
    );
  }

  // 6. Extract and return reply
  const data  = (await groqResponse.json()) as GroqResponse;
  const reply = data.choices?.[0]?.message?.content;

  if (!reply) {
    console.error("[chat/route] Unexpected Groq response shape:", data);
    return NextResponse.json(
      { error: "AI service returned an empty response." },
      { status: 502 },
    );
  }

  return NextResponse.json({ reply });
}