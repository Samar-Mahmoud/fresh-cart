import VanIcon from "@/components/icons/VanIcon";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CheckoutOrderSummaryProps } from "@/types/props";
import Image from "next/image";
import Link from "next/link";
import ShieldIcon from "../icons/ShieldIcon";
import OrderButton from "./OrderButton";
import ShoppingBagIcon from "../icons/ShoppingBagIcon";

export default function OrderSummary({
  numOfCartItems,
  products,
  totalCartPrice,
  cartId,
}: CheckoutOrderSummaryProps) {
  return (
    <Card className="p-0 rounded-2xl gap-0 lg:sticky top-20">
      <CardHeader className="px-6 py-4 rounded-none gap-1 bg-linear-to-r from-primary-main to-primary-700">
        <CardTitle className="text-lg font-bold text-white">
          <h2 className="flex items-center gap-2">
            <ShoppingBagIcon className="text-white" />
            Order Summary
          </h2>
        </CardTitle>
        <CardDescription className="text-primary-100 font-medium">
          {numOfCartItems} items
        </CardDescription>
      </CardHeader>

      <CardContent className="px-5 pt-5 pb-4">
        <div className="space-y-3 max-h-56 overflow-y-auto no-scrollbar mb-5">
          {products.map(
            ({ product: { _id, imageCover, title }, price, count }) => (
              <div key={_id} className="bg-gray-50 rounded-xl p-3">
                <div className="flex items-center gap-3">
                  <Link
                    href={`/products/${_id}`}
                    className="group/img size-14 rounded-lg bg-white border border-gray-100 flex shrink-0"
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
                        className="font-medium text-gray-900 hover:text-primary-600 transition-colors text-sm line-clamp-1"
                      >
                        {title}
                      </Link>
                    </h4>

                    <span className="text-xs font-medium text-gray-500">
                      {count} x {price}
                    </span>
                  </div>

                  <span className="shrink-0 text-sm font-bold text-gray-900">
                    {count * price}
                  </span>
                </div>
              </div>
            ),
          )}
        </div>

        <Separator className="bg-gray-100 mb-4" />

        <div className="space-y-3 mb-6">
          <div className="flex justify-between font-medium text-base">
            <span className="text-gray-600">Subtotal</span>
            <span className="text-gray-900">{totalCartPrice} EGP</span>
          </div>

          <div className="flex justify-between font-medium text-base">
            <span className="text-gray-600 flex gap-2">
              <VanIcon className="size-5 text-gray-400" />
              Shipping
            </span>
            {totalCartPrice > 500 ? (
              <span className="text-primary-main uppercase">free</span>
            ) : (
              <span className="text-gray-900">50 EGP</span>
            )}
          </div>

          <Separator className="bg-gray-100" />

          <div className="flex justify-between items-baseline">
            <span className="text-gray-900 font-semibold text-lg">Total</span>
            <div>
              <span className="text-2xl font-bold text-primary-main">
                {totalCartPrice + (totalCartPrice > 500 ? 0 : 50)}
              </span>
              <span className="text-sm text-gray-500 ml-1">EGP</span>
            </div>
          </div>
        </div>

        <OrderButton cartId={cartId} />
      </CardContent>

      <CardFooter className="p-5 pt-0 gap-4">
        <div className="flex w-full items-center justify-center gap-4 py-2">
          <div className="flex items-center gap-1.5">
            <ShieldIcon className="text-primary-main size-4" />
            <span className="font-medium text-xs text-gray-500">Secure</span>
          </div>

          <Separator
            orientation="vertical"
            className="bg-gray-200 h-4 self-center"
          />

          <div className="flex items-center gap-1.5">
            <VanIcon className="size-4 text-blue-500" />
            <span className="font-medium text-xs text-gray-500">
              Fast Delivery
            </span>
          </div>

          <Separator
            orientation="vertical"
            className="bg-gray-200 h-4 self-center"
          />

          <div className="flex items-center gap-1.5">
            <svg
              width="15"
              height="12"
              viewBox="0 0 15 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.9078 3L10.1039 1.875H4.89844L4.09453 3H10.9078ZM2.25 3.48047C2.25 3.16875 2.34844 2.86406 2.52891 2.60859L3.67734 1.00312C3.95859 0.609375 4.41328 0.375 4.89609 0.375H10.1016C10.5867 0.375 11.0414 0.609375 11.3227 1.00312L12.4688 2.60859C12.6516 2.86406 12.7477 3.16875 12.7477 3.48047L12.75 9.75C12.75 10.5773 12.0773 11.25 11.25 11.25H3.75C2.92266 11.25 2.25 10.5773 2.25 9.75V3.48047Z"
                fill="#FF6900"
              />
            </svg>

            <span className="font-medium text-xs text-gray-500">
              Easy Return
            </span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
