"use client";

import { Button } from "@/components/ui";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      className="col-span-12 lg:col-span-4 xl:col-span-3 h-14 lg:h-full rounded-2xl gap-3 px-8 py-4 shadow-md text-white font-semibold text-base bg-linear-to-r from-primary-800 to-emerald-500 hover:to-emerald-400"
    >
      {pending ? (
        <>
          <CheckCircle2 />
          You&apos;re In!
        </>
      ) : (
        <>
          Subscribe
          <ArrowRight />
        </>
      )}
    </Button>
  );
}
