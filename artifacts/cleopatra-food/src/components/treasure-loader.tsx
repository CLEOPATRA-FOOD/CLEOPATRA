import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useMemo } from "react";

const wordmarkImg = "/images/cleopatra-wordmark.png";

type Stage = "sealed" | "opening" | "revealed" | "gone";

export function TreasureLoader() {
  const [stage, setStage] = useState<Stage>("sealed");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const t1 = setTimeout(() => setStage("opening"), 1500);
    const t2 = setTimeout(() => setStage("revealed"), 2700);
    const t3 = setTimeout(() => {
      setStage("gone");
      document.body.style.overflow = "";
    }, 4400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      document.body.style.overflow = "";
    };
  }, []);

  // Burst particles
  const burstParticles = useMemo(
    () =>
      Array.from({ length: 60 }, (_, i) => {
        const angle = (i / 60) * Math.PI * 2;
        const dist = 250 + ((i * 17) % 250);
        return {
          id: i,
          x: Math.cos(angle) * dist,
          y: Math.sin(angle) * dist,
          size: 2 + ((i * 5) % 5),
          delay: 0.05 + ((i % 8) * 0.04),
          duration: 1.4 + ((i * 3) % 6) * 0.15,
        };
      }),
    [],
  );

  // Sparkle dust in background
  const dust = useMemo(
    () =>
      Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: (i * 79.3) % 100,
        y: (i * 41.7) % 100,
        size: 1 + ((i * 7) % 3),
        delay: (i % 12) * 0.2,
      })),
    [],
  );

  return (
    <AnimatePresence>
      {stage !== "gone" && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          style={{
            background:
              "radial-gradient(ellipse at center, #2a0a08 0%, #1a0606 35%, #050202 80%, #000 100%)",
          }}
        >
          {/* Floating dust */}
          <div className="absolute inset-0 pointer-events-none">
            {dust.map((d) => (
              <motion.span
                key={d.id}
                className="absolute rounded-full bg-[#fde6a8]"
                style={{
                  left: `${d.x}%`,
                  top: `${d.y}%`,
                  width: `${d.size}px`,
                  height: `${d.size}px`,
                  boxShadow: `0 0 ${d.size * 3}px rgba(253,230,168,0.7)`,
                }}
                animate={{ opacity: [0.2, 0.8, 0.2], y: [0, -20, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: d.delay,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* Center stage */}
          <div className="relative w-[420px] h-[520px] max-w-[90vw] max-h-[80vh] flex items-center justify-center">
            {/* Background glow that grows when opening */}
            <motion.div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(230,0,0,0.6) 0%, rgba(196,151,61,0.4) 30%, transparent 70%)",
                filter: "blur(40px)",
              }}
              animate={{
                scale:
                  stage === "sealed" ? 0.6 : stage === "opening" ? 2.2 : 1.6,
                opacity:
                  stage === "sealed" ? 0.4 : stage === "opening" ? 1 : 0.7,
              }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            />

            {/* Burst flash on opening */}
            <AnimatePresence>
              {stage === "opening" && (
                <motion.div
                  className="absolute inset-0 rounded-full pointer-events-none"
                  initial={{ scale: 0.3, opacity: 0 }}
                  animate={{ scale: 3, opacity: [0, 1, 0] }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  style={{
                    background:
                      "radial-gradient(circle, rgba(253,230,168,0.95) 0%, rgba(230,0,0,0.4) 40%, transparent 70%)",
                    filter: "blur(20px)",
                  }}
                />
              )}
            </AnimatePresence>

            {/* The CARTOUCHE — an Egyptian sealed treasure container */}
            <div className="relative w-[280px] h-[420px] flex items-center justify-center">
              {/* Top half of cartouche */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-1/2 origin-bottom"
                animate={{
                  y:
                    stage === "sealed"
                      ? 0
                      : stage === "opening" || stage === "revealed"
                      ? -180
                      : -180,
                  rotateX:
                    stage === "sealed"
                      ? 0
                      : stage === "opening" || stage === "revealed"
                      ? -25
                      : -25,
                  opacity: stage === "revealed" ? 0 : 1,
                }}
                transition={{ duration: 1.1, ease: [0.7, 0, 0.3, 1] }}
                style={{ transformPerspective: 800 }}
              >
                <CartoucheHalf half="top" />
              </motion.div>

              {/* Bottom half of cartouche */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1/2 origin-top"
                animate={{
                  y:
                    stage === "sealed"
                      ? 0
                      : stage === "opening" || stage === "revealed"
                      ? 180
                      : 180,
                  rotateX:
                    stage === "sealed"
                      ? 0
                      : stage === "opening" || stage === "revealed"
                      ? 25
                      : 25,
                  opacity: stage === "revealed" ? 0 : 1,
                }}
                transition={{ duration: 1.1, ease: [0.7, 0, 0.3, 1] }}
                style={{ transformPerspective: 800 }}
              >
                <CartoucheHalf half="bottom" />
              </motion.div>

              {/* Seam glow line that pulses while sealed */}
              <AnimatePresence>
                {stage === "sealed" && (
                  <motion.div
                    className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[3px] mx-6 z-20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: 1.6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    style={{
                      background:
                        "linear-gradient(to right, transparent, #fde6a8 20%, #fff5d6 50%, #fde6a8 80%, transparent)",
                      boxShadow:
                        "0 0 14px #fde6a8, 0 0 30px rgba(230,0,0,0.7)",
                    }}
                  />
                )}
              </AnimatePresence>
            </div>

            {/* Burst particles flying outward */}
            <AnimatePresence>
              {(stage === "opening" || stage === "revealed") && (
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                  {burstParticles.map((p) => (
                    <motion.span
                      key={p.id}
                      className="absolute rounded-full"
                      initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                      animate={{
                        x: p.x,
                        y: p.y,
                        opacity: [0, 1, 0],
                        scale: [0, 1.2, 0.4],
                      }}
                      transition={{
                        duration: p.duration,
                        delay: p.delay,
                        ease: "easeOut",
                      }}
                      style={{
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                        background: p.id % 3 === 0 ? "#E60000" : "#fde6a8",
                        boxShadow: `0 0 ${p.size * 4}px ${
                          p.id % 3 === 0
                            ? "rgba(230,0,0,0.9)"
                            : "rgba(253,230,168,0.95)"
                        }`,
                      }}
                    />
                  ))}
                </div>
              )}
            </AnimatePresence>

            {/* The TREASURE — the wordmark revealed */}
            <AnimatePresence>
              {stage === "revealed" && (
                <motion.div
                  className="absolute inset-0 flex flex-col items-center justify-center px-4"
                  initial={{ opacity: 0, scale: 0.4, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 1.2 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <img
                    src={wordmarkImg}
                    alt="Cleopatra Food"
                    className="w-full max-w-[320px] h-auto select-none"
                    style={{
                      filter:
                        "drop-shadow(0 0 14px rgba(253,230,168,0.95)) drop-shadow(0 0 40px rgba(230,0,0,0.85)) drop-shadow(0 0 80px rgba(196,151,61,0.7))",
                    }}
                  />
                  <motion.p
                    className="mt-6 text-[10px] tracking-[0.7em] uppercase text-[#C4973D] font-bold"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    <span className="text-[#E60000]">◆</span>{" "}
                    Empire <span className="opacity-40">·</span> Royaume{" "}
                    <span className="opacity-40">·</span> Festin{" "}
                    <span className="text-[#E60000]">◆</span>
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Loading text — shown while sealed */}
          <AnimatePresence>
            {stage === "sealed" && (
              <motion.div
                className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <div className="flex items-center gap-2">
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      className="w-1.5 h-1.5 rotate-45 bg-[#C4973D]"
                      animate={{
                        opacity: [0.3, 1, 0.3],
                        boxShadow: [
                          "0 0 0 transparent",
                          "0 0 8px #C4973D",
                          "0 0 0 transparent",
                        ],
                      }}
                      transition={{
                        duration: 1.4,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>
                <span className="text-[10px] tracking-[0.5em] uppercase text-[#C4973D]/80 font-mono">
                  Ouverture du Trésor
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function CartoucheHalf({ half }: { half: "top" | "bottom" }) {
  // Half of an Egyptian cartouche — rounded ends with hieroglyph rows
  const isTop = half === "top";
  return (
    <div className="relative w-full h-full">
      <svg
        viewBox="0 0 280 210"
        className="w-full h-full"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id={`gold-${half}`}
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop offset="0%" stopColor="#fde6a8" />
            <stop offset="35%" stopColor="#C4973D" />
            <stop offset="100%" stopColor="#7a521a" />
          </linearGradient>
          <linearGradient
            id={`face-${half}`}
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop
              offset="0%"
              stopColor={isTop ? "#3a1d0e" : "#2a1408"}
            />
            <stop
              offset="100%"
              stopColor={isTop ? "#2a1408" : "#1a0606"}
            />
          </linearGradient>
          <filter id={`emboss-${half}`}>
            <feGaussianBlur stdDeviation="0.6" />
          </filter>
        </defs>

        {/* Cartouche shape — half of an oval with flat seam */}
        {isTop ? (
          <path
            d="M 30 210 L 30 60 Q 30 0, 140 0 Q 250 0, 250 60 L 250 210 Z"
            fill={`url(#face-${half})`}
            stroke={`url(#gold-${half})`}
            strokeWidth="4"
          />
        ) : (
          <path
            d="M 30 0 L 30 150 Q 30 210, 140 210 Q 250 210, 250 150 L 250 0 Z"
            fill={`url(#face-${half})`}
            stroke={`url(#gold-${half})`}
            strokeWidth="4"
          />
        )}

        {/* Inner gold border */}
        {isTop ? (
          <path
            d="M 42 210 L 42 62 Q 42 12, 140 12 Q 238 12, 238 62 L 238 210"
            fill="none"
            stroke="#C4973D"
            strokeWidth="0.8"
            opacity="0.6"
          />
        ) : (
          <path
            d="M 42 0 L 42 148 Q 42 198, 140 198 Q 238 198, 238 148 L 238 0"
            fill="none"
            stroke="#C4973D"
            strokeWidth="0.8"
            opacity="0.6"
          />
        )}

        {/* Hieroglyph rows */}
        <g
          fill="#C4973D"
          opacity="0.85"
          filter={`url(#emboss-${half})`}
        >
          {isTop ? (
            <>
              {/* Row 1 - sun disc */}
              <circle cx="140" cy="40" r="9" fill="none" stroke="#C4973D" strokeWidth="1.5" />
              <circle cx="140" cy="40" r="3" />
              {/* Row 2 - ankh */}
              <g transform="translate(140 75)">
                <circle cx="0" cy="-8" r="6" fill="none" stroke="#C4973D" strokeWidth="1.5" />
                <line x1="0" y1="-2" x2="0" y2="14" stroke="#C4973D" strokeWidth="1.8" />
                <line x1="-7" y1="2" x2="7" y2="2" stroke="#C4973D" strokeWidth="1.8" />
              </g>
              {/* Row 3 - eye of horus */}
              <g transform="translate(140 110)">
                <path
                  d="M -14 0 Q 0 -7, 14 0 Q 0 7, -14 0 Z"
                  fill="none"
                  stroke="#C4973D"
                  strokeWidth="1.5"
                />
                <circle cx="0" cy="0" r="2.5" />
                <path d="M -14 0 L -18 4 M 4 4 L 4 8 L 9 8" stroke="#C4973D" strokeWidth="1.2" fill="none" />
              </g>
              {/* Row 4 - feather */}
              <g transform="translate(140 145)">
                <path
                  d="M 0 -10 Q 6 -5, 6 5 Q 0 10, -6 5 Q -6 -5, 0 -10 Z"
                  fill="none"
                  stroke="#C4973D"
                  strokeWidth="1.2"
                />
                <line x1="0" y1="-10" x2="0" y2="10" stroke="#C4973D" strokeWidth="0.8" />
              </g>
              {/* Side dots */}
              <circle cx="65" cy="100" r="2" />
              <circle cx="65" cy="130" r="2" />
              <circle cx="215" cy="100" r="2" />
              <circle cx="215" cy="130" r="2" />
            </>
          ) : (
            <>
              {/* Row 1 - lotus */}
              <g transform="translate(140 35)">
                <path
                  d="M 0 5 Q -8 -8, 0 -10 Q 8 -8, 0 5 Z"
                  fill="none"
                  stroke="#C4973D"
                  strokeWidth="1.5"
                />
                <line x1="0" y1="5" x2="0" y2="14" stroke="#C4973D" strokeWidth="1.2" />
              </g>
              {/* Row 2 - scarab */}
              <g transform="translate(140 75)">
                <ellipse cx="0" cy="0" rx="9" ry="6" fill="none" stroke="#C4973D" strokeWidth="1.5" />
                <line x1="0" y1="-7" x2="0" y2="7" stroke="#C4973D" strokeWidth="1" />
                <line x1="-9" y1="-3" x2="-13" y2="-5" stroke="#C4973D" strokeWidth="1" />
                <line x1="9" y1="-3" x2="13" y2="-5" stroke="#C4973D" strokeWidth="1" />
                <line x1="-9" y1="3" x2="-13" y2="5" stroke="#C4973D" strokeWidth="1" />
                <line x1="9" y1="3" x2="13" y2="5" stroke="#C4973D" strokeWidth="1" />
              </g>
              {/* Row 3 - waves */}
              <g transform="translate(140 115)">
                <path d="M -15 0 Q -10 -4, -5 0 T 5 0 T 15 0" stroke="#C4973D" strokeWidth="1.3" fill="none" />
                <path d="M -15 6 Q -10 2, -5 6 T 5 6 T 15 6" stroke="#C4973D" strokeWidth="1.3" fill="none" />
              </g>
              {/* Row 4 - seal cartouche */}
              <g transform="translate(140 165)">
                <rect x="-18" y="-8" width="36" height="16" rx="8" fill="none" stroke="#C4973D" strokeWidth="1.5" />
                <line x1="-12" y1="0" x2="12" y2="0" stroke="#C4973D" strokeWidth="1" />
              </g>
              {/* Side dots */}
              <circle cx="65" cy="80" r="2" />
              <circle cx="65" cy="120" r="2" />
              <circle cx="215" cy="80" r="2" />
              <circle cx="215" cy="120" r="2" />
            </>
          )}
        </g>

        {/* Inner highlight */}
        {isTop ? (
          <path
            d="M 50 30 Q 80 15, 140 15"
            stroke="#fde6a8"
            strokeWidth="1"
            fill="none"
            opacity="0.4"
          />
        ) : (
          <path
            d="M 50 180 Q 80 195, 140 195"
            stroke="#fde6a8"
            strokeWidth="0.8"
            fill="none"
            opacity="0.3"
          />
        )}
      </svg>
    </div>
  );
}
