"use server";

import { LoginData } from "@/schema/login";
import { RegisterData } from "@/schema/register";
import { login, register } from "@/services/auth";

export async function registerAction(formData: RegisterData) {
  return await register(formData);
}

export async function loginAction(formData: LoginData) {
  return await login(formData);
}
