import type { community } from "api-server";

export const categoryNames: Record<community["category"], string> = {
  anime: "アニメ",
  geek: "ギーク",
  gurmand: "グルメ",
  sports: "スポーツ",
} as const;
