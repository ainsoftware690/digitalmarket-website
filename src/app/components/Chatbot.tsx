"use client";

import {
  useRef,
  useEffect,
  useState,
  useCallback,
  KeyboardEvent,
  memo,
  FC,
  JSX,
} from "react";
import { useChatbot, Message } from "../hooks/useChatbot";

// ─── Constants ────────────────────────────────────────────────────────────────
const GREETING: Message = {
  id:        "greeting",
  role:      "assistant",
  content:
    "👋 Hi! I'm your **DMM AI Assistant**.\n\n" +
    "I can help with web development, mobile apps, AI automation, " +
    "SEO, digital marketing, e-commerce & more.\n\nWhat can I help you with today?",
  timestamp: new Date(),
};

const QUICK_CHIPS: ReadonlyArray<{ label: string; prompt: string }> = [
  { label: "🚀 Services",        prompt: "What services do you offer?"                        },
  { label: "🤖 AI & Automation",  prompt: "Tell me about your AI & Automation solutions"      },
  { label: "📈 Grow Business",    prompt: "How can you help my business grow?"                },
  { label: "🌍 Global Markets",   prompt: "Which markets and countries do you serve?"         },
  { label: "✉️ Get Started",      prompt: "How do I start a project with Digital Market Mart?"},
] as const;

// ─── Utilities ────────────────────────────────────────────────────────────────
/** Converts a small subset of Markdown to safe HTML. */
function parseMarkdown(text: string): string {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-sky-300 font-semibold">$1</strong>')
    .replace(/\*(.*?)\*/g,     "<em>$1</em>")
    .replace(/^- (.+)$/gm,    "• $1")
    .replace(/\n/g,            "<br />");
}

function formatTime(date: Date): string {
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

// ─── Sub-components ───────────────────────────────────────────────────────────

// ChatHeader
interface ChatHeaderProps { onClose: () => void }

const ChatHeader: FC<ChatHeaderProps> = memo(({ onClose }) => (
  <div
    className="flex items-center justify-between px-4 py-3 flex-shrink-0"
    style={{
      background:   "linear-gradient(135deg, #0f1a3a, #141f4a)",
      borderBottom: "0.5px solid rgba(79,172,254,0.15)",
    }}
  >
    <div className="flex items-center gap-3">
      <div
        aria-hidden="true"
        className="w-9 h-9 rounded-xl flex items-center justify-center
                   text-xs font-bold text-white flex-shrink-0 select-none"
        style={{ background: "linear-gradient(135deg, #4facfe, #7c3aed)" }}
      >
        DMM
      </div>

      <div>
        <p className="text-white font-semibold text-sm leading-none">
          DMM AI Assistant
        </p>
        <p className="flex items-center gap-1.5 mt-0.5 text-[11px]" style={{ color: "#4facfe" }}>
          <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Online · Powered by AI
        </p>
      </div>
    </div>

    <button
      onClick={onClose}
      aria-label="Close chat"
      className="w-7 h-7 rounded-lg flex items-center justify-center text-white/40
                 hover:text-white hover:bg-white/10 transition-colors
                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
      </svg>
    </button>
  </div>
));
ChatHeader.displayName = "ChatHeader";

// QuickChips
interface QuickChipsProps { onSelect: (prompt: string) => void }

const QuickChips: FC<QuickChipsProps> = memo(({ onSelect }) => (
  <div
    className="px-3 py-2 flex gap-2 flex-wrap flex-shrink-0"
    style={{
      borderBottom: "0.5px solid rgba(255,255,255,0.05)",
      background:   "rgba(255,255,255,0.02)",
    }}
  >
    {QUICK_CHIPS.map(({ label, prompt }) => (
      <button
        key={label}
        onClick={() => onSelect(prompt)}
        className="text-[11px] px-3 py-1.5 rounded-full font-medium transition-all duration-150
                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
        style={{
          border:     "0.5px solid rgba(79,172,254,0.3)",
          background: "rgba(79,172,254,0.07)",
          color:      "#93c5fd",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background  = "rgba(79,172,254,0.18)";
          e.currentTarget.style.borderColor = "rgba(79,172,254,0.65)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background  = "rgba(79,172,254,0.07)";
          e.currentTarget.style.borderColor = "rgba(79,172,254,0.3)";
        }}
      >
        {label}
      </button>
    ))}
  </div>
));
QuickChips.displayName = "QuickChips";

// TypingIndicator
const TypingIndicator: FC = memo(() => (
  <div className="flex items-end gap-2">
    <div
      aria-hidden="true"
      className="w-6 h-6 rounded-lg flex-shrink-0 flex items-center justify-center
                 text-[10px] font-bold text-white"
      style={{ background: "linear-gradient(135deg, #4facfe, #7c3aed)" }}
    >
      ✦
    </div>

    <div
      role="status"
      aria-label="Assistant is typing"
      className="flex gap-1 items-center px-3 py-3"
      style={{
        background:   "rgba(255,255,255,0.06)",
        border:       "0.5px solid rgba(255,255,255,0.09)",
        borderRadius: "4px 14px 14px 14px",
      }}
    >
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          aria-hidden="true"
          className="w-1.5 h-1.5 rounded-full"
          style={{
            background:      "#4facfe",
            animation:       "dmmBounce 1.3s ease-in-out infinite",
            animationDelay:  `${i * 0.18}s`,
          }}
        />
      ))}
    </div>
  </div>
));
TypingIndicator.displayName = "TypingIndicator";

