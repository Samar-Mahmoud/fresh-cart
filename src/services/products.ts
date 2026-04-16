import { authFetch } from "@/lib/auth";
import { ReviewData } from "@/schema/review";
import { Response } from "@/types";
import { Product, ProductsFilters, Review } from "@/types/products";
import { revalidatePath } from "next/cache";

const PRODUCTS = `${process.env.BASE_URL}/v1/products`;

export async function getProducts(filters: ProductsFilters = {}) {
  const q: string[] = [];
  Object.entries(filters).forEach(([key, value]) => {
    if (!value) return;
    const valueArr = Array.isArray(value) ? value : [value];
    valueArr.forEach((v) => q.push(`${key}=${v}`));
  });

  const res = await fetch(
    `${PRODUCTS}${q.length > 0 ? `?${q.join("&")}` : ""}`,
  );
  const data: Response<Product[]> = await res.json();
  return data;
}

export async function getProduct(id: Product["_id"]) {
  const res = await fetch(`${PRODUCTS}/${id}`);
  const data: Response<Product> = await res.json();
  return data.data;
}

export async function getProductReviews(id: Product["_id"]) {
  const res = await fetch(`${PRODUCTS}/${id}/reviews`);
  const data: Response<Review[]> = await res.json();
  return data.data;
}

export async function addReview(data: ReviewData, productId: Product["_id"]) {
  const res = await authFetch(`/v1/products/${productId}/reviews`, {
    method: "POST",
    body: JSON.stringify(data),
  });

  if (res.isError) {
    const message = res.errors?.msg || res.message;
    console.error(message);
    return { ...res, message };
  }

  revalidatePath(`/products/${productId}`);

  return { isError: false, message: `Review added successfully!` };
}

export async function updateReview(
  reviewId: Review["_id"],
  data: ReviewData,
  productId: Product["_id"],
) {
  const res = await authFetch(`/v1/reviews/${reviewId}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });

  if (res.isError) {
    const message = res.errors?.msg || res.message;
    console.error(message);
    return { ...res, message };
  }

  revalidatePath(`/products/${productId}`);

  return { isError: false, message: `Review updated successfully!` };
}

export async function removeReview(reviewId: Review["_id"]) {
  const res = await authFetch(`/v1/reviews/${reviewId}`, {
    method: "DELETE",
  });

  if (res.isError) {
    const message = res.errors?.msg || res.message;
    console.error(message);
    return { ...res, message };
  }

  revalidatePath("/products");

  return { isError: false, message: `Review deleted successfully!` };
}
