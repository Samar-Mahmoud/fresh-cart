import { Response } from "@/types";
import { Category, SubCategory } from "@/types/categories";

const CATEGORY = `${process.env.BASE_URL}/v1/categories`;

export async function getCategories() {
  const res = await fetch(CATEGORY);
  const data: Response<Category[]> = await res.json();
  return data.data;
}

export async function getCategory(id: Category["_id"]) {
  const res = await fetch(`${CATEGORY}/${id}`);
  const data: Response<Category> = await res.json();
  return data.data;
}

export async function getSubCategories(id: Category["_id"]) {
  const res = await fetch(`${CATEGORY}/${id}/subcategories`);
  const data: Response<SubCategory[]> = await res.json();
  return data.data;
}
