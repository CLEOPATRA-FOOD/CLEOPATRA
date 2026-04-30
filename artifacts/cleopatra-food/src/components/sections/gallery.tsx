import { motion } from "framer-motion";
import burgerImg from "@assets/cleo03_1777259152648.jpg";
import banquetImg from "@assets/cleo05_1777259152648.jpg";
import pizzaImg from "@assets/cleo01_1777259156232.jpg";
import tacosImg from "@assets/cleo02_1777259152649.jpg";
import crepeImg from "@assets/cleo07_1777259152649.jpg";

const tiles = [
  {
    src: burgerImg,
    alt: "Burger royal Cleopatra Food avec frites",
    label: "Crown Jewel",
    caption: "Le burger sacré",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: pizzaImg,
    alt: "Pizza Pêcheur thon olives Cleopatra Food",
    label: "La Reine du Four",
    caption: "La Pizza Royale",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    src: crepeImg,
    alt: "Crêpe Cleopatra chocolat banane",
    label: "Le Voile Sucré",
    caption: "Crêpe d'amour",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    src: banquetImg,
    alt: "Plat Cleopatra Food kefta riz salade frites",
    label: "Le Banquet",
    caption: "Une table digne d'une reine",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    src: tacosImg,
    alt: "Tacos grillés avec cornet de frites",
    label: "Le Trésor Doré",
    caption: "Tacos & frites du roi",
    span: "md:col-span-1 md:row-span-1",
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="relative py-24 md:py-40 bg-papyrus-dark overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          className="max-w-3xl mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <span className="royal-eyebrow">
            <span className="royal-diamond"></span>
            La Galerie
            <span className="royal-diamond"></span>
          </span>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-royal-red leading-[1.05] uppercase">
            Scènes <br />
            <span className="font-display text-royal-red italic font-normal lowercase tracking-wide">
              du
            </span>{" "}
            Banquet
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:auto-rows-[280px] gap-4 md:gap-6">
          {tiles.map((tile, index) => (
            <motion.div
              key={tile.src}
              className={`group relative overflow-hidden border border-[#8C621C]/30 hover:border-[#8C621C] transition-all duration-700 bg-[#1c130a] ${tile.span}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 1,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#1c130a] via-[#1c130a]/40 to-transparent"></div>
              <img
                src={tile.src}
                alt={tile.alt}
                className="w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 z-20 p-6 md:p-8">
                <span className="block text-[#C4973D] text-[10px] tracking-[0.3em] uppercase mb-2">
                  {tile.label}
                </span>
                <p className="font-serif text-xl md:text-2xl text-[#f5ecd6]">
                  {tile.caption}
                </p>
              </div>
              <span className="absolute top-4 left-4 w-4 h-4 border-t border-l border-[#C4973D] z-20"></span>
              <span className="absolute top-4 right-4 w-4 h-4 border-t border-r border-[#C4973D] z-20"></span>
              <span className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-[#C4973D] z-20 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <span className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-[#C4973D] z-20 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </motion.div>
          ))}
        </div>

        {/* Marquee strip of values */}
        <div className="mt-24 md:mt-32 border-y border-[#8C621C]/40 py-6 overflow-hidden">
          <div className="flex gap-12 md:gap-20 whitespace-nowrap animate-marquee">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-12 md:gap-20 items-center">
                {[
                  "Royal Quality",
                  "Late Night Hours",
                  "Algerian Soul",
                  "Golden Standard",
                  "Crafted Daily",
                  "Royal Quality",
                  "Late Night Hours",
                  "Algerian Soul",
                  "Golden Standard",
                  "Crafted Daily",
                ].map((word, j) => (
                  <span
                    key={`${i}-${j}`}
                    className="font-serif text-2xl md:text-3xl uppercase tracking-widest text-[#5C3F10] flex items-center gap-12 md:gap-20"
                  >
                    {word}
                    <span className="w-2 h-2 rotate-45 bg-[#8C621C]"></span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
