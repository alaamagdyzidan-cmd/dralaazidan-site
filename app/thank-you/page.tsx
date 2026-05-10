import type { Metadata } from "next";
import Link from "next/link";
import LogoMark from "@/components/LogoMark";

export const metadata: Metadata = {
  title: "Thank you",
  description:
    "Thank you for contacting Dr. Alaa Zidan's clinic. We have received your message and will reply within one business day.",
  robots: { index: false, follow: false },
};

const INSTAGRAM_URL = "https://www.instagram.com/dr.alaazidan/";
const WHATSAPP_URL = `https://wa.me/9607937512?text=${encodeURIComponent(
  "Hello Dr. Alaa, I just submitted the contact form on your site."
)}`;

export default function ThankYouPage() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Brand gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sand-50 via-rose-50 to-sand-50" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(201,167,107,0.18),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(229,191,178,0.25),transparent_55%)]" />

      <div className="container-page relative flex min-h-[80vh] flex-col items-center justify-center py-20 text-center md:py-28">
        {/* Brand mark */}
        <div className="flex justify-center">
          <LogoMark size="xl" variant="light" />
        </div>

        {/* Decorative gold check + arc */}
        <div className="mt-8 flex flex-col items-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-gold-300 via-gold-400 to-gold-500 text-sand-50 shadow-lg shadow-gold-400/30">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-8 w-8"
              aria-hidden
            >
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </span>
        </div>

        <span className="mt-8 inline-block text-[10px] font-medium uppercase tracking-[0.4em] text-gold-500 sm:text-xs">
          Message received
        </span>

        <h1 className="mt-4 font-serif text-4xl leading-[1.1] text-ink-900 sm:text-5xl md:text-6xl">
          Thank you for reaching out.
        </h1>

        <p className="mt-3 font-script text-3xl text-rose-400 sm:text-4xl md:text-5xl">
          We'll be in touch soon.
        </p>

        <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-ink-700 md:text-lg">
          Your message has been delivered to Dr. Alaa's team. We reply within
          one business day. For faster service or to ask anything in the
          meantime, the team is one tap away on WhatsApp.
        </p>

        {/* What happens next */}
        <div className="mt-12 grid w-full max-w-3xl gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-gold-300/40 bg-sand-50/80 p-5 text-left backdrop-blur">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-100 text-gold-600">
              <span className="font-serif text-lg">1</span>
            </span>
            <p className="mt-3 font-medium text-ink-900">We read your note</p>
            <p className="mt-1 text-sm text-ink-600">
              Dr. Alaa's team reviews every enquiry personally.
            </p>
          </div>
          <div className="rounded-2xl border border-gold-300/40 bg-sand-50/80 p-5 text-left backdrop-blur">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-100 text-gold-600">
              <span className="font-serif text-lg">2</span>
            </span>
            <p className="mt-3 font-medium text-ink-900">We reply same-day</p>
            <p className="mt-1 text-sm text-ink-600">
              Usually within a few hours during clinic hours.
            </p>
          </div>
          <div className="rounded-2xl border border-gold-300/40 bg-sand-50/80 p-5 text-left backdrop-blur">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-100 text-gold-600">
              <span className="font-serif text-lg">3</span>
            </span>
            <p className="mt-3 font-medium text-ink-900">We find a time</p>
            <p className="mt-1 text-sm text-ink-600">
              A consultation, a question answered, or a booking confirmed.
            </p>
          </div>
        </div>

        {/* CTAs */}
        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
          <Link
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Continue on WhatsApp
          </Link>
          <Link href="/" className="btn-outline">
            Back to Home
          </Link>
        </div>

        {/* Quiet helpful links */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[10px] uppercase tracking-[0.3em] text-ink-600">
          <Link href="/services" className="hover:text-gold-500">
            Services
          </Link>
          <span className="h-1 w-1 rounded-full bg-gold-400" />
          <Link href="/blog" className="hover:text-gold-500">
            Blog
          </Link>
          <span className="h-1 w-1 rounded-full bg-gold-400" />
          <Link
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold-500"
          >
            Instagram
          </Link>
        </div>
      </div>
    </section>
  );
}
