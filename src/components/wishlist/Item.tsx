import { WishlistItem } from "@/types/wishlist";
import { Circle, Trash, XCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import AddToCartButton from "@/components/cart/AddButton";
import CartIcon from "@/components/icons/CartIcon";
import { Badge } from "@/components/ui/badge";
import RemoveProductButton from "@/components/wishlist/RemoveProductButton";

export default function Item({
  _id,
  imageCover,
  title,
  category: { name: categoryName },
  price,
  quantity,
}: WishlistItem) {
  return (
    <div className="grid grid-cols-12 p-4 lg:py-5 lg:px-4.5 gap-4">
      <div className="col-span-12 lg:col-span-6 flex gap-4 items-center">
        <Link
          href={`/products/${_id}`}
          className="group/img size-20 rounded-xl bg-gray-50 border border-gray-100 flex shrink-0"
        >
          <div className="m-auto relative size-14 group-hover/img:scale-[1.05] transition-transform">
            <Image
              src={imageCover}
              alt={title}
              sizes="56"
              fill
              className="object-contain"
            />
          </div>
        </Link>

        <div className="space-y-1">
          <h3>
            <Link
              href={`/products/${_id}`}
              className="font-medium text-gray-900 hover:text-primary-600 transition-colors text-base"
            >
              {title}
            </Link>
          </h3>

          <span className="text-sm font-medium text-gray-400">
            {categoryName}
          </span>
        </div>
      </div>

      <div className="col-span-12 lg:col-span-2 lg:justify-self-center flex gap-2 items-baseline lg:items-center">
        <span className="lg:hidden text-sm font-medium text-gray-500">
          Price:
        </span>
        <span className="text-base font-semibold text-gray-900">
          {price} EGP
        </span>
      </div>

      <div className="col-span-12 lg:col-span-2 lg:justify-self-center flex gap-2 items-center">
        <span className="lg:hidden text-sm font-medium text-gray-500">
          Status:
        </span>
        <Badge
          className={`px-3 py-1 gap-1.5 ${quantity > 0 ? "bg-primary-50 text-green-700 [&>svg]:size-1.5!" : "bg-red-50 text-red-700 [&>svg]:size-4!"}`}
        >
          {quantity > 0 ? (
            <>
              <Circle className="fill-current text-primary-500" />
              In Stock
            </>
          ) : (
            <>
              <XCircle />
              Sold Out
            </>
          )}
        </Badge>
      </div>

      <div className="col-span-12 lg:col-span-2 lg:justify-self-center flex gap-2 lg:gap-1 self-center">
        <AddToCartButton
          id={_id}
          title={title}
          className="flex-1 lg:flex-0 gap-2 py-2.5 px-4 h-auto rounded-lg bg-primary-main text-white font-medium text-sm lg:text-xs hover:bg-primary-700 hover:text-white"
        >
          <CartIcon className="size-4 lg:size-3.5" />
          Add to Cart
        </AddToCartButton>

        <RemoveProductButton
          id={_id}
          title={title}
          className="shrink h-10 w-10 border-gray-200 bg-transparent rounded-lg text-gray-400 hover:bg-red-50/50 hover:text-red-500"
        >
          <Trash className="m-auto size-4" />
        </RemoveProductButton>
      </div>
    </div>
  );
}
