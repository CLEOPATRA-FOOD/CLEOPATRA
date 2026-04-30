import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import {
  BurgerIcon,
  CrepeIcon,
  GratinIcon,
  PastaIcon,
  FritesIcon,
  RiceIcon,
  PizzaIcon,
  SandwichSubIcon,
  PaniniIcon,
  TacosIcon,
} from "@/components/food-icons";
import { useCart } from "@/lib/cart-context";

type Sizes = { M: number; L: number; XL: number };
type MenuItem = {
  id: string;
  name: string;
  desc?: string;
  price?: number;
  sizes?: Sizes;
};
type Category = {
  key: string;
  title: string;
  subtitle: string;
  Icon: typeof BurgerIcon;
  items: MenuItem[];
};

const categories: Category[] = [
  {
    key: "pizza",
    title: "Pizza",
    subtitle: "Le Festin Romain",
    Icon: PizzaIcon,
    items: [
      { id: "pizza-marguerite", name: "Marguerite", desc: "Tomates, olives, fromage", sizes: { M: 250, L: 500, XL: 700 } },
      { id: "pizza-sicilienne", name: "Sicilienne", desc: "Tomates, champignons, fromage", sizes: { M: 350, L: 700, XL: 1100 } },
      { id: "pizza-algeroise", name: "Algéroise", desc: "Tomates, viande hachée, olives, fromage", sizes: { M: 450, L: 900, XL: 1300 } },
      { id: "pizza-pecheur", name: "Pêcheur", desc: "Tomates, olives, fromage, thon", sizes: { M: 400, L: 800, XL: 1200 } },
      { id: "pizza-3fromages", name: "3 Fromages", desc: "Tomates, trois fromages, olives", sizes: { M: 500, L: 1000, XL: 1500 } },
      { id: "pizza-vegetarienne", name: "Végétarienne", desc: "Champignons, olives, fromage, oignon, poivrons", sizes: { M: 350, L: 700, XL: 1100 } },
      { id: "pizza-cleopatre", name: "Cléopâtre", desc: "Spécialité de la maison", sizes: { M: 800, L: 1200, XL: 2400 } },
      { id: "pizza-chicken", name: "Chicken", desc: "Champignons, olives, fromage, poulet", sizes: { M: 500, L: 1000, XL: 1500 } },
      { id: "pizza-4saisons", name: "Quatre Saisons", desc: "Viande hachée, fromage, champignons", sizes: { M: 600, L: 1200, XL: 1800 } },
      { id: "pizza-royal", name: "Royal", desc: "Viande hachée, fromage, thon, poulet", sizes: { M: 600, L: 1200, XL: 1800 } },
      { id: "pizza-mama", name: "Mama", desc: "Crème fraîche, oignon, poivrons, fromage", sizes: { M: 450, L: 900, XL: 1300 } },
      { id: "pizza-mexicaine", name: "Mexicaine", desc: "Tomates, chawarma, piments, oignon, maïs", sizes: { M: 400, L: 800, XL: 1100 } },
      { id: "pizza-boizzi", name: "Boizzi", desc: "Crème fraîche, persil, curcuma", sizes: { M: 400, L: 800, XL: 1100 } },
      { id: "pizza-supplement", name: "Supplément Fromage", price: 150 },
    ],
  },
  {
    key: "burger",
    title: "Burger",
    subtitle: "L'Empire du Pain",
    Icon: BurgerIcon,
    items: [
      { id: "burger-simple", name: "Burger Simple", price: 250 },
      { id: "burger-fromage", name: "Fromage", price: 250 },
      { id: "burger-double", name: "Double Burger", price: 350 },
      { id: "burger-cheese", name: "Cheeseburger", price: 200 },
      { id: "burger-chicken", name: "Chicken Burger", price: 250 },
      { id: "burger-big", name: "Big Burger", price: 350 },
      { id: "burger-mexicaine", name: "Mexicaine", price: 250 },
    ],
  },
  {
    key: "sandwich",
    title: "Sandwich",
    subtitle: "Matlou3 & Melfouf",
    Icon: SandwichSubIcon,
    items: [
      { id: "sand-fajitas", name: "Fajitas", price: 300 },
      { id: "sand-chawarma", name: "Chawarma", price: 250 },
      { id: "sand-poulet", name: "Poulet", price: 250 },
      { id: "sand-kebda", name: "Kebda", price: 300 },
      { id: "sand-viande", name: "Viande Hachée", price: 250 },
      { id: "sand-escalope", name: "Escalope", price: 250 },
      { id: "sand-3fromage", name: "3 Fromage", price: 250 },
      { id: "sand-marine", name: "Mariné", price: 250 },
      { id: "sand-marine-piquant", name: "Mariné Piquant", price: 250 },
      { id: "sand-kebab", name: "Kebab", price: 250 },
      { id: "sand-maqloub", name: "Maqloub", price: 300 },
    ],
  },
  {
    key: "panini",
    title: "Panini",
    subtitle: "Le Pain Pressé",
    Icon: PaniniIcon,
    items: [
      { id: "panini-3fromage", name: "3 Fromage", price: 200 },
      { id: "panini-poulet", name: "Poulet", price: 200 },
      { id: "panini-thon", name: "Thon", price: 200 },
      { id: "panini-viande", name: "Viande", price: 200 },
      { id: "panini-escalope", name: "Escalope", price: 200 },
      { id: "panini-3f-poulet", name: "3 Fromage + Poulet", price: 250 },
      { id: "panini-3f-thon", name: "3 Fromage + Thon", price: 250 },
      { id: "panini-3f-viande", name: "3 Fromage + Viande", price: 250 },
      { id: "panini-3f-escalope", name: "3 Fromage + Escalope", price: 250 },
    ],
  },
  {
    key: "tacos",
    title: "Tacos",
    subtitle: "Royaume Mexicain",
    Icon: TacosIcon,
    items: [
      { id: "tacos-poulet-chawarma", name: "Poulet / Chawarma", sizes: { M: 350, L: 700, XL: 1000 } },
      { id: "tacos-viande-kebda", name: "Viande / Kebda", sizes: { M: 450, L: 900, XL: 1300 } },
      { id: "tacos-escalope", name: "Tacos Escalope", sizes: { M: 400, L: 750, XL: 1100 } },
      { id: "tacos-mixte", name: "Tacos Mixte", sizes: { M: 500, L: 1000, XL: 1500 } },
      { id: "tacos-gratine", name: "Tacos Gratiné", sizes: { M: 600, L: 1200, XL: 1800 } },
    ],
  },
  {
    key: "crepe",
    title: "Crêpe",
    subtitle: "Le Voile Sucré",
    Icon: CrepeIcon,
    items: [
      { id: "crepe-simple", name: "Crêpe Simple", price: 300 },
      { id: "crepe-1f", name: "Crêpe (1 fruit au choix)", price: 350 },
      { id: "crepe-2f", name: "Crêpe (2 fruits au choix)", price: 400 },
      { id: "crepe-3f", name: "Crêpe (3 fruits au choix)", price: 450 },
      { id: "crepe-complet", name: "Crêpe Complet", price: 500 },
      { id: "crepe-cleopatra", name: "Crêpe Cleopatra", price: 600 },
    ],
  },
  {
    key: "gratin",
    title: "Gratin",
    subtitle: "Le Festin Doré",
    Icon: GratinIcon,
    items: [
      { id: "gratin-poulet", name: "Gratin Poulet", price: 500 },
      { id: "gratin-viande", name: "Gratin Viande", price: 600 },
      { id: "gratin-mixte", name: "Gratin Mixte", price: 600 },
    ],
  },
  {
    key: "pasta",
    title: "Pasta",
    subtitle: "Les Fils du Nil",
    Icon: PastaIcon,
    items: [
      { id: "pasta-blanche", name: "Pasta Sauce Blanche", price: 500 },
      { id: "pasta-mexicain", name: "Pasta Mexicain", price: 500 },
      { id: "pasta-poulet", name: "Pasta Poulet", price: 550 },
      { id: "pasta-bolognaise", name: "Pasta Bolognaise", price: 600 },
      { id: "pasta-3fromages", name: "Pasta 3 Fromages", price: 700 },
    ],
  },
  {
    key: "frites",
    title: "Frites",
    subtitle: "Les Bâtons d'Or",
    Icon: FritesIcon,
    items: [
      { id: "frites-fromage", name: "Frites Fromage", price: 250 },
      { id: "frites-cheese", name: "Cheese Frites", price: 300 },
      { id: "frites-chicken", name: "Chicken Frites", price: 400 },
      { id: "frites-crispy", name: "Crispy Frites", price: 500 },
      { id: "frites-viande", name: "Viande Frites", price: 500 },
    ],
  },
  {
    key: "riz",
    title: "Riz Basmati",
    subtitle: "Le Trésor du Désert",
    Icon: RiceIcon,
    items: [
      { id: "riz-crispy", name: "Riz + Crispy", price: 500 },
      { id: "riz-chicken", name: "Riz + Chicken", price: 500 },
      { id: "riz-viande", name: "Riz + Viande", price: 600 },
    ],
  },
];

