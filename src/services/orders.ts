import { authFetch } from "@/lib/auth";
import { OrderData } from "@/schema/order";
import { CartItems } from "@/types/cart";
import { CheckoutSessionResponse, OrderItem } from "@/types/orders";
import { revalidatePath } from "next/cache";

export async function getOrders(cartOwner: CartItems["cartOwner"]) {
  const res = await authFetch<OrderItem[]>(`/v1/orders/user/${cartOwner}`, {
    method: "GET",
  });

  if (res.isError) {
    console.error(res.message);
    return [];
  }

  revalidatePath("/cart");

  return res.data;
}

export async function createCashOrder(
  data: OrderData,
  cartId: CartItems["_id"],
): Promise<{
  isError: boolean;
  message: string;
}> {
  const res = await authFetch(`/v2/orders/${cartId}`, {
    method: "POST",
    body: JSON.stringify({ shippingAddress: data }),
  });

  if (res.isError) {
    console.error(res.message);
    return res;
  }

  revalidatePath("/cart");
  revalidatePath("/checkout");

  return { isError: false, message: "Your order created sucessfully!" };
}

export async function createCheckoutSession(
  data: OrderData,
  cartId: CartItems["_id"],
): Promise<{
  isError: boolean;
  message: string;
  url: string | null;
}> {
  const res = await authFetch<CheckoutSessionResponse>(
    `/v1/orders/checkout-session/${cartId}?url=${process.env.APP_URL}`,
    {
      method: "POST",
      body: JSON.stringify({ shippingAddress: data }),
    },
  );

  if (res.isError) {
    console.error(res.message);
    return { ...res, url: null };
  }

  return {
    isError: false,
    message: "Please wait while we set up your secure checkout...",
    url: res.data.session.url,
  };
}
