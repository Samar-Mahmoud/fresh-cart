"use client";

import { ShoppingProvider } from "@/context/Shopping";
import { store } from "@/redux/store";
import { ProvidersProps } from "@/types/props";
import { SessionProvider } from "next-auth/react";
import { Provider as StoreProvider } from "react-redux";

export default function Providers({
  children,
  wishlist,
  cart,
}: ProvidersProps) {
  return (
    <SessionProvider>
      <StoreProvider store={store}>
        <ShoppingProvider wishlist={wishlist} cart={cart}>
          {children}
        </ShoppingProvider>
      </StoreProvider>
    </SessionProvider>
  );
}
