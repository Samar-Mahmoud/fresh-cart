"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AddressData, schema } from "@/schema/address";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Plus } from "lucide-react";
import { Separator } from "../ui/separator";
import { addressAction } from "@/actions/addresses";
import { Address } from "@/types/addresses";
import { toast } from "sonner";
import { useState } from "react";
import { Spinner } from "../ui/spinner";

export default function AddressDialog({
  children,
  data,
  addressId,
}: {
  children: React.ReactNode;
  data?: AddressData;
  addressId?: Address["_id"];
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { handleSubmit, control } = useForm<AddressData>({
    defaultValues: data ?? {
      name: "",
      city: "",
      details: "",
      phone: "",
    },
    resolver: zodResolver(schema),
  });

  const handleAddressAction = async (data: AddressData) => {
    setIsLoading(true);

    const res = await addressAction(data, {
      isEdit: !!addressId,
      addressId,
    });

    if (res.isError) {
      toast.error(res.message);
    } else {
      toast.success(res.message);
    }

    setIsLoading(false);
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="sm:max-w-lg rounded-lg">
        <form
          onSubmit={handleSubmit(handleAddressAction)}
          className="flex flex-col gap-5"
        >
          <DialogHeader className="gap-1">
            <DialogTitle className="text-gray-900 font-bold text-lg">
              {addressId ? "Update" : "Add New"} Address
            </DialogTitle>
            <DialogDescription className="text-gray-400 font-medium text-xs">
              {addressId ? "Edit" : "Add a new"} delivery address to make
              checkout faster and easier
            </DialogDescription>
          </DialogHeader>

          <Separator className="bg-gray-200" />

          {/* Name */}
          <Controller
            name="name"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid} className="gap-2">
                <FieldLabel
                  htmlFor="name"
                  className="text-sm font-semibold text-gray-700 gap-0.5"
                >
                  Address Name
                </FieldLabel>
                <Input
                  {...field}
                  id="name"
                  name="name"
                  aria-invalid={fieldState.invalid}
                  placeholder="e.g. Home, Office"
                  className="text-gray-700 placeholder:text-gray-500/50 placeholder:font-base rounded-xl bg-transparent border-2 border-gray-200"
                />
                <FieldError
                  errors={[fieldState.error]}
                  className="font-medium text-xs"
                />
              </Field>
            )}
          />

          {/* Full Address */}
          <Controller
            name="details"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid} className="gap-2">
                <FieldLabel
                  htmlFor="details"
                  className="text-sm font-semibold text-gray-700 gap-0.5"
                >
                  Full Address
                  <span className="text-red-500">*</span>
                </FieldLabel>
                <Textarea
                  {...field}
                  id="details"
                  name="details"
                  aria-invalid={fieldState.invalid}
                  placeholder="Street name, building number, floor, apartment..."
                  className="h-13 rounded-xl bg-transparent border-2 border-gray-200 py-2.5 text-gray-700 placeholder:text-gray-700/50 placeholder:font-medium"
                />
                <FieldError
                  errors={[fieldState.error]}
                  className="font-medium text-xs"
                />
              </Field>
            )}
          />

          <FieldGroup className="flex-row gap-4">
            {/* Phone Number */}
            <Controller
              name="phone"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="gap-2">
                  <FieldLabel
                    htmlFor="phone"
                    className="text-sm font-semibold text-gray-700 gap-0.5"
                  >
                    Phone Number
                    <span className="text-red-500">*</span>
                  </FieldLabel>
                  <Input
                    {...field}
                    id="phone"
                    name="phone"
                    aria-invalid={fieldState.invalid}
                    placeholder="01xxxxxxxxx"
                    className="rounded-xl bg-transparent border-2 border-gray-200 text-gray-700 placeholder:text-gray-500/50 placeholder:font-base"
                  />
                  <FieldError
                    errors={[fieldState.error]}
                    className="font-medium text-xs"
                  />
                </Field>
              )}
            />

            {/* City */}
            <Controller
              name="city"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="gap-2">
                  <FieldLabel
                    htmlFor="city"
                    className="text-sm font-semibold text-gray-700 gap-0.5"
                  >
                    City <span className="text-red-500">*</span>
                  </FieldLabel>
                  <Input
                    {...field}
                    id="city"
                    name="city"
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter your email"
                    className="rounded-xl bg-transparent border-2 border-gray-200 text-gray-700 placeholder:text-gray-500/50 placeholder:font-base"
                  />
                  <FieldError
                    errors={[fieldState.error]}
                    className="font-medium text-xs"
                  />
                </Field>
              )}
            />
          </FieldGroup>

          <Separator className="bg-gray-200" />

          <DialogFooter>
            <DialogClose asChild>
              <Button className="px-4 py-2.5 gap-2 rounded-lg bg-transparent text-primary-main border-primary-main hover:bg-primary-50 ">
                Cancel
              </Button>
            </DialogClose>

            <Button
              type="submit"
              className="px-4 py-2.5 gap-2 bg-primary-main text-white rounded-lg hover:bg-primary-700 hover:text-white"
              disabled={isLoading}
            >
              {isLoading ? (
                <Spinner />
              ) : addressId ? (
                "Update"
              ) : (
                <>
                  <Plus className="size-4" />
                  Add
                </>
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
