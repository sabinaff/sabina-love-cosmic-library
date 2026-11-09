import type { Book } from "@/lib/books";
import { cn } from "@/lib/utils";

/** Book with an embossed-style cover: artwork + title set in type over it. */
export function BookCover({ book, className }: { book: Book; className?: string }) {
  return (
    <div
      className={cn(
        "relative aspect-[2/3] overflow-hidden bg-card shadow-book transition-all duration-700 ease-luxe",
        className,
      )}
    >
      <img
        src={book.cover}
        alt={`${book.title} cover`}
        width={768}
        height={1152}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-luxe group-hover:scale-105"
      />
      {/* spine shading */}
      <div className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-ink/70 to-transparent" />
      <div className="absolute inset-0 flex flex-col items-center justify-between px-5 py-7 text-center">
        <span className="text-[0.55rem] uppercase tracking-[0.45em] text-gold-soft/90">Sabina Love</span>
        <div className="space-y-2">
          <h3 className="font-display text-2xl leading-tight text-cream md:text-[1.7rem]">{book.title}</h3>
          <div className="mx-auto hairline w-12" />
        </div>
      </div>
      {/* gold edge on hover */}
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gold/0 transition-all duration-700 ease-luxe group-hover:ring-gold/60" />
    </div>
  );
}

export function BookCard({ book }: { book: Book }) {
  return (
    <article className="group flex flex-col">
      <div className="relative">
        <div className="absolute -inset-6 rounded-full glow-gold opacity-0 blur-2xl transition-opacity duration-700 ease-luxe group-hover:opacity-100" />
        <BookCover
          book={book}
          className="relative group-hover:-translate-y-2 group-hover:shadow-gold"
        />
      </div>
      <div className="mt-8 flex flex-col items-center text-center">
        <span className="eyebrow">{book.theme}</span>
        <h3 className="mt-3 font-display text-2xl text-cream transition-colors duration-500 group-hover:text-gold-soft">
          {book.title}
        </h3>
        <p className="mt-1 font-display text-base italic text-muted-foreground">{book.subtitle}</p>
        <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/65">{book.description}</p>
        <div className="mt-5 flex items-center gap-4 text-[0.68rem] uppercase tracking-[0.28em] text-cream/50">
          <span>{book.format}</span>
          <span className="h-3 w-px bg-gold/40" />
          <span className="text-gold">{book.price}</span>
        </div>
      </div>
    </article>
  );
}
