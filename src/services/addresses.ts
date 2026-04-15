import { authFetch } from "@/lib/auth";
import { AddressData } from "@/schema/address";
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
  revalidatePath("/checkout");

  return { isError: false, message: `Address deleted successfully!` };
}

export async function addAddress(data: AddressData) {
  const res = await authFetch<AddressResponse>(ADDRESS, {
    method: "POST",
    body: JSON.stringify(data),
  });

  if (res.isError) {
    console.error(res.message);
    return res;
  }

  revalidatePath("/profile/addresses");
  revalidatePath("/checkout");

  return { isError: false, message: `Address added successfully!` };
}

export async function updateAddress(
  addressId: Address["_id"],
  data: AddressData,
) {
  const res = await authFetch<AddressResponse>(`${ADDRESS}/${addressId}`, {
    method: "DELETE",
  });

  if (res.isError) {
    console.error(res.message);
    return { isError: true, message: "Something went wrong, try again later." };
  }

  const { isError } = await addAddress(data);
  if (isError) {
    return { isError: true, message: "Something went wrong, try again later." };
  }

  return { isError: false, message: `Address updated successfully!` };
}
