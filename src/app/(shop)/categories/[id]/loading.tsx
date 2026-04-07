import { Skeleton } from "@/components/ui/skeleton";

export default function loading() {
  return (
    <div className="min-h-screen">
      <Skeleton className="h-56 w-full" />

      <div className="container mx-auto px-4 py-8">
        <Skeleton className="w-md h-4 mb-6" />
        <Skeleton className="w-lg h-4 mb-6" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="p-6 border border-gray-100 rounded-2xl shadow-sm"
            >
              <Skeleton className="size-14 rounded-xl mb-4" />

              <Skeleton className="h-4 w-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
