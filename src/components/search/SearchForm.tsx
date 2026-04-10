"use client";

import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SearchInputProps } from "@/types/props";
import { Input } from "@/components/ui";
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
      <div className="relative w-full">
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className={`ps-5 pt-3 pe-12 pb-3.25 h-auto ${rounded} placeholder:text-gray-400 border-gray-200 bg-gray-50/50 focus:bg-white transition-all text-sm`}
        />

        <Button
          size="icon"
          className={`absolute right-[6.16px] top-1.25 ${rounded} bg-primary-main hover:bg-primary-700`}
        >
          <Search width="18" height="14" strokeWidth="3" color="white" />
        </Button>
      </div>
    </Form>
  );
}
