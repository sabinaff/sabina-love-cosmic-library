import nebula from "@/assets/space-nebula.jpg";
import { cn } from "@/lib/utils";

/** Deep-space layer: nebula photo, two star layers, soft vignette. Purely decorative. */
export function CosmicBackdrop({
  className,
  intensity = "full",
}: {
  className?: string;
  intensity?: "full" | "subtle";
}) {
  const subtle = intensity === "subtle";
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div className="absolute inset-0 bg-night" />
      <img
        src={nebula}
        alt=""
        width={1920}
        height={1088}
        className={cn(
          "absolute inset-0 h-full w-full object-cover mix-blend-screen",
          subtle ? "opacity-30" : "opacity-70",
        )}
      />
      <div className={cn("absolute inset-0 starfield-far", subtle ? "opacity-40" : "opacity-80")} />
      <div className={cn("absolute inset-0 starfield animate-twinkle", subtle && "opacity-50")} />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}
