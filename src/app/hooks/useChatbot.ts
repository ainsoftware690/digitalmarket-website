"use client";

// src/hooks/useChatbot.ts

import { useReducer, useCallback, useRef, useEffect } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────
export interface Message {
  id:        string;
  role:      "user" | "assistant";
  content:   string;
  timestamp: Date;
  isError?:  boolean;
}

type SendableMessage = Pick<Message, "role" | "content">;

type Status = "idle" | "loading";

interface ChatState {
  messages: Message[];
  status:   Status;
}

type ChatAction =
  | { type: "APPEND";       payload: Message }
  | { type: "SET_STATUS";   payload: Status  }
  | { type: "REPLACE_LAST"; payload: Message };

// ─── Reducer ─────────────────────────────────────────────────────────────────
function chatReducer(state: ChatState, action: ChatAction): ChatState {
  switch (action.type) {
    case "APPEND":
      return { ...state, messages: [...state.messages, action.payload] };

    case "SET_STATUS":
      return { ...state, status: action.payload };

    case "REPLACE_LAST": {
      const updated = [...state.messages];
      updated[updated.length - 1] = action.payload;
      return { ...state, messages: updated, status: "idle" };
    }
  }
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
function createMessage(role: Message["role"], content: string, isError = false): Message {
  return {
    id:        crypto.randomUUID(),
    role,
    content,
    timestamp: new Date(),
    isError,
  };
}

const INITIAL_STATE: ChatState = { messages: [], status: "idle" };

const FALLBACK_ERROR_CONTENT =
  "Something went wrong. Please contact us at **helpdesk@digitalmarketmart.com** " +
  "or call **+1 (301) 478-6786**.";

// ─── Hook ─────────────────────────────────────────────────────────────────────
export interface UseChatbotReturn {
  messages:    Message[];
  isLoading:   boolean;
  sendMessage: (content: string) => Promise<void>;
}

export function useChatbot(): UseChatbotReturn {
  const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);
  const abortRef = useRef<AbortController | null>(null);

  // Cancel any in-flight request on unmount
  useEffect(() => () => { abortRef.current?.abort(); }, []);

  const sendMessage = useCallback(async (content: string): Promise<void> => {
    const trimmed = content.trim();
    if (!trimmed || state.status === "loading") return;

    // Cancel previous request if still running
    abortRef.current?.abort();
    abortRef.current = new AbortController();

    // Append user message
    const userMessage = createMessage("user", trimmed);
    dispatch({ type: "APPEND",     payload: userMessage });
    dispatch({ type: "SET_STATUS", payload: "loading"  });

    // Build history to send (only role + content — no client-side metadata)
    const history: SendableMessage[] = [...state.messages, userMessage].map(
      ({ role, content: c }) => ({ role, content: c }),
    );

    try {
      const res = await fetch("/api/chat", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({ messages: history }),
        signal:  abortRef.current.signal,
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => ({ error: "" })) as { error?: string };
        throw new Error(errData.error ?? "Request failed");
      }

      const { reply } = (await res.json()) as { reply: string };

      dispatch({
        type:    "APPEND",
        payload: createMessage("assistant", reply),
      });
    } catch (err) {
      // Silently ignore aborted requests — user cancelled
      if (err instanceof DOMException && err.name === "AbortError") return;

      const message =
        err instanceof Error && err.message && err.message !== "Request failed"
          ? err.message
          : FALLBACK_ERROR_CONTENT;

      dispatch({
        type:    "APPEND",
        payload: createMessage("assistant", message, true),
      });
    } finally {
      dispatch({ type: "SET_STATUS", payload: "idle" });
    }
  }, [state.messages, state.status]);

  return {
    messages:  state.messages,
    isLoading: state.status === "loading",
    sendMessage,
  };
}