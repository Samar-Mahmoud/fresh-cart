import SignInForm from "@/components/auth/SignInForm";
import Image from "next/image";
import LoginImage from "@/assets/loginImage.png";
import VanIcon from "@/components/icons/VanIcon";
import ShieldIcon from "@/components/icons/ShieldIcon";
import { Clock, Star } from "lucide-react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

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
                <VanIcon className="size-4.5 text-primary-main" />
                <span className="text-sm text-gray-500 font-medium">
                  Free Delivery
                </span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldIcon className="text-primary-main m-auto size-4.5" />
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

        <Card className="p-8 gap-8 rounded-2xl">
          <CardHeader className="p-0 text-center gap-2">
            <CardTitle className="text-3xl font-semibold text-gray-700 flex flex-col gap-4">
              <span>
                Fresh<span className="text-primary-main">Cart</span>
              </span>
              <span>Welcome Back!</span>
            </CardTitle>
            <CardDescription className="text-base text-gray-700 font-medium">
              Sign in to continue your fresh shopping experience
            </CardDescription>
          </CardHeader>

          <SignInForm />

          <CardFooter className="pt-6 px-0 border-t border-gray-300/30 flex-col gap-6">
            <p className="text-base font-medium text-gray-700 text-center">
              New to FreshCart?{" "}
              <Link href="/register" className="text-primary-main">
                Create an account
              </Link>
            </p>

            <div className="flex items-center justify-center gap-6 flex-wrap">
              <span className="flex items-center gap-1 text-gray-500 text-xs font-medium ">
                <svg
                  className="size-4"
                  width="20"
                  height="17"
                  viewBox="0 0 20 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 4V6H12V4C12 2.89687 11.1031 2 10 2C8.89687 2 8 2.89687 8 4ZM6 6V4C6 1.79063 7.79063 0 10 0C12.2094 0 14 1.79063 14 4V6C15.1031 6 16 6.89687 16 8V15C16 16.1031 15.1031 17 14 17H6C4.89688 17 4 16.1031 4 15V8C4 6.89687 4.89688 6 6 6Z"
                    fill="currentColor"
                  />
                </svg>
                SSL Secured
              </span>
              <span className="flex items-center gap-1 text-gray-500 text-xs font-medium">
                <svg
                  className="size-4"
                  width="15"
                  height="12"
                  viewBox="0 0 15 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 0.375C8.14647 0.375 8.76645 0.631807 9.22357 1.08893C9.68069 1.54605 9.9375 2.16603 9.9375 2.8125C9.9375 3.45897 9.68069 4.07895 9.22357 4.53607C8.76645 4.99319 8.14647 5.25 7.5 5.25C6.85353 5.25 6.23355 4.99319 5.77643 4.53607C5.31931 4.07895 5.0625 3.45897 5.0625 2.8125C5.0625 2.16603 5.31931 1.54605 5.77643 1.08893C6.23355 0.631807 6.85353 0.375 7.5 0.375ZM2.25 2.0625C2.47161 2.0625 2.69104 2.10615 2.89578 2.19095C3.10052 2.27576 3.28654 2.40006 3.44324 2.55676C3.59994 2.71346 3.72424 2.89948 3.80905 3.10422C3.89385 3.30896 3.9375 3.52839 3.9375 3.75C3.9375 3.97161 3.89385 4.19104 3.80905 4.39578C3.72424 4.60052 3.59994 4.78654 3.44324 4.94324C3.28654 5.09994 3.10052 5.22424 2.89578 5.30905C2.69104 5.39385 2.47161 5.4375 2.25 5.4375C2.02839 5.4375 1.80896 5.39385 1.60422 5.30905C1.39948 5.22424 1.21346 5.09994 1.05676 4.94324C0.900058 4.78654 0.775758 4.60052 0.690953 4.39578C0.606148 4.19104 0.5625 3.97161 0.5625 3.75C0.5625 3.52839 0.606148 3.30896 0.690953 3.10422C0.775758 2.89948 0.900058 2.71346 1.05676 2.55676C1.21346 2.40006 1.39948 2.27576 1.60422 2.19095C1.80896 2.10615 2.02839 2.0625 2.25 2.0625ZM0 9.75C0 8.09297 1.34297 6.75 3 6.75C3.3 6.75 3.59062 6.79453 3.86484 6.87656C3.09375 7.73906 2.625 8.87813 2.625 10.125V10.5C2.625 10.7672 2.68125 11.0203 2.78203 11.25H0.75C0.335156 11.25 0 10.9148 0 10.5V9.75ZM12.218 11.25C12.3187 11.0203 12.375 10.7672 12.375 10.5V10.125C12.375 8.87813 11.9062 7.73906 11.1352 6.87656C11.4094 6.79453 11.7 6.75 12 6.75C13.657 6.75 15 8.09297 15 9.75V10.5C15 10.9148 14.6648 11.25 14.25 11.25H12.218ZM11.0625 3.75C11.0625 3.30245 11.2403 2.87322 11.5568 2.55676C11.8732 2.24029 12.3024 2.0625 12.75 2.0625C13.1976 2.0625 13.6268 2.24029 13.9432 2.55676C14.2597 2.87322 14.4375 3.30245 14.4375 3.75C14.4375 4.19755 14.2597 4.62677 13.9432 4.94324C13.6268 5.25971 13.1976 5.4375 12.75 5.4375C12.3024 5.4375 11.8732 5.25971 11.5568 4.94324C11.2403 4.62677 11.0625 4.19755 11.0625 3.75ZM3.75 10.125C3.75 8.05312 5.42812 6.375 7.5 6.375C9.57187 6.375 11.25 8.05312 11.25 10.125V10.5C11.25 10.9148 10.9148 11.25 10.5 11.25H4.5C4.08516 11.25 3.75 10.9148 3.75 10.5V10.125Z"
                    fill="#6A7282"
                  />
                </svg>
                50K+ Users
              </span>
              <div className="flex items-center gap-1 text-gray-500 text-xs">
                <Star className="fill-current size-4" />
                4.9 Rating
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
