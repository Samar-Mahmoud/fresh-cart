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
            className="text-base p-0 font-medium hover:bg-transparent text-gray-600 hover:text-primary-600"
          >
            <Link href="/">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* Shop */}
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className="text-base p-0 font-medium hover:bg-transparent text-gray-600 hover:text-primary-600"
          >
            <Link href="/products">Shop</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* Categories */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-base p-0 font-medium cursor-pointer text-gray-600 hover:text-primary-600 hover:bg-transparent focus:bg-transparent data-popup-open:bg-transparent data-popup-open:hover:bg-transparent data-open:bg-transparent data-open:hover:bg-transparent data-open:focus:bg-transparent">
            Categories
          </NavigationMenuTrigger>
          <NavigationMenuContent className="p-0 py-2 border border-gray-100 min-w-50 group-data-[viewport=false]/navigation-menu:rounded-xl group-data-[viewport=false]/navigation-menu:shadow-xl">
            <ul>
              {items.map((item) => (
                <li key={item.title}>
                  <NavigationMenuLink
                    asChild
                    className="text-base font-medium px-4 py-2.5 hover:bg-primary-50 text-gray-600 hover:text-primary-600 in-data-[slot=navigation-menu-content]:rounded-none"
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
            className="text-base p-0 font-medium hover:bg-transparent text-gray-600 hover:text-primary-600"
          >
            <Link href="/brands">Brands</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>

      <NavigationMenuList className="gap-1 lg:gap-2">
        {/* Support */}
        <NavigationMenuItem className="hidden lg:flex mr-2 pr-3 border-r border-gray-200 hover:opacity-80 transition-opacity">
          <NavigationMenuLink asChild className="p-0 hover:bg-transparent">
            <Link className="flex items-center gap-2" href="/contact">
              <div className="size-10 rounded-full text-primary-600 bg-primary-50 flex">
                <HeadsetIcon size="size-5" />
              </div>

              <div className="text-xs">
                <div className="text-gray-400">Support</div>
                <div className="font-semibold text-gray-700">24/7 Help</div>
              </div>
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* Wish List */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild className="p-0">
            <Link
              href="/wishlist"
              className="group/item-link size-11.25 rounded-full flex hover:bg-gray-100"
            >
              <Heart
                className="m-auto text-gray-500 group-hover/item-link:text-primary-600 size-5"
                width="25"
                height="20"
              />
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* Cart */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild className="p-0">
            <Link
              href="/cart"
              className="group/item-link size-11.25 rounded-full flex hover:bg-gray-100 "
            >
              <svg
                className="m-auto text-gray-500 group-hover/item-link:text-primary-600 size-5"
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
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* Profile */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild className="p-0">
            <Link
              href="/profile"
              className="hidden lg:flex group/item-link size-11.25 rounded-full hover:bg-gray-100"
            >
              <svg
                className="m-auto text-gray-500 group-hover/item-link:text-primary-600 size-5"
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
