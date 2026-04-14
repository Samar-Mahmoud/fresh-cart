"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import { Spinner } from "@/components/ui/spinner";
import { Heart, User } from "lucide-react";
import Link from "next/link";
import MobileNavMenu from "./MobileNavMenu";
import HeadsetIcon from "@/components/icons/HeadsetIcon";
import CartIcon from "@/components/icons/CartIcon";
import { useSession } from "next-auth/react";
import { AccountDropdownMenu } from "./AccountDropdownMenu";
import useShopping from "@/hooks/useShopping";

const items: {
  title: string;
  href: string;
}[] = [
  { title: "All Categories", href: "/categories" },
  {
    title: "Electronics",
    href: "/products?category=6439d2d167d9aa4ca970649f",
  },
  {
    title: "Women's Fashion",
    href: "/products?category=6439d58a0049ad0b52b9003f",
  },
  {
    title: "Men's Fashion",
    href: "/products?category=6439d5b90049ad0b52b90048",
  },
  {
    title: "Beauty & Health",
    href: "/products?category=6439d30b67d9aa4ca97064b1",
  },
];

export default function NavMenu() {
  const { data, status } = useSession();

  const { cartCount, wishlist } = useShopping();

  return (
    <NavigationMenu viewport={false} className="gap-4 lg:gap-8">
      <NavigationMenuList className="hidden xl:flex gap-6">
        {/* Home */}
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className="text-base p-0 font-medium hover:bg-transparent text-gray-600 hover:text-primary-main focus:bg-transparent"
          >
            <Link href="/">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* Shop */}
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className="text-base p-0 font-medium hover:bg-transparent text-gray-600 hover:text-primary-main focus:bg-transparent"
          >
            <Link href="/products">Shop</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* Categories */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-base p-0 font-medium cursor-pointer text-gray-600 hover:text-primary-main hover:bg-transparent focus:bg-transparent data-popup-open:bg-transparent data-popup-open:hover:bg-transparent data-open:bg-transparent data-open:hover:bg-transparent data-open:focus:bg-transparent">
            Categories
          </NavigationMenuTrigger>
          <NavigationMenuContent className="p-0 py-2 border border-gray-100 min-w-50 group-data-[viewport=false]/navigation-menu:rounded-xl group-data-[viewport=false]/navigation-menu:shadow-xl">
            <ul>
              {items.map((item) => (
                <li key={item.title}>
                  <NavigationMenuLink
                    asChild
                    className="text-base font-medium px-4 py-2.5 hover:bg-primary-50 text-gray-600 hover:text-primary-main in-data-[slot=navigation-menu-content]:rounded-none"
                  >
                    <Link href={item.href}>{item.title}</Link>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Brands */}
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className="text-base p-0 font-medium hover:bg-transparent text-gray-600 hover:text-primary-main focus:bg-transparent"
          >
            <Link href="/brands">Brands</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>

      <NavigationMenuList className="gap-1 lg:gap-2">
        {/* Support */}
        <NavigationMenuItem className="hidden lg:flex shrink-0 mr-2 pr-3 hover:opacity-80 transition-opacity">
          <NavigationMenuLink asChild className="p-0 hover:bg-transparent">
            <Link className="flex items-center gap-2" href="/contact">
              <div className="size-10 rounded-full text-primary-main bg-primary-50 flex">
                <HeadsetIcon size="size-5" />
              </div>

              <div className="text-xs">
                <div className="text-gray-400">Support</div>
                <div className="font-semibold text-gray-700">24/7 Help</div>
              </div>
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <Separator orientation="vertical" className="hidden lg:flex" />

        {/* Wish List */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild className="p-0">
            <Link
              href="/wishlist"
              className="text-gray-500 hover:text-primary-main size-11.25 rounded-full flex hover:bg-gray-100 relative"
            >
              <Heart className="m-auto size-5" width="25" height="20" />
              {data && wishlist.length > 0 && (
                <span className="size-4.5 rounded-full bg-red-500 text-white ring-2 ring-white font-bold text-[10px] absolute top-0.5 right-0.5 flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* Cart */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild className="p-0">
            <Link
              href="/cart"
              className="size-11.25 rounded-full flex hover:bg-gray-100 text-gray-500 hover:text-primary-main relative"
            >
              <CartIcon className="m-auto size-5" />
              {data && cartCount > 0 && (
                <span className="size-4.5 rounded-full bg-primary-main text-white ring-1 ring-white font-bold text-[10px] absolute top-0.5 right-0.5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {status === "loading" ? (
          <NavigationMenuItem>
            <div className="size-11.5 flex">
              <Spinner className="size-4 m-auto" />
            </div>
          </NavigationMenuItem>
        ) : (
          <>
            {data ? (
              <NavigationMenuItem>
                <AccountDropdownMenu />
              </NavigationMenuItem>
            ) : (
              <NavigationMenuItem className="hidden xl:block shrink-0">
                <NavigationMenuLink asChild className="p-0">
                  <Link
                    href="/signin"
                    className="px-3 py-2.5 text-sm font-semibold flex items-center gap-2 text-white bg-primary-main hover:bg-primary-600 rounded-full shadow-sm focus:bg-primary-main focus:text-white"
                  >
                    <User />
                    Sign In
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            )}
          </>
        )}

        {/* Mobile Navigation Menu */}
        <NavigationMenuItem>
          <MobileNavMenu />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
