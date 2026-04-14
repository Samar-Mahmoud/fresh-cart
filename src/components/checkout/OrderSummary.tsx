import VanIcon from "@/components/icons/VanIcon";
import { Button } from "@/components/ui/button";
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

export default function OrderSummary({
  numOfCartItems,
  products,
  totalCartPrice,
}: CheckoutOrderSummaryProps) {
  return (
    <Card className="p-0 rounded-2xl gap-0 lg:sticky top-20">
      <CardHeader className="px-6 py-4 rounded-none gap-1 bg-linear-to-r from-primary-main to-primary-700">
        <CardTitle className="text-lg font-bold text-white">
          <h2 className="flex items-center gap-2">
            <svg
              width="23"
              height="20"
              viewBox="0 0 23 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 3.9375C9 2.69648 10.009 1.6875 11.25 1.6875C12.491 1.6875 13.5 2.69648 13.5 3.9375V5.625H9V3.9375ZM7.3125 5.625H5.0625C4.13086 5.625 3.375 6.38086 3.375 7.3125V14.625C3.375 16.4883 4.88672 18 6.75 18H15.75C17.6133 18 19.125 16.4883 19.125 14.625V7.3125C19.125 6.38086 18.3691 5.625 17.4375 5.625H15.1875V3.9375C15.1875 1.76133 13.4262 0 11.25 0C9.07383 0 7.3125 1.76133 7.3125 3.9375V5.625ZM8.15625 7.3125C8.26705 7.3125 8.37677 7.33432 8.47914 7.37673C8.58151 7.41913 8.67452 7.48128 8.75287 7.55963C8.83122 7.63798 8.89337 7.73099 8.93577 7.83336C8.97818 7.93573 9 8.04545 9 8.15625C9 8.26705 8.97818 8.37677 8.93577 8.47914C8.89337 8.58151 8.83122 8.67452 8.75287 8.75287C8.67452 8.83122 8.58151 8.89337 8.47914 8.93577C8.37677 8.97818 8.26705 9 8.15625 9C8.04545 9 7.93573 8.97818 7.83336 8.93577C7.73099 8.89337 7.63798 8.83122 7.55963 8.75287C7.48128 8.67452 7.41913 8.58151 7.37673 8.47914C7.33432 8.37677 7.3125 8.26705 7.3125 8.15625C7.3125 8.04545 7.33432 7.93573 7.37673 7.83336C7.41913 7.73099 7.48128 7.63798 7.55963 7.55963C7.63798 7.48128 7.73099 7.41913 7.83336 7.37673C7.93573 7.33432 8.04545 7.3125 8.15625 7.3125ZM13.5 8.15625C13.5 7.93247 13.5889 7.71786 13.7471 7.55963C13.9054 7.40139 14.12 7.3125 14.3438 7.3125C14.5675 7.3125 14.7821 7.40139 14.9404 7.55963C15.0986 7.71786 15.1875 7.93247 15.1875 8.15625C15.1875 8.38003 15.0986 8.59464 14.9404 8.75287C14.7821 8.91111 14.5675 9 14.3438 9C14.12 9 13.9054 8.91111 13.7471 8.75287C13.5889 8.59464 13.5 8.38003 13.5 8.15625Z"
                fill="white"
              />
            </svg>
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
              <div className="flex text-gray-400">
                <VanIcon size="size-5" />
              </div>
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

        <Button className="py-4 h-auto gap-2 w-full rounded-xl bg-linear-to-r from-primary-600 to-primary-700 text-white font-semibold hover:from-primary-700 hover:to-primary-800 transition-all shadow-sm">
          <svg
            width="20"
            height="16"
            viewBox="0 0 20 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.5437 4L13.4719 2.5H6.53125L5.45937 4H14.5437ZM3 4.64062C3 4.225 3.13125 3.81875 3.37187 3.47813L4.90313 1.3375C5.27813 0.8125 5.88438 0.5 6.52813 0.5H13.4688C14.1156 0.5 14.7219 0.8125 15.0969 1.3375L16.625 3.47813C16.8687 3.81875 16.9969 4.225 16.9969 4.64062L17 13C17 14.1031 16.1031 15 15 15H5C3.89688 15 3 14.1031 3 13V4.64062Z"
              fill="white"
            />
          </svg>
          Place Order
        </Button>
      </CardContent>

      <CardFooter className="p-5 pt-0 gap-4">
        <div className="flex w-full items-center justify-center gap-4 py-2">
          <div className="flex items-center gap-1.5">
            <div className="text-primary-main">
              <ShieldIcon size="size-4" />
            </div>
            <span className="font-medium text-xs text-gray-500">Secure</span>
          </div>

          <Separator
            orientation="vertical"
            className="bg-gray-200 h-4 self-center"
          />

          <div className="flex items-center gap-1.5">
            <div className="text-blue-500">
              <VanIcon size="size-4" />
            </div>
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
