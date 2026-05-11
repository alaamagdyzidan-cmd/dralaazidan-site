type Props = {
  faqs: { q: string; a: string }[];
  heading?: string;
};

/**
 * Accessible FAQ section using <details>/<summary> so it works without JS,
 * stays expandable, and Google can read every Q/A. JSON-LD is rendered
 * separately at the page level via faqSchema().
 */
export default function Faq({ faqs, heading = "Frequently asked questions" }: Props) {
  if (!faqs.length) return null;
  return (
    <section
      aria-labelledby="faq-heading"
      className="mx-auto mt-12 max-w-3xl"
    >
      <h2
        id="faq-heading"
        className="font-serif text-2xl text-ink-900 sm:text-3xl"
      >
        {heading}
      </h2>
      <div className="mt-6 divide-y divide-sand-200 rounded-2xl border border-sand-200 bg-sand-50">
        {faqs.map((item, i) => (
          <details
            key={i}
            className="group px-5 py-4 sm:px-6"
          >
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-base font-medium text-ink-900 outline-none focus-visible:text-gold-600">
              <span>{item.q}</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mt-1 h-5 w-5 flex-shrink-0 text-gold-500 transition-transform group-open:rotate-180"
                aria-hidden
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </summary>
            <div className="mt-3 text-sm leading-relaxed text-ink-700 sm:text-base">
              {item.a}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
