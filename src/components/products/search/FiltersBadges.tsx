import { Badge } from "@/components/ui";
import { SearchResultsProps } from "@/types/props";
import { Filter, XIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

const styles: Record<keyof SearchResultsProps["filters"], string> = {
  keyword: "bg-gray-100 text-gray-700",
  category: "bg-primary-100 text-primary-700",
  brand: "bg-violet-100 text-violet-700",
  price: "bg-amber-100 text-amber-700",
};

export default function FiltersBadges({
  filters,
}: {
  filters: SearchResultsProps["filters"];
}) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const badges = Object.entries(filters);

  const handleClear = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (["category", "brand"].includes(key)) {
      const current = params.getAll(key);
      if (current.includes(value)) {
        const updated = current.filter((c) => c !== value);
        params.delete(key);
        updated.forEach((c) => params.append(key, c));
      }
    } else if (key === "price") {
      params.delete("price[gte]");
      params.delete("price[lte]");
    } else {
      params.delete(key);
    }

    router.replace(`/search?${params.toString()}`);
  };

  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-sm text-gray-500 flex items-center gap-1 mr-4">
        <Filter className="size-3 fill-current" />
        Active:
      </span>

      {badges.flatMap(([key, value]) => {
        const items = Array.isArray(value) ? value : [value];
        return items.map((badge) => (
          <Badge
            key={badge.value}
            className={`cursor-pointer ${styles[key as keyof SearchResultsProps["filters"]]}`}
            onClick={() => handleClear(key, badge.value)}
          >
            {"label" in badge ? `${badge.label}` : badge.value}
            <XIcon className="size-3" />
          </Badge>
        ));
      })}

      {!filters.price && <Badge className={styles.price}>0 - ∞ EGP</Badge>}

      {badges.length > 0 && (
        <span
          className="text-xs underline ml-4 cursor-pointer text-gray-500 hover:text-red-700 transition-colors"
          onClick={() => router.replace(`/search`)}
        >
          Clear all
        </span>
      )}
    </div>
  );
}
