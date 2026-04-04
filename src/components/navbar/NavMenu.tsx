"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Heart } from "lucide-react";
import Link from "next/link";
import MobileNavMenu from "./MobileNavMenu";
import HeadsetIcon from "@/components/icons/HeadsetIcon";
import CartIcon from "@/components/icons/CartIcon";
import { Separator } from "@/components/ui/separator";

const items: {
  title: string;
  href: string;
}[] = [
  { title: "All Categories", href: "/categories" },
  {
    title: "Electronics",
    href: "/products?category=6439d58a0049ad0b52b9003f",
  },
  {
    title: "Women's Fashion",
    href: "/products?category=6439d5b90049ad0b52b90048",
  },
  {
    title: "Men's Fashion",
    href: "/products?category=6439d2d167d9aa4ca970649f",
  },
  {
    title: "Beauty & Health",
    href: "/products?category=6439d40367d9aa4ca97064a8",
  },
];

export default function NavMenu() {
  return (
    <NavigationMenu viewport={false} className="gap-4 lg:gap-8">
      <NavigationMenuList className="hidden xl:flex gap-6">
        {/* Home */}
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className="text-base p-0 font-medium hover:bg-transparent text-gray-600 hover:text-primary-main"
          >
            <Link href="/">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* Shop */}
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className="text-base p-0 font-medium hover:bg-transparent text-gray-600 hover:text-primary-main"
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
            className="text-base p-0 font-medium hover:bg-transparent text-gray-600 hover:text-primary-main"
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
              className="text-gray-500 hover:text-primary-main size-11.25 rounded-full flex hover:bg-gray-100"
            >
              <Heart className="m-auto size-5" width="25" height="20" />
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* Cart */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild className="p-0">
            <Link
              href="/cart"
              className="size-11.25 rounded-full flex hover:bg-gray-100 text-gray-500 hover:text-primary-main"
            >
              <CartIcon />
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* Profile */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild className="p-0">
            <Link
              href="/profile"
              className="hidden lg:flex text-gray-500 hover:text-primary-main size-11.25 rounded-full hover:bg-gray-100"
            >
              <svg
                className="m-auto size-5"
                width="25"
                height="20"
                viewBox="0 0 25 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.125 16.25V6.25H21.875V16.25C21.875 16.5938 21.5938 16.875 21.25 16.875H13.75C13.75 15.1484 12.3516 13.75 10.625 13.75H8.125C6.39844 13.75 5 15.1484 5 16.875H3.75C3.40625 16.875 3.125 16.5938 3.125 16.25ZM3.75 1.25C2.37109 1.25 1.25 2.37109 1.25 3.75V16.25C1.25 17.6289 2.37109 18.75 3.75 18.75H21.25C22.6289 18.75 23.75 17.6289 23.75 16.25V3.75C23.75 2.37109 22.6289 1.25 21.25 1.25H3.75ZM9.375 12.1875C9.95516 12.1875 10.5116 11.957 10.9218 11.5468C11.332 11.1366 11.5625 10.5802 11.5625 10C11.5625 9.41984 11.332 8.86344 10.9218 8.4532C10.5116 8.04297 9.95516 7.8125 9.375 7.8125C8.79484 7.8125 8.23844 8.04297 7.8282 8.4532C7.41797 8.86344 7.1875 9.41984 7.1875 10C7.1875 10.5802 7.41797 11.1366 7.8282 11.5468C8.23844 11.957 8.79484 12.1875 9.375 12.1875ZM15.9375 8.125C15.418 8.125 15 8.54297 15 9.0625C15 9.58203 15.418 10 15.9375 10H19.0625C19.582 10 20 9.58203 20 9.0625C20 8.54297 19.582 8.125 19.0625 8.125H15.9375ZM15.9375 11.875C15.418 11.875 15 12.293 15 12.8125C15 13.332 15.418 13.75 15.9375 13.75H19.0625C19.582 13.75 20 13.332 20 12.8125C20 12.293 19.582 11.875 19.0625 11.875H15.9375Z"
                  fill="currentColor"
                />
              </svg>
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* Mobile Navigation Menu */}
        <MobileNavMenu />
      </NavigationMenuList>
    </NavigationMenu>
  );
}
