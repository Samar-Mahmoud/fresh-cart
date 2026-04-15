"use client";

import { removeProductAction } from "@/actions/wishlist";
import { Button } from "@/components/ui/button";
import { ProductButtonProps } from "@/types/props";
import { toast } from "sonner";
import { Spinner } from "@/components/ui/spinner";
import { useState } from "react";
import useShopping from "@/hooks/useShopping";

export default function RemoveProductButton({
  id,
  title,
  children,
  ...props
}: ProductButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const { setWishlist } = useShopping();

  const handleRemoveProduct = async () => {
    setIsLoading(true);

    const res = await removeProductAction(id);

    if (!res.isError) {
      setWishlist(res.data);
      toast.success(`${title} removed from your wishlist.`);
    } else {
      toast.error(
        `Failed to remove ${title} from your wishlist. ${res.message}`,
      );
    }

    setIsLoading(false);
  };

  return (
    <Button {...props} onClick={handleRemoveProduct} disabled={isLoading}>
      {isLoading ? <Spinner /> : children}
    </Button>
  );
}
