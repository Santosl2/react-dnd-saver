import { A, C, D, B } from "../components/SwipeItens";

export function getItemById(itemId: "a" | "b" | "c" | "d" | null) {
  switch (itemId) {
    case "a":
      return <A />;
    case "c":
      return <C />;
    case "d":
      return <D />;
    case "b":
      return <B />;
  }
}
