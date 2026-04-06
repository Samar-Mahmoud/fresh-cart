import { Product } from "@/types/products";
import Image from "next/image";
import { Eye, Heart, Plus, RotateCcw, Star } from "lucide-react";
import Link from "next/link";
import { Badge, Button } from "@/components/ui";

export default function ProductCard({
  _id,
  imageCover,
  title,
  priceAfterDiscount,
  price,
  category,
  ratingsAverage,
  ratingsQuantity,
}: Product) {
  const fullStars = Math.floor(ratingsAverage);
  const hasHalfStar = ratingsAverage - fullStars > 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-60">
        <Image
          src={imageCover}
          alt={title}
          fill
          className="object-contain"
          sizes="240"
        />

        {priceAfterDiscount && (
          <Badge className="absolute top-3.25 left-3 bg-red-500 rounded-md text-white py-1">
            -{Math.round(((price - priceAfterDiscount) / price) * 100)}%
          </Badge>
        )}

        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <Button
            size="icon-sm"
            className="bg-white rounded-full shadow-sm text-gray-600 hover:text-red-500"
          >
            <Heart className="size-4" />
          </Button>

          <Button
            size="icon-sm"
            className="bg-white rounded-full shadow-sm text-gray-600 hover:text-primary-600"
          >
            <RotateCcw className="size-4" />
          </Button>

          <Link
            href={`/products/${_id}`}
            className="bg-white size-8 rounded-full flex shadow-sm text-gray-600 hover:text-primary-600 transition-colors"
          >
            <Eye className="size-4 m-auto" />
          </Link>
        </div>
      </div>

      <div className="p-4 flex flex-col gap-1 font-medium">
        <span className="text-xs text-gray-500">{category.name}</span>

        <Link href={`/products/${_id}`} className="text-gray-700 line-clamp-2">
          {title}
        </Link>

        <div className="flex items-center gap-2">
          <div className="flex gap-0.5 py-1 text-[#fcc800] ">
            {Array.from({ length: fullStars }).map((_, index) => (
              <Star key={index} className="size-4.5 fill-current" />
            ))}
            {hasHalfStar && (
              <svg
                width="20"
                height="17"
                viewBox="0 0 20 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.6718 0.409375C10.5437 0.159375 10.2843 0 10.0031 0C9.72183 0 9.46246 0.159375 9.33433 0.409375L7.03433 4.91563L2.03746 5.70937C1.75933 5.75312 1.52808 5.95 1.44058 6.21875C1.35308 6.4875 1.42496 6.78125 1.62183 6.98125L5.19683 10.5594L4.40933 15.5562C4.36558 15.8344 4.48121 16.1156 4.70933 16.2812C4.93746 16.4469 5.23746 16.4719 5.49058 16.3438L10.0031 14.05L14.5125 16.3438C14.7625 16.4719 15.0656 16.4469 15.2937 16.2812C15.5218 16.1156 15.6375 15.8375 15.5937 15.5562L14.8031 10.5594L18.3781 6.98125C18.5781 6.78125 18.6468 6.4875 18.5593 6.21875C18.4718 5.95 18.2437 5.75312 17.9625 5.70937L12.9687 4.91563L10.6718 0.409375ZM9.25308 3.86875V12.7469L6.12496 14.3375L6.74371 10.4156C6.78121 10.1781 6.70308 9.9375 6.53433 9.76875L3.72808 6.95937L7.64996 6.33437C7.88746 6.29688 8.09058 6.14687 8.19996 5.93437L9.25621 3.86562L9.25308 3.86875ZM10.7531 12.7469V3.86875L11.8093 5.9375C11.9187 6.15 12.1218 6.3 12.3593 6.3375L16.2812 6.9625L13.475 9.77188C13.3062 9.94063 13.2281 10.1812 13.2656 10.4187L13.8843 14.3406L10.7562 12.75L10.7531 12.7469Z"
                  fill="currentColor"
                />
              </svg>
            )}
            {Array.from({ length: emptyStars }).map((_, index) => (
              <Star key={index} className="size-4.5" />
            ))}
          </div>
          <span className="text-xs text-gray-500">
            {ratingsAverage} ({ratingsQuantity})
          </span>
        </div>

        <div className="flex items-center justify-between gap-2">
          {priceAfterDiscount ? (
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-lg font-bold text-primary-main ">
                {priceAfterDiscount} EGP
              </span>

              <span className="line-through text-sm text-gray-500">
                {price} EGP
              </span>
            </div>
          ) : (
            <span className="text-lg font-bold text-gray-800 shrink-0">
              {price} EGP
            </span>
          )}

          <Button
            size="icon-lg"
            className="mt-1 rounded-full bg-primary-main text-white hover:bg-primary-700"
          >
            <Plus className="size-5" strokeWidth={3} />
          </Button>
        </div>
      </div>
    </div>
  );
}