export function FullMenu() {
  const [active, setActive] = useState<string>("pizza");
  const { addItem } = useCart();
  const current = categories.find((c) => c.key === active)!;

  return (
    <section
      id="full-menu"
      className="relative py-24 md:py-40 bg-papyrus overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <span className="royal-eyebrow">
            <span className="royal-diamond"></span>
            La Carte Complète
            <span className="royal-diamond"></span>
          </span>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-royal-red leading-[1.05] uppercase mb-6">
            Tout le <br />
            <span className="font-display text-royal-red italic font-normal lowercase tracking-wide">
              royaume
            </span>{" "}
            à table
          </h2>
          <p className="text-[#3d2c14] text-lg font-light max-w-xl mx-auto">
            Six dynasties de saveurs. Choisissez votre catégorie, ajoutez à la
            corbeille, et commandez votre festin.
          </p>
        </motion.div>

        {/* Category tabs — mobile: RTL horizontal scroll | desktop: grid */}
        <div
          dir="rtl"
          className="md:hidden -mx-6 px-6 mb-10 overflow-x-auto scrollbar-hide"
        >
          <div className="flex gap-3 w-max">
            {categories.map((cat, i) => {
              const Icon = cat.Icon;
              const isActive = cat.key === active;
              return (
                <motion.button
                  key={cat.key}
                  dir="ltr"
                  onClick={() => setActive(cat.key)}
                  className={`group relative w-[88px] h-[88px] flex flex-col items-center justify-center gap-1.5 border transition-all duration-300 flex-shrink-0 ${
                    isActive
                      ? "bg-[#1c130a] border-[#1c130a] text-[#C4973D] shadow-[0_6px_18px_rgba(28,19,10,0.4)]"
                      : "bg-[#f5ecd6] border-[#8C621C]/40 text-[#5C3F10] hover:border-[#8C621C]"
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  data-testid={`tab-mobile-${cat.key}`}
                >
                  <span
                    className={`absolute top-1.5 left-1.5 w-2 h-2 border-t border-l ${
                      isActive ? "border-[#C4973D]" : "border-[#8C621C]/60"
                    }`}
                  ></span>
                  <span
                    className={`absolute top-1.5 right-1.5 w-2 h-2 border-t border-r ${
                      isActive ? "border-[#C4973D]" : "border-[#8C621C]/60"
                    }`}
                  ></span>
                  <span
                    className={`absolute bottom-1.5 left-1.5 w-2 h-2 border-b border-l ${
                      isActive ? "border-[#C4973D]" : "border-[#8C621C]/60"
                    }`}
                  ></span>
                  <span
                    className={`absolute bottom-1.5 right-1.5 w-2 h-2 border-b border-r ${
                      isActive ? "border-[#C4973D]" : "border-[#8C621C]/60"
                    }`}
                  ></span>
                  <Icon className="w-6 h-6" strokeWidth={1.4} />
                  <span className="font-serif text-[10px] uppercase tracking-widest text-center leading-tight px-1">
                    {cat.title}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>

        <div className="hidden md:grid md:grid-cols-5 gap-4 mb-12 max-w-6xl mx-auto">
          {categories.map((cat, i) => {
            const Icon = cat.Icon;
            const isActive = cat.key === active;
            return (
              <motion.button
                key={cat.key}
                onClick={() => setActive(cat.key)}
                className={`group relative aspect-square flex flex-col items-center justify-center gap-2 border transition-all duration-300 ${
                  isActive
                    ? "bg-[#1c130a] border-[#1c130a] text-[#C4973D] shadow-[0_8px_24px_rgba(28,19,10,0.35)]"
                    : "bg-[#f5ecd6] border-[#8C621C]/40 text-[#5C3F10] hover:border-[#8C621C] hover:bg-[#f0e4cc]"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                data-testid={`tab-${cat.key}`}
              >
                <span
                  className={`absolute top-2 left-2 w-3 h-3 border-t border-l ${
                    isActive ? "border-[#C4973D]" : "border-[#8C621C]/60"
                  }`}
                ></span>
                <span
                  className={`absolute top-2 right-2 w-3 h-3 border-t border-r ${
                    isActive ? "border-[#C4973D]" : "border-[#8C621C]/60"
                  }`}
                ></span>
                <span
                  className={`absolute bottom-2 left-2 w-3 h-3 border-b border-l ${
                    isActive ? "border-[#C4973D]" : "border-[#8C621C]/60"
                  }`}
                ></span>
                <span
                  className={`absolute bottom-2 right-2 w-3 h-3 border-b border-r ${
                    isActive ? "border-[#C4973D]" : "border-[#8C621C]/60"
                  }`}
                ></span>
                <Icon className="w-9 h-9" strokeWidth={1.4} />
                <span className="font-serif text-sm uppercase tracking-widest">
                  {cat.title}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Active category panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl mx-auto bg-[#f5ecd6] border border-[#8C621C]/30 relative"
          >
            <span className="absolute top-3 left-3 w-6 h-6 border-t border-l border-[#8C621C] z-20"></span>
            <span className="absolute top-3 right-3 w-6 h-6 border-t border-r border-[#8C621C] z-20"></span>
            <span className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-[#8C621C] z-20"></span>
            <span className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-[#8C621C] z-20"></span>

            <div className="px-8 md:px-12 py-8 md:py-10 border-b border-[#8C621C]/20 flex items-center justify-between gap-6">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#1c130a] flex items-center justify-center flex-shrink-0">
                  <current.Icon
                    className="w-7 h-7 md:w-8 md:h-8 text-[#C4973D]"
                    strokeWidth={1.4}
                  />
                </div>
                <div>
                  <h3 className="font-serif text-3xl md:text-4xl text-[#1c130a] uppercase tracking-wide">
                    Menu {current.title}
                  </h3>
                  <p className="text-[#A0331C] text-xs tracking-[0.3em] uppercase italic">
                    {current.subtitle}
                  </p>
                </div>
              </div>
              <span className="hidden md:block text-xs tracking-[0.3em] uppercase text-[#5C3F10] font-mono">
                {current.items.length} pièces
              </span>
            </div>

            <ul className="divide-y divide-[#8C621C]/15">
              {current.items.map((item, idx) => {
                const num = String(idx + 1).padStart(2, "0");
                return (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: Math.min(idx, 8) * 0.04 }}
                    className="group flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 px-6 md:px-12 py-5 hover:bg-[#ebdfc8] transition-colors"
                    data-testid={`menu-item-${item.id}`}
                  >
                    <div className="flex items-start sm:items-center gap-4 flex-1 min-w-0">
                      <span className="font-mono text-[10px] text-[#8C621C] tracking-widest w-7 flex-shrink-0 pt-1 sm:pt-0">
                        {num}
                      </span>
                      <div className="flex-1 min-w-0">
                        <span className="font-serif text-lg md:text-xl text-[#1c130a] uppercase tracking-wide block">
                          {item.name}
                        </span>
                        {item.desc && (
                          <span className="text-[11px] text-[#5C3F10] italic block mt-0.5 leading-snug">
                            {item.desc}
                          </span>
                        )}
                      </div>
                    </div>

                    {item.sizes ? (
                      <div className="flex items-center gap-2 flex-shrink-0 self-end sm:self-center">
                        {(["M", "L", "XL"] as const).map((sz) => {
                          const price = item.sizes![sz];
                          return (
                            <button
                              key={sz}
                              onClick={() =>
                                addItem({
                                  id: `${item.id}-${sz}`,
                                  name: `${item.name} (${sz})`,
                                  price,
                                  category: current.title,
                                })
                              }
                              className="group/sz flex flex-col items-center justify-center min-w-[58px] px-2 py-1.5 bg-[#1c130a] text-[#C4973D] hover:bg-[#A0331C] hover:text-[#f5ecd6] transition-all duration-300 border border-[#1c130a]"
                              aria-label={`Ajouter ${item.name} taille ${sz}`}
                              data-testid={`add-${item.id}-${sz}`}
                            >
                              <span className="text-[10px] font-mono tracking-widest opacity-80">
                                {sz}
                              </span>
                              <span className="font-serif text-sm md:text-base leading-tight">
                                {price}
                                <span className="text-[9px] font-mono opacity-70 ml-0.5">
                                  DA
                                </span>
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="flex items-center gap-4 flex-shrink-0 self-end sm:self-center">
                        <span className="font-serif text-xl md:text-2xl text-gold-gradient">
                          {item.price}
                          <span className="text-xs font-mono text-[#8C621C] ml-1 tracking-widest">
                            DA
                          </span>
                        </span>
                        <button
                          onClick={() =>
                            addItem({
                              id: item.id,
                              name: item.name,
                              price: item.price!,
                              category: current.title,
                            })
                          }
                          className="w-10 h-10 flex items-center justify-center bg-[#1c130a] text-[#C4973D] hover:bg-[#A0331C] hover:text-[#f5ecd6] transition-all duration-300"
                          aria-label={`Ajouter ${item.name}`}
                          data-testid={`add-${item.id}`}
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        </AnimatePresence>

        <p className="text-center text-[#5C3F10] text-xs tracking-[0.3em] uppercase font-mono mt-10">
          Tous les prix sont en Dinar Algérien
        </p>
      </div>
    </section>
  );
}
