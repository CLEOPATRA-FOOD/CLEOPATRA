import { motion } from "framer-motion";

export function Story() {
  return (
    <section id="story" className="py-24 md:py-40 relative bg-papyrus overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            className="order-2 lg:order-1 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="aspect-[4/5] relative overflow-hidden border border-[#8C621C]/30 bg-[#1c130a]">
              <div className="absolute inset-0 bg-gradient-to-t from-[#1c130a] via-transparent to-transparent z-10"></div>
              <img
                src="/images/cleopatra-burger.png"
                alt="Cleopatra silhouette holding a royal burger"
                className="object-cover w-full h-full"
              />
              <div className="absolute bottom-6 left-6 z-20">
                <span className="block text-[10px] tracking-[0.4em] uppercase text-[#C4973D] mb-2">
                  L'Icône
                </span>
                <p className="font-serif text-xl text-[#f5ecd6]">La Reine du Festin</p>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-[#8C621C]/40 rounded-full z-0 hidden md:block"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 border border-[#8C621C]/30 rounded-full z-0 hidden md:block"></div>
            <div className="absolute -top-3 -right-3 w-12 h-12 border border-[#8C621C]/50 z-0 hidden md:block rotate-45"></div>
          </motion.div>

          <motion.div
            className="order-1 lg:order-2 flex flex-col items-start"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <span className="royal-eyebrow">
              <span className="royal-diamond"></span>
              Notre Identité
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-royal-red mb-8 leading-tight uppercase">
              Une Salle de Banquet <br />
              <span className="font-display text-royal-red italic font-normal lowercase text-3xl md:text-4xl tracking-wide">
                dans un
              </span>{" "}
              <br />
              Temple de Rue
            </h2>

            <div className="space-y-6 text-[#3d2c14] font-sans text-lg font-light leading-relaxed max-w-lg">
              <p>
                Nous traitons les humbles tacos, burgers, et sandwichs comme des
                festins royaux. Chez Cleopatra Food, la feuille d'or côtoie le
                papier gras des emballages, et les hiéroglyphes éclairent le
                néon de la nuit.
              </p>
              <p>
                Enracinée dans les saveurs nord-africaines et algériennes, notre
                cuisine sert le pouvoir, la décadence, et un goût sans
                compromis. Ce n'est pas du fast food — c'est un empire bâti
                pour les envies de 3h du matin.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-[#8C621C]/20 pt-8 w-full max-w-lg">
              <div>
                <p className="font-serif text-3xl text-gold-gradient mb-1">100%</p>
                <p className="text-[10px] uppercase tracking-widest text-[#5C3F10]">
                  Royal Quality
                </p>
              </div>
              <div className="border-x border-[#8C621C]/20 px-4">
                <p className="font-serif text-3xl text-gold-gradient mb-1">03:00</p>
                <p className="text-[10px] uppercase tracking-widest text-[#5C3F10]">
                  Late Night
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl text-gold-gradient mb-1">02</p>
                <p className="text-[10px] uppercase tracking-widest text-[#5C3F10]">
                  Cities
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
