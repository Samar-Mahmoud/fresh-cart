import Link from "next/link";
import { getCategories } from "@/services/categories";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Header from "@/components/shared/Header";

export default async function Categories() {
  const categories = await getCategories();

  return (
    <section className="min-h-screen">
      <Header
        classes="from-primary-main via-primary-600 to-[#4ade80]"
        title="All Categories"
        description="Browse our wide range of product categories"
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
            d="M17.373 0.304688C18.2461 -0.0996094 19.2539 -0.0996094 20.127 0.304688L32.9355 6.22266C33.4336 6.45117 33.75 6.94922 33.75 7.5C33.75 8.05078 33.4336 8.54883 32.9355 8.77734L20.127 14.6953C19.2539 15.0996 18.2461 15.0996 17.373 14.6953L4.56445 8.77734C4.06641 8.54297 3.75 8.04492 3.75 7.5C3.75 6.95508 4.06641 6.45117 4.56445 6.22266L17.373 0.304688ZM6.56836 12.7969L16.1953 17.2441C17.8184 17.9941 19.6875 17.9941 21.3105 17.2441L30.9375 12.7969L32.9355 13.7227C33.4336 13.9512 33.75 14.4492 33.75 15C33.75 15.5508 33.4336 16.0488 32.9355 16.2773L20.127 22.1953C19.2539 22.5996 18.2461 22.5996 17.373 22.1953L4.56445 16.2773C4.06641 16.043 3.75 15.5449 3.75 15C3.75 14.4551 4.06641 13.9512 4.56445 13.7227L6.5625 12.7969H6.56836ZM4.56445 21.2227L6.5625 20.2969L16.1895 24.7441C17.8125 25.4941 19.6816 25.4941 21.3047 24.7441L30.9316 20.2969L32.9297 21.2227C33.4277 21.4512 33.7441 21.9492 33.7441 22.5C33.7441 23.0508 33.4277 23.5488 32.9297 23.7773L20.1211 29.6953C19.248 30.0996 18.2402 30.0996 17.3672 29.6953L4.56445 23.7773C4.06641 23.543 3.75 23.0449 3.75 22.5C3.75 21.9551 4.06641 21.4512 4.56445 21.2227Z"
            fill="white"
          />
        </svg>
      </Header>

      <div className="container mx-auto px-4 py-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
        {categories.map((cat) => (
          <Link
            key={cat._id}
            href={`/categories/${cat._id}`}
            className="group text-center p-6.25 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
          >
            <div className="rounded-xl mb-4 aspect-square relative overflow-hidden">
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover group-hover:scale-[1.1] transition-transform"
              />
            </div>

            <h3 className="text-gray-900 text-base font-bold mb-2">
              {cat.name}
            </h3>

            <div className="flex justify-center">
              <span className="text-xs font-medium text-primary-800 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                View Subcategories
                <ArrowRight className="size-3.5" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
