import Link from "next/link";
import Image from "next/image";
import LogoMark from "@/components/LogoMark";
import HeroOrnament from "@/components/HeroOrnament";

const INSTAGRAM_URL = "https://www.instagram.com/dr.alaazidan/";
const FACEBOOK_URL = "https://www.facebook.com/share/1aB3gGmTu5/?mibextid=wwXIfr";
const WHATSAPP_URL = `https://wa.me/9607937512?text=${encodeURIComponent(
  "Hello Dr. Alaa, I'd like to book an appointment."
)}`;

// Authentic clinical imagery from Dr. Alaa's own work — each used exactly once
// across the home page so nothing repeats.
const signatureTreatments = [
  {
    title: "Botox",
    description:
      "Anti-wrinkle injections for frown lines, forehead, and crow's feet — natural movement preserved.",
    image: "/images/alaa-1.jpg",
    href: "/blog/botox-for-frown-lines",
  },
  {
    title: "Lip & Facial Filler",
    description:
      "Hyaluronic acid filler placed with restraint — natural, soft, harmonised with the face.",
    image: "/images/alaa-3.jpg",
    href: "/blog/natural-lip-filler",
  },
  {
    title: "Exosomes for Hair",
    description:
      "Advanced regenerative treatment for hair thinning and density loss. Non-surgical.",
    image: "/images/alaa-2.jpg",
    href: "/blog/exosomes-for-hair-loss",
  },
  {
    title: "Microneedling",
    description:
      "Stimulates collagen and elastin for smoother, firmer, more radiant skin.",
    image: "/images/alaa-4.jpg",
    href: "/blog/microneedling-small-needles-big-results",
  },
];

