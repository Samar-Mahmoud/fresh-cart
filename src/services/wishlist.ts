import { authFetch } from "@/lib/auth";
import { Product } from "@/types/products";
import {
  WishlistActionResponse,
  WishlistItem,
  WishlistItemsResponse,
} from "@/types/wishlist";
import { revalidatePath } from "next/cache";

const WISHLIST = "/v1/wishlist";

export async function getWishlistItems(): Promise<{
  count: 0;
  data: WishlistItem[];
}> {
  const res = await authFetch<WishlistItemsResponse>(WISHLIST, {
    method: "GET",
    cache: "force-cache",
  });

  if (res.isError) {
    console.error(res.message);
    return { count: 0, data: [] };
  }

  const { count, data } = res.data;

  return { count, data };
}

export async function addToWishlist(productId: Product["_id"]): Promise<
  | { isError: true; message: string }
  | {
      isError: false;
      data: string[];
    }
> {
  const res = await authFetch<WishlistActionResponse>(WISHLIST, {
    method: "POST",
    body: JSON.stringify({ productId }),
  });

  if (res.isError) {
    console.error(res.message);
    return res;
  }

  revalidatePath("/wishlist");

  return { isError: false, data: res.data.data };
}

export async function removeProduct(productId: Product["_id"]): Promise<
  | { isError: true; message: string }
  | {
      isError: false;
      data: string[];
    }
> {
  const res = await authFetch<WishlistActionResponse>(
    `${WISHLIST}/${productId}`,
    { method: "DELETE" },
  );

  if (res.isError) {
    console.error(res.message);
    return res;
  }

  revalidatePath("/wishlist");

  return { isError: false, data: res.data.data };
}
