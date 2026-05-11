import Image from "next/image";
import Link from "next/link";

type Props = {
  /** Date in display format, e.g. "May 2026". */
  reviewedOn?: string;
};

/**
 * Author + medical reviewer card. Surfaces strong E-E-A-T signals for
 * Google's medical-content quality guidelines (YMYL): author photo,
 * full credentials, role, "Medically reviewed by" line, and date.
 */
export default function AuthorCard({ reviewedOn }: Props) {
  return (
    <aside
      aria-label="Author and medical reviewer"
      className="mx-auto mt-12 max-w-3xl rounded-2xl border border-sand-200 bg-sand-50 p-6 sm:p-8"
    >
      <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-gold-500">
        Written &amp; medically reviewed by
      </p>
      <div className="mt-4 flex flex-col items-center gap-5 text-center sm:flex-row sm:items-start sm:gap-6 sm:text-left">
        <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-full ring-2 ring-gold-300/60 sm:h-24 sm:w-24">
          <Image
            src="/images/dr-alaa-portrait.jpg"
            alt="Dr. Alaa Zidan, Aesthetic & Medical Doctor"
            fill
            sizes="96px"
            className="object-cover object-top"
          />
        </div>
        <div className="flex-1">
          <p className="font-serif text-xl text-ink-900 sm:text-2xl">
            Dr. Alaa Zidan
          </p>
          <p className="mt-1 text-sm text-ink-700">
            Aesthetic &amp; Medical Doctor · 5+ years in aesthetic dermatology
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink-600">
            Dr. Alaa specialises in injectables, regenerative therapies for
            hair and skin, microneedling, chemical peels, and pigmentation
            care. She practises full-time in the Maldives at Life Care Medical
            Center, Hulhumalé.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-[10px] uppercase tracking-[0.2em] text-gold-500 sm:justify-start">
            {reviewedOn && (
              <span className="rounded-full border border-gold-300/50 bg-sand-50 px-3 py-1.5">
                Medically reviewed · {reviewedOn}
              </span>
            )}
            <Link href="/about" className="hover:text-gold-600">
              Full bio →
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
}
