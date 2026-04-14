"use client";

import { ProvidersProps } from "@/types/props";
import { createContext, useState } from "react";

type ShoppingContextT = {
  cartCount: number;
  setCartCount: (c: number) => void;
  wishlist: string[];
  setWishlist: (p: string[]) => void;
};

export const ShoppingContext = createContext<ShoppingContextT>({
  cartCount: 0,
  setCartCount: () => {},
  wishlist: [],
  setWishlist: () => {},
});

export function ShoppingProvider({
  children,
  wishlist: wishlistProducts,
  cart,
}: ProvidersProps) {
  const [cartCount, setCartCount] =
    useState<ShoppingContextT["cartCount"]>(cart);
  const [wishlist, setWishlist] =
    useState<ShoppingContextT["wishlist"]>(wishlistProducts);

  return (
    <ShoppingContext
      value={{
        cartCount,
        setCartCount,
        wishlist,
        setWishlist,
      }}
    >
      {children}
    </ShoppingContext>
  );
}
