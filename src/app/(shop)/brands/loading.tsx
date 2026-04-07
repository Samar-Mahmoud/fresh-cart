import { Skeleton } from "@/components/ui/skeleton";

export default function loading() {
  return (
    <div className="min-h-screen">
      <Skeleton className="h-56 w-full" />

      <div className="container mx-auto px-4 py-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-5">
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={index}
            className="p-4 rounded-2xl border border-gray-100 shadow-sm"
          >
            <Skeleton className="aspect-square rounded-xl bg-gray-50 p-4 mb-3 overflow-hidden" />

            <Skeleton className="h-4 w-full mx-auto" />
          </div>
        ))}
      </div>
    </div>
  );
}
