"use server";

import { auth, signIn, signOut } from "@/auth";
import { SignInData } from "@/schema/signin";
import { RegisterData } from "@/schema/register";
import { register } from "@/services/auth";
import { getCartItems } from "@/services/cart";
import { getWishlistItems } from "@/services/wishlist";

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

export async function checkUserData(): Promise<{
  cart: number;
  wishlist: string[];
}> {
  const session = await auth();
  if (!session) {
    return { cart: 0, wishlist: [] };
  }

  const { numOfCartItems } = await getCartItems();
  const { data } = await getWishlistItems();

  return { cart: numOfCartItems, wishlist: data.map((p) => p._id) };
}
