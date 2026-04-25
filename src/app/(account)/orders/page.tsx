import ShoppingBagIcon from "@/components/icons/ShoppingBagIcon";
import EmptyState from "@/components/shared/Empty";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { getUserId } from "@/services/auth";
import { getOrders } from "@/services/orders";
import Link from "next/link";
import OrderCard from "@/components/orders/Card";

export default async function Orders() {
  const { id: cartOwner } = await getUserId();
  const orders = cartOwner ? await getOrders(cartOwner) : [];

  return (
    <main className="min-h-screen px-4 py-8">
      <div className="container mx-auto">
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
                My Orders
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="flex items-center justify-between gap-4 flex-wrap mb-8">
          <div className="flex gap-4 items-center">
            <div className="size-14 flex bg-linear-to-br from-primary-600 to-primary-main text-white rounded-2xl">
              <ShoppingBagIcon className="m-auto size-7" />
            </div>
            <div>
              <h1 className="text-gray-900 font-bold text-2xl">My Orders</h1>
              <span className="text-gray-500 text-sm font-medium">
                Track and manage your {orders.length} orders
              </span>
            </div>
          </div>

          <Link
            href="/"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-primary-main hover:text-primary-700 hover:bg-primary-50/50 transition-colors"
          >
            <ShoppingBagIcon className="size-4.5" />
            Continue Shopping
          </Link>
        </div>

        {orders.length === 0 ? (
          <div className="py-20">
            <EmptyState
              title="No orders yet"
              description="When you place orders, they'll appear here so you can track them."
              icon={<ShoppingBagIcon className="size-8" />}
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
          <div className="space-y-4">
            {orders.map((order) => (
              <OrderCard key={order._id} {...order} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
