import Rating from "@/components/products/Rating";
import { Button, Separator } from "@/components/ui";
import { Product } from "@/types/products";
import { Star } from "lucide-react";
import EmptyState from "../shared/Empty";

export default async function ProductReviews({
  reviews,
}: {
  reviews: Product["reviews"];
}) {
  const ratings = reviews.reduce(
    (acc, review) => {
      const r = Math.floor(review.rating);
      if (r >= 1 && r <= 5) {
        acc[r - 1]++;
      }
      return acc;
    },
    [0, 0, 0, 0, 0],
  );

  const percentage = ratings
    .map((rating) => (reviews.length ? (rating / reviews.length) * 100 : 0))
    .reverse();

  const average =
    reviews.length > 0
      ? Math.floor(
          ratings.reduce((acc, count, index) => acc + count * (index + 1), 0) /
            reviews.length,
        )
      : 0;

  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center gap-8">
        <div className="flex flex-col items-center p-6">
          <span className="text-5xl font-bold text-gray-900 mb-2">
            {average}
          </span>

          <Rating rating={average} />

          <p className="text-sm text-gray-500 mt-2">
            {reviews.length > 0
              ? `Based on ${reviews.length} reviews`
              : "No Reviews Yet"}
          </p>
        </div>

        <div className="flex-1 space-y-2">
          {percentage.map((rating, index) => (
            <div key={index} className="flex items-center gap-3">
              <span className="text-sm text-gray-600 shrink-0">
                {5 - index} star
              </span>
              <div className="flex-1 h-2 bg-gray-200 rounded-full relative">
                <div
                  className="absolute inset-y-0 bg-yellow-400 rounded-full"
                  style={{ width: `${rating}%` }}
                ></div>
              </div>
              <span className="text-sm text-gray-500 w-10">
                {Math.floor(rating)}%
              </span>
            </div>
          ))}
        </div>
      </div>

      <Separator className="bg-gray-200 mb-6" />

      {reviews.length === 0 ? (
        <EmptyState
          icon={<Star />}
          title="No Reviews Yet"
          description="Customer reviews will be displayed here."
          action={
            <Button className="bg-primary-main text-white hover:bg-primary-700 rounded-lg">
              Write a Review
            </Button>
          }
        />
      ) : (
        <div className="p-4 space-y-4">
          {reviews.map(({ user: { name }, review, rating }, index) => (
            <div
              key={index}
              className="p-5 flex items-center justify-between gap-3 bg-primary-100/50 rounded-xl"
            >
              <div className="space-y-2">
                <h5 className="text-lg font-semibold text-gray-700">{name}</h5>
                <p className="text-base font-medium text-gray-500">{review}</p>
              </div>

              <Rating rating={rating} />
            </div>
          ))}

          {/* TODO: Add Review  */}
        </div>
      )}
    </>
  );
}
