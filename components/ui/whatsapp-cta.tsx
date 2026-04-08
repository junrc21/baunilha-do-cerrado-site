import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface WhatsAppCTAProps {
  message?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function WhatsAppCTA({
  message,
  size = "md",
  className,
}: WhatsAppCTAProps) {
  const link = message
    ? `https://wa.me/5561999999999?text=${encodeURIComponent(message)}`
    : WHATSAPP_LINK;

  const sizes = {
    sm: "text-[10px] px-5 py-2.5 gap-2",
    md: "text-[11px] px-7 py-3.5 gap-2.5",
    lg: "text-[12px] px-9 py-4 gap-3",
  };

  const iconSizes = { sm: 13, md: 15, lg: 17 };

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center font-medium tracking-widest uppercase transition-all duration-200 rounded-full bg-[#c89a57] hover:bg-[#b88646] text-[#4b1f1d] hover:shadow-gold",
        sizes[size],
        className
      )}
    >
      <MessageCircle size={iconSizes[size]} />
      Pedir pelo WhatsApp
    </a>
  );
}
