import Link from "next/link";
import type { Metadata } from "next";
import LogoMark from "@/components/LogoMark";
import DoctorImage from "@/components/DoctorImage";

export const metadata: Metadata = {
  title: "About Dr. Alaa Zidan",
  description:
    "Aesthetic and Medical Doctor with 5+ years experience in aesthetic dermatology, practising at Life Care Medical Center, Hulhumalé, Maldives.",
};

const INSTAGRAM_URL = "https://www.instagram.com/dr.alaazidan/";
const FACEBOOK_URL = "https://www.facebook.com/share/1aB3gGmTu5/?mibextid=wwXIfr";
const WHATSAPP_URL = `https://wa.me/9607937512?text=${encodeURIComponent("Hello Dr. Alaa, I'd like to book an appointment.")}`;

const principles = [
  {
    title: "Restraint over reinvention",
    body: "The goal is never to change a face — only to refine what's already there. Subtle, considered, and reversible whenever possible.",
  },
  {
    title: "Medicine first, aesthetics second",
    body: "Every treatment is a medical procedure. Skin health, safety, and long-term outcomes always sit ahead of trends.",
  },
  {
    title: "Honest consultations",
    body: "If a treatment isn't right for you, we'll say so. No upsells, no packages, no pressure.",
  },
];

const expertise = [
  "Pigmentation, melasma, and acne management",
  "Chemical peels and medical facials",
  "Microneedling with serums and growth factors",
  "Dermal fillers — natural lip filler, cheek, chin, jawline",
  "Exosomes for hair restoration",
  "Anti-wrinkle injections (Botox) — frown lines, forehead, crow's feet",
  "Skin boosters — Profhilo, Sunekos, polynucleotides",
  "Laser and energy-based treatments",
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="container-page pt-14 pb-12 md:pt-20">
        <div className="grid gap-8 md:grid-cols-12 md:items-end md:gap-12">
          <div className="md:col-span-7">
            <div className="flex items-center gap-3">
              <LogoMark size="md" variant="light" />
              <span className="eyebrow">Meet Dr. Alaa</span>
            </div>
            <h1 className="mt-5 font-serif text-4xl leading-tight text-ink-900 sm:text-5xl md:mt-6 md:text-6xl lg:text-7xl">
              A measured approach to <span className="italic text-rose-400">aesthetic medicine.</span>
            </h1>
          </div>
          <div className="md:col-span-5">
            <p className="text-base leading-relaxed text-ink-700 md:text-lg">
              Dr. Alaa Zidan is an aesthetic and medical doctor with{" "}
              <span className="font-medium text-ink-900">5+ years of experience</span>{" "}
              in aesthetic dermatology, practising at{" "}
              <span className="font-medium text-ink-900">Life Care Medical Center</span>{" "}
              in Hulhumalé, Maldives. Her practice blends medical rigour with an
              artistic eye — and a strong preference for results that look
              entirely like you.
            </p>
          </div>
        </div>
      </section>

      {/* PORTRAIT */}
      <section className="container-page pb-16">
        <div className="grid gap-10 md:grid-cols-12 md:items-center">
          <div className="md:col-span-5">
            <DoctorImage />
          </div>
          <div className="md:col-span-7">
            <span className="eyebrow">In her own words</span>
            <p className="mt-4 font-serif text-2xl leading-relaxed text-ink-900 md:text-3xl">
              &ldquo;The most flattering treatments are the ones nobody can
              identify. My job is to refine what's already there — quietly,
              precisely, and only when it's actually worth doing.&rdquo;
            </p>
            <p className="mt-6 font-script text-3xl text-gold-500">Dr. Alaa Zidan</p>
            <p className="text-xs uppercase tracking-[0.3em] text-ink-600">
              Aesthetic &amp; Medical Doctor · Life Care Medical Center
            </p>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="bg-sand-100/60 border-y border-sand-200">
        <div className="container-page py-24 grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <span className="eyebrow">Philosophy</span>
            <h2 className="mt-3 font-serif text-4xl text-ink-900">
              Three principles guide every appointment.
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6 space-y-10">
            {principles.map((p, i) => (
              <div key={p.title} className="border-l-2 border-gold-300 pl-6">
                <span className="text-xs uppercase tracking-widest text-gold-500">0{i + 1}</span>
                <h3 className="mt-2 font-serif text-2xl text-ink-900">{p.title}</h3>
                <p className="mt-3 text-ink-700 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="container-page py-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <span className="eyebrow">Expertise</span>
            <h2 className="mt-3 font-serif text-4xl text-ink-900">Areas of practice</h2>
            <p className="mt-6 text-ink-700">
              A focused, well-defined scope. Each procedure performed regularly
              and with the same standard of medical precision.
            </p>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <ul className="grid gap-3 sm:grid-cols-2">
              {expertise.map((e) => (
                <li key={e} className="flex items-start gap-3 rounded-xl border border-sand-200 bg-sand-50 p-4">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-gold-400" />
                  <span className="text-sm text-ink-700">{e}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CLINIC INFO */}
      <section className="border-y border-sand-200 bg-sand-100/40">
        <div className="container-page py-20 grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <span className="eyebrow">The clinic</span>
            <h2 className="mt-3 font-serif text-4xl text-ink-900">
              Life Care Medical Center
            </h2>
            <p className="mt-6 text-ink-700">
              Dr. Alaa practises at LMC in Hulhumalé — a calm, modern medical
              centre offering a full range of aesthetic and medical services.
              All consultations are by appointment.
            </p>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <address className="not-italic">
              <p className="font-serif text-2xl text-ink-900">Life Care Medical Center</p>
              <p className="mt-2 text-ink-700">
                Lot no. 11382, Rabarugas Magu<br />
                Hulhumalé, Maldives
              </p>
            </address>
            <div className="mt-6 grid gap-2 text-sm text-ink-700">
              <p>📞 <a href="tel:+9607937512" className="hover:text-gold-500">+960 793 7512</a></p>
            </div>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap">
              <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Book Appointment
              </Link>
              <Link href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn-outline">
                Follow on Instagram
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page py-24">
        <div className="rounded-[2rem] bg-rose-100 p-12 text-center md:p-16">
          <h2 className="font-serif text-4xl text-ink-900 md:text-5xl">
            Begin with a consultation.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-ink-700">
            Same-day replies on WhatsApp and Instagram. We're happy to answer
            questions before you commit to anything.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Book Appointment
            </Link>
            <Link href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn-outline">
              Follow on Instagram
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
