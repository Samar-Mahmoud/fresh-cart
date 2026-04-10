import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui";
import { Metadata } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";

export default function Pagination({ metadata }: { metadata?: Metadata }) {
  const searchParams = useSearchParams();

  const router = useRouter();

  const { currentPage, numberOfPages } = metadata || {
    currentPage: 1,
    numberOfPages: 1,
  };

  const handleChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.replace(`/search?${params.toString()}`);
  };

  return (
    <div className="flex items-center justify-center flex-wrap gap-2 py-4">
      <Button
        className="size-10 rounded-lg bg-transparent border-gray-200 text-gray-600 hover:bg-gray-50"
        onClick={() => handleChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ChevronLeft className="size-5" />
      </Button>
      {Array.from({ length: numberOfPages }).map((_, index) => (
        <Button
          key={index}
          className={`size-10 rounded-lg border-gray-200 ${currentPage === index + 1 ? "bg-primary-main text-white hover:bg-primary-700" : "bg-transparent text-gray-600 hover:bg-gray-50"}`}
          onClick={() => handleChange(index + 1)}
        >
          {index + 1}
        </Button>
      ))}
      <Button
        className="size-10 rounded-lg bg-transparent border-gray-200 text-gray-600 hover:bg-gray-50"
        disabled={currentPage === numberOfPages}
        onClick={() => handleChange(currentPage + 1)}
      >
        <ChevronRight className="size-5" />
      </Button>
    </div>
  );
}
