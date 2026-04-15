"use client";

import {
  Box,
  Heart,
  LogOut,
  Settings,
  UserCircle,
  UserIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { Spinner } from "../ui/spinner";
import useSignOut from "@/hooks/useSignOut";

export function AccountDropdownMenu() {
  const { data } = useSession();

  const { isPending, handleSignOut } = useSignOut();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-transparent text-gray-500 hover:text-primary-main size-11.25 rounded-full hover:bg-gray-100">
          <UserCircle className="size-5" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="pt-4 pb-2 px-0 w-64 rounded-2xl shadow-xl "
        align="end"
      >
        <div className="px-4">
          <div className="flex items-center gap-3">
            <div className="shrink-0 size-10 rounded-full bg-primary-100 flex">
              <UserCircle className="m-auto size-5 text-primary-main" />
            </div>
            <div className="min-w-0 flex-1 flex flex-col">
              <span className="text-sm font-semibold text-gray-800 truncate">
                {data?.user.name}
              </span>
              <span className="text-xs font-medium text-gray-400 truncate">
                {data?.user.email}
              </span>
            </div>
          </div>
        </div>

        <DropdownMenuSeparator className="bg-gray-100! mx-0 mt-4 mb-2" />

        <DropdownMenuItem
          asChild
          className="rounded-none cursor-pointer py-2.5 px-4 text-gray-600 hover:text-primary-600 hover:bg-primary-50 "
        >
          <Link href="/profile" className="flex items-center gap-3 ">
            <UserIcon className="text-gray-400" />
            My Profile
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem
          asChild
          className="rounded-none cursor-pointer py-2.5 px-4"
        >
          <Link
            href="/orders"
            className="flex items-center gap-3 text-sm font-medium text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-colors"
          >
            <Box className="text-gray-400" />
            My Orders
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem
          asChild
          className="rounded-none cursor-pointer py-2.5 px-4"
        >
          <Link
            href="/wishlist"
            className="flex items-center gap-3 text-sm font-medium text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-colors"
          >
            <Heart className="text-gray-400" />
            My Wishlist
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem
          asChild
          className="rounded-none cursor-pointer py-2.5 px-4"
        >
          <Link
            href="/profile/addresses"
            className="flex items-center gap-3 text-sm font-medium text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-colors"
          >
            <svg
              className="text-gray-400"
              role="img"
              viewBox="0 0 512 512"
              aria-hidden="true"
            >
              <path
                fill="currentColor"
                d="M384 48c8.8 0 16 7.2 16 16l0 384c0 8.8-7.2 16-16 16L96 464c-8.8 0-16-7.2-16-16L80 64c0-8.8 7.2-16 16-16l288 0zM96 0C60.7 0 32 28.7 32 64l0 384c0 35.3 28.7 64 64 64l288 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L96 0zM240 248a56 56 0 1 0 0-112 56 56 0 1 0 0 112zm-32 40c-44.2 0-80 35.8-80 80 0 8.8 7.2 16 16 16l192 0c8.8 0 16-7.2 16-16 0-44.2-35.8-80-80-80l-64 0zM512 80c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64zM496 192c-8.8 0-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64c0-8.8-7.2-16-16-16zm16 144c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64z"
              />
            </svg>
            Addresses
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem
          asChild
          className="rounded-none cursor-pointer py-2.5 px-4 text-gray-600 hover:text-primary-600 hover:bg-primary-50"
        >
          <Link
            href="/profile/settings"
            className="flex items-center gap-3 text-sm font-medium"
          >
            <Settings className="text-gray-400" />
            Settings
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator className="bg-gray-100! mx-0 my-2" />

        <DropdownMenuItem
          asChild
          className="rounded-none cursor-pointer py-2.5 px-4"
          variant="destructive"
        >
          <Button
            className="gap-3 justify-start h-auto w-full rounded-none text-red-500 bg-transparent focus-visible:ring-0! focus-visible:border-transparent"
            onClick={handleSignOut}
            disabled={isPending}
          >
            {isPending ? (
              <>
                <Spinner />
                Signing Out..
              </>
            ) : (
              <>
                <LogOut />
                Sign Out
              </>
            )}
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
