"use client";

import Link from "next/link";
import StepIndicator from "./StepIndicator";
import {
  CardContent,
  CardDescription,
  CardFooter,
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
import MailIcon from "@/components/icons/MailIcon";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Spinner } from "@/components/ui/spinner";
import {
  ForgotPasswordData,
  forgotPasswordschema,
} from "@/schema/forgot-password";
import { forgotPasswordAction } from "@/actions/auth";
import { toast } from "sonner";
import { ForgotPasswordProps } from "@/types/props";

export default function ForgotPassword({ onNext }: ForgotPasswordProps) {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<ForgotPasswordData>({
    defaultValues: { email: "" },
    resolver: zodResolver(forgotPasswordschema),
  });

  const handleNextStep = async (data: ForgotPasswordData) => {
    const { isError, message } = await forgotPasswordAction(data);
    if (isError) {
      toast.error(message);
    } else {
      toast.success(message);
      onNext(data.email);
    }
  };

  return (
    <>
      <CardHeader className="p-0 text-center gap-2 mb-8">
        <CardTitle>
          <h1 className="text-2xl font-bold text-gray-900">Forgot Password?</h1>
        </CardTitle>
        <CardDescription className="text-base text-gray-600 font-medium">
          No worries, we&apos;ll send you a reset code
        </CardDescription>
      </CardHeader>

      <CardContent className="p-0 gap-8 mb-8">
        <StepIndicator currentStep={1} />

        <form
          onSubmit={handleSubmit(handleNextStep)}
          className="space-y-6"
          noValidate
        >
          <Controller
            name="email"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid} className="gap-2">
                <FieldLabel
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  Email Address
                </FieldLabel>
                <InputGroup className="p-0 h-auto rounded-xl bg-transparent border-2 border-gray-400/40 has-[>[data-align=inline-start]]:[&>input]:pl-4">
                  <InputGroupInput
                    {...field}
                    id="email"
                    name="email"
                    type="email"
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter your email address"
                    className="py-3 px-4 h-auto text-gray-700 placeholder:text-gray-700/50 placeholder:font-medium"
                  />
                  <InputGroupAddon className="text-gray-400">
                    <MailIcon className="size-5" />
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
            {isSubmitting ? <Spinner className="size-6" /> : "Send Reset Code"}
          </Button>

          <Link
            href="/signin"
            className="text-sm font-medium text-primary-main flex w-full items-center justify-center gap-2 hover:text-primary-700 transition-colors"
          >
            <ArrowLeft className="size-4" />
            Back to Sign In
          </Link>
        </form>
      </CardContent>

      <CardFooter className="pt-6 gap-2 justify-center border-t border-gray-200 text-base font-medium text-gray-600">
        Remember your password?
        <Link
          href="/signin"
          className="text-primary-main font-semibold hover:underline"
        >
          Sign In
        </Link>
      </CardFooter>
    </>
  );
}
