import { CarouselContent, CarouselItem } from "@/components/ui/carousel";
import ProductCard from "../Card";
import { getProducts } from "@/services/products";

export default async function ProductsSlider() {
  const { data: products } = await getProducts();

  return (
    <CarouselContent className="items-stretch">
      {products.map((product) => (
        <CarouselItem
          key={product._id}
          className="h-full sm:basis-1/2 lg:basis-1/4 xl:basis-1/6"
        >
          <ProductCard {...product} />
        </CarouselItem>
      ))}
    </CarouselContent>
  );
}
