"use client";

import { useState } from "react";
import StepIndicator from "./StepIndicator";
import { VerifcationCodeProps } from "@/types/props";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CodeVerificationData,
  codeVerificationSchema,
} from "@/schema/forgot-password";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import ShieldIcon from "@/components/icons/ShieldIcon";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import { forgotPasswordAction, verifyResetCodeAction } from "@/actions/auth";

export default function VerifcationCode({
  email,
  onNext,
  onBack,
}: VerifcationCodeProps) {
  const [isResending, setIsResending] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<CodeVerificationData>({
    defaultValues: { resetCode: "" },
    resolver: zodResolver(codeVerificationSchema),
  });

  const handleCodeVerification = async (data: CodeVerificationData) => {
    const { isError, message } = await verifyResetCodeAction(data);
    if (isError) {
      toast.error(message);
    } else {
      onNext();
    }
  };

  const handleResend = async () => {
    setIsResending(true);

    const { isError, message } = await forgotPasswordAction({ email });
    if (isError) {
      toast.error(message);
    } else {
      toast.success(message);
      reset();
    }

    setIsResending(false);
  };

  return (
    <>
      <CardHeader className="p-0 text-center gap-2 mb-8">
        <CardTitle>
          <h1 className="text-2xl font-bold text-gray-900">Check Your Email</h1>
        </CardTitle>
        <CardDescription className="text-base text-gray-600 font-medium">
          Enter the 6-digit code sent to {email}
        </CardDescription>
      </CardHeader>

      <CardContent className="p-0 gap-8 mb-8">
        <StepIndicator currentStep={2} />

        <form
          onSubmit={handleSubmit(handleCodeVerification)}
          className="space-y-6"
          noValidate
        >
          <Controller
            name="resetCode"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid} className="gap-2">
                <FieldLabel
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  Verification Code
                </FieldLabel>
                <InputGroup className="p-0 h-auto rounded-xl bg-transparent border-2 border-gray-400/40 has-[>[data-align=inline-start]]:[&>input]:pl-4">
                  <InputGroupInput
                    {...field}
                    id="resetCode"
                    name="resetCode"
                    aria-invalid={fieldState.invalid}
                    placeholder="••••••"
                    className="py-4 px-5 h-auto text-gray-700 placeholder:text-gray-700/50 placeholder:text-2xl text-center text-2xl! tracking-[0.5em] font-mono"
                  />
                  <InputGroupAddon className="text-gray-400">
                    <ShieldIcon className="size-6" />
                  </InputGroupAddon>
                </InputGroup>
                <FieldError
                  errors={[fieldState.error]}
                  className="font-medium text-xs"
                />
              </Field>
            )}
          />

          <p className="text-sm text-center font-medium text-gray-600">
            Didn&apos;t receive the code?{" "}
            <Button
              className="text-primary-main font-medium bg-transparent p-0 h-auto hover:bg-transparent hover:text-primary-700"
              onClick={handleResend}
              disabled={isResending}
            >
              {isResending ? "Sending..." : "Resend Code"}
            </Button>
          </p>

          <Button
            className="px-4 py-3 h-auto w-full rounded-xl text-lg font-semibold shadow-sm bg-primary-main text-white hover:bg-primary-700 hover:text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? <Spinner className="size-6" /> : "Verify Code"}
          </Button>

          <Button
            className="text-sm font-medium text-gray-500 bg-transparent p-0 h-auto flex w-full items-center justify-center gap-2 hover:text-primary-main hover:bg-transparent transition-colors"
            onClick={onBack}
          >
            <ArrowLeft className="size-4" />
            Change email address
          </Button>
        </form>
      </CardContent>
    </>
  );
}
