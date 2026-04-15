"use client";

import { LogOut, User, UserPlus } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { Spinner } from "@/components/ui/spinner";
import { Button } from "@/components/ui/button";
import useSignOut from "@/hooks/useSignOut";

export default function Auth() {
  const { data, status } = useSession();

  const { isPending, handleSignOut } = useSignOut();

  return status === "loading" ? (
    <Spinner />
  ) : (
    <div className="flex items-center gap-4 text-gray-500">
      {data ? (
        <>
          <Link
            className="flex items-center gap-1.5 hover:text-primary-main transition-colors"
            href="/profile"
          >
            <User className="size-4" />
            <span className="font-medium">{data.user?.name}</span>
          </Link>

          {isPending ? (
            <span className="flex items-center gap-1.5 text-sm text-red-500 font-medium">
              <Spinner />
              Logging out...
            </span>
          ) : (
            <Button
              className="h-auto p-0 bg-transparent text-current gap-1.5 hover:bg-transparent hover:text-red-500"
              onClick={() => handleSignOut()}
            >
              <LogOut className="size-4" />
              Logout
            </Button>
          )}
        </>
      ) : (
        <>
          <Link
            className="flex items-center gap-1.5 hover:text-primary-main transition-colors"
            href="/signin"
          >
            <User className="size-4" />
            <span className="font-medium">Sign In</span>
          </Link>

          <Link
            className="flex items-center gap-1.5 hover:text-primary-main transition-colors"
            href="/register"
          >
            <UserPlus className="size-4" />
            <span className="font-medium">Sign Up</span>
          </Link>
        </>
      )}
    </div>
  );
}
