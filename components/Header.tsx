import Link from "next/link";
import LogoMark from "./LogoMark";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const INSTAGRAM_URL = "https://www.instagram.com/dr.alaazidan/";
const FACEBOOK_URL = "https://www.facebook.com/share/1aB3gGmTu5/?mibextid=wwXIfr";
const WHATSAPP_URL = `https://wa.me/9607937512?text=${encodeURIComponent("Hello Dr. Alaa, I'd like to book an appointment.")}`;

function IgIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2.2c3.2 0 3.6 0 4.85.07 1.17.05 1.8.25 2.23.42.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.42 2.23.06 1.27.07 1.65.07 4.85s0 3.6-.07 4.85c-.05 1.17-.25 1.8-.42 2.23a3.7 3.7 0 0 1-.9 1.38c-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.42-1.27.06-1.65.07-4.85.07s-3.6 0-4.85-.07c-1.17-.05-1.8-.25-2.23-.42a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.42-2.23C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.85c.05-1.17.25-1.8.42-2.23a3.7 3.7 0 0 1 .9-1.38 3.7 3.7 0 0 1 1.38-.9c.42-.16 1.06-.36 2.23-.42C8.4 2.2 8.8 2.2 12 2.2zm0 1.95c-3.15 0-3.5 0-4.74.06-1.07.05-1.65.23-2.04.38-.51.2-.88.44-1.26.82a3.4 3.4 0 0 0-.82 1.26c-.15.39-.33.97-.38 2.04-.06 1.24-.06 1.6-.06 4.74s0 3.5.06 4.74c.05 1.07.23 1.65.38 2.04.2.51.44.88.82 1.26.38.38.75.62 1.26.82.39.15.97.33 2.04.38 1.24.06 1.6.06 4.74.06s3.5 0 4.74-.06c1.07-.05 1.65-.23 2.04-.38.51-.2.88-.44 1.26-.82.38-.38.62-.75.82-1.26.15-.39.33-.97.38-2.04.06-1.24.06-1.6.06-4.74s0-3.5-.06-4.74c-.05-1.07-.23-1.65-.38-2.04a3.4 3.4 0 0 0-.82-1.26 3.4 3.4 0 0 0-1.26-.82c-.39-.15-.97-.33-2.04-.38-1.24-.06-1.6-.06-4.74-.06zm0 3.32a4.53 4.53 0 1 1 0 9.06 4.53 4.53 0 0 1 0-9.06zm0 7.47a2.94 2.94 0 1 0 0-5.88 2.94 2.94 0 0 0 0 5.88zm5.77-7.65a1.06 1.06 0 1 1-2.12 0 1.06 1.06 0 0 1 2.12 0z" />
    </svg>
  );
}

function FbIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M22 12.07C22 6.5 17.52 2 12 2S2 6.5 2 12.07c0 5.02 3.66 9.18 8.44 9.93v-7.02H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.91 3.78-3.91 1.1 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.45 2.91h-2.33v7.02C18.34 21.25 22 17.09 22 12.07z" />
    </svg>
  );
}

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-sand-100 bg-sand-50/85 backdrop-blur-md">
      <div className="container-page flex h-20 items-center justify-between gap-4">
        <Link href="/" className="group flex items-center gap-3 leading-tight" aria-label="Dr. Alaa Zidan — Home">
          <LogoMark size="lg" variant="light" />
          <span className="hidden text-[10px] uppercase tracking-[0.28em] text-gold-500 sm:inline">
            Aesthetic &amp; Medical Doctor
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-700 transition hover:text-gold-500"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="social-icon border-sand-200 text-ink-700 hover:border-gold-400 hover:text-gold-500"
          >
            <IgIcon />
          </Link>
          <Link
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="social-icon border-sand-200 text-ink-700 hover:border-gold-400 hover:text-gold-500"
          >
            <FbIcon />
          </Link>
          <Link
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 btn-primary text-xs"
          >
            Book Appointment
          </Link>
        </div>

        <details className="lg:hidden">
          <summary className="list-none cursor-pointer p-2">
            <svg className="h-6 w-6 text-ink-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </summary>
          <div className="absolute left-0 right-0 top-20 border-b border-sand-100 bg-sand-50 px-6 py-6 shadow-lg">
            <ul className="space-y-4">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="block text-base font-medium text-ink-800">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-4 border-t border-sand-200">
                <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary w-full">
                  Book Appointment
                </Link>
                <div className="mt-3 flex gap-2">
                  <Link href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon border-sand-200 text-ink-700">
                    <IgIcon />
                  </Link>
                  <Link href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-icon border-sand-200 text-ink-700">
                    <FbIcon />
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </details>
      </div>
    </header>
  );
}
