import { OrderItem } from "@/types/orders";
import Image from "next/image";
import Link from "next/link";

export default function ItemCard({
  product: { _id, imageCover, title },
  price,
  count,
}: OrderItem["cartItems"][number]) {
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-4">
      <div className="flex items-center gap-4">
        <Link
          href={`/products/${_id}`}
          className="group/img size-16 rounded-xl bg-gray-50 flex shrink-0"
        >
          <div className="m-auto relative size-10 group-hover/img:scale-[1.05] transition-transform">
            <Image
              src={imageCover}
              alt={title}
              sizes="56"
              fill
              className="object-contain"
            />
          </div>
        </Link>

        <div className="space-y-0.5 flex-1 min-w-0">
          <h4>
            <Link
              href={`/products/${_id}`}
              className="font-medium text-gray-900 hover:text-primary-600 transition-colors text-base line-clamp-1"
            >
              {title}
            </Link>
          </h4>

          <span className="text-sm font-medium text-gray-500">
            {count} x {price}
          </span>
        </div>

        <span className="shrink-0 text-lg font-bold flex flex-col items-end gap-1 text-gray-900">
          {count * price}
          <span className="text-xs font-medium text-gray-400">EGP</span>
        </span>
      </div>
    </div>
  );
}
