import Link from "next/link";
import { getBrands } from "@/services/brands";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Header from "@/components/shared/Header";

export default async function Brands() {
  const brands = await getBrands();

  return (
    <section className="min-h-screen">
      <Header
        classes="from-violet-600 via-violet-500 to-purple-400"
        page="Brands"
        title="Top Brands"
        description="Shop from your favorite brands"
      >
        <svg
          className="m-auto"
          width="38"
          height="30"
          viewBox="0 0 38 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.3848 2.29102L34.0684 11.0977C35.6914 12.7441 35.6914 15.3809 34.0684 17.0273L24.9043 26.3027C24.3594 26.8535 23.4688 26.8594 22.918 26.3145C22.3672 25.7695 22.3613 24.8789 22.9062 24.3281L32.0703 15.0469C32.6094 14.502 32.6094 13.6172 32.0703 13.0723L23.3809 4.27148C22.8359 3.7207 22.8418 2.83008 23.3926 2.28516C23.9434 1.74023 24.834 1.74609 25.3789 2.29688L25.3848 2.29102ZM3.75781 13.4473V5.625C3.75781 3.55664 5.43945 1.875 7.50781 1.875H15.3301C16.3262 1.875 17.2812 2.26758 17.9844 2.9707L26.4219 11.4082C27.8867 12.873 27.8867 15.2461 26.4219 16.7109L18.5996 24.5332C17.1348 25.998 14.7617 25.998 13.2969 24.5332L4.85938 16.0957C4.15625 15.3926 3.76367 14.4375 3.76367 13.4414L3.75781 13.4473ZM12.1953 8.4375C12.1953 7.94022 11.9978 7.46331 11.6461 7.11168C11.2945 6.76004 10.8176 6.5625 10.3203 6.5625C9.82303 6.5625 9.34612 6.76004 8.99449 7.11168C8.64286 7.46331 8.44531 7.94022 8.44531 8.4375C8.44531 8.93478 8.64286 9.41169 8.99449 9.76333C9.34612 10.115 9.82303 10.3125 10.3203 10.3125C10.8176 10.3125 11.2945 10.115 11.6461 9.76333C11.9978 9.41169 12.1953 8.93478 12.1953 8.4375Z"
            fill="white"
          />
        </svg>
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
    </section>
  );
}
