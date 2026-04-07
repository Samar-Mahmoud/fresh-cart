import { Skeleton } from "@/components/ui/skeleton";

export default function loading() {
  return (
    <div className="min-h-screen">
      <Skeleton className="h-56 w-full" />

      <div className="container mx-auto px-4 py-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className="p-6.25 rounded-2xl border border-gray-100 shadow-sm"
          >
            <Skeleton className="aspect-square rounded-xl mb-4" />

            <Skeleton className="h-4 w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
