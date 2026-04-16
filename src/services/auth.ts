import { SignInData } from "@/schema/signin";
import { RegisterData } from "@/schema/register";
import {
  AuthResponse,
  ForgotPasswordResponse,
  LoginResponse,
  RegisterResponse,
  SuccessResponse,
  VerifyTokenResponse,
} from "@/types/auth";
import { authFetch } from "@/lib/auth";
import {
  CodeVerificationData,
  ForgotPasswordData,
} from "@/schema/forgot-password";
import { ErrorResponse } from "@/types";

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
  userData: SignInData,
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

export async function getUserId() {
  const res = await authFetch<VerifyTokenResponse>("/v1/auth/verifyToken", {
    method: "GET",
  });

  if (res.isError) {
    console.error(res.message);
    return { id: null };
  }

  return { id: res.data.decoded.id };
}

export async function requestResetPasswordCode(
  forgotPasswordData: ForgotPasswordData,
) {
  const res = await fetch(`${AUTH}/forgotPasswords`, {
    method: "POST",
    body: JSON.stringify(forgotPasswordData),
    headers: { "Content-Type": "application/json" },
  });

  const data = await res.json();

  if (!res.ok) {
    return {
      isError: true,
      message: (data as ErrorResponse).message,
    };
  }

  return { isError: false, message: (data as ForgotPasswordResponse).message };
}

export async function verifyResetCode(
  codeVerificationData: CodeVerificationData,
) {
  const res = await fetch(`${AUTH}/verifyResetCode`, {
    method: "POST",
    body: JSON.stringify(codeVerificationData),
    headers: { "Content-Type": "application/json" },
  });

  const data = await res.json();

  if (!res.ok) {
    return {
      isError: true,
      message: (data as ErrorResponse).message,
    };
  }

  return { isError: false };
}

export async function resetPassword(resetPasswordData: {
  email: string;
  newPassword: string;
}) {
  const res = await fetch(`${AUTH}/resetPassword`, {
    method: "PUT",
    body: JSON.stringify(resetPasswordData),
    headers: { "Content-Type": "application/json" },
  });

  const data = await res.json();

  if (!res.ok) {
    return {
      isError: true,
      message: (data as ErrorResponse).message,
    };
  }

  return {
    isError: false,
    message:
      "Your password has been successfully updated! You can now sign in with your new password.",
  };
}
