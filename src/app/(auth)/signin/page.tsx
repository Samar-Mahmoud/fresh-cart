import SignInForm from "@/components/auth/SignInForm";
import Image from "next/image";
import LoginImage from "@/assets/loginImage.png";
import VanIcon from "@/components/icons/VanIcon";
import ShieldIcon from "@/components/icons/ShieldIcon";
import { Clock } from "lucide-react";

export default function Login() {
  return (
    <main className="min-h-screen py-16">
      <div className="max-w-2xl lg:max-w-7xl mx-auto p-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="hidden lg:flex flex-col justify-center gap-6">
          <div className="relative h-96 rounded-2xl shadow-lg">
            <Image
              fill
              className="object-contain"
              alt="fresh vegetables and fruits shopping cart illustration, modern clean style, green theme"
              src={LoginImage}
              sizes="384"
              loading="eager"
            />
          </div>

          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold text-gray-800">
              FreshCart - Your One-Stop Shop for Fresh Products
            </h2>
            <p className="text-lg text-gray-600 font-medium">
              Join thousands of happy customers who trust FreshCart for their
              daily grocery needs
            </p>

            <div className="flex items-center justify-center gap-8">
              <div className="flex items-center gap-2">
                <div className="text-primary-main">
                  <VanIcon size="size-4.5" />
                </div>
                <span className="text-sm text-gray-500 font-medium">
                  Free Delivery
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-primary-main">
                  <ShieldIcon size="size-4.5" />
                </div>
                <span className="text-sm text-gray-500 font-medium">
                  Secure Payment
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-primary-main">
                  <Clock className="size-4" />
                </div>
                <span className="text-sm text-gray-500 font-medium">
                  24/7 Support
                </span>
              </div>
            </div>
          </div>
        </div>

        <SignInForm />
      </div>
    </main>
  );
}
