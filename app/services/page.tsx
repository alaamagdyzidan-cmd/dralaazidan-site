import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import LogoMark from "@/components/LogoMark";

export const metadata: Metadata = {
  title: "Services & Treatments",
  description:
    "Aesthetic dermatology treatments at Life Care Medical Center, Hulhumalé. Botox, fillers, exosomes for hair, microneedling, and skin rejuvenation.",
};

const INSTAGRAM_URL = "https://www.instagram.com/dr.alaazidan/";
const WHATSAPP_URL = `https://wa.me/9607937512?text=${encodeURIComponent("Hello Dr. Alaa, I'd like to ask about a treatment.")}`;

const categories = [
  {
    id: "pigmentation",
    title: "Pigmentation, Melasma & Acne",
    intro:
      "Medical-led management for hyperpigmentation, melasma, post-inflammatory marks, and active or scarred acne. Every plan begins with a detailed skin assessment to choose the right protocol for your skin type.",
    image: null,
    treatments: [
      { name: "Melasma management", time: "By plan" },
      { name: "Post-inflammatory hyperpigmentation", time: "By plan" },
      { name: "Active acne treatment", time: "By plan" },
      { name: "Acne scarring", time: "By plan" },
    ],
  },
  {
    id: "peels",
    title: "Chemical Peels & Medical Facials",
    intro:
      "Layered, controlled exfoliation tailored to your concerns — from gentle radiance peels to medium-depth resurfacing — paired with medical facials and Hydrafacial for everyday glow.",
    image: null,
    treatments: [
      { name: "Chemical peel — superficial", time: "30 min" },
      { name: "Chemical peel — medium-depth", time: "45 min" },
      { name: "Medical facial", time: "60 min" },
      { name: "Hydrafacial", time: "45 min" },
    ],
  },
  {
    id: "microneedling",
    title: "Microneedling",
    intro:
      "Small needles, big results. Tiny channels in the skin trigger collagen and elastin renewal, with serums and growth factors delivered deeper than topical care alone can reach.",
    image: "/images/alaa-4.jpg",
    treatments: [
      { name: "Microneedling with serum", time: "45 min" },
      { name: "Microneedling with PRP", time: "60 min" },
      { name: "Microneedling with growth factors", time: "60 min" },
    ],
  },
  {
    id: "skin-boosters",
    title: "Skin Boosters",
    intro:
      "Injectable hydration and bio-revitalisation. Profhilo, Sunekos, polynucleotides, and vitamin cocktails deliver structural support and luminosity deep into the dermis.",
    image: null,
    treatments: [
      { name: "Skin boosters — Profhilo", time: "30 min" },
      { name: "Skin boosters — Sunekos", time: "30 min" },
      { name: "Polynucleotides", time: "30 min" },
      { name: "Mesotherapy / vitamin cocktails", time: "30 min" },
    ],
  },
  {
    id: "exosomes",
    title: "Exosomes for Hair & Skin",
    intro:
      "Regenerative therapy using lab-derived exosomes — natural messengers that signal hair follicles and skin cells to renew. Non-surgical, with consistently strong results in the right candidate.",
    image: "/images/alaa-2.jpg",
    treatments: [
      { name: "Exosomes for hair restoration", time: "45–60 min" },
      { name: "Exosomes for skin rejuvenation", time: "45 min" },
      { name: "PRP for hair", time: "45 min" },
      { name: "PRP for skin (vampire facial)", time: "60 min" },
    ],
  },
  {
    id: "anti-wrinkle",
    title: "Anti-Wrinkle Injections (Botox)",
    intro:
      "Botox placed with restraint and anatomical precision. Subtle softening of expression lines — natural movement preserved, never frozen.",
    image: "/images/alaa-1.jpg",
    treatments: [
      { name: "Anti-wrinkle injections — frown lines", time: "20–30 min" },
      { name: "Anti-wrinkle injections — forehead", time: "20–30 min" },
      { name: "Anti-wrinkle injections — crow's feet", time: "20 min" },
    ],
  },
  {
    id: "dermal-fillers",
    title: "Dermal Fillers",
    intro:
      "Hyaluronic acid filler placed with restraint — natural, soft, harmonised with the face. Natural lip filler, cheek and midface, chin and jawline.",
    image: "/images/alaa-3.jpg",
    treatments: [
      { name: "Natural lip filler", time: "30–45 min" },
      { name: "Cheek and midface filler", time: "45 min" },
      { name: "Chin and jawline filler", time: "45 min" },
    ],
  },
  {
    id: "laser",
    title: "Laser & Energy",
    intro:
      "Calibrated laser and energy-based treatments for pigmentation, vascular concerns, redness, and resurfacing. Always preceded by a detailed skin assessment — particularly important in tropical light.",
    image: "/images/laser.avif",
    treatments: [
      { name: "IPL — pigmentation & vascular", time: "30 min" },
      { name: "Fractional laser resurfacing", time: "45–60 min" },
      { name: "Laser hair reduction", time: "Varies" },
      { name: "Radiofrequency skin tightening", time: "45 min" },
      { name: "Carbon laser facial", time: "45 min" },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="container-page pt-14 pb-12 md:pt-24 md:pb-16">
        <div className="grid gap-8 md:grid-cols-12 md:items-end md:gap-12">
          <div className="md:col-span-7">
            <span className="eyebrow">Services</span>
            <h1 className="mt-4 font-serif text-4xl leading-tight text-ink-900 sm:text-5xl md:text-6xl lg:text-7xl">
              A focused menu of <span className="italic text-rose-400">considered treatments.</span>
            </h1>
          </div>
          <div className="md:col-span-5">
            <p className="text-base leading-relaxed text-ink-700 md:text-lg">
              Every plan is bespoke. Treatments below are a starting point —
              the right approach for you is decided together at consultation.
              Send us a message and we'll answer questions before you book.
            </p>
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap md:mt-8">
              <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Book Appointment
              </Link>
              <Link href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn-outline">
                Follow on Instagram
              </Link>
            </div>
          </div>
        </div>

        <nav className="mt-10 flex flex-wrap gap-2 border-t border-sand-200 pt-6 md:mt-16 md:gap-3">
          {categories.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              className="rounded-full border border-sand-200 px-5 py-2 text-xs uppercase tracking-widest text-ink-700 transition hover:border-gold-300 hover:text-gold-500"
            >
              {c.title}
            </a>
          ))}
        </nav>
      </section>

      {categories.map((cat, i) => (
        <section
          key={cat.id}
          id={cat.id}
          className={i % 2 === 0 ? "border-y border-sand-200 bg-sand-100/40" : ""}
        >
          <div className="container-page py-14 md:py-20">
            <div className="grid gap-10 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-5">
                <span className="eyebrow">0{i + 1}</span>
                <h2 className="mt-3 font-serif text-3xl text-ink-900 sm:text-4xl">{cat.title}</h2>
                <p className="mt-5 text-base leading-relaxed text-ink-700 md:mt-6 md:text-lg">{cat.intro}</p>
                <div className="relative mt-8 aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-sand-50 via-rose-50 to-sand-50">
                  {cat.image && (
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className={
                        cat.image.includes("/alaa-")
                          ? "object-contain"
                          : "object-cover"
                      }
                    />
                  )}
                </div>
              </div>
              <div className="md:col-span-6 md:col-start-7">
                <ul className="divide-y divide-sand-200">
                  {cat.treatments.map((t) => (
                    <li key={t.name} className="flex items-baseline justify-between gap-4 py-5">
                      <span className="font-medium text-ink-900">{t.name}</span>
                      <span className="text-sm uppercase tracking-widest text-ink-600">{t.time}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-xs px-6 py-3"
                  >
                    Ask about {cat.title}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* BEFORE & AFTER RESULTS */}
      <section className="bg-sand-100/40 border-y border-sand-200">
        <div className="container-page py-24">
          <div className="text-center mb-16">
            <span className="eyebrow">Real Results</span>
            <h2 className="mt-3 font-serif text-4xl text-ink-900 md:text-5xl">
              Before and after gallery.
            </h2>
            <p className="mt-6 mx-auto max-w-2xl text-lg text-ink-700">
              Real patient results from the clinic. All images shared with consent. Treatments are subtle, natural, and designed to enhance what's already there.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Botox — Frown lines */}
            <div className="rounded-2xl overflow-hidden border border-sand-200 bg-sand-50">
              <div className="relative aspect-square bg-gradient-to-br from-sand-50 via-rose-50 to-sand-50">
                <Image
                  src="/images/alaa-1.jpg"
                  alt="Botox for frown lines — before and after"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-lg text-ink-900">Anti-Wrinkle</h3>
                <p className="mt-2 text-sm text-ink-600">Frown lines & forehead</p>
              </div>
            </div>

            {/* Lip Filler */}
            <div className="rounded-2xl overflow-hidden border border-sand-200 bg-sand-50">
              <div className="relative aspect-square bg-gradient-to-br from-sand-50 via-rose-50 to-sand-50">
                <Image
                  src="/images/alaa-3.jpg"
                  alt="Natural lip filler — before and after"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-lg text-ink-900">Lip Filler</h3>
                <p className="mt-2 text-sm text-ink-600">Natural volume enhancement</p>
              </div>
            </div>

            {/* Microneedling */}
            <div className="rounded-2xl overflow-hidden border border-sand-200 bg-sand-50">
              <div className="relative aspect-square bg-gradient-to-br from-sand-50 via-rose-50 to-sand-50">
                <Image
                  src="/images/alaa-4.jpg"
                  alt="Microneedling — small needles, big results"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-lg text-ink-900">Microneedling</h3>
                <p className="mt-2 text-sm text-ink-600">Skin texture & radiance</p>
              </div>
            </div>

            {/* Exosomes for Hair */}
            <div className="rounded-2xl overflow-hidden border border-sand-200 bg-sand-50">
              <div className="relative aspect-square bg-gradient-to-br from-sand-50 via-rose-50 to-sand-50">
                <Image
                  src="/images/alaa-2.jpg"
                  alt="Exosomes for hair — before and after"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-lg text-ink-900">Exosomes for Hair</h3>
                <p className="mt-2 text-sm text-ink-600">Density & regrowth</p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-ink-700 mb-6">
              More results available on our Instagram — follow for regular updates on patient transformations.
            </p>
            <Link href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn-outline">
              Follow @dr.alaazidan
            </Link>
          </div>
        </div>
      </section>

      <section className="container-page py-16 md:py-24">
        <div className="relative overflow-hidden rounded-[1.75rem] bg-ink-900 px-5 py-12 text-center text-sand-50 sm:rounded-[2rem] sm:px-8 sm:py-16 md:px-12 md:py-20">
          {/* Soft gold radial glow */}
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(201,167,107,0.18),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(229,191,178,0.12),transparent_60%)]" />

          <div className="mx-auto flex max-w-2xl flex-col items-center">
            <LogoMark size="md" variant="dark" />

            <span className="mt-6 text-[10px] font-medium uppercase tracking-[0.35em] text-gold-300 sm:text-[11px] sm:tracking-[0.4em] md:mt-8">
              Begin a conversation
            </span>

            <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl md:mt-5 md:text-5xl">
              Not sure where to start?
            </h2>

            <p className="mt-5 text-sm leading-relaxed text-sand-200 sm:text-base md:mt-6 md:text-lg">
              Send us a quick message — describe what you'd like to address and
              we'll let you know which treatments make sense to consider.
              Same-day replies on WhatsApp and Instagram. No pressure, no
              upsells.
            </p>

            <div className="mt-8 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center md:mt-10">
              <Link
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto"
              >
                Book Appointment
              </Link>
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-sand-200/40 px-7 py-3 text-xs font-medium uppercase tracking-[0.2em] text-sand-50 transition hover:border-gold-300 hover:text-gold-300 sm:w-auto"
              >
                Contact
              </Link>
            </div>

            <div className="mt-8 flex flex-col items-center gap-2 text-[9px] uppercase tracking-[0.25em] text-sand-300 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-6 sm:gap-y-2 sm:text-[10px] sm:tracking-[0.3em] md:mt-10 md:gap-x-8">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-300" /> Same-day replies
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-300" /> Honest consultations
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-300" /> Hulhumalé, Maldives
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
