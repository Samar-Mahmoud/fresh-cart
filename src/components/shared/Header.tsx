import { HeaderProps } from "@/types/props";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";

export default function Header({
  title,
  classes,
  description,
  page,
  children,
  links = [{ label: "Home", href: "/" }],
}: HeaderProps) {
  return (
    <header className={`bg-linear-to-br ${classes}`}>
      <div className="container mx-auto px-4 py-10 lg:py-14 space-y-6">
        <Breadcrumb>
          <BreadcrumbList className="gap-2 sm:gap-2 mb-6">
            {links.map(({ href, label }) => (
              <React.Fragment key={label}>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link
                      className="text-white/70 hover:text-white transition-colors text-sm"
                      href={href}
                    >
                      {label}
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbSeparator>
                  <span className="text-white/40">/</span>
                </BreadcrumbSeparator>
              </React.Fragment>
            ))}

            <BreadcrumbItem>
              <BreadcrumbPage className="text-white font-medium text-sm">
                {page ?? title}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="flex items-center gap-5">
          <div className="shrink-0 size-16 rounded-2xl bg-white/20 backdrop-blur-sm flex shadow-xl">
            {children}
          </div>
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-white">
              {title}
            </h1>
            <p className="font-medium text-base text-white/80 mt-1">
              {description}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
