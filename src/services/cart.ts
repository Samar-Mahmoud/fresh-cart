import { authFetch } from "@/lib/auth";
import { CartActionResponse, CartItemsResponse } from "@/types/cart";
import { Product } from "@/types/products";
import { updateTag } from "next/cache";

const CART = "/v2/cart";

export async function getCartItems() {
  const res = await authFetch<CartItemsResponse>(CART, {
    method: "GET",
    cache: "force-cache",
    next: { tags: ["cart"] },
  });

  if (res.isError) {
    console.error(res.message);

    return {
      totalCartPrice: 0,
      numOfCartItems: 0,
      products: [],
      cartId: null,
    };
  }

  const {
    data: { products, totalCartPrice, _id: cartId },
    numOfCartItems,
  } = res.data;

  return { totalCartPrice, numOfCartItems, products, cartId };
}

export async function addToCart(
  productId: Product["_id"],
  count: number,
): Promise<CartActionResponse> {
  const res = await authFetch<CartItemsResponse>(CART, {
    method: "POST",
    body: JSON.stringify({ productId }),
  });

  if (res.isError) {
    console.error(res.message);
    return res;
  }

  if (count > 1) {
    return await updateProduct(productId, count);
  }

  const {
    data: { totalCartPrice },
    numOfCartItems,
  } = res.data;

  updateTag("cart");

  return { isError: false, data: { numOfCartItems, totalCartPrice } };
}

export async function clearCart() {
  const res = await authFetch(CART, { method: "DELETE" });

  if (res.isError) {
    console.error(res.message);
    return res;
  }

  updateTag("cart");

  return { isError: false, message: "Your cart has been cleared!" };
}

export async function removeProduct(
  productId: Product["_id"],
): Promise<CartActionResponse> {
  const res = await authFetch<CartItemsResponse>(`${CART}/${productId}`, {
    method: "DELETE",
  });

  if (res.isError) {
    console.error(res.message);
    return res;
  }
  const {
    numOfCartItems,
    data: { totalCartPrice },
  } = res.data;

  updateTag("cart");

  return { isError: false, data: { numOfCartItems, totalCartPrice } };
}

export async function updateProduct(
  productId: Product["_id"],
  count: number,
): Promise<CartActionResponse> {
  const res = await authFetch<CartItemsResponse>(`${CART}/${productId}`, {
    method: "PUT",
    body: JSON.stringify({ count }),
  });

  if (res.isError) {
    console.error(res.message);
    return res;
  }

  const {
    data: { totalCartPrice },
    numOfCartItems,
  } = res.data;

  updateTag("cart");

  return { isError: false, data: { numOfCartItems, totalCartPrice } };
}
