"use client";

import { useEffect, useState } from "react";

type Item = { id: string; text: string; level: 2 | 3 };

/**
 * Sticky-aware table of contents.
 * - Renders as a collapsible block on mobile (saves space)
 * - On desktop sits inline above the article (could be moved to side later)
 * - Highlights the heading currently in view via IntersectionObserver
 */
export default function TableOfContents({ items }: { items: Item[] }) {
  const [active, setActive] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || items.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the first visible heading (top-most) and mark it active.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top - b.boundingClientRect.top
          );
        if (visible.length > 0) {
          setActive(visible[0].target.id);
        }
      },
      {
        rootMargin: "-80px 0px -60% 0px",
        threshold: 0,
      }
    );

    items.forEach((it) => {
      const el = document.getElementById(it.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav
      aria-label="Table of contents"
      className="mx-auto my-8 max-w-3xl rounded-2xl border border-sand-200 bg-sand-50"
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="toc-list"
        className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left sm:hidden"
      >
        <span className="flex items-center gap-3">
          <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-gold-500">
            On this page
          </span>
          <span className="text-xs text-ink-600">
            {items.length} sections
          </span>
        </span>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`h-5 w-5 text-gold-500 transition-transform ${
            open ? "rotate-180" : ""
          }`}
          aria-hidden
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {/* Desktop header (always visible) */}
      <div className="hidden items-center gap-3 px-6 pt-5 sm:flex">
        <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-gold-500">
          On this page
        </span>
        <span className="h-px flex-1 bg-sand-200" />
      </div>

      <ol
        id="toc-list"
        className={`${
          open ? "block" : "hidden"
        } space-y-1 px-5 pb-5 sm:block sm:px-6 sm:pb-6`}
      >
        {items.map((it) => {
          const isActive = active === it.id;
          return (
            <li
              key={it.id}
              className={it.level === 3 ? "pl-4 sm:pl-6" : ""}
            >
              <a
                href={`#${it.id}`}
                onClick={() => setOpen(false)}
                className={`block py-1.5 text-sm leading-relaxed transition ${
                  isActive
                    ? "font-medium text-gold-600"
                    : "text-ink-700 hover:text-gold-600"
                } ${it.level === 3 ? "text-[13px] text-ink-600" : ""}`}
              >
                {it.text}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
