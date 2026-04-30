import { motion } from "framer-motion";
import { Phone, MapPin, Truck } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 md:py-36 bg-papyrus-dark overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch max-w-6xl mx-auto">
          {/* Left: Arabic welcome panel */}
          <motion.div
            className="lg:col-span-5 bg-espresso text-[#f5ecd6] p-10 md:p-12 relative overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="absolute top-3 left-3 w-6 h-6 border-t border-l border-[#C4973D]"></span>
            <span className="absolute top-3 right-3 w-6 h-6 border-t border-r border-[#C4973D]"></span>
            <span className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-[#C4973D]"></span>
            <span className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-[#C4973D]"></span>

            <Truck className="w-10 h-10 text-[#C4973D] mb-6" strokeWidth={1.4} />

            <p className="text-[10px] tracking-[0.4em] uppercase text-[#C4973D] mb-4">
              Welcome · أهلاً بكم
            </p>

            <p
              className="font-serif text-2xl md:text-3xl leading-snug text-[#f5ecd6] mb-8"
              dir="rtl"
              lang="ar"
            >
              مرحبا بزبائننا الكرام
              <br />
              <span className="text-[#C4973D]">التوصيل متوفر</span> على الرقم
              التالي
            </p>

            <div className="space-y-3 pt-6 border-t border-[#C4973D]/30" dir="ltr">
              <a
                href="tel:+213697179737"
                className="flex items-center justify-between gap-4 group"
                data-testid="phone-1"
              >
                <span className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#C4973D]" />
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#d8c8a4]">
                    Ligne 01
                  </span>
                </span>
                <span className="font-mono text-base md:text-lg text-[#f5ecd6] group-hover:text-[#C4973D] transition-colors">
                  +213 697 17 97 37
                </span>
              </a>
              <a
                href="tel:+213659277737"
                className="flex items-center justify-between gap-4 group"
                data-testid="phone-2"
              >
                <span className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#C4973D]" />
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#d8c8a4]">
                    Ligne 02
                  </span>
                </span>
                <span className="font-mono text-base md:text-lg text-[#f5ecd6] group-hover:text-[#C4973D] transition-colors">
                  +213 659 27 77 37
                </span>
              </a>
            </div>
          </motion.div>

          {/* Right: location + CTAs */}
          <motion.div
            className="lg:col-span-7 flex flex-col justify-between"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div>
              <span className="royal-eyebrow">
                <span className="royal-diamond"></span>
                Notre Adresse
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-royal-red leading-[1.05] uppercase mb-8">
                Trouvez-nous <br />
                <span className="font-display text-royal-red italic font-normal lowercase tracking-wide">
                  à
                </span>{" "}
                Biskra
              </h2>

              <div className="bg-[#f5ecd6] border border-[#8C621C]/30 p-8 md:p-10 relative mb-6">
                <div className="flex items-start gap-4 mb-5">
                  <MapPin className="w-5 h-5 text-[#A0331C] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-[10px] tracking-[0.4em] uppercase text-[#8C621C] mb-2">
                      Adresse
                    </p>
                    <p className="font-serif text-xl text-[#1c130a] leading-snug">
                      Avenue Zaatcha, à côté du Labo Photographie Baba Hnini
                    </p>
                    <p className="font-serif text-base text-[#5C3F10] mt-1 tracking-wide">
                      Biskra · 07000 · Algérie
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <a
                href="tel:+213697179737"
                className="group relative inline-flex items-center justify-center px-6 py-4 bg-[#1c130a] text-[#C4973D] font-serif uppercase tracking-widest overflow-hidden transition-transform hover:scale-[1.02]"
              >
                <div className="absolute inset-0 w-full h-full bg-[#A0331C] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <span className="relative font-bold text-sm flex items-center gap-3">
                  <Phone className="w-4 h-4" /> Appeler · اتصل
                </span>
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Avenue+Zaatcha+Biskra+07000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-4 border border-[#8C621C] text-[#5C3F10] uppercase tracking-widest hover:bg-[#8C621C]/10 transition-all duration-300 text-sm font-medium gap-3"
              >
                <MapPin className="w-4 h-4" /> Itinéraire
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
