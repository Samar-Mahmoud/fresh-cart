"use client";

import { Button } from "@/components/ui/button";
import useCart from "@/hooks/useCart";
import { toast } from "sonner";
import { Spinner } from "../ui/spinner";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { clearCartAction } from "@/actions/cart";

export default function ClearButton({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Button>) {
  const [isLoading, setIsLoading] = useState(false);

  const { setCount } = useCart();

  const session = useSession();

  const router = useRouter();

  const handleClearCart = async () => {
    if (!session) {
      router.push("/signin");
      return;
    }

    setIsLoading(true);

    const res = await clearCartAction();

    if (res.isError) {
      toast.error(res.message);
    } else {
      setCount(0);
      toast.success(res.message);
    }

    setIsLoading(false);
  };

  return (
    <Button {...props} onClick={handleClearCart} disabled={isLoading}>
      {isLoading ? <Spinner /> : children}
    </Button>
  );
}
