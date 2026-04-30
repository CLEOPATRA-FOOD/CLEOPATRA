import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import logoImg from "@assets/305243862_504731711657679_4080429380307416125_n_1777234528149.jpg";
import { CartButton } from "@/components/cart-button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "L'Identité", href: "#identity" },
    { name: "Histoire", href: "#story" },
    { name: "La Carte", href: "#full-menu" },
    { name: "Voix", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? "bg-[#ebdfc8]/90 backdrop-blur-md py-3 border-b border-[#8C621C]/20"
          : "bg-transparent py-5"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-11 w-11 rounded-full overflow-hidden bg-[#f5ecd6] border border-[#8C621C]/40 group-hover:border-[#8C621C] transition-colors">
            <img
              src={logoImg}
              alt="Cleopatra Food"
              className="object-cover w-full h-full"
            />
          </div>
          <span className="font-serif text-lg tracking-[0.2em] uppercase text-[#1c130a] hidden sm:block">
            Cleopatra
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs tracking-[0.25em] uppercase text-[#3d2c14] hover:text-[#8C621C] transition-colors duration-300 font-medium"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#full-menu"
            className="px-5 py-2.5 bg-[#1c130a] text-[#C4973D] hover:bg-[#5C3F10] uppercase tracking-[0.25em] text-[10px] transition-all duration-300 font-medium"
          >
            Commander
          </a>
          <CartButton />
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <CartButton />
          <button
            className="text-[#1c130a]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          className="absolute top-full left-0 right-0 bg-[#ebdfc8]/98 backdrop-blur-xl border-b border-[#8C621C]/20 p-6 flex flex-col gap-5 md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base tracking-[0.25em] uppercase text-[#1c130a] hover:text-[#8C621C] transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#full-menu"
            className="px-6 py-3 bg-[#1c130a] text-[#C4973D] text-center uppercase tracking-[0.25em] text-xs transition-all duration-300 font-medium mt-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            Commander
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
