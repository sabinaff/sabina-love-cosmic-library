import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SkyBackdrop } from "@/components/site/SkyBackdrop";

export const Route = createFileRoute("/payment-canceled")({
  head: () => ({
    meta: [
      { title: "Checkout Canceled — Sabina Love" },
      {
        name: "description",
        content: "Your checkout was canceled and no charge was made. The collection is here whenever you are ready.",
      },
      { property: "og:title", content: "Checkout Canceled — Sabina Love" },
      { property: "og:description", content: "No charge was made. The collection is here whenever you are ready." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PaymentCanceled,
});

function PaymentCanceled() {
  return (
    <section className="relative isolate flex min-h-svh items-center overflow-hidden">
      <SkyBackdrop side="center" />
      <div className="relative mx-auto max-w-xl px-6 py-32 text-center">
        <span className="eyebrow animate-rise">Checkout canceled</span>
        <h1 className="mt-6 animate-rise text-5xl text-cream text-glow md:text-6xl [animation-delay:150ms]">
          No charge was made
        </h1>
        <div className="mx-auto mt-8 hairline w-24 animate-rise [animation-delay:300ms]" />
        <p className="mt-8 animate-rise leading-relaxed text-cream/80 [animation-delay:450ms]">
          Nothing was taken from your account. The collection will be here whenever you are ready.
        </p>
        <div className="mt-10 flex animate-rise justify-center [animation-delay:600ms]">
          <Button asChild variant="goldOutline" size="xl">
            <Link to="/collection">Return to the collection</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
