"use server";

import { addToCart, clearCart, removeProduct } from "@/services/cart";
import { Product } from "@/types/products";

export async function addToCartAction(productId: Product["_id"]) {
  return await addToCart(productId);
}

export async function clearCartAction() {
  return await clearCart();
}

export async function removeProductAction(productId: Product["_id"]) {
  return await removeProduct(productId);
}
