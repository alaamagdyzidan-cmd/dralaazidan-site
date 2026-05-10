"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const WHATSAPP_NUMBER = "+960 793 7512";
const WHATSAPP_URL = `https://wa.me/9607937512?text=${encodeURIComponent(
  "Hello Dr. Alaa, I'd like to ask about a treatment."
)}`;

type Sender = "bot" | "user";
type Message = {
  id: string;
  sender: Sender;
  text: string;
  showWhatsAppCta?: boolean;
};

const SUGGESTIONS: { label: string; intent: string }[] = [
  { label: "Book an appointment", intent: "book" },
  { label: "Treatment prices", intent: "price" },
  { label: "Where is the clinic?", intent: "location" },
  { label: "What services?", intent: "services" },
];

/** Layan's cute chatbot avatar — friendly baby-bot face in brand colors. */
function LayanAvatar({ size = 44 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      aria-hidden
      className="block"
    >
      <defs>
        <linearGradient id="layanBodyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F4E0D8" />
          <stop offset="100%" stopColor="#E5BFB2" />
        </linearGradient>
        <linearGradient id="layanCheekGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#CD8E7C" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#CD8E7C" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {/* Antenna with sparkle */}
      <line x1="32" y1="6" x2="32" y2="13" stroke="#C9A76B" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="32" cy="5" r="2.5" fill="#C9A76B" />
      <circle cx="32" cy="5" r="1" fill="#FAF4EC" />

      {/* Head (rounded square) */}
      <rect x="10" y="14" width="44" height="40" rx="18" fill="url(#layanBodyGrad)" stroke="#C9A76B" strokeWidth="1.2" />

      {/* Inner screen / face area */}
      <rect x="16" y="20" width="32" height="28" rx="13" fill="#FAF4EC" />

      {/* Cute eyes (closed/curved happy) */}
      <path d="M22 33 Q25 30 28 33" stroke="#2A1F1A" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M36 33 Q39 30 42 33" stroke="#2A1F1A" strokeWidth="1.8" strokeLinecap="round" fill="none" />

      {/* Sparkle dots near eyes */}
      <circle cx="29.5" cy="31" r="0.9" fill="#C9A76B" />
      <circle cx="34.5" cy="31" r="0.9" fill="#C9A76B" />

      {/* Cheeks blush */}
      <circle cx="21" cy="40" r="2.4" fill="url(#layanCheekGrad)" />
      <circle cx="43" cy="40" r="2.4" fill="url(#layanCheekGrad)" />

      {/* Smile */}
      <path d="M28 41 Q32 44 36 41" stroke="#2A1F1A" strokeWidth="1.6" strokeLinecap="round" fill="none" />

      {/* Side "ear" buttons */}
      <rect x="6" y="28" width="4" height="10" rx="2" fill="#C9A76B" />
      <rect x="54" y="28" width="4" height="10" rx="2" fill="#C9A76B" />
    </svg>
  );
}

