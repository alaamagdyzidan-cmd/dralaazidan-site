import type { Metadata } from "next";
import Link from "next/link";
import LogoMark from "@/components/LogoMark";

export const metadata: Metadata = {
  title: "Contact & Booking",
  description:
    "Book Dr. Alaa Zidan via WhatsApp or Instagram for fastest reply. Practising at Life Care Medical Center, Hulhumalé, Maldives.",
};

const INSTAGRAM_URL = "https://www.instagram.com/dr.alaazidan/";
const FACEBOOK_URL = "https://www.facebook.com/share/1aB3gGmTu5/?mibextid=wwXIfr";
const WHATSAPP_URL = `https://wa.me/9607937512?text=${encodeURIComponent("Hello Dr. Alaa, I'd like to book an appointment.")}`;

export default function ContactPage({
  searchParams,
}: {
  searchParams?: { sent?: string };
}) {
  const submitted = searchParams?.sent === "1";
  return (
    <>
      {submitted && (
        <div className="border-b border-gold-300/50 bg-gradient-to-r from-sand-50 via-rose-50 to-sand-50">
          <div className="container-page py-4 text-center">
            <p className="text-sm font-medium text-ink-900">
              ✓ Your message has been sent. Dr. Alaa's team will reply within one business day.
            </p>
          </div>
        </div>
      )}
      <section className="container-page pt-20 pb-12">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <div className="flex items-center gap-3">
              <LogoMark size="md" variant="light" />
              <span className="eyebrow">Contact &amp; Booking</span>
            </div>
            <h1 className="mt-6 font-serif text-4xl leading-tight text-ink-900 sm:text-5xl md:text-6xl lg:text-7xl">
              The fastest way is a <span className="italic text-rose-400">message.</span>
            </h1>
          </div>
          <div className="md:col-span-5">
            <p className="text-lg leading-relaxed text-ink-700">
              We reply same-day on WhatsApp and Instagram. Send a quick note
              about what you'd like to address and we'll take it from there —
              answer questions, share availability, and confirm a time.
            </p>
          </div>
        </div>
      </section>

      {/* PRIMARY CTA STRIP — palette-consistent */}
      <section className="container-page pb-12 md:pb-16">
        <div className="grid gap-4 md:grid-cols-2">
          <Link
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-4 rounded-2xl bg-ink-900 p-6 text-sand-50 transition hover:bg-ink-700 sm:gap-6 sm:p-8"
          >
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-gold-300 sm:text-xs">Fastest reply</p>
              <p className="mt-2 font-serif text-2xl sm:text-3xl">Book on WhatsApp</p>
              <p className="mt-2 text-sm text-sand-200">+960 793 7512 · same-day reply</p>
            </div>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8 flex-shrink-0 text-gold-300 transition group-hover:translate-x-1 sm:h-10 sm:w-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
          </Link>
          <Link
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-4 rounded-2xl border border-ink-900 bg-sand-50 p-6 text-ink-900 transition hover:bg-ink-900 hover:text-sand-50 sm:gap-6 sm:p-8"
          >
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-gold-500 group-hover:text-gold-300 sm:text-xs">Follow the practice</p>
              <p className="mt-2 font-serif text-2xl sm:text-3xl">Instagram</p>
              <p className="mt-2 text-sm opacity-80">@dr.alaazidan</p>
            </div>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8 flex-shrink-0 transition group-hover:translate-x-1 sm:h-10 sm:w-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* DETAILS GRID */}
      <section className="container-page pb-24">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-6 space-y-8">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-gold-500">Visit the clinic</h3>
              <p className="mt-3 font-serif text-2xl text-ink-900">Life Care Medical Center</p>
              <address className="mt-2 not-italic text-ink-700">
                Lot no. 11382, Rabarugas Magu<br />
                Hulhumalé, Maldives
              </address>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-widest text-gold-500">Phone</h3>
              <ul className="mt-3 space-y-1">
                <li><a href="tel:+9607937512" className="font-serif text-2xl text-ink-900 hover:text-gold-500">+960 793 7512</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-widest text-gold-500">Hours</h3>
              <ul className="mt-3 space-y-1 text-ink-700">
                <li>Sunday – Thursday · 10:00 – 18:00</li>
                <li>Saturday · 10:00 – 14:00</li>
                <li>Friday · Closed</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-widest text-gold-500">Social</h3>
              <div className="mt-3 flex flex-wrap gap-3">
                <Link href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-ink-900 hover:text-gold-500">
                  Instagram · @dr.alaazidan
                </Link>
                <Link href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="text-ink-900 hover:text-gold-500">
                  Facebook · Dr. Alaa Zidan
                </Link>
              </div>
            </div>
          </div>

          <div className="md:col-span-6">
            <div className="rounded-2xl border border-sand-200 bg-sand-50 p-6 sm:p-8">
              <p className="text-xs uppercase tracking-widest text-gold-500">Or send a quick note</p>
              <h3 className="mt-2 font-serif text-2xl text-ink-900">Form (we'll reply by email)</h3>
              <form
                method="POST"
                action="https://formsubmit.co/dr.alaa.m.zidan@gmail.com"
                className="mt-6 space-y-5"
              >
                {/* FormSubmit configuration (hidden inputs) */}
                <input type="hidden" name="_subject" value="New enquiry from dralaazidan.com" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_autoresponse" value="Thank you for contacting Dr. Alaa Zidan's clinic. We have received your message and will reply within one business day. For fastest reply, you can also message us on WhatsApp at +960 793 7512." />
                <input type="hidden" name="_next" value="https://dralaazidan.com/contact?sent=1" />
                {/* Honeypot — hidden from humans, bots fill it */}
                <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="block text-xs uppercase tracking-widest text-ink-600">First name</label>
                    <input id="firstName" name="First name" type="text" required className="mt-2 w-full rounded-lg border border-sand-200 bg-sand-50 px-4 py-3 text-ink-900 outline-none focus:border-gold-300" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-xs uppercase tracking-widest text-ink-600">Last name</label>
                    <input id="lastName" name="Last name" type="text" required className="mt-2 w-full rounded-lg border border-sand-200 bg-sand-50 px-4 py-3 text-ink-900 outline-none focus:border-gold-300" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs uppercase tracking-widest text-ink-600">Email</label>
                  <input id="email" name="Email" type="email" required className="mt-2 w-full rounded-lg border border-sand-200 bg-sand-50 px-4 py-3 text-ink-900 outline-none focus:border-gold-300" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-widest text-ink-600">Message</label>
                  <textarea id="message" name="Message" rows={4} required className="mt-2 w-full rounded-lg border border-sand-200 bg-sand-50 px-4 py-3 text-ink-900 outline-none focus:border-gold-300" placeholder="What you'd like to ask or book." />
                </div>
                <label className="flex items-start gap-3 text-sm text-ink-700">
                  <input type="checkbox" name="Consent" required className="mt-1 h-4 w-4 rounded border-sand-300 text-gold-400 focus:ring-gold-300" />
                  <span>I consent to Dr. Alaa Zidan's clinic processing my information to respond to this enquiry.</span>
                </label>
                <button type="submit" className="btn-primary w-full sm:w-auto">Send</button>
              </form>
              <p className="mt-4 text-xs text-ink-600">
                For fastest reply, message us on WhatsApp at +960 793 7512 or Instagram.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
