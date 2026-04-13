import ProductCard from "../products/Card";
import { getProducts } from "@/services/products";

export default async function Products() {
  const { data: products } = await getProducts();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {products.map((prod) => (
        <ProductCard key={prod._id} {...prod} />
      ))}
    </div>
  );
}
