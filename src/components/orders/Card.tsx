import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  CalendarDays,
  Check,
  ChevronDown,
  Clock,
  CreditCard,
  Hash,
  MapPin,
  Receipt,
} from "lucide-react";
import Link from "next/link";
import { OrderItem } from "@/types/orders";
import VanIcon from "../icons/VanIcon";
import ShoppingBagIcon from "../icons/ShoppingBagIcon";
import { Button } from "../ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import OrderSummary from "./OrderSummary";
import DeliveryAddress from "./DeliveryAddress";
import CartItem from "./CartItem";

export default function Card({
  _id,
  cartItems,
  paymentMethodType,
  isPaid,
  isDelivered,
  createdAt,
  shippingAddress,
  totalOrderPrice,
  shippingPrice,
}: OrderItem) {
  const cartItem = cartItems[0].product;

  return (
    <Collapsible className="group/item-card rounded-2xl shadow-sm hover:shadow-lg border border-gray-100 data-[state=open]:border-primary-200 data-[state=open]:shadow-lg transition-all">
      <div className="flex gap-5 p-5">
        <Link
          href={`/products/${_id}`}
          className="group/img size-24 flex rounded-2xl bg-linear-to-br from-gray-50 via-white to-gray-100 relative"
        >
          <div className="m-auto relative size-19 group-hover/img:scale-[1.05] transition-transform">
            <Image
              src={cartItem.imageCover}
              alt={cartItem.title}
              sizes="86"
              fill
              className="object-contain"
            />
          </div>
          {cartItems.length > 1 && (
            <span className="absolute -top-2 -right-2 shadow-md size-7 rounded-full bg-black text-white font-bold text-xs flex items-center justify-center">
              +{cartItems.length - 1}
            </span>
          )}
        </Link>

        <div className="flex-1 min-w-0 space-y-3">
          <div className="flex justify-between">
            <div className="space-y-2">
              {isDelivered ? (
                <Badge className="px-2.5 py-1 gap-1.5 font-semibold rounded-lg text-green-600 bg-green-100">
                  <Check />
                  Delivered
                </Badge>
              ) : isPaid ? (
                <Badge className="px-2.5 py-1 gap-1.5 font-semibold rounded-lg text-blue-600 bg-blue-100">
                  <VanIcon className="size-3" />
                  On the way
                </Badge>
              ) : (
                <Badge className="px-2.5 py-1 gap-1.5 font-semibold rounded-lg text-amber-600 bg-amber-100">
                  <Clock />
                  Processing
                </Badge>
              )}

              <h3 className="flex items-center gap-2 text-lg font-bold text-gray-900">
                <Hash className="text-gray-400 size-4" />
                {_id.slice(-5).toUpperCase()}
              </h3>
            </div>

            {paymentMethodType === "cash" ? (
              <div className="shrink-0 size-10 rounded-xl flex bg-gray-100 text-gray-600">
                <svg
                  className="m-auto"
                  width="20"
                  height="16"
                  viewBox="0 0 20 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 2C2.89688 2 2 2.89688 2 4V12C2 13.1031 2.89688 14 4 14H16C17.1031 14 18 13.1031 18 12V4C18 2.89688 17.1031 2 16 2H4ZM10 5C10.7956 5 11.5587 5.31607 12.1213 5.87868C12.6839 6.44129 13 7.20435 13 8C13 8.79565 12.6839 9.55871 12.1213 10.1213C11.5587 10.6839 10.7956 11 10 11C9.20435 11 8.44129 10.6839 7.87868 10.1213C7.31607 9.55871 7 8.79565 7 8C7 7.20435 7.31607 6.44129 7.87868 5.87868C8.44129 5.31607 9.20435 5 10 5ZM16 5.75C16 5.8875 15.8875 6.00313 15.75 5.98438C14.8438 5.87188 14.1281 5.15313 14.0156 4.25C14 4.1125 14.1125 4 14.25 4H15.75C15.8875 4 16 4.1125 16 4.25V5.75ZM4 10.25C4 10.1125 4.1125 9.99687 4.25 10.0156C5.15625 10.1281 5.87188 10.8469 5.98438 11.75C6 11.8875 5.8875 12 5.75 12H4.25C4.1125 12 4 11.8875 4 11.75V10.25ZM4.25 5.98438C4.1125 6 4 5.8875 4 5.75V4.25C4 4.1125 4.1125 4 4.25 4H5.75C5.8875 4 6.00313 4.1125 5.98438 4.25C5.87188 5.15625 5.15313 5.87188 4.25 5.98438ZM15.75 10.0156C15.8875 10 16 10.1125 16 10.25V11.75C16 11.8875 15.8875 12 15.75 12H14.25C14.1125 12 13.9969 11.8875 14.0156 11.75C14.1281 10.8438 14.8469 10.1281 15.75 10.0156Z"
                    fill="#4A5565"
                  />
                </svg>
              </div>
            ) : (
              <div className="shrink-0 size-10 rounded-xl flex bg-purple-100 text-purple-600">
                <CreditCard className="m-auto size-4.5" />
              </div>
            )}
          </div>

          <div className="flex gap-4 items-center flex-wrap">
            <span className="flex items-center gap-1.5 text-sm font-medium text-gray-500">
              <CalendarDays className="size-4" />
              {new Date(createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </span>

            <span className="size-1 bg-gray-300 rounded-full"></span>

            <span className="flex items-center gap-1.5 text-sm font-medium text-gray-500">
              <ShoppingBagIcon className="size-4" />
              {cartItems.length} items
            </span>

            <span className="size-1 bg-gray-300 rounded-full"></span>

            <span className="flex items-center gap-1.5 text-sm font-medium text-gray-500">
              <MapPin className="size-4" />
              {shippingAddress.city}
            </span>
          </div>

          <div className="flex justify-between gap-2 items-center pt-1">
            <span className="text-xl font-bold flex items-baseline gap-1 flex-wrap text-gray-900">
              {totalOrderPrice}
              <span className="text-sm font-medium text-gray-400">EGP</span>
            </span>

            <CollapsibleTrigger asChild>
              <Button className="px-4 py-2.5 h-auto gap-2 rounded-xl bg-gray-100 text-gray-700 group-data-[state=open]/item-card:bg-primary-main group-data-[state=open]/item-card:text-white group-data-[state=open]/item-card:shadow-lg font-semibold hover:bg-gray-200 hover:text-gray-700 group-data-[state=open]/item-card:hover:bg-primary-700 group-data-[state=open]/item-card:hover:text-white">
                Details
                <ChevronDown className="size-4 group-data-[state=open]/item-card:rotate-180 transition-transform" />
              </Button>
            </CollapsibleTrigger>
          </div>
        </div>
      </div>

      <CollapsibleContent className="p-5 bg-gray-50/50 border-t border-gray-100 space-y-5">
        <div className="space-y-4">
          <h4 className="flex items-center gap-2 font-semibold text-sm text-gray-900">
            <div className="size-6 rounded-lg bg-primary-100 text-primary-main flex">
              <Receipt className="size-3 m-auto" />
            </div>
            Order Items
          </h4>

          {cartItems.map((item) => (
            <CartItem key={item._id} {...item} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <DeliveryAddress {...shippingAddress} />

          <OrderSummary
            shippingPrice={shippingPrice}
            totalOrderPrice={totalOrderPrice}
          />
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
