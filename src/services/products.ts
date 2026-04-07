import { Response } from "@/types";
import { Product } from "@/types/products";

const PRODUCTS = `${process.env.BASE_URL}/v1/products`;

export async function getProducts() {
  const res = await fetch(PRODUCTS);
  const data: Response<Product[]> = await res.json();
  return data.data;
}

export async function getProduct(id: string) {
  const res = await fetch(`${PRODUCTS}/${id}`);
  const data: Response<Product> = await res.json();
  return data.data;
}
