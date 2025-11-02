export interface IProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  variants: IVariant[];
}
export interface IVariant {
  colorName: string;
  colorCode: string;
  image: string[];
  sizes: string[];
}
export type CartItem = IProduct & {
  quantity: number;
  totalPrice: number;
  selectedSize: string;
  selectedColor: string;
  colorCode: string;
};
export type TColorProduct = {
  colorName: string;
  colorCode: string;
};
