"use server";

import { addToWishlist, removeProduct } from "@/services/wishlist";
import { Product } from "@/types/products";

export async function toggleItemAction(
  productId: Product["_id"],
  products: Product["_id"][],
  title: string,
) {
  if (products.includes(productId)) {
    const res = await removeProduct(productId);
    if (res.isError) {
      return {
        ...res,
        toastMessage: `Failed to remove ${title} from your wishlist. ${res.message}`,
      };
    }
    return { ...res, toastMessage: `${title} removed from your wishlist.` };
  }

  const res = await addToWishlist(productId);
  if (res.isError) {
    return {
      ...res,
      toastMessage: `Failed to add ${title} to your wishlist. ${res.message}`,
    };
  }
  return { ...res, toastMessage: `${title} added to your wishlist!` };
}

export async function addToWishlistAction(productId: Product["_id"]) {
  return await addToWishlist(productId);
}

export async function removeProductAction(productId: Product["_id"]) {
  return await removeProduct(productId);
}
