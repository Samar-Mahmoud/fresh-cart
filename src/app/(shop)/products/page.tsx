import ProductCard from "@/components/products/Card";
import { getProducts } from "@/services/products";
import Header from "@/components/shared/Header";
import { BoxIcon, Filter, FolderOpen, XIcon } from "lucide-react";
import Link from "next/link";
import BrandIcon from "@/components/icons/BrandIcon";
import Image from "next/image";
import { getHeaderData } from "@/lib/products";
import { ProductsFilters } from "@/types/products";
import EmptyState from "@/components/shared/Empty";

export default async function Products({
  searchParams,
}: {
  searchParams: Promise<ProductsFilters>;
}) {
  const { brand, category, subcategory } = await searchParams;

  const { data: products } = await getProducts({
    brand,
    category,
    subcategory,
  });

  const { description, image, links, title } = await getHeaderData({
    brand,
    category,
    subcategory,
  });

  return (
    <main className="min-h-screen">
      <Header
        classes="from-primary-main via-primary-600 to-[#4ade80]"
        title={title}
        description={description}
        links={links}
      >
        {image ? (
          <Image
            width="48"
            height="48"
            src={image}
            alt={title}
            className="object-contain size-12 m-auto"
          />
        ) : subcategory ? (
          <FolderOpen className="fill-white text-white m-auto size-6" />
        ) : (
          <svg
            className="m-auto"
            width="38"
            height="31"
            viewBox="0 0 38 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M32.8292 14.0933C33.4385 14.7847 34.4874 14.937 35.2784 14.4155C36.1397 13.8413 36.3741 12.6753 35.7999 11.814L32.9874 7.59521C32.8233 7.34912 32.6006 7.14404 32.337 6.99756L20.5889 0.470215C19.4581 -0.156738 18.0811 -0.156738 16.9444 0.470215L5.20221 6.9917C4.8858 7.16748 4.63385 7.42529 4.46392 7.7417L1.62213 13.0093C0.883846 14.3804 1.39947 16.0854 2.77056 16.8237L4.70416 17.8608V20.9839C4.70416 22.3315 5.43072 23.5796 6.6026 24.2476L16.9151 30.0894C18.0635 30.7397 19.4639 30.7397 20.6124 30.0894L30.9249 24.2476C32.1026 23.5796 32.8233 22.3374 32.8233 20.9839V14.0991L32.8292 14.0933ZM18.7667 13.519L9.97174 8.63232L18.7667 3.74561L27.5616 8.63232L18.7667 13.519ZM16.335 16.4605L15.087 19.1675L5.37213 13.9644L6.86041 11.1987L16.335 16.4605Z"
              fill="white"
            />
          </svg>
        )}
      </Header>

      <div className="container mx-auto px-4 py-8">
        {(brand || subcategory || category) && (
          <div className="mb-6 flex items-center gap-3 flex-wrap">
            <span className="flex items-center gap-2 text-sm font-medium text-gray-600">
              <Filter className="fill-current size-4" />
              Active Filters:
            </span>

            <Link
              className={`flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium ${brand ? `bg-violet-100 text-violet-700 hover:bg-violet-200` : `bg-emerald-100 text-emerald-700 hover:bg-emerald-200`} transition-colors`}
              href="/products"
            >
              {brand ? (
                <BrandIcon className="m-auto size-5" />
              ) : (
                <FolderOpen className="fill-current size-3.5" />
              )}
              {title}
              <XIcon className="size-3.5" />
            </Link>

            <Link
              className="text-sm font-medium text-gray-500 hover:text-gray-700 underline"
              href="/products"
            >
              Clear all
            </Link>
          </div>
        )}

        <h2 className="text-sm font-medium mb-6 text-gray-500">
          Showing {products.length} products
        </h2>

        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
            {products.map((prod) => (
              <ProductCard key={prod._id} {...prod} />
            ))}
          </div>
        ) : (
          <EmptyState
            icon={<BoxIcon className="size-8 " />}
            title="No Products Found"
            description="No Products match your current filters"
            action={
              <Link
                href="/products"
                className="py-3 px-6 font-semibold bg-primary-main text-white hover:bg-primary-700 hover:text-white rounded-lg"
              >
                View All Products
              </Link>
            }
          />
        )}
      </div>
    </main>
  );
}
