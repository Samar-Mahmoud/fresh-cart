"use client";

import { Search } from "lucide-react";
import { SearchInputProps } from "@/types/props";
import {
  InputGroup,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import Form from "next/form";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ProductSearch({
  rounded = "rounded-full",
  placeholder,
  onSearch,
}: SearchInputProps) {
  const [query, setQuery] = useState("");

  const router = useRouter();

  const handleSubmit = (): void => {
    if (!query) return;
    onSearch?.();
    router.push(`/search?keyword=${query}`);
    setQuery("");
  };

  return (
    <Form className="flex flex-1 max-w-2xl" action={handleSubmit}>
      <InputGroup
        className={`pe-[6.16px] ps-0 py-0 h-auto ${rounded} border-gray-200 bg-gray-50/50 focus:bg-white  has-[>[data-align=inline-end]]:[&>input]:pr-[6.16px]`}
      >
        <InputGroupInput
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className={`ps-5 pt-3 pb-3.25 h-auto placeholder:text-gray-400 text-sm`}
        />
        <InputGroupButton
          type="submit"
          className={`size-9 ${rounded} bg-primary-main hover:bg-primary-700`}
        >
          <Search width="18" height="14" strokeWidth="3" color="white" />
        </InputGroupButton>
      </InputGroup>
    </Form>
  );
}
