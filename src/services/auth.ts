import { LoginData } from "@/schema/login";
import { RegisterData } from "@/schema/register";
import { AuthResponse, FormResponse, SuccessResponse } from "@/types/auth";

const AUTH = `${process.env.BASE_URL}/v1/auth`;

export async function register(userData: RegisterData): Promise<FormResponse> {
  const res = await fetch(`${AUTH}/signup`, {
    method: "POST",
    body: JSON.stringify(userData),
    headers: { "Content-Type": "application/json" },
  });
  const data: AuthResponse = await res.json();

  const isError = data.message !== "success";
  const message = isError
    ? data.message
    : "Welcome to FreshCart! Your account has been created successfully";
  return { message, isError };
}

export async function login(userData: LoginData): Promise<FormResponse> {
  const res = await fetch(`${AUTH}/signin`, {
    method: "POST",
    body: JSON.stringify(userData),
    headers: { "Content-Type": "application/json" },
  });
  const data: AuthResponse = await res.json();

  const isError = data.message !== "success";
  const message = isError
    ? data.message
    : `Welcome back, ${(data as SuccessResponse).user.name}!`;
  return { message, isError };
}
