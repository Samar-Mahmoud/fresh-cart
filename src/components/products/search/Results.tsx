"use client";

import { Button } from "@/components/ui/button";
import ProductCard from "@/components/products/Card";
import { Search } from "lucide-react";
import { List } from "lucide-react";
import MobileSearchFilters from "@/components/products/search/MobileSearchFilters";
import SortBy from "@/components/products/SortBy";
import { SearchResultsProps } from "@/types/props";
import { useState } from "react";
import EmptyState from "@/components/shared/Empty";

export default function Results({
  products,
  brands,
  categories,
}: SearchResultsProps) {
  const [view, setView] = useState<"grid" | "rows">("grid");

  return products.length > 0 ? (
    <>
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-4">
          <div className="lg:hidden">
            <MobileSearchFilters categories={categories} brands={brands} />
          </div>

          <div className="flex gap-1 items-stretch border border-gray-200 rounded-lg p-1">
            <Button
              className={`px-2 py-3 h-auto flex rounded-md ${view === "grid" ? "bg-primary-main text-white" : "bg-white text-gray-700 hover:bg-primary-50/50"}`}
              onClick={() => setView("grid")}
            >
              <svg
                className="m-auto size-5"
                width="20"
                height="16"
                viewBox="0 0 20 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 1.25C9 0.559375 8.44062 0 7.75 0H6.25C5.55937 0 5 0.559375 5 1.25V2.75C5 3.44062 5.55937 4 6.25 4H7.75C8.44062 4 9 3.44062 9 2.75V1.25ZM9 7.25C9 6.55937 8.44062 6 7.75 6H6.25C5.55937 6 5 6.55937 5 7.25V8.75C5 9.44063 5.55937 10 6.25 10H7.75C8.44062 10 9 9.44063 9 8.75V7.25ZM5 13.25V14.75C5 15.4406 5.55937 16 6.25 16H7.75C8.44062 16 9 15.4406 9 14.75V13.25C9 12.5594 8.44062 12 7.75 12H6.25C5.55937 12 5 12.5594 5 13.25ZM15 1.25C15 0.559375 14.4406 0 13.75 0H12.25C11.5594 0 11 0.559375 11 1.25V2.75C11 3.44062 11.5594 4 12.25 4H13.75C14.4406 4 15 3.44062 15 2.75V1.25ZM11 7.25V8.75C11 9.44063 11.5594 10 12.25 10H13.75C14.4406 10 15 9.44063 15 8.75V7.25C15 6.55937 14.4406 6 13.75 6H12.25C11.5594 6 11 6.55937 11 7.25ZM15 13.25C15 12.5594 14.4406 12 13.75 12H12.25C11.5594 12 11 12.5594 11 13.25V14.75C11 15.4406 11.5594 16 12.25 16H13.75C14.4406 16 15 15.4406 15 14.75V13.25Z"
                  fill="currentColor"
                />
              </svg>
            </Button>
            <Button
              className={`px-2 py-3 h-auto flex rounded-md ${view === "rows" ? "bg-primary-main text-white" : "bg-white text-gray-700 hover:bg-primary-50/50"}`}
              onClick={() => setView("rows")}
            >
              <List className="m-auto size-5" strokeWidth={3} />
            </Button>
          </div>
        </div>

        <SortBy />
      </div>

      <div
        className={`grid gap-4 ${view === "grid" ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" : "grid-cols-1"}`}
      >
        {products.map((prod) => (
          <ProductCard key={prod._id} {...prod} />
        ))}
      </div>
    </>
  ) : (
    <div className="p-13">
      <EmptyState
        icon={<Search className="size-8 " />}
        title="No Products Found"
        description="Try adjusting your search or filters to find what you're looking for."
        action={
          <Button className="py-3 px-6 font-semibold bg-primary-main text-white hover:bg-primary-700 hover:text-white rounded-lg">
            Clear Filters
          </Button>
        }
      />
    </div>
  );
}
