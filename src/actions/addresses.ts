"use server";

import { AddressData } from "@/schema/address";
import { addAddress, removeAddress, updateAddress } from "@/services/addresses";
import { Address } from "@/types/addresses";

export async function removeAddressAction(addressId: Address["_id"]) {
  return await removeAddress(addressId);
}

export async function addressAction(
  data: AddressData,
  { isEdit, addressId }: { isEdit: boolean; addressId?: Address["_id"] },
) {
  if (isEdit) {
    return await updateAddress(addressId!, data);
  }
  return await addAddress(data);
}
