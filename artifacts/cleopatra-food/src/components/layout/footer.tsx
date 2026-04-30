import logoImg from "@assets/305243862_504731711657679_4080429380307416125_n_1777234528149.jpg";

export function Footer() {
  return (
    <footer className="bg-espresso py-24 border-t border-[#C4973D]/20 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-[#C4973D]/50 to-transparent"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">
          <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="w-24 h-24 rounded-full overflow-hidden border border-[#C4973D]/40 mb-6 relative bg-[#1c130a]">
              <img
                src={logoImg}
                alt="Cleopatra Food"
                className="object-cover w-full h-full"
                style={{ filter: "invert(1) brightness(1.2) sepia(1) hue-rotate(0deg) saturate(3.5)" }}
              />
            </div>
            <h3 className="font-serif text-2xl tracking-widest uppercase mb-4 text-[#f5ecd6]">
              Cleopatra Food
            </h3>
            <p className="text-[#d8c8a4] font-sans font-light leading-relaxed max-w-sm mb-8">
              A regal-meets-street fast food brand treating the humble tacos,
              burgers, and sandwiches like royal feasts. Ancient empire energy
              meets late-night street food.
            </p>
          </div>

          <div className="md:col-span-7">
            <div>
              <h4 className="font-serif text-lg text-[#C4973D] tracking-widest uppercase mb-6">
                Hours
              </h4>
              <ul className="space-y-4 text-[#d8c8a4] font-light">
                <li className="flex justify-between">
                  <span>Mon - Thu</span>
                  <span className="text-[#f5ecd6]">11:00 - 02:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Friday</span>
                  <span className="text-[#f5ecd6]">14:00 - 03:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Sat - Sun</span>
                  <span className="text-[#f5ecd6]">12:00 - 03:00</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-[#C4973D]/20 flex flex-col items-center gap-8">
          {/* Social icons row */}
          <div className="flex items-center gap-5">
            <a
              href="https://www.instagram.com/cleopatra_food_biskra/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-14 h-14 rounded-full flex items-center justify-center border-2 border-[#E60000] bg-[#1c130a] hover:bg-[#E60000] transition-all duration-300 shadow-[0_6px_18px_rgba(230,0,0,0.35)]"
              data-testid="social-instagram"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" className="w-7 h-7 text-[#E60000] group-hover:text-[#fff5d6] transition-colors" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>

            <a
              href="https://www.facebook.com/cleopatrafoodbiskra/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-14 h-14 rounded-full flex items-center justify-center border-2 border-[#E60000] bg-[#1c130a] hover:bg-[#E60000] transition-all duration-300 shadow-[0_6px_18px_rgba(230,0,0,0.35)]"
              data-testid="social-facebook"
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24" className="w-7 h-7 text-[#E60000] group-hover:text-[#fff5d6] transition-colors" fill="currentColor">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
              </svg>
            </a>

            <a
              href="https://www.tiktok.com/@cleopatra.food.bi"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-14 h-14 rounded-full flex items-center justify-center border-2 border-[#E60000] bg-[#1c130a] hover:bg-[#E60000] transition-all duration-300 shadow-[0_6px_18px_rgba(230,0,0,0.35)]"
              data-testid="social-tiktok"
              aria-label="TikTok"
            >
              <svg viewBox="0 0 24 24" className="w-7 h-7 text-[#E60000] group-hover:text-[#fff5d6] transition-colors" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.66a8.16 8.16 0 0 0 4.77 1.52V6.73a4.85 4.85 0 0 1-1.84-.04z" />
              </svg>
            </a>
          </div>

          {/* Handle text */}
          <p className="text-[#C4973D] font-serif text-sm tracking-widest uppercase">
            @cleopatrafoodbiskra
          </p>

          <div className="w-full pt-6 border-t border-[#C4973D]/10 text-center text-xs text-[#d8c8a4]">
            © {new Date().getFullYear()} Cleopatra Food. Tous droits réservés.
          </div>
        </div>
      </div>
    </footer>
  );
}
