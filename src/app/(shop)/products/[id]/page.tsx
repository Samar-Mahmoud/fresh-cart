import ShieldIcon from "@/components/icons/ShieldIcon";
import ProductQuantity from "@/components/products/ProductQuantity";
import Ratings from "@/components/products/Ratings";
import ImagesSlider from "@/components/products/slider/ImagesSlider";
import StoreBenefits from "@/components/shared/StoreBenefits";
import {
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui";
import { getProduct } from "@/services/products";
import { Circle, RotateCcw } from "lucide-react";
import Link from "next/link";

const benefits: {
  title: string;
  description: string;
  icon: { node: React.ReactNode };
}[] = [
  {
    title: "Free Delivery",
    description: "orders over 550",
    icon: {
      node: (
        <svg
          className="m-auto"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="40" height="40" rx="20" fill="#DCFCE7" />
          <path
            d="M12 15C12 13.8969 12.8969 13 14 13H23C24.1031 13 25 13.8969 25 15V16H26.5844C27.1156 16 27.625 16.2094 28 16.5844L29.4156 18C29.7906 18.375 30 18.8844 30 19.4156V24C30 25.1031 29.1031 26 28 26H27.8969C27.5719 27.1531 26.5094 28 25.25 28C23.9906 28 22.9312 27.1531 22.6031 26H19.3969C19.0719 27.1531 18.0094 28 16.75 28C15.4906 28 14.4313 27.1531 14.1031 26H14C12.8969 26 12 25.1031 12 24V22.5H10.75C10.3344 22.5 10 22.1656 10 21.75C10 21.3344 10.3344 21 10.75 21H14.25C14.6656 21 15 20.6656 15 20.25C15 19.8344 14.6656 19.5 14.25 19.5H10.75C10.3344 19.5 10 19.1656 10 18.75C10 18.3344 10.3344 18 10.75 18H16.25C16.6656 18 17 17.6656 17 17.25C17 16.8344 16.6656 16.5 16.25 16.5H10.75C10.3344 16.5 10 16.1656 10 15.75C10 15.3344 10.3344 15 10.75 15H12ZM28 21V19.4156L26.5844 18H25V21H28ZM18 25.25C18 24.9185 17.8683 24.6005 17.6339 24.3661C17.3995 24.1317 17.0815 24 16.75 24C16.4185 24 16.1005 24.1317 15.8661 24.3661C15.6317 24.6005 15.5 24.9185 15.5 25.25C15.5 25.5815 15.6317 25.8995 15.8661 26.1339C16.1005 26.3683 16.4185 26.5 16.75 26.5C17.0815 26.5 17.3995 26.3683 17.6339 26.1339C17.8683 25.8995 18 25.5815 18 25.25ZM25.25 26.5C25.5815 26.5 25.8995 26.3683 26.1339 26.1339C26.3683 25.8995 26.5 25.5815 26.5 25.25C26.5 24.9185 26.3683 24.6005 26.1339 24.3661C25.8995 24.1317 25.5815 24 25.25 24C24.9185 24 24.6005 24.1317 24.3661 24.3661C24.1317 24.6005 24 24.9185 24 25.25C24 25.5815 24.1317 25.8995 24.3661 26.1339C24.6005 26.3683 24.9185 26.5 25.25 26.5Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
  },
  {
    title: "Easy Returns",
    description: "Money back",
    icon: {
      node: <RotateCcw className="m-auto size-5" />,
    },
  },
  {
    title: "Secure Payment",
    description: "100% Protected",
    icon: {
      node: <ShieldIcon size="size-5" />,
    },
  },
];

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const {
    title,
    category: { name: categoryName, _id: categoryId },
    subcategory,
    images,
    brand: { name: brandName },
    ratingsAverage,
    ratingsQuantity,
    price,
    priceAfterDiscount,
    description,
    quantity,
  } = await getProduct(id);

  return (
    <section className="p-4">
      <Breadcrumb className="mb-10">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link
                href="/"
                className="flex items-center gap-1.5 text-gray-500 text-sm font-medium"
              >
                <svg
                  width="15"
                  height="12"
                  viewBox="0 0 15 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.01116 0.20155C7.72288 -0.0656372 7.27757 -0.0656372 6.99163 0.20155L1.74163 5.07655C1.51663 5.28749 1.44163 5.61327 1.55413 5.89921C1.66663 6.18514 1.94085 6.37499 2.25022 6.37499H2.62522V10.5C2.62522 11.3273 3.29788 12 4.12522 12H10.8752C11.7026 12 12.3752 11.3273 12.3752 10.5V6.37499H12.7502C13.0596 6.37499 13.3362 6.18514 13.4487 5.89921C13.5612 5.61327 13.4862 5.28514 13.2612 5.07655L8.01116 0.20155ZM7.12522 7.49999H7.87522C8.49632 7.49999 9.00022 8.00389 9.00022 8.62499V10.875H6.00022V8.62499C6.00022 8.00389 6.50413 7.49999 7.12522 7.49999Z"
                    fill="currentColor"
                  />
                </svg>
                Home
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator className="text-gray-400" />

          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link
                href={`/categories/${categoryId}`}
                className=" text-gray-500 text-sm font-medium"
              >
                {categoryName}
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator className="text-gray-400" />

          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link
                href={`/categories/${categoryId}/${subcategory[0]._id}`}
                className=" text-gray-500 text-sm font-medium"
              >
                {subcategory[0].name}
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator className="text-gray-400" />

          <BreadcrumbItem>
            <BreadcrumbPage className="text-gray-900 text-sm font-medium">
              {title}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="p-4">
        <div className="flex flex-col lg:flex-row lg:items-start gap-8 mb-14">
          <div className="lg:w-1/4">
            <ImagesSlider images={images} title={title} />
          </div>

          <section className="rounded-xl shadow-sm p-4 flex flex-col flex-1">
            <div className="flex gap-2 mb-4">
              <Badge
                className="px-3 py-1.5 bg-primary-50 text-primary-700 hover:bg-primary-100!"
                asChild
              >
                <Link href={`/categories/${categoryId}`}>{categoryName}</Link>
              </Badge>
              <Badge className="px-3 py-1.5 bg-gray-100 text-gray-700">
                {brandName}
              </Badge>
            </div>

            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
              {title}
            </h1>

            <div className="flex gap-3 items-center mb-4">
              <Ratings ratingsAverage={ratingsAverage} />

              <div className="text-sm font-medium text-gray-600">
                {ratingsAverage} ({ratingsQuantity} reviews)
              </div>
            </div>

            <div className="mb-6">
              {priceAfterDiscount ? (
                <div className="flex items-center gap-3 flex-wrap">
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-3xl font-bold text-primary-main shrink-0">
                      {priceAfterDiscount} EGP
                    </span>

                    <span className="line-through text-lg text-gray-500 shrink-0">
                      {price} EGP
                    </span>
                  </div>

                  <Badge className="bg-red-500 text-white py-1 text-sm">
                    Save{" "}
                    {Math.round(((price - priceAfterDiscount) / price) * 100)}%
                  </Badge>
                </div>
              ) : (
                <span className="text-3xl font-bold text-gray-800">
                  {price} EGP
                </span>
              )}
            </div>

            <Badge className="px-3 py-1.5 text-sm bg-primary-50 text-green-700 gap-1.5 [&>svg]:size-2! mb-6">
              <Circle className="fill-current text-primary-500" />
              In Stock
            </Badge>

            <p className="pt-5 border-t border-gray-100 mb-6 text-base font-medium text-gray-600">
              {description}
            </p>

            <ProductQuantity
              id={id}
              quantity={quantity}
              price={priceAfterDiscount ?? price}
            />

            <div className="pt-6 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-3 gap-4 ">
              <StoreBenefits
                benefits={benefits}
                iconClasses="size-10 flex rounded-full bg-primary-100 text-primary-main"
              />
            </div>
          </section>
        </div>

        {/* TODO: Product details */}

        {/* TODO: Suggestions */}
      </div>
    </section>
  );
}
