import { useEffect } from "react";
import { createSwapy } from "swapy";

type SwapEventArray = Array<{
  slot: string;
  item: string | null;
}>;

export interface SwapEventDataData {
  map: SwapEventMap;
  array: SwapEventArray;
  object: SwapEventObject;
}

type SwapEventMap = Map<string, string | null>;

type SwapEventObject = Record<string, string | null>;

export function useCreateSwapy(
  containerName = ".container",
  onSwap?: (data: SwapEventDataData) => void
) {
  useEffect(() => {
    const containerElement = document.body.querySelector(containerName)!;

    if (!containerElement) return;

    const swapy = createSwapy(containerElement);
    swapy.onSwap(({ data }) => {
      if (onSwap) {
        return onSwap(data);
      }
      localStorage.setItem("slotItem", JSON.stringify(data.object));
    });
  }, [containerName, onSwap]);
}
