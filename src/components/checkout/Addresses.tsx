"use client";

import useCheckout from "@/hooks/useCheckout";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Address } from "@/types/addresses";
import { Label } from "../ui/label";
import { Field, FieldContent } from "../ui/field";
import AddressCard from "../addresses/Card";
import { Plus } from "lucide-react";

export default function Addresses({ addresses }: { addresses: Address[] }) {
  const { selectedAddress: value, setSelectedAddress } = useCheckout();

  return (
    <RadioGroup
      value={value || "new"}
      onValueChange={(v) => setSelectedAddress(v)}
    >
      {addresses.map((address) => (
        <Label
          key={address._id}
          htmlFor={address._id}
          className="cursor-pointer"
        >
          <Field
            orientation="horizontal"
            className={`pr-4 rounded-xl border-2  ${value === address._id ? "border-primary-500 bg-primary-50 shadow-sm" : "border-gray-200 bg-white hover:border-primary-400 hover:bg-primary-50/50"} transition-colors`}
          >
            <FieldContent>
              <AddressCard
                {...address}
                wrapperClasses="p-4 rounded-2xl flex gap-4"
              />
            </FieldContent>

            <RadioGroupItem
              value={address._id}
              id={address._id}
              className="self-center"
            />
          </Field>
        </Label>
      ))}

      <Label key="new" htmlFor="new" className="cursor-pointer">
        <Field
          orientation="horizontal"
          className={`pr-4 rounded-xl border-dashed border-2  ${value === "new" ? "border-primary-500 bg-linear-to-r from-green-50 to-gray-100 shadow-sm" : "border-gray-200 bg-white hover:border-primary-400 hover:bg-primary-50/50"} transition-colors`}
        >
          <FieldContent>
            <div className="p-4 rounded-2xl flex gap-4">
              <div className="shrink-0 size-11 rounded-xl bg-gray-200 text-gray-600 flex">
                <Plus className="size-5 m-auto" />
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="text-base font-bold text-gray-900 mb-1">
                  Use a different address
                </h3>
                <p className="text-sm font-medium text-gray-600">
                  Enter a new shipping address manually
                </p>
              </div>
            </div>
          </FieldContent>

          <RadioGroupItem value="new" id="new" className="self-center" />
        </Field>
      </Label>
    </RadioGroup>
  );
}
