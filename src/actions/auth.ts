"use server";

import { signIn, signOut } from "@/auth";
import { SignInData } from "@/schema/signin";
import { RegisterData } from "@/schema/register";
import { register } from "@/services/auth";

export async function registerAction(formData: RegisterData) {
  return await register(formData);
}

export async function signInAction(formData: SignInData) {
  try {
    const { email, password } = formData;

    await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    return { isError: false };
  } catch {
    return { isError: true };
  }
}

export async function signOutAction(options?: {
  redirectTo?: string | undefined;
  redirect?: true | undefined;
}) {
  return await signOut(options ?? { redirectTo: "/signin" });
}
