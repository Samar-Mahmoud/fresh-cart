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
  try {
    const res = await authFetch<WishlistItemsResponse>(WISHLIST, {
      method: "GET",
      cache: "force-cache",
    });

    const { count, data } = res;

    return { count, data };
  } catch (error) {
    console.error(error);

    return { count: 0, data: [] };
  }
}

export async function addToWishlist(productId: Product["_id"]): Promise<
  | { isError: true; message: string }
  | {
      isError: false;
      numOfWishlistItems: number;
    }
> {
  try {
    const res = await authFetch<WishlistActionResponse>(WISHLIST, {
      method: "POST",
      body: JSON.stringify({ productId }),
    });

    revalidatePath("/wishlist");

    return { isError: false, numOfWishlistItems: res.data.length };
  } catch (error) {
    console.error(error);
    return { isError: true, message: (error as Error).message };
  }
}

export async function removeProduct(productId: Product["_id"]): Promise<
  | { isError: true; message: string }
  | {
      isError: false;
      numOfWishlistItems: number;
    }
> {
  try {
    const res = await authFetch<WishlistActionResponse>(
      `${WISHLIST}/${productId}`,
      { method: "DELETE" },
    );

    revalidatePath("/wishlist");

    return { isError: false, numOfWishlistItems: res.data.length };
  } catch (error) {
    console.error(error);
    return { isError: true, message: (error as Error).message };
  }
}
