import React from "react";
import { Product } from "./products";
import { Brand } from "./brands";
import { Category } from "./categories";

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

export interface SearchResultsProps extends SearchFiltersProps {
  products: Product[];
}
