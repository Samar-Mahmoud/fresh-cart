"use client";

import { Button } from "@/components/ui/button";
import { ProductButtonProps } from "@/types/props";
import { toast } from "sonner";
import { Spinner } from "../ui/spinner";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toggleItemAction } from "@/actions/wishlist";
import useShopping from "@/hooks/useShopping";
import { Heart } from "lucide-react";

export default function ToggleButton({
  id,
  title,
  ...props
}: ProductButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const session = useSession();

  const router = useRouter();

  const { wishlist, setWishlist } = useShopping();

  const handleToggleItem = async () => {
    if (!session) {
      router.push("/signin");
      return;
    }

    setIsLoading(true);

    const res = await toggleItemAction(id, wishlist, title);

    if (!res.isError) {
      setWishlist(res.data);
      toast.success(res.toastMessage);
    } else {
      toast.error(res.toastMessage);
    }

    setIsLoading(false);
  };

  return (
    <Button {...props} onClick={handleToggleItem} disabled={isLoading}>
      {isLoading ? (
        <Spinner />
      ) : (
        <Heart
          className={`size-4 ${wishlist.includes(id) ? "fill-red-500 text-red-500" : ""}`}
        />
      )}
    </Button>
  );
}
