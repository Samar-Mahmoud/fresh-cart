import { Product } from "@/types/products";
import Image from "next/image";
import { Eye, Heart, Plus, RotateCcw } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Rating from "./Rating";

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
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
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
            className="bg-white rounded-full shadow-sm text-gray-600 hover:bg-white hover:text-red-500"
          >
            <Heart className="size-4" />
          </Button>

          <Button
            size="icon-sm"
            className="bg-white rounded-full shadow-sm text-gray-600 hover:bg-white hover:text-primary-600"
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

        <div className="flex items-center gap-2 flex-wrap">
          <Rating rating={ratingsAverage} />
          <span className="text-xs text-gray-500 shrink-0">
            {ratingsAverage} ({ratingsQuantity})
          </span>
        </div>

        <div className="flex items-center justify-between gap-2">
          {priceAfterDiscount ? (
            <div className="flex items-center gap-2 flex-wrap">
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
