import { RotateCcw } from "lucide-react";
import VanIcon from "@/components/icons/VanIcon";
import HeadSetIcon from "@/components/icons/HeadsetIcon";

export default function StoreBenefits() {
  return (
    <div className="bg-primary-50 border-y border-primary-100 px-4 py-6">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="flex items-center gap-3">
          <div className="size-12 shrink-0 rounded-xl bg-primary-100 text-primary-600 flex">
            <VanIcon size="size-6" />
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 text-sm">
              Free Shipping
            </h4>
            <p className="text-gray-500 text-xs font-medium">
              On orders over 500 EGP
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="size-12 shrink-0 rounded-xl bg-primary-100 text-primary-600 flex">
            <RotateCcw className="m-auto size-6" width="23" height="18" />
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 text-sm">
              Easy Returns
            </h4>
            <p className="text-gray-500 text-xs font-medium">
              14-day return policy
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="size-12 shrink-0 rounded-xl bg-primary-100 text-primary-600 flex">
            <svg
              className="m-auto size-6"
              width="23"
              height="18"
              viewBox="0 0 23 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.25 0C11.4118 0 11.5735 0.0351563 11.7211 0.101953L18.3446 2.91094C19.118 3.23789 19.6946 4.00078 19.6911 4.92188C19.6735 8.40938 18.2391 14.7902 12.1817 17.6906C11.5946 17.9719 10.9125 17.9719 10.3254 17.6906C4.26449 14.7902 2.83363 8.40938 2.81606 4.92188C2.81254 4.00078 3.3891 3.23789 4.16254 2.91094L10.7825 0.101953C10.9301 0.0351563 11.0883 0 11.25 0ZM11.25 2.34844V15.641C16.1016 13.2926 17.4059 8.08945 17.4375 4.97461L11.25 2.35195V2.34844Z"
                fill="currentColor"
              />
            </svg>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 text-sm">
              Secure Payment
            </h4>
            <p className="text-gray-500 text-xs font-medium">
              100% secure checkout
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="size-12 shrink-0 rounded-xl bg-primary-100 text-primary-600 flex">
            <HeadSetIcon size="size-6" />
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 text-sm">
              24/7 Support
            </h4>
            <p className="text-gray-500 text-xs font-medium">
              Contact us anytime
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
