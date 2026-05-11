export type Reference = {
  label: string;
  url: string;
};

export type Post = {
  slug: string;
  title: string;
  /** SEO-optimised <60 char title (falls back to title). */
  metaTitle?: string;
  excerpt: string;
  /** SEO-optimised description ≤155 chars. */
  metaDescription?: string;
  category: string;
  readingTime: string;
  /** ISO-ish date for display ("May 2026"). */
  date: string;
  /** Raw ISO datePublished — used in JSON-LD. */
  datePublished: string;
  /** Raw ISO dateModified / lastReviewed — used in JSON-LD. */
  dateModified: string;
  image: string;
  fallbackImage?: string;
  imageFit?: "cover" | "contain";
  /** Short medical topic for MedicalProcedure schema (e.g. "Botox injection"). */
  about: string;
  /** True for the pillar guide; clusters point to it. */
  isPillar?: boolean;
  /** Slug of the pillar this cluster belongs to. */
  pillarSlug?: string;
  /** Slugs of related cluster articles for cross-linking. */
  relatedSlugs?: string[];
  /** 3-5 punchy lines for the TL;DR / "Key takeaways" box. */
  keyTakeaways: string[];
  /** External authority references (PubMed, AAD, WHO, etc.). */
  references?: Reference[];
  /** FAQ block — also serialised as FAQPage JSON-LD. */
  faqs: { q: string; a: string }[];
  body: {
    heading?: string;
    paragraphs?: string[];
    bullets?: string[];
    image?: { src: string; alt: string };
  }[];
};

/* ------------------------------------------------------------------ */
/*                         BLOG CONTENT                               */
/* ------------------------------------------------------------------ */

