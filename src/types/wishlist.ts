import { Brand } from "./brands";
import { Category, SubCategory } from "./categories";

export interface WishlistItemsResponse {
  status: "success";
  count: 0;
  data: WishlistItem[];
}

export interface WishlistActionResponse {
  status: "success";
  message: string;
  data: string[];
}

export interface WishlistItem {
  sold: number;
  images: string[];
  subcategory: SubCategory[];
  ratingsQuantity: number;
  _id: string;
  title: string;
  slug: string;
  description: string;
  quantity: number;
  price: number;
  imageCover: string;
  category: Category;
  brand: Brand;
  ratingsAverage: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
  id: string;
}
