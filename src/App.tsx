import { getItemById } from "./helpers/get-item-by-id";
import { useCreateSwapy } from "./hooks/useCreateSwapy";
import { SwapNewArea } from "./SwapNewArea";

type SlotItems = Record<string, "a" | "b" | "c" | "d">;

const DEFAULT: SlotItems = {
  "1": "a",
  "3": "c",
  "4": "d",
  "2": "b",
};

function App() {
  const slotItems: SlotItems = localStorage.getItem("slotItem")
    ? JSON.parse(localStorage.getItem("slotItem")!)
    : DEFAULT;

  useCreateSwapy();

  return (
    <>
      <div className="container">
        <div className="slot a" data-swapy-slot="1">
          {getItemById(slotItems["1"])}
        </div>
        <div className="second-row">
          <div className="slot b" data-swapy-slot="2">
            {getItemById(slotItems["2"])}
          </div>
          <div className="slot c" data-swapy-slot="3">
            {getItemById(slotItems["3"])}
          </div>
        </div>
        <div className="slot d" data-swapy-slot="4">
          {getItemById(slotItems["4"])}
        </div>
      </div>

      <SwapNewArea />
    </>
  );
}

export default App;
