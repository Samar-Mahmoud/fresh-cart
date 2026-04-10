"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SliderBackground from "@/assets/sliderBackground.png";
import Image from "next/image";
import SliderDots from "./SliderDots";
import Link from "next/link";

const slides: {
  title: string;
  description: string;
  action: {
    label: string;
    href: string;
  };
}[] = [
  {
    title: "Fresh Products Delivered to your Door",
    description: "Get 20% off your first order",
    action: {
      label: "View Deals",
      href: "/deals",
    },
  },
  {
    title: "Premium Quality Guaranteed",
    description: "Fresh from farm to your table",
    action: {
      label: "Learn More",
      href: "/about",
    },
  },
  {
    title: "Fast & Free Delivery",
    description: "Same day delivery available",
    action: {
      label: "Delivery Info",
      href: "/delivery",
    },
  },
];

export default function Slider() {
  return (
    <Carousel
      className="h-100 bg-linear-to-r from-primary-500/90 to-primary-400/50 **:data-[slot=carousel-content]:h-full"
      opts={{ loop: true }}
    >
      <CarouselContent className="h-full px-4 py-20">
        {slides.map(({ title, description, action }) => (
          <CarouselItem key={title} className="h-full flex items-center">
            <div className="container px-4  mx-auto py-8.5 space-y-4">
              <h2 className="font-bold text-3xl text-white max-w-[384px]">
                {title}
              </h2>
              <p className="font-medium text-white">{description}</p>
              <div className="flex gap-2">
                <Link
                  href="/products"
                  className="shrink-0 text-primary-500 border-2 border-transparent bg-white rounded-lg px-6 py-2 font-semibold hover:scale-[1.05] transition-transform"
                >
                  Shop Now
                </Link>
                <Link
                  href={action.href}
                  className="shrink-0 text-white border-2 border-white/50 rounded-lg px-6 py-2 font-semibold hover:scale-[1.05] transition-transform"
                >
                  {action.label}
                </Link>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="hidden lg:flex left-4 size-12 cursor-pointer border-none bg-white/90 text-primary-500 hover:text-green-600 hover:bg-white shadow-lg hover:scale-[1.1] [&_svg:not([class*='size-'])]:size-6.5" />

      <CarouselNext className="hidden lg:flex right-4 size-12 cursor-pointer border-none bg-white/90 text-primary-500 hover:text-green-600 hover:bg-white shadow-lg hover:scale-[1.1] [&_svg:not([class*='size-'])]:size-6.5" />

      <SliderDots />

      <Image
        src={SliderBackground}
        alt="Slider Background"
        className="absolute object-cover -z-1"
        fill
        loading="eager"
      />
    </Carousel>
  );
}
