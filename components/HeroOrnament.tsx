/**
 * Decorative gold curlicue / flourish — mirrors the hand-drawn ornament
 * style used on Dr. Alaa's Instagram infographics (microneedling poster, etc.).
 * Pure SVG, no external image dependency.
 */
export default function HeroOrnament({ className = "", flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      aria-hidden
      className={`${className} ${flip ? "scale-x-[-1]" : ""}`}
    >
      <path
        d="M180 20 C 130 30, 90 60, 70 110 C 60 140, 75 165, 105 170 C 130 174, 155 160, 165 135 C 173 115, 162 95, 142 92 C 124 90, 110 105, 112 122"
        strokeLinecap="round"
      />
      <circle cx="180" cy="20" r="3" fill="currentColor" />
      <circle cx="112" cy="122" r="2.2" fill="currentColor" />
    </svg>
  );
}
