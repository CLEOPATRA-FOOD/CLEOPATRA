import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  Trash2,
  Minus,
  Plus,
  Phone,
  ShoppingBag,
  ChevronRight,
  ChevronLeft,
  User,
  MapPin,
  Check,
  Sparkles,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useCart } from "@/lib/cart-context";

const PHONE_PRIMARY = "+213697179737";

type Step = "panier" | "details" | "envoi";

type CustomerInfo = {
  name: string;
  phone: string;
  place: string;
};

function buildOrderMessage(
  items: ReturnType<typeof useCart>["items"],
  total: number,
  info: CustomerInfo
) {
  const lines = items.map(
    (i) => `• ${i.qty} × ${i.name} — ${i.qty * i.price} DA`
  );
  return encodeURIComponent(
    `👑 Nouvelle Commande — Cleopatra Food\n\n` +
      `Nom : ${info.name}\n` +
      `Téléphone : ${info.phone}\n` +
      `Lieu de livraison : ${info.place}\n\n` +
      `Commande :\n${lines.join("\n")}\n\n` +
      `Total : ${total} DA\n\n` +
      `Merci !`
  );
}

/* ------------------------------------------------------------------ */
/*  Decorative cartouche frame — ancient Egyptian oval scroll border   */
/* ------------------------------------------------------------------ */
function Cartouche({ active, label, index }: { active: boolean; label: string; index: number }) {
  return (
    <div className="flex items-center gap-2">
      <div
        className={`relative flex items-center justify-center w-8 h-8 transition-all ${
          active ? "scale-110" : "opacity-50"
        }`}
      >
        <svg viewBox="0 0 40 40" className="absolute inset-0 w-full h-full">
          <ellipse
            cx="20"
            cy="20"
            rx="17"
            ry="13"
            fill="none"
            stroke={active ? "#C4973D" : "#8C621C"}
            strokeWidth="1.2"
          />
          <line
            x1="3"
            y1="20"
            x2="0"
            y2="20"
            stroke={active ? "#C4973D" : "#8C621C"}
            strokeWidth="1.2"
          />
          <line
            x1="37"
            y1="20"
            x2="40"
            y2="20"
            stroke={active ? "#C4973D" : "#8C621C"}
            strokeWidth="1.2"
          />
        </svg>
        <span
          className={`relative font-mono text-[11px] font-bold ${
            active ? "text-[#A0331C]" : "text-[#8C621C]"
          }`}
        >
          {index}
        </span>
      </div>
      <span
        className={`text-[10px] tracking-[0.3em] uppercase font-medium ${
          active ? "text-[#1c130a]" : "text-[#8C621C]"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Hieroglyphic side rail — vertical decorative strip                 */
/* ------------------------------------------------------------------ */
function HieroRail() {
  return (
    <div
      className="absolute left-0 top-0 bottom-0 w-6 border-r border-[#8C621C]/30 bg-[#1c130a] flex flex-col items-center py-6 gap-5 select-none pointer-events-none"
      aria-hidden
    >
      <div className="w-1 h-1 bg-[#C4973D] rotate-45"></div>
      <span className="text-[#C4973D] text-[10px]">𓂀</span>
      <span className="text-[#C4973D] text-[10px]">𓋹</span>
      <span className="text-[#C4973D] text-[10px]">𓊪</span>
      <span className="text-[#C4973D] text-[10px]">𓏏</span>
      <span className="text-[#C4973D] text-[10px]">𓇋</span>
      <div className="w-1 h-1 bg-[#C4973D] rotate-45"></div>
      <div className="flex-1 w-px bg-gradient-to-b from-[#C4973D]/40 via-[#A0331C]/30 to-transparent"></div>
      <span className="text-[#C4973D] text-[10px]">𓆣</span>
      <span className="text-[#C4973D] text-[10px]">𓋴</span>
      <span className="text-[#C4973D] text-[10px]">𓎟</span>
      <div className="w-1 h-1 bg-[#C4973D] rotate-45"></div>
    </div>
  );
}

export function CartDrawer() {
  const { items, isOpen, close, removeItem, setQty, clear, totalPrice, totalQty } =
    useCart();

  const [step, setStep] = useState<Step>("panier");
  const [info, setInfo] = useState<CustomerInfo>({ name: "", phone: "", place: "" });
  const [touched, setTouched] = useState({ name: false, phone: false, place: false });

  // Reset to first step every time the drawer opens
  useEffect(() => {
    if (isOpen) {
      setStep("panier");
      setTouched({ name: false, phone: false, place: false });
    }
  }, [isOpen]);

  // If cart becomes empty mid-flow, return to first step
  useEffect(() => {
    if (items.length === 0 && step !== "panier") {
      setStep("panier");
    }
  }, [items.length, step]);

  const phoneValid = useMemo(
    () => /^\+?[0-9\s]{8,}$/.test(info.phone.trim()),
    [info.phone]
  );
  const nameValid = info.name.trim().length >= 2;
  const placeValid = info.place.trim().length >= 3;
  const formValid = nameValid && phoneValid && placeValid;

  const orderText = buildOrderMessage(items, totalPrice, info);
  const waHref = `https://wa.me/${PHONE_PRIMARY.replace("+", "")}?text=${orderText}`;
  const smsHref = `sms:${PHONE_PRIMARY}?body=${orderText}`;

  function goToDetails() {
    if (items.length === 0) return;
    setStep("details");
  }

  function submit() {
    setTouched({ name: true, phone: true, place: true });
    if (!formValid) return;
    setStep("envoi");
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#1c130a]/75 backdrop-blur-md z-[90]"
            onClick={close}
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 right-0 h-full w-full sm:w-[480px] z-[100] flex flex-col shadow-2xl"
            data-testid="cart-drawer"
            style={{
              background:
                "linear-gradient(180deg, #f5ecd6 0%, #ebdfc8 50%, #e3d3b3 100%)",
            }}
          >
            {/* Decorative hieroglyphic side rail */}
            <HieroRail />

            {/* Outer double-line frame */}
            <div className="absolute inset-2 border border-[#8C621C]/40 pointer-events-none"></div>
            <div className="absolute inset-3 border border-[#C4973D]/30 pointer-events-none"></div>

            {/* Header */}
            <div className="relative bg-[#1c130a] text-[#f5ecd6] pl-10 pr-5 py-5 flex items-center justify-between border-b border-[#C4973D]/40">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full border border-[#C4973D]/60 flex items-center justify-center bg-[#A0331C]/20">
                  <Sparkles className="w-4 h-4 text-[#C4973D]" />
                </div>
                <div>
                  <p className="text-[9px] tracking-[0.4em] uppercase text-[#C4973D]">
                    {step === "panier" && "Le Panier Royal"}
                    {step === "details" && "Vos Coordonnées"}
                    {step === "envoi" && "Confirmation"}
                  </p>
                  <h3 className="font-serif text-base uppercase tracking-wide">
                    {step === "panier" && "Votre Festin"}
                    {step === "details" && "Pour la livraison"}
                    {step === "envoi" && "Tout est prêt"}
                  </h3>
                </div>
              </div>
              <button
                onClick={close}
                className="w-9 h-9 flex items-center justify-center hover:bg-[#C4973D]/20 transition-colors border border-[#C4973D]/30"
                aria-label="Fermer"
                data-testid="close-cart"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Step indicator */}
            <div className="relative pl-10 pr-5 py-3 bg-[#1c130a]/95 border-b border-[#C4973D]/20 flex items-center justify-between">
              <Cartouche active={step === "panier"} label="Panier" index={1} />
              <ChevronRight className="w-3 h-3 text-[#8C621C]" />
              <Cartouche active={step === "details"} label="Infos" index={2} />
              <ChevronRight className="w-3 h-3 text-[#8C621C]" />
              <Cartouche active={step === "envoi"} label="Envoi" index={3} />
            </div>

            {/* Body */}
            <div className="relative flex-1 overflow-y-auto pl-10 pr-5 py-6">
              <AnimatePresence mode="wait">
                {/* ---------- STEP 1 — PANIER ---------- */}
                {step === "panier" && (
                  <motion.div
                    key="panier"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {items.length === 0 ? (
                      <div className="h-full flex flex-col items-center justify-center text-center px-4 py-16">
                        <div className="relative mb-8">
                          <motion.div
                            className="absolute inset-0 -m-3 rounded-full border border-[#C4973D]/40"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                          >
                            <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rotate-45 bg-[#A0331C]"></span>
                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rotate-45 bg-[#A0331C]"></span>
                          </motion.div>
                          <div className="w-20 h-20 rounded-full border border-[#8C621C]/40 flex items-center justify-center bg-[#f5ecd6]">
                            <ShoppingBag
                              className="w-7 h-7 text-[#8C621C]"
                              strokeWidth={1.4}
                            />
                          </div>
                        </div>
                        <p className="font-serif text-xl text-[#1c130a] uppercase tracking-wide mb-3">
                          Panier Vide
                        </p>
                        <p className="text-sm text-[#5C3F10] max-w-xs mb-6 leading-relaxed">
                          Choisissez vos plats dans la carte royale et composez
                          votre festin de reine.
                        </p>
                        <button
                          onClick={close}
                          className="px-5 py-2.5 border border-[#8C621C] text-[#5C3F10] uppercase tracking-widest text-[11px] font-medium hover:bg-[#8C621C]/10 transition-colors"
                        >
                          Voir la Carte
                        </button>
                      </div>
                    ) : (
                      <ul className="space-y-3">
                        {items.map((item, idx) => (
                          <motion.li
                            key={item.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.04 }}
                            className="relative bg-[#f5ecd6] border border-[#8C621C]/30 p-4 group"
                            data-testid={`cart-item-${item.id}`}
                          >
                            {/* Tiny corner ornaments */}
                            <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#C4973D]"></span>
                            <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#C4973D]"></span>
                            <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#C4973D]"></span>
                            <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#C4973D]"></span>

                            <div className="flex items-start justify-between gap-3 mb-3">
                              <div className="min-w-0 flex-1">
                                <p className="text-[9px] tracking-[0.3em] uppercase text-[#A0331C] mb-1">
                                  {item.category}
                                </p>
                                <p className="font-serif text-base text-[#1c130a] uppercase tracking-wide leading-tight">
                                  {item.name}
                                </p>
                                <p className="text-[11px] font-mono text-[#8C621C] mt-1">
                                  {item.price} DA / pièce
                                </p>
                              </div>
                              <button
                                onClick={() => removeItem(item.id)}
                                className="text-[#8C621C] hover:text-[#A0331C] transition-colors flex-shrink-0"
                                aria-label="Retirer"
                                data-testid={`remove-${item.id}`}
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="inline-flex items-center border border-[#8C621C]/40 bg-[#ebdfc8]">
                                <button
                                  onClick={() => setQty(item.id, item.qty - 1)}
                                  className="w-8 h-8 flex items-center justify-center hover:bg-[#8C621C]/15 transition-colors"
                                  aria-label="Diminuer"
                                >
                                  <Minus className="w-3 h-3 text-[#5C3F10]" />
                                </button>
                                <span className="w-10 text-center font-mono text-sm text-[#1c130a]">
                                  {item.qty}
                                </span>
                                <button
                                  onClick={() => setQty(item.id, item.qty + 1)}
                                  className="w-8 h-8 flex items-center justify-center hover:bg-[#8C621C]/15 transition-colors"
                                  aria-label="Augmenter"
                                >
                                  <Plus className="w-3 h-3 text-[#5C3F10]" />
                                </button>
                              </div>
                              <span className="font-serif text-lg text-gold-gradient">
                                {item.qty * item.price}
                                <span className="text-[10px] font-mono text-[#8C621C] ml-1 tracking-widest">
                                  DA
                                </span>
                              </span>
                            </div>
                          </motion.li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                )}

                {/* ---------- STEP 2 — DETAILS ---------- */}
                {step === "details" && (
                  <motion.div
                    key="details"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-5"
                  >
                    <div className="text-center mb-2">
                      <div className="inline-block ornament-divider">
                        <span className="px-3 py-1 text-[10px] tracking-[0.4em] uppercase text-[#5C3F10]">
                          Pour vous servir
                        </span>
                      </div>
                      <p className="text-sm text-[#5C3F10] mt-3 leading-relaxed">
                        Renseignez vos coordonnées pour finaliser votre commande royale.
                      </p>
                    </div>

                    {/* NAME */}
                    <div>
                      <label
                        htmlFor="cust-name"
                        className="flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-[#5C3F10] mb-2"
                      >
                        <User className="w-3 h-3 text-[#A0331C]" />
                        Nom complet
                      </label>
                      <input
                        id="cust-name"
                        type="text"
                        autoComplete="name"
                        value={info.name}
                        onChange={(e) => setInfo({ ...info, name: e.target.value })}
                        onBlur={() => setTouched((t) => ({ ...t, name: true }))}
                        placeholder="ex. Yasmine Benali"
                        data-testid="input-name"
                        className="w-full bg-[#f5ecd6] border border-[#8C621C]/40 px-4 py-3 font-sans text-[#1c130a] placeholder:text-[#8C621C]/60 focus:outline-none focus:border-[#A0331C] focus:bg-white transition-colors"
                      />
                      {touched.name && !nameValid && (
                        <p className="text-[10px] text-[#A0331C] mt-1.5 tracking-wide">
                          Veuillez entrer votre nom (2 caractères minimum).
                        </p>
                      )}
                    </div>

                    {/* PHONE */}
                    <div>
                      <label
                        htmlFor="cust-phone"
                        className="flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-[#5C3F10] mb-2"
                      >
                        <Phone className="w-3 h-3 text-[#A0331C]" />
                        Téléphone
                      </label>
                      <input
                        id="cust-phone"
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        value={info.phone}
                        onChange={(e) => setInfo({ ...info, phone: e.target.value })}
                        onBlur={() => setTouched((t) => ({ ...t, phone: true }))}
                        placeholder="+213 5XX XX XX XX"
                        data-testid="input-phone"
                        className="w-full bg-[#f5ecd6] border border-[#8C621C]/40 px-4 py-3 font-mono text-[#1c130a] placeholder:text-[#8C621C]/60 focus:outline-none focus:border-[#A0331C] focus:bg-white transition-colors"
                      />
                      {touched.phone && !phoneValid && (
                        <p className="text-[10px] text-[#A0331C] mt-1.5 tracking-wide">
                          Numéro invalide (chiffres uniquement, 8 minimum).
                        </p>
                      )}
                    </div>

                    {/* PLACE */}
                    <div>
                      <label
                        htmlFor="cust-place"
                        className="flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-[#5C3F10] mb-2"
                      >
                        <MapPin className="w-3 h-3 text-[#A0331C]" />
                        Lieu de livraison
                      </label>
                      <textarea
                        id="cust-place"
                        rows={3}
                        autoComplete="street-address"
                        value={info.place}
                        onChange={(e) => setInfo({ ...info, place: e.target.value })}
                        onBlur={() => setTouched((t) => ({ ...t, place: true }))}
                        placeholder="ex. Cité 1000 logements, Bt. C, App. 12, Alger Centre"
                        data-testid="input-place"
                        className="w-full bg-[#f5ecd6] border border-[#8C621C]/40 px-4 py-3 font-sans text-[#1c130a] placeholder:text-[#8C621C]/60 focus:outline-none focus:border-[#A0331C] focus:bg-white transition-colors resize-none"
                      />
                      {touched.place && !placeValid && (
                        <p className="text-[10px] text-[#A0331C] mt-1.5 tracking-wide">
                          Veuillez préciser votre adresse de livraison.
                        </p>
                      )}
                    </div>

                    {/* Recap mini */}
                    <div className="border-t border-[#8C621C]/30 pt-4">
                      <p className="text-[10px] tracking-[0.3em] uppercase text-[#5C3F10] mb-2">
                        Récapitulatif
                      </p>
                      <ul className="space-y-1 text-xs text-[#3d2c14]">
                        {items.map((i) => (
                          <li key={i.id} className="flex justify-between">
                            <span>
                              {i.qty} × {i.name}
                            </span>
                            <span className="font-mono text-[#8C621C]">
                              {i.qty * i.price} DA
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}

                {/* ---------- STEP 3 — CONFIRMATION / SEND ---------- */}
                {step === "envoi" && (
                  <motion.div
                    key="envoi"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center text-center pt-4"
                  >
                    {/* Wax seal animation */}
                    <motion.div
                      initial={{ scale: 0, rotate: -45 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 220, damping: 14 }}
                      className="relative mb-6"
                    >
                      <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-[#A0331C] to-[#7a2412] flex items-center justify-center shadow-[0_15px_40px_-10px_rgba(160,51,28,0.7)] border-4 border-[#8C621C]/40">
                        <div className="absolute inset-2 rounded-full border border-[#C4973D]/50"></div>
                        <Check className="w-9 h-9 text-[#f5ecd6]" strokeWidth={2.5} />
                      </div>
                      {/* Drips */}
                      <span className="absolute -bottom-1 left-4 w-2 h-3 bg-[#7a2412] rounded-b-full"></span>
                      <span className="absolute -bottom-2 right-6 w-1.5 h-2.5 bg-[#7a2412] rounded-b-full"></span>
                    </motion.div>

                    <p className="font-serif text-xl text-[#1c130a] uppercase tracking-wide mb-2">
                      Tout est prêt
                    </p>
                    <p className="text-sm text-[#5C3F10] max-w-xs mb-6 leading-relaxed">
                      Envoyez votre commande à notre équipe royale. Nous vous
                      rappellerons pour confirmer la livraison.
                    </p>

                    {/* Final recap */}
                    <div className="w-full bg-[#f5ecd6] border border-[#8C621C]/30 p-4 mb-6 text-left space-y-2">
                      <div className="flex items-start gap-2 text-xs">
                        <User className="w-3 h-3 text-[#A0331C] mt-0.5 flex-shrink-0" />
                        <span className="text-[#1c130a] font-medium">{info.name}</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs">
                        <Phone className="w-3 h-3 text-[#A0331C] mt-0.5 flex-shrink-0" />
                        <span className="text-[#1c130a] font-mono">{info.phone}</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs">
                        <MapPin className="w-3 h-3 text-[#A0331C] mt-0.5 flex-shrink-0" />
                        <span className="text-[#1c130a]">{info.place}</span>
                      </div>
                      <div className="border-t border-[#8C621C]/30 pt-2 mt-2 flex justify-between items-center">
                        <span className="text-[10px] tracking-[0.3em] uppercase text-[#5C3F10]">
                          Total · {totalQty} pièce{totalQty > 1 ? "s" : ""}
                        </span>
                        <span className="font-serif text-lg text-gold-gradient">
                          {totalPrice}
                          <span className="text-[10px] font-mono text-[#8C621C] ml-1 tracking-widest">
                            DA
                          </span>
                        </span>
                      </div>
                    </div>

                    <div className="w-full grid grid-cols-2 gap-2 mb-3">
                      <a
                        href={waHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => {
                          // small delay then close + clear
                          setTimeout(() => {
                            clear();
                            close();
                          }, 600);
                        }}
                        className="group relative flex items-center justify-center gap-2 px-4 py-3.5 bg-[#1c130a] text-[#f5ecd6] font-serif uppercase tracking-widest text-xs overflow-hidden"
                        data-testid="cart-whatsapp"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-[#A0331C] to-[#C4973D] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                        <span className="relative">Envoyer WhatsApp</span>
                      </a>
                      <a
                        href={`tel:${PHONE_PRIMARY}`}
                        className="flex items-center justify-center gap-2 px-4 py-3.5 border border-[#8C621C] text-[#5C3F10] uppercase tracking-widest text-xs font-medium hover:bg-[#8C621C]/10 transition-colors"
                        data-testid="cart-call"
                      >
                        <Phone className="w-3.5 h-3.5" /> Appeler
                      </a>
                    </div>
                    <a
                      href={smsHref}
                      className="block text-center text-[10px] tracking-[0.3em] uppercase text-[#5C3F10] hover:text-[#A0331C] transition-colors"
                    >
                      Ou envoyer par SMS
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Footer / Step navigation */}
            {items.length > 0 && step !== "envoi" && (
              <div className="relative border-t border-[#8C621C]/30 bg-[#ebdfc8]/80 backdrop-blur-sm pl-10 pr-5 py-4 space-y-3">
                <div className="flex items-center justify-between">
                  <p className="text-[10px] tracking-[0.4em] uppercase text-[#5C3F10]">
                    Total · {totalQty} pièce{totalQty > 1 ? "s" : ""}
                  </p>
                  <p className="font-serif text-2xl text-gold-gradient">
                    {totalPrice}
                    <span className="text-xs font-mono text-[#8C621C] ml-1 tracking-widest">
                      DA
                    </span>
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {step === "panier" ? (
                    <>
                      <button
                        onClick={clear}
                        className="flex items-center justify-center gap-2 px-4 py-3 border border-[#8C621C]/60 text-[#8C621C] uppercase tracking-widest text-[10px] font-medium hover:bg-[#8C621C]/10 transition-colors"
                        data-testid="cart-clear"
                      >
                        <Trash2 className="w-3 h-3" /> Vider
                      </button>
                      <button
                        onClick={goToDetails}
                        className="group relative flex items-center justify-center gap-2 px-4 py-3 bg-[#1c130a] text-[#f5ecd6] font-serif uppercase tracking-widest text-xs overflow-hidden"
                        data-testid="cart-next"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-[#A0331C] to-[#C4973D] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                        <span className="relative flex items-center gap-2">
                          Continuer <ChevronRight className="w-3.5 h-3.5" />
                        </span>
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => setStep("panier")}
                        className="flex items-center justify-center gap-2 px-4 py-3 border border-[#8C621C] text-[#5C3F10] uppercase tracking-widest text-[10px] font-medium hover:bg-[#8C621C]/10 transition-colors"
                        data-testid="cart-back"
                      >
                        <ChevronLeft className="w-3.5 h-3.5" /> Retour
                      </button>
                      <button
                        onClick={submit}
                        className="group relative flex items-center justify-center gap-2 px-4 py-3 bg-[#1c130a] text-[#f5ecd6] font-serif uppercase tracking-widest text-xs overflow-hidden disabled:opacity-50"
                        data-testid="cart-submit"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-[#A0331C] to-[#C4973D] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                        <span className="relative flex items-center gap-2">
                          Valider <Check className="w-3.5 h-3.5" />
                        </span>
                      </button>
                    </>
                  )}
                </div>
              </div>
            )}

            {/* Confirmation footer back action */}
            {step === "envoi" && (
              <div className="relative border-t border-[#8C621C]/30 bg-[#ebdfc8]/80 backdrop-blur-sm pl-10 pr-5 py-3">
                <button
                  onClick={() => setStep("details")}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 text-[10px] tracking-[0.3em] uppercase text-[#5C3F10] hover:text-[#A0331C] transition-colors"
                >
                  <ChevronLeft className="w-3 h-3" /> Modifier mes informations
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
