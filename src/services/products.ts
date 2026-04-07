import { Response } from "@/types";
import { Brand } from "@/types/brands";
import { SubCategory } from "@/types/categories";
import { Product } from "@/types/products";

const PRODUCTS = `${process.env.BASE_URL}/v1/products`;

export async function getProducts(
  brand?: Brand["_id"],
  subcategory?: SubCategory["_id"],
) {
  const q = [];
  if (brand) {
    q.push(`brand=${brand}`);
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
