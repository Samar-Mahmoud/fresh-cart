import { authFetch } from "@/lib/auth";
import { PasswordT, UserData } from "@/schema/settings";
import { SuccessResponse, User } from "@/types/settings";
import { SuccessResponse as AuthSuccessResponse } from "@/types/auth";

export async function changeUserData(data: UserData): Promise<
  | {
      isError: true;
      message: string;
    }
  | {
      isError: false;
      message: string;
      user: User;
    }
> {
  const res = await authFetch<SuccessResponse>("/v1/users/updateMe", {
    method: "PUT",
    body: JSON.stringify(data),
  });

  if (res.isError) {
    const message = res.errors?.msg || res.message;
    console.error(message);
    return { ...res, message };
  }

  const { user } = res.data;
  return { isError: false, message: "Profile updated successfully", user };
}

export async function changePassword(data: PasswordT) {
  const res = await authFetch<AuthSuccessResponse>(
    "/v1/users/changeMyPassword",
    {
      method: "PUT",
      body: JSON.stringify(data),
    },
  );

  if (res.isError) {
    const message = res.errors?.msg || res.message;
    console.error(message);
    return { ...res, message };
  }

  return {
    isError: false,
    message: "Password changed successfully.",
  };
}
