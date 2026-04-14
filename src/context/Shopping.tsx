"use client";

import { ProvidersProps } from "@/types/props";
import { createContext, useState } from "react";

export const ShoppingContext = createContext<{
  cartCount: number;
  setCartCount: (c: number) => void;
  wishlist: string[];
  setWishlist: (p: string[]) => void;
}>({
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
  const [cartCount, setCartCount] = useState<number>(cart);
  const [wishlist, setWishlist] = useState<string[]>(wishlistProducts);

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
