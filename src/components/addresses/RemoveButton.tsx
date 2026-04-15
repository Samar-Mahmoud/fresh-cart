"use client";

import { Button } from "@/components/ui/button";
import { AddressButtonProps } from "@/types/props";
import { toast } from "sonner";
import { Spinner } from "../ui/spinner";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { removeAddressAction } from "@/actions/addresses";

export default function RemoveButton({
  id,
  children,
  ...props
}: AddressButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const session = useSession();

  const router = useRouter();

  const handleRemoveAddress = async () => {
    if (!session) {
      router.push("/signin");
      return;
    }

    setIsLoading(true);

    const res = await removeAddressAction(id);

    if (!res.isError) {
      toast.success(res.message);
    } else {
      toast.error(res.message);
    }

    setIsLoading(false);
  };

  return (
    <Button {...props} onClick={handleRemoveAddress} disabled={isLoading}>
      {isLoading ? <Spinner /> : children}
    </Button>
  );
}
