import { Category } from "@/types/categories";
import Image from "next/image";
import Link from "next/link";

export default function CategoryCard({ _id, name, image }: Category) {
  return (
    <Link
      href={`/categories/${_id}`}
      className="p-4 flex flex-col gap-3 items-center justify-center rounded-lg shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="size-20 rounded-full overflow-hidden relative">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="80px"
        />
      </div>

      <h3 className="font-medium text-gray-700">{name}</h3>
    </Link>
  );
}
