"use server";

import { addToCart } from "@/services/cart";
import { Product } from "@/types/products";

export async function addToCartAction(productId: Product["_id"]) {
  return await addToCart(productId);
}
