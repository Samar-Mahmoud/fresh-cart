import {
  Button,
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui";
import ProductCard from "@/components/products/Card";
import { Search } from "lucide-react";
import { getProducts } from "@/services/products";

export default async function Results({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { q, ...filters } = await searchParams;

  const products = await getProducts({ ...filters, keyword: q as string });

  return products.length > 0 ? (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((prod) => (
        <ProductCard key={prod._id} {...prod} />
      ))}
    </div>
  ) : (
    <Empty>
      <EmptyHeader>
        <EmptyMedia
          variant="icon"
          className="size-18 text-gray-400 bg-gray-100 rounded-full"
        >
          <Search className="size-8 " />
        </EmptyMedia>
        <EmptyTitle className="text-gray-900 font-bold">
          No Products Found
        </EmptyTitle>
        <EmptyDescription className="text-gray-500 font-semibold">
          Try adjusting your search or filters to find what you&apos;re looking
          for.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button className="py-3 px-6 font-semibold bg-primary-main text-white hover:bg-primary-700 hover:text-white rounded-lg">
          Clear Filters
        </Button>
      </EmptyContent>
    </Empty>
  );
}
