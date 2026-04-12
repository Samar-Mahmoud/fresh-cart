"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter, useSearchParams } from "next/navigation";

export default function SortBy() {
  const searchParams = useSearchParams();

  const router = useRouter();

  const handleChange = (value: string): void => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", value);
    router.replace(`/search?${params.toString()}`);
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium text-gray-500 ">Sort by</span>
      <Select onValueChange={handleChange}>
        <SelectTrigger className="ps-4 pe-7 py-2 rounded-lg border-gray-200 bg-white data-placeholder:text-gray-700 data-placeholder:font-medium">
          <SelectValue placeholder="Relevance" />
        </SelectTrigger>
        <SelectContent position="popper">
          <SelectItem value="relevance">Relevance</SelectItem>
          <SelectItem value="price">Price: Low to High</SelectItem>
          <SelectItem value="-price">Price: High to Low</SelectItem>
          <SelectItem value="-ratingsAverage">Rating: High to Low</SelectItem>
          <SelectItem value="title">Name: A to Z</SelectItem>
          <SelectItem value="-title">Name: Z to A</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
