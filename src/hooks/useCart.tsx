import { CartContext } from "@/context/Cart";
import { useContext } from "react";

export default function useCart() {
  return useContext(CartContext);
}
