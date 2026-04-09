"use client";

import { Input } from "@/components/ui";
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

export default function SearchInput() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const defaultValue = searchParams.get("q") ?? "";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const params = new URLSearchParams(searchParams.toString());

    const q = e.target.value;
    if (q) {
      params.set("q", q);
    } else {
      params.delete("q");
    }

    router.replace(`/search?${params.toString()}`);
  };

  return (
    <div className="relative w-full max-w-2xl">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-700/50" />
      <Input
        className="ps-12 py-3.5 pe-4 h-auto rounded-xl placeholder:text-gray-700/50 placeholder:text-sm border-gray-200 bg-gray-white focus:bg-white transition-all text-base"
        placeholder="Search for products..."
        onChange={handleChange}
        defaultValue={defaultValue}
      />
    </div>
  );
}
