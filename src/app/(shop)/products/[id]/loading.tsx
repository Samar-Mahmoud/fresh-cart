import { Skeleton } from "@/components/ui";
import { ChevronRightIcon } from "lucide-react";

export default function loading() {
  return (
    <div className="min-h-screen p-4">
      <div className="flex gap-2 mb-10">
        <Skeleton className="w-18 h-4" />
        <ChevronRightIcon className="text-gray-400 size-3.5" />
        <Skeleton className="w-18 h-4" />
        <ChevronRightIcon className="text-gray-400 size-3.5" />
        <Skeleton className="w-18 h-4" />
        <ChevronRightIcon className="text-gray-400 size-3.5" />
        <Skeleton className="w-18 h-4" />
      </div>

      <div className="p-4 flex flex-col items-center lg:flex-row lg:items-start gap-8">
        <div className="max-w-md lg:w-1/4 lg:max-w-none p-4 rounded-xl shadow-sm">
          <Skeleton className="w-full h-72" />

          <div className="overflow-hidden h-28.5 flex items-center justify-center">
            <div className="flex gap-1">
              {Array.from({ length: 4 }).map((_, index) => (
                <Skeleton key={index} className="w-20.25 h-25.5 " />
              ))}
            </div>
          </div>
        </div>

        <div className="w-full rounded-xl shadow-sm p-4 flex flex-col flex-1">
          <div className="flex gap-2 mb-4">
            <Skeleton className="w-18 h-5" />
            <Skeleton className="w-18 h-5" />
          </div>

          <Skeleton className="w-1/2 h-8 mb-3" />
          <Skeleton className="w-1/2 h-8 mb-3" />
          <Skeleton className="w-1/3 h-8 mb-4" />
          <Skeleton className="w-3/4 h-14 mb-6" />
          <Skeleton className="w-full h-16 mb-6" />
          <Skeleton className="w-full h-16 mb-6" />
        </div>
      </div>
    </div>
  );
}
