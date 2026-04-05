import { ProductsResponse } from "@/types/products";

export async function getProducts() {
  const res = await fetch(`${process.env.BASE_URL}/v1/products`);
  const data: ProductsResponse = await res.json();
  return data.data;
}
