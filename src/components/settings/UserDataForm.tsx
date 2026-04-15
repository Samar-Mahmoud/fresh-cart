"use client";

import { Controller, useForm } from "react-hook-form";
import { Field, FieldError, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { schema, UserData } from "@/schema/settings";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { Save } from "lucide-react";
import { useState } from "react";
import { changeUserDataAction } from "@/actions/settings";
import { toast } from "sonner";
import { Spinner } from "../ui/spinner";

export default function UserDataForm() {
  const { control, handleSubmit } = useForm<UserData>({
    resolver: zodResolver(schema),
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleUpdateData = async (data: UserData) => {
    setIsLoading(true);

    const res = await changeUserDataAction(data);

    if (res.isError) {
      toast.error(res.message);
    } else {
      toast.success(res.message);
    }

    setIsLoading(false);
  };

  return (
    <form
      className="space-y-5"
      noValidate
      onSubmit={handleSubmit(handleUpdateData)}
    >
      {/* Name */}
      <Controller
        name="name"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid} className="gap-2">
            <FieldLabel
              htmlFor="name"
              className="text-base font-medium text-gray-700"
            >
              Name
            </FieldLabel>
            <Input
              {...field}
              id="name"
              name="name"
              aria-invalid={fieldState.invalid}
              placeholder="Ali"
              className="px-4 py-3 rounded-xl h-auto bg-transparent border-gray-400/40 text-gray-700 font-medium placeholder:text-gray-700/50 placeholder:font-medium"
            />
            <FieldError
              errors={[fieldState.error]}
              className="font-medium text-xs"
            />
          </Field>
        )}
      />

      {/* Email */}
      <Controller
        name="email"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid} className="gap-2">
            <FieldLabel
              htmlFor="email"
              className="text-base font-medium text-gray-700"
            >
              Email
            </FieldLabel>
            <Input
              {...field}
              id="email"
              name="email"
              type="email"
              aria-invalid={fieldState.invalid}
              placeholder="ali@example.com"
              className="px-4 py-3 rounded-xl h-auto bg-transparent border-gray-400/40 text-gray-700 font-medium placeholder:text-gray-700/50 placeholder:font-medium"
            />
            <FieldError
              errors={[fieldState.error]}
              className="font-medium text-xs"
            />
          </Field>
        )}
      />

      {/* Phone Number */}
      <Controller
        name="phone"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid} className="gap-2">
            <FieldLabel
              htmlFor="phone"
              className="text-base font-medium text-gray-700"
            >
              Phone Number
            </FieldLabel>
            <Input
              {...field}
              id="phone"
              name="phone"
              type="tel"
              aria-invalid={fieldState.invalid}
              placeholder="+20 123 456 7890"
              className="px-4 py-3 rounded-xl h-auto bg-transparent border-gray-400/40 text-gray-700 font-medium placeholder:text-gray-700/50 placeholder:font-medium"
            />
            <FieldError
              errors={[fieldState.error]}
              className="font-medium text-xs"
            />
          </Field>
        )}
      />

      <div className="pt-4">
        <Button
          className="h-auto rounded-xl gap-2 px-6 py-3 txet-base font-semibold bg-primary-main text-white hover:bg-primary-700 hover:text-white"
          disabled={isLoading}
        >
          {isLoading ? (
            <Spinner />
          ) : (
            <>
              <Save className="size-4" />
              Save Changes
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
