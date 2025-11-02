import { Button } from "@/components/ui/buttons";
import { OverlayPanel } from "@/components/ui/overlay-panel";
import { TitleBar } from "@/components/ui/title-bar";
import { Dispatch, SetStateAction } from "react";

type Props = {
  openFilter: boolean;
  setOpenFilter: React.Dispatch<React.SetStateAction<boolean>>;
  handleOpenFilter: () => void;
  sizes: string[];
  setSizes: Dispatch<SetStateAction<string[]>>;
};
const sizesFilter = ["XS", "S", "M", "L", "XL", "XXL"];
export function CatalogFilter({
  openFilter,
  setOpenFilter,
  handleOpenFilter,
  sizes,
  setSizes,
}: Props) {
  const handleAddSizes = (currentSize: string) => {
    if (sizes.includes(currentSize)) {
      setSizes((prev) => prev.filter((size) => size !== currentSize));
    } else {
      setSizes((prev) => [...prev, currentSize]);
    }
  };
  return (
    <OverlayPanel
      open={openFilter}
      setOpen={setOpenFilter}
      position="right"
      className={`w-full min-[500px]:w-3/4 md:w-2/4 lg:w-2/5`}
    >
      <TitleBar title={"Фільтр"} close={handleOpenFilter} />
      <div className="flex flex-wrap  gap-2 mt-5">
        {sizesFilter.map((size) => (
          <div className="w-31" key={size}>
            <Button
              text={size}
              className={`border-1 border-[#cecece] !py-2.5 ${
                sizes.includes(size) ? "bg-[#e5e5e5]" : ""
              }`}
              onClick={() => handleAddSizes(size)}
            />
          </div>
        ))}
      </div>
    </OverlayPanel>
  );
}
