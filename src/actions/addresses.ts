"use server";

import { removeAddress } from "@/services/addresses";
import { Address } from "@/types/addresses";

export async function removeAddressAction(addressId: Address["_id"]) {
  return await removeAddress(addressId);
}
