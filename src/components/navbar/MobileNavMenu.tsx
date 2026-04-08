"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  Button,
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  Separator,
} from "@/components/ui";
import { Heart, MenuIcon, XIcon } from "lucide-react";
import Logo from "@/components/shared/Logo";
import ProductSearch from "@/components/products/search/SearchForm";
import Link from "next/link";
import { useState } from "react";
import HeadsetIcon from "@/components/icons/HeadsetIcon";
import CartIcon from "@/components/icons/CartIcon";

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
          className="lg:hidden ml-1 rounded-full flex bg-primary-main hover:bg-primary-700"
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
        <DrawerHeader className="flex-row items-center justify-between p-4 bg-gray-50/50">
          <DrawerTitle>
            <Logo />
          </DrawerTitle>
          <DrawerDescription className="invisible">
            FreshCart Logo
          </DrawerDescription>

          <DrawerClose asChild>
            <Button
              size="icon"
              className="rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800"
            >
              <XIcon width="20" height="16" />
            </Button>
          </DrawerClose>
        </DrawerHeader>

        <Separator />

        <div className="p-4">
          <ProductSearch
            rounded="rounded-xl"
            placeholder="Search products..."
            onSearch={handleNavigate}
          />
        </div>

        <Separator />

        <NavigationMenu
          className="max-w-none flex-0 flex-col items-stretch"
          viewport={false}
        >
          <NavigationMenuList className="p-4 flex-col items-stretch gap-1">
            {/* Home */}
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className="text-base gap-3 px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-primary-main hover:bg-primary-50"
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
                className="text-base gap-3 px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-primary-main hover:bg-primary-50"
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
                className="text-base gap-3 px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-primary-main hover:bg-primary-50"
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
                className="text-base gap-3 px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-primary-main hover:bg-primary-50"
              >
                <Link href="/brands" onClick={handleNavigate}>
                  Brands
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>

          <Separator />

          <NavigationMenuList className="p-4 flex-col items-stretch gap-1">
            {/* Wish List */}
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className="text-base gap-3 px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-primary-main hover:bg-primary-50"
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

                  <span className="font-medium text-gray-700">Wishlist</span>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Cart */}
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className="text-base gap-3 px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-primary-main hover:bg-primary-50"
              >
                <Link
                  className="flex items-center gap-3"
                  href="/cart"
                  onClick={handleNavigate}
                >
                  <div className="size-9 rounded-full bg-primary-50 flex text-primary-main">
                    <CartIcon className="m-auto size-5" />
                  </div>

                  <span className="font-medium text-gray-700">Cart</span>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Separator />

        <div className="px-4 pb-4 pt-6 flex gap-3">
          {/* Login */}
          <Link
            className="text-base flex-1 text-center px-4 py-3 rounded-xl font-semibold bg-primary-main text-white hover:bg-primary-700 transition-colors"
            href="/login"
            onClick={handleNavigate}
          >
            Sign In
          </Link>
          {/* Register */}
          <Link
            className="text-base flex-1 text-center px-4 py-3 rounded-xl font-semibold border-2 border-primary-main text-primary-main hover:bg-primary-50 transition-colors"
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
          <div className="size-10 rounded-full text-primary-main bg-primary-100 flex">
            <HeadsetIcon size="size-6" />
          </div>

          <div className="text-sm font-semibold ">
            <div className="text-gray-700">Need Help?</div>
            <div className="font-semibold text-primary-main">
              Contact Support
            </div>
          </div>
        </Link>
      </DrawerContent>
    </Drawer>
  );
}
