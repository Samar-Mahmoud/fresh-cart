import { authFetch } from "@/lib/auth";
import { Address, AddressResponse } from "@/types/addresses";
import { revalidatePath } from "next/cache";

const ADDRESS = "/v1/addresses";

export async function getAddresses() {
  const res = await authFetch<AddressResponse>(ADDRESS, {
    method: "GET",
    cache: "force-cache",
  });

  if (res.isError) {
    console.error(res.message);
    return [];
  }

  return res.data.data;
}

export async function removeAddress(addressId: Address["_id"]) {
  const res = await authFetch<AddressResponse>(`${ADDRESS}/${addressId}`, {
    method: "DELETE",
  });

  if (res.isError) {
    console.error(res.message);
    return res;
  }

  revalidatePath("/profile/addresses");

  return { isError: false, message: `Address deleted successfully!` };
}
