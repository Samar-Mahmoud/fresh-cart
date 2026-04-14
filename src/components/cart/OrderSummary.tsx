import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import VanIcon from "@/components/icons/VanIcon";
import ShieldIcon from "@/components/icons/ShieldIcon";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { OrderSummaryProps } from "@/types/props";
import ShoppingBagIcon from "../icons/ShoppingBagIcon";

export default function OrderSummary({
  numOfCartItems,
  totalCartPrice,
}: OrderSummaryProps) {
  return (
    <Card className="p-0 rounded-2xl gap-0 lg:sticky top-20">
      <CardHeader className="px-6 py-4 rounded-none gap-1 bg-linear-to-r from-primary-600 to-primary-700">
        <CardTitle className="text-lg font-bold text-white">
          <h2 className="flex items-center gap-2">
            <ShoppingBagIcon className="text-white" />
            Order Summary
          </h2>
        </CardTitle>
        <CardDescription className="text-primary-100 font-medium">
          {numOfCartItems} items in your cart
        </CardDescription>
      </CardHeader>

      <CardContent className="p-6 space-y-5">
        {totalCartPrice < 500 ? (
          <div className="bg-linear-to-r from-orange-50 to-amber-50 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2 text-orange-500 ">
              <VanIcon className="size-5" />
              <span className="text-sm font-medium text-gray-700">
                Add {500 - totalCartPrice} EGP for free shipping
              </span>
            </div>
            <div className="h-2 bg-orange-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-linear-to-r from-orange-400 to-amber-400 rounded-full transition-all duration-500"
                style={{
                  width: `${((totalCartPrice / 500) * 100).toFixed(1)}%`,
                }}
              />
            </div>
          </div>
        ) : (
          <div className="bg-linear-to-r from-green-50 to-emerald-50 rounded-xl p-4 flex items-center gap-3">
            <div className="shrink-0 size-10 rounded-full bg-green-100 text-primary-main flex">
              <VanIcon className="m-auto size-4" />
            </div>
            <div>
              <p className="font-semibold tex-base text-green-700">
                Free Shipping!
              </p>
              <p className="text-xs font-medium text-green-600">
                You qualify for free delivery
              </p>
            </div>
          </div>
        )}

        <div className="space-y-3">
          <div className="flex justify-between font-medium text-base">
            <span className="text-gray-600">Subtotal</span>
            <span className="text-gray-900">{totalCartPrice} EGP</span>
          </div>

          <div className="flex justify-between font-medium text-base">
            <span className="text-gray-600">Shipping</span>
            {totalCartPrice > 500 ? (
              <span className="text-primary-main uppercase">free</span>
            ) : (
              <span className="text-gray-900">50 EGP</span>
            )}
          </div>

          <div className="border-t border-dashed border-gray-200 pt-3">
            <div className="flex justify-between items-baseline">
              <span className="text-gray-900 font-semibold text-base">
                Total
              </span>
              <div>
                <span className="text-2xl font-bold text-gray-900">
                  {totalCartPrice + (totalCartPrice > 500 ? 0 : 50)}
                </span>
                <span className="text-sm text-gray-500 ml-1">EGP</span>
              </div>
            </div>
          </div>
        </div>

        {/* TODO */}
        <Button className="py-3 h-auto gap-2 bg-transparent text-gray-600 w-full border-dashed border-gray-300 rounded-xl hover:border-primary-400 hover:text-primary-600 hover:bg-primary-50/50">
          <svg
            width="20"
            height="16"
            viewBox="0 0 20 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.01562 3V7.67188C3.01562 8.20312 3.225 8.7125 3.6 9.0875L9.6 15.0875C10.3812 15.8687 11.6469 15.8687 12.4281 15.0875L17.1 10.4156C17.8813 9.63437 17.8813 8.36875 17.1 7.5875L11.1 1.5875C10.725 1.20937 10.2188 1 9.6875 1H5.01562C3.9125 1 3.01562 1.89688 3.01562 3ZM6.51562 3.5C6.78084 3.5 7.0352 3.60536 7.22273 3.79289C7.41027 3.98043 7.51562 4.23478 7.51562 4.5C7.51562 4.76522 7.41027 5.01957 7.22273 5.20711C7.0352 5.39464 6.78084 5.5 6.51562 5.5C6.25041 5.5 5.99605 5.39464 5.80852 5.20711C5.62098 5.01957 5.51562 4.76522 5.51562 4.5C5.51562 4.23478 5.62098 3.98043 5.80852 3.79289C5.99605 3.60536 6.25041 3.5 6.51562 3.5Z"
              fill="currentColor"
            />
          </svg>
          Apply Promo Code
        </Button>

        <Link
          href="/checkout"
          className="w-full text-base bg-linear-to-r from-primary-600 to-primary-700 text-white py-4 px-6 rounded-xl font-semibold hover:from-primary-700 hover:to-primary-800 transition-all flex items-center justify-center gap-3 shadow-lg"
        >
          <svg
            width="20"
            height="17"
            viewBox="0 0 20 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 4V6H12V4C12 2.89687 11.1031 2 10 2C8.89687 2 8 2.89687 8 4ZM6 6V4C6 1.79063 7.79063 0 10 0C12.2094 0 14 1.79063 14 4V6C15.1031 6 16 6.89687 16 8V15C16 16.1031 15.1031 17 14 17H6C4.89688 17 4 16.1031 4 15V8C4 6.89687 4.89688 6 6 6Z"
              fill="white"
            />
          </svg>
          Secure Checkout
        </Link>
      </CardContent>

      <CardFooter className="pb-6 flex-col gap-5">
        <div className="flex items-center justify-center gap-4 py-2">
          <div className="flex items-center gap-1.5">
            <ShieldIcon className="size-4 text-primary-main" />
            <span className="font-medium text-xs text-gray-500">
              Secure Payment
            </span>
          </div>

          <Separator orientation="vertical" className="bg-gray-200" />

          <div className="flex items-center gap-1.5">
            <VanIcon className="text-blue-500 size-4" />
            <span className="font-medium text-xs text-gray-500">
              Fast Delivery
            </span>
          </div>
        </div>

        <Link
          href="/"
          className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-sm font-medium py-2"
        >
          <ArrowLeft className="size-3" />
          Continue Shopping
        </Link>
      </CardFooter>
    </Card>
  );
}
