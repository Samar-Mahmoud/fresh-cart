"use client";

import { useRouter } from "next/navigation";
import { Spinner } from "../ui/spinner";
import { Button } from "../ui/button";
import useCheckout from "@/hooks/useCheckout";
import ShieldIcon from "../icons/ShieldIcon";
import { AddressData } from "@/schema/address";
import { createOrderAction } from "@/actions/orders";
import { toast } from "sonner";
import { useState } from "react";
import useShopping from "@/hooks/useShopping";
import { OrderButtonProps } from "@/types/props";
import ShoppingBagIcon from "../icons/ShoppingBagIcon";

export default function OrderButton({ cartId, ...props }: OrderButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const { form, paymentMethod } = useCheckout();

  const { setCartCount } = useShopping();

  const router = useRouter();

  const onSubmit = async (data: AddressData) => {
    setIsLoading(true);

    const { isError, message, url } = await createOrderAction(
      data,
      cartId,
      paymentMethod,
    );

    setIsLoading(false);

    if (isError) {
      toast.error(message);
      return;
    }

    toast.success(message);

    if (url) {
      window.open(url, "_self");
    } else {
      setCartCount(0);
      router.push("/orders");
    }
  };

  return (
    <Button
      {...props}
      disabled={isLoading}
      onClick={form?.handleSubmit(onSubmit)}
      className="py-4 h-auto gap-2 w-full rounded-xl text-base font-bold bg-linear-to-r from-primary-600 to-primary-700 text-white hover:from-primary-700 hover:to-primary-800 transition-all shadow-sm"
    >
      {isLoading ? (
        <Spinner />
      ) : paymentMethod === "cash" ? (
        <>
          <ShoppingBagIcon className="text-white" />
          Place Order
        </>
      ) : (
        <>
          <ShieldIcon className="size-5" />
          Proceed to Payment
        </>
      )}
    </Button>
  );
}
