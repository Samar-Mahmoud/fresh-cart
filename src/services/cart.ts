import { authFetch } from "@/lib/auth";
import { CartItems, SuccessResponse } from "@/types/cart";
import { Product } from "@/types/products";
import { revalidatePath } from "next/cache";

const CART = "/v2/cart";

export async function getCartItems() {
  try {
    const res = await authFetch<SuccessResponse<CartItems>>(CART, {
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

export async function addToCart(productId: Product["_id"]): Promise<
  | { isError: true; message: string }
  | {
      isError: false;
      data: {
        numOfCartItems: number;
        totalCartPrice: number;
      };
    }
> {
  try {
    const res = await authFetch<SuccessResponse<CartItems>>(CART, {
      method: "POST",
      body: JSON.stringify({ productId }),
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

export async function removeProduct(productId: Product["_id"]): Promise<
  | { isError: true; message: string }
  | {
      isError: false;
      data: {
        numOfCartItems: number;
        totalCartPrice: number;
      };
    }
> {
  try {
    const res = await authFetch<SuccessResponse<CartItems>>(
      `${CART}/${productId}`,
      { method: "DELETE" },
    );

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

export async function updateProduct(productId: Product["_id"], count: number) {
  try {
    await authFetch<SuccessResponse<CartItems>>(`${CART}/${productId}`, {
      method: "PUT",
      body: JSON.stringify({ count }),
    });

    revalidatePath("/cart");

    return { isError: false, message: "Your cart has been updated" };
  } catch (error) {
    console.error(error);
    return { isError: true, message: (error as Error).message };
  }
}
