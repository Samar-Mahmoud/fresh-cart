import { Skeleton } from "@/components/ui/skeleton";

export default function loading() {
  return (
    <div className="min-h-screen">
      <Skeleton className="h-56 w-full" />

      <div className="container mx-auto px-4 py-8">
        <Skeleton className="w-lg h-4 mb-6" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <Skeleton className="w-full h-60 rounded-none" />

              <div className="p-4 flex flex-col gap-1">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
