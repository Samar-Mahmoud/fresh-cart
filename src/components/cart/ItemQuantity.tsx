"use client";

import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CartItemQuantityProps } from "@/types/props";
import { updateProductQuantity } from "@/actions/cart";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { Spinner } from "../ui/spinner";

export default function ItemQuantity({
  id,
  quantity,
  count: currentCount,
}: CartItemQuantityProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [itemCount, setItemCount] = useState(1);

  const handleQuantityChange = async (count: number) => {
    if (count < 1) {
      setItemCount(currentCount);
      return;
    }

    setIsLoading(true);

    const res = await updateProductQuantity(id, count);

    if (!res.isError) {
      toast.success("Your cart has been updated.");
    } else {
      toast.error(`Failed to update your cart. ${res.message}`);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    setItemCount(currentCount);
  }, [currentCount]);

  return (
    <div className="flex items-center bg-gray-50 rounded-xl p-1 border border-gray-200">
      <Button
        className="w-8 h-8 rounded-lg bg-white shadow-sm text-gray-500 hover:text-gray-700 hover:bg-gray-50"
        disabled={currentCount === 1 || isLoading}
        onClick={() => handleQuantityChange(currentCount - 1)}
      >
        <Minus />
      </Button>
      {isLoading ? (
        <div className="w-12 h-full flex">
          <Spinner className="m-auto" />
        </div>
      ) : (
        <Input
          min={1}
          max={quantity}
          className="w-14 px-1 h-auto text-center text-gray-900 bg-transparent text-lg font-bold focus-visible:border-none focus-visible:ring-0"
          id="quantity"
          type="number"
          value={itemCount}
          onBlur={() => handleQuantityChange(itemCount)}
          onChange={(e) => setItemCount(+e.target.value)}
        />
      )}
      <Button
        className="w-8 h-8 rounded-lg bg-primary-main shadow-sm text-white hover:bg-primary-700"
        disabled={currentCount === quantity || isLoading}
        onClick={() => handleQuantityChange(currentCount + 1)}
      >
        <Plus />
      </Button>
    </div>
  );
}
