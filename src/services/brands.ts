import { Response } from "@/types";
import { Brand } from "@/types/brands";

const BRANDS = `${process.env.BASE_URL}/v1/brands`;

export async function getBrands() {
  const res = await fetch(BRANDS);
  const data: Response<Brand[]> = await res.json();
  return data.data;
}

export async function getBrand(id: Brand["_id"]) {
  const res = await fetch(`${BRANDS}/${id}`);
  const data: Response<Brand> = await res.json();
  return data.data;
}
