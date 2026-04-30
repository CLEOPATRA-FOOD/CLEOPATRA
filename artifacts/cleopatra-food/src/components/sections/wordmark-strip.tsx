import wordmarkImg from "@assets/cleopatra-wordmark-transparent.png";

export function WordmarkStrip() {
  return (
    <section className="relative bg-espresso py-10 md:py-14 overflow-hidden border-y border-[#C4973D]/20">
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dotsStrip" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="#C4973D" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotsStrip)" />
        </svg>
      </div>

      <div className="relative flex gap-16 md:gap-24 whitespace-nowrap animate-marquee items-center">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="flex items-center gap-16 md:gap-24 flex-shrink-0">
            <img
              src={wordmarkImg}
              alt=""
              className="h-10 md:h-14 w-auto flex-shrink-0"
              style={{ filter: "brightness(1.3) saturate(1.4)" }}
              aria-hidden="true"
            />
            <span className="w-2 h-2 rotate-45 bg-[#C4973D] flex-shrink-0"></span>
            <span className="font-serif text-sm md:text-base uppercase tracking-[0.4em] text-[#C4973D] flex-shrink-0">
              Royal Street Food
            </span>
            <span className="w-2 h-2 rotate-45 bg-[#C4973D] flex-shrink-0"></span>
          </div>
        ))}
      </div>
    </section>
  );
}
