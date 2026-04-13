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

export default function OrderSummary({
  numOfCartItems,
  totalCartPrice,
}: OrderSummaryProps) {
  return (
    <Card className="p-0 rounded-2xl gap-0">
      <CardHeader className="px-6 py-4 rounded-none gap-1 bg-linear-to-r from-primary-600 to-primary-700">
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
          {numOfCartItems} items in your cart
        </CardDescription>
      </CardHeader>

      <CardContent className="p-6 space-y-5">
        {totalCartPrice < 500 ? (
          <div className="bg-linear-to-r from-orange-50 to-amber-50 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2 text-orange-500 ">
              <div className="flex">
                <VanIcon size="size-5" />
              </div>
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
              <VanIcon size="size-4" />
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
            <div className="text-primary-main">
              <ShieldIcon size="size-4" />
            </div>
            <span className="font-medium text-xs text-gray-500">
              Secure Payment
            </span>
          </div>

          <Separator orientation="vertical" className="bg-gray-200" />

          <div className="flex items-center gap-1.5">
            <div className="text-blue-500">
              <VanIcon size="size-4" />
            </div>
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
