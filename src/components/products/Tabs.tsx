import ShieldIcon from "@/components/icons/ShieldIcon";
import VanIcon from "@/components/icons/VanIcon";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductTabsProps } from "@/types/props";
import { Check, RotateCcw, Star } from "lucide-react";
import ProductReviews from "./Reviews";

export default function ProductTabs({
  description,
  subcategory,
  categoryName,
  brandName,
  sold,
  reviews,
}: ProductTabsProps) {
  return (
    <Tabs defaultValue="details" className="gap-0">
      <TabsList
        variant="line"
        className="p-0 w-full justify-start group-data-horizontal/tabs:h-auto border-b border-gray-200 overflow-x-auto no-scrollbar"
      >
        <TabsTrigger value="details" className="cursor-pointer">
          <svg
            className="size-5"
            width="18"
            height="14"
            viewBox="0 0 18 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.7258 3.5L11.7879 2.1875H5.71484L4.77695 3.5H12.7258ZM2.625 4.06055C2.625 3.69688 2.73984 3.34141 2.95039 3.04336L4.29023 1.17031C4.61836 0.710938 5.14883 0.4375 5.71211 0.4375H11.7852C12.3512 0.4375 12.8816 0.710938 13.2098 1.17031L14.5469 3.04336C14.7602 3.34141 14.8723 3.69688 14.8723 4.06055L14.875 11.375C14.875 12.3402 14.0902 13.125 13.125 13.125H4.375C3.40977 13.125 2.625 12.3402 2.625 11.375V4.06055Z"
              fill="currentColor"
            />
          </svg>
          Product Details
        </TabsTrigger>

        <TabsTrigger value="reviews" className="cursor-pointer">
          <Star fill="currentColor" />
          Reviews ({reviews.length})
        </TabsTrigger>

        <TabsTrigger value="shipping" className="cursor-pointer">
          <VanIcon className="size-4" />
          Shipping & Returns
        </TabsTrigger>
      </TabsList>

      <TabsContent value="details" className="p-6 space-y-6">
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-900">
            About this Product
          </h3>
          <p className="text-base font-medium text-gray-600">{description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 rounded-lg p-4 space-y-3">
            <h4 className="text-base font-medium text-gray-900">
              Product Information
            </h4>

            <ul className="space-y-2">
              <li className="flex items-center justify-between text-sm font-medium">
                <span className="text-gray-500">Category</span>
                <span className="text-gray-900">{categoryName}</span>
              </li>

              <li className="flex items-center justify-between text-sm font-medium">
                <span className="text-gray-500">Subcategory</span>
                <span className="text-gray-900">{subcategory[0].name}</span>
              </li>

              <li className="flex items-center justify-between text-sm font-medium">
                <span className="text-gray-500">Brand</span>
                <span className="text-gray-900">{brandName}</span>
              </li>

              <li className="flex items-center justify-between text-sm font-medium">
                <span className="text-gray-500">Items sold</span>
                <span className="text-gray-900">{sold}</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 space-y-3">
            <h4 className="text-base font-medium text-gray-900">
              Key Features
            </h4>

            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm font-medium">
                <Check className="text-primary-main size-5" />
                <span className="text-gray-500">Premium Quality Product</span>
              </li>

              <li className="flex items-center gap-2 text-sm font-medium">
                <Check className="text-primary-main size-5" />
                <span className="text-gray-500">100% Authentic Guarantee</span>
              </li>

              <li className="flex items-center gap-2 text-sm font-medium">
                <Check className="text-primary-main size-5" />
                <span className="text-gray-500">Fast & Secure Packaging</span>
              </li>

              <li className="flex items-center gap-2 text-sm font-medium">
                <Check className="text-primary-main size-5" />
                <span className="text-gray-500">Quality Tested</span>
              </li>
            </ul>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="reviews" className="p-6 space-y-6">
        <ProductReviews reviews={reviews} />
      </TabsContent>

      <TabsContent value="shipping" className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-linear-to-br from-primary-50 to-primary-100 rounded-lg p-4 space-y-4">
            <h4 className="flex items-center gap-3 text-base font-semibold text-gray-900">
              <div className="size-12 bg-primary-main text-white flex rounded-full shrink-0">
                <VanIcon className="m-auto size-6" />
              </div>
              Shipping Information
            </h4>

            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm font-medium">
                <Check className="text-primary-main size-5" />
                <span className="text-gray-700">
                  Free shipping on orders over $50
                </span>
              </li>

              <li className="flex items-center gap-2 text-sm font-medium">
                <Check className="text-primary-main size-5" />
                <span className="text-gray-700">
                  Standard delivery: 3-5 business days
                </span>
              </li>

              <li className="flex items-center gap-2 text-sm font-medium">
                <Check className="text-primary-main size-5" />
                <span className="text-gray-700">
                  Express delivery available (1-2 business days)
                </span>
              </li>

              <li className="flex items-center gap-2 text-sm font-medium">
                <Check className="text-primary-main size-5" />
                <span className="text-gray-700">
                  Track your order in real-time
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-linear-to-br from-primary-50 to-primary-100 rounded-lg p-4 space-y-4">
            <h4 className="flex items-center gap-3 text-base font-semibold text-gray-900">
              <div className="size-12 bg-primary-main text-white flex rounded-full shrink-0">
                <RotateCcw className="size-6 m-auto" strokeWidth={3} />
              </div>
              Returns & Refunds
            </h4>

            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm font-medium">
                <Check className="text-primary-main size-5" />
                <span className="text-gray-700">
                  30-day hassle-free returns
                </span>
              </li>

              <li className="flex items-center gap-2 text-sm font-medium">
                <Check className="text-primary-main size-5" />
                <span className="text-gray-700">
                  Full refund or exchange available
                </span>
              </li>

              <li className="flex items-center gap-2 text-sm font-medium">
                <Check className="text-primary-main size-5" />
                <span className="text-gray-700">
                  Free return shipping on defective items
                </span>
              </li>

              <li className="flex items-center gap-2 text-sm font-medium">
                <Check className="text-primary-main size-5" />
                <span className="text-gray-700">
                  Easy online return process
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 flex items-center gap-4">
          <div className="size-14 bg-gray-200 text-gray-600 rounded-full flex shrink-0">
            <ShieldIcon className="m-auto size-7" />
          </div>
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-900">
              Buyer Protection Guarantee
            </h4>
            <p className="text-sm text-gray-600">
              Get a full refund if your order doesn&apos;t arrive or isn&apos;t
              as described. We ensure your shopping experience is safe and
              secure.
            </p>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}
