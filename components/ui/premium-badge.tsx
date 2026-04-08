import { cn } from "@/lib/utils";

interface PremiumBadgeProps {
  children: React.ReactNode;
  variant?: "gold" | "wine" | "cream";
  className?: string;
}

export function PremiumBadge({ children, variant = "gold", className }: PremiumBadgeProps) {
  const variants = {
    gold: "bg-[#c89a57]/15 text-[#b88646] border-[#c89a57]/25",
    wine: "bg-[#6A1018]/10 text-[#6A1018] border-[#6A1018]/20",
    cream: "bg-[#f1e7dd] text-[#7a4a47] border-[#d9c7b4]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] tracking-widest uppercase font-medium border",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