function intentReply(input: string): { text: string; showWhatsAppCta: boolean } {
  const q = input.toLowerCase();

  if (/^(hi|hello|hey|salam|assalam|good (morning|afternoon|evening))\b/.test(q)) {
    return {
      text: "Hi there! 🌸 I'm Layan, Dr. Alaa's clinic assistant. How can I help you today? For booking and personal advice, the team replies fastest on WhatsApp.",
      showWhatsAppCta: true,
    };
  }
  if (/\b(book|appointment|schedule|reservation|consult|consultation|reserve)\b/.test(q)) {
    return {
      text: "Lovely — appointments are arranged on WhatsApp ✨ Dr. Alaa's team replies same-day and will find a time that suits you.",
      showWhatsAppCta: true,
    };
  }
  if (/\b(price|cost|fee|how much|pricing|rate|expensive|cheap|charge)\b/.test(q)) {
    return {
      text: "Pricing is always tailored after a quick consultation — every plan is personal. The team can share a quote on WhatsApp 💫",
      showWhatsAppCta: true,
    };
  }
  if (/\b(where|location|address|directions|map|clinic|hulhumal|maldives|egypt)\b/.test(q)) {
    return {
      text: "The clinic is at Life Care Medical Center, Hulhumalé, Maldives 🌴 Dr. Alaa also practises in Egypt. For directions or to book, WhatsApp is fastest.",
      showWhatsAppCta: true,
    };
  }
  if (/\b(hour|time|open|close|when|availability|today|tomorrow|saturday|sunday|friday|weekend|monday|tuesday|wednesday|thursday)\b/.test(q)) {
    return {
      text: "We're open every day from 6:00 PM to 11:00 PM, by appointment 🌙 To reserve a time, please message on WhatsApp — same-day reply.",
      showWhatsAppCta: true,
    };
  }
  if (/\b(service|treatment|offer|what.+do|what.+you|menu|list|procedure)\b/.test(q)) {
    return {
      text: "Dr. Alaa specialises in aesthetic dermatology 🌸 Botox, dermal fillers, microneedling, exosomes for hair, chemical peels, lasers, and pigmentation care. You can browse them all on the Services page, or ask the team on WhatsApp.",
      showWhatsAppCta: true,
    };
  }
  if (/\b(botox|wrinkle|frown|forehead|crow)\b/.test(q)) {
    return {
      text: "Yes — anti-wrinkle injections (Botox) for frown lines, forehead, and crow's feet are one of Dr. Alaa's signature treatments ✨ For dosing and a personal plan, WhatsApp is best.",
      showWhatsAppCta: true,
    };
  }
  if (/\b(filler|lip|cheek|chin|jawline|hyaluronic)\b/.test(q)) {
    return {
      text: "Yes — dermal filler for lips, cheeks, chin, and jawline is offered with restraint and a natural, soft result 🌸 For a tailored plan, please message on WhatsApp.",
      showWhatsAppCta: true,
    };
  }
  if (/\b(exosome|hair|hair loss|balding|thinning)\b/.test(q)) {
    return {
      text: "Yes — exosomes for hair restoration is one of the clinic's most-requested regenerative treatments 💫 For candidacy and pricing, please message on WhatsApp.",
      showWhatsAppCta: true,
    };
  }
  if (/\b(microneedling|dermapen|collagen|elastin|texture)\b/.test(q)) {
    return {
      text: "Yes — microneedling with serums and growth factors is performed regularly ✨ For session planning and a price, please message on WhatsApp.",
      showWhatsAppCta: true,
    };
  }
  if (/\b(peel|chemical|exfoliat|facial)\b/.test(q)) {
    return {
      text: "Yes — chemical peels and medical facials are part of the skin rejuvenation menu 🌸 The right peel depth depends on your skin, so a quick chat on WhatsApp first is ideal.",
      showWhatsAppCta: true,
    };
  }
  if (/\b(laser|ipl|pigment|melasma|acne)\b/.test(q)) {
    return {
      text: "Yes — laser, IPL, and pigmentation, melasma, and acne management are available, always after a careful skin assessment. To start a plan, please message on WhatsApp ✨",
      showWhatsAppCta: true,
    };
  }
  if (/\b(contact|phone|number|call|whatsapp|email|reach)\b/.test(q)) {
    return {
      text: `WhatsApp and calls: ${WHATSAPP_NUMBER}. Instagram: @dr.alaazidan. Same-day replies, always 🌸`,
      showWhatsAppCta: true,
    };
  }
  if (/\b(who|about|experience|dr|doctor|alaa|zidan|background|qualification)\b/.test(q)) {
    return {
      text: "Dr. Alaa Zidan is an aesthetic and medical doctor with 5+ years of experience in aesthetic dermatology, practising in the Maldives and Egypt ✨",
      showWhatsAppCta: true,
    };
  }
  if (/\b(safe|pain|hurt|side effect|recovery|downtime|risk|complication)\b/.test(q)) {
    return {
      text: "Every treatment begins with a thorough medical assessment, so safety and comfort always come first 🌸 Specific recovery, side-effects, and what's right for you depend on your skin — the team will walk you through it on WhatsApp.",
      showWhatsAppCta: true,
    };
  }
  if (/\b(human|bot|robot|ai|real person|are you|who are you|your name|layan)\b/.test(q)) {
    return {
      text: "I'm Layan 🌸 a friendly automated assistant for Dr. Alaa's clinic. For real conversations and bookings, the team is one tap away on WhatsApp.",
      showWhatsAppCta: true,
    };
  }
  if (/\b(thank|thanks|cheers|appreciate)\b/.test(q)) {
    return {
      text: "You're very welcome ✨ Whenever you're ready, the team is right there on WhatsApp.",
      showWhatsAppCta: true,
    };
  }
  return {
    text: "I'm not sure I have the perfect answer for that 🌸 For anything specific, please message Dr. Alaa's team on WhatsApp — they reply same-day.",
    showWhatsAppCta: true,
  };
}

