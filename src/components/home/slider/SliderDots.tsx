import { useCarousel } from "@/components/ui/carousel";

export default function SliderDots() {
  const { scrollSnaps, goTo, selectedSnap } = useCarousel();

  return (
    <div className="absolute bottom-2 w-full flex justify-center gap-2 h-6 pt-1.25 pb-1.75">
      {scrollSnaps.map((_, index) => (
        <span
          key={index}
          className={`cursor-pointer h-3 rounded-full hover:bg-[#fffc] hover:scale-[1.1] transition-all ${selectedSnap === index ? "w-8 bg-white" : "w-3 bg-white/50"}`}
          onClick={() => goTo(index)}
        ></span>
      ))}
    </div>
  );
}
