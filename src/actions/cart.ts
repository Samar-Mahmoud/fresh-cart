"use server";

import {
  addToCart,
  clearCart,
  removeProduct,
  updateProduct,
} from "@/services/cart";
import { Product } from "@/types/products";

export async function addToCartAction(
  productId: Product["_id"],
  count: number,
) {
  return await addToCart(productId, count);
}

export async function clearCartAction() {
  return await clearCart();
}

export async function removeProductAction(productId: Product["_id"]) {
  return await removeProduct(productId);
}

export async function updateProductQuantity(
  productId: Product["_id"],
  count: number,
) {
  return await updateProduct(productId, count);
}
