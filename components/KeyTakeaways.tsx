export default function KeyTakeaways({ points }: { points: string[] }) {
  if (!points.length) return null;
  return (
    <aside
      aria-label="Key takeaways"
      className="mx-auto my-8 max-w-3xl rounded-2xl border border-gold-300/40 bg-gradient-to-br from-sand-50 via-rose-50 to-sand-50 p-6 shadow-sm sm:p-8"
    >
      <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-gold-500">
        Key takeaways
      </p>
      <ul className="mt-4 space-y-2.5 text-sm text-ink-800 sm:text-base">
        {points.map((p, i) => (
          <li key={i} className="flex items-start gap-3">
            <span
              aria-hidden
              className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold-400"
            />
            <span className="leading-relaxed">{p}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
