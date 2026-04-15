import Header from "@/components/shared/Header";
import { Separator } from "@/components/ui/separator";
import { Spinner } from "@/components/ui/spinner";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight, Settings } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen bg-gray-50/50">
      <Header
        classes="from-primary-main via-primary-600 to-[#4ade80]"
        title="My Account"
        description="Manage your addresses and account settings"
        links={[{ label: "Home", href: "/" }]}
      >
        <svg
          className="m-auto"
          width="38"
          height="30"
          viewBox="0 0 38 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.75 14.5312C19.6734 14.5312 20.5877 14.3494 21.4407 13.996C22.2938 13.6427 23.0689 13.1248 23.7218 12.4718C24.3748 11.8189 24.8927 11.0438 25.246 10.1907C25.5994 9.33767 25.7812 8.42336 25.7812 7.5C25.7812 6.57664 25.5994 5.66233 25.246 4.80926C24.8927 3.95619 24.3748 3.18107 23.7218 2.52816C23.0689 1.87524 22.2938 1.35733 21.4407 1.00397C20.5877 0.650619 19.6734 0.46875 18.75 0.46875C17.8266 0.46875 16.9123 0.650619 16.0593 1.00397C15.2062 1.35733 14.4311 1.87524 13.7782 2.52816C13.1252 3.18107 12.6073 3.95619 12.254 4.80926C11.9006 5.66233 11.7188 6.57664 11.7188 7.5C11.7188 8.42336 11.9006 9.33767 12.254 10.1907C12.6073 11.0438 13.1252 11.8189 13.7782 12.4718C14.4311 13.1248 15.2062 13.6427 16.0593 13.996C16.9123 14.3494 17.8266 14.5312 18.75 14.5312ZM17.0098 17.8125C11.2383 17.8125 6.5625 22.4883 6.5625 28.2598C6.5625 29.2207 7.3418 30 8.30273 30H29.1973C30.1582 30 30.9375 29.2207 30.9375 28.2598C30.9375 22.4883 26.2617 17.8125 20.4902 17.8125H17.0098Z"
            fill="white"
          />
        </svg>
      </Header>

      <div className="py-8 px-4 container mx-auto">
        <Tabs
          defaultValue="addresses"
          className="gap-6 flex-col lg:flex-row"
          orientation="vertical"
        >
          <TabsList className="lg:max-w-72 w-full rounded-2xl shadow-md border border-gray-200 bg-white items-start">
            <h2 className="p-4 text-base font-bold text-gray-900">
              My Account
            </h2>

            <Separator className="bg-gray-200" />

            <div className="p-2 space-y-1 w-full">
              <TabsTrigger
                value="addresses"
                className="group/trigger px-4 py-3 rounded-lg text-left"
              >
                <Link
                  href="/profile/addresses"
                  className="flex gap-3 items-center w-full"
                >
                  <div className="group-data-[state=active]/trigger:bg-primary-600 group-data-[state=active]/trigger:text-white bg-gray-200 text-gray-600 size-9 rounded-lg flex transition-colors">
                    <svg
                      className="m-auto size-4.5"
                      width="18"
                      height="15"
                      viewBox="0 0 18 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.49883 5.15703C3.49883 2.30781 5.85039 0 8.74883 0C11.6473 0 13.9988 2.30781 13.9988 5.15703C13.9988 8.41914 10.7121 12.3293 9.33945 13.8195C9.0168 14.1695 8.47813 14.1695 8.15547 13.8195C6.78281 12.3293 3.49609 8.41914 3.49609 5.15703H3.49883ZM8.74883 7C9.21296 7 9.65808 6.81563 9.98627 6.48744C10.3145 6.15925 10.4988 5.71413 10.4988 5.25C10.4988 4.78587 10.3145 4.34075 9.98627 4.01256C9.65808 3.68437 9.21296 3.5 8.74883 3.5C8.2847 3.5 7.83958 3.68437 7.51139 4.01256C7.1832 4.34075 6.99883 4.78587 6.99883 5.25C6.99883 5.71413 7.1832 6.15925 7.51139 6.48744C7.83958 6.81563 8.2847 7 8.74883 7Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h3 className="font-medium text-base flex-1 min-w-0">
                    My Addresses
                  </h3>
                  <ChevronRight className="size-4" strokeWidth={2} />
                </Link>
              </TabsTrigger>

              <TabsTrigger
                value="settings"
                className="group/trigger px-4 py-3 rounded-lg text-left"
              >
                <Link
                  href="/profile/settings"
                  className="flex gap-3 items-center w-full"
                >
                  <div className="group-data-[state=active]/trigger:bg-primary-600 group-data-[state=active]/trigger:text-white bg-gray-200 text-gray-600 size-9 rounded-lg flex">
                    <Settings className="m-auto size-4" />
                  </div>
                  <h3 className="font-medium text-base flex-1 min-w-0">
                    Settings
                  </h3>
                  <ChevronRight className="size-4" strokeWidth={2} />
                </Link>
              </TabsTrigger>
            </div>
          </TabsList>

          <Suspense
            fallback={
              <div className="h-75 flex items-center justify-center flex-1">
                <Spinner className="size-6 text-primary-main" />
              </div>
            }
          >
            {children}
          </Suspense>
        </Tabs>
      </div>
    </main>
  );
}
