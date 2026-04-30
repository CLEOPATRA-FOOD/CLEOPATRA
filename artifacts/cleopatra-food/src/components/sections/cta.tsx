import { motion } from "framer-motion";
import logoImg from "@assets/305243862_504731711657679_4080429380307416125_n_1777234528149.jpg";

export function Cta() {
  return (
    <section id="order" className="relative py-24 md:py-40 overflow-hidden bg-espresso">
      {/* Subtle banquet image overlay */}
      <div className="absolute inset-0 z-0 opacity-25">
        <img
          src="/images/banquet-table.png"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1c130a]/80 via-[#1c130a]/60 to-[#1c130a]"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="mb-12 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden bg-[#1c130a] border border-[#C4973D]/40">
              <img
                src={logoImg}
                alt="Cleopatra Food"
                className="w-full h-full object-cover"
                style={{ filter: "invert(1) brightness(1.2) sepia(1) hue-rotate(0deg) saturate(3.5)" }}
              />
            </div>
          </motion.div>

          <motion.span
            className="inline-flex items-center gap-3 mb-8 text-xs tracking-[0.4em] uppercase font-semibold"
            style={{ color: "#E04E2E" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="w-10 h-px" style={{ background: "linear-gradient(to right, transparent, #E04E2E)" }}></span>
            <span className="w-1.5 h-1.5 rotate-45" style={{ background: "#E04E2E", boxShadow: "0 0 8px rgba(224,78,46,0.6)" }}></span>
            Votre Trône Vous Attend
            <span className="w-1.5 h-1.5 rotate-45" style={{ background: "#E04E2E", boxShadow: "0 0 8px rgba(224,78,46,0.6)" }}></span>
            <span className="w-10 h-px" style={{ background: "linear-gradient(to left, transparent, #E04E2E)" }}></span>
          </motion.span>

          <motion.h2
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#f5ecd6] leading-[1.05] uppercase mb-10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            Couronnez <br />
            <span
              className="font-display italic font-normal lowercase tracking-wide"
              style={{
                color: "#E04E2E",
                textShadow: "0 2px 0 rgba(122,36,18,0.5), 0 8px 20px rgba(224,78,46,0.45)",
              }}
            >
              votre
            </span>{" "}
            Faim
          </motion.h2>

          <motion.p
            className="text-[#d8c8a4] text-lg md:text-xl font-light max-w-2xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Commandez maintenant et recevez votre festin royal en moins de 30
            minutes. Livraison disponible à travers Alger et Oran.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <a
              href="tel:+213000000000"
              className="group relative inline-flex items-center justify-center px-10 py-5 bg-[#C4973D] text-[#1c130a] font-serif uppercase tracking-widest overflow-hidden transition-transform hover:scale-105 min-w-[240px]"
            >
              <div className="absolute inset-0 w-full h-full bg-[#FFDF73] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
              <span className="relative font-bold text-base">
                Commander · Order
              </span>
            </a>
            <a
              href="#menu"
              className="group inline-flex items-center justify-center px-10 py-5 border border-[#C4973D]/60 text-[#C4973D] uppercase tracking-widest hover:border-[#C4973D] hover:bg-[#C4973D]/10 transition-all duration-300 min-w-[240px]"
            >
              <span className="font-medium text-sm">Voir le Menu</span>
            </a>
          </motion.div>

          <motion.div
            className="mt-20 grid grid-cols-3 gap-4 md:gap-12 max-w-2xl mx-auto pt-12 border-t border-[#C4973D]/20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <div className="text-center">
              <p className="font-serif text-3xl md:text-4xl text-gold-shine mb-2">30</p>
              <p className="text-[10px] md:text-xs uppercase tracking-widest text-[#d8c8a4]">
                Minutes Max
              </p>
            </div>
            <div className="text-center border-x border-[#C4973D]/20">
              <p className="font-serif text-3xl md:text-4xl text-gold-shine mb-2">02</p>
              <p className="text-[10px] md:text-xs uppercase tracking-widest text-[#d8c8a4]">
                Villes
              </p>
            </div>
            <div className="text-center">
              <p className="font-serif text-3xl md:text-4xl text-gold-shine mb-2">03h</p>
              <p className="text-[10px] md:text-xs uppercase tracking-widest text-[#d8c8a4]">
                Late Night
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
