import { CartItems } from "@/types/cart";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Check, Circle, Minus, Plus, Trash, XCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import RemoveProductButton from "./RemoveProductButton";

export default function Card({
  product: {
    _id,
    imageCover,
    title,
    quantity,
    category: { name: categoryName },
  },
  price,
  count,
}: CartItems["products"][number]) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
      <div className="flex gap-4 items-stretch">
        <div className="flex flex-col justify-between shrink-0">
          <Link
            href={`/products/${_id}`}
            className="group/img size-28 p-3 overflow-hidden rounded-xl bg-linear-to-br from-gray-50 via-white to-gray-100 relative"
          >
            <div className="relative size-21.5 group-hover/img:scale-[1.05] transition-transform">
              <Image
                src={imageCover}
                alt={title}
                sizes="86"
                fill
                className="object-contain"
              />
            </div>
          </Link>

          <Badge
            className={`self-end text-[10px] ${quantity > 0 ? "bg-primary-500 text-white" : "bg-red-50 text-red-700"}`}
          >
            {quantity > 0 ? (
              <>
                <Check />
                In Stock
              </>
            ) : (
              <>
                <XCircle className="text-red-500" />
                Sold Out
              </>
            )}
          </Badge>
        </div>

        <div className="flex-1 min-w-0">
          <div className="mb-3 space-y-2">
            <h3>
              <Link
                href={`/products/${_id}`}
                className="font-semibold text-gray-900 hover:text-primary-600 transition-colors text-base sm:text-lg"
              >
                {title}
              </Link>
            </h3>

            <div className="flex items-center gap-2">
              <Badge className="px-2.5 py-1 bg-linear-to-r from-primary-50 to-emerald-50 text-primary-700 rounded-full">
                {categoryName}
              </Badge>

              <Circle className="fill-current text-gray-400 size-0.5" />

              <span className="text-xs text-gray-500 font-medium">
                SKU: {_id.slice(-6).toUpperCase()}
              </span>
            </div>
          </div>

          <div className="mb-4 flex gap-2 items-baseline">
            <span className="text-primary-main font-bold text-lg">{price}</span>
            <span className="text-xs text-gray-400">per unit</span>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center bg-gray-50 rounded-xl p-1 border border-gray-200">
              <Button
                className="w-8 h-8 rounded-lg bg-white shadow-sm text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                disabled
              >
                <Minus />
              </Button>
              <Input
                min={1}
                max={quantity}
                className="w-12 h-auto text-center text-gray-900 bg-transparent text-lg font-bold focus-visible:border-none focus-visible:ring-none"
                id="quantity"
                type="number"
                defaultValue={count}
              />
              <Button
                className="w-8 h-8 rounded-lg bg-primary-main shadow-sm text-white hover:bg-primary-700"
                disabled
              >
                <Plus />
              </Button>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-right">
                <span className="text-xs text-gray-400 mb-0.5">Total</span>
                <p className="text-xl font-bold text-gray-900">
                  {price * count}{" "}
                  <span className="text-sm font-medium text-gray-400">EGP</span>
                </p>
              </div>

              <RemoveProductButton
                id={_id}
                title={title}
                className="h-10 w-10 rounded-xl border border-red-200 bg-red-50 text-red-500 hover:bg-red-500 hover:text-white hover:border-red-500"
              >
                <Trash />
              </RemoveProductButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
