"use client";

import { useCarousel } from "@/components/ui/carousel";
import { ImagesSliderProps } from "@/types/props";
import Image from "next/image";

export default function ImagesNavigation({ images, title }: ImagesSliderProps) {
  const { scrollSnaps, goTo, selectedSnap } = useCarousel();

  return (
    <div className="overflow-hidden h-28.5 flex items-center justify-center">
      <div className="flex gap-0.5">
        {scrollSnaps.map((_, index) => (
          <div
            key={index}
            className="relative cursor-pointer w-20.25 h-25.5 hover:opacity-90 transition-opacity"
            onClick={() => goTo(index)}
          >
            <Image
              src={images[index]}
              alt={title}
              fill
              sizes="102"
              className={`object-contain ${selectedSnap === index ? "border-3 border-gray-500" : ""}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
