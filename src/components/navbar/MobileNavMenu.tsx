"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Heart, MenuIcon, XIcon } from "lucide-react";
import Logo from "@/components/common/Logo";
import SearchInput from "./SearchInput";
import Link from "next/link";
import { useState } from "react";
import HeadsetIcon from "@/components/icons/HeadsetIcon";

export default function MobileNavMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = () => {
    setIsOpen(false);
  };

  return (
    <Drawer direction="right" open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <Button
          size="icon-lg"
          className="lg:hidden ml-1 rounded-full flex bg-primary-600 hover:bg-primary-700"
        >
          <MenuIcon
            className="m-auto"
            color="white"
            width="20"
            height="16"
            strokeWidth={3}
          />
        </Button>
      </DrawerTrigger>

      <DrawerContent className="items-stretch">
        <DrawerHeader className="flex-row items-center justify-between p-4 border-b border-gray-100 bg-gray-50/50">
          <DrawerTitle>
            <Logo />
          </DrawerTitle>

          <DrawerClose asChild>
            <Button
              size="icon"
              className="rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800"
            >
              <XIcon width="20" height="16" />
            </Button>
          </DrawerClose>
        </DrawerHeader>

        <div className="p-4">
          <SearchInput rounded="rounded-xl" placeholder="Search products..." />
        </div>

        <NavigationMenu
          className="max-w-none flex-0 flex-col items-stretch border-y border-gray-100"
          viewport={false}
        >
          <NavigationMenuList className="p-4 flex-col items-stretch gap-1 border-b border-gray-100">
            {/* Home */}
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className="text-base gap-3 px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50"
              >
                <Link href="/" onClick={handleNavigate}>
                  Home
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Shop */}
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className="text-base gap-3 px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50"
              >
                <Link href="/products" onClick={handleNavigate}>
                  Shop
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Categories */}
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className="text-base gap-3 px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50"
              >
                <Link href="/categories" onClick={handleNavigate}>
                  Categories
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Brands */}
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className="text-base gap-3 px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50"
              >
                <Link href="/brands" onClick={handleNavigate}>
                  Brands
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>

          <NavigationMenuList className="p-4 flex-col items-stretch gap-1">
            {/* Wish List */}
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className="text-base gap-3 px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50"
              >
                <Link
                  className="flex items-center gap-3"
                  href="/wishlist"
                  onClick={handleNavigate}
                >
                  <div className="size-9 rounded-full bg-red-50 flex">
                    <Heart
                      className="text-red-500 m-auto"
                      width="15"
                      height="12"
                    />
                  </div>

                  <span className="font-medium text-gray-700">WishList</span>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Cart */}
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className="text-base gap-3 px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50"
              >
                <Link
                  className="flex items-center gap-3"
                  href="/cart"
                  onClick={handleNavigate}
                >
                  <div className="size-9 rounded-full bg-primary-50 flex">
                    <svg
                      className="m-auto text-primary-600 group-hover/item-link:text-primary-600 size-5"
                      width="25"
                      height="21"
                      viewBox="0 0 25 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.9375 0C0.417969 0 0 0.417969 0 0.9375C0 1.45703 0.417969 1.875 0.9375 1.875H2.70703C2.85938 1.875 2.98828 1.98438 3.01562 2.13281L5.05078 13.3164C5.29297 14.6523 6.45703 15.625 7.81641 15.625H17.8125C18.332 15.625 18.75 15.207 18.75 14.6875C18.75 14.168 18.332 13.75 17.8125 13.75H7.81641C7.36328 13.75 6.97656 13.4258 6.89453 12.9805L6.69531 11.875H18.5547C19.7578 11.875 20.7891 11.0195 21.0117 9.83594L22.2227 3.35547C22.3672 2.58594 21.7773 1.875 20.9922 1.875H4.87109L4.85547 1.79688C4.66797 0.757812 3.76172 0 2.70312 0H0.9375ZM8.125 20.625C8.62228 20.625 9.09919 20.4275 9.45083 20.0758C9.80246 19.7242 10 19.2473 10 18.75C10 18.2527 9.80246 17.7758 9.45083 17.4242C9.09919 17.0725 8.62228 16.875 8.125 16.875C7.62772 16.875 7.15081 17.0725 6.79917 17.4242C6.44754 17.7758 6.25 18.2527 6.25 18.75C6.25 19.2473 6.44754 19.7242 6.79917 20.0758C7.15081 20.4275 7.62772 20.625 8.125 20.625ZM16.875 20.625C17.3723 20.625 17.8492 20.4275 18.2008 20.0758C18.5525 19.7242 18.75 19.2473 18.75 18.75C18.75 18.2527 18.5525 17.7758 18.2008 17.4242C17.8492 17.0725 17.3723 16.875 16.875 16.875C16.3777 16.875 15.9008 17.0725 15.5492 17.4242C15.1975 17.7758 15 18.2527 15 18.75C15 19.2473 15.1975 19.7242 15.5492 20.0758C15.9008 20.4275 16.3777 20.625 16.875 20.625Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>

                  <span className="font-medium text-gray-700">Cart</span>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="px-4 pb-4 pt-6 flex gap-3">
          {/* Login */}
          <Link
            className="text-base flex-1 text-center px-4 py-3 rounded-xl font-semibold bg-primary-600 text-white hover:bg-primary-700 transition-colors"
            href="/login"
            onClick={handleNavigate}
          >
            Sign In
          </Link>
          {/* Register */}
          <Link
            className="text-base flex-1 text-center px-4 py-3 rounded-xl font-semibold border-2 border-primary-600 text-primary-600 hover:bg-primary-50 transition-colors"
            href="/register"
            onClick={handleNavigate}
          >
            Sign Up
          </Link>
        </div>

        {/* Support */}
        <Link
          className="flex items-center gap-2 p-4 mx-4 mt-2 rounded-xl bg-gray-50 border border-gray-100 hover:bg-primary-50 transition-colors"
          href="/contact"
          onClick={handleNavigate}
        >
          <div className="size-10 rounded-full text-primary-600 bg-primary-100 flex">
            <HeadsetIcon size="size-6" />
          </div>

          <div className="text-sm font-semibold ">
            <div className="text-gray-700">Need Help?</div>
            <div className="font-semibold text-primary-600">
              Contact Support
            </div>
          </div>
        </Link>
      </DrawerContent>
    </Drawer>
  );
}
