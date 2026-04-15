import { Skeleton } from "@/components/ui/skeleton";

export default function loading() {
  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <Skeleton className="h-6 w-1/4" />
        <Skeleton className="h-6 w-1/2" />
      </div>

      <Skeleton className="w-full h-120 rounded-3xl" />
      <Skeleton className="w-full h-120 rounded-3xl" />
    </div>
  );
}
