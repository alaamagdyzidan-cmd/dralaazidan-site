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

              <h1 className="mt-5 font-serif leading-[1.05] text-ink-900 md:mt-6">
                <span className="block text-[2.1rem] sm:text-[2.75rem] md:text-[3.5rem] lg:text-[4.5rem]">
                  The art of natural skin.
                </span>
                <span className="mt-4 block font-serif text-[1.5rem] italic leading-snug text-rose-500 sm:text-[1.85rem] md:mt-5 md:text-[2.25rem] lg:text-[2.75rem]">
                  Refined, never reinvented.
                </span>
              </h1>

              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-700 sm:text-lg md:mx-0 md:mt-6">
                Aesthetic dermatology medical-led practice with an eye for
                restraint — every consultation begins with what's actually
                worth doing.
              </p>

              {/* MOBILE-ONLY portrait — circular medallion */}
              <div className="mt-8 md:hidden">
                <div className="relative mx-auto w-[260px] max-w-full">
                  {/* Warm radial halo behind the circle */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 -z-10 scale-[1.4] rounded-full bg-[radial-gradient(circle_at_50%_45%,rgba(201,167,107,0.32),transparent_72%)]"
                  />

                  {/* Outer thin gold ring */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -inset-3 rounded-full border border-gold-300/55"
                  />
                  {/* Soft offset back circle for depth */}
                  <div
                    aria-hidden
                    className="absolute inset-0 translate-x-2 translate-y-2 rounded-full bg-gradient-to-br from-rose-100/70 via-sand-100/50 to-gold-300/30"
                  />

                  {/* Portrait inside a circular gold-ringed frame */}
                  <div className="relative aspect-square w-full overflow-hidden rounded-full bg-gradient-to-br from-sand-100 via-rose-50 to-sand-50 ring-1 ring-gold-400/50 shadow-xl shadow-ink-900/15">
                    <Image
                      src="/images/dr-alaa-portrait.jpg"
                      alt="Dr. Alaa Zidan, Aesthetic & Medical Doctor"
                      fill
                      priority
                      sizes="(max-width: 768px) 70vw, 0px"
                      className="object-cover object-[center_top]"
                    />
                  </div>

                  {/* Tiny accent dots — symmetrically placed around the circle */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -top-1.5 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-gold-400"
                  />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -bottom-1.5 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-rose-300"
                  />

                  {/* Editorial signature */}
                  <div className="mt-7 flex flex-col items-center">
                    <div className="h-px w-12 bg-gold-400/70" />
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

              <dl className="mt-10 grid grid-cols-3 gap-2 rounded-2xl border border-gold-300/50 bg-sand-50/70 px-3 py-4 backdrop-blur sm:gap-4 sm:px-6 sm:py-5">
                <div className="flex flex-col items-center border-r border-gold-300/40 pr-2 text-center sm:pr-4">
                  <dt className="text-[9px] font-medium uppercase tracking-[0.25em] text-gold-500 sm:text-[10px]">
                    Experience
                  </dt>
                  <dd className="mt-1.5 font-serif text-base text-ink-900 sm:text-lg md:text-xl">
                    5+ Years
                  </dd>
                </div>
                <div className="flex flex-col items-center border-r border-gold-300/40 px-1 text-center sm:px-2">
                  <dt className="text-[9px] font-medium uppercase tracking-[0.25em] text-gold-500 sm:text-[10px]">
                    Practising at
                  </dt>
                  <dd className="mt-1.5 font-serif text-base text-ink-900 sm:text-lg md:text-xl">
                    LMC
                  </dd>
                </div>
                <div className="flex flex-col items-center pl-2 text-center sm:pl-4">
                  <dt className="text-[9px] font-medium uppercase tracking-[0.25em] text-gold-500 sm:text-[10px]">
                    Location
                  </dt>
                  <dd className="mt-1.5 font-serif text-base text-ink-900 sm:text-lg md:text-xl">
                    Hulhumalé
                  </dd>
                </div>
              </dl>
            </div>

            {/* DESKTOP-ONLY portrait — refined circular medallion */}
            <div className="hidden md:col-span-5 md:block">
              <div className="relative mx-auto w-[360px] max-w-full">
                {/* Warm radial halo behind the circle */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 -z-10 scale-[1.5] rounded-full bg-[radial-gradient(circle_at_50%_45%,rgba(201,167,107,0.32),transparent_72%)]"
                />

                {/* Outer thin gold ring */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -inset-4 rounded-full border border-gold-300/55"
                />
                {/* Soft offset back circle for depth */}
                <div
                  aria-hidden
                  className="absolute inset-0 translate-x-3 translate-y-3 rounded-full bg-gradient-to-br from-rose-100/70 via-sand-100/50 to-gold-300/30"
                />

                {/* Portrait inside a circular gold-ringed frame */}
                <div className="relative aspect-square w-full overflow-hidden rounded-full bg-gradient-to-br from-sand-100 via-rose-50 to-sand-50 ring-1 ring-gold-400/55 shadow-2xl shadow-ink-900/20">
                  <Image
                    src="/images/dr-alaa-portrait.jpg"
                    alt="Dr. Alaa Zidan, Aesthetic & Medical Doctor"
                    fill
                    priority
                    sizes="(max-width: 768px) 0px, 30vw"
                    className="object-cover object-[center_top]"
                  />
                </div>

                {/* Decorative accent dots top/bottom centre */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -top-2 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-gold-400 shadow"
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute -bottom-2 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-rose-300"
                />

                {/* Subtle vertical gold rules flanking the circle */}
                <div
                  aria-hidden
                  className="absolute -right-8 top-1/3 h-1/3 w-px bg-gradient-to-b from-transparent via-gold-400 to-transparent"
                />
                <div
                  aria-hidden
                  className="absolute -left-8 top-[42%] h-14 w-px bg-gradient-to-b from-transparent via-rose-300 to-transparent"
                />

                {/* Editorial signature */}
                <div className="mt-10 flex flex-col items-center">
                  <div className="h-px w-16 bg-gold-400/70" />
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
