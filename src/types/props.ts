import React from "react";
import { Product } from "./products";
import { Brand } from "./brands";
import { Category } from "./categories";
import { Button } from "@/components/ui/button";

export interface SearchInputProps {
  placeholder: string;
  rounded?: string;
  onSearch?: () => void;
}

export interface IconProps {
  size?: string;
  className?: string;
}

export interface StoreBenefitProps {
  iconClasses: string;
  wrapperClasses?: string;
  benefits: {
    title: string;
    description: string;
    icon: { node: React.ReactNode; style?: string };
  }[];
}

export interface ImagesSliderProps {
  images: Product["images"];
  title: Product["title"];
}

export interface ProductQuantityProps {
  id: Product["_id"];
  title: Product["title"];
  quantity: Product["quantity"];
  price: Product["price"];
}

export interface ProductTabsProps {
  description: Product["description"];
  subcategory: Product["subcategory"];
  categoryName: Product["category"]["name"];
  brandName: Product["brand"]["name"];
  sold: Product["sold"];
  reviews: Product["reviews"];
}

export interface HeaderProps {
  title: string;
  description: string;
  classes: string;
  page?: string;
  links?: { label: string; href: string }[];
  children: React.ReactNode;
}

export interface SearchFiltersProps {
  categories: Category[];
  brands: Brand[];
}

export interface SearchFilterBadgesProps {
  badges: Partial<{
    keyword: { value: string };
    category: { value: string; label: string }[];
    brand: { value: string; label: string }[];
    price: { value: string };
  }>;
}

export interface ActionButtonProps extends React.ComponentPropsWithoutRef<
  typeof Button
> {
  id: Product["_id"];
  title: Product["title"];
  count?: number;
}

export interface OrderSummaryProps {
  numOfCartItems: number;
  totalCartPrice: number;
}

export interface CartItemQuantityProps {
  id: Product["_id"];
  quantity: number;
  count: number;
}

export interface ProvidersProps {
  children: React.ReactNode;
  wishlist: string[];
  cart: number;
}
