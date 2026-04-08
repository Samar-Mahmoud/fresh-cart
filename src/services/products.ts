import { Response } from "@/types";
import { Product, ProductsFilters } from "@/types/products";

const PRODUCTS = `${process.env.BASE_URL}/v1/products`;

export async function getProducts({
  brand,
  category,
  subcategory,
}: ProductsFilters = {}) {
  const q = [];
  if (brand) {
    q.push(`brand=${brand}`);
  }
  if (category) {
    q.push(`category=${category}`);
  }
  if (subcategory) {
    q.push(`subcategory=${subcategory}`);
  }
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
