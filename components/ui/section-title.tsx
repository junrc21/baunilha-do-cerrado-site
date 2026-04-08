import { cn } from "@/lib/utils";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
  className?: string;
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  center = false,
  light = false,
  className,
}: SectionTitleProps) {
  return (
    <div className={cn(center && "text-center", className)}>
      {eyebrow && (
        <p
          className={cn(
            "text-[10px] tracking-[0.35em] uppercase font-medium mb-3",
            light ? "text-[#c89a57]" : "text-[#c89a57]"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-serif font-medium leading-tight",
          "text-display-sm md:text-display-md",
          light ? "text-[#f1e7dd]" : "text-[#4b1f1d]"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed max-w-2xl",
            center && "mx-auto",
            light ? "text-[#e8d5b0]/70" : "text-[#7a4a47]"
          )}
        >
          {subtitle}
        </p>
      )}
      <div className={cn("mt-5 h-px w-12 bg-gradient-to-r from-transparent via-[#c89a57] to-transparent", center && "mx-auto")} />
    </div>
  );
}
