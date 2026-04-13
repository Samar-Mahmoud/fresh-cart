"use client";

import { Button } from "@/components/ui/button";
import { ActionButtonProps } from "@/types/props";
import { toast } from "sonner";
import { Spinner } from "../ui/spinner";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { addToWishlistAction } from "@/actions/wishlist";

export default function AddButton({
  id,
  title,
  children,
  ...props
}: ActionButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const session = useSession();

  const router = useRouter();

  const handleAddToCart = async () => {
    if (!session) {
      router.push("/signin");
      return;
    }

    setIsLoading(true);

    const res = await addToWishlistAction(id);

    if (!res.isError) {
      toast.success(`${title} added to your wishlist!`);
    } else {
      toast.error(`Failed to add ${title} to your wishlist. ${res.message}`);
    }

    setIsLoading(false);
  };

  return (
    <Button {...props} onClick={handleAddToCart} disabled={isLoading}>
      {isLoading ? <Spinner /> : children}
    </Button>
  );
}
