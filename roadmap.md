# Roadmap

## Stripe checkout (in progress)
- [x] Connect user's own Stripe account (key saved)
- [ ] Install stripe package + build checkout server route (`/api/public/create-checkout`)
- [ ] Add Buy buttons on book cards (render only when a Stripe price ID exists)
- [ ] Add payment-success and payment-canceled pages
- [ ] Verify: typecheck, build log, API rejects bad input, pages render
- [ ] Commit

## Waiting on the user
- Real book titles, descriptions, prices (current six are placeholders) → then create Stripe products/prices and fill `stripePriceId` in `src/lib/books.ts`
- Real book files + delivery choice (download page vs email) → wire delivery on the success page
- Real author content (story, quotes, email, Instagram) — still placeholder
