import AddressForm from "@/components/checkout/AddressForm";
import OrderSummary from "@/components/checkout/OrderSummary";
import PaymentMethod from "@/components/checkout/PaymentMethod";
import ShieldIcon from "@/components/icons/ShieldIcon";
import EmptyState from "@/components/shared/Empty";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckoutProvider } from "@/context/Checkout";
import { getCartItems } from "@/services/cart";
import { ArrowLeft, Box, Info, ReceiptText } from "lucide-react";
import Link from "next/link";

export default async function Checkout() {
  const { numOfCartItems, products, totalCartPrice, cartId } =
    await getCartItems();

  return (
    <main className="bg-gray-50">
      {numOfCartItems === 0 ? (
        <div className="flex items-center justify-center min-h-screen">
          <EmptyState
            title="Your cart is empty"
            description="Add some items to your cart before checking out."
            icon={<Box className="size-8" />}
            action={
              <Link
                href="/"
                className="py-3 px-6 font-semibold bg-primary-main text-white hover:bg-primary-700 hover:text-white rounded-lg"
              >
                Continue Shopping
              </Link>
            }
          />
        </div>
      ) : (
        <div className="container py-8 px-4 mx-auto">
          <Breadcrumb className="mb-6">
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
                <BreadcrumbLink asChild>
                  <Link
                    href="/cart"
                    className="text-gray-500 text-sm font-medium"
                  >
                    Cart
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbSeparator className="text-gray-400" />

              <BreadcrumbItem>
                <BreadcrumbPage className="text-gray-900 text-sm font-medium">
                  Checkout
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="mb-8 flex items-center justify-between gap-4 flex-wrap">
            <div>
              <div className="flex gap-3 items-center mb-2">
                <div className="size-12 flex bg-linear-to-r from-primary-main to-primary-700 rounded-xl text-white">
                  <ReceiptText className="m-auto size-8" />
                </div>
                <h1 className="text-gray-900 font-bold text-3xl">
                  Complete Your Order
                </h1>
              </div>
              <p className="text-gray-500 text-base font-medium">
                Review your items and complete your purchase
              </p>
            </div>

            <Link
              href="/"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-base font-medium text-primary-main hover:text-primary-700 hover:bg-primary-50/50 transition-colors"
            >
              <ArrowLeft className="size-3" />
              Back to Cart
            </Link>
          </div>

          <CheckoutProvider>
            <div className="grid grid-col-1 lg:grid-cols-12 gap-8">
              <div className="space-y-6 lg:col-span-8">
                {/* Address */}
                <Card className="p-0 rounded-2xl gap-0">
                  <CardHeader className="px-6 py-4 rounded-none gap-1 bg-linear-to-r from-primary-main to-primary-700">
                    <CardTitle className="text-lg font-bold text-white">
                      <h2 className="flex items-center gap-2">
                        <svg
                          width="23"
                          height="18"
                          viewBox="0 0 23 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.017 0.302356C11.5846 -0.0984253 10.9166 -0.0984253 10.4877 0.302356L2.61269 7.61486C2.27519 7.93126 2.16269 8.41993 2.33144 8.84884C2.50019 9.27775 2.91151 9.56251 3.37558 9.56251H3.93808V15.75C3.93808 16.991 4.94706 18 6.18808 18H16.3131C17.5541 18 18.5631 16.991 18.5631 15.75V9.56251H19.1256C19.5896 9.56251 20.0045 9.27775 20.1732 8.84884C20.342 8.41993 20.2295 7.92775 19.892 7.61486L12.017 0.302356ZM10.6881 11.25H11.8131C12.7447 11.25 13.5006 12.0059 13.5006 12.9375V16.3125H9.00058V12.9375C9.00058 12.0059 9.75644 11.25 10.6881 11.25Z"
                            fill="white"
                          />
                        </svg>
                        Shipping Address
                      </h2>
                    </CardTitle>
                    <CardDescription className="text-primary-100 font-medium">
                      Where should we deliver your order?
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="p-6 space-y-5">
                    {/* TODO: Saved Address */}
                    {/* <div className=""></div> */}
                    {/* <Separator className="bg-gray-100" /> */}

                    <div className="flex gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100">
                      <div className="size-8 rounded-full bg-blue-100 flex shrink-0">
                        <Info className="size-4 m-auto text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm text-blue-800 font-medium">
                          Delivery Information
                        </p>
                        <p className="text-xs text-blue-600 mt-0.5">
                          Please ensure your address is accurate for smooth
                          delivery
                        </p>
                      </div>
                    </div>

                    <AddressForm />
                  </CardContent>
                </Card>

                {/* Payment */}
                <Card className="p-0 rounded-2xl gap-0">
                  <CardHeader className="px-6 py-4 rounded-none gap-1 bg-linear-to-r from-primary-main to-primary-700">
                    <CardTitle className="text-lg font-bold text-white">
                      <h2 className="flex items-center gap-2">
                        <svg
                          width="23"
                          height="18"
                          viewBox="0 0 23 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.5 1.125C3.25898 1.125 2.25 2.13398 2.25 3.375V13.5C2.25 14.741 3.25898 15.75 4.5 15.75H18C19.241 15.75 20.25 14.741 20.25 13.5V6.75C20.25 5.50898 19.241 4.5 18 4.5H4.78125C4.31367 4.5 3.9375 4.12383 3.9375 3.65625C3.9375 3.18867 4.31367 2.8125 4.78125 2.8125H18.2812C18.7488 2.8125 19.125 2.43633 19.125 1.96875C19.125 1.50117 18.7488 1.125 18.2812 1.125H4.5ZM16.875 9C17.1734 9 17.4595 9.11853 17.6705 9.3295C17.8815 9.54048 18 9.82663 18 10.125C18 10.4234 17.8815 10.7095 17.6705 10.9205C17.4595 11.1315 17.1734 11.25 16.875 11.25C16.5766 11.25 16.2905 11.1315 16.0795 10.9205C15.8685 10.7095 15.75 10.4234 15.75 10.125C15.75 9.82663 15.8685 9.54048 16.0795 9.3295C16.2905 9.11853 16.5766 9 16.875 9Z"
                            fill="white"
                          />
                        </svg>
                        Payment Method
                      </h2>
                    </CardTitle>
                    <CardDescription className="text-primary-100 font-medium">
                      Choose how you&apos;d like to pay
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="p-6">
                    <PaymentMethod />

                    <div className="flex items-center gap-3 p-4 bg-linear-to-r from-green-50 to-gray-100 rounded-xl border border-green-100 mt-4">
                      <div className="size-10 rounded-full bg-green-100 text-primary-main flex shrink-0">
                        <ShieldIcon />
                      </div>
                      <div className="space-y-0.5">
                        <p className="text-sm font-medium text-green-800">
                          Secure &amp; Encrypted
                        </p>
                        <p className="text-xs text-primary-main">
                          Your payment info is protected with 256-bit SSL
                          encryption
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="lg:col-span-4">
                <OrderSummary
                  numOfCartItems={numOfCartItems}
                  products={products}
                  totalCartPrice={totalCartPrice}
                  cartId={cartId!}
                />
              </div>
            </div>
          </CheckoutProvider>
        </div>
      )}
    </main>
  );
}
