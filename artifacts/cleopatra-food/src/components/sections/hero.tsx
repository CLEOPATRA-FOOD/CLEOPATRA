import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useMemo } from "react";
import logoImg from "@assets/305243862_504731711657679_4080429380307416125_n_1777234528149.jpg";
const wordmarkImg = "/images/cleopatra-wordmark.png";

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBack = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const yMid = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const yFront = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const logoScale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);

  // Generate floating gold particles deterministically
  const particles = useMemo(
    () =>
      Array.from({ length: 38 }, (_, i) => ({
        id: i,
        x: (i * 137.5) % 100,
        y: (i * 53.7) % 100,
        size: 1 + ((i * 7) % 4),
        delay: (i % 10) * 0.4,
        duration: 8 + ((i * 3) % 7),
      })),
    [],
  );

  const stars = useMemo(
    () =>
      Array.from({ length: 80 }, (_, i) => ({
        id: i,
        x: (i * 79.3) % 100,
        y: (i * 41.7) % 60,
        size: 0.6 + ((i * 11) % 3) * 0.4,
        opacity: 0.3 + ((i * 13) % 7) * 0.1,
        delay: (i % 8) * 0.5,
      })),
    [],
  );

  return (
    <section
      ref={ref}
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-24 pb-20"
      style={{
        background:
          "radial-gradient(ellipse at 50% 30%, #2a0a08 0%, #1a0606 35%, #0a0303 70%, #000 100%)",
      }}
    >
      {/* Layer 1 — Cosmic stars (deepest back) */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ y: yBack, opacity: heroOpacity }}
      >
        {stars.map((s) => (
          <motion.span
            key={s.id}
            className="absolute rounded-full bg-[#fde6a8]"
            style={{
              left: `${s.x}%`,
              top: `${s.y}%`,
              width: `${s.size}px`,
              height: `${s.size}px`,
              boxShadow: `0 0 ${s.size * 4}px rgba(253,230,168,0.8)`,
            }}
            animate={{ opacity: [s.opacity, s.opacity + 0.4, s.opacity] }}
            transition={{
              duration: 3 + (s.id % 4),
              repeat: Infinity,
              delay: s.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      {/* Layer 2 — Massive sun-disc behind everything */}
      <motion.div
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
        style={{ y: yBack, opacity: heroOpacity }}
      >
        <div
          className="w-[1100px] h-[1100px] max-w-[140vw] max-h-[140vw] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(230,0,0,0.35) 0%, rgba(196,151,61,0.18) 30%, rgba(160,51,28,0.08) 50%, transparent 75%)",
            filter: "blur(40px)",
          }}
        />
      </motion.div>

      {/* Layer 3 — Hieroglyph column lines (mid back) */}
      <motion.div
        className="absolute inset-0 z-0 opacity-[0.07] pointer-events-none"
        style={{ y: yMid }}
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="hieroColumns"
              x="0"
              y="0"
              width="200"
              height="600"
              patternUnits="userSpaceOnUse"
            >
              <line
                x1="100"
                y1="0"
                x2="100"
                y2="600"
                stroke="#C4973D"
                strokeWidth="0.5"
              />
              <circle cx="100" cy="80" r="6" fill="none" stroke="#C4973D" strokeWidth="0.6" />
              <path d="M 90 160 L 110 160 L 100 175 Z" fill="#C4973D" />
              <rect x="92" y="240" width="16" height="3" fill="#C4973D" />
              <path d="M 88 320 Q 100 305, 112 320 Q 100 335, 88 320 Z" fill="none" stroke="#C4973D" strokeWidth="0.6" />
              <circle cx="100" cy="400" r="3" fill="#C4973D" />
              <line x1="92" y1="480" x2="108" y2="480" stroke="#C4973D" strokeWidth="0.6" />
              <line x1="96" y1="488" x2="104" y2="488" stroke="#C4973D" strokeWidth="0.6" />
              <path d="M 92 560 L 100 545 L 108 560" fill="none" stroke="#C4973D" strokeWidth="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hieroColumns)" />
        </svg>
      </motion.div>

      {/* Layer 4 — Pyramid silhouettes at the horizon */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-[1] pointer-events-none"
        style={{ y: yFront }}
      >
        <svg
          viewBox="0 0 1600 400"
          preserveAspectRatio="none"
          className="w-full h-[40vh] min-h-[260px]"
        >
          <defs>
            <linearGradient id="pyrGrad1" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#3a1d0e" />
              <stop offset="100%" stopColor="#0a0303" />
            </linearGradient>
            <linearGradient id="pyrGrad2" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#2a1408" />
              <stop offset="100%" stopColor="#000" />
            </linearGradient>
            <linearGradient id="sandGrad" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#0a0303" stopOpacity="0" />
              <stop offset="60%" stopColor="#0a0303" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#000" />
            </linearGradient>
          </defs>
          {/* Far pyramids */}
          <polygon points="200,400 450,180 700,400" fill="url(#pyrGrad2)" />
          <polygon points="900,400 1200,140 1500,400" fill="url(#pyrGrad2)" />
          {/* Front pyramids */}
          <polygon points="-100,400 250,100 600,400" fill="url(#pyrGrad1)" />
          <polygon points="700,400 1050,80 1400,400" fill="url(#pyrGrad1)" />
          <polygon points="1300,400 1600,180 1900,400" fill="url(#pyrGrad1)" />
          {/* Sand fade */}
          <rect x="0" y="200" width="1600" height="200" fill="url(#sandGrad)" />
        </svg>
      </motion.div>

      {/* Layer 5 — Floating gold ember particles */}
      <div className="absolute inset-0 z-[2] pointer-events-none">
        {particles.map((p) => (
          <motion.span
            key={p.id}
            className="absolute rounded-full"
            style={{
              left: `${p.x}%`,
              bottom: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              background: "#fde6a8",
              boxShadow: `0 0 ${p.size * 6}px rgba(253,230,168,0.9), 0 0 ${p.size * 12}px rgba(230,0,0,0.4)`,
            }}
            animate={{
              y: [0, -120, -240],
              x: [0, p.size * 8, -p.size * 6],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Vignette */}
      <div
        className="absolute inset-0 z-[3] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.7) 100%)",
        }}
      />

      {/* CONTENT */}
      <div className="container relative z-10 px-6 md:px-12 flex flex-col items-center text-center">
        {/* Eyebrow tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-10"
        >
          <span className="inline-flex items-center gap-3 px-5 py-2 border border-[#C4973D]/40 text-[#C4973D] tracking-[0.4em] text-[10px] uppercase backdrop-blur-md bg-black/30 font-semibold">
            <span className="w-1.5 h-1.5 rotate-45 bg-[#E60000] shadow-[0_0_8px_#E60000]"></span>
            Established · Royal Street Food
            <span className="w-1.5 h-1.5 rotate-45 bg-[#E60000] shadow-[0_0_8px_#E60000]"></span>
          </span>
        </motion.div>

        {/* THE EYE — hero centerpiece, glowing in the night */}
        <motion.div
          className="relative mb-12"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          style={{ scale: logoScale }}
        >
          {/* Outer breathing red halo */}
          <motion.div
            className="absolute inset-0 -m-32 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(230,0,0,0.35) 0%, transparent 60%)",
              filter: "blur(30px)",
            }}
            animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Rotating outer gold ring with cardinal diamonds */}
          <motion.div
            className="absolute inset-0 -m-10 md:-m-14 rounded-full border border-[#C4973D]/50"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          >
            <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rotate-45 bg-[#E60000] shadow-[0_0_12px_#E60000]"></span>
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 rotate-45 bg-[#E60000] shadow-[0_0_12px_#E60000]"></span>
            <span className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-[#C4973D] shadow-[0_0_10px_#C4973D]"></span>
            <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-3 h-3 rotate-45 bg-[#C4973D] shadow-[0_0_10px_#C4973D]"></span>
          </motion.div>

          {/* Counter-rotating fine ring */}
          <motion.div
            className="absolute inset-0 -m-20 md:-m-28 rounded-full border border-dashed border-[#C4973D]/20"
            animate={{ rotate: -360 }}
            transition={{ duration: 110, repeat: Infinity, ease: "linear" }}
          ></motion.div>

          {/* The eye disc */}
          <div
            className="relative w-44 h-44 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden flex items-center justify-center"
            style={{
              background: "#1a0606",
              boxShadow:
                "0 0 60px rgba(230,0,0,0.6), 0 0 120px rgba(196,151,61,0.4), inset 0 0 30px rgba(0,0,0,0.5)",
              border: "2px solid #C4973D",
            }}
          >
            <img
              src={logoImg}
              alt="Cleopatra Food"
              className="w-full h-full object-cover"
              style={{ filter: "brightness(1.05) contrast(1.1) saturate(1.2)" }}
            />
            {/* Inner gold rim glow */}
            <div className="absolute inset-0 rounded-full pointer-events-none ring-1 ring-[#fde6a8]/30 shadow-[inset_0_0_40px_rgba(196,151,61,0.4)]"></div>
          </div>
        </motion.div>

        {/* WORDMARK — cinematic red logotype */}
        <motion.div
          className="relative w-full max-w-4xl mb-10 px-4"
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.4, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Top ornament */}
          <div className="flex items-center justify-center gap-3 mb-7">
            <span className="h-px flex-1 max-w-[160px] bg-gradient-to-r from-transparent via-[#C4973D]/60 to-[#E60000]"></span>
            <span className="w-2.5 h-2.5 rotate-45 bg-[#E60000] shadow-[0_0_12px_#E60000]"></span>
            <span className="text-[10px] tracking-[0.6em] uppercase text-[#C4973D] font-bold">
              Royal Wordmark
            </span>
            <span className="w-2.5 h-2.5 rotate-45 bg-[#E60000] shadow-[0_0_12px_#E60000]"></span>
            <span className="h-px flex-1 max-w-[160px] bg-gradient-to-l from-transparent via-[#C4973D]/60 to-[#E60000]"></span>
          </div>

          {/* Pulsing red aura behind wordmark */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[300%] pointer-events-none"
            aria-hidden
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(230,0,0,0.55) 0%, rgba(196,151,61,0.2) 35%, transparent 70%)",
                filter: "blur(50px)",
              }}
            ></div>
          </motion.div>

          {/* Wordmark with intense glow */}
          <div className="relative wordmark-fade-in">
            <img
              src={wordmarkImg}
              alt="Cleopatra Food"
              className="relative w-full h-auto select-none"
              style={{
                filter:
                  "drop-shadow(0 0 8px rgba(230, 0, 0, 0.8)) drop-shadow(0 0 30px rgba(230, 0, 0, 0.6)) drop-shadow(0 8px 30px rgba(196,151,61,0.4))",
              }}
            />
            <div className="wordmark-shimmer-mask" aria-hidden></div>
          </div>

          {/* Tagline */}
          <p className="text-center mt-6 text-[10px] tracking-[0.7em] uppercase text-[#C4973D] font-bold">
            <span className="text-[#E60000]">◆</span>{" "}
            Empire <span className="text-[#C4973D]/40">·</span> Royaume{" "}
            <span className="text-[#C4973D]/40">·</span> Festin{" "}
            <span className="text-[#E60000]">◆</span>
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          className="max-w-xl mx-auto text-base md:text-lg text-[#e8d5a3] font-sans font-light mb-12 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
        >
          L'empire ancien rencontre la rue moderne. Festoyez comme une reine —
          <span className="text-[#C4973D]"> dorés</span>,
          <span className="text-[#C4973D]"> épicés</span>,
          <span className="text-[#E60000]"> impérialement délicieux</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <a
            href="#full-menu"
            className="group relative inline-flex items-center justify-center px-9 py-4 font-serif uppercase tracking-widest overflow-hidden transition-all hover:scale-[1.04] min-w-[240px]"
            style={{
              background:
                "linear-gradient(135deg, #E60000 0%, #A0331C 100%)",
              boxShadow:
                "0 0 30px rgba(230,0,0,0.55), 0 8px 25px rgba(0,0,0,0.5)",
              border: "1px solid rgba(253,230,168,0.4)",
            }}
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background:
                  "linear-gradient(135deg, #C4973D 0%, #E60000 100%)",
              }}
            ></div>
            <span className="relative font-bold text-sm text-[#fff5d6] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rotate-45 bg-[#fde6a8]"></span>
              Découvrir le Menu
              <span className="w-1.5 h-1.5 rotate-45 bg-[#fde6a8]"></span>
            </span>
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center justify-center px-9 py-4 border border-[#C4973D]/60 text-[#C4973D] uppercase tracking-widest hover:bg-[#C4973D]/10 hover:border-[#C4973D] transition-all duration-300 min-w-[240px] text-sm font-semibold backdrop-blur-sm bg-black/30"
          >
            Nous Contacter
          </a>
        </motion.div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-[#C4973D]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
      >
        <span className="text-[10px] uppercase tracking-[0.4em] font-mono">
          Scroll
        </span>
        <div className="w-[1px] h-14 bg-[#C4973D]/30 relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#E60000] to-[#C4973D]"
            animate={{ top: ["-50%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "linear" }}
          />
        </div>
      </motion.div>

      {/* Bottom fade into next section (papyrus) */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 z-[4] pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(235,223,200,0.4) 70%, #ebdfc8 100%)",
        }}
      />
    </section>
  );
}
