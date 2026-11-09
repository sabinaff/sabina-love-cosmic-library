import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { CosmicBackdrop } from "@/components/site/CosmicBackdrop";
import { SkyBackdrop } from "@/components/site/SkyBackdrop";
import { Globe } from "@/components/site/Globe";
import { Reveal } from "@/components/site/Reveal";
import { BookCard } from "@/components/site/BookCard";
import { books } from "@/lib/books";
import portrait from "@/assets/author-portrait.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sabina Love — Digital Books for the Awakening Soul" },
      {
        name: "description",
        content:
          "Discover Sabina Love's collection of luxury digital books on love, light and consciousness. Begin your journey home.",
      },
      { property: "og:title", content: "Sabina Love — Digital Books for the Awakening Soul" },
      {
        property: "og:description",
        content: "Luxury digital books on love, light and consciousness. Begin your journey home.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <AboutHeart />
      <FeaturedBooks />
      <FeaturedQuote />
      <BeginJourney />
    </>
  );
}

function Hero() {
  return (
    <section className="relative isolate flex min-h-svh overflow-hidden">
      <SkyBackdrop priority />

      {/* Desktop: massive globe on the right, bleeding off the edge, clear of the text column */}
      <Globe
        priority
        className="absolute top-[56%] right-[-24vw] hidden aspect-square w-[min(72vw,112svh)] max-w-[1300px] -translate-y-1/2 lg:block"
      />
      {/* Mobile/tablet: globe rises as a horizon beneath the text */}
      <Globe
        priority
        parallax={0.08}
        className="absolute bottom-[-64vw] left-1/2 aspect-square w-[125vw] -translate-x-1/2 lg:hidden"
      />

      {/* Fade the globe under the nav and into the next section */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-background to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl items-start px-6 pt-36 pb-[70vw] md:px-10 lg:items-center lg:py-32">
        <div className="mx-auto flex w-full max-w-xl flex-col items-center text-center lg:mx-0 lg:w-[44%]">
          <h1
            className="animate-rise text-glow font-display text-[clamp(3.6rem,9vw,8rem)] leading-[0.9] font-medium tracking-[0.08em] text-cream uppercase [animation-delay:150ms]"
          >
            Sabina
            <br />
            Love
          </h1>

          <div className="mt-10 hairline w-32 animate-rise [animation-delay:300ms]" />

          <blockquote className="mt-10 max-w-md animate-rise font-display text-xl leading-relaxed font-light text-cream text-glow italic md:text-2xl [animation-delay:450ms]">
            “We are not here to find the light. We are here to remember that we are it.”
          </blockquote>

          <p className="mt-6 animate-rise text-glow text-[0.65rem] tracking-[0.22em] text-cream/90 uppercase md:text-xs md:tracking-[0.3em] [animation-delay:600ms]">
            Books of love · light · consciousness
          </p>

          <div className="mt-12 flex animate-rise flex-col gap-4 sm:flex-row [animation-delay:750ms]">
            <Button asChild variant="gold" size="xl">
              <Link to="/collection">Explore Collection</Link>
            </Button>
            <Button asChild variant="goldOutline" size="xl">
              <Link to="/about">Meet the Author</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-10 z-10 hidden items-center gap-4 lg:flex">
        <span className="h-px w-12 bg-gold/60" />
        <span className="text-[0.6rem] tracking-[0.4em] text-cream/50 uppercase">Scroll</span>
      </div>
    </section>
  );
}

function AboutHeart() {
  return (
    <section className="relative py-28 md:py-40">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 md:grid-cols-2 md:gap-24 md:px-10">
        <Reveal className="relative mx-auto w-full max-w-sm md:max-w-none">
          <div className="absolute -top-5 -left-5 h-full w-full border border-gold/30" />
          <img
            src={portrait}
            alt="Portrait of Sabina Love in soft golden light"
            width={1024}
            height={1280}
            loading="lazy"
            className="relative aspect-[4/5] w-full object-cover shadow-book"
          />
        </Reveal>

        <Reveal delay={150} className="text-center md:text-left">
          <span className="eyebrow">The Author · The Heart</span>
          <h2 className="mt-6 text-4xl leading-tight text-cream md:text-5xl">
            Writing from the quiet place <em className="text-gold-gradient">where love begins</em>
          </h2>
          <div className="mt-8 hairline w-24 md:mx-0 mx-auto" />
          <p className="mt-8 leading-relaxed text-cream/70">
            Sabina Love writes for those who feel deeply — the dreamers, the seekers, the ones who
            look up at the night sky and sense they belong to something vast. Her books are
            invitations: to slow down, to soften, and to remember the light you carry.
          </p>
          <p className="mt-5 leading-relaxed text-cream/70">
            Each page is crafted as a sanctuary — a place to rest, reflect and return to yourself.
          </p>
          <Link
            to="/about"
            className="mt-10 inline-block link-luxe text-[0.72rem] tracking-[0.3em] text-gold uppercase"
          >
            Read her story
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function FeaturedBooks() {
  return (
    <section className="relative border-y border-border py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal className="text-center">
          <span className="eyebrow">From the Collection</span>
          <h2 className="mt-6 text-4xl text-cream md:text-5xl">Books for the soul</h2>
        </Reveal>
        <div className="mt-20 grid gap-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {books.slice(0, 3).map((b, i) => (
            <Reveal key={b.slug} delay={i * 150}>
              <BookCard book={b} />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-20 flex justify-center">
          <Button asChild variant="goldOutline" size="xl">
            <Link to="/collection">View the full collection</Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

function FeaturedQuote() {
  return (
    <section className="relative isolate overflow-hidden py-32 md:py-48">
      <SkyBackdrop side="center" />
      <Reveal className="relative mx-auto max-w-4xl px-6 text-center md:px-10">
        <span className="font-display text-7xl leading-none text-gold/70">“</span>
        <p className="mt-2 font-display text-3xl leading-snug font-light text-cream text-glow italic md:text-5xl md:leading-tight">
          Love is the oldest light in the universe. It travelled through every star to find its way
          into your heart.
        </p>
        <div className="mx-auto mt-12 hairline w-24" />
        <p className="mt-6 eyebrow">Sabina Love · Born of Stars</p>
      </Reveal>
    </section>
  );
}

function BeginJourney() {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-[52vw] md:pt-40 md:pb-[340px]">
      <div className="absolute inset-0 -z-10 bg-night" />
      <div className="absolute inset-0 -z-10 starfield-far opacity-70" />
      {/* Globe horizon rising from below, kept under the text area */}
      <Globe
        parallax={0}
        className="absolute bottom-[-78vw] left-1/2 -z-10 aspect-square w-[110vw] -translate-x-1/2 opacity-70 md:bottom-[-760px] md:w-[1050px]"
      />
      <Reveal className="relative mx-auto max-w-2xl px-6 text-center">
        <span className="eyebrow">An Invitation</span>
        <h2 className="mt-6 text-5xl text-cream md:text-6xl">Begin Your Journey</h2>
        <p className="mx-auto mt-8 max-w-lg leading-relaxed text-cream/70">
          Step into a library of light. Choose the book that calls to you, and let it carry you home.
        </p>
        <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
          <Button asChild variant="gold" size="xl">
            <Link to="/collection">Explore Collection</Link>
          </Button>
          <Button asChild variant="goldOutline" size="xl">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
