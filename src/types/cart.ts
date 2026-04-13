import { Brand } from "./brands";
import { Category, SubCategory } from "./categories";

export interface CartItemsResponse {
  status: "success";
  message: string;
  numOfCartItems: number;
  cartId: string | null;
  data: CartItems;
}

export interface CartItems {
  _id: string;
  cartOwner: string;
  totalCartPrice: number;
  products: {
    _id: string;
    count: number;
    price: number;
    product: {
      subcategory: SubCategory[];
      _id: string;
      title: string;
      slug: string;
      quantity: number;
      imageCover: string;
      category: Category;
      brand: Brand;
      ratingsAverage: number;
      id: string;
    };
  }[];
  createdAt: string;
  updatedAt: string;
}

export type CartActionResponse =
  | { isError: true; message: string }
  | {
      isError: false;
      data: {
        numOfCartItems: number;
        totalCartPrice: number;
      };
    };
