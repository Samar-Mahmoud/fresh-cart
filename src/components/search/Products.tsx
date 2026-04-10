import { getProducts } from "@/services/products";
import { ProductsFilters } from "@/types/products";
import Pagination from "./Pagination";
import EmptyState from "../shared/Empty";
import { Search } from "lucide-react";
import ProductsView from "./ProductsView";
import Link from "next/link";

export default async function Products({
  filters,
}: {
  filters: ProductsFilters;
}) {
  const { data: products, metadata } = await getProducts({
    ...filters,
    limit: 12,
  });

  return products.length > 0 ? (
    <>
      <ProductsView products={products} />

      <Pagination metadata={metadata} />
    </>
  ) : (
    <div className="p-13">
      <EmptyState
        icon={<Search className="size-8 " />}
        title="No Products Found"
        description="Try adjusting your search or filters to find what you're looking for."
        action={
          <Link
            href="/search"
            className="py-3 px-6 font-semibold bg-primary-main text-white hover:bg-primary-700 hover:text-white rounded-lg"
          >
            Clear Filters
          </Link>
        }
      />
    </div>
  );
}
