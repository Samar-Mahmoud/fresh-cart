import { auth } from "@/auth";
import { ErrorResponse } from "@/types/cart";

export async function authFetch<T>(
  endpoint: string,
  options: RequestInit = {},
): Promise<T> {
  const session = await auth();

  if (!session) {
    throw new Error("Unauthorized");
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
    throw new Error((data as ErrorResponse).message);
  }

  return data;
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
