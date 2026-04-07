import { Response } from "@/types";
import { Brand } from "@/types/brands";
import { Product } from "@/types/products";

const PRODUCTS = `${process.env.BASE_URL}/v1/products`;

export async function getProducts(brand?: Brand['_id']) {
  const res = await fetch(`${PRODUCTS}${brand ? `?brand=${brand}` : ''}`);
  const data: Response<Product[]> = await res.json();
  return data.data;
}

export async function getProduct(id: string) {
  const res = await fetch(`${PRODUCTS}/${id}`);
  const data: Response<Product> = await res.json();
  return data.data;
}
