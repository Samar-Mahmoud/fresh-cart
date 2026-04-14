import { authFetch } from "@/lib/auth";
import { CartActionResponse, CartItemsResponse } from "@/types/cart";
import { Product } from "@/types/products";
import { revalidatePath } from "next/cache";

const CART = "/v2/cart";

export async function getCartItems() {
  try {
    const res = await authFetch<CartItemsResponse>(CART, {
      method: "GET",
      cache: "force-cache",
    });

    const {
      data: { products, totalCartPrice, _id: cartId, cartOwner },
      numOfCartItems,
    } = res;

    return { totalCartPrice, numOfCartItems, products, cartId, cartOwner };
  } catch (error) {
    console.error(error);

    return {
      totalCartPrice: 0,
      numOfCartItems: 0,
      products: [],
      cartId: null,
      cartOwner: null,
    };
  }
}

export async function addToCart(
  productId: Product["_id"],
  count: number,
): Promise<CartActionResponse> {
  try {
    const res = await authFetch<CartItemsResponse>(CART, {
      method: "POST",
      body: JSON.stringify({ productId }),
    });

    if (count > 1) {
      return await updateProduct(productId, count);
    }

    const {
      data: { totalCartPrice },
      numOfCartItems,
    } = res;

    revalidatePath("/cart");

    return { isError: false, data: { numOfCartItems, totalCartPrice } };
  } catch (error) {
    console.error(error);
    return { isError: true, message: (error as Error).message };
  }
}

export async function clearCart() {
  try {
    await authFetch(CART, { method: "DELETE" });

    revalidatePath("/cart");

    return { isError: false, message: "Your cart has been cleared!" };
  } catch (error) {
    console.error(error);
    return { isError: true, message: (error as Error).message };
  }
}

export async function removeProduct(
  productId: Product["_id"],
): Promise<CartActionResponse> {
  try {
    const res = await authFetch<CartItemsResponse>(`${CART}/${productId}`, {
      method: "DELETE",
    });

    const {
      numOfCartItems,
      data: { totalCartPrice },
    } = res;
    revalidatePath("/cart");

    return { isError: false, data: { numOfCartItems, totalCartPrice } };
  } catch (error) {
    console.error(error);
    return { isError: true, message: (error as Error).message };
  }
}

export async function updateProduct(
  productId: Product["_id"],
  count: number,
): Promise<CartActionResponse> {
  try {
    const res = await authFetch<CartItemsResponse>(`${CART}/${productId}`, {
      method: "PUT",
      body: JSON.stringify({ count }),
    });

    const {
      data: { totalCartPrice },
      numOfCartItems,
    } = res;

    revalidatePath("/cart");

    return { isError: false, data: { numOfCartItems, totalCartPrice } };
  } catch (error) {
    console.error(error);
    return { isError: true, message: (error as Error).message };
  }
}
