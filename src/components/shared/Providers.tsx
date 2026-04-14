"use client";

import { ShoppingProvider } from "@/context/Shopping";
import { ProvidersProps } from "@/types/props";
import { SessionProvider } from "next-auth/react";
import React from "react";

export default function Providers({
  children,
  wishlist,
  cart,
}: ProvidersProps) {
  return (
    <SessionProvider>
      <ShoppingProvider wishlist={wishlist} cart={cart}>
        {children}
      </ShoppingProvider>
    </SessionProvider>
  );
}
