import { CategoriesResponse } from "@/types/categories";

export async function getCategories() {
  const res = await fetch(`${process.env.BASE_URL}/v1/categories`);
  const data: CategoriesResponse = await res.json();
  return data.data;
}
