"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const ENDPOINT = "https://formsubmit.co/ajax/dr.alaa.m.zidan@gmail.com";

type Props = {
  /** The blog topic this form is attached to — used in the subject + autoresponse. */
  topic: string;
};

/**
 * Compact inline contact form rendered at the end of each blog post.
 *
 * SEO purpose: extends time-on-page, captures intent at the moment the
 * reader is most engaged, and keeps user-generated content (their question)
 * on the page server-side via FormSubmit AJAX. Doubles as a "comment" /
 * "ask a question" section for engagement.
 */
export default function BlogContactForm({ topic }: Props) {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    if ((data.get("_honey") as string | null)?.length) {
      router.push("/thank-you");
      return;
    }

    const payload: Record<string, string> = {
      _subject: `Blog question — ${topic}`,
      _template: "table",
      _captcha: "false",
      Topic: topic,
    };
    data.forEach((value, key) => {
      if (key.startsWith("_")) return;
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
      router.push("/thank-you");
    } catch {
      setError(
        "We couldn't send your question right now. Please try WhatsApp at +960 793 7512 — same-day reply."
      );
      setSubmitting(false);
    }
  }

  return (
    <section
      aria-labelledby="ask-heading"
      className="mx-auto mt-12 max-w-3xl rounded-2xl border border-gold-300/40 bg-gradient-to-br from-sand-50 via-rose-50 to-sand-50 p-6 sm:p-8"
    >
      <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-gold-500">
        Ask Dr. Alaa
      </p>
      <h2
        id="ask-heading"
        className="mt-2 font-serif text-2xl text-ink-900 sm:text-3xl"
      >
        Have a question about {topic.toLowerCase()}?
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-ink-700">
        Leave your question or comment below. The clinic team reads every
        message and Dr. Alaa replies personally. For an urgent reply, message{" "}
        <a
          href="https://wa.me/9607937512"
          className="text-gold-600 underline decoration-gold-300 underline-offset-2 hover:decoration-gold-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp +960 793 7512
        </a>
        .
      </p>

      <form onSubmit={onSubmit} className="mt-5 space-y-4">
        <input
          type="text"
          name="_honey"
          style={{ display: "none" }}
          tabIndex={-1}
          autoComplete="off"
        />

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor={`name-${topic}`}
              className="block text-[10px] uppercase tracking-widest text-ink-600"
            >
              Name
            </label>
            <input
              id={`name-${topic}`}
              name="Name"
              type="text"
              required
              autoComplete="name"
              className="mt-1.5 w-full rounded-lg border border-sand-200 bg-sand-50 px-3 py-2.5 text-sm text-ink-900 outline-none focus:border-gold-300"
            />
          </div>
          <div>
            <label
              htmlFor={`email-${topic}`}
              className="block text-[10px] uppercase tracking-widest text-ink-600"
            >
              Email
            </label>
            <input
              id={`email-${topic}`}
              name="Email"
              type="email"
              required
              autoComplete="email"
              className="mt-1.5 w-full rounded-lg border border-sand-200 bg-sand-50 px-3 py-2.5 text-sm text-ink-900 outline-none focus:border-gold-300"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor={`question-${topic}`}
            className="block text-[10px] uppercase tracking-widest text-ink-600"
          >
            Your question or comment
          </label>
          <textarea
            id={`question-${topic}`}
            name="Question"
            rows={4}
            required
            placeholder={`I have a question about ${topic.toLowerCase()}…`}
            className="mt-1.5 w-full rounded-lg border border-sand-200 bg-sand-50 px-3 py-2.5 text-sm text-ink-900 outline-none focus:border-gold-300"
          />
        </div>

        <label className="flex items-start gap-3 text-xs text-ink-700">
          <input
            type="checkbox"
            name="Consent"
            required
            className="mt-0.5 h-3.5 w-3.5 rounded border-sand-300 text-gold-400 focus:ring-gold-300"
          />
          <span>
            I consent to Dr. Alaa Zidan's clinic processing my information to
            respond to my question.
          </span>
        </label>

        {error && (
          <p
            role="alert"
            className="rounded-lg border border-rose-300 bg-rose-50 px-3 py-2 text-sm text-rose-500"
          >
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="btn-primary w-full sm:w-auto disabled:cursor-not-allowed disabled:opacity-70"
        >
          {submitting ? "Sending…" : "Send Question"}
        </button>
      </form>
    </section>
  );
}
