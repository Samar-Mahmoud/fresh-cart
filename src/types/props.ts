import React from "react";
import { Product } from "./products";

export interface SearchInputProps {
  placeholder: string;
  rounded?: string;
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
