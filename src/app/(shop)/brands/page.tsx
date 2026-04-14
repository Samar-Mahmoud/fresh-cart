import Link from "next/link";
import { getBrands } from "@/services/brands";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Header from "@/components/shared/Header";
import BrandIcon from "@/components/icons/BrandIcon";

export default async function Brands() {
  const brands = await getBrands();

  return (
    <main className="min-h-screen">
      <Header
        classes="from-violet-600 via-violet-500 to-purple-400"
        page="Brands"
        title="Top Brands"
        description="Shop from your favorite brands"
      >
        <BrandIcon className="m-auto size-8 text-white" />
      </Header>

      <div className="container mx-auto px-4 py-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-5">
        {brands.map((brand) => (
          <Link
            key={brand._id}
            href={`/products?brand=${brand._id}`}
            className="group text-center p-4 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
          >
            <div className="rounded-xl bg-gray-50 p-4 mb-3">
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={brand.image}
                  alt={brand.name}
                  fill
                  className="object-contain group-hover:scale-[1.1] transition-transform"
                />
              </div>
            </div>

            <h3 className="text-gray-900 text-sm font-semibold mb-1.5">
              {brand.name}
            </h3>

            <div className="flex justify-center">
              <span className="text-xs font-medium text-violet-600 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                View Products
                <ArrowRight className="size-3.5" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
