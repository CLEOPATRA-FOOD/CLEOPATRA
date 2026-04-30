import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";

const locations = [
  {
    city: "Alger",
    cityEn: "Algiers",
    title: "Le Trône Capitale",
    address: "123 Rue Didouche Mourad",
    district: "Centre-ville · Alger",
    phone: "+213 555 12 34 56",
    hours: "11:00 — 02:00",
    fridayHours: "14:00 — 03:00",
    tag: "Flagship",
  },
  {
    city: "Oran",
    cityEn: "Oran",
    title: "Le Palais de la Mer",
    address: "45 Boulevard de la Soummam",
    district: "Front de mer · Oran",
    phone: "+213 555 78 90 12",
    hours: "12:00 — 02:00",
    fridayHours: "14:00 — 03:00",
    tag: "Coastal Branch",
  },
];

export function Locations() {
  return (
    <section id="locations" className="relative py-24 md:py-40 bg-papyrus overflow-hidden">
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
            Nos Temples
            <span className="w-12 h-px bg-[#8C621C]"></span>
          </span>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#1c130a] leading-[1.05] uppercase mb-6">
            Trouvez votre <br />
            <span className="text-gold-gradient italic font-light lowercase tracking-normal">
              royaume
            </span>
          </h2>
          <p className="text-[#3d2c14] text-lg font-light max-w-xl mx-auto">
            Deux palais. Deux capitales. Une seule dynastie.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.city}
              className="group relative bg-[#f5ecd6] border border-[#8C621C]/30 hover:border-[#8C621C] transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* corner ornaments */}
              <span className="absolute top-3 left-3 w-6 h-6 border-t border-l border-[#8C621C] z-20"></span>
              <span className="absolute top-3 right-3 w-6 h-6 border-t border-r border-[#8C621C] z-20"></span>
              <span className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-[#8C621C] z-20"></span>
              <span className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-[#8C621C] z-20"></span>

              {/* Stylized "map" header */}
              <div className="relative h-48 bg-espresso overflow-hidden">
                <svg
                  className="absolute inset-0 w-full h-full opacity-60"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <pattern
                      id={`grid-${loc.city}`}
                      width="40"
                      height="40"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M 40 0 L 0 0 0 40"
                        fill="none"
                        stroke="#C4973D"
                        strokeWidth="0.4"
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill={`url(#grid-${loc.city})`} />
                </svg>

                {/* Decorative location lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
                  <path
                    d="M 0 100 Q 100 60, 200 100 T 400 100"
                    stroke="#C4973D"
                    strokeWidth="1"
                    fill="none"
                    opacity="0.4"
                  />
                  <path
                    d="M 0 130 Q 150 90, 250 140 T 400 110"
                    stroke="#C4973D"
                    strokeWidth="1"
                    fill="none"
                    opacity="0.3"
                  />
                </svg>

                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="relative"
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="w-16 h-16 rounded-full bg-[#A0331C] flex items-center justify-center shadow-[0_8px_30px_rgba(160,51,28,0.6)]">
                      <MapPin className="w-7 h-7 text-[#f5ecd6]" />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-2 bg-[#A0331C]/30 rounded-full blur-sm"></div>
                  </motion.div>
                </div>

                <div className="absolute top-4 left-6 text-[10px] tracking-[0.4em] uppercase text-[#C4973D]">
                  {loc.tag}
                </div>
                <div className="absolute top-4 right-6 text-[10px] tracking-[0.4em] uppercase text-[#C4973D] font-mono">
                  No. 0{i + 1}
                </div>
              </div>

              <div className="p-8 md:p-10">
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="font-serif text-4xl md:text-5xl text-[#1c130a] uppercase tracking-wide">
                    {loc.city}
                  </h3>
                  <span className="text-xs tracking-[0.3em] uppercase text-[#A0331C]">
                    {loc.cityEn}
                  </span>
                </div>
                <p className="text-[#8C621C] text-sm tracking-[0.2em] uppercase mb-8 italic font-serif">
                  {loc.title}
                </p>

                <div className="space-y-5 mb-8">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-4 h-4 text-[#8C621C] mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-[#1c130a] text-sm font-medium">{loc.address}</p>
                      <p className="text-[#5C3F10] text-xs uppercase tracking-widest mt-1">
                        {loc.district}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-4 h-4 text-[#8C621C] mt-1 flex-shrink-0" />
                    <a
                      href={`tel:${loc.phone.replace(/\s/g, "")}`}
                      className="text-[#1c130a] text-sm font-medium hover:text-[#A0331C] transition-colors"
                    >
                      {loc.phone}
                    </a>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="w-4 h-4 text-[#8C621C] mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex justify-between text-sm text-[#1c130a]">
                        <span>Lun — Jeu, Sam — Dim</span>
                        <span className="font-mono font-medium">{loc.hours}</span>
                      </div>
                      <div className="flex justify-between text-sm text-[#A0331C] mt-1">
                        <span>Vendredi (Late)</span>
                        <span className="font-mono font-medium">{loc.fridayHours}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="#order"
                  className="block w-full text-center px-5 py-3 bg-[#1c130a] text-[#C4973D] text-[10px] tracking-[0.3em] uppercase hover:bg-[#A0331C] hover:text-[#f5ecd6] transition-all duration-300"
                >
                  Itinéraire · Get Directions
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
