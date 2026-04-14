import { authFetch } from "@/lib/auth";
import { OrderData } from "@/schema/order";
import { CartItems } from "@/types/cart";
import { OrdersResponse } from "@/types/orders";
import { revalidatePath } from "next/cache";

export async function createCashOrder(
  data: OrderData,
  cartId: CartItems["_id"],
) {
  try {
    await authFetch<OrdersResponse>(`/v2/orders/${cartId}`, {
      method: "POST",
      body: JSON.stringify({ shippingAddress: data }),
    });

    revalidatePath("/cart");

    return { isError: false, message: "Your order created sucessfully!" };
  } catch (error) {
    console.error(error);
    return { isError: true, message: (error as Error).message };
  }
}
