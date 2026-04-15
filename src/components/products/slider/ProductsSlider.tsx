import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Product } from "@/types/products";
import ProductCard from "../Card";

export default function ProductsSlider({ products }: { products: Product[] }) {
  return (
    <Carousel className="**:data-[slot=carousel-content]:h-full space-y-4">
      <header className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="h-8 w-1.5 bg-linear-to-r from-emerald-500 to-emerald-700 rounded-full"></div>
          <h2 className="text-2xl font-bold text-gray-800">
            You May Also
            <span className="bg-primary-800 bg-clip-text text-transparent">
              {" "}
              Like
            </span>
          </h2>
        </div>

        <div className="flex items-center gap-2">
          <CarouselPrevious className="relative inset-0 translate-none active:not-aria-[haspopup]:translate-none! size-10 cursor-pointer border-none bg-gray-100 text-gray-600 hover:text-gray-400 hover:bg-gray-100 [&_svg:not([class*='size-'])]:size-4" />

          <CarouselNext className="relative inset-0 translate-none active:not-aria-[haspopup]:translate-none! size-10 cursor-pointer border-none bg-gray-100 text-gray-600 hover:text-gray-400 hover:bg-gray-100 [&_svg:not([class*='size-'])]:size-4" />
        </div>
      </header>

      <CarouselContent className="h-max items-stretch">
        {products.map((product) => (
          <CarouselItem
            key={product._id}
            className="h-full sm:basis-1/2 lg:basis-1/4 xl:basis-1/6"
          >
            <ProductCard {...product} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
