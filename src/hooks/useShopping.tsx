import { ShoppingContext } from "@/context/Shopping";
import { useContext } from "react";

export default function useShopping() {
  return useContext(ShoppingContext);
}
