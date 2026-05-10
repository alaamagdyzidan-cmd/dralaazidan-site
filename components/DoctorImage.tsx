"use client";

import Image from "next/image";

/**
 * Dr. Alaa's portrait integrated into the page background.
 *
 * No card or hard frame — instead, the image edges are softly masked into
 * the surrounding gradient via a radial mask, and a quiet gold halo sits
 * behind the figure for warmth. A script signature anchors the composition.
 */
export default function DoctorImage() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      {/* Soft gold halo behind the figure */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_55%_65%_at_50%_35%,rgba(201,167,107,0.25),transparent_70%)]"
      />

      {/* The portrait — bleeds into background via radial mask */}
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
              "radial-gradient(ellipse 75% 92% at 50% 38%, #000 55%, transparent 100%)",
            maskImage:
              "radial-gradient(ellipse 75% 92% at 50% 38%, #000 55%, transparent 100%)",
          }}
        />
      </div>

      {/* Decorative gold curve + script signature */}
      <div className="-mt-4 flex flex-col items-center">
        <svg viewBox="0 0 200 12" className="h-3 w-44 text-gold-400" aria-hidden>
          <path
            d="M2 6 Q60 2 100 6 T198 6"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.8"
          />
        </svg>
        <p className="mt-3 font-script text-4xl text-gold-500">Dr. Alaa Zidan</p>
        <p className="mt-1 text-[10px] uppercase tracking-[0.4em] text-gold-500/70">
          Aesthetic &amp; Medical Doctor
        </p>
      </div>
    </div>
  );
}
