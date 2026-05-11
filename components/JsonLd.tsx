import type { Thing, WithContext } from "schema-dts";

type Props = { data: WithContext<Thing> | WithContext<Thing>[] };

/**
 * Renders a Schema.org JSON-LD <script> in the document.
 * Safe for server components — no client JS.
 */
export default function JsonLd({ data }: Props) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
