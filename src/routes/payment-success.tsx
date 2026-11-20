import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SkyBackdrop } from "@/components/site/SkyBackdrop";

export const Route = createFileRoute("/payment-success")({
  head: () => ({
    meta: [
      { title: "Thank You — Sabina Love" },
      {
        name: "description",
        content: "Your purchase is complete. Thank you for welcoming a Sabina Love book into your life.",
      },
      { property: "og:title", content: "Thank You — Sabina Love" },
      { property: "og:description", content: "Your purchase is complete. Thank you." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PaymentSuccess,
});

function PaymentSuccess() {
  return (
    <section className="relative isolate flex min-h-svh items-center overflow-hidden">
      <SkyBackdrop side="center" />
      <div className="relative mx-auto max-w-xl px-6 py-32 text-center">
        <span className="eyebrow animate-rise">Payment complete</span>
        <h1 className="mt-6 animate-rise text-5xl text-cream text-glow md:text-6xl [animation-delay:150ms]">
          Thank you
        </h1>
        <div className="mx-auto mt-8 hairline w-24 animate-rise [animation-delay:300ms]" />
        <p className="mt-8 animate-rise leading-relaxed text-cream/80 [animation-delay:450ms]">
          Your book is on its way to you. May it meet you exactly where you are.
        </p>
        <div className="mt-10 flex animate-rise justify-center [animation-delay:600ms]">
          <Button asChild variant="gold" size="xl">
            <Link to="/collection">Back to the collection</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
