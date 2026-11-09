import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 py-16 text-center md:px-10">
        <Link to="/" className="font-display text-2xl tracking-[0.36em] text-cream">
          SABINA <span className="text-gold">LOVE</span>
        </Link>
        <p className="max-w-md font-display text-lg italic text-muted-foreground">
          Words for the soul, written beneath the same sky.
        </p>
        <div className="hairline w-40 opacity-60" />
        <ul className="flex flex-wrap justify-center gap-8 text-[0.68rem] uppercase tracking-[0.3em] text-cream/60">
          <li><Link to="/" className="transition-colors hover:text-gold">Home</Link></li>
          <li><Link to="/about" className="transition-colors hover:text-gold">About</Link></li>
          <li><Link to="/collection" className="transition-colors hover:text-gold">Collection</Link></li>
          <li><Link to="/contact" className="transition-colors hover:text-gold">Contact</Link></li>
        </ul>
        <p className="text-[0.65rem] uppercase tracking-[0.3em] text-cream/35">
          © {new Date().getFullYear()} Sabina Love · All rights reserved
        </p>
      </div>
    </footer>
  );
}
