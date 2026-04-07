import StoreBenefits from "@/components/shared/StoreBenefits";
import HeadSetIcon from "@/components/icons/HeadsetIcon";
import ShieldIcon from "@/components/icons/ShieldIcon";
import VanIcon from "@/components/icons/VanIcon";
import Slider from "@/components/home/slider/Slider";
import { ArrowRight, RotateCcw } from "lucide-react";
import Link from "next/link";
import Offers from "@/components/home/Offers";
import CategoryCard from "@/components/home/CategoryCard";
import ProductCard from "@/components/products/ProductCard";
import { getCategories } from "@/services/categories";
import { getProducts } from "@/services/products";
import Subscription from "@/components/home/newsletter/Subscription";

const benefits: {
  title: string;
  description: string;
  icon: { node: React.ReactNode; style: string };
}[] = [
  {
    title: "Free Shipping",
    description: "On orders over 500 EGP",
    icon: {
      node: <VanIcon size="size-6" />,
      style: "bg-red-50 text-blue-500",
    },
  },
  {
    title: "Secure Payment",
    description: "100% secure transactions",
    icon: {
      node: <ShieldIcon size="size-6" />,
      style: "bg-emerald-50 text-emerald-500",
    },
  },
  {
    title: "Easy Returns",
    description: "14-day return policy",
    icon: {
      node: <RotateCcw className="m-auto size-6" width="23" height="18" />,
      style: "bg-gray-100 text-orange-500",
    },
  },

  {
    title: "24/7 Support",
    description: "Dedicated support team",
    icon: {
      node: <HeadSetIcon size="size-6" />,
      style: "bg-gray-50 text-purple-500",
    },
  },
];

export default async function Home() {
  const categories = await getCategories();
  const products = await getProducts();

  return (
    <main>
      <Slider />

      <section className="px-4 py-8 bg-gray-50 mb-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StoreBenefits
            benefits={benefits}
            iconClasses="size-12 shrink-0 rounded-full flex"
            wrapperClasses="p-4 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow"
          />
        </div>
      </section>

      <div className="container mx-auto px-4">
        {/* Categories */}
        <section className="mb-28">
          <header className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
            <div className="py-8 flex items-center gap-3">
              <div className="h-8 w-1.5 bg-linear-to-r from-emerald-500 to-emerald-700 rounded-full"></div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">
                Shop By
                <span className="bg-primary-800 bg-clip-text text-transparent">
                  {" "}
                  Category
                </span>
              </h2>
            </div>
            <Link
              href="/categories"
              className="text-primary-main font-medium flex items-center gap-2 self-end sm:self-center"
            >
              View All Categories
              <ArrowRight className="size-5" />
            </Link>
          </header>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-20">
            {categories.map((cat) => (
              <CategoryCard key={cat._id} {...cat} />
            ))}
          </div>

          <Offers />
        </section>

        {/* Products */}
        <section className="mb-10">
          <header className="py-8 flex items-center gap-3 mb-8">
            <div className="h-8 w-1.5 bg-linear-to-r from-[#00bc7d] to-[#007a55] rounded-full"></div>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">
              Featured
              <span className="bg-primary-800 bg-clip-text text-transparent">
                {" "}
                Products
              </span>
            </h2>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {products.map((prod) => (
              <ProductCard key={prod._id} {...prod} />
            ))}
          </div>
        </section>

        <section className="py-16">
          <Subscription />
        </section>
      </div>
    </main>
  );
}
