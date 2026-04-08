import { cn } from "@/lib/utils";

interface ProductImagePlaceholderProps {
  name?: string;
  className?: string;
  aspectRatio?: "square" | "portrait" | "landscape";
}

const placeholderGradients = [
  "from-[#c89a57]/20 to-[#b88646]/10",
  "from-[#6A1018]/10 to-[#5E0B13]/5",
  "from-[#d9c7b4]/40 to-[#c89a57]/20",
  "from-[#f1e7dd] to-[#eadbcd]",
];

function getGradient(name: string = "") {
  const index = name.length % placeholderGradients.length;
  return placeholderGradients[index];
}

export function ProductImagePlaceholder({
  name = "",
  className,
  aspectRatio = "square",
}: ProductImagePlaceholderProps) {
  const aspectClasses = {
    square: "aspect-square",
    portrait: "aspect-[3/4]",
    landscape: "aspect-[4/3]",
  };

  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-2xl overflow-hidden bg-gradient-to-br",
        getGradient(name),
        aspectClasses[aspectRatio],
        className
      )}
    >
      <div className="text-center p-6">
        <div className="w-16 h-16 rounded-full bg-[#c89a57]/20 flex items-center justify-center mx-auto mb-3">
          <span className="font-serif text-2xl text-[#c89a57] font-medium">
            {initials || "BC"}
          </span>
        </div>
        <p className="text-[#7a4a47]/60 text-xs tracking-wide text-center leading-relaxed">
          {name || "Produto"}
        </p>
      </div>
    </div>
  );
}
