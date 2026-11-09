import { useEffect, useRef } from "react";
import earth from "@/assets/earth-globe.jpg";
import { cn } from "@/lib/utils";

/**
 * Photoreal Earth with atmospheric glow, gentle float and scroll parallax.
 * The photo sits on pure black and blends with `screen`, so only the planet shows.
 */
export function Globe({
  className,
  parallax = 0.18,
  priority = false,
  imgClassName,
}: {
  className?: string;
  parallax?: number;
  priority?: boolean;
  imgClassName?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || parallax === 0) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        el.style.transform = `translate3d(0, ${window.scrollY * parallax}px, 0)`;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, [parallax]);

  return (
    <div aria-hidden className={cn("pointer-events-none select-none", className)}>
      <div ref={ref} className="relative h-full w-full will-change-transform">
        <div className="relative h-full w-full animate-float">
          {/* luminous halo behind the planet */}
          <div className="absolute -inset-[18%] rounded-full glow-earth blur-2xl animate-breathe" />
          <div className="absolute inset-[8%] rounded-full glow-gold blur-3xl" />
          <img
            src={earth}
            alt=""
            width={1536}
            height={1536}
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : "auto"}
            className={cn("relative h-full w-full object-contain mix-blend-screen", imgClassName)}
          />
        </div>
      </div>
    </div>
  );
}
