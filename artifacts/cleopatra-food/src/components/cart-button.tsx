import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/lib/cart-context";

/**
 * Royal amphora cart trigger — a custom Egyptian cartouche / vessel shape
 * with rotating gold rings and a glowing cartouche badge for the item count.
 */
export function CartButton() {
  const { open, totalQty } = useCart();
  const hasItems = totalQty > 0;

  return (
    <button
      onClick={open}
      className="relative w-12 h-12 flex items-center justify-center group"
      aria-label={`Ouvrir le panier royal (${totalQty} articles)`}
      data-testid="open-cart"
    >
      {/* Outer rotating gold ring with cardinal jewels */}
      <motion.div
        className="absolute inset-0 -m-1.5 rounded-full border border-[#C4973D]/50 group-hover:border-[#C4973D] transition-colors"
        animate={{ rotate: 360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      >
        <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rotate-45 bg-[#A0331C]"></span>
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rotate-45 bg-[#A0331C]"></span>
        <span className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-1 h-1 rotate-45 bg-[#C4973D]"></span>
        <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-1 h-1 rotate-45 bg-[#C4973D]"></span>
      </motion.div>

      {/* Faint hover halo */}
      <span className="absolute inset-0 rounded-full bg-[#C4973D]/0 group-hover:bg-[#C4973D]/15 transition-colors duration-500"></span>

      {/* Royal woven basket — custom SVG */}
      <svg
        viewBox="0 0 48 48"
        className="relative w-11 h-11 drop-shadow-[0_2px_4px_rgba(28,19,10,0.4)]"
        fill="none"
        aria-hidden
      >
        <defs>
          <linearGradient id="basketBody" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#7a521a" />
            <stop offset="100%" stopColor="#7a521a" />
          </linearGradient>
          <linearGradient id="basketGold" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8C621C" />
            <stop offset="50%" stopColor="#E8C26B" />
            <stop offset="100%" stopColor="#8C621C" />
          </linearGradient>
          <clipPath id="basketClip">
            <path d="M11 22 L37 22 L33 41 C 33 42, 32 42.5, 31 42.5 L17 42.5 C 16 42.5, 15 42, 15 41 Z" />
          </clipPath>
        </defs>

        {/* Arched handle — bold, behind the basket */}
        <path
          d="M14 22 C 14 11, 34 11, 34 22"
          fill="none"
          stroke="url(#basketGold)"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M14 22 C 14 11, 34 11, 34 22"
          fill="none"
          stroke="#5C3F10"
          strokeWidth="0.6"
          strokeLinecap="round"
        />

        {/* Basket body (trapezoid, slightly tapered) */}
        <path
          d="M11 22 L37 22 L33 41 C 33 42, 32 42.5, 31 42.5 L17 42.5 C 16 42.5, 15 42, 15 41 Z"
          fill="url(#basketBody)"
          stroke="#C4973D"
          strokeWidth="1.4"
        />

        {/* Woven weave pattern — vertical reeds, clipped to basket */}
        <g clipPath="url(#basketClip)" stroke="#C4973D" strokeWidth="0.5" opacity="0.55">
          <line x1="17" y1="22" x2="17" y2="43" />
          <line x1="20" y1="22" x2="20" y2="43" />
          <line x1="23" y1="22" x2="23" y2="43" />
          <line x1="26" y1="22" x2="26" y2="43" />
          <line x1="29" y1="22" x2="29" y2="43" />
          <line x1="32" y1="22" x2="32" y2="43" />
        </g>
        {/* Horizontal weave bands */}
        <g clipPath="url(#basketClip)" stroke="#C4973D" strokeWidth="0.6">
          <line x1="11" y1="27" x2="37" y2="27" opacity="0.85" />
          <line x1="11" y1="32" x2="37" y2="32" opacity="0.85" />
          <line x1="11" y1="37" x2="37" y2="37" opacity="0.85" />
        </g>

        {/* Golden rim — top of basket */}
        <ellipse
          cx="24"
          cy="22"
          rx="13"
          ry="2.2"
          fill="url(#basketGold)"
          stroke="#5C3F10"
          strokeWidth="0.5"
        />
        {/* Rim highlight */}
        <ellipse
          cx="24"
          cy="21.4"
          rx="11"
          ry="0.8"
          fill="#f5ecd6"
          opacity="0.4"
        />

        {/* Royal cartouche emblem — sun disc on the front */}
        <circle cx="24" cy="33" r="3" fill="#A0331C" stroke="#C4973D" strokeWidth="0.7" />
        <circle cx="24" cy="33" r="1.2" fill="#E8C26B" />
      </svg>

      {/* Cartouche-shaped badge for quantity */}
      <AnimatePresence>
        {hasItems && (
          <motion.span
            key={totalQty}
            initial={{ scale: 0, opacity: 0, y: -4 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 22 }}
            className="absolute -top-1.5 -right-1.5 z-10"
          >
            <div className="relative flex items-center justify-center min-w-[22px] h-[22px] px-1.5">
              {/* Cartouche oval background */}
              <svg
                viewBox="0 0 28 22"
                className="absolute inset-0 w-full h-full"
                preserveAspectRatio="none"
              >
                <ellipse
                  cx="14"
                  cy="11"
                  rx="12"
                  ry="9"
                  fill="#A0331C"
                  stroke="#C4973D"
                  strokeWidth="1.2"
                />
                <line x1="2" y1="11" x2="0" y2="11" stroke="#C4973D" strokeWidth="1.2" />
                <line x1="26" y1="11" x2="28" y2="11" stroke="#C4973D" strokeWidth="1.2" />
              </svg>
              <span className="relative font-mono text-[10px] font-bold text-[#f5ecd6] leading-none">
                {totalQty}
              </span>
            </div>
          </motion.span>
        )}
      </AnimatePresence>

      {/* Pulse ring when items present */}
      {hasItems && (
        <motion.span
          className="absolute inset-0 -m-1.5 rounded-full border border-[#A0331C]/60 pointer-events-none"
          animate={{ scale: [1, 1.25, 1.4], opacity: [0.6, 0.2, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
        />
      )}
    </button>
  );
}
