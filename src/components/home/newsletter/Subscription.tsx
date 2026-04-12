import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import MailIcon from "../../icons/MailIcon";
import VanIcon from "../../icons/VanIcon";
import MobileApp from "./MobileApp";
import SubscriptionForm from "./SubscriptionForm";

export default function Subscription() {
  return (
    <div className="grid grid-cols-5 gap-8 overflow-hidden rounded-[40px] border border-emerald-100/50 shadow-lg relative p-8 lg:p-14">
      <div className="absolute -z-1 inset-0 bg-linear-to-br from-gray-100 via-white to-red-50 before:rounded-full before:absolute before:size-80 before:bg-linear-to-br before:from-emerald-200/40 before:to-white/80 before:blur-lg before:-top-40.25 before:-right-20.25 after:rounded-full after:absolute after:size-64 after:bg-linear-to-bl after:from-teal-200/30 after:to-white/70 after:blur-lg after:-bottom-32.25 after:-left-16.25"></div>

      <Card className="col-span-5 lg:col-span-3 py-0 rounded-none shadow-none ring-0 bg-transparent">
        <CardHeader className="px-0 gap-0">
          <div className="flex gap-4 items-center mb-6">
            <div className="size-14 rounded-2xl text-white bg-linear-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
              <MailIcon size="size-6" />
            </div>

            <div className="">
              <h3 className="text-sm uppercase font-semibold text-primary-800">
                Newsletter
              </h3>
              <span className="text-xs font-medium text-gray-500">
                50,000+ subscribers
              </span>
            </div>
          </div>

          <CardTitle className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Get the Freshest Updates
            <span className="text-primary-800"> Delivered Free</span>
          </CardTitle>

          <CardDescription className="text-lg font-medium text-gray-500">
            Weekly recipes, seasonal offers & exclusive member perks.
          </CardDescription>
        </CardHeader>

        <CardContent className="px-0 flex flex-col gap-6">
          <div className="flex flex-wrap gap-3 items-start">
            <div className="flex gap-2.5 items-center bg-white/80 rounded-full border border-emerald-100 shadow-sm px-4 py-2.5">
              <div className="size-7 rounded-full bg-emerald-100 text-primary-800 flex">
                <svg
                  className="m-auto"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="28" height="28" rx="14" fill="#D0FAE5" />
                  <path
                    d="M19.0461 8.15706C19.1961 8.01409 19.4141 7.96253 19.6156 8.02816C19.8453 8.1055 20 8.32113 20 8.56253V12.943C20 16.018 17.4664 18.5 14.4031 18.5C12.5984 18.5 11.0422 17.3399 10.4773 15.718C9.64766 16.4399 9.125 17.5016 9.125 18.6875C9.125 18.9993 8.87422 19.25 8.5625 19.25C8.25078 19.25 8 18.9993 8 18.6875C8 16.9321 8.89531 15.3852 10.2523 14.4758C11.0797 13.9227 12.0664 13.625 13.0625 13.625H14.9375C15.2492 13.625 15.5 13.3743 15.5 13.0625C15.5 12.7508 15.2492 12.5 14.9375 12.5H13.0625C12.132 12.5 11.2508 12.7063 10.4609 13.0743C11.007 11.4336 12.5516 10.25 14.375 10.25C15.9313 10.25 17.0891 9.73206 17.8602 9.21878C18.3102 8.91878 18.6922 8.56019 19.0484 8.15706H19.0461Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-700">
                Fresh Picks Weekly
              </span>
            </div>

            <div className="flex gap-2.5 items-center bg-white/80 rounded-full border border-emerald-100 shadow-sm px-4 py-2.5">
              <div className="size-7 rounded-full bg-emerald-100 text-primary-800 flex">
                <VanIcon size="size-4" />
              </div>
              <span className="text-sm font-medium text-gray-700">
                Free Delivery Codes
              </span>
            </div>

            <div className="flex gap-2.5 items-center bg-white/80 rounded-full border border-emerald-100 shadow-sm px-4 py-2.5">
              <div className="size-7 rounded-full bg-emerald-100 text-primary-800 flex">
                <svg
                  className=" m-auto"
                  width="15"
                  height="12"
                  viewBox="0 0 15 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.26172 2.25V5.75391C2.26172 6.15234 2.41875 6.53437 2.7 6.81562L7.2 11.3156C7.78594 11.9016 8.73516 11.9016 9.32109 11.3156L12.825 7.81172C13.4109 7.22578 13.4109 6.27656 12.825 5.69062L8.325 1.19062C8.04375 0.907031 7.66406 0.75 7.26563 0.75H3.76172C2.93438 0.75 2.26172 1.42266 2.26172 2.25ZM4.88672 2.625C5.08563 2.625 5.2764 2.70402 5.41705 2.84467C5.5577 2.98532 5.63672 3.17609 5.63672 3.375C5.63672 3.57391 5.5577 3.76468 5.41705 3.90533C5.2764 4.04598 5.08563 4.125 4.88672 4.125C4.68781 4.125 4.49704 4.04598 4.35639 3.90533C4.21574 3.76468 4.13672 3.57391 4.13672 3.375C4.13672 3.17609 4.21574 2.98532 4.35639 2.84467C4.49704 2.70402 4.68781 2.625 4.88672 2.625Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-700">
                Members-Only Deals
              </span>
            </div>
          </div>

          <SubscriptionForm />
        </CardContent>
      </Card>

      <div className="col-span-5 lg:col-span-2 self-stretch py-3.75 lg:pl-8 lg:border-l lg:border-emerald-100">
        <MobileApp />
      </div>
    </div>
  );
}
