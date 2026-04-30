import { motion } from "framer-motion";
import tacosImg from "@assets/Capture_d’écran_2026-04-26_210927_1777234290324_1777525223870.png";
import sandwichImg from "@assets/Capture_d’écran_2026-04-26_210947_1777234290324_1777525223872.png";
import burgerImg from "@assets/Capture_d’écran_2026-04-26_211006_1777234290325_1777525229504.png";

const offers = [
  {
    id: "01",
    name: "Tacos Poulet",
    sub: "Frites · Boisson",
    desc: "Le festin nocturne. Tendre poulet épicé, pain doré, frites croustillantes et boisson glacée. La couronne du roi de la rue.",
    price: "700",
    image: tacosImg,
    crown: "Royal Feast",
  },
  {
    id: "02",
    name: "Sandwich",
    sub: "Frites · Boisson",
    desc: "Roulé d'or et de feu. Viande saisie, fraîcheur croquante, sauces en cascade — un sandwich qui ne demande pas la permission.",
    price: "500",
    image: sandwichImg,
    crown: "House Classic",
  },
  {
    id: "03",
    name: "Le Burger",
    sub: "Frites · Boisson",
    desc: "L'empire entre deux pains. Bœuf juteux, fromage fondu, oignons rouges, et la sauce qui a fait tomber la dynastie.",
    price: "500",
    image: burgerImg,
    crown: "Crown Jewel",
  },
];

export function Menu() {
  return (
    <section id="menu" className="relative py-24 md:py-40 bg-papyrus overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20 md:mb-28"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="royal-eyebrow">
            <span className="royal-diamond"></span>
            Les Offres Royales
            <span className="royal-diamond"></span>
          </span>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-royal-red leading-[1.05] mb-6 uppercase">
            Le Menu <br />
            <span className="font-display text-royal-red italic font-normal lowercase tracking-wide">
              de la
            </span>{" "}
            Reine
          </h2>
          <p className="text-[#3d2c14] text-lg font-light max-w-xl mx-auto">
            Trois trônes. Trois empires de saveur. Choisissez votre couronne.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.id}
              className="group relative"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
                delay: index * 0.15,
              }}
            >
              <div className="relative bg-[#f5ecd6] border border-[#8C621C]/30 group-hover:border-[#8C621C] transition-all duration-500 overflow-hidden">
                {/* gold corner ornaments */}
                <span className="absolute top-3 left-3 w-6 h-6 border-t border-l border-[#8C621C] z-20"></span>
                <span className="absolute top-3 right-3 w-6 h-6 border-t border-r border-[#8C621C] z-20"></span>
                <span className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-[#8C621C] z-20"></span>
                <span className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-[#8C621C] z-20"></span>

                <div className="absolute top-6 right-6 z-20 text-right">
                  <span className="block text-[10px] tracking-[0.3em] uppercase text-[#8C621C] font-mono">
                    Offre
                  </span>
                  <span className="block font-serif text-2xl text-[#1c130a]">
                    {offer.id}
                  </span>
                </div>

                <div className="relative aspect-square overflow-hidden bg-[#ebdfc8]">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#C4973D]/10 via-transparent to-transparent z-10 mix-blend-overlay"></div>
                  <img
                    src={offer.image}
                    alt={offer.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="px-3 py-1 bg-[#1c130a] text-[#C4973D] text-[10px] tracking-[0.25em] uppercase font-bold">
                      {offer.crown}
                    </span>
                  </div>
                </div>

                <div className="p-8 md:p-10">
                  <h3 className="font-serif text-3xl md:text-4xl text-[#1c130a] uppercase tracking-wide mb-1">
                    {offer.name}
                  </h3>
                  <p className="text-[#8C621C] text-xs tracking-[0.3em] uppercase mb-6">
                    {offer.sub}
                  </p>
                  <p className="text-[#3d2c14] text-sm font-light leading-relaxed mb-8 min-h-[80px]">
                    {offer.desc}
                  </p>

                  <div className="flex items-end justify-between border-t border-[#8C621C]/20 pt-6">
                    <div>
                      <span className="block text-[10px] tracking-[0.3em] uppercase text-[#5C3F10] mb-1">
                        Prix
                      </span>
                      <div className="flex items-baseline gap-2">
                        <span className="font-serif text-5xl text-gold-gradient leading-none">
                          {offer.price}
                        </span>
                        <span className="text-[#8C621C] tracking-widest text-sm font-mono">
                          DA
                        </span>
                      </div>
                    </div>
                    <a
                      href="#order"
                      className="px-5 py-3 bg-[#1c130a] text-[#C4973D] text-[10px] tracking-[0.3em] uppercase hover:bg-[#5C3F10] transition-all duration-300"
                    >
                      Commander
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <p className="text-[#5C3F10] text-sm tracking-[0.2em] uppercase font-mono">
            Tous les prix sont en Dinar Algérien · Livraison disponible
          </p>
        </motion.div>
      </div>
    </section>
  );
}
