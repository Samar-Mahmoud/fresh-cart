"use server";

import { signIn, signOut } from "@/auth";
import { LoginData } from "@/schema/login";
import { RegisterData } from "@/schema/register";
import { register } from "@/services/auth";

export async function registerAction(formData: RegisterData) {
  return await register(formData);
}

export async function loginAction(formData: LoginData) {
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

export async function logoutAction() {
  return await signOut();
}
