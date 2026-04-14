import EmptyState from "@/components/shared/Empty";
import { getCartItems } from "@/services/cart";
import { ArrowLeft, Box, Trash } from "lucide-react";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import CartIcon from "@/components/icons/CartIcon";
import ClearCartButton from "@/components/cart/ClearButton";
import { Separator } from "@/components/ui/separator";
import ItemCard from "@/components/cart/Card";
import OrderSummary from "@/components/cart/OrderSummary";

export default async function Cart() {
  const { numOfCartItems, products, totalCartPrice } = await getCartItems();

  return (
    <main className="bg-gray-50 min-h-screen">
      <div className="container py-8 px-4 mx-auto">
        <Breadcrumb className="mb-4">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/" className="text-gray-500 text-sm font-medium">
                  Home
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator className="text-gray-400" />

            <BreadcrumbItem>
              <BreadcrumbPage className="text-gray-900 text-sm font-medium">
                Shopping Cart
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="mb-8">
          <div className="flex gap-3 items-center mb-2">
            <div className="size-12 flex bg-linear-to-r from-primary-main to-primary-700 rounded-xl text-white">
              <CartIcon className="m-auto size-8" />
            </div>
            <h1 className="text-gray-900 font-bold text-3xl">Shopping Cart</h1>
          </div>
          <p className="text-gray-500 text-base font-medium">
            You have{" "}
            <span className="text-primary-main">{numOfCartItems} items</span> in
            your cart
          </p>
        </div>

        {numOfCartItems === 0 ? (
          <div className="py-20">
            <EmptyState
              title="Your cart is empty"
              description="Looks like you haven't added anything to your cart yet. Start exploring our products!"
              icon={<Box className="size-8" />}
              action={
                <Link
                  href="/"
                  className="py-3 px-6 font-semibold bg-primary-main text-white hover:bg-primary-700 hover:text-white rounded-lg"
                >
                  Start Shopping
                </Link>
              }
            />
          </div>
        ) : (
          <div className="grid grid-col-1 lg:grid-cols-12 gap-8">
            <div className="space-y-6 lg:col-span-8">
              <div className="grid grid-cols-1 gap-4">
                {products.map((prod) => (
                  <ItemCard key={prod._id} {...prod} />
                ))}
              </div>

              <Separator className="bg-gray-200" />

              <div className="flex items-center justify-between">
                <Link
                  href="/"
                  className="flex items-center gap-2 text-sm font-medium text-primary-main hover:text-primary-700 transition-colors"
                >
                  <ArrowLeft className="size-3" />
                  Continue Shopping
                </Link>

                <ClearCartButton className="gap-2 p-0 h-auto bg-transparent text-gray-400 hover:bg-transparent hover:text-red-500">
                  <Trash />
                  Clear all items
                </ClearCartButton>
              </div>
            </div>

            <div className="lg:col-span-4">
              <OrderSummary
                numOfCartItems={numOfCartItems}
                totalCartPrice={totalCartPrice}
              />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
