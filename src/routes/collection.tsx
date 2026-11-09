import { createFileRoute } from "@tanstack/react-router";
import { CosmicBackdrop } from "@/components/site/CosmicBackdrop";
import { Reveal } from "@/components/site/Reveal";
import { BookCard } from "@/components/site/BookCard";
import { books } from "@/lib/books";

export const Route = createFileRoute("/collection")({
  head: () => ({
    meta: [
      { title: "The Collection — Sabina Love Digital Books" },
      {
        name: "description",
        content:
          "Browse Sabina Love's collection of digital books on presence, love, healing and consciousness.",
      },
      { property: "og:title", content: "The Collection — Sabina Love Digital Books" },
      {
        property: "og:description",
        content: "Digital books on presence, love, healing and consciousness by Sabina Love.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CollectionPage,
});

function CollectionPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden pt-44 pb-24 md:pt-52 md:pb-32">
        <CosmicBackdrop intensity="subtle" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <span className="eyebrow animate-rise">The Collection</span>
          <h1 className="mt-6 animate-rise text-5xl text-cream md:text-7xl [animation-delay:150ms]">
            A library of light
          </h1>
          <div className="mx-auto mt-10 hairline w-28 animate-rise [animation-delay:300ms]" />
          <p className="mx-auto mt-8 max-w-xl animate-rise font-display text-xl leading-relaxed text-cream/75 italic [animation-delay:450ms]">
            Six digital books, each one a doorway — to stillness, to love, to the vastness within.
          </p>
        </div>
      </section>

      <section className="relative pb-32 md:pb-44">
        <div className="mx-auto grid max-w-6xl gap-x-12 gap-y-24 px-6 sm:grid-cols-2 md:px-10 lg:grid-cols-3">
          {books.map((b, i) => (
            <Reveal key={b.slug} delay={(i % 3) * 150}>
              <BookCard book={b} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
