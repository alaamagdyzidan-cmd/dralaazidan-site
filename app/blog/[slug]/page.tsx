import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getPostBySlug,
  getAllPostSlugs,
  getRelatedPosts,
  getPillar,
} from "@/lib/posts";
import {
  SITE_URL,
  SITE_NAME,
  DR_ALAA,
  blogBreadcrumb,
  faqSchema,
  medicalWebPageSchema,
} from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import AuthorCard from "@/components/AuthorCard";
import Faq from "@/components/Faq";
import Breadcrumbs from "@/components/Breadcrumbs";
import KeyTakeaways from "@/components/KeyTakeaways";

const INSTAGRAM_URL = "https://www.instagram.com/dr.alaazidan/";
const WHATSAPP_URL = `https://wa.me/9607937512?text=${encodeURIComponent(
  "Hello Dr. Alaa, I read your post and have a question."
)}`;

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Article not found" };

  const canonical = `${SITE_URL}/blog/${post.slug}`;
  const ogImage =
    post.image.startsWith("http") ? post.image : `${SITE_URL}${post.image}`;

  return {
    title: post.metaTitle ?? post.title,
    description: post.metaDescription ?? post.excerpt,
    alternates: { canonical },
    authors: [{ name: "Dr. Alaa Zidan", url: `${SITE_URL}/about` }],
    openGraph: {
      type: "article",
      title: post.metaTitle ?? post.title,
      description: post.metaDescription ?? post.excerpt,
      url: canonical,
      siteName: SITE_NAME,
      locale: "en_US",
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      authors: ["Dr. Alaa Zidan"],
      tags: [post.category, "Maldives", "Aesthetic Dermatology"],
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle ?? post.title,
      description: post.metaDescription ?? post.excerpt,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

/**
 * Render paragraph content, converting **markdown bold** to <strong>.
 */
function renderText(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    const m = /^\*\*(.+)\*\*$/.exec(part);
    if (m) return <strong key={i}>{m[1]}</strong>;
    return <span key={i}>{part}</span>;
  });
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const heroSrc = post.fallbackImage ?? post.image;
  const related = getRelatedPosts(post.slug, 3);
  const pillar = !post.isPillar ? getPillar() : null;
  const ogImageAbsolute =
    post.image.startsWith("http") ? post.image : `${SITE_URL}${post.image}`;

  return (
    <>
      {/* ----- Structured data: MedicalWebPage + Author + Breadcrumb + FAQ ----- */}
      <JsonLd
        data={medicalWebPageSchema({
          slug: post.slug,
          title: post.title,
          description: post.metaDescription ?? post.excerpt,
          image: ogImageAbsolute,
          datePublished: post.datePublished,
          dateModified: post.dateModified,
          about: post.about,
        })}
      />
      <JsonLd data={DR_ALAA} />
      <JsonLd data={blogBreadcrumb(post.slug, post.title)} />
      {post.faqs.length > 0 && <JsonLd data={faqSchema(post.faqs)} />}

      <article>
        <header className="container-page pt-14 pb-8 md:pt-20 md:pb-12">
          <div className="mx-auto max-w-3xl">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" },
                { label: post.category },
              ]}
            />
            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] uppercase tracking-widest text-gold-500 md:mt-8 md:text-xs">
              <span>{post.category}</span>
              <span className="h-1 w-1 rounded-full bg-gold-300" />
              <span>Updated {post.date}</span>
              <span className="h-1 w-1 rounded-full bg-gold-300" />
              <span>{post.readingTime}</span>
            </div>
            <h1 className="mt-4 font-serif text-3xl leading-[1.1] text-ink-900 sm:text-4xl md:mt-5 md:text-5xl lg:text-6xl">
              {post.title}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-ink-700 md:mt-6 md:text-lg">
              {post.excerpt}
            </p>
            <p className="mt-4 text-xs text-ink-600">
              By{" "}
              <Link href="/about" className="font-medium text-ink-900 hover:text-gold-500">
                Dr. Alaa Zidan
              </Link>{" "}
              · Medically reviewed {post.date}
            </p>
          </div>
        </header>

        <div className="container-page pb-10 md:pb-12">
          <div
            className={`relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-2xl sm:rounded-[2rem] ${
              post.imageFit === "contain"
                ? "bg-gradient-to-br from-sand-50 via-rose-50 to-sand-50"
                : "bg-sand-100"
            }`}
          >
            <Image
              src={heroSrc}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1200px"
              className={post.imageFit === "contain" ? "object-contain" : "object-cover"}
            />
          </div>
        </div>

        <div className="container-page pb-12 md:pb-20">
          <div className="mx-auto max-w-3xl">
            {/* Key takeaways — appears above the body for SGE / featured snippets */}
            <KeyTakeaways points={post.keyTakeaways} />

            {/* Body */}
            <div className="space-y-8 md:space-y-10">
              {post.body.map((section, i) => (
                <section key={i} className="space-y-4 md:space-y-5">
                  {section.heading && (
                    <h2 className="font-serif text-2xl text-ink-900 md:text-3xl">
                      {section.heading}
                    </h2>
                  )}
                  {section.paragraphs?.map((p, j) => (
                    <p
                      key={j}
                      className="text-base leading-relaxed text-ink-700 md:text-lg"
                    >
                      {renderText(p)}
                    </p>
                  ))}
                  {section.bullets && (
                    <ul className="space-y-2 pl-1">
                      {section.bullets.map((b, k) => (
                        <li
                          key={k}
                          className="flex items-start gap-3 text-base leading-relaxed text-ink-700 md:text-lg"
                        >
                          <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-gold-400" />
                          <span>{renderText(b)}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.image && (
                    <figure className="mt-6 overflow-hidden rounded-2xl border border-sand-200 bg-sand-50">
                      <div className="relative aspect-square w-full">
                        <Image
                          src={section.image.src}
                          alt={section.image.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, 768px"
                          className="object-contain"
                        />
                      </div>
                    </figure>
                  )}
                </section>
              ))}
            </div>

            {/* FAQ — with FAQPage schema injected above */}
            <Faq faqs={post.faqs} />

            {/* References / sources */}
            {post.references && post.references.length > 0 && (
              <section className="mt-12 rounded-2xl border border-sand-200 bg-sand-50 p-6 sm:p-8">
                <h3 className="text-[10px] font-medium uppercase tracking-[0.3em] text-gold-500">
                  Sources &amp; further reading
                </h3>
                <ul className="mt-4 space-y-2.5 text-sm text-ink-700">
                  {post.references.map((r, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span aria-hidden className="text-gold-400">
                        ↗
                      </span>
                      <a
                        href={r.url}
                        target="_blank"
                        rel="noopener nofollow"
                        className="underline-offset-2 hover:underline"
                      >
                        {r.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs italic text-ink-600">
                  This article is for educational purposes and is not a substitute
                  for personal medical advice. To discuss your skin and treatment
                  options, please book a consultation.
                </p>
              </section>
            )}

            {/* Pillar back-link (for cluster posts) */}
            {pillar && (
              <section className="mx-auto mt-12 max-w-3xl rounded-2xl border border-gold-300/50 bg-gradient-to-br from-sand-50 via-rose-50 to-sand-50 p-6 text-center sm:p-8">
                <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-gold-500">
                  Part of our pillar guide
                </p>
                <h3 className="mt-3 font-serif text-xl text-ink-900 sm:text-2xl">
                  <Link
                    href={`/blog/${pillar.slug}`}
                    className="hover:text-gold-600"
                  >
                    {pillar.title}
                  </Link>
                </h3>
                <p className="mt-3 text-sm text-ink-700">{pillar.excerpt}</p>
                <Link
                  href={`/blog/${pillar.slug}`}
                  className="mt-4 inline-block text-sm font-medium uppercase tracking-[0.2em] text-gold-500 hover:text-gold-600"
                >
                  Read the complete guide →
                </Link>
              </section>
            )}

            {/* Author card (always last in body — strongest E-E-A-T signal) */}
            <AuthorCard reviewedOn={post.date} />

            {/* WhatsApp CTA */}
            <div className="mx-auto mt-12 max-w-3xl rounded-2xl bg-rose-100 p-6 text-center sm:p-8">
              <p className="font-serif text-xl text-ink-900 sm:text-2xl">
                Have a question about this?
              </p>
              <p className="mt-3 text-sm text-ink-700 md:text-base">
                Every patient's skin and goals are different. Send us a message
                and we'll answer before you commit to anything.
              </p>
              <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
                <Link
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Message on WhatsApp
                </Link>
                <Link
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  Follow on Instagram
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="border-t border-sand-200 bg-sand-100/50">
          <div className="container-page py-14 md:py-20">
            <span className="eyebrow">Keep reading</span>
            <h3 className="mt-3 font-serif text-2xl text-ink-900 sm:text-3xl md:text-4xl">
              Related articles
            </h3>

            <div className="mt-8 grid gap-8 sm:grid-cols-2 md:mt-12 md:grid-cols-3 md:gap-10">
              {related.map((p) => (
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
                  <div className="mt-4 flex items-center gap-3 text-xs uppercase tracking-widest text-gold-500">
                    <span>{p.category}</span>
                    <span className="h-1 w-1 rounded-full bg-gold-300" />
                    <span>{p.readingTime}</span>
                  </div>
                  <h4 className="mt-3 font-serif text-xl text-ink-900 transition group-hover:text-gold-600 md:text-2xl">
                    {p.title}
                  </h4>
                  <p className="mt-2 text-sm text-ink-600">{p.excerpt.slice(0, 120)}…</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
