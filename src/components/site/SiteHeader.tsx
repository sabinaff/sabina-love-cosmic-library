import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/collection", label: "Collection" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-luxe",
        scrolled || open
          ? "border-b border-border bg-background/75 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-10">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="font-display text-xl tracking-[0.32em] text-cream transition-colors hover:text-gold-soft"
        >
          SABINA <span className="text-gold">LOVE</span>
        </Link>

        <ul className="hidden items-center gap-12 md:flex">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={{ exact: true }}
                className="link-luxe text-[0.72rem] uppercase tracking-[0.3em] text-cream/80 transition-colors duration-500 hover:text-cream data-[status=active]:text-gold-soft"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="text-cream md:hidden"
        >
          {open ? <X className="size-6" strokeWidth={1.2} /> : <Menu className="size-6" strokeWidth={1.2} />}
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col items-center gap-8 pb-10 pt-4 md:hidden">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={{ exact: true }}
                onClick={() => setOpen(false)}
                className="font-display text-2xl tracking-[0.2em] text-cream/85 data-[status=active]:text-gold"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
