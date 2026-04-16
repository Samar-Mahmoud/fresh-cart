"use server";

import { ReviewData } from "@/schema/review";
import { addReview, removeReview, updateReview } from "@/services/products";
import { Product, Review } from "@/types/products";

export async function removeReviewAction(reviewId: Review["_id"]) {
  return await removeReview(reviewId);
}

export async function reviewAction(
  data: ReviewData,
  {
    isEdit,
    reviewId,
    productId,
  }: { isEdit: boolean; reviewId?: Review["_id"]; productId: Product["_id"] },
) {
  if (isEdit) {
    return await updateReview(reviewId!, data, productId);
  }
  return await addReview(data, productId);
}
