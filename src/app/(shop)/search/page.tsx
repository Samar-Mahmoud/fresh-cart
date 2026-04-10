import React, { Suspense } from "react";
import ProductSearchInput from "@/components/search/SearchInput";
import ProductSearchFilters from "@/components/search/SearchFilters";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Spinner,
} from "@/components/ui";
import { getBrands } from "@/services/brands";
import { getCategories } from "@/services/categories";
import Link from "next/link";
import { ProductsFilters } from "@/types/products";
import { SearchFilterBadgesProps } from "@/types/props";
import MobileSearchFilters from "@/components/search/MobileSearchFilters";
import SortBy from "@/components/products/SortBy";
import ViewButtons from "@/components/search/ViewButtons";
import FiltersBadges from "@/components/search/FiltersBadges";
import { ViewProvider } from "@/context/SearchView";
import Products from "@/components/search/Products";

export default async function Search({
  searchParams,
}: {
  searchParams: Promise<ProductsFilters>;
}) {
  const filters = await searchParams;
  const {
    keyword,
    category,
    brand,
    "price[gte]": gte,
    "price[lte]": lte,
  } = filters;

  const categories = await getCategories();
  const brands = await getBrands();

  const badges: SearchFilterBadgesProps["badges"] = {
    keyword: keyword ? { value: keyword } : undefined,
    category: category
      ? (Array.isArray(category) ? category : [category]).map((catId) => {
          const category = categories.find((c) => c._id === catId)!;
          return { value: catId, label: category.name };
        })
      : undefined,
    brand: brand
      ? (Array.isArray(brand) ? brand : [brand]).map((brandId) => {
          const brand = brands.find((b) => b._id === brandId)!;
          return { value: brandId, label: brand.name };
        })
      : undefined,
    price:
      lte || gte ? { value: `${gte || 0} - ${lte || "∞"} EGP` } : undefined,
  };

  const filtersKey = new URLSearchParams(
    Object.entries(filters).flatMap(([k, v]) =>
      Array.isArray(v) ? v.map((val) => [k, val]) : [[k, String(v ?? "")]],
    ),
  ).toString();

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

          <ViewProvider>
            <main className="space-y-6 flex-1">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div className="flex items-center gap-4">
                  <div className="lg:hidden">
                    <MobileSearchFilters
                      categories={categories}
                      brands={brands}
                    />
                  </div>

                  <ViewButtons />
                </div>

                <SortBy />
              </div>

              <FiltersBadges badges={badges} />

              <Suspense
                key={filtersKey}
                fallback={
                  <div className="h-75 flex items-center justify-center">
                    <Spinner className="size-6 text-primary-main" />
                  </div>
                }
              >
                <Products filters={filters} />
              </Suspense>
            </main>
          </ViewProvider>
        </div>
      </div>
    </section>
  );
}
