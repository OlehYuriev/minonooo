import {
  addToFavoriteCart,
  useFavoriteCartItem,
} from "@/store/use-favorite-store";
import { IProduct } from "@/type/product";
import { memo } from "react";
import { HeartIcon } from "../icons";
import { IconToggleButton } from "../ui/buttons";
type Props = {
  product: IProduct | undefined;
};
export const FavoriteToggle = memo(function FavoriteToggle({ product }: Props) {
  const itemInFavoriteCart = useFavoriteCartItem(product?.id || 0);
  const favorite = !!itemInFavoriteCart;
  const handleAddFavorite = () => {
    if (!product) return;
    addToFavoriteCart({ ...product });
  };
  return (
    <IconToggleButton
      title="Уподобали"
      active={favorite}
      onClick={handleAddFavorite}
    >
      <HeartIcon className="w-8" fill={favorite ? "white" : "#2D2D2D"} />
    </IconToggleButton>
  );
});
