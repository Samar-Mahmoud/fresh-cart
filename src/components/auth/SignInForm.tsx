"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
} from "@/components/ui/input-group";
import { Spinner } from "@/components/ui/spinner";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { schema, SignInData } from "@/schema/signin";
import MailIcon from "../icons/MailIcon";
import { useState } from "react";
import { toast } from "sonner";
import { signInAction } from "@/actions/auth";
import { signIn } from "next-auth/react";

export default function SignInForm() {
  const [viewPassword, setViewPassword] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInData>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
      signed: false,
    },
  });

  const onSubmit = async (data: SignInData) => {
    const res = await signInAction(data);

    if (res.isError) {
      toast.error("Wrong Credentials", {
        description:
          "Double-check your details and try again, or reset your password.",
      });
    } else {
      toast.success("Logged In Successfully", {
        description: "Welcome back!",
      });
      window.location.replace("/");
    }
  };

  return (
    <CardContent className="px-0 pt-0 pb-2 space-y-6">
      <div className="px-8 flex flex-col gap-3 mb-6">
        <Button
          className="h-auto px-4 py-3 bg-transparent border-gray-300 rounded-lg gap-3 text-gray-900 text-base hover:bg-primary-50/50"
          onClick={() => signIn("google", { redirectTo: "/" })}
        >
          <svg
            className="size-5"
            data-icon="inline-start"
            width="23"
            height="18"
            viewBox="0 0 23 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.8281 9.20391C19.8281 14.1785 16.4215 17.7188 11.3906 17.7188C6.56719 17.7188 2.67188 13.8234 2.67188 9C2.67188 4.17656 6.56719 0.28125 11.3906 0.28125C13.7391 0.28125 15.7148 1.14258 17.2371 2.56289L14.8641 4.84453C11.7598 1.84922 5.98711 4.09922 5.98711 9C5.98711 12.041 8.41641 14.5055 11.3906 14.5055C14.843 14.5055 16.1367 12.0305 16.3406 10.7473H11.3906V7.74844H19.691C19.7719 8.19492 19.8281 8.62383 19.8281 9.20391Z"
              fill="#FB2C36"
            />
          </svg>
          Continue with Google
        </Button>
        <Button
          className="h-auto px-4 py-3 bg-transparent border-gray-300 rounded-lg gap-3 text-gray-900 text-base hover:bg-primary-50/50"
          onClick={() => signIn("facebook", { redirectTo: "/" })}
        >
          <svg
            className="size-5"
            data-icon="inline-start"
            width="23"
            height="18"
            viewBox="0 0 23 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.25 9C20.25 4.02891 16.2211 0 11.25 0C6.27891 0 2.25 4.02891 2.25 9C2.25 13.2188 5.15742 16.7625 9.07734 17.7363V11.7492H7.22109V9H9.07734V7.81523C9.07734 4.75313 10.4625 3.33281 13.4719 3.33281C14.0414 3.33281 15.0258 3.44531 15.4301 3.55781V6.04688C15.2191 6.02578 14.85 6.01172 14.3895 6.01172C12.9129 6.01172 12.3434 6.5707 12.3434 8.02266V9H15.2824L14.7762 11.7492H12.3398V17.9332C16.7977 17.3953 20.25 13.602 20.25 9Z"
              fill="#155DFC"
            />
          </svg>
          Continue with Facebook
        </Button>
      </div>

      <div className="flex items-center before:flex-1 before:h-0.5 before:bg-gray-300/30 after:flex-1 after:h-0.5 after:bg-gray-300/30">
        <span className="px-4 font-medium text-sm text-gray-700 uppercase">
          or continue with email
        </span>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
        {/* Email */}
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
              <InputGroup className="h-13 rounded-xl bg-transparent border-gray-400/40 has-[>[data-align=inline-start]]:[&>input]:pl-4 has-[>[data-align=inline-end]]:[&>input]:pr-4">
                <InputGroupInput
                  {...field}
                  id="email"
                  name="email"
                  type="email"
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter your email"
                  className="p-0 text-gray-700 placeholder:text-gray-700/50 placeholder:font-medium"
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

        {/* Password */}
        <Controller
          name="password"
          control={control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid} className="gap-2">
              <FieldLabel
                htmlFor="password"
                className="text-sm font-medium text-gray-700 justify-between"
              >
                Password
                <Link href="/forgot-password" className="text-primary-main">
                  Forgot Password?
                </Link>
              </FieldLabel>
              <InputGroup className="h-13 rounded-xl bg-transparent border-gray-400/40 has-[>[data-align=inline-start]]:[&>input]:pl-4 has-[>[data-align=inline-end]]:[&>input]:pr-4">
                <InputGroupInput
                  {...field}
                  id="password"
                  name="password"
                  type={viewPassword ? "text" : "password"}
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
                  onClick={() => setViewPassword(!viewPassword)}
                >
                  {viewPassword ? (
                    <EyeOff className="size-5" />
                  ) : (
                    <Eye className="size-5" />
                  )}
                </InputGroupAddon>
              </InputGroup>
            </Field>
          )}
        />

        {/*  Keep signed in */}
        <Controller
          name="signed"
          control={control}
          render={({ field: { value, onChange }, fieldState }) => (
            <Field data-invalid={fieldState.invalid} className="gap-2">
              <div className="flex items-center gap-3">
                <Checkbox
                  checked={value}
                  onCheckedChange={onChange}
                  id="signed"
                  name="signed"
                  className="size-4 rounded-[2.5px] bg-white border-[#767676]"
                />
                <FieldLabel
                  htmlFor="signed"
                  className="inline-block text-gray-700 text-base font-medium"
                >
                  Keep me signed in
                </FieldLabel>
              </div>
              <FieldError
                errors={[fieldState.error]}
                className="font-medium text-xs"
              />
            </Field>
          )}
        />

        <Button
          className="h-auto w-full py-3 rounded-xl bg-primary-main text-white font-semibold text-lg"
          disabled={isSubmitting}
        >
          {isSubmitting && <Spinner data-icon="inline-start" />}
          Sign In
        </Button>
      </form>
    </CardContent>
  );
}
