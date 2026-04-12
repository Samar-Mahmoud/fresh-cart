"use client";

import { addToCartAction } from "@/actions/cart";
import { Button } from "@/components/ui/button";
import useCart from "@/hooks/useCart";
import { AddToCartButtonProps } from "@/types/props";
import { toast } from "sonner";
import { Spinner } from "../ui/spinner";
import { useState } from "react";

export default function AddToCartButton({
  id,
  title,
  children,
  ...props
}: AddToCartButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const { setCount } = useCart();

  const handleAddToCart = async () => {
    setIsLoading(true);

    const res = await addToCartAction(id);

    if (res) {
      setCount(res.numOfCartItems);
      toast.success(`${title} added to cart!`);
    } else {
      toast.error(`Failed to add ${title} to cart`);
    }

    setIsLoading(false);
  };

  return (
    <Button {...props} onClick={handleAddToCart} disabled={isLoading}>
      {isLoading ? <Spinner /> : children}
    </Button>
  );
}
