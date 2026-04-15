"use client";

import { Button } from "@/components/ui/button";
import useShopping from "@/hooks/useShopping";
import { toast } from "sonner";
import { Spinner } from "../ui/spinner";
import React, { useState } from "react";
import { clearCartAction } from "@/actions/cart";

export default function ClearButton({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Button>) {
  const [isLoading, setIsLoading] = useState(false);

  const { setCartCount } = useShopping();

  const handleClearCart = async () => {
    setIsLoading(true);

    const res = await clearCartAction();

    if (res.isError) {
      toast.error(res.message);
    } else {
      setCartCount(0);
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
