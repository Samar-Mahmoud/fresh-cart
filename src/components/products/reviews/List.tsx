"use client";

import { Product, Review } from "@/types/products";
import { useState } from "react";
import { ReviewForm } from "./Form";
import Rating from "../Rating";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { removeReviewAction } from "@/actions/reviews";
import { toast } from "sonner";
import { Spinner } from "@/components/ui/spinner";

export default function ReviewsList({
  reviews,
  userId,
}: {
  reviews: Product["reviews"];
  userId: string | null;
}) {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleRemoveAddress = async (id: Review["_id"]) => {
    setIsLoading(true);

    const res = await removeReviewAction(id);

    if (!res.isError) {
      toast.success(res.message);
    } else {
      toast.error(res.message);
    }

    setIsLoading(false);
  };
  return (
    <div className="space-y-4 p-4">
      <div className="space-y-4 max-h-95 overflow-y-auto no-scrollbar">
        {reviews.map(
          ({ _id: reviewId, user: { name, _id }, review, rating }) =>
            editingId === reviewId ? (
              <ReviewForm
                key={reviewId}
                data={{ review, rating }}
                reviewId={reviewId}
                onCancel={() => setEditingId(null)}
              />
            ) : (
              <div
                key={reviewId}
                className="p-4 flex items-center justify-between gap-3 bg-gray-50 rounded-xl border border-gray-200"
              >
                <div className="space-y-2">
                  <h5 className="text-base font-semibold text-gray-700">
                    {name}
                  </h5>

                  <Rating rating={rating} />

                  <p className="text-sm font-medium text-gray-500">{review}</p>
                </div>

                {userId === _id && (
                  <div className="flex gap-2 shrink-0">
                    <Button
                      onClick={() => setEditingId(reviewId)}
                      className="size-9 rounded-lg flex bg-transparent text-primary-main  hover:bg-primary-50 border-primary-main  hover:text-primary-main"
                    >
                      <svg
                        width="18"
                        height="14"
                        viewBox="0 0 18 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.3989 0.579688L10.1712 1.80742L13.9419 5.57812L15.1696 4.35039C15.5415 3.98125 15.7493 3.47813 15.7493 2.95312C15.7493 2.42812 15.5415 1.925 15.1696 1.55586L14.1934 0.579688C13.8243 0.207813 13.3212 0 12.7962 0C12.2712 0 11.768 0.207813 11.3989 0.579688ZM9.2442 2.73438L3.35983 8.61602C3.06725 8.90859 2.85397 9.275 2.74186 9.67422L1.77389 13.1687C1.711 13.3957 1.77389 13.6418 1.94342 13.8086C2.11295 13.9754 2.35631 14.041 2.58327 13.9781L6.0778 13.0074C6.47702 12.8953 6.84069 12.6848 7.136 12.3895L13.0149 6.50508L9.2442 2.73438Z"
                          fill="currentColor"
                        />
                      </svg>
                    </Button>

                    <Button
                      className="size-9 font-semibold rounded-lg flex bg-transparent text-red-500 border-red-500 hover:bg-red-50 hover:text-red-500"
                      disabled={isLoading}
                      onClick={() => handleRemoveAddress(reviewId)}
                    >
                      {isLoading ? <Spinner /> : <Trash2 />}
                    </Button>
                  </div>
                )}
              </div>
            ),
        )}
      </div>

      {editingId === null && <ReviewForm />}
    </div>
  );
}
