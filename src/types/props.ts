import React from "react";
import { Product } from "./products";
import { Brand } from "./brands";
import { Category } from "./categories";
import { Button } from "@/components/ui/button";
import { CartItems } from "./cart";
import { Address } from "./addresses";

export interface SearchInputProps {
  placeholder: string;
  rounded?: string;
  onSearch?: () => void;
}

export interface IconProps {
  className: string;
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
  id: Product["_id"];
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

export interface ProductButtonProps extends React.ComponentPropsWithoutRef<
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

export interface CheckoutOrderSummaryProps extends OrderSummaryProps {
  products: CartItems["products"];
  cartId: CartItems["_id"];
}

export interface OrderButtonProps extends React.ComponentPropsWithoutRef<
  typeof Button
> {
  cartId: CartItems["_id"];
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

export interface AddressButtonProps extends React.ComponentPropsWithoutRef<
  typeof Button
> {
  id: Address["_id"];
}

export interface ForgotPasswordProps {
  onNext: (email: string) => void;
}
export interface VerifcationCodeProps {
  email: string;
  onNext: () => void;
  onBack: () => void;
}
export interface ResetPasswordProps {
  email: string;
}