// ChatBubble
interface ChatBubbleProps { message: Message }

const ChatBubble: FC<ChatBubbleProps> = memo(({ message }) => {
  const isUser = message.role === "user";

  return (
    <div className={`flex items-end gap-2 ${isUser ? "flex-row-reverse" : ""}`}>
      {!isUser && (
        <div
          aria-hidden="true"
          className="w-6 h-6 rounded-lg flex-shrink-0 flex items-center justify-center
                     text-[10px] font-bold text-white mb-0.5"
          style={{ background: "linear-gradient(135deg, #4facfe, #7c3aed)" }}
        >
          ✦
        </div>
      )}

      <div className={`flex flex-col gap-1 max-w-[78%] ${isUser ? "items-end" : "items-start"}`}>
        <div
          className="px-3 py-2.5 text-[13px] leading-relaxed"
          style={
            isUser
              ? {
                  background:   "linear-gradient(135deg, #4facfe 0%, #7c3aed 100%)",
                  borderRadius: "14px 4px 14px 14px",
                  color:        "#fff",
                }
              : {
                  background:   message.isError ? "rgba(239,68,68,0.1)" : "rgba(255,255,255,0.06)",
                  border:       `0.5px solid ${message.isError ? "rgba(239,68,68,0.3)" : "rgba(255,255,255,0.09)"}`,
                  borderRadius: "4px 14px 14px 14px",
                  color:        "#e2e8f0",
                }
          }
          // Safe: HTML comes from our parseMarkdown(), not from raw user input
          dangerouslySetInnerHTML={{ __html: parseMarkdown(message.content) }}
        />

        <time
          dateTime={message.timestamp.toISOString()}
          className="text-[10px] px-1"
          style={{ color: "rgba(255,255,255,0.22)" }}
        >
          {formatTime(message.timestamp)}
        </time>
      </div>
    </div>
  );
});
ChatBubble.displayName = "ChatBubble";

// MessageList
interface MessageListProps {
  messages:  Message[];
  isLoading: boolean;
}

const MessageList: FC<MessageListProps> = memo(({ messages, isLoading }) => {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages.length, isLoading]);

  return (
    <div
      role="log"
      aria-live="polite"
      aria-label="Chat messages"
      className="flex-1 overflow-y-auto px-3 py-3 flex flex-col gap-3"
      style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(79,172,254,0.2) transparent" }}
    >
      {messages.map((msg) => (
        <ChatBubble key={msg.id} message={msg} />
      ))}
      {isLoading && <TypingIndicator />}
      <div ref={bottomRef} aria-hidden="true" />
    </div>
  );
});
MessageList.displayName = "MessageList";

// ChatInput
interface ChatInputProps {
  onSend:   (text: string) => void;
  disabled: boolean;
}

