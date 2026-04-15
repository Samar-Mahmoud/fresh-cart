"use client";

import { addToCartAction } from "@/actions/cart";
import { Button } from "@/components/ui/button";
import useShopping from "@/hooks/useShopping";
import { ProductButtonProps } from "@/types/props";
import { toast } from "sonner";
import { Spinner } from "../ui/spinner";
import { useState } from "react";

export default function AddButton({
  id,
  title,
  count = 1,
  children,
  ...props
}: ProductButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const { setCartCount } = useShopping();

  const handleAddToCart = async () => {
    setIsLoading(true);

    const res = await addToCartAction(id, count);

    if (!res.isError) {
      setCartCount(res.data.numOfCartItems);
      toast.success(`${title} added to cart!`);
    } else {
      toast.error(`Failed to add ${title} to cart. ${res.message}`);
    }

    setIsLoading(false);
  };

  return (
    <Button {...props} onClick={handleAddToCart} disabled={isLoading}>
      {isLoading ? <Spinner /> : children}
    </Button>
  );
}
