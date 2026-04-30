import { motion } from "framer-motion";
import cleoBurgerImg from "@assets/cleopatra-burger_1777525384850.png";

export function Icon() {
  return (
    <section
      id="icone"
      className="relative overflow-hidden bg-[#0d0905] py-24 md:py-36"
    >
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 50%, #C4973D 0%, transparent 60%)",
        }}
      ></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <motion.div
            className="lg:col-span-7 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative">
              <span className="absolute -top-2 -left-2 w-10 h-10 border-t border-l border-[#C4973D] z-20"></span>
              <span className="absolute -top-2 -right-2 w-10 h-10 border-t border-r border-[#C4973D] z-20"></span>
              <span className="absolute -bottom-2 -left-2 w-10 h-10 border-b border-l border-[#C4973D] z-20"></span>
              <span className="absolute -bottom-2 -right-2 w-10 h-10 border-b border-r border-[#C4973D] z-20"></span>

              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0d0905] via-transparent to-[#C4973D]/10 z-10 mix-blend-overlay pointer-events-none"></div>
                <img
                  src={cleoBurgerImg}
                  alt="Cleopatra silhouette tenant un burger royal"
                  className="w-full h-auto block"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-5 text-[#f5ecd6]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            <span className="royal-eyebrow text-[#C4973D]">
              <span className="royal-diamond"></span>
              L'Icône
              <span className="royal-diamond"></span>
            </span>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-8 uppercase">
              La Reine
              <br />
              <span className="font-display italic font-normal lowercase tracking-wide text-[#C4973D]">
                du
              </span>{" "}
              Festin
            </h2>
            <div className="w-16 h-px bg-[#C4973D] mb-8"></div>
            <p className="text-[#ebdfc8]/85 text-lg font-light leading-relaxed mb-6">
              Trois mille ans après le règne, la souveraine choisit son trône :
              un pain doré, une couronne de saveurs. Le festin n'attend pas la
              permission — il l'impose.
            </p>
            <p className="text-[#C4973D]/80 text-sm tracking-[0.3em] uppercase font-mono">
              Cleopatra Food · Royauté de la Rue
            </p>

            <a
              href="#full-menu"
              className="inline-block mt-10 px-8 py-4 bg-[#C4973D] text-[#0d0905] text-[10px] tracking-[0.4em] uppercase font-bold hover:bg-[#f5ecd6] transition-colors duration-300"
            >
              Réclamer Sa Couronne
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
