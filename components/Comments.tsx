"use client";

import { useEffect, useRef } from "react";

/**
 * Public comments section powered by Giscus (GitHub Discussions backend).
 *
 * What it does:
 *  - Renders a real public discussion thread on every blog post.
 *  - Each post maps to its own GitHub Discussion (matched by URL).
 *  - When a visitor leaves a comment, Giscus posts it as a Discussion comment;
 *    GitHub then emails the repo owner / anyone subscribed to that thread.
 *  - Visitors sign in once with GitHub to post (free; identity verified).
 *
 * Setup (one-time on the GitHub side — see SETUP.md notes):
 *   1. Make sure repo "alaamagdyzidan-cmd/dralaazidan-site" is public.
 *   2. Enable "Discussions" in repo Settings → Features.
 *   3. Install the Giscus GitHub App at https://github.com/apps/giscus on
 *      the repo and grant access.
 *   4. Generate config at https://giscus.app to confirm repo + category IDs.
 *   5. To route notifications to dr.alaa.m.zidan@gmail.com, either set
 *      the repo owner's GitHub primary email to that address, or have
 *      that address subscribe to repository discussions in GitHub
 *      Notifications settings.
 */

type Props = {
  /** Maps each blog post to a stable Discussion via its slug. */
  mappingTerm: string;
};

export default function Comments({ mappingTerm }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const initialised = useRef(false);

  useEffect(() => {
    if (!containerRef.current || initialised.current) return;
    initialised.current = true;

    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.async = true;
    script.crossOrigin = "anonymous";

    // Giscus configuration — values produced by https://giscus.app
    script.setAttribute("data-repo", "alaamagdyzidan-cmd/dralaazidan-site");
    script.setAttribute("data-repo-id", "R_PLACEHOLDER_REPO_ID");
    script.setAttribute("data-category", "Comments");
    script.setAttribute("data-category-id", "DIC_PLACEHOLDER_CATEGORY_ID");
    script.setAttribute("data-mapping", "specific");
    script.setAttribute("data-term", mappingTerm);
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "bottom");
    script.setAttribute("data-theme", "light");
    script.setAttribute("data-lang", "en");
    script.setAttribute("data-loading", "lazy");

    containerRef.current.appendChild(script);

    return () => {
      if (containerRef.current) containerRef.current.innerHTML = "";
      initialised.current = false;
    };
  }, [mappingTerm]);

  return (
    <section
      aria-labelledby="comments-heading"
      className="mx-auto mt-12 max-w-3xl"
    >
      <div className="mb-5 text-center sm:text-left">
        <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-gold-500">
          Join the conversation
        </p>
        <h2
          id="comments-heading"
          className="mt-2 font-serif text-2xl text-ink-900 sm:text-3xl"
        >
          Comments &amp; questions
        </h2>
        <p className="mt-3 text-sm text-ink-700">
          Leave a question or share your experience. Dr. Alaa's team reads every
          comment and replies personally. Sign in once with GitHub to post —
          your comment appears here for other readers and is emailed to the
          clinic for a personal follow-up.
        </p>
      </div>
      <div
        ref={containerRef}
        className="giscus rounded-2xl border border-sand-200 bg-sand-50 p-4 sm:p-6"
      />
    </section>
  );
}
