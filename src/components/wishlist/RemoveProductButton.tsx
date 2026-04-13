"use client";

import { removeProductAction } from "@/actions/wishlist";
import { Button } from "@/components/ui/button";
import { ActionButtonProps } from "@/types/props";
import { toast } from "sonner";
import { Spinner } from "@/components/ui/spinner";
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
