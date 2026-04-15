"use server";

import { update } from "@/auth";
import { PasswordT, UserData } from "@/schema/settings";
import { changePassword, changeUserData } from "@/services/settings";

export async function changeUserDataAction(data: UserData) {
  const res = await changeUserData(data);

  if (res.isError) {
    return res;
  }

  const { user, ...successRes } = res;

  await update({ user });

  return successRes;
}

export async function changePasswordAction(data: PasswordT) {
  return await changePassword(data);
}
