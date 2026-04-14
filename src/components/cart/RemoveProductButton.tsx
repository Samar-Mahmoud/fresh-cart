"use client";

import { removeProductAction } from "@/actions/cart";
import { Button } from "@/components/ui/button";
import useShopping from "@/hooks/useShopping";
import { ActionButtonProps } from "@/types/props";
import { toast } from "sonner";
import { Spinner } from "../ui/spinner";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function RemoveProductButton({
  id,
  title,
  children,
  ...props
}: ActionButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const { setCartCount } = useShopping();

  const session = useSession();

  const router = useRouter();

  const handleRemoveProduct = async () => {
    if (!session) {
      router.push("/signin");
      return;
    }

    setIsLoading(true);

    const res = await removeProductAction(id);

    if (!res.isError) {
      setCartCount(res.data.numOfCartItems);
      toast.success(`${title} removed from your cart.`);
    } else {
      toast.error(`Failed to remove ${title} from your cart. ${res.message}`);
    }

    setIsLoading(false);
  };

  return (
    <Button {...props} onClick={handleRemoveProduct} disabled={isLoading}>
      {isLoading ? <Spinner /> : children}
    </Button>
  );
}
