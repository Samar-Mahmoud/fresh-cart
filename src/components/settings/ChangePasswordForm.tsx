"use client";

import { Controller, useForm } from "react-hook-form";
import { Field, FieldDescription, FieldError, FieldLabel } from "../ui/field";
import { passwordSchema, PasswordT } from "@/schema/settings";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
import { getPasswordStrength } from "@/lib/auth";
import { useState } from "react";
import { toast } from "sonner";
import { changePasswordAction } from "@/actions/settings";
import { Spinner } from "../ui/spinner";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../ui/input-group";
import { Eye, EyeOff } from "lucide-react";
import useSignOut from "@/hooks/useSignOut";

export default function ChangePasswordForm() {
  const { control, handleSubmit, watch } = useForm<PasswordT>({
    defaultValues: {
      password: "",
      rePassword: "",
      currentPassword: "",
    },
    resolver: zodResolver(passwordSchema),
  });

  const password = watch("password");
  const strength = getPasswordStrength(password);

  const [isLoading, setIsLoading] = useState(false);
  const [viewPassword, setViewPassword] = useState<
    ("pass" | "new" | "rePass")[]
  >([]);

  const { isPending, handleSignOut } = useSignOut();

  const handleChangePassword = async (data: PasswordT) => {
    setIsLoading(true);

    const res = await changePasswordAction(data);

    if (res.isError) {
      toast.error(res.message);
    } else {
      toast.success(res.message);
      handleSignOut();
    }

    setIsLoading(false);
  };

  const handleToggle = (field: "pass" | "new" | "rePass") => {
    if (viewPassword.includes(field)) {
      setViewPassword(viewPassword.filter((f) => f !== field));
    } else {
      setViewPassword([...viewPassword, field]);
    }
  };

  return (
    <form
      className="space-y-5"
      noValidate
      onSubmit={handleSubmit(handleChangePassword)}
    >
      {/* Password */}
      <Controller
        name="currentPassword"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid} className="gap-2">
            <FieldLabel
              htmlFor="currentPassword"
              className="text-base font-medium text-gray-700"
            >
              Current Password
            </FieldLabel>
            <InputGroup className="p-0 h-auto rounded-xl bg-transparent border-gray-400/40 has-[>[data-align=inline-end]]:[&>input]:pr-4">
              <InputGroupInput
                {...field}
                id="currentPassword"
                name="currentPassword"
                type={viewPassword.includes("pass") ? "text" : "password"}
                aria-invalid={fieldState.invalid}
                placeholder="Enter your current password"
                className="px-4 py-3 h-auto bg-transparent border-gray-400/40 text-gray-700 placeholder:text-gray-700/50 placeholder:font-medium"
              />
              <InputGroupAddon
                className="text-gray-400 cursor-pointer hover:text-gray-500"
                align="inline-end"
                onClick={() => handleToggle("pass")}
              >
                {viewPassword.includes("pass") ? (
                  <EyeOff className="size-5" />
                ) : (
                  <Eye className="size-5" />
                )}
              </InputGroupAddon>
            </InputGroup>
            <FieldError
              errors={[fieldState.error]}
              className="font-medium text-xs"
            />
          </Field>
        )}
      />

      {/* New Password */}
      <Controller
        name="password"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid} className="gap-2">
            <FieldLabel
              htmlFor="password"
              className="text-base font-medium text-gray-700"
            >
              New Password
            </FieldLabel>
            <InputGroup className="p-0 h-auto rounded-xl bg-transparent border-gray-400/40 has-[>[data-align=inline-end]]:[&>input]:pr-4">
              <InputGroupInput
                {...field}
                id="password"
                name="password"
                type={viewPassword.includes("new") ? "text" : "password"}
                aria-invalid={fieldState.invalid}
                placeholder="Enter your new password"
                className="px-4 py-3 h-auto bg-transparent border-gray-400/40 text-gray-700 placeholder:text-gray-700/50 placeholder:font-medium"
              />
              <InputGroupAddon
                className="text-gray-400 cursor-pointer hover:text-gray-500"
                align="inline-end"
                onClick={() => handleToggle("new")}
              >
                {viewPassword.includes("new") ? (
                  <EyeOff className="size-5" />
                ) : (
                  <Eye className="size-5" />
                )}
              </InputGroupAddon>
            </InputGroup>
            <FieldError
              errors={[fieldState.error]}
              className="font-medium text-xs"
            />
            <div>
              <div className="flex gap-2 items-center">
                <Progress
                  value={strength.value}
                  className="h-1 flex-1 bg-gray-200"
                  bgColor={strength.color}
                />
                <span className="txet-sm font-medium text-gray-700">
                  {strength.level}
                </span>
              </div>
              <FieldDescription className="text-xs font-medium text-gray-500">
                Must be at least 8 characters with numbers and symbols
              </FieldDescription>
            </div>
          </Field>
        )}
      />

      {/* Confirm Password */}
      <Controller
        name="rePassword"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid} className="gap-2">
            <FieldLabel
              htmlFor="rePassword"
              className="text-base font-medium text-gray-700"
            >
              Confirm Password
            </FieldLabel>
            <InputGroup className="p-0 h-auto rounded-xl bg-transparent border-gray-400/40 has-[>[data-align=inline-end]]:[&>input]:pr-4">
              <InputGroupInput
                {...field}
                id="rePassword"
                name="rePassword"
                type={viewPassword.includes("rePass") ? "text" : "password"}
                aria-invalid={fieldState.invalid}
                placeholder="Confirm your new password"
                className="px-4 py-3 h-auto bg-transparent border-gray-400/40 text-gray-700 placeholder:text-gray-700/50 placeholder:font-medium"
              />
              <InputGroupAddon
                className="text-gray-400 cursor-pointer hover:text-gray-500"
                align="inline-end"
                onClick={() => handleToggle("rePass")}
              >
                {viewPassword.includes("rePass") ? (
                  <EyeOff className="size-5" />
                ) : (
                  <Eye className="size-5" />
                )}
              </InputGroupAddon>
            </InputGroup>
            <FieldError
              errors={[fieldState.error]}
              className="font-medium text-xs"
            />
          </Field>
        )}
      />

      <div className="pt-4">
        <Button
          className="h-auto rounded-xl gap-2 px-6 py-3 txet-base font-semibold bg-amber-600 text-white hover:bg-amber-700 hover:text-white"
          disabled={isLoading || isPending}
        >
          {isLoading || isPending ? (
            <Spinner />
          ) : (
            <>
              <svg
                width="30"
                height="26"
                viewBox="0 0 30 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 6V9H18V6C18 4.34531 16.6547 3 15 3C13.3453 3 12 4.34531 12 6ZM9 9V6C9 2.68594 11.6859 0 15 0C18.3141 0 21 2.68594 21 6V9C22.6547 9 24 10.3453 24 12V22.5C24 24.1547 22.6547 25.5 21 25.5H9C7.34531 25.5 6 24.1547 6 22.5V12C6 10.3453 7.34531 9 9 9Z"
                  fill="currentColor"
                />
              </svg>
              Change Password
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
