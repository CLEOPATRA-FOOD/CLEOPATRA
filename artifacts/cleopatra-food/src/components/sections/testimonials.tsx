import { motion } from "framer-motion";

const quotes = [
  {
    text: "Un sandwich qui m'a fait oublier mes ennemis. Cleopatra n'aurait pas fait mieux.",
    author: "Yacine M.",
    role: "Royal Patron",
    city: "Alger",
    rating: 5,
  },
  {
    text: "Le tacos ici, c'est pas un repas — c'est un couronnement. Je reviens chaque vendredi à 02h.",
    author: "Lina B.",
    role: "Late Night Loyalist",
    city: "Oran",
    rating: 5,
  },
  {
    text: "Frites dorées, sauce qui coule comme du Nil. Ce burger mérite un trône.",
    author: "Karim D.",
    role: "Self-proclaimed Pharaoh",
    city: "Alger",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-24 md:py-40 bg-papyrus-dark overflow-hidden"
    >
      {/* Decorative hieroglyph border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8C621C]/40 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8C621C]/40 to-transparent"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <span className="royal-eyebrow">
            <span className="royal-diamond"></span>
            Voix du Royaume
            <span className="royal-diamond"></span>
          </span>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-royal-red leading-[1.05] uppercase mb-6">
            Inscriptions <br />
            <span className="font-display text-royal-red italic font-normal lowercase tracking-wide">
              de la
            </span>{" "}
            Cour
          </h2>
          <p className="text-[#3d2c14] text-lg font-light max-w-xl mx-auto">
            Les témoignages de ceux qui ont festoyé à notre table.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {quotes.map((q, i) => (
            <motion.div
              key={q.author}
              className="relative bg-[#f5ecd6] border border-[#8C621C]/30 p-8 md:p-10 hover:border-[#8C621C] transition-all duration-500 group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.9, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Giant decorative quote mark */}
              <div className="absolute top-6 right-6 font-serif text-7xl md:text-8xl leading-none text-[#A0331C]/15 select-none pointer-events-none">
                "
              </div>

              {/* corner ornaments */}
              <span className="absolute top-3 left-3 w-5 h-5 border-t border-l border-[#8C621C] z-10"></span>
              <span className="absolute top-3 right-3 w-5 h-5 border-t border-r border-[#8C621C] z-10"></span>
              <span className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-[#8C621C] z-10"></span>
              <span className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-[#8C621C] z-10"></span>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: q.rating }).map((_, s) => (
                  <svg
                    key={s}
                    className="w-3.5 h-3.5"
                    viewBox="0 0 20 20"
                    fill="#A0331C"
                  >
                    <path d="M10 1l2.5 6.5L19 8.5l-5 4.5 1.5 6.5L10 16l-5.5 3.5L6 13.5 1 9l6.5-1L10 1z" />
                  </svg>
                ))}
              </div>

              <p className="font-serif text-xl md:text-2xl text-[#1c130a] leading-snug mb-8 italic relative z-10">
                {q.text}
              </p>

              <div className="pt-6 border-t border-[#8C621C]/20 flex items-end justify-between">
                <div>
                  <p className="font-serif text-base text-[#1c130a] uppercase tracking-wider">
                    {q.author}
                  </p>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-[#A0331C] mt-1">
                    {q.role}
                  </p>
                </div>
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#5C3F10] font-mono">
                  {q.city}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto pt-12 border-t border-[#8C621C]/30"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {[
            { num: "12K+", label: "Festins Servis" },
            { num: "4.9", label: "Étoiles Royales" },
            { num: "98%", label: "Reines Satisfaites" },
            { num: "30 min", label: "Livraison Express" },
          ].map((b) => (
            <div key={b.label} className="text-center">
              <p className="font-serif text-3xl md:text-4xl text-gold-gradient mb-2">
                {b.num}
              </p>
              <p className="text-[10px] uppercase tracking-widest text-[#5C3F10]">
                {b.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
