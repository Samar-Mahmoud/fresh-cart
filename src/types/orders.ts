import { OrderData } from "@/schema/order";
import { Brand } from "./brands";
import { Category, SubCategory } from "./categories";

export interface OrdersResponse {
  status: "success";
  message: string;
  user: User;
  pricing: Pricing;
  data: Data;
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

export interface Data {
  shippingAddress: OrderData;
  taxPrice: number;
  shippingPrice: number;
  totalOrderPrice: number;
  paymentMethodType: string;
  isPaid: boolean;
  isDelivered: boolean;
  _id: string;
  user: User;
  cartItems: CartItem[];
  createdAt: string;
  updatedAt: string;
  id: number;
  __v: number;
}

export interface CartItem {
  count: number;
  _id: string;
  product: Product;
  price: number;
}

export interface Product {
  subcategory: SubCategory[];
  ratingsQuantity: number;
  _id: string;
  title: string;
  imageCover: string;
  category: Category;
  brand: Brand;
  ratingsAverage: number;
  id: string;
}
