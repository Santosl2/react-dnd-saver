import { useCallback } from "react";
import { User, User2 } from "./components/User";
import { SwapEventDataData, useCreateSwapy } from "./hooks/useCreateSwapy";

export function SwapNewArea() {
  const onSwap = useCallback((data: SwapEventDataData) => {
    console.log("Swapped", data);
    console.log(
      "Will save to local storage? No, because it is not implemented"
    );
  }, []);

  useCreateSwapy(".swap-new-area", onSwap);

  return (
    <div className="swap-new-area">
      <div className="slot a" data-swapy-slot="user-area">
        <User />
      </div>
      <div className="slot a" data-swapy-slot="user-area-two">
        <User2 />
      </div>
    </div>
  );
}
