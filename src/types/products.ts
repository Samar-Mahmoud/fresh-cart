import { Brand } from "./brands";
import { Category, SubCategory } from "./categories";

export interface Product {
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
  id: string;
  priceAfterDiscount?: number;
  reviews: Review[];
}

export interface Review {
  _id: string;
  review: string;
  rating: number;
  product: string;
  user: User;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  _id: string;
  name: string;
}

export interface ProductsFilters {
  brand?: Brand["_id"];
  category?: Category["_id"];
  subcategory?: SubCategory["_id"];
  keyword?: string;
  "price[gte]"?: string;
  "price[lte]"?: string;
}
