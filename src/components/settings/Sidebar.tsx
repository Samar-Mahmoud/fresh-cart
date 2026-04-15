"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Separator } from "../ui/separator";
import { ChevronRight, Settings } from "lucide-react";

const navItems = [
  {
    label: "My Addresses",
    href: "/profile/addresses",
    icon: (
      <svg
        className="m-auto size-4.5"
        width="18"
        height="15"
        viewBox="0 0 18 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.49883 5.15703C3.49883 2.30781 5.85039 0 8.74883 0C11.6473 0 13.9988 2.30781 13.9988 5.15703C13.9988 8.41914 10.7121 12.3293 9.33945 13.8195C9.0168 14.1695 8.47813 14.1695 8.15547 13.8195C6.78281 12.3293 3.49609 8.41914 3.49609 5.15703H3.49883ZM8.74883 7C9.21296 7 9.65808 6.81563 9.98627 6.48744C10.3145 6.15925 10.4988 5.71413 10.4988 5.25C10.4988 4.78587 10.3145 4.34075 9.98627 4.01256C9.65808 3.68437 9.21296 3.5 8.74883 3.5C8.2847 3.5 7.83958 3.68437 7.51139 4.01256C7.1832 4.34075 6.99883 4.78587 6.99883 5.25C6.99883 5.71413 7.1832 6.15925 7.51139 6.48744C7.83958 6.81563 8.2847 7 8.74883 7Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: "Settings",
    href: "/profile/settings",
    icon: <Settings className="m-auto size-4" />,
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className="self-start lg:max-w-72 w-full rounded-2xl shadow-md border border-gray-200 bg-white">
      <h2 className="p-4 text-base font-bold text-gray-900">My Account</h2>

      <Separator className="bg-gray-200" />

      <div className="p-2 space-y-1">
        {navItems.map(({ label, href, icon }) => {
          const isActive = pathname === href;

          return (
            <Link
              key={href}
              href={href}
              className={`flex gap-3 items-center px-4 py-3 rounded-lg hover:text-primary-main ${
                isActive ? "bg-primary-50 text-primary-main" : "text-gray-600"
              }`}
            >
              <div
                className={`size-9 rounded-lg flex ${isActive ? "bg-primary-600 text-white" : "bg-gray-200"}`}
              >
                {icon}
              </div>
              <h3 className="font-medium text-base flex-1 min-w-0">{label}</h3>
              <ChevronRight className="size-4" strokeWidth={2} />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
