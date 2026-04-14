"use server";

import { OrderData } from "@/schema/order";
import { createCashOrder } from "@/services/order";
import { CartItems } from "@/types/cart";

export async function createCashOrderAction(
  data: OrderData,
  cartId: CartItems["_id"],
) {
  return await createCashOrder(data, cartId);
}
