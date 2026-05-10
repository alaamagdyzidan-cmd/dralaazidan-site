"use client";

import Image from "next/image";

/**
 * Magazine-style portrait card for Dr. Alaa.
 *
 * Layered design:
 *   1. Soft offset shadow card behind the portrait (gives depth, no harsh frame).
 *   2. Hairline gold border on the portrait itself.
 *   3. Subtle inner mat in cream tone to lift the image off the page.
 *   4. Editorial caption below — name in script, role in tracked uppercase.
 */
export default function DoctorImage() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      {/* Soft offset card behind — provides depth without a heavy frame */}
      <div
        aria-hidden
        className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2rem] bg-gradient-to-br from-rose-100 via-sand-100 to-gold-300/40"
      />

      {/* Main portrait card */}
      <div className="relative overflow-hidden rounded-[2rem] border border-gold-300/50 bg-sand-50 shadow-2xl shadow-ink-900/15">
        {/* Top brand strip */}
        <div className="flex items-center justify-between border-b border-sand-200 bg-gradient-to-r from-sand-50 via-rose-50 to-sand-50 px-5 py-3">
          <span className="text-[9px] font-medium uppercase tracking-[0.35em] text-gold-500">
            Dr. Alaa Zidan
          </span>
          <span className="h-1 w-1 rounded-full bg-gold-400" />
        </div>

        {/* The portrait */}
        <div className="relative aspect-[4/5] w-full bg-gradient-to-b from-sand-50 to-sand-100">
          <Image
            src="/images/dr-alaa-portrait.jpg"
            alt="Dr. Alaa Zidan, Aesthetic & Medical Doctor"
            fill
            priority
            sizes="(max-width: 768px) 90vw, 40vw"
            className="object-cover object-top"
          />
          {/* Subtle bottom gradient overlay for legibility of any text */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-sand-50/95 via-sand-50/40 to-transparent"
          />
        </div>

        {/* Editorial caption */}
        <div className="border-t border-sand-200 bg-sand-50 px-5 py-5 text-center">
          <p className="font-script text-3xl text-gold-500">Dr. Alaa Zidan</p>
          <p className="mt-1 text-[9px] uppercase tracking-[0.35em] text-ink-600">
            Aesthetic &amp; Medical Doctor
          </p>
        </div>
      </div>

      {/* Decorative corner accents — quiet, do not overlap the face */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-3 -left-3 h-14 w-14 rounded-full border border-gold-400/60"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-3 -right-3 h-16 w-16 rounded-full border border-rose-300/80"
      />
    </div>
  );
}
