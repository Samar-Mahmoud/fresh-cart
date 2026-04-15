import { Skeleton } from "@/components/ui/skeleton";

export default function loading() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <div className="space-y-1 flex-1 min-w-0">
          <Skeleton className="h-6 w-1/4" />
          <Skeleton className="h-6 w-1/2" />
        </div>

        <Skeleton className="h-10 w-30" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {Array.from({ length: 3 }).map((_, index) => (
          <Skeleton key={index} className="h-30" />
        ))}
      </div>
    </div>
  );
}
