import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-8">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
          <a href="#">
            <Image src="/Logo.png" alt="Curate" width={100} height={28} className="h-6 w-auto" />
          </a>
          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/curatebeauty.ai?igsh=ZWhlYmpnb2ozZWVl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-ink transition-colors"
              aria-label="Instagram"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a
              href="mailto:curatebeauty.ai@gmail.com"
              className="text-gray-500 hover:text-ink transition-colors inline-flex"
              aria-label="Email"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="pointer-events-none">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 7l-10 7L2 7" />
              </svg>
            </a>
          </div>
        </div>
        <p className="text-[13px] text-gray-500 text-center">
          &copy; 2025 Curate. No ads. No paid placements. Trust shouldn&apos;t be a luxury.
        </p>
      </div>
    </footer>
  );
}
