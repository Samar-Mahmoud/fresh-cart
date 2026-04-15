"use server";

import { OrderData } from "@/schema/order";
import { createCashOrder, createCheckoutSession } from "@/services/orders";
import { CartItems } from "@/types/cart";
import { PaymentMethod } from "@/types/orders";

export async function createOrderAction(
  data: OrderData,
  cartId: CartItems["_id"],
  method: PaymentMethod,
) {
  if (method === "cash") {
    const res = await createCashOrder(data, cartId);
    return { ...res, url: null };
  }
  return await createCheckoutSession(data, cartId);
}
