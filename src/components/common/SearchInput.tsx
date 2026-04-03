"use client";

import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SearchInputProps } from "@/types/props";

export default function SearchInput({
  rounded = "rounded-full",
  placeholder,
}: SearchInputProps) {
  return (
    <form className="flex flex-1 max-w-2xl">
      <div className="relative w-full">
        <input
          placeholder={placeholder}
          className={`w-full ps-5 pt-3 pe-12 pb-3.25 ${rounded} placeholder:text-gray-400  border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-sm`}
          defaultValue=""
        />

        <Button
          type="submit"
          size="icon"
          className={`absolute right-[6.16px] top-1.25 ${rounded} bg-primary-600 hover:bg-primary-700`}
        >
          <Search width="18" height="14" strokeWidth="3" color="white" />
        </Button>
      </div>
    </form>
  );
}
