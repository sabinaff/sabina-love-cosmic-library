import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import Stripe from "stripe";
import { getPurchasableBook } from "@/lib/books";

const bodySchema = z.object({ slug: z.string().min(1).max(100) });

export const Route = createFileRoute("/api/public/create-checkout")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let body: unknown;
        try {
          body = await request.json();
        } catch {
          return Response.json({ error: "Invalid request" }, { status: 400 });
        }
        const parsed = bodySchema.safeParse(body);
        if (!parsed.success) {
          return Response.json({ error: "Invalid request" }, { status: 400 });
        }

        // Only server-side catalog data decides what can be bought and for how
        // much — the client sends nothing but a slug.
        const book = getPurchasableBook(parsed.data.slug);
        if (!book?.stripePriceId) {
          return Response.json(
            { error: "This book is not available for purchase yet" },
            { status: 400 },
          );
        }

        const secretKey = process.env["STRIPE_SECRET_KEY"];
        if (!secretKey) {
          return Response.json({ error: "Payments are not configured" }, { status: 500 });
        }

        const stripe = new Stripe(secretKey, {
          httpClient: Stripe.createFetchHttpClient(),
        });
        const origin = new URL(request.url).origin;

        try {
          const session = await stripe.checkout.sessions.create({
            mode: "payment",
            line_items: [{ price: book.stripePriceId, quantity: 1 }],
            success_url: `${origin}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${origin}/payment-canceled`,
          });
          return Response.json({ url: session.url });
        } catch (error) {
          console.error(error);
          return Response.json({ error: "Could not start checkout" }, { status: 500 });
        }
      },
    },
  },
});
