"use client";

import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SearchInputProps } from "@/types/props";
import { Input } from "@/components/ui";
import Form from "next/form";

export default function ProductSearch({
  rounded = "rounded-full",
  placeholder,
}: SearchInputProps) {
  return (
    <Form className="flex flex-1 max-w-2xl" action="/search">
      <div className="relative w-full">
        <Input
          name="q"
          placeholder={placeholder}
          className={`ps-5 pt-3 pe-12 pb-3.25 h-auto ${rounded} placeholder:text-gray-400 border-gray-200 bg-gray-50/50 focus:bg-white  focus:outline-none focus:ring-2 focus:ring-primary-600/20 focus:border-primary-600 transition-all text-sm`}
        />

        <Button
          type="submit"
          size="icon"
          className={`absolute right-[6.16px] top-1.25 ${rounded} bg-primary-main hover:bg-primary-700`}
        >
          <Search width="18" height="14" strokeWidth="3" color="white" />
        </Button>
      </div>
    </Form>
  );
}
