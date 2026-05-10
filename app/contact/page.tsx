import type { Metadata } from "next";
import Link from "next/link";
import LogoMark from "@/components/LogoMark";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact & Booking",
  description:
    "Book Dr. Alaa Zidan via WhatsApp or Instagram for fastest reply. Practising at Life Care Medical Center, Hulhumalé, Maldives.",
};

const INSTAGRAM_URL = "https://www.instagram.com/dr.alaazidan/";
const FACEBOOK_URL = "https://www.facebook.com/share/1aB3gGmTu5/?mibextid=wwXIfr";
const WHATSAPP_URL = `https://wa.me/9607937512?text=${encodeURIComponent("Hello Dr. Alaa, I'd like to book an appointment.")}`;

export default function ContactPage() {
  return (
    <>
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
              <h3 className="text-xs uppercase tracking-widest text-gold-500">Clinic hours</h3>
              <div className="mt-3 inline-flex flex-col gap-1 rounded-2xl border border-gold-300/40 bg-gradient-to-br from-sand-50 via-rose-50 to-sand-50 px-5 py-4">
                <p className="font-serif text-lg text-ink-900">Open every day</p>
                <p className="text-sm text-ink-700">
                  <span className="font-medium text-ink-900">6:00 PM – 11:00 PM</span>
                  <span className="ml-2 text-ink-600">(18:00 – 23:00)</span>
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-gold-500">
                  By appointment · same-day reply
                </p>
              </div>
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
              <ContactForm />
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