/**
 * Silently POST the chat transcript to FormSubmit so the clinic gets a
 * record of conversations. Uses the AJAX endpoint (no page redirect, no
 * "Check Your Email" page) and labels the email with a distinct subject so
 * a Gmail filter can route these into their own folder.
 *
 * Suggested Gmail filter:
 *   Subject contains: "Layan chat transcript"
 *   Apply label: "Layan chats" + (optionally) Skip the Inbox
 */
const TRANSCRIPT_ENDPOINT = "https://formsubmit.co/ajax/dr.alaa.m.zidan@gmail.com";

async function postTranscript(messages: Message[]) {
  // Skip if the visitor didn't actually say anything
  const userMsgs = messages.filter((m) => m.sender === "user");
  if (userMsgs.length === 0) return;

  const transcript = messages
    .map(
      (m) =>
        `${m.sender === "user" ? "Visitor" : "Layan"}: ${m.text.replace(/\s+/g, " ").trim()}`
    )
    .join("\n");

  const now = new Date();
  const timeLabel = now.toLocaleString(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  });

  try {
    await fetch(TRANSCRIPT_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        _subject: `🌸 Layan chat transcript — ${timeLabel}`,
        _template: "table",
        _captcha: "false",
        Time: timeLabel,
        Page: typeof window !== "undefined" ? window.location.href : "—",
        Messages: userMsgs.length,
        Transcript: transcript,
      }),
    });
  } catch {
    // Silent — we don't want to bother the visitor if logging fails
  }
}

