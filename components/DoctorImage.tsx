"use client";

import Image from "next/image";

/**
 * Editorial portrait — face stays sharp at the top, the bottom of the image
 * fades linearly into the page background. Subtle gold halo, gold arc above,
 * and script signature beneath give an upscale magazine-portrait feel
 * without any hard card frame.
 */
export default function DoctorImage() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      {/* Warm gold halo behind the figure */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_60%_at_50%_30%,rgba(201,167,107,0.28),transparent_75%)]"
      />

      {/* Decorative thin gold arc framing the top */}
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

      {/* Tiny decorative dots for asymmetry */}
      <span
        aria-hidden
        className="absolute left-[8%] top-[10%] -z-10 h-1.5 w-1.5 rounded-full bg-gold-400/70"
      />
      <span
        aria-hidden
        className="absolute right-[6%] top-[8%] -z-10 h-1 w-1 rounded-full bg-rose-300"
      />

      {/* The portrait — sharp face, fades at bottom into page background */}
      <div className="relative aspect-[4/5] w-full">
        <Image
          src="/images/dr-alaa-portrait.jpg"
          alt="Dr. Alaa Zidan, Aesthetic & Medical Doctor"
          fill
          priority
          sizes="(max-width: 768px) 90vw, 40vw"
          className="object-cover object-top"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, #000 68%, rgba(0,0,0,0.55) 85%, transparent 100%)",
            maskImage:
              "linear-gradient(to bottom, #000 68%, rgba(0,0,0,0.55) 85%, transparent 100%)",
          }}
        />
      </div>

      {/* Editorial signature, overlapping the fade */}
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
  );
}
