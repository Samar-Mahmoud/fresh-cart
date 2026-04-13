"use server";

import { addToWishlist, removeProduct } from "@/services/wishlist";
import { Product } from "@/types/products";

export async function addToWishlistAction(productId: Product["_id"]) {
  return await addToWishlist(productId);
}

export async function removeProductAction(productId: Product["_id"]) {
  return await removeProduct(productId);
}