export const posts: Post[] = [
  /* ============================================================== */
  /*                  PILLAR — Aesthetic Dermatology Maldives        */
  /* ============================================================== */
  {
    slug: "aesthetic-dermatology-maldives-guide",
    title:
      "Aesthetic Dermatology in the Maldives — The Complete Guide",
    metaTitle:
      "Aesthetic Dermatology in the Maldives | Dr. Alaa Zidan",
    excerpt:
      "A clinical guide to aesthetic dermatology in the Maldives: what treatments work for Maldivian skin and climate, what to expect, how to choose, and how to plan care that respects the sun and salt of island life.",
    metaDescription:
      "Complete guide to aesthetic dermatology in the Maldives by Dr. Alaa Zidan. Botox, fillers, exosomes, microneedling, peels, pigmentation care — tailored for tropical skin.",
    category: "Pillar guide",
    readingTime: "12 min",
    date: "May 2026",
    datePublished: "2026-05-11",
    dateModified: "2026-05-11",
    image: "/images/alaa-1.jpg",
    imageFit: "contain",
    about: "Aesthetic dermatology",
    isPillar: true,
    relatedSlugs: [
      "botox-frown-lines-maldives",
      "natural-lip-filler-maldives",
      "exosomes-hair-loss-maldives",
      "microneedling-maldives",
      "forehead-botox-maldives",
      "skincare-maldives-sun",
    ],
    keyTakeaways: [
      "Maldivian climate — strong equatorial UV, humidity, salt water — changes the rules for which aesthetic treatments suit which skin and when.",
      "Restraint matters here. Subtle, considered work tends to age better than dramatic interventions, especially on sun-exposed skin.",
      "Skin assessment comes first — every treatment plan begins with mapping pigmentation, barrier health, and sun-damage history.",
      "Common requests: Botox, fillers, microneedling, exosomes for hair, chemical peels, and pigmentation/melasma management.",
      "Same-day WhatsApp replies — booking and personalised plans are arranged at +960 793 7512.",
    ],
    references: [
      {
        label: "American Academy of Dermatology — Cosmetic procedures overview",
        url: "https://www.aad.org/public/cosmetic",
      },
      {
        label: "WHO — UV index and skin protection",
        url: "https://www.who.int/news-room/questions-and-answers/item/ultraviolet-(uv)-radiation",
      },
      {
        label:
          "British Association of Dermatologists — Patient information leaflets",
        url: "https://www.bad.org.uk/pils/",
      },
    ],
    faqs: [
      {
        q: "Is aesthetic dermatology safe in the Maldives climate?",
        a: "Yes — when treatments are chosen carefully for tropical conditions. Some procedures (deep peels, ablative laser) need timing around sun exposure. A proper consultation maps your sun exposure pattern before any plan is built.",
      },
      {
        q: "Do I need to avoid the sun after a treatment?",
        a: "Most aesthetic procedures require strict daily SPF 50+ and shade for at least 1–4 weeks. We'll give you a sun-care plan tailored to the treatment and your travel/work schedule.",
      },
      {
        q: "Can tourists get treatments while visiting the Maldives?",
        a: "Yes. Many of our patients are visitors. For travel-friendly options we prioritise treatments with minimal downtime: light Botox, lip filler, skin boosters, and hydrating facials. Heavier resurfacing is usually planned for residents.",
      },
      {
        q: "How are treatments priced?",
        a: "Pricing is always tailored after a short consultation — every plan is personal. We share quotes on WhatsApp once we understand what you'd like to address.",
      },
      {
        q: "Where is the clinic located?",
        a: "Life Care Medical Center, Lot no. 11382, Rabarugas Magu, Hulhumalé, Maldives. Open every day from 6:00 PM to 11:00 PM by appointment.",
      },
    ],
    body: [
      {
        paragraphs: [
          "Aesthetic dermatology in the Maldives is not the same as aesthetic dermatology in Europe, the Gulf, or East Asia. The reason is simple: the climate writes its own rules. Maldivian skin lives under near-equatorial sun (UV index regularly 11+), high humidity, year-round heat, and frequent salt-water exposure. Those four variables decide what treatments are safe, when to do them, and how the result will look six months later.",
          "This guide is for patients — residents and visitors — who want a clear, honest picture of what's actually available, what works, and how to think about a plan. It covers the treatments performed regularly at Dr. Alaa Zidan's clinic, when each one suits, the trade-offs, and how Maldivian conditions change the calculation.",
        ],
      },
      {
        heading: "Why the Maldivian climate matters for skin",
        paragraphs: [
          "Three things in particular change the aesthetic dermatology playbook here:",
        ],
        bullets: [
          "**UV is intense and year-round.** The Maldives sits between 0° and 7° north of the equator. UV index hovers around 11 (extreme) for most of the year. This accelerates pigmentation, photoaging, and the formation of fine lines well before chronological age.",
          "**Humidity changes barrier behaviour.** Skin tolerates retinoids and acids differently when ambient humidity is 80%. Some products that work in dry climates over-exfoliate here; others under-perform.",
          "**Salt water and chlorine strip the barrier.** Daily swimming — for residents and tourists — disrupts the skin's lipid layer. Recovery after any treatment is slower if salt-water exposure isn't paused.",
        ],
      },
      {
        heading: "The treatment landscape — what works here",
        paragraphs: [
          "Below is the working menu at the clinic. Each links to a dedicated article with more depth.",
        ],
        bullets: [
          "**Injectables** — Botox for expression lines, dermal fillers for lips, cheeks, chin, and jawline, plus skin boosters for hydration and tone.",
          "**Regenerative** — exosomes for early hair loss and skin rejuvenation, PRP for hair and skin.",
          "**Skin rejuvenation** — chemical peels (light to medium-depth), medical facials, Hydrafacial, and microneedling with serums or PRP.",
          "**Pigmentation, melasma & acne** — medical management combining topicals, peels, and (where appropriate) procedural work.",
          "**Targeted aesthetic procedures** — chin filler, jawline definition, undereye correction, glow sessions, scar treatments, post-zoster skin recovery.",
        ],
      },
      {
        heading: "How a typical plan is built",
        paragraphs: [
          "Every plan starts with a consultation. We map four things: pigmentation pattern, sun-exposure history (resident vs. visitor, beach time, occupation), skin sensitivity, and what you actually want to address. From there, we build a phased plan — usually starting with foundational skin work (barrier, pigmentation, hydration) and only then adding any injectables or procedural layers.",
          "The single most important principle: restraint. Subtle, considered work ages well on Maldivian skin. Overdone work is exposed by the harsh tropical light in a way that gentler climates forgive.",
        ],
      },
      {
        heading: "Choosing the right clinic in the Maldives",
        paragraphs: [
          "A few markers worth checking before any aesthetic procedure here:",
        ],
        bullets: [
          "A medical doctor — not a non-medical practitioner — performing the treatment.",
          "Pre-treatment consultation included and honest about whether a treatment suits your skin type and timing.",
          "Single-use sterile needles and pharmaceutical-grade product (Botox, hyaluronic acid filler, etc.) — never aftermarket or unbranded.",
          "Clear aftercare instructions tailored to Maldivian sun and water exposure.",
          "Same-day reachability for any concerns post-treatment.",
        ],
      },
      {
        heading: "Booking and next steps",
        paragraphs: [
          "Dr. Alaa Zidan practises at Life Care Medical Center, Hulhumalé. Consultations and bookings are arranged on WhatsApp — same-day reply at +960 793 7512.",
          "If you're new and want to start, message a brief description of what you'd like to address and your dates in the Maldives. We'll come back with a recommended path and a time.",
        ],
      },
    ],
  },

  /* ============================================================== */
  /*                  CLUSTER — Microneedling                        */
  /* ============================================================== */
  {
    slug: "microneedling-maldives",
    title: "Microneedling in the Maldives — Small Needles, Big Results",
    metaTitle: "Microneedling in the Maldives | Collagen Induction | Dr. Alaa Zidan",
    excerpt:
      "Microneedling stimulates collagen and elastin in skin that has spent years under tropical sun. Here's how the treatment works, how Maldivian conditions change recovery, and what realistic results look like.",
    metaDescription:
      "Microneedling in the Maldives by Dr. Alaa Zidan. Collagen induction therapy for pores, acne scars, fine lines, tropical sun damage. Hulhumalé clinic.",
    category: "Skin rejuvenation",
    readingTime: "8 min",
    date: "May 2026",
    datePublished: "2026-05-11",
    dateModified: "2026-05-11",
    image: "/images/alaa-4.jpg",
    imageFit: "contain",
    about: "Microneedling collagen induction therapy",
    pillarSlug: "aesthetic-dermatology-maldives-guide",
    relatedSlugs: [
      "skincare-maldives-sun",
      "natural-lip-filler-maldives",
      "exosomes-hair-loss-maldives",
    ],
    keyTakeaways: [
      "Microneedling triggers your own collagen and elastin response — no foreign substance is added to the skin.",
      "Particularly effective in the Maldives for sun-driven texture changes, fine lines, and post-inflammatory marks.",
      "Strict SPF 50+ for at least 2 weeks post-treatment is non-negotiable under Maldivian sun.",
      "A typical course is 3–4 sessions, 4–6 weeks apart. Maintenance once or twice a year.",
      "Same-day downtime: 24–48 hours of redness, then back to normal life — including beach (with shade and SPF).",
    ],
    references: [
      {
        label: "Singh A, Yadav S. Microneedling: Advances and widening horizons. PMC.",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4976400/",
      },
      {
        label: "AAD — Microneedling overview",
        url: "https://www.aad.org/public/cosmetic/scars-stretch-marks/microneedling",
      },
    ],
    faqs: [
      {
        q: "Does microneedling hurt?",
        a: "A topical numbing cream is applied 20–30 minutes before the procedure, which reduces sensation to a mild prickling. Most patients describe it as 'easily tolerable'.",
      },
      {
        q: "How quickly will I see results?",
        a: "Initial brightness is visible within a week; texture and tone changes build over 4–8 weeks as new collagen forms. A full course typically delivers visible firmness improvement at the 3-month mark.",
      },
      {
        q: "Can I swim after microneedling in the Maldives?",
        a: "Avoid sea, pool, and direct sun for at least 48 hours. After that, swim with mineral SPF reapplied every 90 minutes. We'll give you a timed aftercare plan based on your itinerary.",
      },
      {
        q: "Is microneedling safe for darker skin tones?",
        a: "Yes — microneedling is one of the safer collagen-stimulation options for Fitzpatrick IV–VI skin compared with ablative laser, because it doesn't rely on heat energy that can disrupt pigment.",
      },
      {
        q: "How is microneedling different from a 'derma roller'?",
        a: "Clinic microneedling uses a sterile, single-use motorised dermapen with adjustable needle depth and consistent rhythm — completely different from at-home rollers, which carry infection risk and rarely produce clinical results.",
      },
    ],
    body: [
      {
        paragraphs: [
          "Microneedling has been one of the most consistently popular treatments in the clinic — and for good reason. The principle is straightforward: a precision dermapen with very fine, sterile, single-use needles creates controlled micro-channels in the skin. Those channels trigger a wound-healing cascade. The result is more collagen, more elastin, smoother texture, and a brighter surface — all built from your own biology.",
          "Small needles. Big results. The phrase is the truth of it.",
        ],
      },
      {
        heading: "Why microneedling suits Maldivian skin",
        paragraphs: [
          "Maldivian patients arrive with a specific pattern of skin change: dispersed pigmentation from sun, slightly enlarged pores, fine-line crepiness around the eyes by the late 20s, and occasional post-inflammatory marks from acne or insect bites. Ablative laser would address these but carries pigmentary risk on the medium-to-dark skin tones common here, and downtime is hard to schedule around beach life.",
          "Microneedling threads a useful middle path: enough collagen stimulation to make real change, without the heat-based pigment disruption of laser. For most patients in the Maldives — resident or visitor — it's the most flexible single tool in the menu.",
        ],
      },
      {
        heading: "What microneedling can help with",
        bullets: [
          "Texture and tone unevenness from sun and humidity",
          "Acne scars (atrophic and rolling) and stretch marks",
          "Fine lines and the earliest signs of ageing",
          "Enlarged pores, especially on the central face",
          "Post-inflammatory pigmentation from acne",
          "General lack of glow and skin density",
        ],
        paragraphs: [
          "Why this treatment is so consistently popular — and why we recommend it for so many of the concerns we see — is that one well-designed course can address several of those at once.",
        ],
      },
      {
        heading: "How a session actually works",
        paragraphs: [
          "The skin is cleansed thoroughly and a numbing cream is applied for 20–30 minutes so you're comfortable throughout. The dermapen is then passed over the treatment area in overlapping passes — needle depth varies by region (forehead vs. cheeks vs. chin) and is adjusted in real time.",
          "Once the channels are open, targeted serums and growth factors are massaged in. These absorb far deeper than they ever could on intact skin, multiplying the visible effect. The session itself takes about 45 minutes; add 30 minutes for prep and aftercare.",
        ],
      },
      {
        heading: "Aftercare in the Maldives — the rules",
        paragraphs: [
          "Aftercare matters more in the Maldives than almost anywhere else in the world, because the sun is the single biggest variable.",
        ],
        bullets: [
          "Mineral SPF 50+ every morning, reapplied every 90 minutes outdoors, for at least 2 weeks.",
          "No direct sun for 48 hours. Shade and hat for a week.",
          "No sea, pool, or steam for 48 hours.",
          "Gentle cleanser and a barrier moisturiser only for the first 3 days — no retinoids, no acids, no exfoliating.",
          "Don't pick or scrub the slight roughness that appears on day 2–3 — it sheds on its own.",
        ],
      },
      {
        heading: "Realistic expectations and course planning",
        paragraphs: [
          "One session can give a noticeable lift. A real, durable result usually takes 3–4 sessions spaced 4–6 weeks apart. We plan the timing around your travel, monsoon weeks, and whether you're heading into a wedding or photographed event.",
          "After the initial course, most patients book one maintenance session every 6–9 months. Combine it with consistent SPF use and a smart at-home routine and the results compound year over year.",
        ],
        image: {
          src: "/images/alaa-4.jpg",
          alt: "Microneedling treatment overview by Dr. Alaa Zidan — small needles, big results",
        },
      },
      {
        heading: "Who it isn't right for",
        paragraphs: [
          "We won't proceed if you have active inflammatory acne, an active skin infection, a history of keloid scarring, are pregnant, or have used isotretinoin in the last 6 months. We screen for all of these at consultation.",
        ],
      },
      {
        heading: "Booking microneedling in the Maldives",
        paragraphs: [
          "Microneedling is performed at Life Care Medical Center, Hulhumalé, by Dr. Alaa Zidan. Consultations are arranged on WhatsApp — same-day reply at +960 793 7512. Tell us a little about your skin, your timing, and what you'd like to change. We'll come back with a plan.",
        ],
      },
    ],
  },

  /* ============================================================== */
  /*                  CLUSTER — Exosomes for Hair                    */
  /* ============================================================== */
  {
    slug: "exosomes-hair-loss-maldives",
    title:
      "Exosomes for Hair Loss in the Maldives — A New Generation of Regenerative Care",
    metaTitle:
      "Exosomes for Hair Loss in the Maldives | Dr. Alaa Zidan",
    excerpt:
      "Exosomes are one of the most genuinely effective non-surgical hair restoration tools available right now. Here's how they work, who they suit, and how the Maldivian climate fits in.",
    metaDescription:
      "Exosome therapy for hair loss in the Maldives. Non-surgical regenerative treatment for thinning hair, postpartum shedding, early pattern loss. Dr. Alaa Zidan, Hulhumalé.",
    category: "Regenerative",
    readingTime: "8 min",
    date: "April 2026",
    datePublished: "2026-04-21",
    dateModified: "2026-05-11",
    image: "/images/alaa-2.jpg",
    imageFit: "contain",
    about: "Exosome therapy for hair restoration",
    pillarSlug: "aesthetic-dermatology-maldives-guide",
    relatedSlugs: [
      "microneedling-maldives",
      "skincare-maldives-sun",
      "natural-lip-filler-maldives",
    ],
    keyTakeaways: [
      "Exosomes are biological 'messengers' that reactivate dormant hair follicles — no surgery, no anaesthesia.",
      "Best candidates have early-to-moderate thinning. Long-established baldness is not the right fit.",
      "Typical course: 3–4 sessions, 4–6 weeks apart, with maintenance every few months.",
      "Maldivian humidity helps — it keeps the scalp environment kinder than dry climates post-treatment.",
      "Visible density improvement is usually clear at the 3-month mark.",
    ],
    references: [
      {
        label:
          "Park BS et al. Stem-cell-derived exosomes for hair growth — review. PMC.",
        url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9498798/",
      },
      {
        label: "AAD — Hair loss types and treatments",
        url: "https://www.aad.org/public/diseases/hair-loss",
      },
    ],
    faqs: [
      {
        q: "Are exosomes a transplant?",
        a: "No. There is no surgery and no hair is moved from one part of the scalp to another. Exosomes wake up follicles that are still alive but underactive.",
      },
      {
        q: "Will exosomes regrow hair on completely bald areas?",
        a: "Generally no. If the follicle is gone (long-standing scarred baldness), exosomes have nothing to wake up. For early thinning where miniaturised follicles are still present, results are often impressive.",
      },
      {
        q: "How is it different from PRP?",
        a: "PRP uses your own platelets, drawn from your blood. Exosomes are lab-derived signalling vesicles — more concentrated and standardised, with no blood draw. Both work; exosomes tend to act faster and more consistently in our experience.",
      },
      {
        q: "Is it safe?",
        a: "Yes. The exosome product is pharmaceutical-grade and delivered via sterile single-use needles. Side effects are usually limited to mild scalp tenderness for 24 hours.",
      },
      {
        q: "Does Maldivian humidity affect the result?",
        a: "If anything, slightly positively — high ambient humidity keeps the scalp barrier hydrated, which seems to support post-treatment comfort. Sun on the scalp still matters; we recommend a hat for outdoor days for 1 week post-session.",
      },
    ],
    body: [
      {
        paragraphs: [
          "Exosomes are one of the most interesting developments in regenerative aesthetic medicine in the past decade — and one of the most genuinely effective non-surgical options we offer for early-stage hair loss in the Maldives. Patients ask about them constantly, often without quite knowing what they are. Let's fix that.",
        ],
      },
      {
        heading: "What exosomes actually are",
        paragraphs: [
          "Exosomes are tiny extracellular vesicles — natural messengers that cells use to communicate. They carry growth factors, proteins, and signalling molecules that tell surrounding cells what to do: divide, mature, repair. In aesthetic medicine, we use lab-derived exosomes to deliver those signals directly to the scalp, where they activate dormant hair follicles and stimulate new growth.",
          "It's not a transplant. There's no surgery. And the results, in the right candidate, are genuinely impressive.",
        ],
      },
      {
        heading: "How a treatment works",
        paragraphs: [
          "After a careful scalp assessment, exosome solution is delivered into the affected areas — usually via fine micro-injections placed across the scalp, sometimes paired with a microneedling pen to ensure even depth and absorption. Sterile single-use needles. Pharmaceutical-grade product.",
          "The whole treatment takes 45–60 minutes. There's almost no downtime; most patients walk out and continue their day. Mild scalp tenderness for 24 hours is normal.",
        ],
        image: {
          src: "/images/alaa-2.jpg",
          alt: "Exosomes for hair restoration — before and after, Dr. Alaa Zidan",
        },
      },
      {
        heading: "Who it works best for",
        paragraphs: [
          "Exosomes work best for patients with early-to-moderate thinning rather than long-established baldness. The follicles need to still be alive — exosomes wake them up; they don't replace what's already gone. We see consistent results in:",
        ],
        bullets: [
          "Early male and female pattern hair loss",
          "Postpartum or stress-related shedding",
          "Diffuse thinning where overall density has dropped",
          "Patients wanting to optimise results from a hair transplant",
          "Stress-driven thinning common in expat residents and high-pressure jobs",
        ],
      },
      {
        heading: "Realistic expectations",
        paragraphs: [
          "A typical course is 3–4 sessions spaced 4–6 weeks apart. After the initial course we usually maintain with one session every 3–4 months. Most patients notice reduced shedding within weeks; visible density improvement is clearest at the 3-month mark.",
          "The honest answer: results are excellent in good candidates, modest in poor ones — the consultation tells us which you are before you commit to the course.",
        ],
      },
      {
        heading: "Living in the Maldives and hair loss",
        paragraphs: [
          "Two things in island life can accelerate visible hair thinning: chronic chlorine and salt exposure (especially in expats who swim daily), and sun-driven scalp aging. Neither directly causes pattern hair loss, but both make existing thinning more visible — sun bleaches strands and salt strips lipids that normally cushion the cuticle.",
          "If you live in the Maldives and have noticed shedding, we'll factor your water and sun exposure into the plan. Most patients also get a quick scalp-care routine recommendation alongside the exosome course.",
        ],
      },
      {
        heading: "Booking",
        paragraphs: [
          "Exosome therapy is performed at Life Care Medical Center, Hulhumalé, by Dr. Alaa Zidan. To check whether you're a good candidate, message us on WhatsApp at +960 793 7512 — a few photos of your hairline and crown are usually enough to start.",
        ],
      },
    ],
  },

  /* ============================================================== */
  /*                  CLUSTER — Botox frown lines                    */
  /* ============================================================== */
  {
    slug: "botox-frown-lines-maldives",
    title:
      "Botox for Frown Lines in the Maldives — Smooth, Not Frozen",
    metaTitle:
      "Botox for Frown Lines in the Maldives | Dr. Alaa Zidan",
    excerpt:
      "How Botox treats frown lines properly — what to expect, how the Maldivian sun shapes timing, and why restraint reads better than the maximum dose.",
    metaDescription:
      "Botox for frown lines in the Maldives. Subtle, natural anti-wrinkle injections by Dr. Alaa Zidan. Same-day procedure, no downtime. Hulhumalé clinic.",
    category: "Injectables",
    readingTime: "7 min",
    date: "March 2026",
    datePublished: "2026-03-15",
    dateModified: "2026-05-11",
    image: "/images/alaa-1.jpg",
    imageFit: "contain",
    about: "Botulinum toxin injection for glabellar lines",
    pillarSlug: "aesthetic-dermatology-maldives-guide",
    relatedSlugs: [
      "forehead-botox-maldives",
      "natural-lip-filler-maldives",
      "skincare-maldives-sun",
    ],
    keyTakeaways: [
      "Frown lines (glabellar lines) come from repeated muscle contraction — Botox softens the muscle so the skin smooths.",
      "Around 20 minutes, no downtime, back to normal life immediately.",
      "Effect builds over 3–5 days; full result at 10–14 days; duration roughly 3–4 months.",
      "Under Maldivian sun, glabellar squinting is constant — many patients here notice early frown lines in their late 20s.",
      "The right dose for you is the smallest one that softens the line without freezing expression.",
    ],
    references: [
      {
        label: "AAD — Botulinum toxin therapy",
        url: "https://www.aad.org/public/cosmetic/wrinkles/botulinum-toxin-therapy",
      },
      {
        label:
          "Carruthers JD et al. Botulinum toxin in cosmetic dermatology — review.",
        url: "https://pubmed.ncbi.nlm.nih.gov/15725242/",
      },
    ],
    faqs: [
      {
        q: "Will I still be able to express emotion?",
        a: "Yes. Our preference is always to soften — never erase. You should still be able to frown lightly. The 'frozen' look comes from over-dosing, not from Botox itself.",
      },
      {
        q: "How soon will I see the result?",
        a: "Most patients see softening within 3–5 days and the full effect at around 10–14 days. We do a free check-in at 2 weeks to confirm placement and top up if needed.",
      },
      {
        q: "Is it safe to fly home the day after?",
        a: "Yes. There are no flight restrictions after Botox. Avoid lying flat or vigorous exercise for 4 hours after the injection, but a normal flight is fine.",
      },
      {
        q: "Will frown lines come back worse if I stop?",
        a: "No. If you stop, muscle activity returns gradually over 3–4 months and lines return to where they would have been without treatment — not worse.",
      },
      {
        q: "Why are early frown lines so common in the Maldives?",
        a: "Constant bright equatorial sun causes repeated subconscious squinting and brow furrowing. Many residents notice glabellar lines forming in their late 20s. Daily UV-blocking sunglasses help — Botox addresses the muscle pattern itself.",
      },
    ],
    body: [
      {
        paragraphs: [
          "Frown lines — the vertical creases between the eyebrows that deepen when you concentrate, are tired, or simply think — are one of the most common reasons people first try Botox. In the Maldives, they appear earlier than they do in cooler climates. The reason isn't mysterious: bright equatorial sun, year-round, causes constant subtle squinting. That repeated muscle activity etches lines into the skin.",
          "They're also one of the easiest areas to over-treat, which is why the right approach matters here as much as the product.",
        ],
      },
      {
        heading: "What's actually happening in the skin",
        paragraphs: [
          "Frown lines (technically the glabellar lines) are caused by repeated contraction of three small muscles between the brows — the corrugator supercilii and procerus. Over years, those repeated movements etch lines into the skin: first only when you frown, then permanently, even at rest.",
          "Botulinum toxin works by temporarily blocking the chemical signal between nerve and muscle. The muscle relaxes; the skin above it gets a chance to smooth out. Crucially, the treatment isn't 'paralysing' your face — at the right dose, it just dampens the contraction.",
        ],
      },
      {
        heading: "How the appointment runs",
        paragraphs: [
          "A few precise injections, very small needles, no anaesthesia needed. The whole appointment is around 20 minutes. You can return to normal activities the same day. Results begin showing in 3–5 days and reach full effect at 10–14 days. Effect lasts roughly 3–4 months on average — sometimes longer with repeat treatments as the muscle 'learns' to stay relaxed.",
        ],
        image: {
          src: "/images/alaa-1.jpg",
          alt: "Botox for frown lines — before and after by Dr. Alaa Zidan",
        },
      },
      {
        heading: "Why restraint matters",
        paragraphs: [
          "There's a difference between Botox that softens an expression and Botox that erases it. The first reads as well-rested. The second reads as treated.",
          "Our preference is always the first. That means smaller, carefully placed doses, and a willingness to under-treat slightly rather than over-treat. You should still be able to express yourself. The frown is what we're softening — not your personality.",
        ],
      },
      {
        heading: "Who it's right for",
        paragraphs: [
          "Anyone whose frown lines have started bothering them — whether because they make you look angry, tired, or because the line is starting to deepen with age. Botox also works preventatively: treating dynamic lines (the ones that show only with movement) is one of the most effective ways to prevent them from becoming static (visible at rest).",
        ],
      },
      {
        heading: "Aftercare in the Maldives",
        paragraphs: [
          "Aftercare is mercifully simple compared with other treatments:",
        ],
        bullets: [
          "No lying flat for 4 hours.",
          "No vigorous exercise or sauna for 24 hours.",
          "No facial massage on the treated area for 48 hours.",
          "SPF as usual — Botox doesn't change your sun rules, but smart sun care will stretch your result.",
          "Swimming and beach time the next day is completely fine.",
        ],
      },
      {
        heading: "Booking",
        paragraphs: [
          "Botox for frown lines is performed at Life Care Medical Center, Hulhumalé. To book or to ask whether it's right for you, message Dr. Alaa Zidan's team on WhatsApp at +960 793 7512 — same-day reply.",
        ],
      },
    ],
  },

  /* ============================================================== */
  /*                  CLUSTER — Natural lip filler                   */
  /* ============================================================== */
  {
    slug: "natural-lip-filler-maldives",
    title:
      "Natural Lip Filler in the Maldives — Hydrated, Not Overdone",
    metaTitle:
      "Natural Lip Filler in the Maldives | Subtle Filler | Dr. Alaa Zidan",
    excerpt:
      "Soft, healthy, hydrated lips that look like yours — only better-rested. The case for restraint with lip filler, especially in tropical light.",
    metaDescription:
      "Natural lip filler in the Maldives. Subtle, restrained hyaluronic acid lip enhancement by Dr. Alaa Zidan. Hulhumalé clinic.",
    category: "Injectables",
    readingTime: "7 min",
    date: "February 2026",
    datePublished: "2026-02-12",
    dateModified: "2026-05-11",
    image: "/images/alaa-3.jpg",
    imageFit: "contain",
    about: "Lip filler hyaluronic acid",
    pillarSlug: "aesthetic-dermatology-maldives-guide",
    relatedSlugs: [
      "botox-frown-lines-maldives",
      "forehead-botox-maldives",
      "microneedling-maldives",
    ],
    keyTakeaways: [
      "Hyaluronic acid filler is reversible, well-tolerated, and the body breaks it down naturally over 9–12 months.",
      "Tropical sun dries lips faster than colder climates — lip filler at the right volume restores both shape and hydration.",
      "Most patients notice swelling for 24–48 hours; the final result settles at 1–2 weeks.",
      "Restrained dosing reads as natural; over-volume reads as treated, especially under bright Maldivian light.",
      "Numbing is included, the appointment takes 30–45 minutes, and you're back to normal life same day.",
    ],
    references: [
      {
        label:
          "AAD — Soft tissue fillers (dermal fillers) overview",
          url: "https://www.aad.org/public/cosmetic/age-spots-marks/fillers-overview",
      },
      {
        label:
          "DeLorenzi C. Complications of injectable fillers, part 2 — Aesth Surg J.",
          url: "https://pubmed.ncbi.nlm.nih.gov/25492967/",
      },
    ],
    faqs: [
      {
        q: "Will my lips look 'done'?",
        a: "Not if it's planned correctly. The goal at this clinic is to restore hydration and gently rebalance — not to maximise volume. People who meet you afterwards should notice you look well, not notice your lips.",
      },
      {
        q: "How long does it last?",
        a: "On average, 9–12 months. Some patients metabolise filler faster — younger, more active, more sun-exposed metabolisms tend to be quicker. Maintenance is usually a small top-up once a year.",
      },
      {
        q: "Is it reversible?",
        a: "Yes. Hyaluronic acid filler can be dissolved with an enzyme called hyaluronidase if you ever want to undo it. This is one of its biggest safety advantages.",
      },
      {
        q: "Can I go to the beach the next day?",
        a: "Yes — with mineral SPF on the lips. Avoid direct sun and saunas for 24 hours. Some mild swelling is normal for the first 48 hours; sun and heat both make it worse, so a hat helps.",
      },
      {
        q: "How does the Maldives climate affect lip filler?",
        a: "Tropical sun and constant salt water dry lips much faster than in cooler climates. Hydrated, well-volumised lips actually hold up better in this climate — but daily SPF lip balm is essential to protect both the result and the lips themselves.",
      },
    ],
    body: [
      {
        paragraphs: [
          "Lip filler is one of the most-requested treatments in any aesthetic clinic — and one of the most commonly done badly. The internet has trained patients to ask for big results, and trained some practitioners to deliver them whether or not the volume actually suits the face. We do something different.",
        ],
      },
      {
        heading: "The natural approach",
        paragraphs: [
          "The goal at this clinic is never to add the most volume possible. The goal is to restore hydration, soften vertical lip lines, gently rebalance the upper-to-lower lip ratio if needed, and create a result that simply looks like a slightly better-rested version of you.",
          "If someone meets you for the first time and notices your lips before they notice you, the work was overdone. We aim for the opposite — and that's particularly important under bright Maldivian light, which makes any over-filled work very visible.",
        ],
        image: {
          src: "/images/alaa-3.jpg",
          alt: "Natural lip filler — before and after by Dr. Alaa Zidan",
        },
      },
      {
        heading: "What's used and why",
        paragraphs: [
          "Hyaluronic acid filler — a substance the body naturally produces and naturally breaks down over time. It's reversible (an enzyme called hyaluronidase can dissolve it if needed), well-tolerated, and produces a soft, kissable result rather than a hard, structured one when placed correctly.",
          "We use pharmaceutical-grade branded HA fillers only. Single-use sterile cannulas where appropriate, fine sterile needles otherwise.",
        ],
      },
      {
        heading: "How the session runs",
        paragraphs: [
          "Numbing cream is applied first, so you're comfortable. The filler also contains lidocaine for additional comfort during placement. The treatment itself takes 30–45 minutes. There's mild swelling for 24–48 hours, occasionally minor bruising. Final result settles within 1–2 weeks.",
        ],
      },
      {
        heading: "Who it suits",
        bullets: [
          "Anyone who wants softer, more hydrated lips.",
          "Patients in their 20s and 30s who often want subtle volume and definition.",
          "Patients in their 40s+ who usually benefit more from gentle deflation correction and improvement in the lip area than from volume itself.",
          "Patients with vertical 'smoker's lines' around the mouth — even those who've never smoked, often appear with sun exposure.",
          "Patients with naturally asymmetric lips — filler is excellent for subtle rebalancing.",
        ],
      },
      {
        heading: "Lip filler and tropical climate",
        paragraphs: [
          "Sun, wind, and salt water dehydrate lips dramatically — Maldivian and visiting patients alike often describe their lips as 'always dry, no matter what I use'. Hyaluronic acid filler, because it binds water in the tissue, helps the lip retain moisture from the inside in a way no topical balm can match. That said: an SPF lip balm reapplied throughout the day is still non-negotiable to protect both the lips and the longevity of the filler.",
        ],
      },
      {
        heading: "Aftercare",
        bullets: [
          "Avoid direct sun and very hot environments (sauna, hot yoga) for 24 hours.",
          "Avoid pressing on the lips (no straws, no kissing, no lipsticks) for 24 hours.",
          "Light icing for the first hour reduces swelling.",
          "No vigorous exercise for 24 hours.",
          "Sleep slightly elevated on night 1 to minimise morning puffiness.",
        ],
      },
      {
        heading: "Who shouldn't have lip filler",
        paragraphs: [
          "We won't proceed if there's active cold-sore activity (we treat the cold sore first), active infection in the area, pregnancy or breastfeeding, or untreated bleeding disorders.",
        ],
      },
      {
        heading: "Booking",
        paragraphs: [
          "Lip filler is performed at Life Care Medical Center, Hulhumalé, by Dr. Alaa Zidan. To plan a consultation, WhatsApp +960 793 7512 — same-day reply.",
        ],
      },
    ],
  },

  /* ============================================================== */
  /*                  CLUSTER — Forehead Botox                       */
  /* ============================================================== */
  {
    slug: "forehead-botox-maldives",
    title:
      "Forehead Botox in the Maldives — A Lighter Approach",
    metaTitle:
      "Forehead Botox in the Maldives | Dr. Alaa Zidan",
    excerpt:
      "Horizontal forehead lines deepen quickly under tropical sun. Here's the case for a lighter, micro-dosed approach that softens lines without dropping the brow.",
    metaDescription:
      "Forehead Botox in the Maldives — careful, lower-dose anti-wrinkle treatment that smooths lines without freezing the brow. Dr. Alaa Zidan, Hulhumalé.",
    category: "Injectables",
    readingTime: "6 min",
    date: "January 2026",
    datePublished: "2026-01-22",
    dateModified: "2026-05-11",
    image: "/images/alaa-5.jpg",
    imageFit: "contain",
    about: "Botulinum toxin injection for forehead lines",
    pillarSlug: "aesthetic-dermatology-maldives-guide",
    relatedSlugs: [
      "botox-frown-lines-maldives",
      "natural-lip-filler-maldives",
      "skincare-maldives-sun",
    ],
    keyTakeaways: [
      "Horizontal forehead lines come from the frontalis muscle that lifts the brows — Botox softens them without erasing movement.",
      "Tropical UV accelerates forehead line formation; many Maldivian patients see early static lines in their late 20s.",
      "Micro-dosing across the forehead beats a single heavy dose — keeps natural expression and avoids dropped brows.",
      "Almost always combined with frown-line treatment, since the two muscle groups balance each other.",
      "20-minute appointment, no downtime, full effect at 10–14 days, lasts 3–4 months.",
    ],
    references: [
      {
        label: "AAD — Botulinum toxin therapy",
        url: "https://www.aad.org/public/cosmetic/wrinkles/botulinum-toxin-therapy",
      },
    ],
    faqs: [
      {
        q: "Will my eyebrows drop after forehead Botox?",
        a: "Not when it's dosed and placed correctly. Heavy dosing of the frontalis can over-relax it and let the brows drop — which is exactly why we prefer micro-dosing. We also always treat the frown-line muscles in the same session so the brow stays balanced.",
      },
      {
        q: "Why does my forehead need treatment with my frown?",
        a: "The frontalis (forehead lifter) and the corrugators/procerus (frown muscles) are antagonists — they pull against each other. Treating one without the other tends to over-emphasise the untreated group and looks unbalanced.",
      },
      {
        q: "Can I do forehead Botox preventatively?",
        a: "Yes. Treating dynamic lines before they become static (visible at rest) is one of the most effective uses of Botox. In the Maldives, many patients start in their late 20s for this reason.",
      },
      {
        q: "Will it stop me looking surprised?",
        a: "No — micro-dosing preserves enough movement that you can still lift your brows in surprise or concentration. The horizontal lines just become softer.",
      },
      {
        q: "How often will I need it?",
        a: "Most patients book every 3–4 months at first. Over time, many find they can stretch the interval to every 5–6 months as the muscle stays softer between treatments.",
      },
    ],
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
          "Under Maldivian sun, that process is accelerated. Constant bright light pushes the frontalis into a defensive lifting pattern — many patients here see forehead lines forming in their late 20s rather than mid-30s.",
        ],
      },
      {
        heading: "The lighter-dose approach",
        paragraphs: [
          "A common mistake is using a high dose to fully relax the frontalis. The result is a smooth forehead — but also dropped eyebrows, a tired appearance, and a face that looks frozen. We prefer micro-dosing across the forehead: small, precisely placed injections that soften the lines without eliminating movement.",
          "You should still be able to lift your eyebrows in surprise or concentration. The lines just become less obvious.",
        ],
        image: {
          src: "/images/alaa-5.jpg",
          alt: "Forehead Botox — before and after by Dr. Alaa Zidan",
        },
      },
      {
        heading: "Why we treat the frown muscles at the same time",
        paragraphs: [
          "Forehead Botox is almost always done alongside Botox for frown lines. They work together — relaxing only the forehead without addressing the frown muscles tends to look unbalanced because the frown muscles pull the brows down while a softened frontalis can no longer counter that pull.",
          "Treating both is what produces a balanced, restful upper face. We'll plan the combination at your consultation.",
        ],
      },
      {
        heading: "Pairing with sun care in the Maldives",
        paragraphs: [
          "Botox softens the muscle pattern, but it doesn't change the photo-ageing that drives the line. To stretch the result, daily SPF 50+, a wide-brimmed hat for outdoor work, and good UV-blocking sunglasses (which reduce squinting) are the trio that helps most. We give every patient a short post-Botox sun plan.",
        ],
      },
      {
        heading: "Booking",
        paragraphs: [
          "Forehead Botox is performed at Life Care Medical Center, Hulhumalé, by Dr. Alaa Zidan. To plan a consultation, WhatsApp +960 793 7512 — same-day reply.",
        ],
      },
    ],
  },

  /* ============================================================== */
  /*                  CLUSTER — Skincare in Maldivian sun            */
  /* ============================================================== */
  {
    slug: "skincare-maldives-sun",
    title:
      "Skincare in the Maldivian Sun — A Routine That Actually Works",
    metaTitle:
      "Skincare in the Maldives | Tropical Skincare Routine | Dr. Alaa Zidan",
    excerpt:
      "Living in the Maldives — or visiting — changes the rules for sunscreen, retinoids, and after-ocean care. The essentials, distilled.",
    metaDescription:
      "Skincare for the Maldivian climate: SPF, retinoids, after-ocean care, and the routines that actually work in tropical humidity and equatorial sun.",
    category: "Skincare",
    readingTime: "8 min",
    date: "December 2025",
    datePublished: "2025-12-08",
    dateModified: "2026-05-11",
    image: "/images/alaa-4.jpg",
    imageFit: "contain",
    about: "Tropical skincare routine for sun-exposed skin",
    pillarSlug: "aesthetic-dermatology-maldives-guide",
    relatedSlugs: [
      "microneedling-maldives",
      "botox-frown-lines-maldives",
      "exosomes-hair-loss-maldives",
    ],
    keyTakeaways: [
      "SPF 50+ broad-spectrum every morning is the single most impactful skincare habit in the Maldives.",
      "Reapply sunscreen every 90–120 minutes outdoors — once at sunrise isn't enough at UV index 11.",
      "Retinoids work here but require a slightly heavier barrier moisturiser than in cooler climates.",
      "Rinse with cool fresh water immediately after the sea or pool — it's the cheapest, highest-impact tropical skin habit.",
      "Pigmentation that isn't fading despite a good routine is the right time to come in for a consultation.",
    ],
    references: [
      {
        label: "WHO — UV index and skin protection",
        url: "https://www.who.int/news-room/questions-and-answers/item/ultraviolet-(uv)-radiation",
      },
      {
        label:
          "AAD — How to apply sunscreen",
          url: "https://www.aad.org/public/everyday-care/sun-protection/sunscreen-patients/apply-sunscreen",
      },
    ],
    faqs: [
      {
        q: "Which SPF is best for the Maldives?",
        a: "A broad-spectrum SPF 50+ that you'll actually reapply. Mineral filters (zinc oxide, titanium dioxide) are reef-friendlier and gentler on sensitive skin; modern chemical filters are lighter and easier under makeup. We recommend a brand match to your skin type at your consultation.",
      },
      {
        q: "Can I use retinol if I live in the Maldives?",
        a: "Yes — but only at night, started at a low strength, and always paired with a slightly heavier barrier moisturiser than you'd use elsewhere. Stop retinol for a few days before any major beach exposure.",
      },
      {
        q: "Is sun damage reversible?",
        a: "Some — pigmentation and texture respond to consistent topical care, peels, and microneedling. Deeper photo-ageing (collagen loss, deep lines) needs procedural support. We map what's reversible at consultation.",
      },
      {
        q: "Do I really need to wash my face right after swimming?",
        a: "Yes — particularly after the sea. Salt water and chlorine strip the skin barrier, and the longer they sit on the skin combined with sun exposure, the more inflammation and pigmentation you accumulate. A 30-second cool freshwater rinse is the single highest-impact tropical habit.",
      },
      {
        q: "When should I see a dermatologist for skincare advice?",
        a: "Any of: new or changing moles, persistent pigmentation despite SPF, acne not improving over 2–3 months of self-care, sudden dryness or rash, or simply when you want a tailored routine built around your skin type and lifestyle. WhatsApp +960 793 7512 to book a consultation.",
      },
    ],
    body: [
      {
        paragraphs: [
          "Living near the equator does specific things to skin. UV exposure is higher year-round than almost anywhere else on the planet, humidity is constant, and salt water and chlorine come with daily life. The fundamentals of a good skincare routine don't change — the application does.",
          "This is the routine we actually recommend to Maldivian patients and to visitors planning more than a few days here.",
        ],
      },
      {
        heading: "Sunscreen, properly",
        paragraphs: [
          "SPF 50+ broad-spectrum, applied as the final skincare step every morning, reapplied every 90–120 minutes when outdoors. In tropical light, this is the single most important anti-pigmentation, anti-ageing intervention you can make.",
          "Choose a formulation you'll actually wear — the best sunscreen is the one that doesn't end up unused on the shelf. A few practical notes:",
        ],
        bullets: [
          "**Apply enough.** A two-finger length for the face alone. Most people use far less than the SPF rating assumes.",
          "**Reapply with a stick or powder** if you wear makeup and don't want to disturb it.",
          "**Reef-safe matters.** Mineral filters (zinc oxide, titanium dioxide) are kinder to coral reefs. Many Maldivian resorts now require them.",
          "**SPF the hands, ears, neck, and chest too.** These are the first places photo-ageing shows.",
        ],
      },
      {
        heading: "Retinoids — yes, but adjust",
        paragraphs: [
          "Retinoids (retinol, retinaldehyde, tretinoin) work in tropical climates. They also dry the skin faster in this heat than in cooler regions. The adjustment is:",
        ],
        bullets: [
          "Use them at night only.",
          "Start at a low strength and build slowly (every other night for 2 weeks before nightly).",
          "Pair with a slightly heavier barrier cream than you'd use elsewhere.",
          "Stop a few days before any beach day with significant sun exposure.",
          "Always combine with SPF 50+ the following morning — retinoid use without sunscreen is counter-productive.",
        ],
      },
      {
        heading: "After the ocean",
        paragraphs: [
          "Salt water and chlorine strip the barrier. They also bind to the skin and continue mild oxidative damage when combined with sun. Rinse with cool fresh water as soon as possible after swimming, then apply a gentle moisturiser.",
          "This single habit does more for tropical skin than most expensive serums. It's also free.",
        ],
      },
      {
        heading: "Hydration and humidity",
        paragraphs: [
          "Maldivian humidity often misleads people into using too little moisturiser. The skin can feel 'dewy' from ambient humidity even when the barrier itself is compromised. A lightweight ceramide-based moisturiser morning and night, plus a slightly richer cream when using actives, keeps the barrier intact regardless of how the skin feels.",
        ],
      },
      {
        heading: "What we treat in clinic — when home routine isn't enough",
        paragraphs: [
          "Even a perfect home routine has limits. The most common reasons people come in once their at-home efforts plateau:",
        ],
        bullets: [
          "**Persistent pigmentation or melasma** that doesn't fade with topicals — we add medical-grade peels and pigment-targeted treatments.",
          "**Texture changes** from sun — microneedling and skin boosters address these directly.",
          "**Active acne** that isn't improving — we build a combined medical/procedural plan.",
          "**Early fine lines** that have become bothersome — small, well-placed injectables stop their progression.",
        ],
      },
      {
        heading: "When to come in",
        paragraphs: [
          "If pigmentation is appearing rather than fading, if the skin feels permanently dehydrated despite a good routine, if you have a sudden new spot or rash, or if you simply want a structured plan tailored to Maldives life — that's a consultation worth booking.",
          "Dr. Alaa Zidan practises at Life Care Medical Center, Hulhumalé. WhatsApp +960 793 7512 — same-day reply.",
        ],
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*                       HELPER FUNCTIONS                             */
/* ------------------------------------------------------------------ */

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllPostSlugs(): string[] {
  return posts.map((p) => p.slug);
}

export function getLatestPosts(count = 3): Post[] {
  // Surface non-pillar posts in the latest list so home/blog feel fresh.
  return posts.filter((p) => !p.isPillar).slice(0, count);
}

export function getRelatedPosts(slug: string, max = 3): Post[] {
  const current = getPostBySlug(slug);
  if (!current) return [];
  const related = (current.relatedSlugs ?? [])
    .map((s) => getPostBySlug(s))
    .filter((p): p is Post => Boolean(p));
  return related.slice(0, max);
}

export function getPillar(): Post | undefined {
  return posts.find((p) => p.isPillar);
}
