// src/app/api/chat/route.ts
//
// ✅ Groq Free Tier — No credit card, no subscription
// 📦 Free limits: 14,400 requests/day | 6,000 req/min tokens
// 🔑 Get free key: https://console.groq.com → API Keys → Create
//
// .env.local mein daalo:
//   GROQ_API_KEY=gsk_xxxxxxxxxxxxxxxxxxxx

import { NextRequest, NextResponse } from "next/server";

// ─── Environment validation ───────────────────────────────────────────────────
const GROQ_API_KEY = process.env.GROQ_API_KEY;

if (!GROQ_API_KEY) {
  throw new Error("[chat/route] GROQ_API_KEY is not set. Add it to .env.local");
}

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
You are the official AI Assistant for Digital Market Mart (DMM), a world-class
technology and digital agency headquartered in Hagerstown, MD, USA.

COMPANY
- Tagline: "Build, Launch & Scale Your Digital Products with AI"
- Stats: 500+ Projects | 98% Client Satisfaction | 8+ Years | 50+ Experts | 24/7 Support
- Global presence: USA, UAE, Saudi Arabia, Qatar, UK, Canada, Australia

SERVICES
1. Web Development — scalable web platforms, SaaS products, high-performance sites
2. Mobile App Development — iOS & Android, native and cross-platform
3. SEO Optimizer — organic growth, keyword strategy, technical & on/off-page SEO
4. Growth & Digital Marketing — paid ads, data-driven funnels, customer acquisition
5. AI & Automation Systems — AI agents, chatbots, workflow automation
6. E-commerce Development — high-converting stores, payment integration, UX
7. AI Content & Video Creation — AI-powered video production, content workflows
8. Financial Literacy & Business Credit — credit building, aged corporations, funding

CONTACT
- Email: helpdesk@digitalmarketmart.com
- Phone: +1 (301) 478-6786
- Address: 30 Summer St, Hagerstown MD 21740

BEHAVIOUR RULES
- Be warm, professional, and concise (2–4 sentences; use bullets for lists)
- Pricing is always custom/project-based → guide visitors to a free consultation
- When buying intent is detected, end with:
  "Ready to get started? Email helpdesk@digitalmarketmart.com or call +1 (301) 478-6786."
- If asked something outside your knowledge, offer to connect them with the team
- Never invent prices, timelines, or staff names
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
export const runtime = "edge";

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
        temperature: 0.7,
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