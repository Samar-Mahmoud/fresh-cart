import ShieldIcon from "@/components/icons/ShieldIcon";
import VanFastIcon from "@/components/icons/VanFastIcon";
import { StoreBenefitProps } from "@/types/props";
import { Star } from "lucide-react";
import Image from "next/image";
import Avatar from "@/assets/avatar.png";
import Rating from "@/components/products/Rating";
import RegisterForm from "@/components/auth/RegisterForm";

const benefits: StoreBenefitProps["benefits"] = [
  {
    title: "Premium Quality",
    description: "Premium quality products sourced from trusted suppliers.",
    icon: { node: <Star className="m-auto fill-current" /> },
  },
  {
    title: "Fast Delivery",
    description: "Same-day delivery available in most areas",
    icon: {
      node: <VanFastIcon />,
    },
  },
  {
    title: "Secure Shopping",
    description: "Your data and payments are completely secure",
    icon: {
      node: <ShieldIcon size="size-6" />,
    },
  },
];

export default function Register() {
  return (
    <main className="min-h-screen py-10">
      <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h1 className="text-4xl font-bold text-gray-700 mb-2">
            Welcome to <span className="text-primary-main">FreshCart</span>
          </h1>
          <p className="text-xl font-medium text-gray-700">
            Join thousands of happy customers who enjoy fresh groceries
            delivered right to their doorstep.
          </p>
          <ul className="py-6 grid grid-cols-1 gap-6">
            {benefits.map(({ title, description, icon }) => (
              <li key={title} className="flex gap-4">
                <div className="size-12 shrink-0 rounded-full bg-primary-200 text-primary-main flex">
                  {icon.node}
                </div>

                <div>
                  <h4 className="font-semibold text-gray-700 text-lg">
                    {title}
                  </h4>
                  <p className="text-gray-600 text-base font-medium">
                    {description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <div className="p-4 rounded-md shadow-sm">
            <div className="flex gap-4 mb-4">
              <div className="relative size-12">
                <Image src={Avatar} alt="Avatar" fill sizes="48" />
              </div>
              <div>
                <h3 className="text-base font-medium text-gray-700">
                  Sarah Johnson
                </h3>
                <Rating rating={5} />
              </div>
            </div>

            <blockquote className="font-medium italic text-base text-gray-600">
              &quot;FreshCart has transformed my shopping experience. The
              quality of the products is outstanding, and the delivery is always
              on time. Highly recommend!&quot;
            </blockquote>
          </div>
        </div>

        <RegisterForm />
      </div>
    </main>
  );
}