const ChatInput: FC<ChatInputProps> = memo(({ onSend, disabled }) => {
  const [value,    setValue]    = useState("");
  const textareaRef             = useRef<HTMLTextAreaElement>(null);

  const resetHeight = useCallback(() => {
    if (textareaRef.current) textareaRef.current.style.height = "40px";
  }, []);

  const handleSend = useCallback(() => {
    const trimmed = value.trim();
    if (!trimmed || disabled) return;
    onSend(trimmed);
    setValue("");
    resetHeight();
  }, [value, disabled, onSend, resetHeight]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSend();
      }
    },
    [handleSend],
  );

  const handleInput = useCallback(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 88)}px`;
  }, []);

  const canSend = value.trim().length > 0 && !disabled;

  return (
    <div
      className="flex items-center gap-2 px-3 py-2.5 flex-shrink-0"
      style={{
        borderTop:  "0.5px solid rgba(255,255,255,0.07)",
        background: "rgba(255,255,255,0.02)",
      }}
    >
      <label htmlFor="dmm-chat-input" className="sr-only">
        Message DMM AI Assistant
      </label>

      <textarea
        id="dmm-chat-input"
        ref={textareaRef}
        value={value}
        rows={1}
        maxLength={1000}
        disabled={disabled}
        placeholder="Ask anything about our services…"
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        onInput={handleInput}
        className="flex-1 resize-none text-[13px] outline-none rounded-xl px-3 py-2.5
                   leading-snug transition-colors placeholder:text-white/25
                   disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-sky-400"
        style={{
          background:  "rgba(255,255,255,0.06)",
          border:      "0.5px solid rgba(255,255,255,0.1)",
          color:       "#e2e8f0",
          maxHeight:   "88px",
          scrollbarWidth: "none",
        }}
      />

      <button
        onClick={handleSend}
        disabled={!canSend}
        aria-label="Send message"
        className="w-9 h-9 rounded-xl flex-shrink-0 flex items-center justify-center
                   transition-all duration-150 disabled:opacity-40 disabled:cursor-not-allowed
                   hover:opacity-85 active:scale-95
                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
        style={{
          background: "linear-gradient(135deg, #4facfe, #7c3aed)",
          boxShadow:  canSend ? "0 4px 14px rgba(79,172,254,0.35)" : "none",
        }}
      >
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <line x1="22" y1="2" x2="11" y2="13" />
          <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
      </button>
    </div>
  );
});
ChatInput.displayName = "ChatInput";

// ChatFab
interface ChatFabProps {
  isOpen:    boolean;
  showBadge: boolean;
  onToggle:  () => void;
}

const ChatFab: FC<ChatFabProps> = memo(({ isOpen, showBadge, onToggle }) => (
  <button
    onClick={onToggle}
    aria-label={isOpen ? "Close chat assistant" : "Open chat assistant"}
    aria-expanded={isOpen}
    aria-controls="dmm-chat-panel"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full
               flex items-center justify-center transition-all duration-200
               hover:scale-110 active:scale-95
               focus-visible:outline-none focus-visible:ring-2
               focus-visible:ring-sky-400 focus-visible:ring-offset-2"
    style={{
      background: "linear-gradient(135deg, #4facfe, #7c3aed)",
      boxShadow:  "0 8px 32px rgba(79,172,254,0.45)",
    }}
  >
    {showBadge && !isOpen && (
      <span
        aria-label="1 new message"
        className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full
                   text-[10px] font-bold text-white flex items-center justify-center border-2"
        style={{ borderColor: "#0b1120", animation: "dmmPing 2s infinite" }}
      >
        1
      </span>
    )}

    {isOpen ? (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M1 1l16 16M17 1L1 17" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ) : (
      <svg
        width="22" height="22" viewBox="0 0 24 24"
        fill="none" stroke="white" strokeWidth="1.9"
        strokeLinecap="round" strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    )}
  </button>
));
ChatFab.displayName = "ChatFab";

// ─── Root export ──────────────────────────────────────────────────────────────
export default function Chatbot(): JSX.Element {
  const { messages, isLoading, sendMessage } = useChatbot();

  const [isOpen,      setIsOpen]      = useState(false);
  const [showBadge,   setShowBadge]   = useState(true);
  const [initialized, setInitialized] = useState(false);

  // Prepend static greeting once panel is first opened
  const allMessages: Message[] = initialized ? [GREETING, ...messages] : [];

  const handleToggle = useCallback(() => {
    setIsOpen((prev) => {
      if (!prev) {
        setShowBadge(false);
        setInitialized(true);
      }
      return !prev;
    });
  }, []);

  const handleClose  = useCallback(() => setIsOpen(false),          []);
  const handleSend   = useCallback((t: string) => sendMessage(t),   [sendMessage]);

  // Hide chips once user starts chatting
  const showChips = messages.length === 0;

  return (
    <>
      <style>{`
        @keyframes dmmBounce {
          0%, 80%, 100% { transform: translateY(0);    opacity: 0.5; }
          40%            { transform: translateY(-6px); opacity: 1;   }
        }
        @keyframes dmmPing {
          0%, 100% { box-shadow: 0 0 0 0   rgba(239,68,68,0.6); }
          50%      { box-shadow: 0 0 0 6px rgba(239,68,68,0);   }
        }
      `}</style>

      {/* Panel */}
      <div
        id="dmm-chat-panel"
        role="dialog"
        aria-modal="true"
        aria-label="DMM AI Chat Assistant"
        className={`
          fixed bottom-24 right-6 z-50
          w-[360px] max-h-[580px] flex flex-col
          rounded-2xl overflow-hidden
          border border-white/10
          shadow-[0_24px_64px_rgba(0,0,0,0.65)]
          transition-all duration-300 ease-out origin-bottom-right
          max-sm:w-[calc(100vw-2rem)] max-sm:right-4 max-sm:bottom-[88px]
          ${isOpen
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0  scale-95  pointer-events-none"
          }
        `}
        style={{ background: "linear-gradient(160deg, #0b1120 0%, #0d1530 100%)" }}
      >
        <ChatHeader onClose={handleClose} />

        {showChips && isOpen && (
          <QuickChips onSelect={handleSend} />
        )}

        <MessageList messages={allMessages} isLoading={isLoading} />

        <ChatInput onSend={handleSend} disabled={isLoading} />

        <p
          className="text-center text-[10px] pb-1.5 flex-shrink-0 select-none"
          style={{ color: "rgba(255,255,255,0.18)" }}
        >
          Powered by Claude AI · Digital Market Mart
        </p>
      </div>

      <ChatFab isOpen={isOpen} showBadge={showBadge} onToggle={handleToggle} />
    </>
  );
}