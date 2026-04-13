"use client";

import CartIcon from "@/components/icons/CartIcon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ProductQuantityProps } from "@/types/props";
import { Heart, Minus, Plus, Share2, Zap } from "lucide-react";
import AddToCartButton from "@/components/cart/AddButton";
import { useState } from "react";

export default function ProductQuantity({
  quantity,
  price,
  id,
  title,
}: ProductQuantityProps) {
  const [count, setCount] = useState(1);

  return (
    <>
      <div className="mb-6 flex flex-col gap-2">
        <span className="text-sm font-medium text-gray-700">Quantity</span>

        <div className="flex items-center gap-4">
          <div className="flex items-center border-2 border-gray-200 rounded-lg">
            <Button
              className="px-4 pt-3.75 pb-4.25 h-auto bg-transparent rounded-none text-base font-medium text-gray-600 hover:bg-primary-50/50 hover:text-primary-main"
              disabled={count === 1}
              onClick={() => setCount(count - 1)}
            >
              <Minus />
            </Button>
            <Input
              min={1}
              max={quantity}
              className="w-16 h-auto text-center text-gray-700 bg-transparent text-lg font-medium focus-visible:border-none focus-visible:ring-0"
              id="quantity"
              type="number"
              value={count}
              onChange={(e) => setCount(+e.target.value)}
            />
            <Button
              className="px-4 pt-3.75 pb-4.25 h-auto bg-transparent rounded-none text-base font-medium text-gray-600 hover:bg-primary-50/50 hover:text-primary-main"
              disabled={count === quantity}
              onClick={() => setCount(count + 1)}
            >
              <Plus />
            </Button>
          </div>

          <span className="text-sm font-medium text-gray-500">
            {quantity} available
          </span>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-4 mb-6 flex justify-between items-center">
        <span className="text-gray-600 text-base font-medium">
          Total Price:
        </span>
        <span className="text-2xl font-bold text-primary-main">
          {price * count}
        </span>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <AddToCartButton
          id={id}
          title={title}
          count={count}
          className="flex-1 py-3.5 h-auto bg-primary-main rounded-xl gap-2 text-white text-base font-medium hover:bg-primary-main/90"
        >
          <CartIcon className="size-5" />
          Add to Cart
        </AddToCartButton>

        {/* TODO */}
        <Button className="flex-1 py-3.5 h-auto bg-gray-900 rounded-xl gap-2 text-white text-base font-medium hover:bg-gray-900/90">
          <Zap fill="currentColor" />
          Buy Now
        </Button>
      </div>

      <div className="flex gap-3 mb-6">
        {/* TODO */}
        <Button className="py-3 flex-1 h-auto bg-white border-2 border-gray-200 rounded-xl gap-2 text-gray-700 text-base font-medium hover:bg-transparent hover:text-primary-700">
          <Heart />
          Add to Wishlist
        </Button>

        {/* TODO */}
        <Button className="p-4 h-auto bg-white border-2 border-gray-200 rounded-xl gap-2 text-gray-700 text-base font-medium hover:bg-transparent hover:text-primary-700">
          <Share2 fill="currentColor" />
        </Button>
      </div>
    </>
  );
}
