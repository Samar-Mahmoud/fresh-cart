"use client";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

export default function SearchInput() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const defaultValue = searchParams.get("keyword") ?? "";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const params = new URLSearchParams(searchParams.toString());

    const keyword = e.target.value;
    if (keyword) {
      params.set("keyword", keyword);
    } else {
      params.delete("keyword");
    }

    router.replace(`/search?${params.toString()}`);
  };

  return (
    <div className="w-full max-w-2xl">
      <InputGroup className="ps-4 py-0 pe-0 h-auto rounded-xl border-gray-200 bg-gray-white focus:bg-white has-[>[data-align=inline-start]]:[&>input]:pl-3">
        <InputGroupInput
          className="ps-12 py-3.5 pe-4 h-auto placeholder:text-gray-700/50 placeholder:text-sm text-base"
          placeholder="Search for products..."
          onChange={handleChange}
          defaultValue={defaultValue}
        />
        <InputGroupAddon className="pl-0">
          <Search className="size-5 text-gray-700/50" />
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}
