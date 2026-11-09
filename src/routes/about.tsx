import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { CosmicBackdrop } from "@/components/site/CosmicBackdrop";
import { Globe } from "@/components/site/Globe";
import { Reveal } from "@/components/site/Reveal";
import portrait from "@/assets/author-portrait.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Sabina Love — Author of Love & Consciousness" },
      {
        name: "description",
        content:
          "Meet Sabina Love, author of luxury digital books on love, light and consciousness, and discover the heart behind her words.",
      },
      { property: "og:title", content: "About Sabina Love — Author of Love & Consciousness" },
      {
        property: "og:description",
        content: "Meet Sabina Love and discover the heart behind her words.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const pillars = [
  { title: "Love", text: "The thread that runs through every page — tender, fierce and endlessly patient." },
  { title: "Light", text: "Words that illuminate the dark seasons and reveal the gold within them." },
  { title: "Consciousness", text: "A gentle awakening to the vastness that lives quietly inside each of us." },
];

function AboutPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden pt-44 pb-28 md:pt-56 md:pb-40">
        <CosmicBackdrop intensity="subtle" />
        {/* Very subtle globe, kept to the far right and faded so text stays clear */}
        <Globe
          parallax={0.1}
          className="absolute top-1/2 right-[-30vw] -z-0 hidden aspect-square w-[60vw] max-w-[900px] -translate-y-1/2 opacity-35 blur-[1px] lg:block"
        />
        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <div className="max-w-2xl text-center lg:text-left">
            <span className="eyebrow animate-rise">About the Author</span>
            <h1 className="mt-6 animate-rise text-5xl leading-tight text-cream md:text-7xl [animation-delay:150ms]">
              A soul who writes <em className="text-gold-gradient">beneath the stars</em>
            </h1>
            <div className="mt-10 hairline mx-auto w-28 lg:mx-0 animate-rise [animation-delay:300ms]" />
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-[5fr_6fr] md:gap-24 md:px-10">
          <Reveal className="relative mx-auto w-full max-w-sm md:sticky md:top-32 md:max-w-none md:self-start">
            <div className="absolute -right-5 -bottom-5 h-full w-full border border-gold/30" />
            <img
              src={portrait}
              alt="Sabina Love in soft golden light"
              width={1024}
              height={1280}
              loading="lazy"
              className="relative aspect-[4/5] w-full object-cover shadow-book"
            />
          </Reveal>

          <div className="space-y-14">
            <Reveal>
              <span className="eyebrow">Chapter I</span>
              <h2 className="mt-4 text-3xl text-cream md:text-4xl">The beginning</h2>
              <p className="mt-6 leading-relaxed text-cream/70">
                Long before she called herself a writer, Sabina filled notebooks with letters to the
                night sky. She wrote about love the way others write about weather — as something
                that moves through everything, quietly changing the shape of the world.
              </p>
            </Reveal>
            <Reveal>
              <span className="eyebrow">Chapter II</span>
              <h2 className="mt-4 text-3xl text-cream md:text-4xl">The awakening</h2>
              <p className="mt-6 leading-relaxed text-cream/70">
                A season of loss became a season of listening. In the stillness she discovered a
                deeper voice — one that spoke of consciousness, of belonging, of the light that
                remains when everything else falls away. That voice became her first book.
              </p>
            </Reveal>
            <Reveal>
              <span className="eyebrow">Chapter III</span>
              <h2 className="mt-4 text-3xl text-cream md:text-4xl">The offering</h2>
              <p className="mt-6 leading-relaxed text-cream/70">
                Today, Sabina creates digital books as sanctuaries — beautifully crafted, deeply
                felt, and made to be returned to again and again. Her readers span every continent,
                united by the same quiet longing to come home to themselves.
              </p>
            </Reveal>
            <Reveal>
              <blockquote className="border-l border-gold/50 pl-8 font-display text-2xl leading-snug text-cream/90 italic md:text-3xl">
                “I write so that no one ever has to feel alone under the stars.”
              </blockquote>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative border-y border-border py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 md:grid-cols-3 md:px-10">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 150} className="text-center">
              <span className="font-display text-sm tracking-[0.4em] text-gold">0{i + 1}</span>
              <h3 className="mt-4 text-3xl text-cream">{p.title}</h3>
              <div className="mx-auto mt-6 hairline w-12" />
              <p className="mx-auto mt-6 max-w-xs leading-relaxed text-cream/65">{p.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-28 text-center md:py-36">
        <Reveal className="mx-auto max-w-xl px-6">
          <h2 className="text-4xl text-cream md:text-5xl">Find the book that calls to you</h2>
          <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild variant="gold" size="xl">
              <Link to="/collection">Explore Collection</Link>
            </Button>
            <Button asChild variant="goldOutline" size="xl">
              <Link to="/contact">Write to Sabina</Link>
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
