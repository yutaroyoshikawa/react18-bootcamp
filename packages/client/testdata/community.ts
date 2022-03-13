import type { community } from "api-server";

export const dummyCommunity = (): community => {
  return {
    id: "id",
    name: "辛いもの部",
    details: "美味しくて辛い食べ物をいっぱい食べるよ",
    category: "gurmand",
  };
};
