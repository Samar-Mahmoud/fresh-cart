import { getWishlistItems } from "@/services/wishlist";
import EmptyState from "@/components/shared/Empty";
import { ArrowLeft, Heart } from "lucide-react";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import WishlistItem from "@/components/wishlist/Item";

export default async function Wishlist() {
  const { count, data } = await getWishlistItems();

  return (
    <main className="bg-gray-50/50">
      <div className="px-4 py-8 bg-white">
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
                  Wishlist
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="flex gap-4 items-center">
            <div className="size-12 flex bg-red-50 text-red-500 rounded-xl">
              <Heart className="m-auto w-6.25 h-5 fill-current" />
            </div>
            <div>
              <h1 className="text-gray-900 font-bold text-2xl">My Wishlist</h1>
              <span className="text-gray-500 text-sm font-medium">
                {count} items saved
              </span>
            </div>
          </div>
        </div>
      </div>

      {count === 0 ? (
        <div className="py-20">
          <EmptyState
            title="Your wishlist is empty"
            description="Browse products and save your favorites here."
            icon={<Heart className="size-8" />}
            action={
              <Link
                href="/products"
                className="py-3 px-6 font-semibold bg-primary-main text-white hover:bg-primary-700 hover:text-white rounded-lg"
              >
                Browse Products
              </Link>
            }
          />
        </div>
      ) : (
        <div className="py-8 px-4 ">
          <div className="container mx-auto">
            <div className="divide-y divide-gray-100 mb-8 bg-white rounded-2xl border border-gray-100">
              <div className="hidden lg:grid grid-cols-12 p-4 lg:py-5 lg:px-4.5 gap-4 bg-gray-50">
                <div className="col-span-12 lg:col-span-6">
                  <span className="text-sm font-medium text-gray-500">
                    Product
                  </span>
                </div>
                <div className="col-span-12 lg:col-span-2 justify-self-center">
                  <span className="text-sm font-medium text-gray-500">
                    Price
                  </span>
                </div>
                <div className="col-span-12 lg:col-span-2 justify-self-center">
                  <span className="text-sm font-medium text-gray-500">
                    Status
                  </span>
                </div>
                <div className="col-span-12 lg:col-span-2 justify-self-center">
                  <span className="text-sm font-medium text-gray-500">
                    Actions
                  </span>
                </div>
              </div>

              {data.map((item) => (
                <WishlistItem key={item._id} {...item} />
              ))}
            </div>

            <Link
              href="/"
              className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-primary-700 transition-colors"
            >
              <ArrowLeft className="size-3" />
              Continue Shopping
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}
