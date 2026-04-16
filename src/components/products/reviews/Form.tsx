"use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ReviewData, schema } from "@/schema/review";
import { Review } from "@/types/products";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Star } from "lucide-react";
import { Spinner } from "@/components/ui/spinner";
import { reviewAction } from "@/actions/reviews";
import { useParams } from "next/navigation";
import { toast } from "sonner";

export function ReviewForm({
  data,
  reviewId,
  onCancel,
}: {
  data?: ReviewData;
  reviewId?: Review["_id"];
  onCancel?: () => void;
}) {
  const [hovered, setHovered] = useState(0);

  const { id } = useParams();

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<ReviewData>({
    defaultValues: data ?? { review: "", rating: 0 },
    resolver: zodResolver(schema),
  });

  const handleReviewAction = async (data: ReviewData) => {
    const res = await reviewAction(data, {
      isEdit: !!reviewId,
      productId: (Array.isArray(id) ? id[0] : id) ?? "",
      reviewId,
    });
    if (res.isError) {
      toast.error(res.message);
    } else {
      toast.success(res.message);
      onCancel?.();
      reset();
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleReviewAction)}
      className="space-y-5 rounded-xl border border-gray-200 bg-white p-5 shadow-md"
    >
      {/* Star rating */}
      <Controller
        control={control}
        name="rating"
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid} className="gap-3">
            <FieldLabel className="text-sm font-semibold text-gray-900 gap-0.5">
              Rating
            </FieldLabel>

            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, star) => (
                <Star
                  key={star}
                  {...field}
                  onMouseEnter={() => setHovered(star + 1)}
                  onMouseLeave={() => setHovered(0)}
                  onClick={() => field.onChange(star + 1)}
                  className={`size-6 hover:scale-110 ${star + 1 <= hovered || star + 1 <= field.value ? "fill-amber-400 text-amber-400" : "fill-none text-gray-400"} transition-all`}
                />
              ))}
            </div>
            <FieldError
              errors={[fieldState.error]}
              className="font-medium text-xs"
            />
          </Field>
        )}
      />

      {/* Review */}
      <Controller
        name="review"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid} className="gap-3">
            <FieldLabel
              htmlFor="review"
              className="text-sm font-semibold text-gray-700 gap-0.5"
            >
              Review
              <span className="text-red-500">*</span>
            </FieldLabel>
            <Textarea
              {...field}
              id="review"
              name="review"
              aria-invalid={fieldState.invalid}
              placeholder="Share your experience..."
              className="h-13 rounded-xl bg-transparent border-2 border-gray-200 py-2.5 text-gray-700 placeholder:text-gray-700/50 placeholder:font-medium"
            />
            <FieldError
              errors={[fieldState.error]}
              className="font-medium text-xs"
            />
          </Field>
        )}
      />

      <div className="flex justify-end gap-2">
        {reviewId && (
          <Button
            className="px-4 py-2.5 gap-2 rounded-lg bg-transparent text-primary-main border-primary-main hover:bg-primary-50"
            onClick={onCancel}
          >
            Cancel
          </Button>
        )}

        <Button
          type="submit"
          className="px-4 py-2.5 gap-2 bg-primary-main text-white rounded-lg hover:bg-primary-700 hover:text-white"
          disabled={isSubmitting}
        >
          {isSubmitting ? <Spinner /> : reviewId ? "Update" : "Submit"}
        </Button>
      </div>
    </form>
  );
}
