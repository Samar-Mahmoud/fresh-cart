import ProductSearchInput from "@/components/products/search/SearchInput";
import ProductSearchFilters from "@/components/products/search/SearchFilters";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui";
import { getBrands } from "@/services/brands";
import { getCategories } from "@/services/categories";
import Link from "next/link";
import ProductList from "@/components/products/search/Results";
import { ProductsFilters } from "@/types/products";
import { getProducts } from "@/services/products";

export default async function SearchResults({
  searchParams,
}: {
  searchParams: Promise<ProductsFilters>;
}) {
  const filters = await searchParams;

  const products = await getProducts(filters);
  const categories = await getCategories();
  const brands = await getBrands();

  return (
    <section className="min-h-screen">
      <header className="px-4 py-6">
        <div className="container mx-auto space-y-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link
                    className="text-gray-500 font-medium hover:text-gray-900 transition-colors text-sm"
                    href="/"
                  >
                    Home
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbSeparator>
                <span className="text-gray-300">/</span>
              </BreadcrumbSeparator>

              <BreadcrumbItem>
                <BreadcrumbPage className="text-gray-900 font-medium">
                  Search Results
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <ProductSearchInput />
        </div>
      </header>

      <div className="bg-gray-50/50 py-8 px-4 ">
        <div className="container mx-auto flex gap-8">
          <aside className="hidden lg:block bg-white rounded-xl p-6 w-[256px] h-fit srink-0 border border-gray-100">
            <ProductSearchFilters categories={categories} brands={brands} />
          </aside>

          <main className="space-y-6 flex-1">
            <ProductList
              products={products}
              brands={brands}
              categories={categories}
            />
          </main>
        </div>
      </div>
    </section>
  );
}
