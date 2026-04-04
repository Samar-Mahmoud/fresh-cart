import StoreBenefits from "@/components/common/StoreBenefits";
import HeadSetIcon from "@/components/icons/HeadsetIcon";
import ShieldIcon from "@/components/icons/ShieldIcon";
import VanIcon from "@/components/icons/VanIcon";
import Slider from "@/components/slider/Slider";
import { RotateCcw } from "lucide-react";

const benefits: {
  title: string;
  description: string;
  icon: { node: React.ReactNode; style: string };
}[] = [
  {
    title: "Free Shipping",
    description: "On orders over 500 EGP",
    icon: {
      node: <VanIcon size="size-6" />,
      style: "bg-red-50 text-blue-500",
    },
  },
  {
    title: "Secure Payment",
    description: "100% secure transactions",
    icon: {
      node: <ShieldIcon size="size-6" />,
      style: "bg-emerald-50 text-emerald-500",
    },
  },
  {
    title: "Easy Returns",
    description: "14-day return policy",
    icon: {
      node: <RotateCcw className="m-auto size-6" width="23" height="18" />,
      style: "bg-gray-100 text-orange-500",
    },
  },

  {
    title: "24/7 Support",
    description: "Dedicated support team",
    icon: {
      node: <HeadSetIcon size="size-6" />,
      style: "bg-gray-50 text-purple-500",
    },
  },
];

export default function Home() {
  return (
    <main className="">
      <Slider />

      <div className="px-4 py-8 bg-gray-50">
        <StoreBenefits
          benefits={benefits}
          iconClasses="size-12 shrink-0 rounded-full flex"
          wrapperClasses="p-4 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow"
        />
      </div>
    </main>
  );
}
