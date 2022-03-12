import type { community } from "api-server";
import { uuid } from "uuidv4";

export const dummyCommunity = (): community => {
  return {
    id: uuid(),
    name: "辛いもの部",
    details: "美味しくて辛い食べ物をいっぱい食べるよ",
    category: "gurmand",
  };
};
