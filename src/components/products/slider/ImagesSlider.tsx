"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import SliderNavigation from "./SliderNavigation";
import { ImagesSliderProps } from "@/types/props";

export default function ImagesSlider({ images, title }: ImagesSliderProps) {
  return (
    <Carousel className="**:data-[slot=carousel-content]:h-111.25 p-4 rounded-xl shadow-sm">
      <CarouselContent className="h-full ml-0">
        {images.map((image, index) => (
          <CarouselItem key={index} className="relative h-full p-0">
            <Image
              src={image}
              alt={title}
              fill
              className="object-fill sm:object-contain"
              sizes="445"
            />
          </CarouselItem>
        ))}
      </CarouselContent>

      <SliderNavigation images={images} title={title} />
    </Carousel>
  );
}
