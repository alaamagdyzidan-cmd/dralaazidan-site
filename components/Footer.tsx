import Link from "next/link";
import LogoMark from "./LogoMark";

const INSTAGRAM_URL = "https://www.instagram.com/dr.alaazidan/";
const FACEBOOK_URL = "https://www.facebook.com/share/1aB3gGmTu5/?mibextid=wwXIfr";
const WHATSAPP_URL = `https://wa.me/9607937512?text=${encodeURIComponent("Hello Dr. Alaa, I'd like to book an appointment.")}`;

export default function Footer() {
  return (
    <footer className="mt-32 bg-ink-900 text-sand-100">
      {/* Top CTA strip */}
      <div className="border-b border-ink-700 bg-gradient-to-r from-ink-900 via-rose-500/10 to-ink-900">
        <div className="container-page flex flex-col items-center justify-between gap-6 py-10 md:flex-row">
          <div>
            <p className="font-serif text-3xl text-sand-50 md:text-4xl">
              Ready to book?
            </p>
            <p className="mt-2 text-sm text-sand-200">
              Fastest reply on WhatsApp and Instagram.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Book Appointment
            </Link>
            <Link
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-sand-200/40 px-7 py-3.5 text-sm font-medium uppercase tracking-[0.2em] text-sand-50 transition hover:border-gold-300 hover:text-gold-300"
            >
              Follow on Instagram
            </Link>
          </div>
        </div>
      </div>

      <div className="container-page py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <LogoMark size="xl" variant="dark" />
              <p className="text-[10px] uppercase tracking-[0.3em] text-gold-300">
                Aesthetic &amp; Medical Doctor
              </p>
            </div>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-sand-200">
              5+ years of experience in aesthetic dermatology, practising at
              Life Care Medical Center, Hulhumalé. Botox, fillers, exosomes for
              hair, microneedling, and skin rejuvenation — delivered with
              medical precision and a preference for natural results.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <Link
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="social-icon border-ink-700 text-sand-100 hover:border-gold-400 hover:text-gold-300"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M12 2.2c3.2 0 3.6 0 4.85.07 1.17.05 1.8.25 2.23.42.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.42 2.23.06 1.27.07 1.65.07 4.85s0 3.6-.07 4.85c-.05 1.17-.25 1.8-.42 2.23a3.7 3.7 0 0 1-.9 1.38c-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.42-1.27.06-1.65.07-4.85.07s-3.6 0-4.85-.07c-1.17-.05-1.8-.25-2.23-.42a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.42-2.23C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.85c.05-1.17.25-1.8.42-2.23a3.7 3.7 0 0 1 .9-1.38 3.7 3.7 0 0 1 1.38-.9c.42-.16 1.06-.36 2.23-.42C8.4 2.2 8.8 2.2 12 2.2zm0 1.95c-3.15 0-3.5 0-4.74.06-1.07.05-1.65.23-2.04.38-.51.2-.88.44-1.26.82a3.4 3.4 0 0 0-.82 1.26c-.15.39-.33.97-.38 2.04-.06 1.24-.06 1.6-.06 4.74s0 3.5.06 4.74c.05 1.07.23 1.65.38 2.04.2.51.44.88.82 1.26.38.38.75.62 1.26.82.39.15.97.33 2.04.38 1.24.06 1.6.06 4.74.06s3.5 0 4.74-.06c1.07-.05 1.65-.23 2.04-.38.51-.2.88-.44 1.26-.82.38-.38.62-.75.82-1.26.15-.39.33-.97.38-2.04.06-1.24.06-1.6.06-4.74s0-3.5-.06-4.74c-.05-1.07-.23-1.65-.38-2.04a3.4 3.4 0 0 0-.82-1.26 3.4 3.4 0 0 0-1.26-.82c-.39-.15-.97-.33-2.04-.38-1.24-.06-1.6-.06-4.74-.06zm0 3.32a4.53 4.53 0 1 1 0 9.06 4.53 4.53 0 0 1 0-9.06zm0 7.47a2.94 2.94 0 1 0 0-5.88 2.94 2.94 0 0 0 0 5.88zm5.77-7.65a1.06 1.06 0 1 1-2.12 0 1.06 1.06 0 0 1 2.12 0z" />
                </svg>
              </Link>
              <Link
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="social-icon border-ink-700 text-sand-100 hover:border-gold-400 hover:text-gold-300"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M22 12.07C22 6.5 17.52 2 12 2S2 6.5 2 12.07c0 5.02 3.66 9.18 8.44 9.93v-7.02H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.91 3.78-3.91 1.1 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.45 2.91h-2.33v7.02C18.34 21.25 22 17.09 22 12.07z" />
                </svg>
              </Link>
              <Link
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="social-icon border-ink-700 text-sand-100 hover:border-gold-400 hover:text-gold-300"
              >
                <svg viewBox="0 0 32 32" fill="currentColor" className="h-5 w-5">
                  <path d="M16.225 4C9.484 4 4 9.484 4 16.225c0 2.293.645 4.43 1.748 6.293L4 28.78l6.408-1.633a12.16 12.16 0 0 0 5.817 1.475c6.74 0 12.225-5.484 12.225-12.225C28.45 9.484 22.965 4 16.225 4z" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-sand-50">Explore</h4>
            <ul className="mt-4 space-y-2 text-sm text-sand-200">
              <li><Link href="/about" className="hover:text-gold-300">About Dr. Alaa</Link></li>
              <li><Link href="/services" className="hover:text-gold-300">Services</Link></li>
              <li><Link href="/blog" className="hover:text-gold-300">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-gold-300">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-sand-50">Visit the clinic</h4>
            <address className="mt-4 not-italic text-sm text-sand-200">
              Life Care Medical Center<br />
              Lot no. 11382, Rabarugas Magu<br />
              Hulhumalé, Maldives
            </address>
            <ul className="mt-4 space-y-2 text-sm text-sand-200">
              <li><a href="tel:+9607937512" className="hover:text-gold-300">+960 793 7512</a></li>
              <li><a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-gold-300">@dr.alaazidan</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-ink-700 pt-8 text-xs text-sand-200 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Dr. Alaa Zidan · All rights reserved.</p>
          <p>Practising at Life Care Medical Center · Hulhumalé, Maldives</p>
        </div>
      </div>
    </footer>
  );
}
