export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readingTime: string;
  date: string;
  /** Used as the hero image on the post detail page and the card image on listings. */
  image: string;
  /** Optional fallback (Pexels) if the local image isn't available yet. */
  fallbackImage?: string;
  /**
   * How the hero image should be fitted. Use "contain" for square branded
   * infographics or before/after panels so they display in full without
   * cropping. Defaults to "cover" for wide stock photos.
   */
  imageFit?: "cover" | "contain";
  body: {
    heading?: string;
    paragraphs: string[];
    bullets?: string[];
    /** Optional image rendered inside the section (e.g., a clinical infographic or before/after). */
    image?: { src: string; alt: string };
  }[];
};

/**
 * Blog content mirrors Dr. Alaa Zidan's actual Instagram posts and clinical work
 * at Life Care Medical Center, Hulhumalé. To use real imagery, drop matching
 * files into /public/images/treatments/ — see /public/images/IMAGES-NEEDED.md.
 */
export const posts: Post[] = [
  {
    slug: "microneedling-maldives",
    title: "Microneedling — small needles, big results",
    excerpt:
      "A minimally invasive treatment that uses tiny needles to create micro-channels in the skin, stimulating collagen and elastin for healthier, smoother, more radiant skin.",
    category: "Treatments",
    readingTime: "5 min",
    date: "May 2026",
    image: "/images/alaa-4.jpg",
    imageFit: "contain",
    body: [
      {
        paragraphs: [
          "Microneedling is one of the most reliable treatments we offer at the clinic — minimal downtime, suitable for most skin types, and a treatment that actually does what it promises. The principle is simple: very fine needles create micro-channels in the skin, which triggers a controlled healing response. The result is more collagen, more elastin, and a noticeably smoother, firmer surface.",
          "Small needles. Big results. The phrase is the truth of it.",
        ],
      },
      {
        heading: "Benefits",
        paragraphs: [
          "Why this treatment is so consistently popular — and why we recommend it for so many of the concerns we see:",
        ],
        bullets: [
          "Improves skin texture and tone",
          "Reduces acne scars and enlarged pores",
          "Reduces fine lines and signs of ageing",
          "Enhances skin elasticity",
          "Boosts natural collagen and elastin production",
        ],
      },
      {
        heading: "How a session works",
        paragraphs: [
          "The treatment is straightforward. The skin is cleansed thoroughly. Numbing cream is applied so you're comfortable throughout. The microneedling device — a precision dermapen with sterile, single-use needles — creates the micro-channels across the treatment area. Then targeted serums and growth factors are applied — they absorb deeper than they ever could on intact skin, multiplying the effect.",
        ],
      },
      {
        heading: "Who it's suitable for",
        paragraphs: [
          "Microneedling works for most skin types and addresses several concerns at once:",
        ],
        bullets: [
          "Acne scars and stretch marks",
          "Uneven skin texture",
          "Enlarged pores",
          "Fine lines and early signs of ageing",
        ],
      },
      {
        heading: "Important notes",
        paragraphs: [
          "A few things worth knowing before booking. Sunscreen is non-negotiable — every day, especially after treatment, especially in the Maldives sun. Multiple sessions are usually needed for the best result; we'll plan a course at your consultation. And it's safe for most skin types, but a thorough assessment is always done first.",
          "Your skin, upgraded — naturally.",
        ],
      },
    ],
  },
  {
    slug: "exosomes-hair-loss-maldives",
    title: "Exosomes for hair loss — a new generation of regenerative care",
    excerpt:
      "An advanced regenerative treatment for hair thinning, density loss, and early-stage pattern hair loss. A non-surgical option backed by encouraging clinical results.",
    category: "Treatments",
    readingTime: "6 min",
    date: "April 2026",
    image: "/images/alaa-2.jpg",
    imageFit: "contain",
    body: [
      {
        paragraphs: [
          "Exosomes are one of the most interesting developments in regenerative aesthetic medicine in recent years — and one of the most genuinely effective treatments we offer for early-stage hair loss. Patients ask about them constantly, often without quite knowing what they are. So: a clear, honest explanation.",
        ],
      },
      {
        heading: "What exosomes are",
        paragraphs: [
          "Exosomes are tiny extracellular vesicles — natural messengers cells use to communicate. They carry growth factors, proteins, and signalling molecules that tell surrounding cells what to do. In aesthetic medicine, we use lab-derived exosomes to deliver those signals directly to the scalp, where they activate dormant hair follicles and stimulate new growth.",
          "It's not a transplant. There's no surgery. And the results, in the right candidate, are genuinely impressive.",
        ],
      },
      {
        heading: "How a treatment works",
        paragraphs: [
          "After a careful scalp assessment, exosome solution is delivered into the affected areas — usually via fine micro-injections placed across the scalp, sometimes paired with a microneedling device to ensure even depth and absorption. Sterile single-use needles. Pharmaceutical-grade product. The whole treatment takes around 45–60 minutes. There's almost no downtime; most patients walk out and continue their day.",
        ],
      },
      {
        heading: "Who it's for",
        paragraphs: [
          "Exosomes work best for patients with early-to-moderate hair thinning rather than long-established baldness. The follicles need to still be alive — exosomes wake them up; they don't replace what's already gone. We see consistent results in:",
        ],
        bullets: [
          "Early-stage male and female pattern hair loss",
          "Postpartum or stress-related shedding",
          "Diffuse thinning where overall density has dropped",
          "Patients wanting to optimise results from a hair transplant",
        ],
      },
      {
        heading: "Realistic expectations",
        paragraphs: [
          "A typical course is 3–4 sessions spaced 4–6 weeks apart, with maintenance every few months after that. Most patients notice reduced shedding within weeks and visible density improvement after 3 months. The honest answer: results are excellent in good candidates, modest in poor ones — the consultation tells us which you are before you commit.",
        ],
      },
    ],
  },
  {
    slug: "botox-frown-lines-maldives",
    title: "Botox for frown lines — smooth, not frozen",
    excerpt:
      "The vertical lines between the eyebrows soften some faces and harden others. Here's how Botox treats them — and why \"natural\" matters more than \"more.\"",
    category: "Treatments",
    readingTime: "5 min",
    date: "March 2026",
    image: "/images/alaa-1.jpg",
    imageFit: "contain",
    body: [
      {
        paragraphs: [
          "Frown lines — the vertical creases between the eyebrows that deepen when you concentrate, are tired, or simply think — are one of the most common reasons people first try Botox. They're also one of the easiest areas to over-treat, which is why the right approach matters.",
        ],
      },
      {
        heading: "What's happening",
        paragraphs: [
          "Frown lines (technically the glabellar lines) are caused by repeated contraction of three small muscles between the brows. Over years, those repeated movements etch lines into the skin — first only when you frown, then permanently. Botox works by temporarily relaxing those muscles so the skin above them gets a chance to smooth out.",
        ],
      },
      {
        heading: "How the treatment works",
        paragraphs: [
          "A few precise injections, very small needles, no anaesthesia needed. The whole appointment is around 20 minutes. You can return to normal activities the same day. Results begin showing in 3–5 days and reach full effect at 10–14 days. Effect lasts roughly 3–4 months.",
        ],
      },
      {
        heading: "Why natural matters",
        paragraphs: [
          "There's a difference between Botox that softens an expression and Botox that erases it. The first reads as well-rested. The second reads as treated. Our preference is always the first.",
          "That means smaller, carefully placed doses, and a willingness to under-treat slightly rather than over-treat. You should still be able to express yourself. The frown is what we're softening — not your personality.",
        ],
      },
      {
        heading: "Who it's for",
        paragraphs: [
          "Anyone whose frown lines have started bothering them — whether because they make them look angry or tired, or because they're starting to deepen with age. Botox also works preventatively: treating dynamic lines (the ones that show only with movement) is one of the most effective ways to prevent them from becoming static.",
        ],
      },
    ],
  },
  {
    slug: "natural-lip-filler-maldives",
    title: "Natural lip filler — hydrated, not overdone",
    excerpt:
      "Soft, healthy, hydrated lips that look like yours — only better-rested. The case for restraint with lip filler.",
    category: "Treatments",
    readingTime: "5 min",
    date: "February 2026",
    image: "/images/alaa-3.jpg",
    imageFit: "contain",
    body: [
      {
        paragraphs: [
          "Lip filler is one of the most-requested treatments in any aesthetic clinic — and one of the most commonly done badly. The internet has trained patients to ask for big results, and trained some practitioners to deliver them whether they suit the face or not. We do something different.",
        ],
      },
      {
        heading: "The natural approach",
        paragraphs: [
          "The goal at this clinic is never to add the most volume possible. The goal is to restore hydration, soften vertical lip lines, gently rebalance the upper-to-lower lip ratio if needed, and create a result that simply looks like a slightly better-rested version of you.",
          "If someone meets you for the first time and notices your lips before they notice you, the work was overdone. We aim for the opposite.",
        ],
      },
      {
        heading: "What's used",
        paragraphs: [
          "Hyaluronic acid filler — a substance the body naturally produces and naturally breaks down. It's reversible, well-tolerated, and the right products in skilled hands give a soft, kissable result rather than a hard, structured one.",
        ],
      },
      {
        heading: "What to expect",
        paragraphs: [
          "Numbing cream first, so you're comfortable. Treatment itself takes 30–45 minutes. There's mild swelling for 24–48 hours, occasionally minor bruising. Final result settles within 1–2 weeks. Lasts 9–12 months on average.",
        ],
      },
      {
        heading: "Who it suits",
        paragraphs: [
          "Anyone who wants softer, more hydrated lips. Patients in their 20s and 30s often want subtle volume. Patients in their 40s+ usually benefit from deflation correction and improvement in the surrounding lip area. Patients who want a dramatic change should know upfront — that's not the kind of work we do.",
        ],
      },
    ],
  },
  {
    slug: "forehead-botox-maldives",
    title: "Forehead Botox — a lighter approach",
    excerpt:
      "Horizontal forehead lines deepen quickly with age and sun. Here's how a careful, lower-dose approach softens them without freezing the brow.",
    category: "Treatments",
    readingTime: "4 min",
    date: "January 2026",
    image: "/images/alaa-5.jpg",
    imageFit: "contain",
    body: [
      {
        paragraphs: [
          "The forehead is the area where the difference between good and bad Botox is most visible. Done well, it gives a fresh, well-rested appearance. Done with too heavy a hand, it produces a smooth, motionless brow that immediately reads as treated. The fix is approach, not product.",
        ],
      },
      {
        heading: "How forehead lines form",
        paragraphs: [
          "Horizontal forehead lines come from the repeated contraction of the frontalis — the broad muscle that lifts your eyebrows. Years of expression, plus the cumulative effect of UV exposure, etch them progressively deeper. They become permanent only after they've been dynamic for years.",
        ],
      },
      {
        heading: "The lighter-dose approach",
        paragraphs: [
          "A common mistake is using a high dose to fully relax the frontalis. The result is a smooth forehead — but also dropped eyebrows, a tired appearance, and a face that looks frozen. We prefer micro-dosing across the forehead: small, precisely placed injections that soften the lines without eliminating movement.",
          "You should still be able to lift your eyebrows in surprise or concentration. The lines just become less obvious.",
        ],
      },
      {
        heading: "Combined with the frown area",
        paragraphs: [
          "Forehead Botox is almost always done alongside Botox for frown lines. They work together — relaxing only the forehead without addressing the frown muscles tends to look unbalanced. We'll discuss the combination at your consultation.",
        ],
      },
    ],
  },
  {
    slug: "skincare-maldives-sun",
    title: "Skincare in the Maldives sun — a routine that actually works",
    excerpt:
      "Living in the Maldives — or visiting — changes the rules for sunscreen, retinoids, and after-ocean care. The essentials.",
    category: "Skincare",
    readingTime: "6 min",
    date: "December 2025",
    image: "/images/treatments/microneedling.jpg",
    fallbackImage:
      "https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg?auto=compress&cs=tinysrgb&fm=webp&w=1600",
    body: [
      {
        paragraphs: [
          "Living near the equator does specific things to skin. UV exposure is higher year-round, humidity is constant, and salt water and chlorine come with daily life. The fundamentals of a good routine don't change. The application does.",
        ],
      },
      {
        heading: "Sunscreen, properly",
        paragraphs: [
          "SPF 50+ broad-spectrum, applied as the last skincare step every morning, reapplied every two hours when outdoors. In tropical light, this is the single most important anti-pigmentation, anti-ageing intervention you can make. Choose a formulation you'll actually wear — the best sunscreen is the one that doesn't end up unused.",
        ],
      },
      {
        heading: "Retinoids — yes, but adjust",
        paragraphs: [
          "Retinoids work in tropical climates. They also dry the skin faster in this heat than in cooler regions. Use them at night only, start at a low strength, and pair them with a slightly heavier barrier cream than you'd use elsewhere. Stop a few days before any beach day with significant sun exposure.",
        ],
      },
      {
        heading: "After the ocean",
        paragraphs: [
          "Salt water and chlorine strip the barrier. Rinse with cool fresh water as soon as possible after swimming, then apply a gentle moisturiser. This single habit does more for tropical skin than most expensive serums.",
        ],
      },
      {
        heading: "When to come in",
        paragraphs: [
          "If pigmentation is appearing, not fading; if the skin feels permanently dehydrated despite a good routine; or if you simply want a structured plan tailored to Maldives life — that's a consultation worth booking.",
        ],
      },
    ],
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllPostSlugs(): string[] {
  return posts.map((p) => p.slug);
}

export function getLatestPosts(count = 3): Post[] {
  return posts.slice(0, count);
}