const testimonials = [
  {
    quote:
      "Dr. Alaa is honest, precise, and never pushes treatments you don't need. My skin has never looked more like itself.",
    name: "L. M.",
    role: "Patient since 2024",
  },
  {
    quote:
      "The consultation alone was worth the visit. She understood exactly what I wanted and delivered subtle, natural results.",
    name: "S. K.",
    role: "Filler patient",
  },
  {
    quote:
      "A genuinely artistic eye combined with a serious medical mind. The clinic feels calm and considered.",
    name: "R. A.",
    role: "Microneedling patient",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO — desktop: split layout (text-left, portrait-right).
          Mobile: title → paragraph → portrait → CTAs → trust badges. */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sand-50 via-rose-50 to-sand-50" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(201,167,107,0.18),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(229,191,178,0.25),transparent_55%)]" />

        {/* Decorative ornaments — softer on mobile, full size on desktop */}
        <HeroOrnament className="pointer-events-none absolute -top-6 right-2 h-24 w-24 text-gold-300/60 sm:h-36 sm:w-36 md:right-12 md:h-56 md:w-56" />
        <HeroOrnament
          flip
          className="pointer-events-none absolute -bottom-8 left-2 h-24 w-24 text-rose-200 sm:h-32 sm:w-32 md:left-10 md:h-52 md:w-52"
        />

        <div className="container-page relative pt-12 pb-16 md:pt-20 md:pb-24">
          <div className="md:grid md:grid-cols-12 md:items-center md:gap-12 lg:gap-16">
            {/* Text + (mobile-only image) column */}
            <div className="text-center md:col-span-7 md:text-left">
              <span className="inline-block text-[10px] font-medium uppercase tracking-[0.4em] text-gold-500 sm:text-xs">
                Dermatology and Aesthetics
              </span>
              <span className="mt-2 block text-[10px] uppercase tracking-[0.3em] text-ink-600 sm:text-[11px]">
                Maldives • Egypt
              </span>

              <h1 className="mt-5 font-serif text-[2rem] leading-[1.08] text-ink-900 sm:text-[2.5rem] md:mt-6 md:text-[3.25rem] lg:text-[4.25rem]">
                The art of natural skin —
                <span className="italic text-rose-400"> refined, never reinvented.</span>
              </h1>

              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-700 sm:text-lg md:mx-0 md:mt-6">
                Aesthetic dermatology medical-led practice with an eye for
                restraint — every consultation begins with what's actually
                worth doing.
              </p>

              {/* MOBILE-ONLY portrait — face sharp at top, fades into hero background at bottom */}
              <div className="mt-8 md:hidden">
                <div className="relative mx-auto w-full max-w-[340px]">
                  {/* Warm gold halo behind the figure */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_55%_at_50%_30%,rgba(201,167,107,0.28),transparent_75%)]"
                  />
                  {/* Decorative thin gold arc above */}
                  <svg
                    aria-hidden
                    viewBox="0 0 200 40"
                    className="absolute -top-2 left-1/2 -z-10 h-10 w-56 -translate-x-1/2 text-gold-400/70"
                  >
                    <path
                      d="M2 35 Q100 -2 198 35"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.8"
                    />
                  </svg>

                  {/* The portrait — sharp at top, linear fade at bottom only */}
                  <div className="relative aspect-[4/5] w-full">
                    <Image
                      src="/images/dr-alaa-portrait.jpg"
                      alt="Dr. Alaa Zidan, Aesthetic & Medical Doctor"
                      fill
                      priority
                      sizes="(max-width: 768px) 85vw, 0px"
                      className="object-cover object-top"
                      style={{
                        WebkitMaskImage:
                          "linear-gradient(to bottom, #000 65%, rgba(0,0,0,0.6) 82%, transparent 100%)",
                        maskImage:
                          "linear-gradient(to bottom, #000 65%, rgba(0,0,0,0.6) 82%, transparent 100%)",
                      }}
                    />
                  </div>

                  {/* Editorial signature, slightly overlapping the fade */}
                  <div className="-mt-6 flex flex-col items-center">
                    <div className="h-px w-16 bg-gold-400/60" />
                    <p className="mt-3 font-script text-3xl text-gold-500 leading-none">
                      Dr. Alaa Zidan
                    </p>
                    <p className="mt-2 text-[9px] uppercase tracking-[0.4em] text-gold-500/80">
                      Aesthetic &amp; Medical Doctor
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:justify-center md:justify-start">
                <Link
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Book Appointment
                </Link>
                <Link href="/services" className="btn-outline">
                  View Services
                </Link>
              </div>

              <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-x-4 gap-y-2 rounded-full border border-gold-300/60 bg-sand-50/60 px-4 py-2.5 text-[9px] uppercase tracking-[0.3em] text-ink-700 backdrop-blur sm:gap-x-6 sm:px-6 sm:py-3 sm:text-[10px] md:justify-start">
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold-400" /> 5+ years experience
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold-400" /> LMC
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold-400" /> Hulhumalé
                </span>
              </div>
            </div>

            {/* DESKTOP-ONLY portrait — editorial, face sharp, bottom blends into background */}
            <div className="hidden md:col-span-5 md:block">
              <div className="relative mx-auto w-full max-w-md">
                {/* Soft gold halo behind the figure */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_60%_at_50%_30%,rgba(201,167,107,0.28),transparent_75%)]"
                />

                {/* Decorative thin gold arc framing the top of the portrait */}
                <svg
                  aria-hidden
                  viewBox="0 0 240 50"
                  className="absolute -top-3 left-1/2 -z-10 h-14 w-72 -translate-x-1/2 text-gold-400/70"
                >
                  <path
                    d="M2 45 Q120 -3 238 45"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.7"
                  />
                </svg>

                {/* Small decorative gold dot accents */}
                <span
                  aria-hidden
                  className="absolute left-[8%] top-[10%] -z-10 h-1.5 w-1.5 rounded-full bg-gold-400/70"
                />
                <span
                  aria-hidden
                  className="absolute right-[6%] top-[8%] -z-10 h-1 w-1 rounded-full bg-rose-300"
                />

                {/* The portrait — sharp at top, linear fade at bottom */}
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src="/images/dr-alaa-portrait.jpg"
                    alt="Dr. Alaa Zidan, Aesthetic & Medical Doctor"
                    fill
                    priority
                    sizes="(max-width: 768px) 0px, 40vw"
                    className="object-cover object-top"
                    style={{
                      WebkitMaskImage:
                        "linear-gradient(to bottom, #000 68%, rgba(0,0,0,0.55) 85%, transparent 100%)",
                      maskImage:
                        "linear-gradient(to bottom, #000 68%, rgba(0,0,0,0.55) 85%, transparent 100%)",
                    }}
                  />
                </div>

                {/* Editorial signature, slightly overlapping the fade */}
                <div className="-mt-8 flex flex-col items-center">
                  <div className="h-px w-20 bg-gold-400/60" />
                  <p className="mt-4 font-script text-5xl text-gold-500 leading-none">
                    Dr. Alaa Zidan
                  </p>
                  <p className="mt-3 text-[10px] uppercase tracking-[0.4em] text-gold-500/80">
                    Aesthetic &amp; Medical Doctor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCING DR. ALAA — text-only band (portrait already in hero) */}
      <section className="container-page py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Introducing Dr. Alaa</span>
          <h2 className="mt-3 font-serif text-3xl text-ink-900 sm:text-4xl md:text-5xl">
            Aesthetic medicine with restraint.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink-700 md:text-lg">
            Dr. Alaa Zidan is an aesthetic and medical doctor with 5+ years of
            experience in aesthetic dermatology. Her philosophy is simple: the
            best treatments refine what's already there. Subtle, considered, and
            only when it's actually worth doing.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink-700 md:text-lg">
            Every consultation begins with honesty — about what will work, what
            won't, and what's best left alone.
          </p>
          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-gold-500 transition hover:text-gold-600"
          >
            Full bio &amp; expertise →
          </Link>
        </div>
      </section>

      {/* PHILOSOPHY BAND */}
      <section className="border-y border-sand-200 bg-sand-100/60">
        <div className="container-page py-16 md:py-20">
          <div className="grid gap-8 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-4">
              <span className="eyebrow">The practice</span>
              <h2 className="mt-3 font-serif text-3xl text-ink-900 sm:text-4xl md:text-5xl">
                Restraint is the strategy.
              </h2>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <p className="text-base leading-relaxed text-ink-700 md:text-lg">
                Dr. Alaa's practice is built on a quiet conviction: the best
                aesthetic medicine refines what's already there. Every
                consultation begins with what's actually worth doing — and an
                honest answer about what isn't.
              </p>
              <Link
                href="/about"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-gold-500 transition hover:text-gold-600"
              >
                Meet Dr. Alaa →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SIGNATURE TREATMENTS — only place that shows alaa-1..alaa-4 */}
      <section className="container-page py-16 md:py-24">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="eyebrow">Signature treatments</span>
            <h2 className="mt-3 font-serif text-3xl text-ink-900 sm:text-4xl md:text-5xl">
              The work the clinic is known for.
            </h2>
            <p className="mt-4 max-w-xl text-base text-ink-700 md:text-lg">
              Four treatments performed regularly at the clinic. Read about
              each, then book when you're ready.
            </p>
          </div>
          <Link href="/services" className="btn-outline">
            All Services
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 md:mt-14">
          {signatureTreatments.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="group relative overflow-hidden rounded-2xl border border-sand-200 bg-sand-50 transition hover:border-gold-300 hover:shadow-md"
            >
              <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-sand-50 via-rose-50 to-sand-50">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-contain transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-5 md:p-6">
                <h3 className="font-serif text-xl text-ink-900 md:text-2xl">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-600">
                  {s.description}
                </p>
                <span className="mt-5 inline-block text-xs font-medium uppercase tracking-[0.2em] text-gold-500 transition group-hover:text-gold-600">
                  Read more →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* INSTAGRAM / SOCIAL — text-only (no image duplication) */}
      <section className="container-page pb-16 md:pb-24">
        <div className="relative overflow-hidden rounded-[2rem] bg-sand-100 px-6 py-12 text-center md:px-12 md:py-16">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(229,191,178,0.4),transparent_55%)]" />
          <span className="eyebrow">@dr.alaazidan</span>
          <h2 className="mt-3 font-serif text-3xl text-ink-900 sm:text-4xl md:text-5xl">
            Day-to-day from the clinic.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-ink-700 md:text-lg">
            Real before-and-afters, treatment notes, and updates from the
            practice. Follow along for the most current view of the work.
          </p>
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Link
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Follow on Instagram
            </Link>
            <Link
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Visit Facebook
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS — text only, no image duplication */}
      <section className="bg-ink-900 text-sand-50">
        <div className="container-page py-16 md:py-24">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-gold-300">
            In their words
          </span>
          <h2 className="mt-3 font-serif text-3xl text-sand-50 sm:text-4xl md:text-5xl">
            Patients on the experience.
          </h2>

          <div className="mt-10 grid gap-6 md:mt-14 md:grid-cols-3 md:gap-8">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="rounded-2xl border border-ink-700 p-6 md:p-8"
              >
                <blockquote className="font-serif text-lg leading-relaxed text-sand-50 md:text-xl">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 text-sm text-sand-200">
                  <span className="font-medium text-sand-50">{t.name}</span>
                  <span className="block text-xs uppercase tracking-[0.2em] text-gold-300">
                    {t.role}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="container-page py-16 md:py-24">
        <div className="relative overflow-hidden rounded-[2rem] bg-rose-100 px-6 py-14 text-center md:px-12 md:py-20">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(201,167,107,0.18),transparent_60%)]" />
          <div className="flex justify-center">
            <LogoMark size="lg" variant="light" />
          </div>
          <span className="mt-6 inline-block text-[11px] font-medium uppercase tracking-[0.4em] text-gold-500">
            Begin a conversation
          </span>
          <h2 className="mt-4 font-serif text-3xl text-ink-900 sm:text-4xl md:text-5xl">
            Begin with a consultation.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-ink-700 md:text-lg">
            Same-day replies. Send a message describing what you'd like to
            address — we'll take it from there.
          </p>
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book Appointment
            </Link>
            <Link href="/contact" className="btn-outline">
              Contact
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
