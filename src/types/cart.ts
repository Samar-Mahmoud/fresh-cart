import { Brand } from "./brands";
import { Category, SubCategory } from "./categories";

export interface SuccessResponse<T> {
  status: "success";
  message: string;
  numOfCartItems: number;
  cartId: string | null;
  data: T;
}

export interface ErrorResponse {
  message: string;
  statusMsg: "fail";
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
