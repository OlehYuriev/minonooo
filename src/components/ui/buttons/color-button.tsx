import { IVariant } from "@/type/product";
import { memo } from "react";
type Props = {
  hendleColor: (color: string, colorCode: string) => void;
  variant: IVariant;
  colorName: string;
};
export const ColorButton = memo(function ColorButton({
  variant,
  hendleColor,
  colorName,
}: Props) {
  return (
    <button
      type="button"
      onClick={() => hendleColor(variant.colorName, variant.colorCode)}
      className={` w-[2.4rem] h-[3.4rem]
						transition-all ${
              variant.colorName === colorName
                ? "border-3 border-black"
                : "border-3 border-transparent"
            }`}
      style={{ backgroundColor: variant.colorCode }}
    ></button>
  );
});
