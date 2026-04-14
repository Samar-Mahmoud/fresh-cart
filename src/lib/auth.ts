import { auth } from "@/auth";
import { ErrorResponse } from "@/types";
import { redirect } from "next/navigation";

export async function authFetch<T>(
  endpoint: string,
  options: RequestInit = {},
): Promise<{ isError: false; data: T } | { isError: true; message: string }> {
  const session = await auth();

  if (!session) {
    redirect("/signin");
  }

  const res = await fetch(`${process.env.BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      token: `${session.user.token}`,
      ...options.headers,
    },
  });
  const data = await res.json();

  if (!res.ok) {
    return { isError: true, message: (data as ErrorResponse).message };
  }

  return { isError: false, data };
}

export function getPasswordStrength(password: string): {
  level: "Weak" | "Fair" | "Good" | "Strong";
  value: number;
  color: string;
} {
  const len = password.length;
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[^A-Za-z0-9]/.test(password);

  if (len >= 16 && hasUpper && hasLower && hasNumber && hasSpecial) {
    return { level: "Strong", value: 100, color: "bg-green-500" };
  }
  if (hasSpecial && len >= 8) {
    return { level: "Good", value: 66, color: "bg-blue-500" };
  }
  if (len >= 8) {
    return { level: "Fair", value: 33, color: "bg-yellow-500" };
  }
  return { level: "Weak", value: len === 0 ? 0 : 10, color: "bg-red-400" };
}
