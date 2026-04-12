"use client";

import { createContext, useState } from "react";

export const CartContext = createContext<{
  count: number;
  setCount: (c: number) => void;
}>({
  count: 0,
  setCount: () => {},
});

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState<number>(0);

  return <CartContext value={{ count, setCount }}>{children}</CartContext>;
}
