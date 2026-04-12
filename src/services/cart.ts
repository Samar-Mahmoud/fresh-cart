import { authFetch } from "@/lib/auth";
import { CartItems, SuccessResponse } from "@/types/cart";
import { Product } from "@/types/products";

export async function addToCart(productId: Product["_id"]) {
  try {
    const res = await authFetch<SuccessResponse<CartItems>>("/v2/cart", {
      method: "POST",
      body: JSON.stringify({ productId }),
    });

    const {
      data: { totalCartPrice },
      numOfCartItems,
    } = res;

    return { numOfCartItems, totalCartPrice };
  } catch (error) {
    console.error(error);
    return null;
  }
}
