"use client";

import { ArrowLeft } from "lucide-react";
import { Button } from "../ui";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <Button
      className="h-auto gap-3 bg-white text-gray-700 py-4 px-8 rounded-2xl font-bold text-base shadow-md border-gray-200 hover:bg-gray-50"
      onClick={router.back}
    >
      <ArrowLeft className="size-4" />
      Go Back
    </Button>
  );
}
