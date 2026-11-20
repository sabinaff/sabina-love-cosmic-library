import { describe, expect, it } from "vitest";
import { books, getPurchasableBook } from "@/lib/books";

describe("getPurchasableBook", () => {
  it("rejects an unknown slug", () => {
    expect(getPurchasableBook("not-a-book")).toBeUndefined();
  });

  it("rejects a known book that has no Stripe price ID yet", () => {
    for (const book of books) {
      expect(getPurchasableBook(book.slug)).toBeUndefined();
    }
  });
});