export default function AiAgent() {
  const [open, setOpen] = useState(false);
  const [showPeek, setShowPeek] = useState(false);
  const [peekDismissed, setPeekDismissed] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "bot",
      text: "Hello, lovely to meet you ✨ I'm Layan, Dr. Alaa's clinic assistant. Ask me anything quick — for booking and personalised advice, the team replies fastest on WhatsApp.",
      showWhatsAppCta: true,
    },
  ]);
  const [transcriptSent, setTranscriptSent] = useState(false);
  const messagesRef = useRef<Message[]>(messages);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Keep a ref of messages so beforeunload can read the latest
  useEffect(() => {
    messagesRef.current = messages;
  }, [messages]);

  // Send transcript on tab close/navigation if there was a real conversation
  useEffect(() => {
    function onBeforeUnload() {
      const userMsgs = messagesRef.current.filter((m) => m.sender === "user");
      if (userMsgs.length === 0 || transcriptSent) return;
      // Best-effort beacon-style send (fire-and-forget)
      const transcript = messagesRef.current
        .map(
          (m) =>
            `${m.sender === "user" ? "Visitor" : "Layan"}: ${m.text.replace(/\s+/g, " ").trim()}`
        )
        .join("\n");
      const body = JSON.stringify({
        _subject: `🌸 Layan chat transcript — ${new Date().toLocaleString()}`,
        _template: "table",
        _captcha: "false",
        Time: new Date().toLocaleString(),
        Page: window.location.href,
        Messages: userMsgs.length,
        Transcript: transcript,
      });
      const blob = new Blob([body], { type: "application/json" });
      navigator.sendBeacon?.(TRANSCRIPT_ENDPOINT, blob);
    }
    window.addEventListener("beforeunload", onBeforeUnload);
    return () => window.removeEventListener("beforeunload", onBeforeUnload);
  }, [transcriptSent]);

  // After ~4 seconds on the page, Layan "sends" a peek message bubble
  useEffect(() => {
    if (open || peekDismissed) return;
    const t = setTimeout(() => setShowPeek(true), 4000);
    return () => clearTimeout(t);
  }, [open, peekDismissed]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  function sendMessage(text: string) {
    const userMsg: Message = { id: `u-${Date.now()}`, sender: "user", text };
    setMessages((prev) => [...prev, userMsg]);

    setTimeout(() => {
      const reply = intentReply(text);
      const botMsg: Message = {
        id: `b-${Date.now()}`,
        sender: "bot",
        text: reply.text,
        showWhatsAppCta: reply.showWhatsAppCta,
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 600);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;
    sendMessage(trimmed);
    setInput("");
  }

  function handleSuggestion(intent: string) {
    const map: Record<string, string> = {
      book: "How do I book an appointment?",
      price: "What are your prices?",
      location: "Where is the clinic?",
      services: "What services do you offer?",
    };
    sendMessage(map[intent] ?? intent);
  }

  function openChat() {
    setOpen(true);
    setShowPeek(false);
    setPeekDismissed(true);
  }

  async function closeChat() {
    setOpen(false);
    // Send the transcript silently if the visitor actually chatted
    if (!transcriptSent) {
      const had = messages.some((m) => m.sender === "user");
      if (had) {
        setTranscriptSent(true);
        await postTranscript(messages);
      }
    }
  }

  return (
    <>
      {/* Floating launcher — bottom-LEFT, with peek message bubble */}
      {!open && (
        <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-3">
          {/* Peek message — appears after a delay like Layan said hi */}
          {showPeek && (
            <button
              type="button"
              onClick={openChat}
              className="group relative max-w-[260px] origin-bottom-left animate-[peekIn_0.4s_ease-out] rounded-2xl rounded-bl-md border border-gold-300/50 bg-white px-4 py-3 text-left text-sm text-ink-800 shadow-xl shadow-ink-900/20 transition hover:shadow-2xl"
            >
              {/* Close X */}
              <span
                role="button"
                tabIndex={0}
                aria-label="Dismiss"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowPeek(false);
                  setPeekDismissed(true);
                }}
                className="absolute -right-2 -top-2 flex h-5 w-5 cursor-pointer items-center justify-center rounded-full border border-sand-200 bg-sand-50 text-ink-700 transition hover:text-ink-900"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </span>
              <p className="font-medium leading-tight text-ink-900">Hi there 🌸</p>
              <p className="mt-1 leading-snug">
                I'm Layan — Dr. Alaa's clinic assistant. Quick question? Tap to chat ✨
              </p>
            </button>
          )}

          {/* The bot avatar button */}
          <button
            type="button"
            onClick={openChat}
            aria-label="Open Layan, the clinic assistant"
            className="group relative flex items-center gap-3 rounded-full bg-gradient-to-br from-rose-300 via-gold-400 to-gold-500 px-2 py-2 pr-4 text-sand-50 shadow-lg shadow-ink-900/30 transition hover:scale-[1.03] focus:outline-none focus-visible:ring-4 focus-visible:ring-gold-300"
          >
            {/* Cute bot avatar */}
            <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-sand-50 shadow-inner md:h-14 md:w-14">
              <LayanAvatar size={44} />
              <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-sand-50 bg-green-500" />
              {/* Subtle pulse ring to draw the eye */}
              <span className="pointer-events-none absolute inset-0 animate-ping rounded-full bg-rose-300/40" />
            </span>
            <span className="flex flex-col items-start leading-tight">
              <span className="text-xs font-semibold tracking-wide">Chat with Layan</span>
              <span className="text-[9px] uppercase tracking-[0.2em] opacity-90">
                Clinic assistant
              </span>
            </span>
          </button>
        </div>
      )}

      {/* Chat panel */}
      {open && (
        <div
          role="dialog"
          aria-label="Layan — Dr. Alaa's clinic assistant"
          className="fixed bottom-6 left-4 right-4 z-50 flex max-h-[80vh] flex-col overflow-hidden rounded-3xl border border-gold-300/50 bg-sand-50 shadow-2xl shadow-ink-900/30 sm:bottom-6 sm:left-6 sm:right-auto sm:w-[380px]"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-sand-200 bg-gradient-to-br from-sand-50 via-rose-50 to-sand-50 px-5 py-4">
            <div className="flex items-center gap-3">
              <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-rose-300 via-gold-400 to-gold-500 shadow">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sand-50">
                  <LayanAvatar size={36} />
                </span>
                <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-sand-50 bg-green-500" />
              </span>
              <div>
                <p className="font-serif text-base leading-tight text-ink-900">Layan</p>
                <p className="text-[10px] uppercase tracking-[0.25em] text-gold-500">
                  Clinic assistant · Online
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={closeChat}
              aria-label="Close assistant"
              className="rounded-full p-1.5 text-ink-700 transition hover:bg-sand-200 hover:text-ink-900"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="flex-1 space-y-4 overflow-y-auto bg-sand-50 px-4 py-5"
          >
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col ${
                  m.sender === "user" ? "items-end" : "items-start"
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    m.sender === "user"
                      ? "rounded-br-md bg-ink-900 text-sand-50"
                      : "rounded-bl-md border border-sand-200 bg-white text-ink-800"
                  }`}
                >
                  {m.text}
                </div>
                {m.sender === "bot" && m.showWhatsAppCta && (
                  <Link
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-2 rounded-full bg-gold-500 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-sand-50 shadow transition hover:bg-gold-600"
                  >
                    <svg
                      viewBox="0 0 32 32"
                      fill="currentColor"
                      className="h-3.5 w-3.5"
                      aria-hidden
                    >
                      <path d="M16.225 4C9.484 4 4 9.484 4 16.225c0 2.293.645 4.43 1.748 6.293L4 28.78l6.408-1.633a12.16 12.16 0 0 0 5.817 1.475c6.74 0 12.225-5.484 12.225-12.225C28.45 9.484 22.965 4 16.225 4z" />
                    </svg>
                    Message on WhatsApp
                  </Link>
                )}
              </div>
            ))}
          </div>

          {messages.length <= 1 && (
            <div className="border-t border-sand-200 bg-sand-50 px-4 py-3">
              <p className="text-[10px] uppercase tracking-[0.25em] text-gold-500">
                Quick questions
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s.intent}
                    type="button"
                    onClick={() => handleSuggestion(s.intent)}
                    className="rounded-full border border-sand-200 bg-white px-3 py-1.5 text-xs text-ink-800 transition hover:border-gold-300 hover:text-gold-600"
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 border-t border-sand-200 bg-white px-3 py-3"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask Layan…"
              aria-label="Type your message"
              className="flex-1 rounded-full border border-sand-200 bg-sand-50 px-4 py-2.5 text-sm text-ink-900 outline-none focus:border-gold-300"
              maxLength={500}
            />
            <button
              type="submit"
              disabled={!input.trim()}
              aria-label="Send message"
              className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-rose-300 to-gold-500 text-sand-50 transition hover:from-rose-400 hover:to-gold-600 disabled:cursor-not-allowed disabled:from-sand-300 disabled:to-sand-300"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
                aria-hidden
              >
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            </button>
          </form>

          <div className="border-t border-sand-200 bg-sand-50 px-4 py-2 text-center">
            <p className="text-[10px] uppercase tracking-[0.2em] text-ink-600">
              Layan · automated · WhatsApp for personal help
            </p>
          </div>
        </div>
      )}

      {/* Animation keyframes for the peek message */}
      <style jsx global>{`
        @keyframes peekIn {
          0% {
            opacity: 0;
            transform: translateY(8px) scale(0.92);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </>
  );
}
