import { LoginData } from "@/schema/signin";
import { RegisterData } from "@/schema/register";
import {
  AuthResponse,
  LoginResponse,
  RegisterResponse,
  SuccessResponse,
} from "@/types/auth";

const AUTH = `${process.env.BASE_URL}/v1/auth`;

export async function register(
  userData: RegisterData,
): Promise<RegisterResponse> {
  const res = await fetch(`${AUTH}/signup`, {
    method: "POST",
    body: JSON.stringify(userData),
    headers: { "Content-Type": "application/json" },
  });
  const data: AuthResponse = await res.json();

  const isError = data.message !== "success";
  const message = isError
    ? data.message
    : "Welcome! You can now log in with your email and password.";

  return { message, isError };
}

export async function login(
  userData: LoginData,
): Promise<LoginResponse | null> {
  const res = await fetch(`${AUTH}/signin`, {
    method: "POST",
    body: JSON.stringify(userData),
    headers: { "Content-Type": "application/json" },
  });
  const data: AuthResponse = await res.json();

  if (data.message !== "success") {
    return null;
  }

  const { user, token } = data as SuccessResponse;
  return { user, token };
}
