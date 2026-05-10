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

function intentReply(input: string): { text: string; showWhatsAppCta: boolean } {
  const q = input.toLowerCase();

  // Greetings
  if (/^(hi|hello|hey|salam|assalam|good (morning|afternoon|evening))\b/.test(q)) {
    return {
      text: "Hi there! 🌸 I'm Layan, Dr. Alaa's clinic assistant. How can I help you today? For booking and personal advice, the team replies fastest on WhatsApp.",
      showWhatsAppCta: true,
    };
  }

  // Booking
  if (/\b(book|appointment|schedule|reservation|consult|consultation|reserve)\b/.test(q)) {
    return {
      text: "Lovely — appointments are arranged on WhatsApp ✨ Dr. Alaa's team replies same-day and will find a time that suits you.",
      showWhatsAppCta: true,
    };
  }

  // Price / cost
  if (/\b(price|cost|fee|how much|pricing|rate|expensive|cheap|charge)\b/.test(q)) {
    return {
      text: "Pricing is always tailored after a quick consultation — every plan is personal. The team can share a quote on WhatsApp 💫",
      showWhatsAppCta: true,
    };
  }

  // Location / where
  if (/\b(where|location|address|directions|map|clinic|hulhumal|maldives|egypt)\b/.test(q)) {
    return {
      text: "The clinic is at Life Care Medical Center, Hulhumalé, Maldives 🌴 Dr. Alaa also practises in Egypt. For directions or to book, WhatsApp is fastest.",
      showWhatsAppCta: true,
    };
  }

  // Hours / time
  if (/\b(hour|time|open|close|when|availability|today|tomorrow|saturday|sunday|friday|weekend|monday|tuesday|wednesday|thursday)\b/.test(q)) {
    return {
      text: "We're open every day from 6:00 PM to 11:00 PM, by appointment 🌙 To reserve a time, please message on WhatsApp — same-day reply.",
      showWhatsAppCta: true,
    };
  }

  // Services
  if (/\b(service|treatment|offer|what.+do|what.+you|menu|list|procedure)\b/.test(q)) {
    return {
      text: "Dr. Alaa specialises in aesthetic dermatology 🌸 Botox, dermal fillers, microneedling, exosomes for hair, chemical peels, lasers, and pigmentation care. You can browse them all on the Services page, or ask the team on WhatsApp.",
      showWhatsAppCta: true,
    };
  }

  // Specific treatments
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

  // Contact / phone / email
  if (/\b(contact|phone|number|call|whatsapp|email|reach)\b/.test(q)) {
    return {
      text: `WhatsApp and calls: ${WHATSAPP_NUMBER}. Instagram: @dr.alaazidan. Same-day replies, always 🌸`,
      showWhatsAppCta: true,
    };
  }

  // About the doctor
  if (/\b(who|about|experience|dr|doctor|alaa|zidan|background|qualification)\b/.test(q)) {
    return {
      text: "Dr. Alaa Zidan is an aesthetic and medical doctor with 5+ years of experience in aesthetic dermatology, practising in the Maldives and Egypt ✨",
      showWhatsAppCta: true,
    };
  }

  // Safety / pain / downtime
  if (/\b(safe|pain|hurt|side effect|recovery|downtime|risk|complication)\b/.test(q)) {
    return {
      text: "Every treatment begins with a thorough medical assessment, so safety and comfort always come first 🌸 Specific recovery, side-effects, and what's right for you depend on your skin — the team will walk you through it on WhatsApp.",
      showWhatsAppCta: true,
    };
  }

  // Bot identity
  if (/\b(human|bot|robot|ai|real person|are you|who are you|your name|layan)\b/.test(q)) {
    return {
      text: "I'm Layan 🌸 a friendly automated assistant for Dr. Alaa's clinic. For real conversations and bookings, the team is one tap away on WhatsApp.",
      showWhatsAppCta: true,
    };
  }

  // Thanks
  if (/\b(thank|thanks|cheers|appreciate)\b/.test(q)) {
    return {
      text: "You're very welcome ✨ Whenever you're ready, the team is right there on WhatsApp.",
      showWhatsAppCta: true,
    };
  }

  // Default
  return {
    text: "I'm not sure I have the perfect answer for that 🌸 For anything specific, please message Dr. Alaa's team on WhatsApp — they reply same-day.",
    showWhatsAppCta: true,
  };
}

export default function AiAgent() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "bot",
      text: "Hello, lovely to meet you ✨ I'm Layan, Dr. Alaa's clinic assistant. Ask me anything quick — for booking and personalised advice, the team replies fastest on WhatsApp.",
      showWhatsAppCta: true,
    },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

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

  return (
    <>
      {/* Floating launcher — bottom-LEFT */}
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open Layan, the clinic assistant"
          className="group fixed bottom-6 left-6 z-50 flex items-center gap-3 rounded-full bg-gradient-to-br from-rose-300 via-gold-400 to-gold-500 px-2 py-2 pr-4 text-sand-50 shadow-lg shadow-ink-900/30 transition hover:scale-[1.03] focus:outline-none focus-visible:ring-4 focus-visible:ring-gold-300"
        >
          {/* Layan avatar */}
          <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-sand-50 text-gold-500 shadow-inner md:h-12 md:w-12">
            <span className="font-script text-3xl leading-none md:text-4xl" aria-hidden>
              L
            </span>
            <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-sand-50 bg-green-500" />
          </span>
          <span className="flex flex-col items-start leading-tight">
            <span className="text-xs font-semibold tracking-wide">Chat with Layan</span>
            <span className="text-[9px] uppercase tracking-[0.2em] opacity-90">
              Clinic assistant
            </span>
          </span>
        </button>
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
              <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-rose-300 via-gold-400 to-gold-500 shadow">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sand-50 text-gold-500">
                  <span className="font-script text-3xl leading-none" aria-hidden>
                    L
                  </span>
                </span>
                <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-sand-50 bg-green-500" />
              </span>
              <div>
                <p className="font-serif text-base leading-tight text-ink-900">
                  Layan
                </p>
                <p className="text-[10px] uppercase tracking-[0.25em] text-gold-500">
                  Clinic assistant · Online
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
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

          {/* Suggestions — only show if conversation hasn't started yet */}
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

          {/* Input */}
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

          {/* Footer note */}
          <div className="border-t border-sand-200 bg-sand-50 px-4 py-2 text-center">
            <p className="text-[10px] uppercase tracking-[0.2em] text-ink-600">
              Layan · automated · WhatsApp for personal help
            </p>
          </div>
        </div>
      )}
    </>
  );
}
