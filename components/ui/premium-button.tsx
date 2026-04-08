import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface PremiumButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "wine" | "gold" | "outline-wine" | "outline-gold" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

export const PremiumButton = forwardRef<HTMLButtonElement, PremiumButtonProps>(
  ({ className, variant = "wine", size = "md", children, ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center gap-2.5 font-sans font-medium tracking-widest uppercase transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded-full disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
      wine: "bg-[#6A1018] hover:bg-[#571018] text-[#f1e7dd] hover:shadow-elegant-md focus-visible:ring-[#6A1018]",
      gold: "bg-[#B88646] hover:bg-[#A6783F] text-[#f1e7dd] hover:shadow-gold focus-visible:ring-[#B88646]",
      "outline-wine":
        "border border-[#6A1018] text-[#6A1018] hover:bg-[#6A1018] hover:text-[#f1e7dd] focus-visible:ring-[#6A1018]",
      "outline-gold":
        "border border-[#B88646] text-[#B88646] hover:bg-[#B88646] hover:text-[#f1e7dd] focus-visible:ring-[#B88646]",
      ghost: "text-[#6A1018] hover:bg-[#6A1018]/8 focus-visible:ring-[#6A1018]",
    };

    const sizes = {
      sm: "text-[10px] px-5 py-2",
      md: "text-[11px] px-7 py-3",
      lg: "text-[12px] px-9 py-4",
    };

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

PremiumButton.displayName = "PremiumButton";

// Anchor version
interface PremiumLinkButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "wine" | "gold" | "outline-wine" | "outline-gold" | "ghost";
  size?: "sm" | "md" | "lg";
}

export function PremiumLinkButton({
  className,
  variant = "wine",
  size = "md",
  children,
  ...props
}: PremiumLinkButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2.5 font-sans font-medium tracking-widest uppercase transition-all duration-200 focus-visible:outline-none rounded-full cursor-pointer";

  const variants = {
    wine: "bg-[#6A1018] hover:bg-[#571018] text-[#f1e7dd] hover:shadow-elegant-md",
    gold: "bg-[#B88646] hover:bg-[#A6783F] text-[#f1e7dd] hover:shadow-gold",
    "outline-wine":
      "border border-[#6A1018] text-[#6A1018] hover:bg-[#6A1018] hover:text-[#f1e7dd]",
    "outline-gold":
      "border border-[#B88646] text-[#B88646] hover:bg-[#B88646] hover:text-[#f1e7dd]",
    ghost: "text-[#6A1018] hover:bg-[#6A1018]/8",
  };

  const sizes = {
    sm: "text-[10px] px-5 py-2",
    md: "text-[11px] px-7 py-3",
    lg: "text-[12px] px-9 py-4",
  };

  return (
    <a className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </a>
  );
}
