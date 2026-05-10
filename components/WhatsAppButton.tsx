import Link from "next/link";

const WHATSAPP_NUMBER = "9607937512"; // Dr. Alaa's WhatsApp & calls (+960 793 7512)
const PREFILLED_MESSAGE = "Hello Dr. Alaa, I'd like to book an appointment.";

export default function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(PREFILLED_MESSAGE)}`;
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition hover:scale-105 hover:bg-[#1ebe57] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/30 md:h-16 md:w-16"
    >
      <svg
        viewBox="0 0 32 32"
        fill="currentColor"
        className="h-7 w-7 md:h-8 md:w-8"
        aria-hidden="true"
      >
        <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.65-.516 2.65-1.762 0-.143-.014-.273-.043-.388-.05-.085-.27-.16-.673-.32a3.4 3.4 0 0 1-.27-.115c-.586-.243-1.45-.487-1.65-.487zM16.225 4C9.484 4 4 9.484 4 16.225c0 2.293.645 4.43 1.748 6.293L4 28.78l6.408-1.633a12.16 12.16 0 0 0 5.817 1.475c6.74 0 12.225-5.484 12.225-12.225C28.45 9.484 22.965 4 16.225 4zm0 22.36a10.13 10.13 0 0 1-5.16-1.402l-.372-.215-3.84.962.99-3.74-.215-.387a10.06 10.06 0 0 1-1.547-5.353c0-5.59 4.554-10.144 10.144-10.144s10.144 4.554 10.144 10.144-4.554 10.135-10.144 10.135z" />
      </svg>
    </Link>
  );
}
