import CartIcon from "@/components/icons/CartIcon";
import BackButton from "@/components/shared/BackButton";
import { Apple, Carrot, Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#fafbfc] flex items-center justify-center px-2 py-16 relative overflow-hidden">
      {/* Background */}
      <div>
        <div className="absolute top-[10%] left-[5%] text-primary-200 motion-safe:animate-[float_6s_ease-in-out_infinite]">
          <Apple className="size-10 fill-current" />
        </div>

        <div className="absolute top-[20%] right-[10%] text-primary-200 motion-safe:animate-[float_8s_ease-in-out_infinite_1s]">
          <Carrot className="size-10" />
        </div>

        <div className="absolute bottom-[25%] left-[8%] text-primary-200 motion-safe:animate-[float_7s_ease-in-out_infinite_0.5s]">
          <svg className="size-10" viewBox="0 0 448 512" aria-hidden="true">
            <path
              fill="currentColor"
              d="M448 96c0-35.3-28.7-64-64-64-6.6 0-13 1-19 2.9-22.5 7-48.1 14.9-71 9-75.2-19.1-156.4 11-213.7 68.3S-7.2 250.8 11.9 326c5.8 22.9-2 48.4-9 71-1.9 6-2.9 12.4-2.9 19 0 35.3 28.7 64 64 64 6.6 0 13-1 19.1-2.9 22.5-7 48.1-14.9 71-9 75.2 19.1 156.4-11 213.7-68.3S455.2 261.2 436.1 186c-5.8-22.9 2-48.4 9-71 1.9-6 2.9-12.4 2.9-19.1zM222.7 143c-52 15.2-96.5 59.7-111.7 111.7-3.7 12.7-17.1 20-29.8 16.3S61.2 254 65 241.3c19.8-67.7 76.6-124.5 144.3-144.3 12.7-3.7 26.1 3.6 29.8 16.3s-3.6 26.1-16.3 29.8z"
            />
          </svg>
        </div>

        <div className="absolute bottom-[15%] right-[15%] text-primary-200 motion-safe:animate-[float_9s_ease-in-out_infinite_2s]">
          <svg className="size-10" viewBox="0 0 512 512" aria-hidden="true">
            <path
              fill="currentColor"
              d="M512 32C512 140.1 435.4 230.3 333.6 251.4 325.7 193.3 299.6 141 261.1 100.5 301.2 40 369.9 0 448 0l32 0c17.7 0 32 14.3 32 32zM0 96C0 78.3 14.3 64 32 64l32 0c123.7 0 224 100.3 224 224l0 192c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-160C100.3 320 0 219.7 0 96z"
            />
          </svg>
        </div>

        <div className="absolute top-[50%] left-[15%] text-primary-100 motion-safe:animate-[float_5s_ease-in-out_infinite_1.5s]">
          <Apple className="size-10 fill-current" />
        </div>

        <div className="absolute top-[40%] right-[5%] text-primary-100 motion-safe:animate-[float_6s_ease-in-out_infinite_0.8s]">
          <Carrot className="size-10" />
        </div>

        <div className="absolute top-0 right-0 size-125 bg-linear-to-bl from-primary-100/40 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 size-100 bg-linear-to-tr from-primary-100/30 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-xl flex flex-col items-center">
        <div className="relative w-64 h-52 sm:w-72 sm:h-60 flex items-center justify-center mb-10">
          <div className="w-52 h-40 sm:w-60 sm:h-44 flex bg-linear-to-br from-primary-50/80 via-transparent to-primary-100/40 rounded-3xl shadow-xl shadow-gray-200/60 border border-gray-100">
            <CartIcon className="size-20 text-primary-400 m-auto" />
          </div>

          <div className="absolute -top-2 -right-2 sm:top-0 sm:right-0 z-20">
            <div className="rounded-full bg-white shadow-lg p-2">
              <div className="size-16 sm:size-20 rounded-full bg-linear-to-br from-primary-500 to-primary-600 flex shadow-lg shadow-primary-500/40">
                <span className="m-auto text-xl sm:text-2xl font-bold text-white">
                  404
                </span>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex gap-4">
            <div className="w-2.5 h-2.5 rounded-full bg-primary-400" />
            <div className="w-8 h-4 border-b-[3px] border-primary-400 rounded-b-full" />
            <div className="w-2.5 h-2.5 rounded-full bg-primary-400" />
          </div>
        </div>

        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Oops! Nothing Here
          </h1>
          <p className="text-gray-500 text-lg max-w-md mx-auto">
            Looks like this page went out of stock! Don&apos;t worry,
            there&apos;s plenty more fresh content to explore.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Link
            href="/"
            className="flex items-center justify-center gap-3 bg-primary-main text-white py-4 px-8 rounded-2xl font-bold text-base shadow-md hover:bg-primary-600 transition-colors"
          >
            <Home />
            Go to Homepage
          </Link>

          <BackButton />
        </div>

        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6">
          <p className="text-center text-sm font-medium text-gray-400 uppercase mb-4">
            Popular Destinations
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/products"
              className="px-5 py-2.5 rounded-xl bg-primary-50 text-primary-700 font-semibold text-sm hover:bg-primary-100 transition-colors"
            >
              All Products
            </Link>
            <Link
              href="/categories"
              className="px-5 py-2.5 rounded-xl bg-gray-100 text-gray-700 font-semibold text-sm hover:bg-gray-200 transition-colors"
            >
              Categories
            </Link>
            <Link
              href="/deals"
              className="px-5 py-2.5 rounded-xl bg-gray-100 text-gray-700 font-semibold text-sm hover:bg-gray-200 transition-colors"
            >
              Today&apos;s Deals
            </Link>
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-xl bg-gray-100 text-gray-700 font-semibold text-sm hover:bg-gray-200 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
