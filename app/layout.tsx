import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Allura } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AiAgent from "@/components/AiAgent";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const script = Allura({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Dr. Alaa Zidan — Aesthetic & Medical Doctor · Hulhumalé, Maldives",
    template: "%s · Dr. Alaa Zidan",
  },
  description:
    "Aesthetic and Medical Doctor with 5+ years experience in aesthetic dermatology. Practising at Life Care Medical Center, Hulhumalé, Maldives. Botox, fillers, exosomes for hair, microneedling, and skin rejuvenation.",
  metadataBase: new URL("https://dralaazidan.com"),
  openGraph: {
    type: "website",
    title: "Dr. Alaa Zidan — Aesthetic & Medical Doctor · Maldives",
    description:
      "Aesthetic dermatology at Life Care Medical Center, Hulhumalé, Maldives. Botox, fillers, exosomes for hair, microneedling.",
    url: "https://dralaazidan.com",
    siteName: "Dr. Alaa Zidan",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Alaa Zidan — Aesthetic & Medical Doctor",
    description: "Aesthetic dermatology at Life Care Medical Center, Hulhumalé, Maldives.",
  },
  verification: {
    google: "z5SRotzRIVXKp4ebkarFq5iqstlc-nfcHpVkgDN5EpY",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${script.variable}`}>
      <body className="min-h-screen">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <AiAgent />
      </body>
    </html>
  );
}
