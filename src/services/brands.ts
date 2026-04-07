import { Response } from "@/types";
import { Brand } from "@/types/brands";

export async function getBrands() {
  const res = await fetch(`${process.env.BASE_URL}/v1/brands`);
  const data: Response<Brand[]> = await res.json();
  return data.data;
}
