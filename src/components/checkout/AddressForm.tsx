"use client";

import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import useCheckout from "@/hooks/useCheckout";
import { OrderData, schema } from "@/schema/order";
import { zodResolver } from "@hookform/resolvers/zod";
import { Building2, MapPin, Phone } from "lucide-react";
import { Controller, useForm } from "react-hook-form";

export default function AddressForm() {
  const { form: checkoutForm } = useCheckout();
  const addressForm = useForm<OrderData>({
    defaultValues: {
      city: "",
      details: "",
      phone: "",
    },
    resolver: zodResolver(schema),
  });
  const { control } = checkoutForm || addressForm;

  return (
    <form className="space-y-5" noValidate>
      {/* City */}
      <FieldGroup>
        <Controller
          name="city"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid} className="gap-2">
              <FieldLabel
                htmlFor="city"
                className="text-sm font-semibold text-gray-700"
              >
                City <span className="text-red-500">*</span>
              </FieldLabel>
              <InputGroup className="h-13 rounded-xl bg-transparent border-2 border-gray-200 has-[>[data-align=inline-start]]:[&>input]:pl-4">
                <InputGroupInput
                  {...field}
                  id="city"
                  name="city"
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter your email"
                  className="p-0 text-gray-700 placeholder:text-gray-500/50 placeholder:font-base"
                />
                <InputGroupAddon>
                  <div className="bg-gray-100 size-8 flex rounded-lg">
                    <Building2 className="text-gray-500 m-auto size-3.5" />
                  </div>
                </InputGroupAddon>
              </InputGroup>
              <FieldError
                errors={[fieldState.error]}
                className="font-medium text-xs"
              />
            </Field>
          )}
        />
      </FieldGroup>

      {/* Address */}
      <FieldGroup>
        <Controller
          name="details"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid} className="gap-2">
              <FieldLabel
                htmlFor="details"
                className="text-sm font-semibold text-gray-700"
              >
                Street Address
                <span className="text-red-500">*</span>
              </FieldLabel>
              <InputGroup className="h-13 rounded-xl bg-transparent border-2 border-gray-200 has-[>[data-align=inline-start]]:[&>input]:pl-4 has-[>[data-align=inline-end]]:[&>input]:pr-4">
                <InputGroupTextarea
                  {...field}
                  id="details"
                  name="details"
                  aria-invalid={fieldState.invalid}
                  placeholder="Street name, building number, floor, apartment..."
                  className="py-2.5 rounded-md bg-transparent border-gray-400/40 text-gray-700 placeholder:text-gray-700/50 placeholder:font-medium"
                />
                <InputGroupAddon>
                  <div className="bg-gray-100 size-8 flex rounded-lg">
                    <MapPin className="text-gray-500 m-auto size-3.5" />
                  </div>
                </InputGroupAddon>
              </InputGroup>
              <FieldError
                errors={[fieldState.error]}
                className="font-medium text-xs"
              />
            </Field>
          )}
        />
      </FieldGroup>

      {/* Phone Number */}
      <FieldGroup>
        <Controller
          name="phone"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid} className="gap-2">
              <FieldLabel
                htmlFor="phone"
                className="text-sm font-semibold text-gray-700"
              >
                Phone Number
                <span className="text-red-500">*</span>
              </FieldLabel>
              <InputGroup className="h-13 rounded-xl bg-transparent border-2 border-gray-200 has-[>[data-align=inline-start]]:[&>input]:pl-4 has-[>[data-align=inline-end]]:[&>input]:pr-4">
                <InputGroupInput
                  {...field}
                  id="phone"
                  name="phone"
                  aria-invalid={fieldState.invalid}
                  placeholder="01xxxxxxxxx"
                  className="p-0 text-gray-700 placeholder:text-gray-500/50 placeholder:font-base"
                />
                <InputGroupAddon>
                  <div className="bg-gray-100 size-8 flex rounded-lg">
                    <Phone className="text-gray-500 m-auto size-3.5" />
                  </div>
                </InputGroupAddon>
                <InputGroupAddon align="inline-end">
                  <span className="text-gray-400 text-xs font-medium">
                    Egyptian numbers only
                  </span>
                </InputGroupAddon>
              </InputGroup>
              <FieldError
                errors={[fieldState.error]}
                className="font-medium text-xs"
              />
            </Field>
          )}
        />
      </FieldGroup>
    </form>
  );
}
