import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK, BRAND_EMAIL } from "@/lib/constants";

const footerLinks = {
  institucional: [
    { label: "Sobre nós", href: "/sobre" },
    { label: "Encomendas", href: "/encomendas" },
    { label: "Contato", href: "/contato" },
  ],
  produtos: [
    { label: "Cookies", href: "/cookies" },
    { label: "Bolos", href: "/bolos" },
    { label: "Cheesecake", href: "/cheesecake" },
    { label: "Presentear", href: "/presentear" },
  ],
  atendimento: [
    { label: "Como encomendar", href: "/encomendas" },
    { label: "Entregas e retiradas", href: "/contato#entregas" },
    { label: "FAQ", href: "/contato#faq" },
  ],
};

export function SiteFooter() {
  return (
    <footer className="bg-[#3d0a10]">
      {/* CTA Strip */}
      <div className="bg-[#5E0B13] px-5 sm:px-8 py-12 sm:py-14 text-center">
        <p className="font-serif text-[#e8d5b0] text-[11px] tracking-[0.3em] uppercase mb-4">
          Pronto para presentear?
        </p>
        <h3
          className="font-serif text-[#f1e7dd] font-medium mb-6 leading-tight"
          style={{ fontSize: "clamp(1.5rem, 5vw, 2.5rem)" }}
        >
          Pronto para presentear com sabor e sofisticação?
        </h3>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#c89a57] hover:bg-[#b88646] text-[#4b1f1d] text-[11px] tracking-widest uppercase font-medium transition-all duration-200 min-h-[48px]"
        >
          <MessageCircle size={14} />
          Pedir pelo WhatsApp
        </a>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-12 sm:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand — full width on mobile */}
          <div className="col-span-2 lg:col-span-2">
            <div className="mb-5">
              <p className="font-serif text-2xl text-[#e8d5b0] font-semibold tracking-wide leading-none mb-1">BC</p>
              <p className="font-serif text-sm text-[#e8d5b0] tracking-widest uppercase">Baunilha do Cerrado</p>
              <p className="text-[9px] tracking-[0.3em] text-[#c89a57] uppercase font-light mt-1">Confeitaria</p>
            </div>
            <p className="text-[#e8d5b0]/60 text-sm leading-relaxed max-w-xs">
              Delicadeza, sabor e apresentação impecável em cada criação artesanal.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://instagram.com/baunilhadocerrado"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-[#c89a57]/30 text-[#e8d5b0]/60 hover:text-[#c89a57] hover:border-[#c89a57] transition-all duration-200"
                aria-label="Instagram"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-[#c89a57]/30 text-[#e8d5b0]/60 hover:text-[#c89a57] hover:border-[#c89a57] transition-all duration-200"
                aria-label="WhatsApp"
              >
                <MessageCircle size={15} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-[9px] tracking-[0.3em] text-[#c89a57] uppercase font-medium mb-4">Institucional</h4>
            <ul className="space-y-3">
              {footerLinks.institucional.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[#e8d5b0]/60 hover:text-[#e8d5b0] text-sm transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[9px] tracking-[0.3em] text-[#c89a57] uppercase font-medium mb-4">Produtos</h4>
            <ul className="space-y-3">
              {footerLinks.produtos.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[#e8d5b0]/60 hover:text-[#e8d5b0] text-sm transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[9px] tracking-[0.3em] text-[#c89a57] uppercase font-medium mb-4">Atendimento</h4>
            <ul className="space-y-3">
              {footerLinks.atendimento.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[#e8d5b0]/60 hover:text-[#e8d5b0] text-sm transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-5 pt-5 border-t border-[#c89a57]/10">
              <a href={`mailto:${BRAND_EMAIL}`} className="text-[#e8d5b0]/60 hover:text-[#c89a57] text-xs transition-colors duration-200 block break-all">
                {BRAND_EMAIL}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[#c89a57]/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[#e8d5b0]/40 text-xs text-center sm:text-left">
            © 2026 Baunilha do Cerrado Confeitaria. Todos os direitos reservados.
          </p>
          <p className="text-[#e8d5b0]/40 text-xs">Feito com carinho · Goiânia, GO</p>
        </div>
      </div>
    </footer>
  );
}
