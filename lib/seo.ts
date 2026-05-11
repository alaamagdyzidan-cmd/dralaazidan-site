import type {
  MedicalClinic,
  Person,
  MedicalWebPage,
  BreadcrumbList,
  FAQPage,
  WithContext,
} from "schema-dts";

export const SITE_URL = "https://www.dralaazidan.com";
export const SITE_NAME = "Dr. Alaa Zidan";
export const CLINIC_NAME = "Dr. Alaa Zidan Aesthetic Dermatology Clinic";

/** Dr. Alaa Zidan — author + medical reviewer for every post */
export const DR_ALAA: WithContext<Person> = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: "Dr. Alaa Zidan",
  jobTitle: "Aesthetic & Medical Doctor",
  description:
    "Aesthetic and medical doctor with 5+ years of experience in aesthetic dermatology, specialising in injectables, regenerative skin and hair therapies, microneedling, and pigmentation care. Practising in the Maldives and Egypt.",
  image: `${SITE_URL}/images/dr-alaa-portrait.jpg`,
  url: `${SITE_URL}/about`,
  worksFor: {
    "@type": "MedicalClinic",
    name: "Life Care Medical Center",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Lot no. 11382, Rabarugas Magu",
      addressLocality: "Hulhumalé",
      addressCountry: "MV",
    },
  },
  knowsAbout: [
    "Aesthetic Dermatology",
    "Botulinum Toxin (Botox)",
    "Dermal Fillers",
    "Microneedling",
    "Exosome Therapy",
    "Chemical Peels",
    "Pigmentation Treatment",
    "Skin Rejuvenation",
    "Hair Restoration",
  ],
  sameAs: [
    "https://www.instagram.com/dr.alaazidan/",
    "https://www.facebook.com/share/1aB3gGmTu5/?mibextid=wwXIfr",
  ],
};

/** MedicalClinic site-wide schema (root layout). */
export const CLINIC_SCHEMA: WithContext<MedicalClinic> = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "@id": `${SITE_URL}/#clinic`,
  name: "Dr. Alaa Zidan — Aesthetic & Medical Doctor",
  alternateName: "Dr Alaa Zidan Clinic",
  url: SITE_URL,
  image: `${SITE_URL}/images/dr-alaa-portrait.jpg`,
  logo: `${SITE_URL}/images/logo.jpg`,
  description:
    "Aesthetic dermatology clinic in Hulhumalé, Maldives. Botox, dermal fillers, microneedling, exosomes for hair, chemical peels, pigmentation and skin rejuvenation — led by Dr. Alaa Zidan.",
  telephone: "+9607937512",
  priceRange: "$$-$$$",
  medicalSpecialty: "Dermatologic",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Lot no. 11382, Rabarugas Magu, Life Care Medical Center",
    addressLocality: "Hulhumalé",
    addressCountry: "MV",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "4.2106",
    longitude: "73.5413",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "18:00",
      closes: "23:00",
    },
  ],
  sameAs: [
    "https://www.instagram.com/dr.alaazidan/",
    "https://www.facebook.com/share/1aB3gGmTu5/?mibextid=wwXIfr",
  ],
  founder: { "@id": `${SITE_URL}/#person` },
  employee: { "@id": `${SITE_URL}/#person` },
};

/** Build BreadcrumbList JSON-LD for a blog post. */
export function blogBreadcrumb(slug: string, title: string): WithContext<BreadcrumbList> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${SITE_URL}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: `${SITE_URL}/blog/${slug}`,
      },
    ],
  };
}

/** Build FAQPage JSON-LD. */
export function faqSchema(faqs: { q: string; a: string }[]): WithContext<FAQPage> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };
}

/** Build MedicalWebPage JSON-LD for an individual blog post. */
export function medicalWebPageSchema(opts: {
  slug: string;
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  about: string;
}): WithContext<MedicalWebPage> {
  const url = `${SITE_URL}/blog/${opts.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "@id": url,
    url,
    name: opts.title,
    headline: opts.title,
    description: opts.description,
    image: opts.image.startsWith("http") ? opts.image : `${SITE_URL}${opts.image}`,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    lastReviewed: opts.dateModified,
    inLanguage: "en",
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
    about: {
      "@type": "MedicalProcedure",
      name: opts.about,
    },
    audience: {
      "@type": "MedicalAudience",
      audienceType: "Patient",
    },
    author: { "@id": `${SITE_URL}/#person` },
    reviewedBy: { "@id": `${SITE_URL}/#person` },
    publisher: { "@id": `${SITE_URL}/#clinic` },
    mainEntityOfPage: url,
  };
}
