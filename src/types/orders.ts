import { OrderData } from "@/schema/order";
import { Brand } from "./brands";
import { Category, SubCategory } from "./categories";

export type PaymentMethod = "cash" | "online";

export interface CheckoutSessionResponse {
  status: "success";
  session: {
    url: string;
    success_url: string;
    cancel_url: string;
  };
}

export interface OrderResponse {
  status: "success";
  message: string;
  user: User;
  pricing: Pricing;
  data: OrderItem;
}

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface Pricing {
  cartPrice: number;
  taxPrice: number;
  shippingPrice: number;
  totalOrderPrice: number;
}

export interface OrderItem {
  shippingAddress: OrderData;
  taxPrice: number;
  shippingPrice: number;
  totalOrderPrice: number;
  paymentMethodType: "cash" | "card";
  isPaid: boolean;
  isDelivered: boolean;
  _id: string;
  user: User;
  cartItems: CartItem[];
  createdAt: string;
  updatedAt: string;
  id: number;
  __v: number;
  paidAt?: string;
}

export interface CartItem {
  count: number;
  _id: string;
  product: {
    subcategory: SubCategory[];
    ratingsQuantity: number;
    _id: string;
    title: string;
    imageCover: string;
    category: Category;
    brand: Brand;
    ratingsAverage: number;
    id: string;
  };
  price: number;
}
