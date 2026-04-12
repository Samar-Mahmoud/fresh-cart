"use client";

import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { SearchFiltersProps } from "@/types/props";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const ranges = [
  { value: 500 },
  { value: 1000, text: "1K" },
  { value: 5000, text: "5K" },
  { value: 10000, text: "10K" },
];

export default function SearchFilters({
  categories,
  brands,
}: SearchFiltersProps) {
  const searchParams = useSearchParams();

  const [current, setCurrent] = useState<{
    categories: string[];
    brands: string[];
    lte: string | null;
    gte: string | null;
  }>({
    brands: [],
    categories: [],
    gte: null,
    lte: null,
  });

  const router = useRouter();

  const updateCurrent = (params: URLSearchParams): void => {
    const categories = params.getAll("category");
    const brands = params.getAll("brand");
    const lte = params.get("price[lte]");
    const gte = params.get("price[gte]");
    setCurrent({
      categories,
      brands,
      lte,
      gte,
    });
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    updateCurrent(searchParams);
  }, [searchParams]);

  const handleChange = (key: string, value: string): void => {
    const params = new URLSearchParams(searchParams.toString());
    if (!value || params.get(key) === value) {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    params.delete("page");
    router.replace(`/search?${params.toString()}`);
  };

  const toggle = (key: "category" | "brand", value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    const current = params.getAll(key);

    if (current.includes(value)) {
      const updated = current.filter((c) => c !== value);
      params.delete(key);
      updated.forEach((c) => params.append(key, c));
    } else {
      params.append(key, value);
    }
    params.delete("page");
    router.replace(`/search?${params.toString()}`);
  };

  return (
    <div className="space-y-6">
      <FieldSet className="gap-4">
        <FieldLegend className="font-bold text-gray-900 flex justify-between items-center w-full">
          Categories
          <span className="text-primary-main text-xs font-medium">
            {current.categories.length} selected
          </span>
        </FieldLegend>
        <FieldGroup className="max-h-52 gap-2 overflow-auto">
          {categories.map((cat) => (
            <Field key={cat._id} orientation="horizontal">
              <Checkbox
                id={cat._id}
                name={cat.name}
                className="rounded-[2.5px] bg-white border-[#767676]"
                onCheckedChange={() => toggle("category", cat._id)}
                checked={current.categories.includes(cat._id)}
              />
              <FieldLabel htmlFor={cat._id} className="text-gray-600">
                {cat.name}
              </FieldLabel>
            </Field>
          ))}
        </FieldGroup>
      </FieldSet>

      <Separator className="bg-gray-100" />

      <FieldSet className="gap-4">
        <FieldLegend className="font-bold text-gray-900">
          Price Range
        </FieldLegend>
        <FieldGroup className="gap-3">
          <div className="flex gap-3">
            <Field className="gap-1">
              <FieldLabel htmlFor="price-min" className="text-xs text-gray-500">
                Min (EGP)
              </FieldLabel>
              <Input
                id="price-min"
                name="price[gte]"
                type="number"
                min={0}
                value={
                  current.gte && !Number.isNaN(+current.gte) ? +current.gte : ""
                }
                placeholder="0"
                className="flex-1 rounded-lg border-gray-200 bg-white placeholder:text-gray-700/50 placeholder:font-medium"
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              />
            </Field>
            <Field className="gap-1">
              <FieldLabel htmlFor="price-max" className="text-xs text-gray-500">
                Max (EGP)
              </FieldLabel>
              <Input
                id="price-max"
                name="price[lte]"
                type="number"
                min={0}
                value={
                  current.lte && !Number.isNaN(+current.lte) ? +current.lte : ""
                }
                placeholder="No limit"
                className="flex-1 rounded-lg border-gray-200 bg-white placeholder:text-gray-700/50 placeholder:font-medium"
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              />
            </Field>
          </div>

          <div className="flex gap-2 flex-wrap">
            {ranges.map(({ value, text }) => (
              <Button
                key={value}
                className={`rounded-full text-xs ${current.lte && !Number.isNaN(+current.lte) && +current.lte === value ? "bg-primary-main text-white hover:bg-primary-800 " : "text-gray-600 bg-gray-100 hover:bg-gray-200"}`}
                onClick={() => handleChange("price[lte]", value.toString())}
              >
                Under {text || value}
              </Button>
            ))}
          </div>
        </FieldGroup>
      </FieldSet>

      <Separator className="bg-gray-100" />

      <FieldSet className="gap-4">
        <FieldLegend className="font-bold text-gray-900 flex items-center justify-between w-full">
          Brands
          <span className="text-primary-main text-xs font-medium">
            {current.brands.length} selected
          </span>
        </FieldLegend>
        <FieldGroup className="max-h-52 gap-2 overflow-auto">
          {brands.map((brand) => (
            <Field key={brand._id} orientation="horizontal">
              <Checkbox
                id={brand._id}
                name={brand.name}
                className="rounded-[2.5px] bg-white border-[#767676]"
                onCheckedChange={() => toggle("brand", brand._id)}
                checked={current.brands.includes(brand._id)}
              />
              <FieldLabel htmlFor={brand._id} className="text-gray-600">
                {brand.name}
              </FieldLabel>
            </Field>
          ))}
        </FieldGroup>
      </FieldSet>
    </div>
  );
}
