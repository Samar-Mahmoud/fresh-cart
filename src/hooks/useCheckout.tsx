import { CheckoutContext } from "@/context/Checkout";
import { useContext } from "react";

export default function useCheckout() {
  return useContext(CheckoutContext);
}
