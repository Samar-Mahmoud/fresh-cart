import { authFetch } from "@/lib/auth";
import { CartItems, SuccessResponse } from "@/types/cart";
import { Product } from "@/types/products";
import { revalidatePath } from "next/cache";

export async function getCartItems() {
  try {
    const res = await authFetch<SuccessResponse<CartItems>>("/v2/cart", {
      method: "GET",
      cache: "force-cache",
    });

    const {
      data: { products, totalCartPrice },
      numOfCartItems,
    } = res;

    return { totalCartPrice, numOfCartItems, products };
  } catch (error) {
    console.error(error);

    return { totalCartPrice: 0, numOfCartItems: 0, products: [] };
  }
}

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

    revalidatePath("/cart");

    return { numOfCartItems, totalCartPrice };
  } catch (error) {
    console.error(error);
    return { numOfCartItems: 0, totalCartPrice: 0 };
  }
}

export async function clearCart() {
  try {
    await authFetch<SuccessResponse<CartItems>>("/v2/cart", {
      method: "DELETE",
    });

    revalidatePath("/cart");

    return { isError: false, message: "Your cart has been cleared!" };
  } catch (error) {
    console.error(error);
    return { isError: true, message: (error as Error).message };
  }
}
