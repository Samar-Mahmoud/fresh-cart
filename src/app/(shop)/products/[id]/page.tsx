import ShieldIcon from "@/components/icons/ShieldIcon";
import ProductQuantity from "@/components/products/Quantity";
import ProductTabs from "@/components/products/Tabs";
import Rating from "@/components/products/Rating";
import ImagesSlider from "@/components/products/slider/ImagesSlider";
import ProductsSlider from "@/components/products/slider/ProductsSlider";
import StoreBenefits from "@/components/shared/StoreBenefits";
import {
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Separator,
} from "@/components/ui";
import { getProduct, getProducts } from "@/services/products";
import { Circle, RotateCcw } from "lucide-react";
import Link from "next/link";
import VanFastIcon from "@/components/icons/VanFastIcon";

const benefits: {
  title: string;
  description: string;
  icon: { node: React.ReactNode };
}[] = [
  {
    title: "Free Delivery",
    description: "orders over 550",
    icon: {
      node: <VanFastIcon />,
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
    sold,
    reviews,
  } = await getProduct(id);

  const rating = {
    average: reviews.length > 0 ? ratingsAverage : 0,
    count: reviews.length > 0 ? ratingsQuantity : 0,
  };

  const { data: products } = await getProducts();

  return (
    <main className="p-4">
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
        <div className="flex flex-col lg:flex-row lg:items-start gap-8 mb-14 relative">
          <section className="lg:w-1/4 lg:sticky top-0">
            <ImagesSlider images={images} title={title} />
          </section>

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
              <Rating rating={rating.average} />

              <div className="text-sm font-medium text-gray-600">
                (
                {rating.count > 0
                  ? `${rating.count} reviews`
                  : "No Reviews Yet"}
                )
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

            <Separator className="bg-gray-100" />

            <p className="pt-5 mb-6 text-base font-medium text-gray-600">
              {description}
            </p>

            <ProductQuantity
              id={id}
              quantity={quantity}
              price={priceAfterDiscount ?? price}
            />

            <Separator className="bg-gray-100" />

            <ul className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 ">
              <StoreBenefits
                benefits={benefits}
                iconClasses="size-10 flex rounded-full bg-primary-100 text-primary-main"
              />
            </ul>
          </section>
        </div>

        <section className="rounded-lg shadow-sm mb-18">
          <ProductTabs
            brandName={brandName}
            categoryName={categoryName}
            description={description}
            sold={sold}
            subcategory={subcategory}
            reviews={reviews}
          />
        </section>

        <section className="space-y-6 mb-2">
          <ProductsSlider products={products} />
        </section>
      </div>
    </main>
  );
}
