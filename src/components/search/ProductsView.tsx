"use client";

import { Product } from "@/types/products";
import ProductCard from "../products/Card";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function ProductsView({ products }: { products: Product[] }) {
  const { view } = useSelector((state: RootState) => state.search);

  return (
    <div
      className={`grid gap-4 ${view === "grid" ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" : "grid-cols-1"}`}
    >
      {products.map((prod) => (
        <ProductCard key={prod._id} {...prod} />
      ))}
    </div>
  );
}
