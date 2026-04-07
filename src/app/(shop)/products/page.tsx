import ProductCard from "@/components/products/ProductCard";
import { getProducts } from "@/services/products";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default async function Products() {
  const products = await getProducts();

  return (
    <section className="min-h-screen">
      <header className="bg-linear-to-br from-primary-main via-primary-600 to-[#4ade80]">
        <div className="container mx-auto px-4 py-10 lg:py-14 space-y-6">
          <Breadcrumb>
            <BreadcrumbList className="gap-2 sm:gap-2 mb-6">
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link
                    className="text-white/70 hover:text-white transition-colors text-sm"
                    href="/"
                  >
                    Home
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbSeparator>
                <span className="text-white/40">/</span>
              </BreadcrumbSeparator>

              <BreadcrumbItem>
                <BreadcrumbPage className="text-white font-medium text-sm">
                  All Products
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="flex items-center gap-5">
            <div className="shrink-0 size-16 rounded-2xl bg-white/20 backdrop-blur-sm flex shadow-xl">
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
            </div>
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-white">
                All Products
              </h1>
              <p className="font-medium text-base text-white/80 mt-1">
                Explore our complete product collection
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <h2 className="text-sm font-medium mb-6 text-gray-500">
          Showing {products.length} products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
          {products.map((prod) => (
            <ProductCard key={prod._id} {...prod} />
          ))}
        </div>
      </div>
    </section>
  );
}
