"use client";

import StepIndicator from "./StepIndicator";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import { Spinner } from "@/components/ui/spinner";
import {
  ResetPasswordData,
  resetPasswordSchema,
} from "@/schema/forgot-password";
import { toast } from "sonner";
import { useState } from "react";
import { resetPasswordAction } from "@/actions/auth";
import { useRouter } from "next/navigation";
import { ResetPasswordProps } from "@/types/props";

export default function ResetPassword({ email }: ResetPasswordProps) {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<ResetPasswordData>({
    defaultValues: { password: "", rePassword: "" },
    resolver: zodResolver(resetPasswordSchema),
  });

  const [viewPassword, setViewPassword] = useState<("pass" | "rePass")[]>([]);

  const router = useRouter();

  const handleNextStep = async (data: ResetPasswordData) => {
    const { isError, message } = await resetPasswordAction({
      email,
      newPassword: data.password,
    });

    if (isError) {
      toast.error(message);
    } else {
      toast.success(message);
      router.push("/signin");
    }
  };

  const handleToggle = (field: "pass" | "rePass") => {
    if (viewPassword.includes(field)) {
      setViewPassword(viewPassword.filter((f) => f !== field));
    } else {
      setViewPassword([...viewPassword, field]);
    }
  };

  return (
    <>
      <CardHeader className="p-0 text-center gap-2 mb-8">
        <CardTitle>
          <h1 className="text-2xl font-bold text-gray-900">
            Create New Password
          </h1>
        </CardTitle>
        <CardDescription className="text-base text-gray-600 font-medium">
          Your new password must be different from previous passwords
        </CardDescription>
      </CardHeader>

      <CardContent className="p-0 gap-8 mb-8">
        <StepIndicator currentStep={3} />

        <form
          onSubmit={handleSubmit(handleNextStep)}
          className="space-y-6"
          noValidate
        >
          {/* Password */}
          <Controller
            name="password"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid} className="gap-2">
                <FieldLabel
                  htmlFor="password"
                  className="text-sm font-medium text-gray-700"
                >
                  New Password
                </FieldLabel>
                <InputGroup className="h-13 rounded-xl bg-transparent border-gray-400/40 has-[>[data-align=inline-start]]:[&>input]:pl-4 has-[>[data-align=inline-end]]:[&>input]:pr-4">
                  <InputGroupInput
                    {...field}
                    id="password"
                    name="password"
                    type={viewPassword.includes("pass") ? "text" : "password"}
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter your password"
                    className="py-2.5 rounded-md bg-transparent border-gray-400/40 text-gray-700 placeholder:text-gray-700/50 placeholder:font-medium"
                  />
                  <InputGroupAddon className="text-gray-400">
                    <svg
                      className="size-4.5"
                      width="20"
                      height="17"
                      viewBox="0 0 20 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 4V6H12V4C12 2.89687 11.1031 2 10 2C8.89687 2 8 2.89687 8 4ZM6 6V4C6 1.79063 7.79063 0 10 0C12.2094 0 14 1.79063 14 4V6C15.1031 6 16 6.89687 16 8V15C16 16.1031 15.1031 17 14 17H6C4.89688 17 4 16.1031 4 15V8C4 6.89687 4.89688 6 6 6Z"
                        fill="#99A1AF"
                      />
                    </svg>
                  </InputGroupAddon>
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

          {/* Confirm Password */}
          <Controller
            name="rePassword"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid} className="gap-2">
                <FieldLabel
                  htmlFor="password"
                  className="text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </FieldLabel>
                <InputGroup className="h-13 rounded-xl bg-transparent border-gray-400/40 has-[>[data-align=inline-start]]:[&>input]:pl-4 has-[>[data-align=inline-end]]:[&>input]:pr-4">
                  <InputGroupInput
                    {...field}
                    id="password"
                    name="password"
                    type={viewPassword.includes("rePass") ? "text" : "password"}
                    aria-invalid={fieldState.invalid}
                    placeholder="Confirm new password"
                    className="py-2.5 rounded-md bg-transparent border-gray-400/40 text-gray-700 placeholder:text-gray-700/50 placeholder:font-medium"
                  />
                  <InputGroupAddon className="text-gray-400">
                    <svg
                      className="size-4.5"
                      width="20"
                      height="17"
                      viewBox="0 0 20 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 4V6H12V4C12 2.89687 11.1031 2 10 2C8.89687 2 8 2.89687 8 4ZM6 6V4C6 1.79063 7.79063 0 10 0C12.2094 0 14 1.79063 14 4V6C15.1031 6 16 6.89687 16 8V15C16 16.1031 15.1031 17 14 17H6C4.89688 17 4 16.1031 4 15V8C4 6.89687 4.89688 6 6 6Z"
                        fill="#99A1AF"
                      />
                    </svg>
                  </InputGroupAddon>
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

          <Button
            className="px-4 py-3 h-auto w-full rounded-xl text-lg font-semibold shadow-sm bg-primary-main text-white hover:bg-primary-700 hover:text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? <Spinner className="size-6" /> : "Reset Password"}
          </Button>
        </form>
      </CardContent>
    </>
  );
}
