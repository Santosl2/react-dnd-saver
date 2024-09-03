import { useEffect } from "react";
import { createSwapy } from "swapy";

export function useCreateSwapy() {
  useEffect(() => {
    const container = document.querySelector(".container")!;
    const swapy = createSwapy(container);
    swapy.onSwap(({ data }) => {
      localStorage.setItem("slotItem", JSON.stringify(data.object));
    });
  }, []);
}
