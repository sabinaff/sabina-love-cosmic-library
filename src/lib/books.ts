import quietReturn from "@/assets/cover-quiet-return.jpg";
import heartRemembers from "@/assets/cover-heart-remembers.jpg";
import bornOfStars from "@/assets/cover-born-of-stars.jpg";
import lettersSoul from "@/assets/cover-letters-soul.jpg";
import goldDark from "@/assets/cover-gold-dark.jpg";
import lightBegins from "@/assets/cover-light-begins.jpg";

export type Book = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  cover: string;
  format: string;
  price: string;
  theme: string;
};

export const books: Book[] = [
  {
    slug: "the-quiet-return",
    title: "The Quiet Return",
    subtitle: "A journey home to yourself",
    description:
      "Gentle meditations on stillness, presence, and the slow art of coming back to who you have always been.",
    cover: quietReturn,
    format: "eBook · 184 pages",
    price: "$18",
    theme: "Presence",
  },
  {
    slug: "the-heart-remembers",
    title: "The Heart Remembers",
    subtitle: "Love written in the stars",
    description:
      "An intimate collection on love, memory, and the invisible threads that connect every soul we meet.",
    cover: heartRemembers,
    format: "eBook · 212 pages",
    price: "$21",
    theme: "Love",
  },
  {
    slug: "born-of-stars",
    title: "Born of Stars",
    subtitle: "On consciousness and belonging",
    description:
      "A luminous exploration of our cosmic origins and the quiet knowing that we are made of light.",
    cover: bornOfStars,
    format: "eBook · 240 pages",
    price: "$24",
    theme: "Consciousness",
  },
  {
    slug: "letters-to-the-soul",
    title: "Letters to the Soul",
    subtitle: "Words for the tender hours",
    description:
      "Short letters to read slowly — at dawn, in grief, in joy — each one an invitation to bloom.",
    cover: lettersSoul,
    format: "eBook · 156 pages",
    price: "$16",
    theme: "Healing",
  },
  {
    slug: "gold-in-the-dark",
    title: "Gold in the Dark",
    subtitle: "Finding light in every shadow",
    description:
      "A guide to transforming difficult seasons into wisdom, and discovering the gold hidden within them.",
    cover: goldDark,
    format: "eBook · 198 pages",
    price: "$19",
    theme: "Transformation",
  },
  {
    slug: "where-light-begins",
    title: "Where Light Begins",
    subtitle: "Reflections on a new dawn",
    description:
      "Poetic reflections for beginnings — the first breath, the first step, the first light after night.",
    cover: lightBegins,
    format: "eBook · 172 pages",
    price: "$18",
    theme: "Renewal",
  },
];
