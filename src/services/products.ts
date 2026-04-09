import { Response } from "@/types";
import { Product, ProductsFilters } from "@/types/products";

const PRODUCTS = `${process.env.BASE_URL}/v1/products`;

export async function getProducts(filters: ProductsFilters = {}) {
  const q: string[] = [];
  Object.entries(filters).forEach(([key, value]) => {
    if (!value) return;
    const valueArr = Array.isArray(value) ? value : [value];
    valueArr.forEach((v) => q.push(`${key}=${v}`));
  });

  const res = await fetch(
    `${PRODUCTS}${q.length > 0 ? `?${q.join("&")}` : ""}`,
  );
  const data: Response<Product[]> = await res.json();
  return data.data;
}

export async function getProduct(id: Product["_id"]) {
  const res = await fetch(`${PRODUCTS}/${id}`);
  const data: Response<Product> = await res.json();
  return data.data;
}
