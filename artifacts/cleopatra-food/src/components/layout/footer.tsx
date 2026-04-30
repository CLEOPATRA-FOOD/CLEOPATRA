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
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/cleopatra_food_biskra/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-3 px-5 py-3 bg-[#1c130a] border border-[#C4973D]/40 hover:border-[#C4973D] transition-all duration-300 overflow-hidden"
              data-testid="social-instagram"
              aria-label="Instagram"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#A0331C]/0 via-[#C4973D]/15 to-[#A0331C]/0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
              <svg viewBox="0 0 24 24" className="relative w-5 h-5 text-[#C4973D]" fill="currentColor">
                <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.31-1.46.72-2.13 1.39C1.34 2.69.93 3.36.62 4.15.32 4.9.12 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.05 1.27.25 2.15.55 2.91.31.79.72 1.46 1.39 2.13.67.67 1.34 1.08 2.13 1.39.76.3 1.64.5 2.91.55C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.05 2.15-.25 2.91-.55.79-.31 1.46-.72 2.13-1.39.67-.67 1.08-1.34 1.39-2.13.3-.76.5-1.64.55-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.05-1.27-.25-2.15-.55-2.91-.31-.79-.72-1.46-1.39-2.13C21.31 1.34 20.64.93 19.85.62 19.1.32 18.22.12 16.95.07 15.67.01 15.26 0 12 0z"/>
                <path d="M12 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zm0 10.16A4 4 0 1 1 16 12a4 4 0 0 1-4 4z"/>
                <circle cx="18.41" cy="5.59" r="1.44"/>
              </svg>
              <span className="relative text-[10px] tracking-[0.3em] uppercase text-[#C4973D] font-mono">Instagram</span>
            </a>

            <a
              href="https://www.facebook.com/cleopatrafoodbiskra/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-3 px-5 py-3 bg-[#1c130a] border border-[#C4973D]/40 hover:border-[#C4973D] transition-all duration-300 overflow-hidden"
              data-testid="social-facebook"
              aria-label="Facebook"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#A0331C]/0 via-[#C4973D]/15 to-[#A0331C]/0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
              <svg viewBox="0 0 24 24" className="relative w-5 h-5 text-[#C4973D]" fill="currentColor">
                <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z"/>
              </svg>
              <span className="relative text-[10px] tracking-[0.3em] uppercase text-[#C4973D] font-mono">Facebook</span>
            </a>

            <a
              href="https://www.tiktok.com/@cleopatra.food.bi"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-3 px-5 py-3 bg-[#1c130a] border border-[#C4973D]/40 hover:border-[#C4973D] transition-all duration-300 overflow-hidden"
              data-testid="social-tiktok"
              aria-label="TikTok"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#A0331C]/0 via-[#C4973D]/15 to-[#A0331C]/0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
              <svg viewBox="0 0 24 24" className="relative w-5 h-5 text-[#C4973D]" fill="currentColor">
                <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"/>
              </svg>
              <span className="relative text-[10px] tracking-[0.3em] uppercase text-[#C4973D] font-mono">TikTok</span>
            </a>
          </div>

          {/* Handle text */}
          <p className="text-[#C4973D] font-serif text-sm tracking-widest uppercase">
            @cleopatrafoodbiskra
          </p>

          <div className="w-full pt-6 border-t border-[#C4973D]/10 flex flex-col items-center gap-3 text-center text-xs text-[#d8c8a4]">
            <p>© {new Date().getFullYear()} Cleopatra Food. Tous droits réservés.</p>
            <a
              href="https://www.instagram.com/ra2d_420i/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-[10px] tracking-[0.4em] uppercase text-[#C4973D]/70 hover:text-[#C4973D] transition-colors font-mono"
              data-testid="developer-credit"
            >
              <span>Developed by</span>
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
                <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.31-1.46.72-2.13 1.39C1.34 2.69.93 3.36.62 4.15.32 4.9.12 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.05 1.27.25 2.15.55 2.91.31.79.72 1.46 1.39 2.13.67.67 1.34 1.08 2.13 1.39.76.3 1.64.5 2.91.55C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.05 2.15-.25 2.91-.55.79-.31 1.46-.72 2.13-1.39.67-.67 1.08-1.34 1.39-2.13.3-.76.5-1.64.55-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.05-1.27-.25-2.15-.55-2.91-.31-.79-.72-1.46-1.39-2.13C21.31 1.34 20.64.93 19.85.62 19.1.32 18.22.12 16.95.07 15.67.01 15.26 0 12 0z"/>
                <path d="M12 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zm0 10.16A4 4 0 1 1 16 12a4 4 0 0 1-4 4z"/>
                <circle cx="18.41" cy="5.59" r="1.44"/>
              </svg>
              <span className="text-[#f5ecd6] group-hover:text-[#C4973D] transition-colors">@ra2d_420i</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
