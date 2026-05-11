import Link from "next/link";

type Crumb = { label: string; href?: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-widest text-gold-500">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((c, i) => (
          <li key={i} className="flex items-center gap-2">
            {c.href ? (
              <Link href={c.href} className="hover:text-gold-600">
                {c.label}
              </Link>
            ) : (
              <span className="text-ink-700">{c.label}</span>
            )}
            {i < items.length - 1 && (
              <span aria-hidden className="text-gold-300">
                /
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
