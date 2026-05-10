import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { posts } from "@/lib/posts";

const INSTAGRAM_URL = "https://www.instagram.com/dr.alaazidan/";
const FACEBOOK_URL = "https://www.facebook.com/share/1aB3gGmTu5/?mibextid=wwXIfr";
const WHATSAPP_URL = `https://wa.me/9607937512?text=${encodeURIComponent("Hello Dr. Alaa, I'd like to book an appointment.")}`;

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notes on aesthetic dermatology — Botox, fillers, exosomes, microneedling, and skincare for tropical light. From Dr. Alaa Zidan, Hulhumalé.",
};

export default function BlogPage() {
  const [featured, ...rest] = posts;
  return (
    <>
      <section className="container-page pt-14 pb-10 md:pt-20 md:pb-12">
        <span className="eyebrow">Blog</span>
        <h1 className="mt-4 font-serif text-4xl leading-tight text-ink-900 sm:text-5xl md:text-6xl lg:text-7xl">
          Notes on the treatments we do,{" "}
          <span className="italic text-rose-400">and the skin we treat.</span>
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-700 md:mt-6 md:text-lg">
          Honest writing on aesthetic dermatology — Botox, fillers, exosomes,
          microneedling, and the daily skincare habits that matter most under
          tropical light.
        </p>
      </section>

      <section className="container-page pb-12 md:pb-16">
        <Link
          href={`/blog/${featured.slug}`}
          className="group grid gap-6 overflow-hidden rounded-[1.75rem] border border-sand-200 bg-sand-50 p-5 sm:gap-8 sm:rounded-[2rem] sm:p-8 md:grid-cols-12 md:gap-10 md:p-12"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl md:col-span-6">
            <Image
              src={featured.fallbackImage ?? featured.image}
              alt={featured.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition group-hover:scale-105"
            />
          </div>
          <div className="md:col-span-6 md:flex md:flex-col md:justify-center">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs uppercase tracking-widest text-gold-500">
              <span>{featured.category}</span>
              <span className="h-1 w-1 rounded-full bg-gold-300" />
              <span>{featured.date}</span>
              <span className="h-1 w-1 rounded-full bg-gold-300" />
              <span>{featured.readingTime}</span>
            </div>
            <h2 className="mt-3 font-serif text-2xl text-ink-900 sm:text-3xl md:mt-4 md:text-5xl">
              {featured.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-700 md:mt-5">
              {featured.excerpt}
            </p>
            <span className="mt-6 inline-block text-sm font-medium uppercase tracking-widest text-gold-500 md:mt-8">
              Read article →
            </span>
          </div>
        </Link>
      </section>

      <section className="container-page pb-12 md:pb-16">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-10">
          {rest.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="group block">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-sand-100">
                <Image
                  src={p.fallbackImage ?? p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition group-hover:scale-105"
                />
              </div>
              <div className="mt-5 flex items-center gap-3 text-xs uppercase tracking-widest text-gold-500">
                <span>{p.category}</span>
                <span className="h-1 w-1 rounded-full bg-gold-300" />
                <span>{p.readingTime}</span>
              </div>
              <h3 className="mt-3 font-serif text-2xl text-ink-900 transition group-hover:text-gold-600">
                {p.title}
              </h3>
              <p className="mt-3 text-ink-600">{p.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-page pb-24">
        <div className="rounded-[2rem] border border-sand-200 bg-sand-100/60 p-6 sm:p-10 md:p-14">
          <div className="grid items-center gap-8 md:grid-cols-12">
            <div className="text-center md:col-span-8 md:text-left">
              <span className="eyebrow">@dr.alaazidan</span>
              <h2 className="mt-3 font-serif text-2xl text-ink-900 sm:text-3xl md:text-4xl">
                Shorter notes, before-and-afters, daily moments.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-ink-700 md:mx-0">
                The blog is the longer-form view. Instagram is where the
                day-to-day clinical work lives.
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 md:col-span-4 md:flex-row md:justify-end">
              <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary w-full sm:w-auto">
                Book Appointment
              </Link>
              <Link href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn-outline w-full sm:w-auto">
                Follow on Instagram
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
