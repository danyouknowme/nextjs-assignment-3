export interface Product {
  id: string;
  name: string;
  variants: Variant[];
  sku: string;
  brand: string;
  description: string;
}

export interface Variant {
  stock: number;
  size: string;
  discount: number;
  price: number;
  imageUrl: string;
  color: string;
  sku: string;
}

export interface GetProductItems {
  items: Product[];
}

export interface ProductProps {
  product: Product;
}

export interface LikeButtonProps {
  size: string;
  liked: boolean;
  setLiked: (value: boolean) => void;
}

export interface ColorSelectorProps {
  size: string;
  variants: Variant[];
  selectedVariant: Variant;
  setSelectedVariant: (variant: Variant) => void;
}

export interface SizeSelectorProps {
  variants: Variant[] | null;
  selectedVariant: Variant | null;
  setSelectedVariant: (variants: Variant) => void;
}

export interface SpinnerProps {
  variant: Variant | null;
  selectedAmount: number;
  setSelectedAmount: (value: number) => void;
}
