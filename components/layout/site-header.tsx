"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Menu } from "lucide-react";
import { navigation } from "@/data/site-data";
import { WHATSAPP_LINK } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled ? "bg-[#3d0a10]/98 backdrop-blur-md shadow-elegant" : "bg-[#5E0B13]"
        )}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 min-w-0">
              <span className="font-serif text-xl font-semibold text-[#e8d5b0] tracking-wide leading-none flex-shrink-0">
                BC
              </span>
              <div className="hidden sm:flex flex-col min-w-0">
                <span className="font-serif text-sm font-semibold text-[#e8d5b0] tracking-widest leading-none uppercase truncate">
                  Baunilha do Cerrado
                </span>
                <span className="text-[9px] tracking-[0.3em] text-[#c89a57] uppercase font-light mt-0.5">
                  Confeitaria
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative px-3 py-2 text-[12px] tracking-widest uppercase font-light transition-colors duration-200",
                    pathname === item.href
                      ? "text-[#c89a57]"
                      : "text-[#e8d5b0]/80 hover:text-[#e8d5b0]"
                  )}
                >
                  {item.label}
                  {pathname === item.href && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-3 right-3 h-px bg-[#c89a57]"
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#c89a57] hover:bg-[#b88646] text-[#4b1f1d] text-[11px] tracking-widest uppercase font-medium transition-all duration-200 hover:shadow-gold min-h-[44px]"
              >
                <MessageCircle size={13} />
                <span>Pedir pelo WhatsApp</span>
              </a>
            </div>

            {/* Mobile: WhatsApp icon + hamburger */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#c89a57]/20 text-[#c89a57]"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
              <button
                className="w-10 h-10 flex items-center justify-center text-[#e8d5b0] hover:text-[#c89a57] transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu — full screen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-[#3d0a10] lg:hidden flex flex-col pt-16"
          >
            <nav className="flex flex-col px-6 py-8 gap-1 flex-1 overflow-y-auto">
              {navigation.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center py-4 text-base tracking-widest uppercase font-light border-b border-[#c89a57]/10 transition-colors",
                      pathname === item.href ? "text-[#c89a57]" : "text-[#e8d5b0]/80"
                    )}
                  >
                    {pathname === item.href && (
                      <span className="w-1 h-4 rounded-full bg-[#c89a57] mr-3 flex-shrink-0" />
                    )}
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-8"
              >
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 w-full px-5 py-4 rounded-full bg-[#c89a57] hover:bg-[#b88646] text-[#4b1f1d] text-[12px] tracking-widest uppercase font-semibold transition-all duration-200 min-h-[52px]"
                >
                  <MessageCircle size={16} />
                  Pedir pelo WhatsApp
                </a>
              </motion.div>
            </nav>

            {/* Bottom brand */}
            <div className="px-6 py-6 border-t border-[#c89a57]/10">
              <p className="font-serif text-[#e8d5b0]/40 text-sm">
                Baunilha do Cerrado · Confeitaria
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer */}
      <div className="h-16 lg:h-20" />
    </>
  );
}
