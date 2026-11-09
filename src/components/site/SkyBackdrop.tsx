import sky from "@/assets/sky-clouds.jpg";
import { cn } from "@/lib/utils";

/**
 * Sky-blue cloudscape layer. A deep-blue wash on the text side keeps cream text readable.
 * `side` picks which edge gets the wash ("left" for split heroes, "center" for centered copy).
 */
export function SkyBackdrop({
  className,
  side = "left",
  priority = false,
}: {
  className?: string;
  side?: "left" | "center";
  priority?: boolean;
}) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div className="absolute inset-0 bg-sky" />
      <img
        src={sky}
        alt=""
        width={1920}
        height={1088}
        loading={priority ? "eager" : "lazy"}
        className="absolute inset-0 h-full w-full object-cover opacity-90 animate-drift"
      />
      {side === "left" ? (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-ink/65 via-ink/35 to-transparent lg:hidden" />
          <div className="absolute inset-0 hidden bg-gradient-to-r from-ink/65 via-ink/30 to-transparent lg:block" />
        </>
      ) : (
        <div className="absolute inset-0 sky-center-wash" />
      )}
    </div>
  );
}
