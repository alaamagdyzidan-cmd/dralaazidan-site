import Image from "next/image";

type Props = {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "light" | "dark";
};

// Pixel dimensions per size. The logo image is square-ish with AZ on top
// and "Dr. Alaa Zidan" below — we render it inside a square box.
const SIZES = {
  sm: { box: "h-10 w-10", img: 40 },
  md: { box: "h-12 w-12", img: 48 },
  lg: { box: "h-16 w-16", img: 64 },
  xl: { box: "h-24 w-24", img: 96 },
};

export default function LogoMark({ size = "md", variant = "light" }: Props) {
  const s = SIZES[size];

  // Dark variant: invert/lighten background slightly so logo's white bg
  // blends into dark sections (footer / CTA cards).
  const bg = variant === "dark" ? "bg-sand-50" : "bg-transparent";

  return (
    <span
      aria-label="Dr. Alaa Zidan"
      className={`relative inline-flex ${s.box} items-center justify-center overflow-hidden rounded-full ${bg}`}
    >
      <Image
        src="/images/logo.jpg"
        alt="Dr. Alaa Zidan"
        width={s.img}
        height={s.img}
        className="h-full w-full object-contain"
        priority={size === "xl" || size === "lg"}
      />
    </span>
  );
}
