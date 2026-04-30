import { motion } from "framer-motion";
import logoImg from "@assets/305243862_504731711657679_4080429380307416125_n_1777234528149.jpg";
import wordmarkImg from "@assets/cleopatra-wordmark-transparent.png";

const palette = [
  { name: "Espresso", hex: "#1c130a", text: "Foreground" },
  { name: "Bronze", hex: "#5C3F10", text: "Deep Accent" },
  { name: "Antique Gold", hex: "#8C621C", text: "Primary" },
  { name: "Hammered Gold", hex: "#C4973D", text: "Highlight" },
  { name: "Royal Red", hex: "#A0331C", text: "Wordmark" },
  { name: "Papyrus", hex: "#ebdfc8", text: "Background" },
];

export function Identity() {
  return (
    <section id="identity" className="relative py-24 md:py-36 bg-papyrus-dark overflow-hidden">
      {/* Repeating brand mark watermark */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div className="grid grid-cols-6 md:grid-cols-10 gap-12 p-12">
          {Array.from({ length: 60 }).map((_, i) => (
            <div key={i} className="aspect-square rounded-full overflow-hidden">
              <img src={logoImg} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <span className="text-[#5C3F10] text-xs tracking-[0.4em] uppercase mb-6 inline-flex items-center gap-4">
            <span className="w-12 h-px bg-[#8C621C]"></span>
            La Hoja Visuelle
            <span className="w-12 h-px bg-[#8C621C]"></span>
          </span>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#1c130a] leading-[1.05] uppercase mb-6">
            L'Identité <br />
            <span className="text-gold-gradient italic font-light lowercase tracking-normal">visuelle</span>
          </h2>
          <p className="text-[#3d2c14] text-lg font-light max-w-xl mx-auto">
            Une marque construite comme un temple — chaque détail, chaque trait, chaque ton est sacré.
          </p>
        </motion.div>

        {/* Logo showcase block */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {/* Big logo card */}
          <motion.div
            className="lg:col-span-2 relative bg-[#f5ecd6] border border-[#8C621C]/30 p-12 md:p-20 flex flex-col items-center justify-center overflow-hidden min-h-[420px]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="absolute top-4 left-4 w-6 h-6 border-t border-l border-[#8C621C]"></span>
            <span className="absolute top-4 right-4 w-6 h-6 border-t border-r border-[#8C621C]"></span>
            <span className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-[#8C621C]"></span>
            <span className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-[#8C621C]"></span>

            <div className="absolute top-6 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.4em] uppercase text-[#8C621C]">
              Primary Mark
            </div>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.4em] uppercase text-[#8C621C]">
              Cleopatra · Food · 2026
            </div>

            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full bg-[#ebdfc8] flex items-center justify-center shadow-[0_30px_80px_-20px_rgba(140,98,28,0.4)] overflow-hidden">
              <img src={logoImg} alt="Cleopatra Food primary mark" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          {/* Inverted variant */}
          <motion.div
            className="relative bg-espresso border border-[#8C621C]/30 p-10 flex flex-col items-center justify-center overflow-hidden min-h-[420px]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="absolute top-4 left-4 w-6 h-6 border-t border-l border-[#C4973D]"></span>
            <span className="absolute top-4 right-4 w-6 h-6 border-t border-r border-[#C4973D]"></span>
            <span className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-[#C4973D]"></span>
            <span className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-[#C4973D]"></span>

            <div className="absolute top-6 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.4em] uppercase text-[#C4973D]">
              Inverted
            </div>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.4em] uppercase text-[#C4973D]">
              Dark Background
            </div>

            <div className="relative w-44 h-44 md:w-52 md:h-52 rounded-full bg-[#1c130a] flex items-center justify-center overflow-hidden border border-[#C4973D]/40">
              <img
                src={logoImg}
                alt="Cleopatra Food inverted mark"
                className="w-full h-full object-cover"
                style={{ filter: "invert(1) brightness(1.1) sepia(1) hue-rotate(0deg) saturate(3.5)" }}
              />
            </div>
          </motion.div>
        </div>

        {/* Wordmark / Logotype showcase — full width */}
        <motion.div
          className="relative bg-[#f5ecd6] border border-[#8C621C]/30 p-10 md:p-16 mb-6 lg:mb-8 overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.9 }}
        >
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-[#8C621C]/20">
            <span className="text-[10px] tracking-[0.4em] uppercase text-[#5C3F10]">
              Wordmark · Logotype
            </span>
            <span className="text-[10px] tracking-[0.4em] uppercase text-[#A0331C]">
              Royal Red
            </span>
          </div>
          <div className="flex items-center justify-center py-6 md:py-10">
            <img
              src={wordmarkImg}
              alt="Cleopatra Food wordmark"
              className="w-full max-w-2xl h-auto drop-shadow-[0_6px_18px_rgba(160,51,28,0.3)]"
            />
          </div>
          <div className="mt-8 pt-6 border-t border-[#8C621C]/20 grid grid-cols-3 gap-4 text-center md:text-left">
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#8C621C] mb-1">
                Style
              </p>
              <p className="font-serif text-sm text-[#1c130a] uppercase">Geometric Hellenic</p>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#8C621C] mb-1">
                Usage
              </p>
              <p className="font-serif text-sm text-[#1c130a] uppercase">Headers · Packaging</p>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#8C621C] mb-1">
                Colour
              </p>
              <p className="font-serif text-sm text-[#1c130a] uppercase">#A0331C</p>
            </div>
          </div>
        </motion.div>

        {/* Typography card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          <motion.div
            className="bg-[#f5ecd6] border border-[#8C621C]/30 p-10 md:p-12 relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-[#8C621C]/20">
              <span className="text-[10px] tracking-[0.4em] uppercase text-[#5C3F10]">Display Serif</span>
              <span className="text-[10px] tracking-[0.4em] uppercase text-[#8C621C]">Cinzel</span>
            </div>
            <p className="font-serif text-7xl md:text-8xl text-[#1c130a] leading-none mb-2 uppercase">Aa</p>
            <p className="font-serif text-2xl text-[#3d2c14] mb-6 uppercase tracking-wider">Royal Voice</p>
            <p className="font-serif text-sm text-[#3d2c14] tracking-wider uppercase">
              ABCDEFGHIJKLMNOPQRSTUVWXYZ <br />
              0123456789 · & · ?!
            </p>
          </motion.div>

          <motion.div
            className="bg-[#f5ecd6] border border-[#8C621C]/30 p-10 md:p-12 relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-[#8C621C]/20">
              <span className="text-[10px] tracking-[0.4em] uppercase text-[#5C3F10]">Body Sans</span>
              <span className="text-[10px] tracking-[0.4em] uppercase text-[#8C621C]">Manrope</span>
            </div>
            <p className="font-sans text-7xl md:text-8xl text-[#1c130a] leading-none mb-2 font-light">Aa</p>
            <p className="font-sans text-2xl text-[#3d2c14] mb-6 font-medium">Modern Street</p>
            <p className="font-sans text-sm text-[#3d2c14] font-light leading-relaxed">
              The quick golden fox feasts upon the lazy banquet table.
              <br />
              0123456789 — A modern voice for the eternal queen.
            </p>
          </motion.div>
        </div>

        {/* Palette */}
        <motion.div
          className="bg-[#f5ecd6] border border-[#8C621C]/30 p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-[#8C621C]/20">
            <span className="text-[10px] tracking-[0.4em] uppercase text-[#5C3F10]">Colour Palette</span>
            <span className="text-[10px] tracking-[0.4em] uppercase text-[#8C621C]">06 Royal Tones</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {palette.map((c, i) => (
              <motion.div
                key={c.hex}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              >
                <div
                  className="aspect-square w-full mb-3 border border-[#8C621C]/20 group-hover:scale-[1.03] transition-transform duration-500"
                  style={{ backgroundColor: c.hex }}
                ></div>
                <p className="font-serif text-sm text-[#1c130a] uppercase tracking-wider">{c.name}</p>
                <p className="font-mono text-[10px] text-[#5C3F10] tracking-widest mt-1">{c.hex}</p>
                <p className="text-[10px] uppercase tracking-widest text-[#8C621C] mt-1">{c.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
