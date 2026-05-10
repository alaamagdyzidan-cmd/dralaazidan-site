import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPostBySlug, getAllPostSlugs, posts } from "@/lib/posts";

const INSTAGRAM_URL = "https://www.instagram.com/dr.alaazidan/";
const WHATSAPP_URL = `https://wa.me/9607937512?text=${encodeURIComponent("Hello Dr. Alaa, I read your post and have a question.")}`;

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Article not found" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.fallbackImage ?? post.image],
      type: "article",
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const heroSrc = post.fallbackImage ?? post.image;
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <article>
        <header className="container-page pt-20 pb-12">
          <div className="mx-auto max-w-3xl">
            <Link href="/blog" className="text-xs uppercase tracking-widest text-gold-500 hover:text-gold-600">
              ← Back to blog
            </Link>
            <div className="mt-8 flex items-center gap-3 text-xs uppercase tracking-widest text-gold-500">
              <span>{post.category}</span>
              <span className="h-1 w-1 rounded-full bg-gold-300" />
              <span>{post.date}</span>
              <span className="h-1 w-1 rounded-full bg-gold-300" />
              <span>{post.readingTime}</span>
            </div>
            <h1 className="mt-5 font-serif text-4xl leading-[1.1] text-ink-900 md:text-6xl">
              {post.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-700">{post.excerpt}</p>
          </div>
        </header>

        <div className="container-page pb-12">
          <div
            className={`relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-[2rem] ${
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

        <div className="container-page pb-24">
          <div className="mx-auto max-w-3xl space-y-10">
            {post.body.map((section, i) => (
              <section key={i} className="space-y-5">
                {section.heading && (
                  <h2 className="font-serif text-3xl text-ink-900">{section.heading}</h2>
                )}
                {section.paragraphs.map((p, j) => (
                  <p key={j} className="text-lg leading-relaxed text-ink-700">
                    {p}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="space-y-2 pl-1">
                    {section.bullets.map((b, k) => (
                      <li key={k} className="flex items-start gap-3 text-lg leading-relaxed text-ink-700">
                        <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-gold-400" />
                        <span>{b}</span>
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

          <div className="mx-auto mt-16 max-w-3xl rounded-2xl bg-rose-100 p-8 text-center">
            <p className="font-serif text-2xl text-ink-900">Have a question about this?</p>
            <p className="mt-3 text-ink-700">
              Every patient's skin and goals are different. Send us a message
              and we'll answer before you commit to anything.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Book Appointment
              </Link>
              <Link href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn-outline">
                Follow on Instagram
              </Link>
            </div>
          </div>
        </div>
      </article>

      <section className="border-t border-sand-200 bg-sand-100/50">
        <div className="container-page py-20">
          <span className="eyebrow">Keep reading</span>
          <h3 className="mt-3 font-serif text-3xl text-ink-900 md:text-4xl">More from the blog</h3>

          <div className="mt-12 grid gap-10 md:grid-cols-3">
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
                <h4 className="mt-3 font-serif text-2xl text-ink-900 transition group-hover:text-gold-600">
                  {p.title}
                </h4>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
