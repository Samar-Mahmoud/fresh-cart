import Header from "@/components/shared/Header";
import { Category as CategoryI } from "@/types/categories";
import { getCategory, getSubCategories } from "@/services/categories";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, FolderOpen } from "lucide-react";

export default async function Category({
  params,
}: {
  params: Promise<{ id: CategoryI["_id"] }>;
}) {
  const { id } = await params;

  const category = await getCategory(id);
  const subCategories = await getSubCategories(id);

  return (
    <section className="min-h-screen">
      <Header
        classes="from-primary-main via-primary-600 to-[#4ade80]"
        title={category.name}
        description="Choose a subcategory to browse products"
        links={[
          { label: "Home", href: "/" },
          { label: "Categories", href: "/categories" },
        ]}
      >
        <Image
          width="48"
          height="48"
          src={category.image}
          alt={category.name}
          className="object-contain size-12 m-auto"
        />
      </Header>

      <div className="container mx-auto px-4 py-8">
        <Link
          className="flex items-center gap-2 text-gray-600 hover:text-primary-main transition-colors mb-6"
          href="/categories"
        >
          <ArrowLeft className="size-5" />
          <span>Back to Categories</span>
        </Link>

        <h2 className="text-lg font-bold mb-6 text-gray-900">
          {subCategories.length} Subcategories in {category.name}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {subCategories.map((cat) => (
            <Link
              key={cat._id}
              href={`/products?subcategory=${cat._id}`}
              className="group p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-primary-400 transition-all"
            >
              <div className="size-14 rounded-xl bg-primary-50 flex mb-4 group-hover:bg-primary-100 transition-colors">
                <FolderOpen className="fill-primary-main text-primary-main m-auto size-6" />
              </div>

              <h3 className="text-gray-900 text-lg font-bold mb-2 group-hover:text-primary-main transition-colors">
                {cat.name}
              </h3>

              <span className="text-sm font-medium text-primary-800 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                Browse Products
                <ArrowRight className="size-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
