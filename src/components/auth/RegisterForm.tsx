"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  Input,
  Checkbox,
  Progress,
  FieldDescription,
} from "@/components/ui";
import Link from "next/link";
import { UserPlus } from "lucide-react";
import { schema, RegisterSchema } from "@/schema/register";
import { getPasswordStrength } from "@/lib/auth";

export function RegisterForm() {
  const { control, watch, handleSubmit } = useForm<RegisterSchema>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
      terms: false,
    },
  });

  const password = watch("password");
  const strength = getPasswordStrength(password);

  const onSubmit = (data: RegisterSchema) => {
    console.log(data);
  };

  return (
    <Card className="px-6 pt-10 pb-14 gap-2 rounded-2xl">
      <CardHeader className="p-0 text-center gap-2">
        <CardTitle className="text-3xl font-semibold text-gray-700">
          Create Your Account
        </CardTitle>
        <CardDescription className="text-base text-gray-700 font-medium">
          Start your fresh journey with us today
        </CardDescription>
      </CardHeader>

      <CardContent className="px-0 pt-0 pb-2">
        <div className="py-8 flex items-center gap-2">
          <Button className="px-4 py-2 flex-1 bg-transparent border-gray-300 rounded-lg gap-2 text-gray-900 font-semibold text-base hover:bg-primary-50/50">
            <svg
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.625 8.18125C17.625 12.6031 14.5969 15.75 10.125 15.75C5.8375 15.75 2.375 12.2875 2.375 8C2.375 3.7125 5.8375 0.25 10.125 0.25C12.2125 0.25 13.9688 1.01562 15.3219 2.27813L13.2125 4.30625C10.4531 1.64375 5.32188 3.64375 5.32188 8C5.32188 10.7031 7.48125 12.8938 10.125 12.8938C13.1938 12.8938 14.3438 10.6938 14.525 9.55313H10.125V6.8875H17.5031C17.575 7.28437 17.625 7.66562 17.625 8.18125Z"
                fill="#E7000B"
              />
            </svg>
            Google
          </Button>
          <Button className="px-4 py-2 flex-1 bg-transparent border-gray-300 rounded-lg gap-2 text-gray-900 font-semibold text-base hover:bg-primary-50/50">
            <svg
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 8C18 3.58125 14.4187 0 10 0C5.58125 0 2 3.58125 2 8C2 11.75 4.58437 14.9 8.06875 15.7656V10.4438H6.41875V8H8.06875V6.94688C8.06875 4.225 9.3 2.9625 11.975 2.9625C12.4813 2.9625 13.3562 3.0625 13.7156 3.1625V5.375C13.5281 5.35625 13.2 5.34375 12.7906 5.34375C11.4781 5.34375 10.9719 5.84062 10.9719 7.13125V8H13.5844L13.1344 10.4438H10.9688V15.9406C14.9312 15.4625 18 12.0906 18 8Z"
                fill="#155DFC"
              />
            </svg>
            Facebook
          </Button>
        </div>

        <div className="flex items-center before:flex-1 before:h-0.5 before:bg-gray-300/30 after:flex-1 after:h-0.5 after:bg-gray-300/30">
          <span className="px-4 font-medium text-base text-gray-700">or</span>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">
          {/* Name */}
          <FieldGroup>
            <Controller
              name="name"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="gap-2">
                  <FieldLabel
                    htmlFor="name"
                    className="text-base font-medium text-gray-700"
                  >
                    Name*
                  </FieldLabel>
                  <Input
                    {...field}
                    id="name"
                    name="name"
                    aria-invalid={fieldState.invalid}
                    placeholder="Ali"
                    className="py-2.5 rounded-md bg-transparent border-gray-400/40 text-gray-700 placeholder:text-gray-700/50 placeholder:font-medium"
                  />
                  <FieldError
                    errors={[fieldState.error]}
                    className="font-medium text-xs"
                  />
                </Field>
              )}
            />
          </FieldGroup>
          {/* Email */}
          <FieldGroup>
            <Controller
              name="email"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="gap-2">
                  <FieldLabel
                    htmlFor="email"
                    className="text-base font-medium text-gray-700"
                  >
                    Email*
                  </FieldLabel>
                  <Input
                    {...field}
                    id="email"
                    name="email"
                    aria-invalid={fieldState.invalid}
                    placeholder="ali@example.com"
                    className="py-2.5 rounded-md bg-transparent border-gray-400/40 text-gray-700 placeholder:text-gray-700/50 placeholder:font-medium"
                  />
                  <FieldError
                    errors={[fieldState.error]}
                    className="font-medium text-xs"
                  />
                </Field>
              )}
            />
          </FieldGroup>
          {/* Password */}
          <FieldGroup>
            <Controller
              name="password"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="gap-2">
                  <FieldLabel
                    htmlFor="password"
                    className="text-base font-medium text-gray-700"
                  >
                    Password*
                  </FieldLabel>
                  <Input
                    {...field}
                    id="password"
                    name="password"
                    type="password"
                    aria-invalid={fieldState.invalid}
                    placeholder="create a strong password"
                    className="py-2.5 rounded-md bg-transparent border-gray-400/40 text-gray-700 placeholder:text-gray-700/50 placeholder:font-medium"
                  />
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
          </FieldGroup>
          {/* Confirm Password */}
          <FieldGroup>
            <Controller
              name="rePassword"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="gap-2">
                  <FieldLabel
                    htmlFor="rePassword"
                    className="text-base font-medium text-gray-700"
                  >
                    Confirm Password*
                  </FieldLabel>
                  <Input
                    {...field}
                    id="rePassword"
                    name="rePassword"
                    type="password"
                    aria-invalid={fieldState.invalid}
                    placeholder="confirm your password"
                    className="py-2.5 rounded-md bg-transparent border-gray-400/40 text-gray-700 placeholder:text-gray-700/50 placeholder:font-medium"
                  />
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
                    className="text-base font-medium text-gray-700"
                  >
                    Phone Number*
                  </FieldLabel>
                  <Input
                    {...field}
                    id="phone"
                    name="phone"
                    aria-invalid={fieldState.invalid}
                    placeholder="+20 123 456 7890"
                    className="py-2.5 rounded-md bg-transparent border-gray-400/40 text-gray-700 placeholder:text-gray-700/50 placeholder:font-medium"
                  />
                  <FieldError
                    errors={[fieldState.error]}
                    className="font-medium text-xs"
                  />
                </Field>
              )}
            />
          </FieldGroup>
          {/*  Terms of Service & Privacy Policy */}
          <FieldGroup>
            <Controller
              name="terms"
              control={control}
              render={({ field: { value, onChange }, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="gap-2">
                  <div className="flex items-center gap-3">
                    <Checkbox
                      checked={value}
                      onCheckedChange={onChange}
                      id="terms"
                      name="terms"
                      className="size-3.25 rounded-[2.5px] bg-white border-[#767676]"
                    />
                    <FieldLabel
                      htmlFor="terms"
                      className="inline-block text-gray-700 text-base font-medium"
                    >
                      I agree to the{" "}
                      <Link href="/terms" className="text-primary-main">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link href="/privacy" className="text-primary-main">
                        Privacy Policy
                      </Link>{" "}
                      *
                    </FieldLabel>
                  </div>
                  <FieldError
                    errors={[fieldState.error]}
                    className="font-medium text-xs"
                  />
                </Field>
              )}
            />
          </FieldGroup>

          <Button className="h-10 w-full gap-2 rounded-lg bg-primary-main text-white font-semibold text-base">
            <UserPlus className="fill-current" />
            Create My Account
          </Button>
        </form>
      </CardContent>

      <CardFooter className="pt-10 px-0 border-t border-gray-300/30 flex-col">
        <p className="text-base font-medium text-gray-700 text-center">
          Already have an account?{" "}
          <Link href="/login" className="text-primary-main">
            Sign In
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}
