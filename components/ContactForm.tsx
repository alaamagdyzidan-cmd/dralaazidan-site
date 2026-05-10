"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const ENDPOINT = "https://formsubmit.co/ajax/dr.alaa.m.zidan@gmail.com";

export default function ContactForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot — if filled, silently "succeed" without sending
    if ((data.get("_honey") as string | null)?.length) {
      router.push("/thank-you");
      return;
    }

    // Build clean payload
    const payload: Record<string, string | number> = {
      _subject: "New enquiry from dralaazidan.com",
      _template: "table",
      _captcha: "false",
    };
    data.forEach((value, key) => {
      if (key.startsWith("_") || key === "_honey") return;
      payload[key] = typeof value === "string" ? value : String(value);
    });

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      // Success — straight to the dedicated thank-you page
      router.push("/thank-you");
    } catch {
      setError(
        "We couldn't send your message right now. Please try WhatsApp at +960 793 7512 instead — same-day reply."
      );
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-5">
      {/* Honeypot — hidden from humans, bots fill it */}
      <input
        type="text"
        name="_honey"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label
            htmlFor="firstName"
            className="block text-xs uppercase tracking-widest text-ink-600"
          >
            First name
          </label>
          <input
            id="firstName"
            name="First name"
            type="text"
            required
            autoComplete="given-name"
            className="mt-2 w-full rounded-lg border border-sand-200 bg-sand-50 px-4 py-3 text-ink-900 outline-none focus:border-gold-300"
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block text-xs uppercase tracking-widest text-ink-600"
          >
            Last name
          </label>
          <input
            id="lastName"
            name="Last name"
            type="text"
            required
            autoComplete="family-name"
            className="mt-2 w-full rounded-lg border border-sand-200 bg-sand-50 px-4 py-3 text-ink-900 outline-none focus:border-gold-300"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-xs uppercase tracking-widest text-ink-600"
        >
          Email
        </label>
        <input
          id="email"
          name="Email"
          type="email"
          required
          autoComplete="email"
          className="mt-2 w-full rounded-lg border border-sand-200 bg-sand-50 px-4 py-3 text-ink-900 outline-none focus:border-gold-300"
        />
      </div>

      <div>
        <label
          htmlFor="whatsapp"
          className="block text-xs uppercase tracking-widest text-ink-600"
        >
          WhatsApp number{" "}
          <span className="font-normal lowercase tracking-normal text-ink-500">
            (with country code)
          </span>
        </label>
        <input
          id="whatsapp"
          name="WhatsApp"
          type="tel"
          required
          inputMode="tel"
          autoComplete="tel"
          pattern="^\+?[0-9 ()\-]{6,}$"
          title="Please include your country code"
          className="mt-2 w-full rounded-lg border border-sand-200 bg-sand-50 px-4 py-3 text-ink-900 outline-none focus:border-gold-300"
        />
        <p className="mt-1.5 text-[11px] text-ink-500">
          So the team can reach you on WhatsApp for fastest reply.
        </p>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-xs uppercase tracking-widest text-ink-600"
        >
          Message
        </label>
        <textarea
          id="message"
          name="Message"
          rows={4}
          required
          placeholder="What you'd like to ask or book."
          className="mt-2 w-full rounded-lg border border-sand-200 bg-sand-50 px-4 py-3 text-ink-900 outline-none focus:border-gold-300"
        />
      </div>

      <label className="flex items-start gap-3 text-sm text-ink-700">
        <input
          type="checkbox"
          name="Consent"
          required
          className="mt-1 h-4 w-4 rounded border-sand-300 text-gold-400 focus:ring-gold-300"
        />
        <span>
          I consent to Dr. Alaa Zidan's clinic processing my information to
          respond to this enquiry.
        </span>
      </label>

      {error && (
        <p
          role="alert"
          className="rounded-lg border border-rose-300 bg-rose-50 px-4 py-3 text-sm text-rose-500"
        >
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="btn-primary w-full sm:w-auto disabled:cursor-not-allowed disabled:opacity-70"
      >
        {submitting ? "Sending…" : "Send"}
      </button>
    </form>
  );
}
