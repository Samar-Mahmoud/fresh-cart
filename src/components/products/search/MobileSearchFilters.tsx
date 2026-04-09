"use client";

import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  Button,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
  Separator,
} from "@/components/ui";
import { SlidersHorizontal, XIcon } from "lucide-react";
import SearchFilters from "./SearchFilters";
import { SearchFiltersProps } from "@/types/props";
import useDrawerHandler from "@/hooks/useDrawerHandler";

export default function MobileSearchFilters({
  categories,
  brands,
}: SearchFiltersProps) {
  const { isOpen, setIsOpen } = useDrawerHandler();

  return (
    <Drawer direction="right" open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <Button className="lg:hidden gap-2 px-4 py-4 text-gray-700 bg-white rounded-lg hover:bg-white/50 border-gray-200">
          <SlidersHorizontal className="size-4" />
          Filters
        </Button>
      </DrawerTrigger>

      <DrawerContent className="items-stretch">
        <DrawerHeader className="flex-row items-center justify-between p-4 bg-gray-50/50">
          <DrawerTitle className="text-gray-900 text-lg flex items-center gap-3">
            <SlidersHorizontal className="size-5" />
            Filters
          </DrawerTitle>
          <DrawerDescription className="invisible">
            Product Search Filters
          </DrawerDescription>

          <DrawerClose asChild>
            <Button
              size="icon"
              className="rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800"
            >
              <XIcon width="20" height="16" />
            </Button>
          </DrawerClose>
        </DrawerHeader>

        <Separator />

        <div className="p-4 no-scrollbar overflow-y-auto">
          <SearchFilters categories={categories} brands={brands} />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
